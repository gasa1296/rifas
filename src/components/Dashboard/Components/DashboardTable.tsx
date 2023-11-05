import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
interface Props {
  head: { label: String; width?: string }[];
  options: any;
  Component: any;
  actions?: any;
  disableFilter?: boolean;
  title?: string;
  disablePagination?: boolean;
  pagination?: number | null;
  getRequest?: any;
  loading?: boolean;
}

export default function DashboardTable({
  head,
  options,
  Component,
  actions,
  disableFilter,
  title,
  pagination,
  getRequest,
  loading,
}: Props) {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambia a false si necesitas que se dispare más de una vez
  });

  useEffect(() => {
    if (inView) {
      pagination && getRequest && getRequest(pagination);
    }

    //eslint-disable-next-line
  }, [inView]);

  const getFilterOptions = () => {
    if (!search && !date.startDate && !date.endDate) return options;

    return options.filter((option: any) => {
      if (date.startDate && date.endDate) {
        const startDate = new Date(date.startDate).getTime();
        const endDate = new Date(date.endDate).getTime();
        const getOnlyDate = option.created_at.split("T")[0];
        const optionDate = new Date(getOnlyDate).getTime();

        if (startDate <= optionDate && optionDate <= endDate) {
          if (!search) return true;
        } else {
          return false;
        }
      }

      return Object.keys(option).some((key) => {
        if (typeof option[key] === "string") {
          return option[key].toLowerCase().includes(search.toLowerCase());
        }
        if (typeof option[key] === "number") {
          return option[key].toString().includes(search.toLowerCase());
        }
        return false;
      });
    });
  };

  const filterOptions = getFilterOptions();

  const onChangeDate = (e: any) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-3 background-dashboard mt-3 ">
      {title && <p className="mt-3 ps-3 details-Cartera ">{title}</p>}
      {!disableFilter && (
        <div className="d-md-flex justify-content-between px-3">
          <div className="d-flex align-items-center justify-content-center  mb-3">
            <h6 className="me-2">Fechas </h6>
            <div className="rounded-3 d-flex overflow-hidden ">
              <input
                name="startDate"
                type="date"
                value={date.startDate || ""}
                onChange={onChangeDate}
                className={`w-100 form-control rounded-0  `}
              />
              <input
                name="endDate"
                value={date.endDate || ""}
                onChange={onChangeDate}
                type="date"
                className={`w-100 form-control rounded-0  `}
              />
            </div>
          </div>

          <div className=" input-search mb-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              placeholder="Buscar "
            />

            <button className="btn btn-search" type="button" id="button-addon2">
              <BsSearch />
            </button>
          </div>
        </div>
      )}

      <div className="table-responsive  mx-3 ">
        <table className="table ">
          <thead className="container-cartera ">
            <tr className="">
              {head.map((item, index) => (
                <th
                  key={index}
                  className="select-DashboarRifas px-2 text-left"
                  scope="col"
                  style={item.width ? { width: item.width } : {}}
                >
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filterOptions.map((option: any, index: number) => (
              <Component
                actions={actions}
                key={index}
                option={option}
                index={index}
              />
            ))}
          </tbody>
        </table>
        {loading && <div style={{ height: "1000px" }} />}
        <div ref={ref} />
      </div>
    </div>
  );
}

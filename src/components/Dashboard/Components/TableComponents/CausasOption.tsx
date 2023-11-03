import { getStatusColor, getStatusValue } from "@/utils/getStatusColor";
import Image from "next/image";
import React from "react";
import LogoRifas from "@/assets/img/logoRifas.svg";
import { FaRegEdit } from "react-icons/fa";
export default function CausasOption({ option, index, actions }: any) {
  const { setShowEdit, setShowInfo } = actions;

  return (
    <tr
      className="border position-relative text-left "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row">
        <div
          className="position-absolute top-0 start-0 borderLateral-Rifas "
          style={{ backgroundColor: getStatusColor(option.status) }}
        ></div>
        <div className="  d-flex justify-content-start  align-items-center  icon ms-3 w-full">
          <Image
            width={50}
            height={50}
            src={option.image || LogoRifas}
            alt={option.name}
            className="rounded"
          />
        </div>
      </th>

      <td>
        <h6 className="text-cartera px-2 ">{option.name}</h6>
        <p className="parraf-cartera px-2">{option.descripcion}</p>
      </td>
      <td className="number-dashboardRifas ">
        {new Date(option.created_at).toLocaleDateString()}
      </td>
      <td className="number-dashboardRifas">{option.goal}</td>
      <td
        style={{ width: "110px", color: getStatusColor(option.status) }}
        className="number-dashboardRifas"
      >
        {getStatusValue(option.status)}
      </td>
      <td className="icon-dashboarRifas">
        <FaRegEdit
          onClick={() => {
            setShowEdit(option);
          }}
          color="#2161BD"
          size={18}
        />
      </td>
    </tr>
  );
}

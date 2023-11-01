import React, { useEffect, useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

import ModalCausasDashboard from "../../modal/ModalCausasDashboard";
import CausasOption from "../Components/TableComponents/CausasOption";
import DashboardTable from "../Components/DashboardTable";
import ModalEditCausa from "../../modal/ModalEditCausa";
import { getCategories } from "@/store/slices/raffles";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import HeaderDashboard from "../Components/HeaderDashboard";
import { useCauseDashboardStore } from "@/store/zustand/CauseDashboardStore";
export default function DashboardCausas() {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showScreenCausa, setShowScreenCausa] = useState(false);
  const handleClose = () => setShowScreenCausa(false);

  const { isLoading, cause, pagination, getCause } = useCauseDashboardStore(
    (state) => state
  );

  const router = useRouter();

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Fecha alta", width: "115px" },
    { label: "Monto" },
    { label: "Estado" },
    { label: "Acciones" },
  ];
  useEffect(() => {
    dispatch(getCategories({}) as any);
  }, []);

  return (
    <section className="">
      <ModalCausasDashboard
        showScreenCausa={showScreenCausa}
        setShowScreenCausa={setShowScreenCausa}
        handleClose={handleClose}
      />
      <ModalEditCausa show={showEdit} setShow={setShowEdit} />
      <HeaderDashboard
        screen="Causas"
        renderButton={() => (
          <button
            onClick={() => setShowScreenCausa(true)}
            className="me-3 button-user m-0 p-2  "
          >
            <FaHandHoldingHeart size={20} className="mx-2" />
            Nueva causa
          </button>
        )}
      />

      <DashboardTable
        loading={isLoading}
        head={head}
        options={cause}
        getRequest={(pagination: number) => {
          getCause(router.query.id as string, pagination);
        }}
        pagination={pagination}
        Component={CausasOption}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}

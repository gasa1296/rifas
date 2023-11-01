import React, { useEffect, useState } from "react";

import { FaGift } from "react-icons/fa";

import ModalPremioDashboard from "../../modal/ModalPremioDashboard";
import PremioOptions from "../Components/TableComponents/PremioOptions";
import DashboardTable from "../Components/DashboardTable";
import ModalInformationPremio from "../../modal/ModalInformationPremio";
import ModalEditPremio from "../../modal/ModalEditPremio";
import { useRouter } from "next/router";
import HeaderDashboard from "../Components/HeaderDashboard";
import { usePrizeStoreDashboard } from "@/store/zustand/PrizesDashboardStore";

export default function DashboardPremios() {
  const [showScreen, setShowScreen] = useState(false);
  const handleClose = () => setShowScreen(false);
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const prize = usePrizeStoreDashboard((state) => state.prize);
  const getPrize = usePrizeStoreDashboard((state) => state.getPrize);
  const pagination = usePrizeStoreDashboard((state) => state.pagination);

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Fecha alta", width: "115px" },
    { label: "Precio" },
    { label: "Estado" },
    { label: "Acciones", width: "115px" },
  ];

  const handleReset = () => {
    setShowScreen(false);
    setShowEdit(false);
    getPrize(router.query.id as string, 1);
  };

  return (
    <section className=" ">
      <ModalPremioDashboard
        showScreen={showScreen}
        setShowScreen={setShowScreen}
        handleClose={handleClose}
        handleReset={handleReset}
      />

      <HeaderDashboard
        screen="Premios"
        renderButton={() => (
          <button
            onClick={() => setShowScreen(true)}
            className="me-3 button-user m-0 p-2  "
          >
            <FaGift className="mx-2" />
            Nuevo premio
          </button>
        )}
      />

      <ModalEditPremio
        show={showEdit}
        setShow={setShowEdit}
        handleReset={handleReset}
      />
      <ModalInformationPremio show={showInfo} setShow={setShowInfo} />

      <DashboardTable
        head={head}
        options={prize}
        getRequest={(pagination: number) => {
          getPrize(router.query.id as string, pagination);
        }}
        pagination={pagination}
        Component={PremioOptions}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}

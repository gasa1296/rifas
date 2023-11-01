import React, { useEffect, useState } from "react";

import { FaGift } from "react-icons/fa";

import ModalPremioDashboard from "../../modal/ModalPremioDashboard";
import ModalInformationPremio from "../../modal/ModalInformationPremio";
import ModalEditPremio from "../../modal/ModalEditPremio";
import { useRouter } from "next/router";
import { usePrizeStoreDashboard } from "@/store/zustand/PrizesDashboardStore";
import HeaderDashboard from "@/components/Dashboard/Components/HeaderDashboard";
import DashboardTable from "@/components/Dashboard/Components/DashboardTable";
import PremioOptions from "@/components/Dashboard/Components/TableComponents/PremioOptions";

export default function ProfilePremio() {
  const [showScreen, setShowScreen] = useState(false);
  const handleClose = () => setShowScreen(false);
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const prizeUser = usePrizeStoreDashboard((state) => state.prizeUser);
  const getPrizeUser = usePrizeStoreDashboard((state) => state.getPrizeUser);
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
    getPrizeUser(1);
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
        profile
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
        options={prizeUser}
        getRequest={(pagination: number) => {
          getPrizeUser(pagination);
        }}
        pagination={pagination}
        Component={PremioOptions}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}

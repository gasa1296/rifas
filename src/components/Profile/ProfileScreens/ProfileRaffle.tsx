import React, { useState } from "react";

import ModalEditRifas from "../../modal/ModalEditRifas";
import ModalInformationRifa from "../../modal/ModalInformationRifa";
import { useRaffleStoreDashboard } from "@/store/zustand/DashboardStore";
import ModalNewRaffleDashboard from "../../modal/ModalNewRaffleDashboard";
import DashboardTable from "@/components/Dashboard/Components/DashboardTable";
import RifaOption from "@/components/Dashboard/Components/TableComponents/RifaOption";
import HeaderDashboard from "@/components/Dashboard/Components/HeaderDashboard";
import RifaOptionProfile from "@/components/Dashboard/Components/TableComponents/RifaOptionProfile";

export default function ProfileRaffle() {
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showModalRaffle, setShowModalRaffle] = useState(false);

  const handleClose = () => setShowModalRaffle(false);
  const rafflePurchase = useRaffleStoreDashboard(
    (state) => state.rafflePurchase
  );
  const getRafflesPurchase = useRaffleStoreDashboard(
    (state) => state.getRafflesPurchase
  );
  const pagination = useRaffleStoreDashboard((state) => state.paginacion);

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Recaudado" },
    { label: "Fecha Rifa", width: "115px" },
    { label: "Precio boleto", width: "115px" },
    { label: "Estado" },
  ];

  return (
    <section className="">
      <HeaderDashboard screen="Rifas" profile />

      <ModalEditRifas show={showEdit} setShow={setShowEdit} />
      <ModalInformationRifa show={showInfo} setShow={setShowInfo} />
      <ModalNewRaffleDashboard
        showModalRaffle={showModalRaffle}
        handleClose={handleClose}
      />

      <DashboardTable
        head={head}
        options={rafflePurchase}
        Component={RifaOptionProfile}
        actions={{ setShowEdit, setShowInfo }}
        getRequest={(pagination: number) => {
          getRafflesPurchase(pagination);
        }}
        pagination={pagination}
      />
    </section>
  );
}

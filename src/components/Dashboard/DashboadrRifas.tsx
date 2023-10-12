import React, { useState, useEffect } from "react";

import { FaImage } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

import RifaOption from "./Components/RifaOption";
import DashboardTable from "./Components/DashboardTable";
import ModalEditRifas from "../modal/ModalEditRifas";
import ModalInformationRifa from "../modal/ModalInformationRifa";
import { useRouter } from "next/router";
import { useRaffleStoreDashboard } from "@/store/zustand/DashboardStore";
import ModalNewRaffleDashboard from "../modal/ModalNewRaffleDashboard";
import { set } from "react-hook-form";

export default function DashboadrRifas() {
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showModalRaffle, setShowModalRaffle] = useState(false);
  const router = useRouter();

  const handleClose = () => setShowModalRaffle(false);
  const isLoading = useRaffleStoreDashboard((state) => state.isLoading);
  const error = useRaffleStoreDashboard((state) => state.error);
  const raffle = useRaffleStoreDashboard((state) => state.raffle);
  const getRaffle = useRaffleStoreDashboard((state) => state.getRaffle);

  const options = [
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      recaudado: "$ 28,980.00",
      fecha: "04-10-2023",
      precio: "$890.00",
      estado: "Vigente",
    },

    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      recaudado: "$ 28,980.00",
      fecha: "07-12-2023",
      precio: "$960.00",
      estado: "En proceso",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      recaudado: "$ 28,980.00",
      fecha: "04-10-2022",
      precio: "$960.00",
      estado: "Cancelada",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      recaudado: "$ 28,980.00",
      fecha: "07-10-2022",
      precio: "$4.960.00",
      estado: "Finalizada",
    },
  ];

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Recaudado" },
    { label: "Fecha Rifa", width: "115px" },
    { label: "Precio boleto", width: "115px" },
    { label: "Estado" },
    { label: "Acciones" },
  ];

  useEffect(() => {
    getRaffle(router.query.id as string)
  }, []);

  console.log(raffle)

  return (
    <section className="">
      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ">
        <div className=" d-block d-md-flex mt-2 ">
          <p className="title-dashboard mx-2 ">APAC, A.C. /</p>
          <p className="title-dashboard  ">Rifas</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className=" p-2 me-3 button-dashboard m-0 " onClick={() => router.push("/dashboard/")}>
            <MdKeyboardArrowLeft />
            Mis asociaciones
          </button>
          <button className="me-3 button-user  m-0 p-2  " onClick={() => { setShowModalRaffle(true); }} >
            <AiFillDollarCircle size={20} className="mx-2" />
            Nueva Rifa
          </button>
        </div>
      </div>

      <ModalEditRifas show={showEdit} setShow={setShowEdit} />
      <ModalInformationRifa show={showInfo} setShow={setShowInfo} />
      <ModalNewRaffleDashboard showModalRaffle={showModalRaffle} handleClose={handleClose} />

      <DashboardTable
        head={head}
        options={raffle}
        Component={RifaOption}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}

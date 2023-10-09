import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  FaGift,
  FaImage,
  FaRegEdit,
  FaInfoCircle,
  FaDownload,
} from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ModalPremioDashboard from "../modal/ModalPremioDashboard";
import PremioOptions from "./Components/PremioOptions";
import DashboardTable from "./Components/DashboardTable";
import ModalInformationPremio from "../modal/ModalInformationPremio";
import ModalEditPremio from "../modal/ModalEditPremio";

export default function DashboardPremios() {
  const [showScreen, setShowScreen] = useState(false);
  const handleClose = () => setShowScreen(false);

  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const options = [
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "iPhone de última generación",
      informacion:
        "iPhone un dispositivo de vanguardia que combina la elegancia del diseño con el rendimiento excepcional, cuenta con lo último en tecnología.",
      fecha: "04-10-2023",
      precio: "$890.00",
      estado: "Vigente",
    },

    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "Televisión Samsung de 50 pulgadas OLED",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "07-12-2023",
      precio: "$960.00",
      estado: "En proceso",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "iPad Pro 16 pulgadas chip M1",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "04-10-2022",
      precio: "$960.00",
      estado: "Cancelada",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "iPhone de última generación",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "07-10-2022",
      precio: "$4.960.00",
      estado: "Finalizada",
    },
  ];

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Fecha alta", width: "115px" },
    { label: "Precio" },
    { label: "Estado" },
    { label: "Acciones", width: "115px" },
  ];

  return (
    <section className=" ">
      <ModalPremioDashboard
        showScreen={showScreen}
        setShowScreen={setShowScreen}
        handleClose={handleClose}
      />

      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ">
        <div className=" d-block d-md-flex mt-2 ">
          <p className="title-dashboard mx-2  ">APAC, A.C. /</p>
          <p className="title-dashboard ">Premios</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className=" p-2 me-3 button-dashboard m-0 ">
            <MdKeyboardArrowLeft />
            Mis asociaciones{" "}
          </button>
          <button
            onClick={() => {
              setShowScreen(true);
            }}
            className="me-3 button-user m-0 p-2  "
          >
            <FaGift className="mx-2" />
            Nuevo premio{" "}
          </button>
        </div>
      </div>

      <ModalEditPremio show={showEdit} setShow={setShowEdit} />
      <ModalInformationPremio show={showInfo} setShow={setShowInfo} />

      <DashboardTable
        head={head}
        options={options}
        Component={PremioOptions}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}

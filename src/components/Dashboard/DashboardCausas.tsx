import React, { use, useEffect, useState } from "react";
import {
  FaBriefcase,
  FaImage,
  FaRegEdit,
  FaInfoCircle,
  FaDownload,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineMenu,
  AiFillDollarCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ModalCausasDashboard from "../modal/ModalCausasDashboard";
import CausasOption from "./Components/CausasOption";
import DashboardTable from "./Components/DashboardTable";
import ModalEditCausa from "../modal/ModalEditCausa";
import ModalInformationCausa from "../modal/ModalInformationCausa";
import { useCauseStoreDashboard } from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";
export default function DashboardCausas() {
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showScreenCausa, setShowScreenCausa] = useState(false);
  const handleClose = () => setShowScreenCausa(false);

  const isLoading = useCauseStoreDashboard((state) => state.isLoading);
  const error = useCauseStoreDashboard((state) => state.error);
  const cause = useCauseStoreDashboard((state) => state.cause);
  const getCause = useCauseStoreDashboard((state) => state.getCause);
  const router = useRouter();

  useEffect(() => {

    getCause()

  }, []);

  const options = [
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "iPhone un dispositivo de vanguardia que combina la elegancia del diseño con el rendimiento excepcional, cuenta con lo último en tecnología.",
      fecha: "04-10-2023",
      precio: "$890.00",
      estado: "Vigente",
    },

    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "07-12-2023",
      precio: "$960.00",
      estado: "En proceso",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "04-10-2022",
      precio: "$960.00",
      estado: "Cancelada",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
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
    { label: "Monto" },
    { label: "Estado" },
    { label: "Acciones" },
  ];

  return (
    <section className="">
      <ModalCausasDashboard
        showScreenCausa={showScreenCausa}
        setShowScreenCasusa={setShowScreenCausa}
        handleClose={handleClose}
      />

      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ">
        <div className=" d-block d-md-flex mt-2 ">
          <p className="title-dashboard mx-2  ">APAC, A.C. /</p>
          <p className="title-dashboard  ">Causas</p>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <button className=" p-2 me-3 button-dashboard m-0 " onClick={() => router.push("/dashboard/")}>
            <MdKeyboardArrowLeft />
            Mis asociaciones{" "}
          </button>
          <button
            onClick={() => {
              setShowScreenCausa(true);
            }}
            className="me-3 button-user m-0 p-2  "
          >
            <FaHandHoldingHeart size={20} className="mx-2" />
            Nueva causa{" "}
          </button>
        </div>
      </div>

      <ModalEditCausa show={showEdit} setShow={setShowEdit} />
      <ModalInformationCausa show={showInfo} setShow={setShowInfo} />

      <DashboardTable
        head={head}
        options={options}
        Component={CausasOption}
        actions={{ setShowEdit, setShowInfo }}
      />
    </section>
  );
}

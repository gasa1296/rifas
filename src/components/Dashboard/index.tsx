import React, { useState } from "react";
import Image from "next/image";
import FondoProfile from "../../assets/img/Contacto-bg.jpg";
import {
  AiOutlineMenu,
  AiFillDollarCircle,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaHandHoldingHeart,
  FaGift,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { BsWindowSidebar } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import DashboardResumen from "./DashboardResumen";
import DashboadrRifas from "./DashboadrRifas";
import DashboardCausas from "./DashboardCausas";
import DashboardPremios from "./DashboardPremios";
import DashboardCartera from "./DashboardCartera";
import DashboardMicrositio from "./DashboardMicrositio";
import DasboardUsers from "./DasboardUsers";
import DashboardProfile from "./DashboardProfile";

export default function Dashboard() {
  const [showScreen, setShowScreen] = useState<string>("1");

  const options = [
    {
      label: "Resumen",
      value: "1",
      icon: <AiOutlineMenu />,
    },
    {
      label: "Rifas",
      value: "2",
      icon: <AiFillDollarCircle />,
    },
    {
      label: "Causas",
      value: "3",
      icon: <FaHandHoldingHeart />,
    },
    {
      label: "Premios",
      value: "4",
      icon: <FaGift />,
    },
    {
      label: "Cartera",
      value: "5",
      icon: <FaBriefcase />,
    },
    {
      label: "Micrositio",
      value: "6",
      icon: <BsWindowSidebar />,
    },
    {
      label: "Usuarios",
      value: "7",
      icon: <FaUsers />,
    },
    {
      label: "Perfil",
      value: "8",
      icon: <AiOutlineUser />,
    },
  ];

  const optionScreen: any = {
    "1": DashboardResumen,
    "2": DashboadrRifas,
    "3": DashboardCausas,
    "4": DashboardPremios,
    "5": DashboardCartera,
    "6": DashboardMicrositio,
    "7": DasboardUsers,
    "8": DashboardProfile,
  };

  const Component = optionScreen[showScreen];

  return (
    <section className="mx-0 mx-md-4 position-relative    ">

      <div className="position-absolute top-0 overflow-hidden mx-auto mt-2">
        <Image src={FondoProfile} alt="fondo-Profile" className="w-100  fondo-Profile" />
      </div>
      <div className=" mx-0 mx-lg-5 mt-3 mt-lg-2 position-relative pt-4  text-center ">
        <h3 className="contacto w-100  mt-2 "> Mi Cuenta</h3>
      </div>


      <section className="row d-flex z-3 mt-5 pt-4 pt-md-0 container-Dashboard justify-content-between   m-0">
        <div className="col-12 col-lg-2 mt-3  container-sidebar px-3">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => setShowScreen(option.value)}
              className="d-flex justify-content-start mx-auto   py-2   container-boxSidebar my-2 "
            >
              <p className="m-0 ms-2 "> {option.icon} </p>
              <p className=" m-0 ms-2">{option.label}</p>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-10 mt-2 mt-md-0   m-0">
          <div className="">
            <Component setShowScreen={setShowScreen} />
          </div>
        </div>
      </section>
    </section>
  );
}

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

import DashboardResumen from "./DashboardScreens/DashboardResumen";
import DashboadrRifas from "./DashboardScreens/DashboadrRifas";
import DashboardCausas from "./DashboardScreens/DashboardCausas";
import DashboardPremios from "./DashboardScreens/DashboardPremios";
import DashboardCartera from "./DashboardScreens/DashboardCartera";
import DashboardMicrositio from "./DashboardScreens/DashboardMicrositio";
import DasboardUsers from "./DashboardScreens/DasboardUsers";
import DashboardProfile from "./DashboardScreens/DashboardProfile";

export const optionsSidebar = [
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

export const optionScreen: any = {
  "1": DashboardResumen,
  "2": DashboadrRifas,
  "3": DashboardCausas,
  "4": DashboardPremios,
  "5": DashboardCartera,
  "6": DashboardMicrositio,
  "7": DasboardUsers,
  "8": DashboardProfile,
};

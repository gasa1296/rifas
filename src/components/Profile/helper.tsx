import {
  AiOutlineMenu,
  AiFillDollarCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { FaGift, FaBriefcase } from "react-icons/fa";

import ProfileResume from "./ProfileScreens/ProfileResumen";
import ProfileCartera from "./ProfileScreens/ProfileCartera";
import ProfilePerfil from "./ProfileScreens/ProfilePerfil";
import ProfileRaffle from "./ProfileScreens/ProfileRaffle";
import ProfilePremio from "./ProfileScreens/ProfilePremios";

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
    label: "Premios",
    value: "3",
    icon: <FaGift />,
  },
  {
    label: "Cartera",
    value: "4",
    icon: <FaBriefcase />,
  },
  {
    label: "Perfil",
    value: "5",
    icon: <AiOutlineUser />,
  },
];

export const optionScreen: any = {
  "1": ProfileResume,
  "2": ProfileRaffle,
  "3": ProfilePremio,
  "4": ProfileCartera,
  "5": ProfilePerfil,
};

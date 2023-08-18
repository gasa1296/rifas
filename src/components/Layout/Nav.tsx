import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo-rifa-menu.png";
import ModalLogin from "../modal/ModalLogin";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setLogout } from "@/store/slices/auth";
import ResponsiveNav from "./ResponsiveNav";

export default function Nav({ home }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticated, profile } = useSelector(selectAuthState);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { label: "Rifas", path: "/rifas/allRifas" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Ingreso", path: "/", onClick: handleShow },
    { label: "Registro", path: "/registro" },
  ];
  const authOptions = [
    { label: "Rifas", path: "/rifas/allRifas" },
    { label: "Donaciones", path: "/donaciones" },
    { label: "Crear Rifa", path: "/rifas/crear_rifas" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Cerrar sesion", path: "/", onClick: () => dispatch(setLogout()) },
  ];

  const selectOptions = authenticated ? authOptions : options;

  return (
    <div className="position-absolute top-0 w-100 ">
      <ModalLogin show={show} handleClose={handleClose} />
      <nav className="d-md-flex justify-content-between align-items-center mt-2">
        <div
          className="mx-2"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="fondo" className="img-fluid" />
        </div>
        <ResponsiveNav selectOptions={selectOptions} />

        <ul className="d-none  home-navbar d-md-flex  list-unstyled text-secondary align-items-center justify-content-center m-0">
          {selectOptions.map((option, index) => (
            <li
              key={index}
              className=" mx-4 my-2"
              style={{ cursor: "pointer" }}
              onClick={() =>
                option.onClick ? option.onClick() : router.push(option.path)
              }
            >
              {option.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

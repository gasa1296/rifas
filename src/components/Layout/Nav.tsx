import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/Logo.svg";
import ModalLogin from "../modal/ModalLogin";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setLogout } from "@/store/slices/auth";

export default function Nav({ home }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticated } = useSelector(selectAuthState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="position-absolute top-0 w-100 ">
      <ModalLogin show={show} handleClose={handleClose} />
      <nav
        className={` d-md-flex justify-content-between   align-items-center ${
          home ? "bg-body-secondary" : ""
        } py-2`}
      >
        <div
          className="mx-5  mw-75 "
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="fondo" className=" mx-auto d-block" />
        </div>
        <ul className=" d-md-flex  list-unstyled text-secondary align-items-center justify-content-center m-0">
          <li
            className=" mx-4 "
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/rifas")}
          >
            Rifas
          </li>
          <li
            className=" mx-4"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/donaciones")}
          >
            Donaciones
          </li>
          <li
            className="mx-4"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/rifas/crear_rifas")}
          >
            Crear Rifa
          </li>
          <li
            className="mx-4 "
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/nosotros")}
          >
            Nosotros
          </li>
          {authenticated ? (
            <li
              className="mx-4"
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(setLogout())}
            >
              Cerrar sesion
            </li>
          ) : (
            <>
              {" "}
              <li
                className="mx-4"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              >
                Ingreso
              </li>
              <li
                className="mx-4"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/registro")}
              >
                Registro
              </li>{" "}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

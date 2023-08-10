import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo-rifa-menu.png";
import ModalLogin from "../modal/ModalLogin";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setLogout } from "@/store/slices/auth";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav({ home }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticated, profile } = useSelector(selectAuthState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);

  return (
    <div className="position-absolute top-0 w-100 ">
      <ModalLogin show={show} handleClose={handleClose} />
      <nav
        className={` d-md-flex justify-content-between   align-items-center ${home ? "bg-body-light" : ""
          } mt-1`}
      >
        <div
          className="mx-5  mw-75 "
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="fondo" className=" mx-auto d-block" />
        </div>
        <AiOutlineMenu
          className="d-flex d-md-none position-absolute top-0 end-0 mx-4 mt-4"
          size={28}
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        />
        {open && (
          <div className="home-navbar d-md-none position-absolute z-1 flex-column w-100 py-2 text-center top-75 start-0 mt-3  bg-light  shadow p-3 mb-5 bg-body-tertiary">
            <ul className="  list-unstyled text-secondary align-items-center justify-content-center m-0">
              <li
                className=" mx-4 my-2"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/rifas/allRifas")}
              >
                Rifas
              </li>

              {authenticated && (
                <>
                  <li
                    className=" mx-4 my-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/donaciones")}
                  >
                    Donaciones
                  </li>
                  {profile?.role === 1 && (
                    <li
                      className="mx-4 my-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/rifas/crear_rifas")}
                    >
                      Crear Rifa
                    </li>
                  )}
                </>
              )}

              <li
                className="mx-4  my-2"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/nosotros")}
              >
                Nosotros
              </li>

              {authenticated ? (
                <li
                  className="mx-4 my-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(setLogout())}
                >
                  Cerrar sesion
                </li>
              ) : (
                <>
                  {" "}
                  <li
                    className="mx-4 my-2"
                    style={{ cursor: "pointer" }}
                    onClick={handleShow}
                  >
                    Ingreso
                  </li>
                  <li
                    className="mx-4 my-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/registro")}
                  >
                    Registro
                  </li>{" "}
                </>
              )}
            </ul>
          </div>
        )}
        <ul className="d-none  home-navbar d-md-flex  list-unstyled text-secondary align-items-center justify-content-center m-0">
          <li
            className=" mx-4 "
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/rifas/allRifas")}
          >
            Rifas
          </li>

          {authenticated && (
            <>
              <li
                className=" mx-4"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/donaciones")}
              >
                Donaciones
              </li>
              {profile?.role === 1 && (
                <li
                  className="mx-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/rifas/crear_rifas")}
                >
                  Crear Rifa
                </li>
              )}
            </>
          )}

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

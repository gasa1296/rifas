import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo-rifa-footer.png";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuthState } from "@/store/slices/auth";

export default function Footer() {
  const router = useRouter();

  const { authenticated } = useSelector(selectAuthState);

  const routeCreate = authenticated ? "/rifas/crear_rifas" : "/registro";
  const routeRifas = authenticated ? "/rifas" : "/registro";
  const routeDonations = authenticated ? "/donaciones" : "/registro";
  return (
    <div>
      <footer className=" mt-5 footer-fondo p-4  ">
        <div className="d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5">
          <div className=" mw-100   ">
            <Image src={logo} alt="fondo" className=" " />
          </div>
          <div className="">
            <h6 className=".footer-title mt-5 mt-md-0 ">¡Rífate!</h6>
            <ul className=" list-unstyled footer-information ">
              <li
                className="listas-footer"
                onClick={() => router.push(routeCreate)}
              >
                Inicia una rifa
              </li>
              <li
                className="listas-footer"
                onClick={() => router.push(routeRifas)}
              >
                Comprar boletos
              </li>
              <li
                className="listas-footer"
                onClick={() => router.push(routeDonations)}
              >
                Haz una donacion
              </li>
              <li
                className="listas-footer"
                onClick={() => router.push("/registro")}
              >
                Crear una cuenta
              </li>
            </ul>
          </div>
          <div>
            <h6 className=".footer-title">Nosotros</h6>
            <ul className=" list-unstyled footer-information">
              <li
                onClick={() => router.push("/nosotros")}
                className="button-contacto"
              >
                Conocenos
              </li>
              <li
                onClick={() => router.push("/faq")}
                className="button-contacto"
              >
                ¿Como funciona?
              </li>
              <li
                onClick={() => router.push("/contacto")}
                className="button-contacto"
              >
                {" "}
                ¿Necesitas ayuda?
              </li>
            </ul>
          </div>{" "}
          <div>
            <h6 className=".footer-title">Legal</h6>
            <ul className=" list-unstyled footer-information">
              <li
                className="button-contacto"
                onClick={() => router.push("/terminosCondiciones")}
              >
                Terminos y condiciones
              </li>
              <li
                className="button-contacto"
                onClick={() => router.push("/privacyNotice")}
              >
                Aviso de privacidad
              </li>
              <li
                className="button-contacto"
                onClick={() => router.push("/frequentQuestions")}
              >
                Preguntan frecuentes
              </li>
              <li
                onClick={() => router.push("/contacto")}
                className="button-contacto"
              >
                Reportar rifa
              </li>
            </ul>
          </div>{" "}
          <div>
            <h6 className=".footer-title">Redes</h6>
            <ul className=" list-unstyled footer-information">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <div className="mx-5 text-secondary fs-6 ">
          <p className="m-0 footer-text ">Escribenos</p>
          <p className="footer-text">Contacto@rifaconcausa.org</p>
        </div>

        <div className=" border-bottom border-1 border-black opacity-25 w-auto mx-5  "></div>
        <div className="d-block d-lg-flex justify-content-between mt-3">
          <p className="mx-5 footer-text">
            2023. Rifa con Causa Todos los derechos reservados
          </p>
          <p className="footer-text d-flex ">
            Creado por <p className="mx-2 fw-bold">Keep in Touch</p> ¡hacemos
            que las cosas sucedan!
          </p>
        </div>
      </footer>
    </div>
  );
}

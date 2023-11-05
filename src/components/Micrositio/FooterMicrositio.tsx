import React from "react";
import Image from "next/image";
import LogoRifas from "@/assets/img/logoRifas.svg";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function FooterMicrositio() {
  const site = useAsociatonsStoreDashboard((state) => state.site);
  console.log("TEst", site);
  return (
    <section>
      <footer className="  footer-fondo p-4  ">
        <div className="d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5">
          <div className=" mw-100   ">
            <Image
              width={50}
              height={50}
              src={site?.image || LogoRifas}
              alt="fondo"
              className=" "
              style={{ width: "80px", height: "80px" }}
            />
            <p
              style={{ color: "#784B5F" }}
              className="text-center fs-3 mt-2 fw-medium "
            >
              {site?.association_name}
            </p>
          </div>

          <div className=" ">
            <h6 className=".footer-title mt-5 mt-md-0 ">Dirección</h6>
            <ul className=" list-unstyled footer-information ">
              <li className="listas-footer"> {site?.address} </li>
              <li className="listas-footer">
                {site?.state} - {site?.province}
              </li>
            </ul>
          </div>
          <div>
            <h6 className=".footer-title">Contacto</h6>
            <ul className=" list-unstyled footer-information">
              <li className="button-contacto">
                <FaPhone
                  color=" #8D8D8D"
                  size={20}
                  className="me-2 position-relative 2"
                />
                {site?.phone}
              </li>
              <li className="button-contacto">
                <FaEnvelope
                  color=" #8D8D8D"
                  size={20}
                  className="me-2 position-relative 2"
                />
                {site?.email}
              </li>
            </ul>
          </div>
          <div className=" mw-100   ">
            {/* <Image src={logo} alt="fondo" className="  " /> */}
          </div>
        </div>
        <div className=" border-bottom border-1 border-black opacity-25 w-auto mx-5  "></div>
        <div className="d-block d-md-flex justify-content-between mt-3">
          <p className="mx-5 footer-text">
            2023. Rifa con Causa Todos los derechos reservados
          </p>
          <p className="footer-text d-flex ">
            Creado por <p className="mx-2 fw-bold">Keep in Touch</p> ¡hacemos
            que las cosas sucedan!
          </p>
        </div>
      </footer>
    </section>
  );
}

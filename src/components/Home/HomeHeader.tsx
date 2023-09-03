import React from "react";
import Header from "@/assets/img/Header-bg.jpg";
import historiasFondo from "@/assets/img/Historias-img.jpg";
import rifate from "@/assets/img/Rífate_con_amor.png";

import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import HomeHistory from "./HomeHistory";

export default function HomeHeader() {
  return (
    <section className="mt-4">
      <div className="position-relative">
        <section
          style={{ minHeight: "640px" }}
          className="text-center m-0 position-relative  "
        >
          <Image
            src={Header}
            alt="fondo"
            className="img-fluid position-absolute top-0 start-0 w-100 h-100 rounded"
          />
          <Image
            src={rifate}
            alt="fondoRifate"
            className="w-25 h-25 home-header-rifate   "
          />

          <p className=" home-header-title  lh-1 m-0 ">
            La primer plataforma de rifas en America Latina
          </p>
          <p className=" home-header-title  lh-1 m-0 ">
            enfocada en apoyar causas sociales
          </p>
          <div className="icon-whatsapp ">

            <BsWhatsapp color=" white" size={40} className="header-icono " />
          </div>

        </section>

        <HomeHistory />
      </div>
    </section>
  );
}

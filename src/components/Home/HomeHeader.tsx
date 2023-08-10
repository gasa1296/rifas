import React from "react";
import Header from "@/assets/img/Header-bg.jpg";
import historiasFondo from "@/assets/img/Historias-img.jpg";
import rifate from "@/assets/img/Rífate_con_amor.png";

import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="position-relative" style={{ marginBottom: "120px" }}>
      <div className=" header-background border">
        <Image
          src={Header}
          alt="fondo"
          className="w-100"
        />
      </div>
      <div>
        <section style={{ minHeight: "640px" }} className="text-center m-0 ">
          <div>
            <Image src={rifate} alt="fondoRifate" className="w-25 h-25 home-header-rifate   " /></div>
          <p className=" home-header-title  lh-1 m-0 ">La primer plataforma de rifas en America Latina</p>
          <p className=" home-header-title  lh-1 m-0 ">  enfocada en apoyar causas sociales</p>
          < BsWhatsapp color=" #00C851" size={30} className="header-icono " />

        </section>

        <section className="row d-block d-lg-flex mb-5  justify-content-center text-center text-lg-start mx-2 mx-lg-0  ">
          <div className="col-12 col-lg-4  p-0 mx-0 mx-lg-5 ">
            <h4 className="  home-header-subtitle text-center text-lg-start">
              ¡Historias increibles Personas como tu!
            </h4>

            <p className=" lh-sm  my-3 home-header-parragraph">
              Vamos juntos a conseguir los recursos que tu Asocioacion Civil
              necesita para cumplir con sus metas
            </p>
          </div>

          <div className="col-12 col-lg-5 mx-0 mx-lg-5  p-0 ">
            <Image src={historiasFondo} alt="fondo" className="w-100 h-100  " />
          </div>
        </section>

      </div>

    </div>
  );
}

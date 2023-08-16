import React from "react";
import Header from "@/assets/img/Header-bg.jpg";
import historiasFondo from "@/assets/img/Historias-img.jpg";
import rifate from "@/assets/img/Rífate_con_amor.png";

import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import HomeHistory from "./HomeHistory";

export default function HomeHeader() {
  return (
    <section>
      <div className="position-relative" style={{ marginBottom: "120px" }}>
        <div className=" header-background border">
          <Image
            src={Header}
            alt="fondo"
            className="w-100"
          />
        </div>
        <div>
          <section style={{ minHeight: "640px" }} className="text-center m-0 " >
            <div>
              <Image src={rifate} alt="fondoRifate" className="w-25 h-25 home-header-rifate   " /></div>
            <p className=" home-header-title  lh-1 m-0 ">La primer plataforma de rifas en America Latina</p>
            <p className=" home-header-title  lh-1 m-0 ">  enfocada en apoyar causas sociales</p>
            < BsWhatsapp color=" #00C851" size={30} className="header-icono " />

          </section>


        </div>

        <HomeHistory />
      </div >

    </section >

  );
}

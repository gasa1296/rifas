import React from "react";
import Image from "next/image";
import historiasFondo from "@/assets/img/gente-rifada.png";

export default function HomeHistory() {
  return (
    <section className="row  mt-5   d-block  d-lg-flex justify-content-between align-items-center  text-center text-lg-start mx-0 mx-lg-0  ">
      <div className="col-12 col-lg-6  p-0 mx-0 mx-lg-0   ">
        <h4 className=" home-header-subtitle text-center text-lg-start">
          ¡Gente rifada como tú!
        </h4>

        <p className=" lh-sm  mt-4 home-header-parragraph">
          Vamos juntos a conseguir los recursos que tu Asociación Civil
          necesita, para poner en marcha tus programas, financiar proyectos y
          cumplir tus objetivos.
        </p>
      </div>

      <div className="col-12 col-lg-6    p-0 ">
        <Image
          src={historiasFondo}
          alt="fondo"
          className=" mx-auto d-block rounded "
        />
      </div>
    </section>
  );
}

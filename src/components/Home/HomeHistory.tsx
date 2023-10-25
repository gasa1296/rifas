import React from "react";
import historiasFondo from "@/assets/img/Historias-img.jpg";
import Image from "next/image";

export default function HomeHistory() {
  return (
    <section className="row  mt-5   d-block  d-lg-flex justify-content-center  text-center text-lg-start mx-0 mx-lg-0  ">
      <div className="col-12 col-lg-6  p-0 mx-0 mx-lg-0 mt-2  ">
        <h4 className=" home-header-subtitle text-center text-lg-start">
          ¡Gente rifada como tú!
        </h4>

        <p className=" lh-sm  mt-4 home-header-parragraph">
          Vamos juntos a conseguir los recursos que tu Asociación Civil necesita, para poner en marcha tus programas, financiar proyectos y cumplir tus objetivos.
        </p>
      </div>

      <div className="col-12 col-lg-6    p-0 ">
        <Image
          src={historiasFondo}
          alt="fondo"
          className="w-100 h-100  rounded "
        />
      </div>
    </section>
  );
}

import React from "react";
import imagen from "@/assets/img/imagen.svg";
import historyPeople from "@/assets/img/historyPeople.png";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="" style={{ marginBottom: "120px" }}>
      <section
        style={{ minHeight: "768px" }}
        className="text-center p-5 bg-body-secondary text-secondary  ">
        <div>
          <Image
            src={imagen}
            alt="fondo"
            className="w-50 h-100 mx-auto d-block"
          />
        </div>
        <div className="w-25 h-25 border-black border mx-auto d-block">
          <Image src={imagen} alt="" className="w-25 h-25" />
        </div>
        {/*   <h1 className="display-1 m-0 fw-bold">¡Rífate!</h1> */}
        <p className=" home-header-title">La primer plataforma de rifas en America Latina enfocada en apoyar causas sociales</p>
      </section>

      <section className="row d-block d-lg-flex mb-5 justify-content-around  text-center text-lg-start mx-2 mx-lg-0  text-secondary ">
        <div className="col-12 col-lg-4  p-0 me-5  ">
          <h4 className=" pt-5 home-header-subtitle text-center text-lg-start">
            ¡Historias increibles Personas como tu!
          </h4>

          <p className=" lh-sm  m-0 my-3 home-headre-parragraph">
            Vamos juntos a conseguir los recursos que tu Asocioacion Civil
            necesita para cumplir con sus metas
          </p>
        </div>

        <div className="col-12 col-lg-5  p-0 ">
          <Image src={historyPeople} alt="fondo" className="w-100 h-100  " />
        </div>
      </section>
    </div>
  );
}

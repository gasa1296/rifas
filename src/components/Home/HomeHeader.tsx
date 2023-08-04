import React from "react";
import imagen from "@/assets/img/imagen.svg";
import historyPeople from "@/assets/img/historyPeople.png";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="" style={{ marginBottom: "120px" }}>
      <section
        style={{ minHeight: "768px" }}
        className="text-center p-5 bg-body-secondary text-secondary  "
      >
        <div>
          <Image
            src={imagen}
            alt="fondo"
            className="w-50 h-100 mx-auto d-block"
          />
        </div>
        <h1 className="display-1 m-0 fw-bold">¡Rífate!</h1>
        <p className="display-4">Sumate con amor</p>
      </section>

      <section className="row d-md-flex  mb-5 justify-content-center   text-secondary mx-2 mx-md-0">
        <div className="col-md-5 p-0 ">
          <h4 className="display-5 pt-5 pl fw-light">
            Historias increibles Personas como tu
          </h4>

          <p className="fs-2 lh-sm  fw-light m-0 my-5 ">
            Vamos juntos a conseguir los recursos que tu Asocioacion Civil
            necesita para cumplir con sus metas
          </p>
        </div>

        <div className="col-md-5  p-0 ">
          <Image src={historyPeople} alt="fondo" className="w-100 h-100  " />
        </div>
      </section>
    </div>
  );
}

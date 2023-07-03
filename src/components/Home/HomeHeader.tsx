import React from "react";
import imagen from "@/assets/img/imagen.svg";
import historyPeople from "@/assets/img/historyPeople.png";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <div>
      <section
        style={{ minHeight: "768px" }}
        className="text-center p-5 bg-body-secondary text-secondary "
      >
        <div>
          <Image
            src={imagen}
            alt="fondo"
            className="w-50 h-100 mx-auto d-block"
          />
        </div>
        <h1 className="fs-1 lh-sm m-0">Rifate!</h1>
        <p className="fs-1">Sumate con amor</p>
      </section>

      <section className="row d-md-flex m-auto mb-5 ">
        <div className="col-md-5 text-center d-flex justify-content-center  align-items-center  text-secondary fw-bold  ">
          <div className="col-md-8">
            <h4 className="fs-1 m-0 ">Historias increibles </h4>
            <h4 className="fs-1 ">Personas como tu </h4>
            <p className="fs-5 lh-sm text-secondary fw-normal  m-0 mb-5 ">
              Vamos a conseguir los recursos que tu Asocioacion Civil necesita
              para cumplir con sus metas{" "}
            </p>
          </div>
        </div>
        <div className="col-md-6  ">
          <div className="col-md-11  ">
            <Image
              src={historyPeople}
              alt="fondo"
              className="w-75 h-100 mx-auto d-block"
            />
          </div>
        </div>
      </section>

      <section className="row d-md-flex m-auto mb-5 justify-content-center mx-5 mx-md-0  text-secondary ">
        <div className="col-md-5  pl-5 pe-md-5">
          <h4 className="display-5 pt-5 pl fw-light">
            Historias increibles Personas como tu
          </h4>

          <p className="fs-2 lh-sm  fw-light m-0 my-5 ">
            Vamos juntos a conseguir los recursos que tu Asocioacion Civil
            necesita para cumplir con sus metas
          </p>
        </div>

        <div className="col-md-5  ">
          <Image src={historyPeople} alt="fondo" className="w-100 h-100  " />
        </div>
      </section>
    </div>
  );
}

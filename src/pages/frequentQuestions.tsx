import Layout from "@/components/Layout";
import React from "react";

export default function frequentQuestions() {
  return (
    <Layout>
      <div className=" col-12 text-center row mt-2 ">
        <h5 className="title-nosotros  m-0">Rífate!</h5>
        <p className="subtitle-nosotros m-0"> Y sumate con amor </p>
        <p className="text-nosotros m-0 lh-1 mt-2">
          ¡Ayudanos para hacer realidad{" "}
        </p>
        <p className="text-nosotros m-0 ">
          {" "}
          las historias con las que te puedes rifar !
        </p>
        <p className="information-nosotros mt-2 mx-auto  col-7 col-mf-12">
          Rifa con causa es una plataforma que te ayuda a recaudar fondos para
          causas sociales de Asociaciones Civiles y otras organizaciones sin
          fines de lucro, a traves de un innovador modelo para administrar
          eventos (rifas) de bienes,productos o servicios{" "}
        </p>
        <button
          className="btn btn-pink btn-sm px-3 fs-6 mt-2 col-6 mx-auto"
          type="submit"
        >
          Comenzar a rifarme
        </button>
      </div>
    </Layout>
  );
}

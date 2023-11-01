import React from "react";
import { useRouter } from "next/router";

export default function RegistroCompletado({ nextStep, backStep }: any) {
  const router = useRouter();
  return (
    <div className="row mt-5 ">
      <div className="col-10 col-lg-6 mx-auto">
        <h2 className="text-center text-secondary">!Es momento de rifarnos!</h2>
        <div className=" my-5 p-5 text-center shadow">
          <h3 className="text-secondary m-0 "> Muchas Gracias </h3>
          <p className=" mb-0 mt-3 fs-3 text-secondary fw-semibold ">
            !Ya has creado tu cuenta!
          </p>
          <button
            onClick={() => nextStep()}
            className="btn btn-success w-100 mt-5"
          >
            Crear una asociacion
          </button>
          <button
            onClick={() => router.push("/")}
            className=" w-100 mt-3 form-control "
          >
            ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

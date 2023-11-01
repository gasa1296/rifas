import { useRouter } from "next/router";
import React from "react";

export default function FinalizarAsociacion({ nextStep, backStep }: any) {
  const router = useRouter();

  return (
    <div className="row mt-5 ">
      <div className="col-10 col-lg-6 mx-auto text-center">
        <h3 className="tittle-registroSucessfull">
          ¡Gracias por crear tu asociacion!
        </h3>
        <div className=" my-5 p-5 text-center shadow">
          <h3 className="text-secondary">
            hemos enviado tu asociacion a revision, en un transcurso de 48 horas
            sera aprobada y estaras listo para crear tus rifas!!
          </h3>

          <button
            onClick={() => router.push("/")}
            className="btn btn-pink w-100 mt-5"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

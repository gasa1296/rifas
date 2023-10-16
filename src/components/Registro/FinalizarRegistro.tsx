import { useRouter } from "next/router";
import React from "react";

export default function CreateAccount({ nextStep, backStep }: any) {
  const router = useRouter();

  return (
    <div className="row mt-5 ">
      <div className="col-10 col-lg-6 mx-auto text-center">
        <h3 className="tittle-registroSucessfull">¡Gracias por registrarte!</h3>
        <div className=" my-5 p-5 text-center shadow">
          <h3 className="text-secondary">
            Le hemos enviado un correo electrónico para verificar su dirección.
            Por favor, busque en su bandeja de entrada un email de nuestra parte
            y haga clic en el enlace proporcionado para confirmar que la
            dirección de correo electrónico es correcta.
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

import { useRouter } from "next/router";
import React from "react";
import { FaEnvelopeOpen, FaEnvelopeOpenText } from "react-icons/fa";
export default function CreateAccount({ nextStep, backStep }: any) {
  const router = useRouter();

  return (
    <div className="row mt-5 ">
      <div className="col-10 col-lg-7 mx-auto text-center">
        <h3 className="tittle-registroSucessfull">¡Gracias por registrarte!</h3>
        <h3 className="tittle-registroSucessfull">
          Solo falta un pequeño paso para poder rifarte, debes verificar tu
          dirección de correo electrónico.
        </h3>
        <div className=" my-5 p-5 text-center shadow col-8 mx-auto">
          <FaEnvelopeOpenText color="#C3286D" size={100} />
          <h3 className="text-secondary pt-5">
            Te envíamos el link de verificación al correo electrónico que
            registraste.
          </h3>

          <button
            onClick={() => router.push("/")}
            className="btn btn-pink w-100 mt-5"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

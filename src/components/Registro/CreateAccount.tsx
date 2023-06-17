import React from "react";

export default function CreateAccount({ nextStep, backStep }: any) {
  return (
    <div className="row mt-5 ">
      <div className="col-10 col-lg-6 mx-auto">
        <h2 className="text-center text-secondary">!Es momento de rifarnos!</h2>

        <div className=" my-5 p-5 text-center shadow">
          <h3 className="text-secondary"> Muchas gracias </h3>
          <h3 className="text-secondary">
            {" "}
            Ahora es momento de crear tu rifa.{" "}
          </h3>

          <p className="mt-5 mb-0  text-secondary">?a quien ayudaremos?</p>
          <p className="text-secondary ">
            Cuentanos todo acerca de tu rifa y pongamonos manos a la obra.
          </p>
          <button
            onClick={() => nextStep()}
            className="btn btn-success w-100 mt-5"
          >
            Continuar
          </button>
          <button
            onClick={() => backStep()}
            className="btn btn-outline-secondary    w-100 mt-3"
          >
            ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
}

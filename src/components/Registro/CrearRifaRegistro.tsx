import React, { useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ConfiguraRifa from "../Rifas/ConfiguraRifa";
import DefinicionRifa from "../Rifas/DefinicionRifa";
import ConfirmacionRifa from "../Rifas/ConfirmacionRifa";

const StepIcon = (step: number, currentStep: number) => {
  if (step === currentStep) return <MdKeyboardArrowUp size={30} />;
  return <MdKeyboardArrowDown size={30} />;
};

export default function CrearRifaRegistro({ nextStep, backStep }: any) {
  const [step, setStep] = useState(0);

  const handleClickStep = (newStep: number) => {
    if (step === newStep) return setStep(0);

    setStep(newStep);
  };

  return (
    <div className="mt-5">
      <h2 className="text-center text-secondary fs-3 my-4">
        ¡Es momento de rifarnos Cuautli!
      </h2>

      <div className=" p-3 mb-3 col-12 col-md-5 m-auto  text-secondary  shadow rounded">
        <div
          className=" d-flex justify-content-between align-items-center  m-3 rounded  "
          onClick={() => handleClickStep(1)}
        >
          <button
            className={`form-control fs-4 text-light bg-secondary  ${
              step === 1 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            Configura el premio tu rifa {StepIcon(step, 1)}
          </button>
        </div>
        {step === 1 && <ConfiguraRifa />}

        <div
          className=" d-flex justify-content-between align-items-center m-3 rounded  "
          onClick={() => handleClickStep(2)}
        >
          <button
            className={`form-control fs-4 text-light bg-secondary  ${
              step === 2 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            Define los datos de tu rifa
            {StepIcon(step, 2)}
          </button>
        </div>

        {step === 2 && <DefinicionRifa />}

        <div
          className=" d-flex justify-content-around align-items-center m-3 bg-secondary rounded  "
          onClick={() => handleClickStep(3)}
        >
          <button
            className={`form-control fs-4 text-light bg-secondary  ${
              step === 3 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            Confirmación de la rifa
            {StepIcon(step, 3)}
          </button>
        </div>
        {step === 3 && <ConfirmacionRifa />}
      </div>
      <div className=" text-dark text-center ">
        <button className=" my-2 w-50 btn btn-outline-secondary" type="button">
          Ir al inicio
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";

import ConfiguraRifa from "../Rifas/ConfiguraRifa";
import DefinicionRifa from "../Rifas/DefinicionRifa";
import ConfirmacionRifa from "../Rifas/ConfirmacionRifa";
<div>

</div>

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
    <div className="">
      <h2 className="text-center text-secondary fs-3 my-4">
        ¡Es momento de rifarnos Cuautli!
      </h2>

      <div className="  mb-3 col-12 col-lg-5 m-auto  text-secondary  ">
        <div className=" d-flex justify-content-between align-items-center    " onClick={() => handleClickStep(1)}>
          <button
            className={`form-control fs-4 text-light bg-secondary d-flex justify-content-between align-item-center  ${step === 1 ? " opacity-50 " : " opacity-100  "}`}>
            <div> <AiFillDollarCircle size={25} className="me-2" />
              Configura el premio tu rifa</div>
            <div className="m-0">
              {StepIcon(step, 1)}
            </div>

          </button>
        </div>
        {step === 1 && <ConfiguraRifa />}

        <div
          className=" d-flex justify-content-between align-items-center  mt-4 "
          onClick={() => handleClickStep(2)}
        >
          <button
            className={`form-control fs-4  text-light bg-secondary d-flex justify-content-between align-item-center ${step === 2 ? " opacity-50 " : " opacity-100  "
              }`}
          >
            <div>
              <HiOutlineClipboardList />  Define los datos de tu rifa
            </div>
            <div className="m-0">
              {StepIcon(step, 2)}
            </div>

          </button>
        </div>

        {step === 2 && <DefinicionRifa />}

        <div
          className=" d-flex justify-content-around align-items-center  bg-secondary mt-4  "
          onClick={() => handleClickStep(3)}
        >
          <button
            className={`form-control fs-4 text-light bg-secondary d-flex justify-content-between align-item-center ${step === 3 ? " opacity-50 " : " opacity-100  "
              }`}
          >
            <div>
              <FaHandHoldingHeart />     Confirmación de la rifa
            </div>
            <div className="m-0">
              {StepIcon(step, 3)}
            </div>

          </button>
        </div>
        {step === 3 && <ConfirmacionRifa />}
      </div>
      <div className=" text-dark text-center col-12">
        <button className=" my-2  btn btn-outline-secondary col-11  col-md-4" type="button" >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}

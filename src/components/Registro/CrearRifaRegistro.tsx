import React, { useEffect, useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";

import ConfiguraRifa from "../Rifas/ConfiguraRifa";
import DefinicionRifa from "../Rifas/DefinicionRifa";
import ConfirmacionRifa from "../Rifas/ConfirmacionRifa";
import { useDispatch, useSelector } from "react-redux";
import { createRaffle } from "@/store/slices/raffles";
import { RafflesI } from "@/types/Model/Raffle";
import { selectAuthState } from "@/store/slices/auth";
import CreateAsociacion from "./CrearAsociacion";
<div></div>;

const StepIcon = (step: number, currentStep: number) => {
  if (step === currentStep) return <MdKeyboardArrowUp size={30} />;
  return <MdKeyboardArrowDown size={30} />;
};

export default function CrearRifaRegistro({ nextStep, backStep }: any) {
  const [step, setStep] = useState(1);
  const [raffle, setRaffle] = useState({});
  const [finalRaffle, setFinalRaffle] = useState({});

  const dispatch = useDispatch();
  const { profile } = useSelector(selectAuthState);
  const canCreateRaffle = profile?.role === 1;

  const handleChangeRaffle = (data: any) => {
    setRaffle({ ...raffle, ...data });
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    const { payload } = await dispatch(createRaffle(raffle as RafflesI) as any);
    if (payload) {
      setFinalRaffle({ raffle, finalRaffle: payload });
    } else {
      setStep(1);
    }
  };

  useEffect(() => {
    if (step === 3) handleSubmit();

    //eslint-disable-next-line
  }, [step]);

  if (!canCreateRaffle) return <CreateAsociacion />;

  return (
    <div className="mx-4">
      <h2 className="title-page-rifaRegistro my-4">
        ¡Es momento de rifarnos {profile.full_name}!
      </h2>

      <div className="  mb-3 col-12 col-lg-8 m-auto  ">
        <div
          className=" d-flex justify-content-between align-items-center    "
          onClick={() => {}}
        >
          <button
            className={` fs-4 text-light  fondo-crear-rifa  d-flex justify-content-between align-item-center  ${
              step === 1 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            <div className="text-fondo-container">
              <AiFillDollarCircle size={25} className="me-2" />
              Configura el premio tu rifa
            </div>
            <div className="m-0">{StepIcon(step, 1)}</div>
          </button>
        </div>
        {step === 1 && (
          <ConfiguraRifa handleChangeRaffle={handleChangeRaffle} />
        )}

        <div className=" d-flex justify-content-between align-items-center  mt-4  ">
          <button
            className={` fs-4  text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${
              step === 2 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            <div>
              <HiOutlineClipboardList /> Define los datos de tu rifa
            </div>
            <div className="m-0">{StepIcon(step, 2)}</div>
          </button>
        </div>

        {step === 2 && (
          <DefinicionRifa handleChangeRaffle={handleChangeRaffle} />
        )}

        <div className=" d-flex justify-content-around align-items-center   mt-4   ">
          <button
            className={` fs-4 text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${
              step === 3 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            <div>
              <FaHandHoldingHeart /> Confirmación de la rifa
            </div>
            <div className="m-0">{StepIcon(step, 3)}</div>
          </button>
        </div>
        {step === 3 && <ConfirmacionRifa finalRaffle={finalRaffle} />}
      </div>
      <div className=" text-dark text-center col-12">
        <button
          className=" my-2  btn btn-border-pink col-11  col-md-7"
          type="button"
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}

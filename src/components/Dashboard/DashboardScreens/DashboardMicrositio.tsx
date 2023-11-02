import React, { useState } from "react";
import {
  FaBriefcase,
  FaImage,
  FaRegEdit,
  FaRegImage,
  FaShareAlt,
} from "react-icons/fa";
import {
  AiFillDollarCircle,
  AiOutlineMenu,
  AiOutlineShareAlt,
} from "react-icons/ai";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
} from "react-icons/md";

import { HiOutlineClipboardList } from "react-icons/hi";

import { setRaffle } from "@/store/slices/raffles";
import { createRaffle } from "@/store/slices/raffles";
import DashboardMicrositioBanners from "../Components/Micrositio/DashboardMicrositioBanners";
import { useRouter } from "next/router";
import DashboarMicrositioCaracteristicas from "../Components/Micrositio/DashboarMicrositioCaracteristicas";
import DashboarMicrositioNetworks from "../Components/Micrositio/DashboarMicrositioNetworks";

export default function DashboardMicrositio() {
  const [step, setStep] = useState(1);
  const [raffle, setRaffle] = useState({});
  const router = useRouter();

  const StepIcon = (step: number, currentStep: number) => {
    if (step === currentStep) return <MdKeyboardArrowUp size={30} />;
    return <MdKeyboardArrowDown size={30} />;
  };
  const handleChangeRaffle = (data: any) => {
    setRaffle({ ...raffle, ...data });
    setStep((prev) => prev + 1);
  };
  const resetRaffle = () => {
    setStep(1);
    setRaffle({});
  };
  return (
    <section className=" ">
      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ">
        <div className=" d-block d-md-flex mt-2 ">
          <p className="title-dashboard mx-2 ">APAC, A.C. /</p>
          <p className="title-dashboard ">Micrositio</p>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <button
            onClick={() => router.push("/dashboard/")}
            className=" p-2 me-3 button-dashboard m-0 "
          >
            <MdKeyboardArrowLeft />
            Mis asociaciones{" "}
          </button>
          <button className="me-3 button-dashboard  m-0 p-2  ">
            <FaBriefcase className="mx-2" />
            Vista previa{" "}
          </button>
        </div>
      </div>

      <div className="pt-3 background-dashboard mt-3 px-3">
        <div className="d-flex container-cartera  p-3 mt-2">
          <div className="ms-4 text-center">
            <FaBriefcase color="#784B5F" size={30} />
          </div>

          <div className="ms-4">
            <p className="m-0 saldo-Cartera">Micrositio</p>
            <p className="m-0 information-Saldo">
              Aqui podrás configurar un micrositio para tu asociación, llenando
              el siguiente formulario:
            </p>
          </div>
        </div>

        <div className="  mb-3 col-12 col-lg-12 m-auto mt-4  ">
          <div
            className=" d-flex justify-content-between align-items-center    "
            onClick={() => { }}
          >
            <button
              className={` fs-4 text-light  fondo-crear-rifa  d-flex justify-content-between align-item-center  ${step === 1 ? " opacity-50 " : " opacity-100  "
                }`}
            >
              <div className="text-fondo-container">
                <AiOutlineMenu size={25} className="me-2" />
                Características
              </div>
              <div className="m-0">{StepIcon(step, 1)}</div>
            </button>
          </div>
          {step === 1 && (
            <DashboarMicrositioCaracteristicas /* handleChangeRaffle={handleChangeRaffle} */
            />
          )}
        </div>
        <div className=" d-flex justify-content-between align-items-center  mt-2 ">
          <button
            className={` fs-4  text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${step === 2 ? " opacity-50 " : " opacity-100  "
              }`}
          >
            <div>
              <FaRegImage className="mx-2" />
              Banners
            </div>
            <div className="m-0">{StepIcon(step, 2)}</div>
          </button>
        </div>
        {step === 2 && (
          <DashboardMicrositioBanners /* handleChangeRaffle={handleChangeRaffle} */
          />
        )}

        <div className=" d-flex justify-content-around align-items-center   mt-2  pb-4  ">
          <button
            className={` fs-4 text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${step === 3 ? " opacity-50 " : " opacity-100  "
              }`}
          >
            <div>
              {" "}
              <AiOutlineShareAlt /> Redes Sociales
            </div>
            <div className="m-0">{StepIcon(step, 3)}</div>
          </button>
        </div>
        {step === 3 && (
          <DashboarMicrositioNetworks /*  resetRaffle={resetRaffle} raffle={raffle} */
          />
        )}
      </div>
    </section>
  );
}

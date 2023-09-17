import React, { useEffect } from "react";
import Image from "next/image";
import imagenDonaciones from "@/assets/img/Premio-donar.jpg";
import { useDispatch } from "react-redux";
import { Donations } from "@/store/slices/raffles";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";

export default function DonacionesValidacion({
  nextStep,
  backStep,
  initialStep,
}: any) {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="row m-0 my-3 ">
        <div className=" col-12 col-lg-6    ">
          <Image
            src={imagenDonaciones}
            alt="donation"
            className="w-100 h-auto mx-0 "
          />
        </div>
        <div className=" col-lg-5 col-12   text-secondary ms-3 ">
          <h4 className=" lh-sm m-0 text-lg-start mt-3 mt-lg-0 donaciones-title">
            3 / 3 Premio en validacion
          </h4>

          <BiHeartCircle
            size={55}
            className="mx-auto d-block mt-3"
            color={"C3286D"}
          />

          <p className="m-0 tanks-donaciones-validacion text-center ">
            Gracias
          </p>
          <p className="m-0  information-donacionesValidacion text-center">
            Estamos muy contentos de{" "}
          </p>
          <p className="m-0 fs-3  information-donacionesValidacion text-center">
            Conseguir tu valiso apoyo
          </p>
          <p className=" mb-4  stepsToFollow-donaciones mt-3 ">
            ¿Cuales son los siguientes pasos?
          </p>

          <div className="d-flex justify-content-start   my-3 ">
            <BsFillCheckCircleFill
              size={20}
              className="m-0 "
              style={{ position: "absolute" }}
              color={"#313131"}
            />
            <p className="m-0  text-donaciones-validacion ms-4">
              Tu premio será sometido a un proceso de revisión
            </p>
          </div>
          <div className="d-flex justify-content-start   my-3 ">
            <BsFillCheckCircleFill
              size={20}
              style={{ position: "absolute" }}
              className="m-0 "
              color={"#313131"}
            />
            <p className="m-0  text-donaciones-validacion ms-4">
              Una vez autorizado, te enviaremos un mensaje de confirmación y tu
              premio ya será parte del catálogo.
            </p>
          </div>

          <div className="d-flex justify-content-start  my-3 ">
            <BsFillCheckCircleFill
              size={20}
              style={{ position: "absolute" }}
              className="m-0 "
              color={"#313131"}
            />
            <p className="m-0  text-donaciones-validacion ms-4 ">
              Si seleccionaste alguna asociación será asignado a dicha
              asociación para ser elegido en una rifa.
            </p>
          </div>
          <p className="m-0 text-donaciones-validacion text-center mt-4">
            {" "}
            Sabrás de nosotros en un máximo de 48 hrs
          </p>
          <p className="m-0 text-donaciones-validacion  text-center">
            {" "}
            ¡Sigue Rifandote!
          </p>

          <div className="d-flex justify-content-center  mw-md-50  mt-5 ">
            {/*  <button className="btn btn-border-pink btn-sm w-50 mx-2 fs-6">
              {" "}
              Ver catálogo de premios
            </button> */}
            <button
              className="btn btn-pink btn-sm w-50 mx-2 fs-6"
              onClick={() => initialStep()}
            >
              Ir a donar otro premio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

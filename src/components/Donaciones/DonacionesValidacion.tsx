import React, { useEffect } from "react";
import Image from "next/image";
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg";
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

  const submitDonation = async () => {
    const { payload } = await dispatch(Donations({}) as any);
  };

  useEffect(() => {
    submitDonation();
    //eslint-disable-next-line
  }, []);
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
          <h4 className=" lh-sm m-0 text-lg-start mt-3 mt-lg-0  text-center fs-3">
            3 / 3 Premio en validacion
          </h4>

          <BiHeartCircle size={55} className="mx-auto d-block mt-3" />

          <p className="m-0 fw-bold fs-1 text-center ">Gracias</p>
          <p className="m-0  lh-1 fw-bold  fs-3 text-center">
            Estamos muy contentos de
          </p>
          <p className="m-0 fs-3  fw-bold  text-center">
            {" "}
            Conseguir tu valiso apoyo
          </p>
          <p className=" mb-4 mt-2 text-center fw-semibold  fs-5 ">
            ¿Cuales son los siguientes pasos?
          </p>

          <div className="d-flex justify-content-start  my-3 ">
            <BsFillCheckCircleFill size={20} className="m-0 " />
            <p className="m-0  ms-2">
              Tu premio será sometido a un proceso de revisión
            </p>
          </div>
          <div className="d-flex justify-content-start  my-3 ">
            <BsFillCheckCircleFill size={20} className="m-0 " />
            <p className="m-0  ms-2">
              Una vez autorizado, te enviaremos un mensaje de confirmación
            </p>
          </div>

          <div className="d-flex justify-content-start  my-3 ">
            <BsFillCheckCircleFill size={20} className="m-0 " />
            <p className="m-0  ms-2">
              tu premio ya será parte del catálogo.
            </p>
          </div>
          <div className="d-flex justify-content-start  my-3 ">
            <BsFillCheckCircleFill size={29} className="m-0 " />
            <p className="m-0 ms-2  ">
              Si seleccionaste alguna asociación será  asignado a dicha
              asociación para ser elegido en una rifa.
            </p>
          </div>
          <div className="d-flex justify-content-start  my-3 ">
            <BsFillCheckCircleFill size={20} className="m-0 " />
            <p className="m-0  ms-2">
              Pronto sabras de nosotros en un máximo de 48 hrs
            </p>
          </div>


          <div className="d-flex justify-content-between  mw-md-50  mt-5 ">
            <button className="btn btn-outline-secondary btn-sm w-50 mx-2 fs-6">
              {" "}
              Catalogo de premios
            </button>
            <button
              className="btn btn-outline-secondary btn-sm w-50 mx-2 fs-6"
              onClick={() => initialStep()}
            >
              Donar otro premio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

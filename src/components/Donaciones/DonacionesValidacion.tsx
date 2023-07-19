import React, { useEffect } from "react";
import Image from "next/image";
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg";
import { useDispatch } from "react-redux";
import { Donations } from "@/store/slices/raffles";
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
      <section className="row m-0 my-3">
        <div className=" col-md-6 col-12   ">
          <Image src={imagenDonaciones} alt=".." className="w-75 mx-5" />
        </div>
        <div className=" col-md-5 col-12  mx-3 text-secondary mx-4 mx-md-0 ">
          <h4 className=" lh-sm m-0 text-md-start  text-center fs-3">
            3 / 3 Premio en validacion
          </h4>
          <p className="m-0 fw-bold fs-1 text-center my-3">Gracias</p>
          <p className="m-0  lh-1 fw-bold  fs-3 text-center">
            Estamos muy contentos de
          </p>
          <p className="m-0 fs-3  fw-bold  text-center">
            {" "}
            Conseguir tu valiso apoyo
          </p>
          <p className=" my-2 text-center fw-semibold  fs-5 ">
            ¿Cuales son los siguientes pasos?
          </p>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">
              Tu premio será sometido a un proceso de revisión
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">
              Una vez autorizado, te enviaremos un mensaje de confirmación
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">
              tu premio ya será parte del catálogo.
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label ">
              Si seleccionaste alguna asociación será asignado a dicha
              asociación para ser elegido en una rifa.
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label ">
              Pronto sabras de nosotros en un máximo de 48 hrs
            </label>
          </div>
          <div className="d-flex justify-content-between  mw-md-50  mt-2 ">
            <button className="btn btn-outline-secondary btn-sm w-50 mx-2 fs-6">
              {" "}
              Ver catalogo de premios
            </button>
            <button
              className="btn btn-outline-secondary btn-sm w-50 mx-2 fs-6"
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

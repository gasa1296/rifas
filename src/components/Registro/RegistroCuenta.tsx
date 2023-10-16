import React from "react";
import camara from "@/assets/img/camara.png";
import FormGenerator from "../FormGenerator";
import { CreateAsociacion, selectAuthState } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { registerFields } from "./helper";
import { useRouter } from "next/router";
export default function RegistroCuenta({ nextStep, backStep }: any) {
  const { loading } = useSelector(selectAuthState);
  const router = useRouter();
  const dispatch = useDispatch();
  const submitData = async (data: any) => {
    const { payload } = await dispatch(CreateAsociacion(data) as any);
    if (payload) nextStep();
  };

  return (
    <section className="text-secondary row  ">
      <div className="col-md-8  col-12 mx-auto mt-5">
        <h3 className="tittle-registroSucessfull text-center">
          Gracias por registrar tu usuario. Ayúdanos a completar los datos de tu
          asociación.
        </h3>
        <p className="text-center fw-light  fs-5 mt-3 mx-md-5">
          Para poder crear rifas es necesario completar este paso.
        </p>
      </div>

      <div
        className=" pt-3 my-3 text-secondary border  shadow rounded mx-auto px-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <FormGenerator
          buttonText="Registrar"
          submitData={submitData}
          fields={registerFields}
          loading={loading}
        />
      </div>

      <div className=" text-dark text-center ">
        <button
          className=" my-2 w-50 btn btn-outline-secondary"
          type="button"
          onClick={() => router.push("/")}
        >
          ir al inicio
        </button>
      </div>
    </section>
  );
}

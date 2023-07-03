import React from "react";
import camara from "@/assets/img/camara.png";
import Image from "next/image";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { selectAuthState } from "@/store/slices/auth";
import { useSelector } from "react-redux";
export default function RegistroCuenta({ nextStep, backStep }: any) {
  const { loading } = useSelector(selectAuthState);
  const submitData = async () => {
    //await dispatch(Register(data) as any);
    nextStep();
  };

  const fields: Field[] = [
    {
      label: "Nombre(s) del representante legal*",
      name: "name",
      required: true,
      type: "text",
    },
    {
      label: "Apellido paterno del representante legal*",
      name: "father_name",
      required: true,
      type: "text",
    },
    {
      label: "Apellido materno del representante legal*",
      required: true,
      name: "mother_name",
      type: "text",
    },
  ];

  return (
    <section className="text-secondary row">
      <div className="col-md-8  col-12 mx-auto mt-5">
        <h2 className="text-center text-secondary fw-normal mx-md-5 ">
          Gracias por registrar tu usuario. Ayúdanos a completar los datos de tu
          asociación.
        </h2>
        <p className="text-center fw-light  fs-4 mt-3 mx-md-5">
          Para poder crear rifas es necesario completar este paso.
        </p>
      </div>

      <div
        className="  my-3 text-secondary shadow rounded mx-auto px-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <p className=" text-center text-secondary fw-semibold my-3 fs-4">
          Registra tu cuenta
        </p>
        <FormGenerator
          buttonText="Registrar"
          submitData={submitData}
          fields={fields}
          loading={loading}
        />
      </div>

      <div className=" mb-3 col-10 col-md-5 m-auto  text-secondary shadow rounded">
        <p className="text-secondary fw-bold text-center fs-5">
          1 / 2 Datos de asociacion
        </p>
        <div className=" m-auto col-md-10 col-12 py-2">
          <label>Nombre(s) del representante legal*</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>Apellido Paterno del representante legal*</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>Apellido Materno del representante legal*</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>Razón Social*</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>RFC**</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>Regimen Fiscal*</label>
          <select className="form-select">
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label>Correo electronico</label>
          <input type="email" className="w-100 form-control my-2 " />
          <label>Teléfono</label>
          <input type="number" className="w-100 form-control my-2 " />
          <label>Cuenta de PayPal</label>
          <input type="text" className="w-100 form-control my-2 " />

          <div className="border w-50 m-auto">
            <Image
              src={camara}
              alt=".."
              className="w-25 h-25  mx-auto d-block  "
            />
            <p className="mx-2">Agrega o arrastra tu foto aqui</p>
          </div>
          <p className="text-secondary mt-3 fw-bold fs-5">
            2 / 2 Dirección Fiscal
          </p>

          <div className="form-check m-auto ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fw-bold ">
              ¿La dirección de la asociación es diferente a la fiscal?
            </label>
          </div>

          <label>Calle y número</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>Código postal</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>Estado</label>
          <select className="form-select">
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label>Municipio</label>
          <input type="text" className="w-100 form-control my-2 " />
          <label>RFC**</label>
          <input type="text" className="w-100 form-control my-2 " />
          <div className="d-grid gap-2 mx-auto my-3">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => nextStep()}
            >
              Registrate
            </button>
          </div>
        </div>
      </div>

      <div className=" text-dark text-center ">
        <button
          className=" my-2 w-50 btn btn-outline-secondary"
          type="button"
          onClick={() => backStep()}
        >
          ir al inicio
        </button>
      </div>
    </section>
  );
}

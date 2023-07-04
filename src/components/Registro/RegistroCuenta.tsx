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
      label: " 1 / 2 Datos de asociacion",
      name: "",
      type: "title"

    },
    {
      label: "Nombre(s) del representante legal*",
      name: "name",
      required: true,
      type: "text",
    },
    {
      label: "Apellido Paterno del representante legal*",
      name: "father_name",
      required: true,
      type: "text",
    },
    {
      label: "Apellido Materno del representante legal*",
      required: true,
      name: "mother_name",
      type: "text",
    },
    {
      label: "Razón Social*",
      required: true,
      name: "business_name",
      type: "text",
    },
    {
      label: "RFC**",
      required: true,
      name: "rfc",
      type: "text"
    },
    {
      label: "Regimen Fiscal*",
      required: false,
      name: "tax_regime",
      type: "text"

    },
    {
      label: "Correo electronico",
      required: false,
      name: "Correo_electronico",
      type: "email"

    },
    {
      label: "Teléfono",
      required: false,
      name: "phone",
      type: "number"

    },
    {
      label: "Cuenta de PayPal",
      required: false,
      name: "paypal_account",
      type: "text"

    },
    {
      label: "Agrega o arrastra tu foto aqui",
      required: false,
      name: "imagen",
      type: "text"

    },
    {
      label: " 2 / 2 Dirección Fiscal",
      name: "fiscal_address",
      type: "title"

    },
    {
      label: " ¿La dirección de la asociación es diferente a la fiscal?",
      required: false,
      name: "fiscal_address2",
      type: "checkbox"

    },

    {
      label: "Calle y número",
      required: false,
      name: "street_number",
      type: "text"

    },
    {
      label: "Código postal",
      required: false,
      name: "postal_code",
      type: "number"

    },
    {
      label: "Estado",
      required: false,
      name: "select",
      type: "text"

    },
    {
      label: "Municipio",
      required: false,
      name: "municipality",
      type: "text"

    },
    {
      label: "RFC**",
      required: true,
      name: "rfc",
      type: "text"
    },

  ];

  return (
    <section className="text-secondary row  ">
      <div className="col-md-8  col-12 mx-auto mt-5">
        <h2 className="text-center text-secondary fw-normal mx-md-5 ">
          Gracias por registrar tu usuario. Ayúdanos a completar los datos de tu
          asociación.
        </h2>
        <p className="text-center fw-light  fs-5 mt-3 mx-md-5">
          Para poder crear rifas es necesario completar este paso.
        </p>
      </div>

      <div className="  my-3 text-secondary border  shadow rounded mx-auto px-5" style={{ maxWidth: "600px", width: "100%" }}>

        <FormGenerator
          buttonText="Registrar"
          submitData={submitData}
          fields={fields}
          loading={loading}
        />
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
    </section >
  );
}

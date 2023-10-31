import React, { useState } from "react";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from "@/types/Model/Profile";
import Image from "next/image";

import { LoginWithGoogle } from "../Login/LoginWithGoogle";
import LoginWithFacebook from "../Login/LoginWithFacebook";
import fondoRegistro from "@/assets/img/fondoRegistro.png";
export default function CreateAccount({ nextStep }: any) {
  const { loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();
  const submitData = async (data: Profile) => {
    const { payload } = await dispatch(Register(data) as any);

    if (payload) {
      nextStep();
    }
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "full_name",
      required: true,
      type: "text",
    },
    {
      label: "Correo electronico",
      name: "email",
      required: true,
      type: "text",
    },
    { label: "Empresa (Opcional)", name: "company_name", type: "text" },
    { label: "Contraseña", name: "password", required: true, type: "password" },
    {
      label: "Confirmar Contraseña",
      name: "confirmarContrasena",
      required: true,
      type: "password",
    },
    {
      label: "He leido y aceptado los terminos",
      name: "accepted",
      required: true,
      type: "checkbox",
    },
    {
      label: "Confirma que no eres un robot",
      name: "token",
      required: true,
      type: "captchap",
    },
  ];

  return (
    <section className="text-secondary row m-0   position-relative">
      <div>
        <Image
          src={fondoRegistro}
          alt="fondoRifaDescriptions"
          className="img-fluid position-absolute top-0 start-0  fondoRifaDescriptions"
        />
      </div>
      <div className="col-md-8  col-12 mx-0 mx-md-auto mt-5 ">
        <h2 className="text-center title-CreateAccount mx-md-5 mx-0">
          Para comenzar a rifarte necesitas crear una cuenta.
        </h2>
        <h2 className="text-center title-CreateAccount mx-md-5 ">
          {" "}
          Crear una cuenta.
        </h2>
        <p className="text-center text-CreateAccount mt-0 mx-md-5">
          Es necesario crear una cuenta para apoyar alguna rifa, donar un premio
          o si eres una asociación y quieres crear tus rifas.
        </p>
      </div>
      <div
        className=" col-md-8  m-auto  col-12  justify-content-center  d-flex my-3 text-secondary shadow rounded  px-3 "
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div>
          <p className=" text-center title-registro-CreateAcount my-3 ">
            Registra tu cuenta
          </p>
          <FormGenerator
            buttonText="Registrar"
            submitData={submitData}
            fields={fields}
            loading={loading}
          />

          <div className="  ">
            <p className="text-center fw-bold ">
              O registrate con tus redes sociales
            </p>

            <div className=" mx-0 mx-md-auto d-flex flex-wrap  justify-content-center mb-4">
              <div className="my-2 my-md-0 mx-3">
                <LoginWithFacebook handleClose={() => { }} />
              </div>

              <div className=" mt-1 mt-md-0 mx-2 ">
                <LoginWithGoogle handleClose={() => { }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from "@/types/Model/Profile";

export default function CreateAccount({ nextStep }: any) {
  const { loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const submitData = async (data: Profile) => {
    await dispatch(Register(data) as any);
    nextStep();
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "first_name",
      required: true,
      type: "text",
    },
    {
      label: "Correo electronico",
      name: "email",
      required: true,
      type: "text",
    },
    { label: "Empresa (Opcional)", name: "enterprise", type: "email" },
    { label: "Contrasena", name: "password", required: true, type: "password" },
    {
      label: "Confirmar contrasena",
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
  ];

  return (
    <section className="text-secondary row">
      <div className="col-md-8  col-12 mx-auto mt-5">
        <h2 className="text-center text-secondary fw-normal mx-md-5 ">
          Para comenzar a rifarte necesitas crear una cuenta.
        </h2>
        <p className="text-center fw-light  fs-4 mt-3 mx-md-5">
          si eres una asociacion o quieres donar un premio es necesario crear
          una cuenta
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

        <div className="d-grid gap-2 col-12 mx-auto my-3">
          <p className="text-center fw-bold mt-2">
            O registrate con tus redes sociales
          </p>
          <button className="btn btn-secondary" type="button">
            {" "}
            Resgitrate con Facebook
          </button>
          <button className="btn btn-secondary my-2" type="button">
            Registrate con Google
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import FormGenerator from "@/components/FormGenerator";
export default function DashboarMicrositioCaracteristicas({
  handleChangeRaffle,
}: any) {
  const submitData = async (data: Profile) => {
    handleChangeRaffle(data);
  };

  const fields: Field[] = [
    {
      subLabel: " ¿Quienes somos?",
      name: "about",
      required: true,
      type: "textarea",
    },

    {
      subLabel: "¿Qué hacemos?",
      name: "FF",
      required: true,
      type: "textarea",
    },
    {
      label: "2. Dirección",
      subLabel: "Calle y número",
      name: "streetAndPhone",
      required: true,
      type: "text",
    },
    {
      subLabel: "Código postal",
      name: "short_description",
      required: true,
      type: "text",
    },
    {
      label: "Estado",
      name: "state",
      required: false,
      type: "select",
    },
    {
      subLabel: "Municipio",
      name: "municipality",

      type: "text",
    },

    {
      subLabel: "Correo de contacto",
      required: false,
      name: "emacontactil",
      type: "text",
    },

    {
      subLabel: "Teléfono de contacto",
      required: true,
      name: "phonecontact",
      type: "text",
    },
  ];
  return (
    <section className="px-2 px-md-4 py-3 container-cartera  ">
      <h6 className="title-micrositio">
        1. Información general de tu Asociación
      </h6>
      <p className="">¿Cómo quieres acceder a tu micrositio?</p>

      <div className="d-md-flex d-block">
        <p className="m-0 email-microsition">https://www.rifaconcausa.org/sitios/</p>
        <input type="text" placeholder="asociacion" />
      </div>

      <FormGenerator
        buttonText="Continuar"
        submitData={submitData}
        fields={fields}
        loading={false}
      />
    </section>
  );
}

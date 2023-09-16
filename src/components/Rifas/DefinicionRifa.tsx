import React, { useEffect, useState } from "react";

import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";

import { Profile } from "@/types/Model/Profile";
import { useRaffleStore } from "@/store/zustand/RaffleStore";

export default function DefinicionRifa({ handleChangeRaffle }: any) {
  const submitData = async (data: Profile) => {
    handleChangeRaffle(data);
  };
  const setRaffleDate = useRaffleStore((state) => state.setRaffleDate);
  const raffleDate = useRaffleStore((state) => state.raffleDate);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRaffleDate();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };

    //eslint-disable-next-line
  }, []);

  const fields: Field[] = [
    {
      label: " 1. Selecciona una de tus asociaciones a la que quieres apoyar.",
      name: "selectAsociacion",
      required: true,
      type: "subtitle",
    },
    {
      label: " Fecha de inicio",
      name: "start_date",
      required: true,
      type: "select",
      options: raffleDate?.map((date) => ({
        label: new Date(date.date).toLocaleDateString(),
        value: date.date,
      })),
      customChange: ({ setValue }: any) => {
        setValue("end_date", undefined);
      },
    },
    {
      label: " Fecha de Fin",
      name: "end_date",
      required: true,
      type: "date",
      minDate: "start_date",
    },

    {
      label: "2. Informacion de tu rifa",
      name: "seubtitle",
      type: "subtitle",
    },
    {
      label: "",
      subLabel: "Título de la rifa",
      name: "name",
      required: true,
      type: "text",
    },
    {
      label: "",
      subLabel: "Escribe la frase promocional de tu rifa",
      name: "short_description",
      required: true,
      type: "text",
    },
    {
      label: "",
      subLabel: "Escribe la descripción de tu rifa",
      name: "description",
      required: true,
      type: "textarea",
    },
    {
      label: "3. Método de entrega",
      name: "seubtitle",
      type: "subtitle",
    },

    {
      label: "Elige como quieres entregar tu premio",
      subLabel: "En persona",
      name: "delivery_type",
      required: true,
      type: "radioButton",
      disabledStyle: true,
      options: [
        { label: "En persona", value: 0 },
        { label: "Envio por paqueteria", value: 1 },
        { label: "Acordar con el gandador", value: 2 },
      ],
    },

    {
      label: "Ficha promocional de tu rifa",
      subLabel:
        "La ficha promocional se utiliza para promover la rifa en las redes sociales.",
      required: true,
      name: "image",
      type: "file",
    },

    {
      label: "Banner promocional de tu rifa",
      subLabel:
        "El banner promocional se utiliza para promover la rifa en nuestros catálogos y micro sitios",
      required: true,
      name: "banner",
      type: "file",
    },
  ];

  return (
    <div className="  px-5 shadow">
      <div className="row">
        <FormGenerator
          buttonText="Continuar"
          submitData={submitData}
          fields={fields}
          loading={false}
        />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

import ModalCausa from "../modal/ModalCausa";
import ModalPremio from "../modal/ModalPremio";
import {
  GetAssociations,
  getCategories,
  selectRaffleState,
} from "@/store/slices/raffles";
import { useDispatch, useSelector } from "react-redux";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
export default function ConfiguraRifa({ step, setStep }: any) {
  const { loading, associations } = useSelector(selectRaffleState);

  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(GetAssociations({}) as any);
      dispatch(getCategories({}) as any);
    }, 200);

    return () => clearTimeout(timeoutId);
    //eslint-disable-next-line
  }, []);

  const submitData = async (data: Profile) => { };
  const fields: Field[] = [
    {
      label: " Seleccionar Asociación Civil",
      name: "association",
      required: true,
      type: "select",
      options: associations.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
    },
    {
      label: " 2. Elige una causa o agrega una nueva",
      name: "causa",
      required: true,
      type: "selectItems",
      createTitle: "Agregar una causa",
      selectTitle: "Seleccionar una causa",
      ModalComponent: ModalCausa,
    },
    {
      label: "3. Elige tu premio o agrega uno nuevo",
      name: "prieze",
      required: true,
      type: "selectItems",
      createTitle: "Agregar un premio",
      selectTitle: "Seleccionar un premio",
      ModalComponent: ModalPremio,
    },
    {
      label: "4. Datos de la rifa",
      name: "datos_rifa",
      type: "subtitle",
    },
    {
      label: " Monto a recaudar en pesos MXN",
      required: true,
      name: "datos_rifa",
      type: "number",
    },
    {
      subLabel: "Tu monto a recaudar tiene que ser mayor al valor del premio ($1,500)más tus gastos de recuperación.Te recomendamos un monto a recaudar de: $2, 100.00",
      name: "datos_rifa",
      type: "subtitle",
    },
    {
      label: "  Selecciona el número de boletos para tu rifa",
      name: "sliserRifa",
      required: true,
      type: "sliser",
    },
    {
      label: " Costo por boleto",
      name: "sliserRifa",
      required: true,
      type: "sliser",
    },

    {
      label: "5. Calculadora del costo por boleto",
      name: "calculatorRifas",
      type: "custom",
    },
  ];
  return (
    <div className="px-4 shadow ">
      <p className="text-secondary mt-2 fs-5">
        1. Selecciona una de tus asociaciones a la que quieres apoyar.
      </p>
      <FormGenerator
        buttonText="Continuar"
        submitData={submitData}
        fields={fields}
        loading={loading}
      />
    </div>
  );
}

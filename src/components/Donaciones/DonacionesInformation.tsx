import React from "react";
import Image from "next/image";
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Donation, Donation2 } from "@/types/Model/Profile";
import { setDonationsForm2 } from "@/store/slices/raffles";
export default function DonacionesInformation({ nextStep, backStep }: any) {
  const { loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const submitData = async (data: Donation2) => {
    await dispatch(setDonationsForm2(data) as any);
    nextStep();
  };
  const fields: Field[] = [
    {
      label: "2 / 3  Completa la informacion",
      name: "complete_information",
      type: "title",
      required: true,
    },
    {
      label: "¿Cual es el la condicion de tu producto?*",
      name: "product_condition",
      required: true,
      type: "radioButton",
      options: [
        { label: "Nuevo", value: "nuevo" },
        { label: "Usado", value: "usado" },
      ],
    },

    {
      label: "¿Cuál es el precio de tu producto (En pesos MXN)?*",
      name: "product_price",
      required: true,
      type: "number",
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "product_association",
      required: false,
      type: "select",
      options: [
        { label: "Asociacion 1", value: "1" },
        { label: "Asociacion 2", value: "2" },
        { label: "Asociacion 3", value: "3" },
      ],
    },
    {
      label: "Agrega las fotos de tu premio",
      name: "product_files",
      required: false,
      type: "file",
    },
  ];
  return (
    <div>
      <section className="row m-0 my-3">
        <div className=" col-12 col-md-6    ">
          <Image
            src={imagenDonaciones}
            alt="donation"
            className="w-100 h-auto mx-0 "
          />
        </div>
        <div className="col-12 col-md-6 text-secondary mx-0 pt-5 pt-md-0 ps-md-5">
          <FormGenerator
            buttonText="Continuar"
            submitData={submitData}
            fields={fields}
            loading={loading}
            renderButton={() => (
              <div className="d-flex justify-content-between pt-4 w-100 ">
                <button
                  className="btn btn-outline-secondary btn-sm w-25  "
                  onClick={() => backStep()}
                >
                  Regresar
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm px-5 fs-6  "
                  type="submit"
                >
                  Continuar
                </button>
              </div>
            )}
          />
        </div>
      </section>
    </div>
  );
}

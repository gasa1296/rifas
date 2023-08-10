import React, { useEffect } from "react";
import Image from "next/image";
import imagenDonaciones from "@/assets/img/Premio-donar.jpg";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "@/store/slices/auth";
import { Donation2 } from "@/types/Model/Profile";
import {
  Donations,
  GetAssociations,
  selectRaffleState,
  setDonationsForm2,
} from "@/store/slices/raffles";
export default function DonacionesInformation({ nextStep, backStep }: any) {
  const { loading } = useSelector(selectAuthState);

  const { associations } = useSelector(selectRaffleState);

  const dispatch = useDispatch();

  const submitData = async (data: Donation2) => {
    await dispatch(setDonationsForm2(data) as any);

    const { payload } = await dispatch(Donations({}) as any);
    if (payload) nextStep();
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
      name: "status",
      required: true,
      type: "radioButton",
      options: [
        { label: "Nuevo", value: 0 },
        { label: "Usado", value: 1 },
      ],
    },

    {
      label: "¿Cuál es el precio de tu producto (En pesos MXN)?*",
      name: "value",
      required: true,
      type: "number",
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "association",
      required: false,
      type: "select",
      options: associations.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
    },
    {
      label: "Agrega las fotos de tu premio",
      name: "product_files",
      required: false,
      type: "file",
    },
  ];

  useEffect(() => {
    dispatch(GetAssociations({}) as any);
    //eslint-disable-next-line
  }, []);

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
              <div className="d-flex justify-content-between  w-100 mt-4 ">
                <button
                  className="btn btn-border-pink btn-sm w-25  "
                  onClick={() => backStep()}
                >
                  Regresar
                </button>
                <button
                  className="btn btn-pink btn-sm px-5 fs-6  "
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

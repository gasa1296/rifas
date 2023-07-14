import React from "react";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Donation, } from "@/types/Model/Profile";
import { Donations, setDonationsForm1 } from "@/store/slices/raffles";
export default function DonacionesDescripcion({ nextStep }: any) {
  const { loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const submitData = async (data: Donation) => {
    await dispatch(setDonationsForm1(data) as any);
    nextStep();
  };

  const fields: Field[] = [
    {
      label: "1 / 3  Identifiquemos tu premio",
      name: "identify_prize",
      type: "title",
    },
    {
      label: "¿Cual es el nombre del premio?*",
      name: "prize_name",
      required: true,
      type: "text",
    },

    {
      label: "¿Cual es la descripcion de tu premio?*",
      name: "prize_description",
      required: true,
      type: "text",
    },
    {
      label: "¿Que categoria describe tu producto?*",
      name: "prize_category",
      required: true,
      type: "select",
    },
  ];
  return (
    <div>
      <section className="row m-0 my-3">
        <div className=" col-12 col-md-6 ">
          <Image src={imagenDonaciones} alt=".." className="w-75 mx-5" />
        </div>
        <div className="col-12 col-md-6 text-secondary mx-4 mx-md-0 ">
          <FormGenerator
            buttonText="Continuar"
            submitData={submitData}
            fields={fields}
            loading={loading}
          />
          <div className="d-flex justify-content-end w-75 mw-md-50 ">
            <button
              className="btn btn-outline-secondary btn-sm w-50 fs-6  "
              onClick={() => nextStep()}
            >
              Continuar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

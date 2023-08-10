import React, { useEffect } from "react";
import Image from "next/image";

import imagenDonaciones from "@/assets/img/Premio-donar.jpg";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "@/store/slices/auth";
import { Donation } from "@/types/Model/Profile";
import {
  getCategories,
  selectRaffleState,
  setDonationsForm1,
} from "@/store/slices/raffles";
export default function DonacionesDescripcion({ nextStep }: any) {
  const { loading } = useSelector(selectAuthState);
  const { prizesCategories } = useSelector(selectRaffleState);

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
      name: "name",
      required: true,
      type: "text",
    },

    {
      label: "¿Cual es la descripcion de tu premio?*",
      name: "description",
      required: true,
      type: "textarea",
    },
    {
      label: "¿Que categoria describe tu producto?*",
      name: "category",
      required: true,
      type: "select",
      options: prizesCategories.map((prize) => ({
        label: prize.name,
        value: prize.id,
      })),
    },
  ];

  useEffect(() => {
    dispatch(getCategories({}) as any);
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
        <div className="col-12 col-md-6 text-secondary mx-0 pt-5 pt-md-0 ps-md-5  ">
          <FormGenerator
            buttonText="Continuar"
            submitData={submitData}
            fields={fields}
            loading={loading}
            renderButton={() => (
              <div className="d-flex justify-content-end w-100 ">
                <button
                  className="btn btn-pink btn-sm px-5 fs-6 mt-3 "
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

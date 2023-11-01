import React, { useEffect } from "react";
import Image from "next/image";
import FondoProfile from "../../assets/img/Contacto-bg.jpg";
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";
import { useRouter } from "next/router";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { useSelector } from "react-redux";
import { selectAuthState } from "@/store/slices/auth";

export default function DashboardAsociation() {
  const router = useRouter();
  const { profile } = useSelector(selectAuthState);
  const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);
  const asociations = useAsociatonsStoreDashboard((state) => state.asociations);
  const getAsociations = useAsociatonsStoreDashboard(
    (state) => state.getAsociations
  );
  const submitData = async (data: { association: string }) => {
    router.push(`/dashboard/${data.association}`);
  };

  const fields: Field[] = [
    {
      label: "",
      name: "association",
      required: true,
      type: "select",
      options: asociations?.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
    },
  ];

  useEffect(() => {
    getAsociations();
  }, []);
  return (
    <section className="mx-0 mx-lg-5 position-relative   ">
      <div className="position-absolute top-0 overflow-hidden mx-auto mt-2">
        <Image
          src={FondoProfile}
          alt="fondo-Profile"
          className="w-100  fondo-Profile"
        />
      </div>
      <div className=" mx-0 mx-lg-5 mt-3 mt-lg-2 position-relative pt-4  text-center ">
        <h3 className="contacto w-100  mt-2 "> Mi Cuenta</h3>
      </div>
      <div className="d-flex justify-content-center mt-4 mt-lg-4 ">
        <div
          className=" w-100   mt-4 end-0 p-3 p-lg-5 rounded-1  "
          style={{ background: "#F1ECEF ", maxWidth: "700px" }}
        >
          <p className="title-dashboardAsosation m-0">
            Hola, bienvenido {profile?.full_name}
          </p>
          <p className="subtitle-DashboarAsociation mt-2 mb-0">
            Selecciona una de tus asociaciones con la que te quieras rifar.
          </p>
          <FormGenerator
            buttonText="Seleccionar Asociacion"
            submitData={submitData}
            fields={fields}
            loading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import FormGenerator from "@/components/FormGenerator";
import { useRouter } from "next/router";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
export default function DashboarMicrositioCaracteristicas({
  handleChangeRaffle,
}: any) {
  const router = useRouter();

  const updateMicrosite = useAsociatonsStoreDashboard(
    (state) => state.updateMicrosite
  );
  const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);

  const microsite = useAsociatonsStoreDashboard((state) => state.microsite);

  const submitData = async (data: Profile) => {
    await updateMicrosite(router.query.id as string, { ...microsite, ...data });
  };

  const fields: Field[] = [
    {
      subLabel: "https://www.rifaconcausa.org/sitios/ ",
      name: "slug",
      required: true,
      type: "textSlug",
      default: microsite?.slug,
    },
    {
      subLabel: " ¿Quienes somos?",
      name: "who",
      required: true,
      type: "textarea",
      default: microsite?.who,
    },

    {
      subLabel: "¿Qué hacemos?",
      name: "what",
      required: true,
      type: "textarea",
      default: microsite?.what,
    },
    {
      label: "2. Dirección",
      subLabel: "Calle y número",
      name: "address",
      required: true,
      type: "text",
      default: microsite?.address,
    },
    {
      subLabel: "Código postal",
      name: "zip",
      required: true,
      type: "text",
      default: microsite?.zip,
    },
    {
      label: "Estado",
      name: "state",
      required: false,
      type: "text",
      default: microsite?.state,
    },
    {
      subLabel: "Municipio",
      name: "province",

      type: "text",
      default: microsite?.province,
    },

    {
      subLabel: "Correo de contacto",
      required: false,
      name: "email",
      type: "text",
      default: microsite?.email,
    },

    {
      subLabel: "Teléfono de contacto",
      required: true,
      name: "phone",
      type: "text",
      default: microsite?.phone,
    },
  ];

  if (!microsite) return <> </>;
  return (
    <section className="px-2 px-md-4 py-3 container-cartera ">
      <h6 className="title-micrositio">
        1. Información general de tu Asociación
      </h6>
      <p className="">¿Cómo quieres acceder a tu micrositio?</p>

      <FormGenerator
        buttonText="Guardar"
        submitData={submitData}
        fields={fields}
        loading={isLoading}
      />
    </section>
  );
}

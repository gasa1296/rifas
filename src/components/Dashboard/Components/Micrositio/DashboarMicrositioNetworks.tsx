import React from "react";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { FaRegEdit } from "react-icons/fa";
import FormGenerator from "@/components/FormGenerator";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";
export default function DashboarMicrositioNetworks() {
  const router = useRouter();

  const updateMicrosite = useAsociatonsStoreDashboard(
    (state) => state.updateMicrosite
  );
  const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);
  const submitData = async (data: Profile) => {
    await updateMicrosite(router.query.id as string, { ...microsite, ...data });
  };

  const microsite = useAsociatonsStoreDashboard((state) => state.microsite);
  const fields: Field[] = [
    {
      subLabel: "Facebook link",
      name: "facebook",

      type: "text",
      default: microsite?.facebook,
    },

    {
      subLabel: "Twitter link",
      name: "twitter",

      type: "text",
      default: microsite?.twitter,
    },
    {
      subLabel: "Instagram link",
      name: "instagram",

      type: "text",
      default: microsite?.instagram,
    },
    {
      subLabel: "Tiktok link",
      name: "tiktok",

      type: "text",
      default: microsite?.tiktok,
    },
    {
      subLabel: "YouTube link",
      name: "youtube",

      type: "text",
      default: microsite?.youtube,
    },
    {
      subLabel: "Vimeo link",
      name: "vimeo",

      type: "text",
      default: microsite?.vimeo,
    },
    {
      subLabel: "Linkedin link",
      name: "linkedin",

      type: "text",
      default: microsite?.linkedin,
    },
    {
      subLabel: "Pinterest link",
      name: "pinterest",

      type: "text",
      default: microsite?.pinterest,
    },
  ];
  return (
    <section className="px-4 py-3 container-cartera ">
      <h6 className="title-micrositio">1. Url de redes sociales</h6>

      <FormGenerator
        buttonText="Guardar"
        submitData={submitData}
        fields={fields}
        loading={isLoading}
      />
    </section>
  );
}

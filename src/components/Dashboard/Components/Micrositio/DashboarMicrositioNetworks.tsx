import React from "react";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { FaRegEdit } from "react-icons/fa";
import FormGenerator from "@/components/FormGenerator";
export default function DashboarMicrositioNetworks({
  handleChangeRaffle,
}: any) {
  const submitData = async (data: Profile) => {
    handleChangeRaffle(data);
  };
  const fields: Field[] = [
    {
      subLabel: "Facebook link",
      name: "facebook",
      required: true,
      type: "text",
    },

    {
      subLabel: "Twitter link",
      name: "twitter",
      required: true,
      type: "text",
    },
    {
      subLabel: "Instagram link",
      name: "instragam",
      required: true,
      type: "text",
    },
    {
      subLabel: "Tiktok link",
      name: "tiktok",
      required: true,
      type: "text",
    },
    {
      subLabel: "YouTube link",
      name: "youtube",
      required: true,
      type: "text",
    },
    {
      subLabel: "Vimeo link",
      name: "vimeo",
      required: true,
      type: "text",
    },
    {
      subLabel: "Linkedin link",
      name: "Linkedin",
      required: true,
      type: "text",
    },
    {
      subLabel: "Pinterest link",
      name: "pinterest",
      required: true,
      type: "text",
    },
  ];
  return (
    <section className="px-4 py-3 container-cartera ">
      <h6 className="title-micrositio">1. Url de redes sociales</h6>

      <FormGenerator
        buttonText="Continuar"
        submitData={submitData}
        fields={fields}
        loading={false}
      />
    </section>
  );
}

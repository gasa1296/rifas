import React from "react";
import FormGenerator from "../../../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";
export default function DashboardMicrositioBanners({
  handleChangeRaffle,
}: any) {
  const router = useRouter();

  const updateMicrosite = useAsociatonsStoreDashboard(
    (state) => state.updateMicrosite
  );
  const microsite = useAsociatonsStoreDashboard((state) => state.microsite);
  const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);
  const submitData = async (data: Profile) => {
    await updateMicrosite(router.query.id as string, {
      ...microsite,
      ...data,
      oldImages: microsite.images,
    });
  };

  const gallery =
    microsite?.images && microsite?.images?.length > 0
      ? microsite?.images?.map((image: any) => image.file)
      : [];
  const fields: Field[] = [
    {
      subLabel: "Agrega el logotipo de tu asociación",
      name: "image",
      required: true,
      type: "file",
      maxFile: 1,
      default: microsite?.image ? [microsite?.image] : [],
    },

    {
      subLabel: "Agrega la imagen principal de tu asociación (1024x1024px)",
      name: "main_image",
      required: true,
      type: "file",
      maxFile: 1,
      default: microsite?.main_image ? [microsite?.main_image] : [],
    },
    {
      subLabel:
        "Agrega las imagenes o videos para tu galería (1024x 768 px), hasta 10 imágenes o videos",
      name: "images",
      required: true,
      type: "file",
      maxFile: 10,
      default: gallery,
    },
  ];
  return (
    <section className="px-4 py-3 container-cartera ">
      <h6 className="title-micrositio">
        {" "}
        1. Imagenes generales de tu Asociación
      </h6>

      <FormGenerator
        buttonText="Continuar"
        submitData={submitData}
        fields={fields}
        loading={isLoading}
      />
    </section>
  );
}

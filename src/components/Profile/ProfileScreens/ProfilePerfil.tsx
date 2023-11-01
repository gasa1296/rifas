import React, { useEffect } from "react";
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../../FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, UpdateProfile, selectAuthState } from "@/store/slices/auth";
import { Profile } from "@/types/Model/Profile";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { UpdateAsociacion } from "@/store/slices/auth";
import HeaderDashboard from "@/components/Dashboard/Components/HeaderDashboard";
import toast from "react-hot-toast";

export default function ProfilePerfil({ nextStep }: any) {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(selectAuthState);

  const submitData = async (data: Profile) => {
    const { payload } = await dispatch(UpdateProfile(data) as any);
    if (payload) {
      toast.success("Perfil actualizado correctamente");
    }
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "full_name",
      type: "text",
      default: profile?.full_name,
    },
    {
      label: "Correo electronico",
      name: "email",
      disabled: true,
      type: "text",
      default: profile?.email,
    },
    {
      label: "Empresa (Opcional)",
      name: "company_name",
      type: "text",
      default: profile?.company_name,
    },
    {
      label: "Perfil",
      required: false,
      name: "image",
      type: "file",
      maxFile: 1,
      default: profile?.image ? [profile?.image || ""] : [],
    },
  ];

  return (
    <section className=" ">
      <HeaderDashboard screen="Mi perfil" profile />
      <div className="pt-3 background-dashboard mt-3 px-3">
        <FormGenerator
          buttonText="Actualizar Perfil"
          submitData={submitData}
          fields={fields}
          loading={loading}
        />
      </div>
    </section>
  );
}

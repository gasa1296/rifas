import React from "react";
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../../FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from "@/types/Model/Profile";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import HeaderDashboard from "../Components/HeaderDashboard";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { UpdateAsociacion } from "@/store/slices/auth";

export default function DashboardProfile({ nextStep }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const associations = useAsociatonsStoreDashboard(
    (state) => state.asociations
  );

  const filterAssociation = associations.find(
    (association) => association.id === Number(router.query.id)
  );

  const submitData = async (data: Profile) => {
    const { payload } = await dispatch(
      UpdateAsociacion({ ...data, id: filterAssociation.id }) as any
    );
    //if (payload) nextStep();
  };

  const fields: Field[] = [
    {
      label: " 1 / 2 Datos de asociacion",
      name: "",
      type: "title",
    },
    {
      label: "Nombre(s) del representante legal*",
      name: "first_name",
      required: true,
      type: "text",
      default: filterAssociation?.first_name,
    },
    {
      label: "Apellido Paterno del representante legal*",
      name: "last_name",
      required: true,
      type: "text",
      default: filterAssociation?.last_name,
    },
    {
      label: "Apellido Materno del representante legal*",
      required: true,
      name: "last_name2",
      type: "text",
      default: filterAssociation?.last_name2,
    },
    {
      label: "Razón Social*",
      required: true,
      name: "association_name",
      type: "text",
      default: filterAssociation?.association_name,
    },
    {
      label: "RFC*",
      required: true,
      name: "rfc",
      type: "text",
      default: filterAssociation?.rfc,
    },
    {
      label: "Regimen Fiscal*",
      required: false,
      name: "regime",
      type: "text",
      default: filterAssociation?.regime,
      options: [
        {
          label: "Régimen General de las personas morales",
          value: "Regimen General",
        },
        {
          label: "Régimen de las personas morales con fines no lucrativos",
          value: "Regimen no lucrativos",
        },
        {
          label:
            "Régimen de las personas morales con fines no lucrativos autorizadas para recibir donativos deducibles",
          value: "Regimen no lucrativoscon donaciones",
        },
      ],
    },
    {
      label: "Correo electronico*",
      required: false,
      name: "email",
      type: "email",
      default: filterAssociation?.email,
    },
    {
      label: "Teléfono*",
      required: false,
      name: "phone",
      type: "text",
      default: filterAssociation?.phone,
    },
    {
      label: "Cuenta de PayPal*",
      required: false,
      name: "paypal",
      type: "text",
      default: filterAssociation?.paypal,
    },
    {
      label: "Agrega el logotipo de tu asociacion*",
      required: false,
      name: "image",
      type: "file",
      maxFile: 1,
      default: [filterAssociation?.image],
    },
    {
      label: " 2 / 2 Dirección Fiscal",
      name: "address",
      type: "title",
    },
    {
      label: " ¿La dirección de la asociación es diferente a la fiscal?",
      required: false,
      name: "fiscal_address2",
      type: "checkbox",
      default: filterAssociation?.fiscal_address2,
    },

    {
      label: "Calle y número*",
      required: false,
      name: "address",
      type: "text",
      default: filterAssociation?.address,
    },
    {
      label: "Código postal*",
      required: false,
      name: "zip",
      type: "number",
      default: filterAssociation?.zip,
    },
    {
      label: "Estado*",
      required: false,
      name: "state",
      type: "text",
      default: filterAssociation?.state,
    },
    {
      label: "Municipio*",
      required: false,
      name: "province",
      type: "text",
      default: filterAssociation?.province,
    },
    {
      label: "RFC*",
      required: false,
      name: "rfc2",
      type: "text",
      default: filterAssociation?.rfc2,
    },
  ];

  return (
    <section className=" ">
      <HeaderDashboard screen="Mi perfil" />
      <div className="pt-3 background-dashboard mt-3 px-3">
        <FormGenerator
          buttonText="Actualizar Perfil"
          submitData={submitData}
          fields={fields}
          //loading={loading}
        />
      </div>
    </section>
  );
}

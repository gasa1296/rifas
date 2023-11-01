import { Field } from "@/types/Component/FormGenerator";

export const registerFields: Field[] = [
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
  },
  {
    label: "Apellido Paterno del representante legal*",
    name: "last_name",
    required: true,
    type: "text",
  },
  {
    label: "Apellido Materno del representante legal*",
    required: true,
    name: "last_name2",
    type: "text",
  },
  {
    label: "Razón Social*",
    required: true,
    name: "association_name",
    type: "text",
  },
  {
    label: "RFC*",
    required: true,
    name: "rfc",
    type: "text",
  },
  {
    label: "Regimen Fiscal*",
    required: false,
    name: "regime",
    type: "select",
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

    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "Teléfono*",
    required: true,
    name: "phone",
    type: "text",
  },
  {
    label: "Cuenta de PayPal*",
    required: true,
    name: "paypal",
    type: "text",
    tooltip: "Cuenta de PayPal para recibir donaciones",
  },
  {
    label: "Agrega el logotipo de tu asociacion*",
    required: true,
    name: "image",
    type: "file",
    maxFile: 1,
  },
  {
    label: " 2 / 2 Dirección Fiscal",
    name: "address",
    type: "title",
  },
  {
    label: " ¿La dirección de la asociación es diferente a la fiscal?",
    required: true,
    name: "fiscal_address2",
    type: "checkbox",
  },

  {
    label: "Calle y número*",
    required: true,
    name: "address",
    type: "text",
  },
  {
    label: "Código postal*",
    required: true,
    name: "zip",
    type: "number",
  },
  {
    label: "Estado*",
    required: true,
    name: "state",
    type: "text",
  },
  {
    label: "Municipio*",
    required: true,
    name: "province",
    type: "text",
  },
  {
    label: "RFC*",
    required: true,
    name: "rfc2",
    type: "text",
  },
];

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
    label: "RFC**",
    required: true,
    name: "rfc",
    type: "text",
  },
  {
    label: "Regimen Fiscal*",
    required: false,
    name: "regime",
    type: "text",
  },
  {
    label: "Correo electronico",
    required: false,
    name: "email",
    type: "email",
  },
  {
    label: "Teléfono",
    required: false,
    name: "phone",
    type: "number",
  },
  {
    label: "Cuenta de PayPal",
    required: false,
    name: "paypal",
    type: "text",
  },
  {
    label: "Agrega el logotipo de tu asociacion",
    required: false,
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
    required: false,
    name: "fiscal_address2",
    type: "checkbox",
  },

  {
    label: "Calle y número",
    required: false,
    name: "address",
    type: "text",
  },
  {
    label: "Código postal",
    required: false,
    name: "zip",
    type: "number",
  },
  {
    label: "Estado",
    required: false,
    name: "state",
    type: "text",
  },
  {
    label: "Municipio",
    required: false,
    name: "province",
    type: "text",
  },
  {
    label: "RFC*",
    required: false,
    name: "rfc2",
    type: "text",
  },
];

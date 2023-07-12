import { Field } from "@/types/Component/FormGenerator";

export const registerFields: Field[] = [
  {
    label: " 1 / 2 Datos de asociacion",
    name: "",
    type: "title",
  },
  {
    label: "Nombre(s) del representante legal*",
    name: "name",
    required: true,
    type: "text",
  },
  {
    label: "Apellido Paterno del representante legal*",
    name: "father_name",
    required: true,
    type: "text",
  },
  {
    label: "Apellido Materno del representante legal*",
    required: true,
    name: "mother_name",
    type: "text",
  },
  {
    label: "Razón Social*",
    required: true,
    name: "business_name",
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
    name: "tax_regime",
    type: "text",
  },
  {
    label: "Correo electronico",
    required: false,
    name: "Correo_electronico",
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
    name: "paypal_account",
    type: "text",
  },
  {
    label: "Agrega o arrastra tu foto aqui",
    required: false,
    name: "imagen",
    type: "text",
  },
  {
    label: " 2 / 2 Dirección Fiscal",
    name: "fiscal_address",
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
    name: "street_number",
    type: "text",
  },
  {
    label: "Código postal",
    required: false,
    name: "postal_code",
    type: "number",
  },
  {
    label: "Estado",
    required: false,
    name: "select",
    type: "text",
  },
  {
    label: "Municipio",
    required: false,
    name: "municipality",
    type: "text",
  },
  {
    label: "RFC**",
    required: true,
    name: "rfc",
    type: "text",
  },
];

import { Field, FieldType } from "@/types/Component/FormGenerator";
import InputText from "./Fields/InputText";
import InputEmail from "./Fields/InputEmail";
import InputCheckbox from "./Fields/InputCheckbox";
import InputPassword from "./Fields/InputPassword";
import InputNumber from "./Fields/InputNumber";
import InputTitle from "./Fields/InputTitle";

export const getDefaultValues = (fields: Field[]) => {
  const defaultValues: any = {};

  fields.map((field) => (defaultValues[field.name] = field.default || ""));

  return defaultValues;
};

export const FieldComponents: FieldType = {
  text: InputText,
  email: InputEmail,
  checkbox: InputCheckbox,
  password: InputPassword,
  number: InputNumber,
  title: InputTitle,
};

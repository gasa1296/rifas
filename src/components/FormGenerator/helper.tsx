import { Field, FieldType } from "@/types/Component/FormGenerator";
import InputText from "./Fields/InputText";
import InputEmail from "./Fields/InputEmail";
import InputCheckbox from "./Fields/InputCheckbox";
import InputPassword from "./Fields/InputPassword";
import InputNumber from "./Fields/InputNumber";
import InputTitle from "./Fields/InputTitle";
import InputRadioButton from "./Fields/InputRadioButton";
import InputSelect from "./Fields/inputSelect";
import InputFile from "./Fields/InputFile";
import InputTextarea from "./Fields/InputTextarea";
import InputSelectItems from "./Fields/InputSelectItems";
import InputSubtitle from "./Fields/InputSubtitle";
import InputSliser from "./Fields/InputSliser";

import InputDate from "./Fields/InputDate";
import InputCustom from "./Fields/InputCustom";

export const getDefaultValues = (fields: Field[]) => {
  const defaultValues: any = {};

  fields.map((field) => {
    if (
      field.type !== "title" &&
      field.type !== "custom" &&
      field.type !== "subtitle"
    )
      defaultValues[field.name] = field.default || "";
  });

  return defaultValues;
};

export const FieldComponents: FieldType = {
  text: InputText,
  email: InputEmail,
  checkbox: InputCheckbox,
  password: InputPassword,
  number: InputNumber,
  title: InputTitle,
  radioButton: InputRadioButton,
  select: InputSelect,
  file: InputFile,
  textarea: InputTextarea,
  selectItems: InputSelectItems,
  subtitle: InputSubtitle,
  sliser: InputSliser,
  custom: InputCustom,
  date: InputDate,
};

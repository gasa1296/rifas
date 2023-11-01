export interface Field {
  label?: string;
  name: string;
  required?: boolean;
  type: FieldTypeString;
  default?: any;
  options?: { label: string; value: string | number }[];
  maxFile?: number;
  ModalComponent?: any;
  Component?: any;
  createTitle?: string;
  selectTitle?: string;
  subLabel?: string;
  disabledStyle?: boolean;
  marks?: any;
  maxRange?: number;
  customChange?: any;
  minDate?: string;
  tooltip?: string;
  disabled?: boolean;
}

export interface FieldType {
  text: any;
  email: any;
  checkbox: any;
  password: any;
  number: any;
  title: any;
  radioButton: any;
  select: any;
  file: any;
  textarea: any;
  selectItems: any;
  subtitle: any;
  sliser: any;
  custom: any;
  date: any;
  range: any;
  captchap: any;
}
export type FieldTypeString =
  | "text"
  | "email"
  | "checkbox"
  | "password"
  | "number"
  | "title"
  | "radioButton"
  | "select"
  | "file"
  | "textarea"
  | "selectItems"
  | "subtitle"
  | "sliser"
  | "custom"
  | "date"
  | "range"
  | "captchap";

export interface SelectedItems {
  type: "cause" | "prize";
  name: string;
  description: string;
  goal: number;
  value: number;
  image?: string;
}

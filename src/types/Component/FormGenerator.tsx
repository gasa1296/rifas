export interface Field {
  label: string;
  name: string;
  required?: boolean;
  type: FieldTypeString;
  default?: any;
}

export interface FieldType {
  text: any;
  email: any;
  checkbox: any;
  password: any;
  number: any;
  title: any;
  radioButton: any
  select: any
  file: any
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
  ;

import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  Component: any;
}
export default function InputCustom(props: Props) {
  const Component = props.Component;

  return <Component {...props} />;
}

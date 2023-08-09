import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
}
export default function InputTitle({
  register,
  label,
  name,
  required,
  error,
}: Props) {
  return (
    <div>
      <p className=" text-dark fw-medium fs-3">{label}</p>
    </div>
  );
}

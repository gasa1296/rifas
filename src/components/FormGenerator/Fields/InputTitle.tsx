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
      <p className={`${error && "text-danger"}`}>{label}</p>
    </div>
  );
}

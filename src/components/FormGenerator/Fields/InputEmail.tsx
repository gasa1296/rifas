import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
}
export default function InputEmail({
  register,
  label,
  name,
  required,
  error,
}: Props) {
  return (
    <div>
      <label className={`${error && "text-danger"} title-form-generator`} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="email"
        {...register(name, { required })}
        className={`w-100 form-control my-2 fs-5 ${error && "border-danger "}`}
      />
    </div>
  );
}

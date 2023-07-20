import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
}
export default function InputTextarea({
  register,
  label,
  name,
  required,
  error,
}: Props) {
  return (
    <div>
      <label
        className={`${error && "text-danger"} fs-5 text-secondary`}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        {...register(name, { required })}
        className={`w-100 form-control my-2 fs-5 ${error && "border-danger "}`}
        id={name}
        name={name}
        cols={5}
        rows={5}
      ></textarea>
    </div>
  );
}

import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  subLabel: string;
}
export default function InputText({
  register,
  label,
  name,
  required,
  error,
  subLabel,
}: Props) {
  return (
    <div>
      <label
        className={`${error && "text-danger"} title-form-generator`}
        htmlFor={name}
      >
        {label}
      </label>
      {subLabel === "" ? null : (
        <p className={` text-secondary fs-6 mb-0 ${error && "text-danger"}`}>
          {subLabel}
        </p>
      )}

      <input
        id={name}
        name={name}
        type="text"
        {...register(name, { required })}
        className={`w-100 form-control my-2 fs-5 m-0 ${error && "border-danger "
          }`}
      />
    </div>
  );
}

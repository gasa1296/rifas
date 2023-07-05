import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
}
export default function InputText({
  register,
  label,
  name,
  required,
  error,
}: Props) {
  return (
    <div className="my-3">
      <input
        id={name}
        name={name}
        type="checkbox"
        {...register(name, { required })}
        className={` form-check-input ${error && "border-danger"} fs-5`}
      />
      <label
        className={`form-check-label fw-bold ps-2 fs-6   ${error && "text-danger "}`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}

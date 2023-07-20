import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  options?: { label: string; value: string }[];
}
export default function InputSelect({
  register,
  label,
  name,
  required,
  error,
  options,
}: Props) {
  return (
    <div>
      <label
        className={`${error && "text-danger"} fs-5 text-secondary `}
        htmlFor={name}
      >
        {label}
      </label>

      <select
        {...register(name, { required })}
        className={`form-select form-select-md my-2 fs-5 w-100 ${
          error && "border-danger "
        }`}
      >
        <option selected></option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

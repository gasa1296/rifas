import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  subLabel: string;
  disabled?: boolean;
}
export default function InputTextSlug({
  register,
  label,
  name,
  required,
  error,
  subLabel,
  disabled,
}: Props) {
  return (
    <div className="d-md-flex d-block align-items-center justify-content-cneter">
      <label
        className={`${error && "text-danger"} title-form-generator `}
        htmlFor={name}
      >
        {label}
      </label>
      {subLabel === "" ? null : (
        <p
          className={` text-secondary fs-6 mb-0 pe-2 ${error && "text-danger"}`}
        >
          {subLabel}
        </p>
      )}

      <input
        id={name}
        name={name}
        disabled={disabled}
        type="text"
        {...register(name, { required })}
        className={`w-100 form-control my-2 fs-5 m-0 ${
          error && "border-danger "
        }`}
      />
    </div>
  );
}

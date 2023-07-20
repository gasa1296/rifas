import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  options?: { label: string; value: string }[];
}
export default function InputRadioButton({
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
        className={`${error && "text-danger"} fs-5 text-secondary`}
        htmlFor={name}
      >
        {label}
      </label>

      <div className="d-flex flex-wrap my-3">
        {options?.map((option, index) => (
          <div
            key={index}
            className=" btn btn-outline-secondary opacity-75  d-flex align-items-center me-2"
          >
            <input
              {...register(name, { required })}
              name={name}
              className="form-check-input mt-0"
              type="radio"
              id={`${name}${index + 1}`}
            />
            <label
              className="text-gray m-0 ms-2 "
              htmlFor={`${name}${index + 1}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

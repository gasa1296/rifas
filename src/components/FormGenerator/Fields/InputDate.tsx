import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
}
export default function InputDate({
  register,
  label,
  name,
  required,
  error,
}: Props) {
  return (
    <div className="col-5">
      <label
        className={`${error && "text-danger"} fs-5 text-secondary my-2`}
        htmlFor={name}
      >
        {label}
      </label>

      <div className="d-flex ">
        <div className="col-5 col-md-7 d-md-flex d-flex ">
          <input
            type="datetime-local"
            className={`w-100 form-control my-2 fs-5 m-0 ${
              error && "border-danger "
            }`}
            {...register(name, { required })}
          />
        </div>
      </div>
    </div>
  );
}

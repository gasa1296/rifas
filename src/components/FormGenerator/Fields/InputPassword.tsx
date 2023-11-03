import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  validate?: (value: string, payload: any) => void;
  watch?: any;
}
export default function InputPassword({
  register,
  label,
  name,
  required,
  error,
  validate = () => {},
  watch,
}: Props) {
  const values = watch();
  return (
    <div>
      <label
        className={`${error && "text-danger"} title-form-generator`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="password"
        {...register(name, {
          required,
          validate: (value: string) => validate(value, values),
        })}
        className={`w-100 form-control my-2 fs-5  ${error && "border-danger "}`}
      />
      <p className="text-danger ">{error?.message} </p>
    </div>
  );
}

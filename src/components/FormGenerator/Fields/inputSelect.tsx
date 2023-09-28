import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  options?: { label: string; value: string }[];
  setValue: any;
  customChange: any;
  watch: any;
}
export default function InputSelect({
  register,
  label,
  name,
  required,
  error,
  options,
  setValue,
  customChange,
  watch,
}: Props) {
  const values: any = watch();
  return (
    <div>
      <label
        className={`${error && "text-danger"} title-form-generator `}
        htmlFor={name}
      >
        {label}
      </label>

      <select
        {...register(name, { required })}
        className={`form-select form-select-md my-2 fs-5 w-100 ${
          error && "border-danger "
        }`}
        onChange={(e) => {
          setValue(name, e.target.value);
          customChange &&
            customChange({ setValue, newValue: e.target.value, values });
        }}
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

import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  setValue: any;
  watch: any;
  customChange: any;
}
export default function InputNumber({
  register,
  label,
  name,
  required,
  setValue,
  error,
  watch,
  customChange,
}: Props) {
  const values: any = watch();
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
        type="number"
        {...register(name, { required })}
        className={`w-100 form-control my-2 fs-5 ${error && "border-danger "}`}
        onChange={(e) => {
          setValue(name, e.target.value);
          customChange &&
            customChange({ setValue, newValue: e.target.value, values });
        }}
      />
    </div>
  );
}

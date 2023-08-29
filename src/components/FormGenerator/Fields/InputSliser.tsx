import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  marks?: any;
  setValue: any;
  watch: any;
  customChange: any;
}

export default function InputSliser({
  label,
  name,
  error,
  setValue,
  register,
  required,
  marks,
  customChange,
  watch,
}: Props) {
  const values: any = watch();
  const handleChange = (value: any) => {
    setValue(name, marks[value]);
    customChange({ setValue, newValue: marks[value], values });
  };

  return (
    <div className="my-3">
      <label
        className={`title-form-generator ${error && "text-danger "}`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mx-4 my-3 mb-5">
        <Slider
          {...register(name, { required })}
          min={0}
          max={Object.keys(marks).length - 1}
          marks={marks}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

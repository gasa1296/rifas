import React from "react";
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: string;
}
export default function InputSelect({
    register,
    label,
    name,
    required,
    error,
}: Props) {
    return (
        <div>


            <label className={`${error && "text-danger"} fs-5 text-secondary `} htmlFor={name}>
                {label}
            </label>

            <select {...register(name, { required })} className="form-select form-select-md mb-3 w-100">
                <option selected></option>
                <option value="1"></option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
            {/*  <input
                id={name}
                name={name}
                type="email"
                {...register(name, { required })}
                className={`w-100 form-control my-2 fs-5 ${error && "border-danger "}`}
            /> */}
        </div>
    );
}

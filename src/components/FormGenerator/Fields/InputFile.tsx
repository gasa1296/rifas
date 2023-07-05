import React from "react";
import { AiFillCamera, } from "react-icons/ai";

interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: any;
}
export default function InputFile({
    register,
    label,
    name,
    required,
    error,
}: Props) {
    return (
        <div>
            <label className={`${error && "text-danger"} fs-5 text-secondary`} htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type="file"
                {...register(name, { required })}
                className={`w-100  my-2 fs-5 ${error && "border-danger "}`}
            />
            <button className="border-1 p-2 btm btn-light ">
                <AiFillCamera size={30} />
                <p className="text-secondary">Agrega o arrastra
                    tus fotos aquí</p>
            </button>
        </div>
    );
}

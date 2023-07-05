import React from "react";
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: string;
}
export default function InputRadioButton({
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
            {/*      <input
                id={name}
                name={name}
                type="password"
                {...register(name, { required })}
                className={`w-100 form-control my-2 fs-5  ${error && "border-danger "}`}
            />
 */}
            <div className="d-flex">
                <div className="input-group w-25 m-2 d-flex">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="radio" />
                    </div>
                    <input type="text" className="form-control" placeholder='Nuevo' />
                </div>
                <div className="input-group w-25 m-2">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="radio" />
                    </div>
                    <input type="text" className="form-control" placeholder='Usado' />
                </div>
            </div>

        </div>
    );
}

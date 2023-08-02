import React from "react";
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: string;
}
export default function InputSliser({
    register,
    label,
    name,
    required,
    error,
}: Props) {
    return (
        <div className="my-3">
            <label
                className={`form-check-label fw-bold ps-2 fs-6 my-2  ${error && "text-danger "}`}
                htmlFor={name}
            >
                {label}
            </label>
            <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                id="customRange2"
            />

        </div>
    );
}
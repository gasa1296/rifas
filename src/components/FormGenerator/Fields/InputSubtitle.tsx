import React from "react";
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: any;
    subLabel: string;
}
export default function InputSubtitle({
    register,
    label,
    name,
    required,
    error,
    subLabel
}: Props) {
    return (
        <section>
            {label && <label className="opacity-75 mt-3 fs-4 fw-medium ">{label}</label>}
            {subLabel && <p className=" subtitle-form-generator mb-0 ">{subLabel}</p>}
        </section>
    );
}

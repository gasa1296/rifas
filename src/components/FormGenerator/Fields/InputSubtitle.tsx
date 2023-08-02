import React from "react";
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: any;
}
export default function InputSubtitle({
    register,
    label,
    name,
    required,
    error,
}: Props) {
    return (
        <div>
            <p className="text-secondary mt-2 fs-5">{label}</p>
        </div>
    );
}

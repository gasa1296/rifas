import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
}
export default function InputTitle({
  register,
  label,
  name,
  required,
  error,
}: Props) {
  return (
    <div>
      <p className="  fw-medium fs-3" style={{ color: "#C3286D" }}>
        {label}
      </p>
    </div>
  );
}

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  subLabel: string;
  setValue: any;
}
export default function InputCaptchap({
  register,
  label,
  name,
  required,
  setValue,
  error,
}: Props) {
  const [captchaResponse, setCaptchaResponse] = useState(null);

  function handleCaptcha(response: any) {
    setCaptchaResponse(response);
    setValue(name, response);
  }

  console.log("Test", process.env.NEXT_PUBLIC_CAPTCHAP_ID || "");

  return (
    <div>
      <label
        className={` form-check-label title-form-generator  ${
          error && "text-danger "
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_CAPTCHAP_ID || ""}
        onChange={handleCaptcha}
      />
      <input
        id={name}
        name={name}
        type="text"
        {...register(name, { required })}
        className="d-none"
      />
    </div>
  );
}

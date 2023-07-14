import React, { useState } from "react";
import { FaArrowLeft, FaCheck, FaArrowUp } from "react-icons/fa";
import { useRouter } from "next/router";

interface Props {
  tabs: {
    label: string;
    Component: any;
  }[];
  hasHeader?: boolean;
}

export default function Tabs({ tabs, hasHeader = true }: Props) {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const nextStep = (customStep?: number) => {
    if (step < tabs.length - 1) setStep(customStep || step + 1);
  };
  const backStep = (customStep?: number) => {
    if (step > 0) setStep(customStep || step - 1);
  };

  const initialStep = () => setStep(0)

  const renderComponent = () => {
    const Component = tabs[step].Component;

    return <Component nextStep={nextStep} backStep={backStep} initialStep={initialStep} />;
  };

  return (
    <div className=" mx-5 mt-5">
      {hasHeader && (
        <div className="border-bottom  position-relative ">
          <div className=" text-secondary opacity-75 fs-5 d-flex align-items-center position-absolute ">
            <FaArrowLeft size={17} />
            <p
              style={{ cursor: "pointer" }}
              className="m-0 px-2 d-none d-md-block text"
              onClick={() => router.push("/")}
            >
              Volver al inicio
            </p>
          </div>
          <ul className=" d-flex flex-column flex-lg-row  list-unstyled align-items-center justify-content-center">
            {tabs.map((tab, index) => (
              <li
                className={`mx-3 opacity-75  ${index < step
                  ? "text-success text-bold fw-medium opacity-100 "
                  : "text-secondary "
                  } fs-5 d-flex align-items-center  `}
              >
                <FaCheck size={17} />
                <p className="m-0 px-2">
                  0{index + 1}.{tab.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {renderComponent()}
    </div>
  );
}

import React, { useState } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

interface Props {
  tabs: {
    label: string;
    Component: any;
  }[];
}

export default function Tabs({ tabs }: Props) {
  const [step, setStep] = useState(0);

  const nextStep = (customStep?: number) => {
    if (step < tabs.length - 1) setStep(customStep || step + 1);
  };
  const backStep = (customStep?: number) => {
    if (step > 0) setStep(customStep || step - 1);
  };

  const renderComponent = () => {
    const Component = tabs[step].Component;

    return <Component nextStep={nextStep} backStep={backStep} />;
  };

  return (
    <div>
      <div className="border-bottom  position-relative ">
        <div className="mx-3 text-secondary opacity-75 fs-5 d-flex align-items-center position-absolute ">
          <FaArrowLeft size={17} />
          <p className="m-0 px-2 d-none d-md-block text">Volver al inicio</p>
        </div>
        <ul className=" d-flex flex-column flex-lg-row  list-unstyled align-items-center justify-content-center">
          {tabs.map((tab, index) => (
            <li
              className={`mx-3 opacity-75  ${
                index < step
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

      {renderComponent()}
    </div>
  );
}

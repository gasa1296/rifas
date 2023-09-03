import Image from "next/image";
import React, { ReactElement, useState } from "react";
import LogoRifas from "@/assets/img/logoRifas.svg";
import { SelectedItems } from "@/types/Component/FormGenerator";
import { Cause, Prize } from "../Components/SelectItems";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  ModalComponent: any;
  createTitle?: string;
  selectTitle?: string;
  setValue: any;
}

const types: { cause: any; prize: any } = {
  cause: Cause,
  prize: Prize,
};

export default function InputSelectItems({
  register,
  label,
  name,
  required,
  error,
  ModalComponent,
  createTitle,
  selectTitle,
  setValue,
}: Props) {
  const [show, setShow] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);
  const [selected, setSelected] = useState<null | SelectedItems>(null);

  const SelectedComponent = types[selected?.type || "cause"];

  const handleClose = () => {
    setShow(false);
    setActiveSelect(false);
  };
  const handleShow = (e: any) => {
    e.preventDefault();

    setShow(true);
  };

  const handleSubmit = (data: any) => {
    setSelected(data);
    setValue(name, data);
    setShow(false);
  };

  const resetValue = () => {
    setSelected(null);
    setValue(name, null);
  };

  return (
    <div className="">
      <label
        className={`${error && "text-danger"} opacity-75 mt-3 fs-4 fw-medium `}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        {...register(name, { required })}
        className="d-none"
      />
      <ModalComponent
        activeSelect={activeSelect}
        handleSubmit={handleSubmit}
        show={show}
        handleClose={handleClose}
      />
      {selected ? (
        <SelectedComponent selectedItem={selected} resetValue={resetValue} />
      ) : (
        <div className="d-lg-flex col-12  m-auto mb-3 mt-2  ">
          <button
            onClick={(e) => {
              handleShow(e);
              setActiveSelect(true);
            }}
            className=" btn btn-pink col-12 col-lg-6 mt-lg-0  my-4 "
          >
            {selectTitle}
          </button>
          <button
            className=" mx-0 mx-lg-2 btn btn-withe  col-12 col-lg-6 mt-lg-0 my-0 my-lg-4"
            onClick={handleShow}
          >
            {createTitle}
          </button>
        </div>
      )}
    </div>
  );
}

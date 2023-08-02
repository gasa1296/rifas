import Image from "next/image";
import React, { useState } from "react";
import LogoRifas from "@/assets/img/logoRifas.svg"
interface Props {
    register: any;
    label: string;
    name: string;
    required?: boolean;
    error?: any;
    ModalComponent: any;
    createTitle?: string;
    selectTitle?: string;
}
export default function InputSelectItems({
    register,
    label,
    name,
    required,
    error,
    ModalComponent,
    createTitle,
    selectTitle
}: Props) {

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState<null | any>(null);


    const handleClose = () => {
        setShow(false)
    };
    const handleShow = (e: any) => {
        e.preventDefault()

        setShow(true)
    };

    const handleSubmit = (data: any) => {
        setSelected(data)
        setShow(false)
    }
    return (
        <div className="">
            <label
                className={`${error && "text-danger"} fs-5 text-secondary `}
                htmlFor={name}
            >
                {label}
            </label>
            <ModalComponent handleSubmit={handleSubmit} show={show} handleClose={handleClose} />
            {selected
                ? <div>
                    <p className="m-0 mt-2">{selected?.title}</p>
                    <div className="d-flex mt-2  ">

                        <Image src={LogoRifas} alt="logorifas" className="mx-3 " />
                        <div className=" ">
                            <h6 className="lh-1 ">{selected.name}</h6>
                            <p className="m-0 lh-sm">{selected?.message}</p>
                            <button className="btn btn-light  mt-3  mb-4" onClick={() => {
                                setSelected(null)
                            }}>{selected.buttonText}</button>
                        </div>

                    </div>

                </div> : <div className="d-lg-flex col-12  m-auto mb-3 mt-2  ">
                    <button className=" btn btn-dark col-12 col-lg-6 mt-lg-0  my-4 ">
                        {selectTitle}
                    </button>
                    <button
                        className=" mx-2 btn btn-light border col-12 col-lg-6 mt-lg-0 my-4"
                        onClick={handleShow}
                    >
                        {createTitle}
                    </button>
                </div>}

        </div>
    );
}

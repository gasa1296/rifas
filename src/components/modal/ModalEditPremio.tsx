import React from 'react'
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from 'react-redux';
import { selectRaffleState } from '@/store/slices/raffles';

export default function ModalEditPremio({ handleClose, showScreenEditPremio, setShowScreenEditPremio }: any) {
    const submitData = async (data: Profile) => {
        handleChangeRaffle(data);
    };
    const { loading } = useSelector(selectRaffleState);


    const fields: Field[] = [
        {
            label: "¿Cuál es el nombre de la premio? ",
            name: "name-cause",
            required: true,
            type: "text",
        },
        {
            label: "¿Cuál es la descripción de tu premio?",
            name: "descriptions-cause",
            required: true,
            type: "text",
        },
        {
            label: "¿Qué categoría describe mejor tu producto?*",
            name: "category-cause",
            required: true,
            type: "select"
        },
        {
            label: "¿Cuál es el precio de tu producto(pesos MXN)?*",
            name: "phone",
            required: true,
            type: "number",
        },
        ,
        {
            label: "¿Quieres asignar tu premio a alguna Asociación?",
            name: "association",
            required: false,
            type: "select",

        },
        {
            label: "¿Cuál es la condición de tu producto?*",
            name: "status",
            required: true,
            type: "radioButton",
            options: [
                { label: "Nuevo", value: "nuevo" },
                { label: "Usado", value: "usado" },
            ],
        },
        {
            label: "Agrega las fotos de tu premio",
            name: "image",
            required: false,
            type: "file",
        },

    ];
    return (
        <>
            {showScreenEditPremio

                ? <div>
                    <Modal className="custom-modal" show={showScreenEditPremio} setShowScreen={handleClose} >
                        <Modal.Body className="px-4">
                            <div className="m-auto mb-4">
                                <h4 className="text-secondary text-center m-0">
                                    Editar Premio
                                </h4>
                            </div>
                            <div
                                style={{ cursor: "pointer" }}
                                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
                                onClick={handleClose}
                            >
                                X
                            </div>
                            <FormGenerator
                                buttonText="Guardar Causa"
                                fields={fields}
                                submitData={submitData}
                                loading={loading}
                            />
                        </Modal.Body>
                    </Modal>



                </div >
                : null
            }
        </>
    )
}

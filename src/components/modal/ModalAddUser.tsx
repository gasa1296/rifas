import React from 'react'
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from 'react-redux';
import { selectRaffleState } from '@/store/slices/raffles';

export default function ModalAddUser({ handleClose, show, showScreen, setShowScreen }: any) {
    const submitData = async (data: Profile) => {
        handleChangeRaffle(data);
    };
    const { loading } = useSelector(selectRaffleState);


    const fields: Field[] = [
        {
            label: "Nombre",
            name: "name",
            required: true,
            type: "text",
        },
        {
            label: "Apellido Paterno",
            name: "last-name",
            required: true,
            type: "text",
        },
        { label: "Apellido Materno", name: "mother-lastname", required: true, type: "text" },
        {
            label: "Numero de celular",
            name: "phone",
            required: false,
            type: "text",
        },
        {
            label: "Numero de telefono",
            name: "phoneNumber",
            required: false,
            type: "text",
        },
        {
            label: "Correo electronico",
            name: "email",
            required: true,
            type: "email",
        },

        {
            label: "Sexo",
            name: "sex",
            required: true,
            type: "subtitle",
        },
        {
            label: "femenino",
            name: "sex",
            required: true,
            type: "checkbox",
        },
        {
            label: "masculino",
            name: "sex",
            required: true,
            type: "checkbox",
        },
        {
            label: "Agregar foto de perfil",
            name: "photo",
            required: false,
            type: "file",
        },
        {
            label: "Contraseña",
            name: "resetPassword",
            required: true,
            type: "password",
        }, {
            label: "Confirmar contraseña",
            name: "resetPassword",
            required: true,
            type: "password",
        },
    ];
    return (
        < >
            {showScreen
                ?
                <Modal className="custom-modal" show={showScreen} setShowScreen={handleClose} >
                    <Modal.Body className="px-4">
                        <div className="m-auto mb-4">
                            <h4 className="text-secondary text-center m-0">
                                Agregar usuario
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
                            buttonText="Enviar"
                            fields={fields}
                            submitData={submitData}
                            loading={loading}
                        />
                    </Modal.Body>
                </Modal>

                : <div></div>
            }

        </ >
    )
}

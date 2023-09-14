import React from 'react'
import { Modal } from 'react-bootstrap';
import FormGenerator from '../FormGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Login, selectAuthState } from "@/store/slices/auth";
import { Field } from "@/types/Component/FormGenerator";
import { ForgotPasswordStore } from '@/store/zustand/ForgotPassword';
import toast from 'react-hot-toast';


export default function ModalForgotPassword() {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectAuthState);
    const router = useRouter();
    /*    const handleClose = () => setShow(false);
       const handleShow = () => setShow(true); */

    const setShowModal = ForgotPasswordStore((state) => state.setShowModal);
    const showModal = ForgotPasswordStore((state) => state.showModal);
    const postEmail = ForgotPasswordStore((state) => state.postEmail);
    const isLoading = ForgotPasswordStore((state) => state.isLoading);


    const handleClose = () => {
        setShowModal(false);
    }


    const fields: Field[] = [
        {
            label: "Correo electrónico",
            name: "email",
            required: true,
            type: "email",
        },


    ];

    const submitData = async (data: any) => {
        const result = await postEmail(data.email);
        if (result) {
            handleClose();
            router.push("/");
        }
        else {
            toast.error("Ocurrio un error al enviar el correo")
        }

    };
    return (
        <div>
            <Modal className="custom-modal" show={showModal} onHide={handleClose}>

                <Modal.Body className="px-4">
                    <div className="m-auto mb-4">
                        <h4 className="text-secondary text-center m-0">Olvidaste tu contrasena</h4>
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
                        loading={isLoading}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

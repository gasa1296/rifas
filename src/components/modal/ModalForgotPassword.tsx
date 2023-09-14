import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Login, selectAuthState } from "@/store/slices/auth";
import { Field } from "@/types/Component/FormGenerator";
import { ForgotPasswordStore } from "@/store/zustand/ForgotPassword";

export default function ModalForgotPassword() {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuthState);
  const router = useRouter();
  /*    const handleClose = () => setShow(false);
       const handleShow = () => setShow(true); */

  const setShowModal = ForgotPasswordStore((state) => state.setShowModal);
  const showModal = ForgotPasswordStore((state) => state.showModal);

  const handleClose = () => {
    setShowModal(false);
  };

  const fields: Field[] = [
    {
      label: "Correo electrónico",
      name: "email",
      required: true,
      type: "email",
    },
  ];

  const submitData = async (data: any) => {
    const { payload } = await dispatch(Login(data) as any);
    if (payload) {
      handleClose();
      router.push("/");
    }
  };
  return (
    <div>
      <Modal className="custom-modal" show={showModal} onHide={handleClose}>
        <Modal.Body className="px-4">
          <div className="m-auto mb-4">
            <h4 className="text-secondary text-center m-0">
              Olvidaste tu Contraseña
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
    </div>
  );
}

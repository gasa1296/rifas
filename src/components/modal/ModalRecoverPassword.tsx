import React from "react";
import { Field } from "@/types/Component/FormGenerator";
import FormGenerator from "../FormGenerator";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Login, selectAuthState } from "@/store/slices/auth";
import { Modal } from "react-bootstrap";
import { ForgotPasswordStore } from "@/store/zustand/ForgotPassword";

export default function ModalRecoverPassword({ handleClose, show }: any) {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuthState);
  const router = useRouter();

  const fields: Field[] = [
    {
      label: "Codigo",
      name: "email",
      required: true,
      type: "email",
    },
    {
      label: "Contraseña",
      name: "paswword",
      required: true,
      type: "password",
    },
    {
      label: "Confirmar Contraseña",
      name: "password-confirmation",
      required: true,
      type: "password",
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
      <Modal className="custom-modal" show={show} onHide={handleClose}>
        <Modal.Body className="px-4">
          <div className="m-auto mb-4">
            <h4 className="text-secondary text-center m-0">
              Recuperar Contraseña
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

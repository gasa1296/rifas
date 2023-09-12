import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "@/types/Model/Profile";
import { Login, selectAuthState } from "@/store/slices/auth";
import { useRouter } from "next/router";
import ModalForgotPassword from "./ModalForgotPassword";

/* import { GoogleLogin } from "react-google-login"; */
import { LoginWithGoogle } from "../Login/LoginWithGoogle";
import LoginWithFacebook from "../Login/LoginWithFacebook";
import { ForgotPasswordStore } from "@/store/zustand/ForgotPassword";

export default function ModalLogin({ show, handleClose }: any) {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuthState);
  const router = useRouter();
  const setShowModal = ForgotPasswordStore((state) => state.setShowModal);

  const fields: Field[] = [
    {
      label: "Correo electrónico",
      name: "email",
      required: true,
      type: "email",
    },
    {
      label: "Contraseña",
      name: "password",
      required: true,
      type: "password",
    },

  ];

  const submitData = async (data: Auth) => {
    const { payload } = await dispatch(Login(data) as any);
    if (payload) {
      handleClose();
      router.push("/");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Body className="px-4">
        <div className="m-auto mb-5">
          <h4 className="text-secondary text-center m-0">Iniciar sesión</h4>
          <h4 className="text-secondary text-center m-0">Para continuar</h4>
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
          onClick={handleClose}
        >
          X
        </div>
        <FormGenerator
          buttonText="Iniciar sesion"
          fields={fields}
          submitData={submitData}
          loading={loading}
        />
        <p onClick={() => { handleClose(); setShowModal(true) }} className="text-center mb-3 fw-medium  password" >¿Olvidaste tu contraseña?</p>

        <div className=" mx-0 mx-md-auto d-flex flex-lg-wrap flex-wrap  justify-content-center mb-4">
          <div className="my-2 my-md-0 mx-3">  {/*  <LoginWithFacebook /> */}</div>


          <div className=" mx-0 mx-md-auto d-flex flex-wrap  justify-content-center mb-4 p-0">
            <div className="my-2 my-md-0 mx-2">
              <LoginWithFacebook />
            </div>

            <div className=" mt-1 mt-md-0 mx-2 ">
              <LoginWithGoogle handleClose={() => { }} />
            </div>
          </div>
          <div className=" border-bottom border-2 my-3  "></div>
          <h6
            onClick={() => {
              handleClose();
              router.push("/registro");
            }}
            className="fw-bold  text-center registroAqui"
            style-={{ cursor: "pointer" }}
          >
            ¿No tienes una cuenta? Registrate aqui
          </h6>
          <h6 className="fw-bold text-center mb-3">
            ¿Porque necesito una cuenta?{" "}
          </h6>
        </div>
      </Modal.Body>
    </Modal>
  );
}

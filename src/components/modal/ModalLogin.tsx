import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "@/types/Model/Profile";
import { Login, selectAuthState } from "@/store/slices/auth";
import { useRouter } from "next/router";

/* import { GoogleLogin } from "react-google-login"; */
import { LoginWithGoogle } from "../Login/LoginWithGoogle";

export default function ModalLogin({ show, handleClose }: any) {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuthState);
  const router = useRouter();
  const fields: Field[] = [
    {
      label: "Email",
      name: "email",
      required: true,
      type: "email",
    },
    {
      label: "password",
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

  const responseGoogle = (response: any) => {
    console.log(response);
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
        <div className="row w-100 mx-auto">
          <div className="col-6 p-0 pe-2 ">
            <Button
              disabled={loading}
              variant="secondary"
              onClick={handleClose}
              className="w-100"
            >
              <BsFacebook size={18} className="me-3" />
              Continuar con facebook
            </Button>
          </div>
          <div className="col-6 p-0 ps-2 ">
            {/*  <Button
              disabled={loading}
              variant="secondary"
              onClick={handleClose}
              className="w-100"
            >
              <BsGoogle size={18} className="me-3" />
              Continuar con google
            </Button> */}
            <LoginWithGoogle />
            {/*   <GoogleLogin
              clientId="388797586221-62o9ph0f22lokf6i4c4apjkstr7t775c.apps.googleusercontent.com"
              buttonText="Iniciar sesión con Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            /> */}
          </div>

          <h6 className="fw-bold  text-center mt-4">
            ¿Olvidaste tu Contraseña?
          </h6>
        </div>
        <div className=" border-bottom border-2 my-3  "></div>
        <h6 className="fw-bold  text-center ">
          ¿No tienes una cuenta? Registrate aqui{" "}
        </h6>
        <h6 className="fw-bold text-center mb-3">
          ¿Porque necesito una cuenta?{" "}
        </h6>
      </Modal.Body>
    </Modal>
  );
}

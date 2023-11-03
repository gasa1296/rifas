import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";

export default function ModalAddUser({
  handleClose,
  show,
  showScreen,
  setShowScreen,
}: any) {
  const router = useRouter();

  const setCreateUser = useAsociatonsStoreDashboard(
    (state) => state.setCreateUser
  );
  const getUser = useAsociatonsStoreDashboard((state) => state.getUser);
  const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);

  const submitData = async (data: Profile) => {
    const result = await setCreateUser(router.query.id as string, data);
    if (result) {
      getUser(router.query.id as string, 1);
      handleClose();
    }
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "full_name",
      required: true,
      type: "text",
    },
    {
      label: "Correo electronico",
      name: "email",
      required: true,
      type: "text",
    },
    { label: "Empresa (Opcional)", name: "company_name", type: "text" },
    { label: "Contraseña", name: "password", required: true, type: "password" },
    {
      label: "Confirmar Contraseña",
      name: "confirmarContrasena",
      required: true,
      type: "password",
      validate: (value: string, payload: any) =>
        value === payload.password || "Las contraseña no coinciden",
    },
    {
      label: "Perfil",
      required: false,
      name: "image",
      type: "file",
      maxFile: 1,
    },
    {
      label: "He leido y aceptado los terminos",
      name: "accepted",
      required: true,
      type: "checkbox",
    },
    {
      label: "Confirma que no eres un robot",
      name: "token",
      required: true,
      type: "captchap",
    },
  ];
  return (
    <>
      {showScreen ? (
        <Modal
          className="custom-modal"
          show={showScreen}
          setShowScreen={handleClose}
        >
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
              loading={isLoading}
            />
          </Modal.Body>
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
}

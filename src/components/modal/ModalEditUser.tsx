import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { useRouter } from "next/router";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
export default function ModalEditUser({
  showEditUser,
  setShowEditUser,
  handleCloseEdit,
}: any) {
  const router = useRouter();

  const setEditUser = useAsociatonsStoreDashboard((state) => state.setEditUser);
  const getUser = useAsociatonsStoreDashboard((state) => state.getUser);
  const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);

  const submitData = async (data: Profile) => {
    const result = await setEditUser(router.query.id as string, {
      ...showEditUser,
      ...data,
    });
    if (result) {
      getUser(router.query.id as string, 1);
      handleCloseEdit();
    }
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "full_name",
      required: true,
      type: "text",
      default: showEditUser.full_name || "",
    },
    {
      label: "Correo electronico",
      name: "email",
      required: true,
      type: "text",
      default: showEditUser.email || "",
    },
    {
      label: "Empresa (Opcional)",
      name: "company_name",
      type: "text",
      default: showEditUser.company_name || "",
    },
    {
      label: "Nueva Contraseña",
      name: "password",
      type: "password",
    },
    {
      label: "Confirmar Nueva Contraseña",
      name: "confirmarContrasena",
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
      default: showEditUser?.image ? [showEditUser?.image || ""] : [],
    },
  ];
  return (
    <>
      {showEditUser ? (
        <div>
          <Modal
            className="custom-modal"
            show={showEditUser}
            setShowScreen={handleCloseEdit}
          >
            <Modal.Body className="px-4">
              <div className="m-auto mb-4">
                <h4 className="text-secondary text-center m-0">
                  Editar usuario
                </h4>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
                onClick={handleCloseEdit}
              >
                X
              </div>
              <FormGenerator
                buttonText="Guardar"
                fields={fields}
                submitData={submitData}
                loading={isLoading}
              />
            </Modal.Body>
          </Modal>

          <div className="modal-footer">
            <button
              onClick={handleCloseEdit}
              type="button"
              className="btn btn-border-pink"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-pink">
              Borrar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

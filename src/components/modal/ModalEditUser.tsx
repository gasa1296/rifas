import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
export default function ModalEditUser({
  showEditUser,
  setShowEditUser,
  handleCloseEdit,
}: any) {
  const submitData = async (data: Profile) => {
    // handleChangeRaffle(data);
  };
  const { loading } = useSelector(selectRaffleState);
  const fields: Field[] = [
    {
      label: "Nombre (s) ",
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
    {
      label: "Apellido Materno",
      name: "mother-lastname",
      required: true,
      type: "text",
    },
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
      name: "status",
      required: true,
      type: "radioButton",
      options: [
        { label: "femenino", value: "femenino" },
        { label: "Masculino", value: "Masculino" },
      ],
    },
    {
      label: "Agregar foto de perfil",
      name: "photo",
      required: false,
      type: "file",
    },
    {
      label: "Cambiar contraseña",
      name: "resetPassword",
      required: true,
      type: "password",
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
                loading={loading}
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

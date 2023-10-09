import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";

export default function ModalEditCausa({ show, setShow }: any) {
  const submitData = async (data: Profile) => {
    //handleChangeRaffle(data);
  };
  const { loading } = useSelector(selectRaffleState);
  const fields: Field[] = [
    {
      label: "¿Cuál es el nombre de la causa? ",
      name: "name-cause",
      required: true,
      type: "text",
    },
    {
      label: "¿Cuál es la descripción de la causa?*",
      name: "descriptions-cause",
      required: true,
      type: "text",
    },
    {
      label: "¿Qué categoría describe mejor tu causa?*",
      name: "category-cause",
      required: true,
      type: "select",
    },
    {
      label: "¿Cuál es el monto a recaudar (pesos MXN)?*",
      name: "phone",
      required: true,
      type: "number",
    },
    {
      label: "Agrega las fotos de tu causa",
      name: "photo",
      required: false,
      type: "file",
    },
  ];

  return (
    <>
      {show ? (
        <div>
          <Modal
            className="custom-modal"
            show={show}
            setShowScreen={() => setShow(false)}
          >
            <Modal.Body className="px-4">
              <div className="m-auto mb-4">
                <h4 className="text-secondary text-center m-0">Editar Causa</h4>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
                onClick={() => setShow(false)}
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
        </div>
      ) : null}
    </>
  );
}

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "@/types/Model/Profile";
import { selectAuthState } from "@/store/slices/auth";
import { createRafflesCause, selectRaffleState } from "@/store/slices/raffles";

export default function ModalCausa({
  show,
  setShow,
  handleSubmit,
  handleClose,
}: any) {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuthState);
  const { causesCategories, associations } = useSelector(selectRaffleState);
  const fields: Field[] = [
    {
      label: " ¿Cual es el titulo de la causa?*",
      name: "name",
      required: true,
      type: "text",
    },
    {
      label: "¿Cual es la descripcion de la causa?*",
      name: "description",
      required: true,
      type: "textarea",
    },
    {
      label: "¿Que categoria describe mejor tu causa?",
      name: "categories",
      required: false,
      type: "select",
      options: causesCategories.map((cause) => ({
        label: cause.name,
        value: cause.id,
      })),
    },
    {
      label: "¿Cual es el monto a recaudar (pesos MXN)?*",
      name: "goal",
      required: true,
      type: "number",
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "association",
      required: true,
      type: "select",
      options: associations.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
    },
    {
      label: "Agrega las fotos de tu causa",
      name: "product_files",
      required: false,
      type: "file",
    },
  ];

  const submitData = async (data: any) => {
    const { payload } = await dispatch(createRafflesCause(data) as any);
    if (payload)
      return handleSubmit({
        title: "Causa creada",
        name: data.name,
        message: data.description,
        goal: data.goal,
        variant: "success",
        buttonText: "Cambiar Causa",
      });
  };
  return (
    <Modal show={show} onHide={handleClose} className="custom-modal ">
      <Modal.Body className="px-4">
        <Modal.Header>
          <h4 className="text-secondary ">Crear una causa</h4>
        </Modal.Header>
        <div
          style={{ cursor: "pointer" }}
          className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
          onClick={handleClose}
        >
          {" "}
          X
        </div>
        <div className="mt-4">
          <FormGenerator
            /*    buttonText="Iniciar sesion" */

            fields={fields}
            submitData={submitData}
            loading={loading}
            renderButton={() => (
              <section className="row w-100 mx-auto mt-5   ">
                <div className="border-bottom  border border-dark opacity-50 w-100 "></div>
                <div className="d-flex justify-content-end mt-3">
                  <div className="col-3 p-0 pe-2   ">
                    <Button
                      disabled={loading}
                      variant="secondary"
                      onClick={handleClose}
                      className="w-100 text-dark bg-light"
                    >
                      Cerrar
                    </Button>
                  </div>
                  <div className="col-4 p-0 ps-2 ">
                    <Button
                      disabled={loading}
                      variant="secondary"
                      type="submit"
                      className="w-100 btn btn-danger"
                    >
                      Guardar causa
                    </Button>
                  </div>
                </div>
              </section>
            )}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

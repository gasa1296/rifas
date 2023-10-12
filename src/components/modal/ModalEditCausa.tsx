import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import {
  useAsociatonsStoreDashboard,
  useCreateCausesStoreDashboard,
} from "@/store/zustand/DashboardStore";
import { useRouter } from "next/router";

export default function ModalEditCausa({ show, setShow }: any) {
  const router = useRouter();
  const updateCause = useCreateCausesStoreDashboard(
    (state) => state.updateCause
  );

  const getCause = useCreateCausesStoreDashboard((state) => state.getCause);
  const asociations = useAsociatonsStoreDashboard((state) => state.asociations);
  const isLoading = useCreateCausesStoreDashboard((state) => state.isLoading);

  const { causesCategories } = useSelector(selectRaffleState);

  const submitData = async (data: Profile) => {
    await updateCause(show.id, data);
    await getCause(router.query.id as string);
    setShow(false);
  };
  const fields: Field[] = [
    {
      label: "¿Cuál es el nombre de la causa? ",
      name: "name",
      required: true,
      type: "text",
      default: show?.name,
    },
    {
      label: "¿Cuál es la descripción de la causa?*",
      name: "description",
      required: true,
      type: "text",
      default: show?.description,
    },
    {
      label: "¿Qué categoría describe mejor tu causa?*",
      name: "categories",
      required: true,
      type: "select",
      options: causesCategories.map((prize) => ({
        label: prize.name,
        value: prize.id,
      })),
      default: show.categories && show?.categories[0],
    },
    {
      label: "¿Cuál es el monto a recaudar (pesos MXN)?*",
      name: "goal",
      required: true,
      type: "number",
      default: show?.goal,
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "association",
      required: true,
      type: "select",
      options: asociations.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
      default: show?.association,
    },
    {
      label: "Agrega las fotos de tu causa",
      name: "image",
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
                loading={isLoading}
              />
            </Modal.Body>
          </Modal>
        </div>
      ) : null}
    </>
  );
}

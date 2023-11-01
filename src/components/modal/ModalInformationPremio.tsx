import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";

export default function ModalInformationPremio({ show, setShow }: any) {
  const submitData = async (data: Profile) => {
    // handleChangeRaffle(data);
  };
  const { loading } = useSelector(selectRaffleState);
  const fields: Field[] = [
    {
      label: "Nombre del premio ",
      name: "name-cause",
      required: true,
      type: "text",
    },
    {
      label: "Descripción del premio",
      name: "descriptions-cause",
      required: true,
      type: "textarea",
    },

    {
      label: "Fotos de tu premio",
      name: "photo",
      required: false,
      type: "file",
    },
  ];
  return (
    <>
      {show ? (
        <div className="">
          <Modal
            className="custom-modal"
            show={show}
            setShowScreen={() => setShow(false)}
          >
            <Modal.Body className="px-4">
              <div className="m-auto mb-4">
                <h4 className="text-secondary text-center m-0">
                  Información del Premio
                </h4>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
                onClick={() => setShow(false)}
              >
                X
              </div>
              <FormGenerator
                buttonText="Cerrar"
                fields={fields}
                submitData={submitData}
                loading={loading}
              />

              <div className="d-flex align-items-center m-0 ">
                <p className="title-informationCausa">Agregado por: </p>
                <p className="information-cause mx-2">Cuautli Martinez</p>
              </div>
              <div className="d-flex align-items-center m-0 ">
                <p className="title-informationCausa">
                  Fecha en que se agrego:{" "}
                </p>
                <p className="information-cause mx-2"> 31/05/2023</p>
              </div>
              <div className="d-flex align-items-center m-0">
                <p className="title-informationCausa">Monto a lograr: </p>
                <p className="information-cause mx-2"> $ 1000.00 pesos</p>
              </div>
              <div className="d-flex align-items-center m-0 p-0">
                <p className="title-informationCausa ">Estado de tu rifa: </p>
                <p className="mx-2 information-cause">
                  Tu rifa esta en proceso de verificación.
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ) : null}
    </>
  );
}

import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";

export default function ModalInformationRifa({ show, setShow }: any) {
  const submitData = async (data: Profile) => {
    //handleChangeRaffle(data);
  };
  const { loading } = useSelector(selectRaffleState);
  const fields: Field[] = [];
  return (
    <>
      {show ? (
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
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
}

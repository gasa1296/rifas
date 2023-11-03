import React from "react";
import { Modal } from "react-bootstrap";
import CrearRifaRegistro from "../Registro/CrearRifaRegistro";
import CreateRifa from "../Registro/CreateRifa";
import CreateRifaDashboard from "../Dashboard/Components/CreateRifaDashboard";

export default function ModalNewRaffleDashboard({
  showModalRaffle,
  handleClose,
}: any) {
  return (
    <>
      {showModalRaffle ? (
        <div>
          <Modal
            className=""
            size="xl"
            show={showModalRaffle}
            handleCloseDelete={handleClose}
          >
            <div className="modal-header">
              <h4
                className="modal-title text-secondary text-center m-0"
                id="staticBackdropLabel"
              >
                {" "}
                Crear una Rifa
              </h4>

              <button
                style={{ cursor: "pointer" }}
                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2 btn-close"
                onClick={handleClose}
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <Modal.Body className="">
              <CreateRifaDashboard disable handleClose={handleClose} />
            </Modal.Body>

            <div className="modal-footer">
              <button
                onClick={handleClose}
                type="button"
                className="btn btn-border-pink"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </Modal>
        </div>
      ) : null}
    </>
  );
}

import React from 'react'
import { Modal } from "react-bootstrap";
import { AiFillInfoCircle } from 'react-icons/ai';

export default function ModalAsociarUser({ showAsociarusuario, setShowAsociarUsuario, handleCloseAsociacion }: any) {
    return (
        <div>

            {
                showAsociarusuario

                    ? <div>
                        < Modal className="custom-modal" show={showAsociarusuario} handleCloseDelete={handleCloseAsociacion} >

                            <div className="modal-header">
                                <h4 className="modal-title text-secondary text-center m-0" id="staticBackdropLabel">  Asociar usuario</h4>

                                <button style={{ cursor: "pointer" }}
                                    className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2 btn-close"
                                    onClick={handleCloseAsociacion} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <Modal.Body className="px-4">

                                <div className=''>
                                    <p className='text-deleteUser  text-center lh-sm '>Captura el correo electrónico del usuario que deseas asociar a tu cuenta</p>
                                    <label>Correo electronico</label>
                                    <input type='text' className='w-100 rounded-1  form-control mt-1' />
                                </div>
                            </Modal.Body>



                            <div className="modal-footer">
                                <button onClick={handleCloseAsociacion} type="button" className="btn btn-border-pink" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-pink">Asociar usuario</button>
                            </div>

                        </Modal >
                    </div >
                    : null
            }

        </div>

    )
}

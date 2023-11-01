import React from 'react'
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from 'react-redux';
import { selectRaffleState } from '@/store/slices/raffles';
import { AiFillInfoCircle } from 'react-icons/ai';


export default function ModalDeleteUser({ showScreenDelete, setShowScreenDelete, handleCloseDelete }: any) {

    return (
        <>
            {showScreenDelete

                ? <div>
                    <Modal className="custom-modal" show={showScreenDelete} handleCloseDelete={handleCloseDelete} >

                        <div className="modal-header">
                            <h4 className="modal-title text-secondary text-center m-0" id="staticBackdropLabel">  Eliminar usuario</h4>

                            <button style={{ cursor: "pointer" }}
                                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2 btn-close"
                                onClick={handleCloseDelete} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <Modal.Body className="px-4">

                            <div className='text-center'>
                                <AiFillInfoCircle size={30} color='#FFBB33' className='mx-auto ' />
                                <p className='title-deleteUser px-5 lh-sm '>¿Estas seguro que deseas eliminar el usuario?</p>
                                <p className='infoUser-deleteUser m-0'>Daniel Nieto</p>
                                <p className='infoUser-deleteUser '>daniel@keepintouch.mx</p>
                                <p className='text-deleteUser'>Atención esta acción no se puede revertir, eliminaras el usuario y todos sus datos</p>
                                <p className='text-deleteUser'>Si das clic en “borrar” aceptas Borrar toda la información</p>
                            </div>
                        </Modal.Body>



                        <div className="modal-footer">
                            <button onClick={handleCloseDelete} type="button" className="btn btn-border-pink" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-pink">Borrar</button>
                        </div>

                    </Modal>
                </div>
                : null
            }
        </>
    )
}

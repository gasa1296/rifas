import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BsFacebook, BsGoogle } from "react-icons/bs";


export default function ModalLogin({ show, handleClose }: any) {

    return (
        <div className=''>
            <Modal show={show} onHide={handleClose} style={{ marginTop: "", }}>
                <Modal.Header className='d-flex'>

                    <div className='m-auto'>
                        <h4 className='text-secondary text-center m-0'>Iniciar sesión</h4>
                        <h4 className='text-secondary text-center m-0'>Para continuar</h4>
                    </div>
                    <div style={{ cursor: "pointer" }} className='fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2' onClick={handleClose} >
                        X
                    </div>
                </Modal.Header>
                <div className='m-4'>
                    <label className='text-secondary my-1'>Correo electronico</label>
                    <input type='email' className='form-control' />
                    <label className='text-secondary mt-4'>Contraseña</label>
                    <input type='password' className='form-control' />

                </div>
                <Button variant="dark" onClick={handleClose} className='m-4'>
                    Iniciar sesion
                </Button>
                <div className='d-flex row '>
                    <div className='col-6'>
                        <Button variant="dark" onClick={handleClose} className=' ms-2 '>
                            <BsFacebook size={15} className='me-3' />
                            Continuar con facebook
                        </Button>
                    </div>
                    <div className='col-6'>
                        <Button variant="dark" onClick={handleClose} className='me-2 '>
                            <BsGoogle size={15} className='me-3' />
                            Continuar con facebook
                        </Button>
                    </div>
                    <h6 className='fw-bold  text-center mt-4'>¿Olvidaste tu Contraseña? </h6>

                </div>
                <div className=" border-bottom my-3  "></div>
                <h6 className='fw-bold  text-center '>¿No tienes una cuenta? Registrate aqui </h6>
                <h6 className='fw-bold text-center mb-3'>¿Porque necesito una cuenta? </h6>


            </Modal>
        </div>
    )
}

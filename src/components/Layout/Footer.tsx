import React from 'react'
import Image from 'next/image'
import logo from "@/assets/img/logoFooter.svg"
export default function Footer() {
    return (
        <div>
            <footer className=" mt-5 footer-fondo p-4  ">

                <div className="d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5">

                    <div className=" mw-100  ">
                        <Image src={logo} alt="fondo" className=' ' />
                    </div>
                    <div className="">
                        <h6 className=".footer-title mt-5 mt-lg-0 ">¡Rífate!</h6>
                        <ul className=" list-unstyled footer-information ">
                            <li>Inicia una rifa</li>
                            <li>Comprar boletos</li>
                            <li>Haz una donacion</li>
                            <li>Crear una cuenta</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className=".footer-title">Nosotros</h6>
                        <ul className=" list-unstyled footer-information">
                            <li>Conocenos</li>
                            <li>¿Como funciona?</li>
                        </ul>
                    </div>{" "}
                    <div>
                        <h6 className=".footer-title">Legal</h6>
                        <ul className=" list-unstyled footer-information">
                            <li>Terminos y condiciones</li>
                            <li>Aviso de privacidad</li>
                            <li>Preguntan frecuentes</li>
                        </ul>
                    </div>{" "}
                    <div>
                        <h6 className=".footer-title">Redes</h6>
                        <ul className=" list-unstyled footer-information">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <div className="mx-5 text-secondary fs-6 ">
                    <p className="m-0 footer-text ">Escribenos</p>
                    <p className="footer-text">Contacto@rifaconcausa.org</p>
                </div>

                <div className=" border-bottom border-1 border-black opacity-25 w-auto mx-5  "></div>
                <div className='d-flex  justify-content-between mt-3'>
                    <p className="mx-5 footer-text">2023. Rifa con Causa Todos los derechos reservados</p>
                    <p className='footer-text d-flex'>Creado por <p className='mx-2 fw-bold'>Keep in Touch</p> ¡hacemos que las cosas sucedan!</p>
                </div>
            </footer>
        </div>
    );
}

import React from 'react'
import Image from 'next/image'
import logo from "@/assets/img/logoFooter.svg"
export default function Footer() {
    return (
        <div>
            <footer className=" mt-5">
                <div className=" border-bottom border-2 w-auto mx-5 mb-3  "></div>

                <div className="d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5">

                    <div className=" mw-100  ">
                        <Image src={logo} alt="fondo" className=' ' />
                    </div>
                    <div className="">
                        <h6 className="fs-6 opacity-75  fw-bold ">¡Rífate!</h6>
                        <ul className=" list-unstyled text-secondary ">
                            <li>Inicia una rifa</li>
                            <li>Comprar boletos</li>
                            <li>Haz una donacion</li>
                            <li>Crear una cuenta</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="fs-6 opacity-75  fw-bold">Nosotros</h6>
                        <ul className=" list-unstyled text-secondary">
                            <li>Conocenos</li>
                            <li>¿Como funciona?</li>
                        </ul>
                    </div>{" "}
                    <div>
                        <h6 className="fs-6 opacity-75  fw-bold">Legal</h6>
                        <ul className=" list-unstyled text-secondary">
                            <li>Terminos y condiciones</li>
                            <li>Aviso de privacidad</li>
                            <li>Preguntan frecuentes</li>
                        </ul>
                    </div>{" "}
                    <div>
                        <h6 className="fs-6 opacity-75  fw-bold">Redes!</h6>
                        <ul className=" list-unstyled text-secondary">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <div className="mx-5 text-secondary fs-6 ">
                    <p className="m-0 fw-medium opacity-75  ">Escribenos</p>
                    <p className="fw-medium opacity-75">Contacto@rifaconcausa.org</p>
                </div>

                <div className=" border-bottom border-2 w-auto mx-5  "></div>

                <p className="mx-5 mt-2 text-secondary fs-6">2021 .Todos los derechos reservados</p>
            </footer>
        </div>
    )
}

import React from 'react'
import Image from "next/image";
import logo from "@/assets/img/apac-logo-microsite.jpg";
import logo2 from "@/assets/img/gal-microsite-apac3.jpg";


export default function FooterMicrositio() {
    return (
        <section>
            <footer className="  footer-fondo p-4  ">
                <div className="d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5">
                    <div className=" mw-100   ">
                        <Image src={logo} alt="fondo" className=" " />
                        <p style={{ color: "#784B5F" }} className='text-center fs-3 mt-2 fw-medium '>APAC, I.A.P.</p>
                    </div>

                    <div className=" ">
                        <h6 className=".footer-title mt-5 mt-md-0 ">Dirección</h6>
                        <ul className=" list-unstyled footer-information ">
                            <li className="listas-footer"> Av. Rio mayo 500</li>
                            <li className="listas-footer">Lazaro Cardenas, Cuernavaca </li>
                            <li className="listas-footer"> Morelos, 1 </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className=".footer-title">Contacto</h6>
                        <ul className=" list-unstyled footer-information">
                            <li className="button-contacto">  Conocenos </li>

                        </ul>
                    </div>
                    <div className=" mw-100   ">
                        <Image src={logo} alt="fondo" className="  " />
                    </div>

                </div>
                <div className=" border-bottom border-1 border-black opacity-25 w-auto mx-5  "></div>
                <div className="d-block d-md-flex justify-content-between mt-3">
                    <p className="mx-5 footer-text">
                        2023. Rifa con Causa Todos los derechos reservados
                    </p>
                    <p className="footer-text d-flex ">
                        Creado por <p className="mx-2 fw-bold">Keep in Touch</p> ¡hacemos
                        que las cosas sucedan!
                    </p>
                </div>
            </footer>

        </section>
    )
}

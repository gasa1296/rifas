import React from 'react'
import imagenselectPremio from "@/assets/img/Premio-donar.jpg";
import Image from "next/image";

export default function ModalSelectPremio() {
    return (
        <section className=' '>
            <div className='d-flex  mt-3 mt-lg-4'>
                <div className="col-12 col-lg-5    p-0 ">
                    <Image
                        src={imagenselectPremio}
                        alt="fondo"
                        className="w-100 h-100  rounded "
                    />
                </div>
                <div className='ms-4'>
                    <h5>iPhone 14 Pro Max</h5>
                    <p>iPhone de última generación! Valor del premio: $32,000.00</p>
                    <button className='btn btn-pink'>Cambiar Causa</button>

                </div>
            </div>
            <div className='d-flex mt-3 mt-lg-4'>
                <div className="col-12 col-lg-5    p-0 ">
                    <Image
                        src={imagenselectPremio}
                        alt="fondo"
                        className="w-100 h-100  rounded "
                    />
                </div>
                <div className='ms-4'>
                    <h5>iPhone 14 Pro Max</h5>
                    <p>iPhone de última generación! Valor del premio: $32,000.00</p>
                    <button className='btn btn-pink'>Cambiar Causa</button>

                </div>
            </div>


        </section>
    )
}

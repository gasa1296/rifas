import React from 'react'
import historiasFondo from "@/assets/img/Historias-img.jpg";
import Image from "next/image";

export default function ModalSelectCausa() {
    return (
        <section className='d-flex mt-3 mt-lg-4'>
            <div className="col-12 col-lg-5    p-0 ">
                <Image
                    src={historiasFondo}
                    alt="fondo"
                    className="w-100 h-100  rounded "
                />
            </div>
            <div className='ms-4'>
                <h5>Ayuda a los niños con cancer</h5>
                <p>Apoya a las investigaciones en contra de la mortal enfermedad. Monto a recaudar: $790,000.00</p>
                <button className='btn btn-pink'>Cambiar Causa</button>
            </div>
        </section>
    )
}

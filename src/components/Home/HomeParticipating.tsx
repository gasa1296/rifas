import React from 'react'
import Image from 'next/image'

import iconos1 from "@/assets/img/iconos_Mesa de trabajo.png"
import iconos2 from "@/assets/img/iconos_InfografiaRifaCausa-02.png"
import iconos3 from "@/assets/img/iconos_InfografiaRifaCausa-03.png"
import iconos4 from "@/assets/img/iconos_InfografiaRifaCausa-04.png"
import iconos5 from "@/assets/img/iconos_InfografiaRifaCausa-05.png"



export default function HomeParticipating() {
    return (
        <section className='  mx-3 mx-lg-5' style={{ marginTop: "70px", }}>
            <h5 className=' title-participating text-center'>Rífate participando</h5>
            <p className=' subtitle-participating text-center m-0 lh-1'  >Ganes o pierdas, el simple hecho de ayudar </p>
            <p className=' subtitle-participating  text-center m-0 '> ¡te convierte en un ganador!</p>

            <div className='d-flex justify-content-center  flex-wrap row mt-5'>
                <div className="  mx-2  mt-2 mt-md-1 col-6 col-lg-2 ">
                    <Image src={iconos1} className=" w-50 h-50  mx-auto d-block " alt="..." />
                    <p className='text-center text-partcipating mt-3 '>Conoce los proyectos sociales</p>
                </div>
                <div className=" mx-2   mt-2 mt-md-1 col-4 col-lg-2">
                    <Image src={iconos2} className=" w-50 h-50  mx-auto d-block " alt="..." />
                    <p className='text-center text-partcipating mt-3 '>Elige el mas cercano a tu corazon</p>
                </div>
                <div className=" mx-2  mt-2 mt-md-1 col-6 col-lg-2">
                    <Image src={iconos3} className="w-50 h-50 mt-4 mt-lg-0 mx-auto d-block " alt="..." />
                    <p className='text-center text-partcipating mt-3 '>Compra un boleto y Participa por un increible premio</p>
                </div>
                <div className="  mx-2 mt-2 mt-md-1 col-4 col-lg-2">
                    <Image src={iconos4} className="w-50 h-50 mt-5 mt-lg-0 mx-auto d-block" alt="..." />
                    <p className='text-center text-partcipating mt-3'>Monitorea el seguimiento de tu aportacion</p>
                </div>
                <div className="  mx-2 mt-2 mt-md-1 col-6 col-lg-2 ">
                    <Image src={iconos5} className="w-50 h-50  mt-5 mt-lg-0 mx-auto d-block" alt="..." />
                    <p className='text-center text-partcipating mt-3'>Espera el resultado de tu aportacion</p>
                </div>

            </div>
        </section>
    )
}

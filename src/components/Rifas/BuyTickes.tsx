import React from 'react'
import fondo from "@/assets/img/Rifa-destacada-portada.jpg";
import { BiLoaderAlt } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsWhatsapp, BsFillShareFill, } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function BuyTickes() {
    return (
        <div className="text-secondary position-relative   col-12 "    >
            <Image src={fondo} alt='fondotickes' className=' fondo-buy-tickes  ' />

            <div className='p-3' style={{ background: "rgba(0,0,0,0.5)" }}>
                <p className='title-buyTickes '  >¡Hola!¡Soy Emiliano , ayúdame a vencer el cáncer!</p>
                <p className=' title-buyTickes '>Recaudado</p>
                <div className='d-flex container-butTickes lh-1'>
                    <BiLoaderAlt
                        size={30}
                        className=" mt-2 me-2 position-relative "
                        color={"#00C851"}
                    />
                    <p className='  fs-3 fw-bold '>30%</p>
                    <p className='fs-3 mx-4 fw-bold ' >$24,409.00</p>
                </div>
                <p className=' title-buyTickes position-relative z-3 lh-1 '>la meta es de 100,000 MXN</p>

                <div className=" border-bottom my-1 position-relative z-3 "></div>
                <div className='d-flex  text-start me-3   '>
                    <div className='mx-4'>
                        <h6 className='position-relative z-3 container-costoBoletos'>Costo por boleto</h6>
                        <p className='position-relative z-3 container-value-buyTickes'>$1,200.00</p>
                    </div>
                    <div className='mx-5'>
                        <h6 className='position-relative z-3 container-costoBoletos'>Numero de boleto</h6>
                        <p className='position-relative z-3 container-value-buyTickes'>64</p>
                    </div>
                </div>
                <p className='share-buyTickes m-0 lh-lg '>Compartir</p>
                <BsFacebook color=" #FFFFFF" size={25} className="mx-2 iconos-buyTickes " />
                <BsTwitter color=" #FFFFFF" size={25} className="mx-2  iconos-buyTickes" />
                <MdEmail color=" #FFFFFF" size={25} className="mx-2  iconos-buyTickes" />
            </div>


        </div >
    )
}

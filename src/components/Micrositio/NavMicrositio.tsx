import React from 'react'
import Image from "next/image";
import logo from "@/assets/img/apac-logo-microsite.jpg";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";


export default function NavMicrositio() {

    return (
        <section className='p-2 d-flex justify-content-between align-items-center'>
            <div className=" d-flex justify-content-start align-items-center   ">
                <Image src={logo} alt="fondo" className=" ms-4 logo-micrositio" />
                <p style={{ color: "#784B5F" }} className='text-center fs-3 mt-2 fw-medium ms-3'>APAC, I.A.P.</p>
            </div>
            <div>
                <BsFacebook
                    color=" #C3286D"
                    size={25}
                    className="mx- position-relative 2"
                />
                <BsTwitter
                    color=" #C3286D"
                    size={25}
                    className="mx-2  position-relative "
                />
            </div>


        </section>
    )
}

import React from 'react'
import Image from 'next/image'
import fondo from "@/assets/img/emprendedor2018.jpg"
import fondo1 from "@/assets/img/emprendedor-1.jpg"
import fondo2 from "@/assets/img/emprendedor-2.jpg"
import fondo3 from "@/assets/img/emprendedor-3.jpg"
import fondo4 from "@/assets/img/emprendedor-4.jpg"

export default function HomeRifate() {
    return (
        <section className=' mt-5' style={{ marginBottom: "120px", }}>
            <h5 className=' home-title-rifate text-center'>¡Rífate Tambien!</h5>
            <p className=' my-2 home-text-rifate  text-center' >¡Te estamos esperando,al Igual que ellos nos apoyaran!</p>

            <div className='d-flex justify-content-center  flex-wrap row m-0'>
                <div className="  mx-2 mx-2 mt-2 mt-md-2 col-6 col-lg-2 ">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className=" mx-2  mx-2 mt-2 mt-md-2 col-6 col-lg-2">
                    <Image src={fondo1} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className=" mx-2 mx-2 mt-2 mt-md-2 col-6 col-lg-2">
                    <Image src={fondo2} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className="  mx-2 mt-2 mt-md-2 col-6 col-lg-2">
                    <Image src={fondo3} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className="  mx-2 mt-2 mt-md-2 col-6 col-lg-2 ">
                    <Image src={fondo4} className="card-img-top w-100 h-100" alt="..." />
                </div>

            </div>
        </section>

    )
}

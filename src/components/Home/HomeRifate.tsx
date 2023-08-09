import React from 'react'
import Image from 'next/image'
import fondo from "@/assets/img/fondoRifate.svg"

export default function HomeRifate() {
    return (
        <section className=' mt-5' style={{ marginBottom: "120px" }}>
            <h5 className=' home-title-rifate text-center'>¡Rífate Tambien!</h5>
            <p className=' my-2 home-text-rifate  text-center' >¡Te estamos esperando,al Igual que ellos nos apoyaran!</p>

            <div className='d-flex flex-wrap '>
                <div className="  mx-2 mx-2 mt-2 mt-md-2">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className=" mx-2  mx-2 mt-2 mt-md-2">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className=" mx-2 mx-2 mt-2 mt-md-2">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className="  mx-2 mt-2 mt-md-2 ">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>

            </div>
        </section>

    )
}

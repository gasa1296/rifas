import React from 'react'
import Image from 'next/image'
import fondo from "@/assets/img/fondoRifate.svg"

export default function HomeRifate() {
    return (
        <section className='mx-5 mt-5' style={{ marginBottom: "120px" }}>
            <h5 className=' fw-bold display-2  text-secondary'>¡Rífate!</h5>
            <p className='fs-1  text-secondary m-0 lh-1' >Te estamos esperando,</p>
            <p className='fs-1  text-secondary m-0 mb-5'> al Igual que ellos nos apoyaran</p>

            <div className='d-flex flex-wrap '>
                <div className="    mx-2 mx-2 mt-2 mt-md-2">
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

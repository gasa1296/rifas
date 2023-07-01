import React from 'react'
import Image from 'next/image'
import fondo from "@/assets/img/fondo.jpg"

export default function HomeRifate() {
    return (
        <section className='mx-5 mt-5'>
            <h5 className=' fw-bold fs-1  text-secondary'>Rifate</h5>
            <p className='fs-4  text-secondary' >Te estamos esperando, al Igual que ellos nos apoyaran</p>

            <div className='d-flex flex-wrap '>
                <div className=" w-25 w-md-75 h-25 mx-2">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className="w-25 w-md-25 h-75 h-md-25 mx-2  ">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className="w-25 w-md-25 h-25 mx-2">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className=" w-25 w-md-25 h-25 mx-2 mt-2 mt-md-2 ">
                    <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                </div>
            </div>
        </section>

    )
}

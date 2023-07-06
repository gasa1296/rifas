import React from 'react'
import fondo from "@/assets/img/fondoRifaActivas.svg"
import Image from 'next/image'
import { MdAccessTime, } from "react-icons/md";

import { useRouter } from 'next/router'

export default function RifasActivas({ href = "/rifas" }) {
    const router = useRouter()
    return (
        <div>
            <section className='mx-5  ' style={{ marginBottom: "120px" }}>
                <div className='d-flex  m-0  '>
                    <p className=' fw-semibold  fs-2  text-secondary lh-1 m-0'>Rifas activas</p>
                    <p className=' fw-bold fs-5  text-secondary ms-3 mt-1 '> ver todas las rifas</p>
                </div>
                <div className='  text-secondary d-lg-flex fw-light  fs-5'>
                    <p className='mx-3'>Todas</p>
                    <p className='mx-3'>Animales</p>
                    <p className='mx-3'>Comunidad</p>
                    <p className='mx-3'>Cultura</p>
                    <p className='mx-3'>Deporte</p>
                    <p className='mx-3'>Educacion</p>
                    <p className='mx-3'>Emergencia</p>
                    <p className='mx-3'>Salud</p>
                    <p className='mx-3'>Sustentabilidad</p>
                </div>
                <div className='d-flex row '>
                    <div className='col-3 col-lg-2 shadow  p-0  mt-4 mt-md-0  mx-3  ' style={{ maxWidth: "309px", width: "100%", height: "" }}>
                        <Image src={fondo} className='w-100' alt="" />
                        <div className="p-4">
                            <h6 className='fs-6 fw-semibold  ' >Hola! soy Emiliano, ayudame a vencer el cancer!</h6>
                            <p className="card-text fs-6 text-secondary lh-sm">por Fundacion Castro Limon A.C</p>

                            <p className="card-text fs-6  text-secondary lh-sm  p-0 ">  <MdAccessTime size={20} className='mb-1 me-2 opacity-75 ' />20% 8,040.00 recaudado</p>
                            <a href="#" className="btn fs-6 btn-outline-secondary w-100">Comprar boleto</a>
                        </div>
                    </div>
                    <div className='col-3 col-lg-2 shadow  p-0  mx-3  mt-4 mt-md-0' style={{ maxWidth: "309px", width: "100%", height: "" }}>
                        <Image src={fondo} className='w-100' alt="" />
                        <div className="p-4">
                            <h6 className='fs-6 fw-semibold  ' >Hola! soy Emiliano, ayudame a vencer el cancer!</h6>
                            <p className="card-text fs-6 text-secondary lh-sm">por Fundacion Castro Limon A.C</p>
                            <p className="card-text fs-6  text-secondary lh-sm  p-0 ">  <MdAccessTime size={20} className='mb-1 me-2 opacity-75 ' />20% 8,040.00 recaudado</p>

                            <a href="#" className="btn fs-6 btn-outline-secondary w-100">Comprar boleto</a>
                        </div>
                    </div>
                    <div className='col-3 col-lg-2 shadow  p-0 m-0 mx-3  mt-4 mt-md-0' style={{ maxWidth: "309px", width: "100%", height: "" }}>
                        <Image src={fondo} className='w-100' alt="" />
                        <div className="p-4">
                            <h6 className='fs-6 fw-semibold  ' >Hola! soy Emiliano, ayudame a vencer el cancer!</h6>
                            <p className="card-text fs-6 text-secondary lh-sm">por Fundacion Castro Limon A.C</p>
                            <p className="card-text fs-6  text-secondary lh-sm  p-0 ">  <MdAccessTime size={20} className='mb-1 me-2 opacity-75 ' />20% 8,040.00 recaudado</p>

                            <a href="#" className="btn fs-6 btn-outline-secondary w-100">Comprar boleto</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

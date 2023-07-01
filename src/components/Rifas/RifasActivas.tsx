import React from 'react'
import fondo from "@/assets/img/fondo.jpg"
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function RifasActivas({ href = "/rifas" }) {
    const router = useRouter()
    return (
        <div>
            <section className='mx-5 my-5 '>
                <div className='d-flex  m-0 '>
                    <p className=' fw-bold fs-5  text-secondary lh-1 m-0'>Rifas activas</p>
                    <p className=' fw-bold fs-6  text-secondary ms-3 '> ver todas las rifas</p>
                </div>
                <div className='  text-secondary d-lg-flex'>
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
                <div className='d-lg-flex justify-content-lg-center  align-items-lg-center row '>
                    <div className="card Regular shadow col-md-3 mb-3 mb-md-0  mx-lg-2 mx-0">
                        <Image src={fondo} className="card-img-top w-100 h-100 " alt="..." />
                        <div className="card-body">
                            <h6 className='fs-6 fw-bold  ' >Hola! soy Emiliano, ayudame a vencer el cancer!</h6>
                            <p className="card-text  text-secondary lh-sm">por Fundacion Castro Limon A.C</p>
                            <p className="card-text  text-secondary lh-sm">20% 8,040.00 recaudado</p>
                            <a href="#" className="btn  btn-outline-secondary w-100">Comprar boleto</a>
                        </div>
                    </div>
                    <div className="card  Regular shadow col-md-3 mb-3 mb-md-0 mx-lg-2 mx-0">
                        <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                        <div className="card-body">
                            <h6 className='fs-6 fw-bold  ' >Hola! soy Emiliano, ayudame a vencer el cancer!</h6>
                            <p className="card-text  text-secondary lh-sm">por Fundacion Castro Limon A.C</p>
                            <p className="card-text  text-secondary lh-sm">20% 8,040.00 recaudado</p>
                            <a href="#" className="btn  btn-outline-secondary w-100">Comprar boleto</a>
                        </div>
                    </div>
                    <div className="card  Regular shadow col-md-3 mx-lg-2 mx-0">
                        <Image src={fondo} className="card-img-top w-100 h-100" alt="..." />
                        <div className="card-body">
                            <h6 className='fs-6 fw-bold  ' >Hola! soy Emiliano, ayudame a vencer el cancer!</h6>
                            <p className="card-text  text-secondary lh-sm">por Fundacion Castro Limon A.C</p>
                            <p className="card-text  text-secondary lh-sm">20% 8,040.00 recaudado</p>
                            <a href="#" className="btn  btn-outline-secondary w-100" onClick={() => router.push(href)}>Comprar boleto</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

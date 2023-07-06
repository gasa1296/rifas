import Image from 'next/image'
import fondo from "@/assets/img/fondoRifas.svg"
import BoletosRifas from './BoletosRifas'
import { BiLoaderAlt, } from "react-icons/bi";

import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Rifa({ href = "/rifas" }: any) {
    const [step, setStep] = useState(0)

    const router = useRouter()
    return (
        <div className='  ' style={{ marginBottom: "120px" }}>
            <section className=' mx-5 mt-5 mb-5'>
                <h3 className=' fw-normal  display-3 text-secondary mt-5 mt-lg-3 '>Rifa Destacada</h3>
                <p className='  fs-2 mt-4 mb-5 lh-sm fw-normal text-secondary  ' >Hola! Soy Emiliano, ayudame a vencer el cancer!</p>
                <div className='d-flex justify-content-between  row '>

                    <div className='col-md-6 '>
                        <Image src={fondo} alt="fondo" className=' w-100 h-100 m-0' />
                    </div>
                    <div className=' col-md-5   me-4 ' >
                        <p className=' text-secondary fw-semibold opacity-75 fs-3 mt-4 mt-md-0'>Recaudado</p>
                        <div className='d-flex'>
                            <BiLoaderAlt size={30} className='mt-2 me-2 opacity-50 ' />
                            <p className='  fs-3 fw-bold opacity-50  '>30%</p>
                            <p className='fs-3 mx-4 20 fw-bold opacity-50 ' >$24,409.00</p>
                        </div>
                        <p className='text-secondary opacity-75 fw-normal   fs-3'>La meta es de 100,000 MXN</p>

                        <div className=" border-bottom border-2  my-2  "></div>

                        <div className='d-flex  justify-content-between text-start me-3   '>
                            <div className='\'>
                                <h6 className='fs-4 opacity-75 text-dark'>Costo por boleto</h6>
                                <p className=' fs-3 fw-semibold opacity-50  '>$1,200.00</p>
                            </div>
                            <div>
                                <h6 className='fs-4 opacity-75'>Numero de boleto</h6>
                                <p className=' fs-3 fw-semibold opacity-50 '>20</p>
                            </div>
                        </div>
                        <button className='btn btn-outline-secondary btn-sm w-50 fs-6' onClick={() => router.push(href)}> Comprar boletos</button>
                        <div className=" border-bottom border-2  my-5  "></div>

                    </div>
                </div>
            </section >
        </div>
    )
}

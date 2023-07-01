import Image from 'next/image'
import fondo from "@/assets/img/fondo.jpg"
import BoletosRifas from './BoletosRifas'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Rifa({ href = "/rifas" }: any) {
    const [step, setStep] = useState(0)

    const router = useRouter()
    return (
        <div>
            <section className=' mx-5 my-5'>
                <h3 className=' fw-bold fs-1  text-secondary'>Rifa Destacada</h3>
                <p className='fs-4  text-secondary' >Hola! soy Emiliano, ayudame a vencer el cancer!</p>
                <div className='d-flex justify-content-between  row '>

                    <div className='col-md-6'>
                        <Image src={fondo} alt="fondo" className='w-100 h-100 ' />
                    </div>
                    <div className=' col-md-5 ' >
                        <p className=' text-secondary fs-5'>Recaudado</p>
                        <p className='text-secondary fs-5'>la meta es de 100,000 MXN</p>

                        <div className=" border-bottom my-2  "></div>

                        <div className='d-flex  justify-content-between text-start me-3   '>
                            <div className='\'>
                                <h6 className=''>Costo por boleto</h6>
                                <p className='text-secondary '>464</p>
                            </div>
                            <div>
                                <h6 className=''>Numero de boleto</h6>
                                <p className='text-secondary '>64</p>
                            </div>
                        </div>
                        <button className='btn btn-outline-secondary btn-sm w-50' onClick={() => router.push(href)}> Comprar boletos</button>
                        <div className=" border-bottom my-3  "></div>
                    </div>
                </div>
            </section >
        </div>
    )
}

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
                <h3 className=' fw-bold  display-3 text-secondary'>Rifa Destacada</h3>
                <p className=' text-secondary fs-2 lh-sm' >Hola! soy Emiliano, ayudame a vencer el cancer!</p>
                <div className='d-flex justify-content-between  row '>

                    <div className='col-md-6'>
                        <Image src={fondo} alt="fondo" className='w-100 h-100 ' />
                    </div>
                    <div className=' col-md-5 ' >
                        <p className=' text-secondary fs-3'>Recaudado</p>
                        <p className='text-secondary fs-3'>la meta es de 100,000 MXN</p>

                        <div className=" border-bottom my-2  "></div>

                        <div className='d-flex  justify-content-between text-start me-3   '>
                            <div className='\'>
                                <h6 className='fs-4'>Costo por boleto</h6>
                                <p className='text-secondary fs-3'>464</p>
                            </div>
                            <div>
                                <h6 className='fs-4'>Numero de boleto</h6>
                                <p className='text-secondary fs-3 '>64</p>
                            </div>
                        </div>
                        <button className='btn btn-outline-secondary btn-sm w-50 fs-6' onClick={() => router.push(href)}> Comprar boletos</button>
                        <div className=" border-bottom my-3  "></div>
                    </div>
                </div>
            </section >
        </div>
    )
}

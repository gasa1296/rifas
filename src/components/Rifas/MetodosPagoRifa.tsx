import React from 'react'
import { MdHeight } from 'react-icons/md'
import logoPaypal from "@/assets/img/paypal.svg"
import logoMercadoPago from "@/assets/img/mercadoPago.svg"
import Image from 'next/image'
import BuyTickes from './BuyTickes'
export default function MetodosPagoRifa({ nextStep, backStep }: any) {
    return (
        <section>
            <div className=' d-block justify-content-center d-md-flex mt-5'>

                < div className='col-md-4 col-12 text-secondary  bg-body-secondary opacity-75 p-4 mx-2' >
                    <BuyTickes />

                </div >
                <div className='col-md-5 col-12  mx-4'>
                    <p className=' fs-4 fw-bold opacity-75'>2 / 3 Elige el metodo de pago</p>
                    <p className='text-secondary'>Introduce el código de tu cupón</p>
                    <div className='d-flex'>
                        <input type='text' placeholder='Código de tu cupón' className='form-control opacity-50' />
                        <button className='form-control mx-3 opacity-50 w-50'>Aplicar</button>
                    </div>
                    <p className=' text-secondary my-3 '>Selecciona tu método de pago para continuar</p>
                    <button className='form-control d-flex align-items-center w-75 '>
                        <div className='border border-secondary opacity-50 rounded-circle mx-2  ' style={{ width: "1rem", height: "1rem" }}></div>
                        <div className='d-flex text-secondary '>
                            <p className='m-0 ms-5'>Paga con</p>
                            <Image src={logoPaypal} alt='' className='ms-2' />
                        </div>

                    </button>
                    <button className='form-control d-flex align-items-center w-75 my-2 '>
                        <div className='border border-secondary opacity-50 rounded-circle mx-2  ' style={{ width: "1rem", height: "1rem" }}></div>
                        <div className='d-flex text-secondary '>
                            <p className='m-0 ms-5'>Paga con</p>
                            <Image src={logoMercadoPago} alt='' className='ms-2' />
                        </div>

                    </button>
                    <div className='d-flex justify-content-between mt-5 m-2  '>
                        <button className='btn btn-outline-secondary btn-sm px-5 rounded-2 ' onClick={() => backStep()}> Regresar</button>
                        <button className='btn btn-outline-secondary btn-sm px-5 rounded-2 ' onClick={() => nextStep()}> Continuar</button>

                    </div>
                </div>

            </div >

        </section>

    )
}

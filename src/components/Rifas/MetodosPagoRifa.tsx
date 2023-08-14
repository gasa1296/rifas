import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import logoPaypal from "@/assets/img/paypal.svg"
import logoMercadoPago from "@/assets/img/mercadoPago.svg"
import Image from 'next/image'
import BuyTickes from './BuyTickes'
export default function MetodosPagoRifa({ nextStep, backStep }: any) {
    return (
        <section>
            <div className=' d-block justify-content-center d-md-flex mt-5'>

                < div className=' col-12 col-lg-5   '>
                    <BuyTickes />

                </div >
                <div className='col-md-5 col-sm-12 col-12 mt-3 mt-lg-0 ms-0 ms-md-4 '>
                    <p className=' donaciones-title'>2 / 3 Elige el metodo de pago</p>
                    <p className='subtitle-boletosaRifa mb-1'>Introduce el código de tu cupón</p>
                    <div className=' d-block d-md-flex'>
                        <input type='text' placeholder='Código de tu cupón' className='form-control input-placeholder opacity-75 ' />
                        <button className='form-control btn-border-pink mx-0 mx-md-3  w-50 mt-3 mt-md-0'>Aplicar</button>
                    </div>
                    <div className=" border-bottom my-2 w-100"></div>

                    <p className=' subtitle-boletosaRifa my-1 '>Tu saldo disponible</p>
                    <button className='form-control d-flex align-items-center  '>
                        <div className='border border-secondary opacity-50 rounded-circle   ' style={{ width: "1rem", height: "1rem" }}></div>
                        <div className='placeholder-button '><p className='m-0 ms-3'>Utilizar los $ 1600,00  de mi billetera</p> </div>
                    </button>
                    <div className=" border-bottom my-2 w-100"></div>

                    <p className=' subtitle-boletosaRifa my-2 '>Selecciona tu método de pago para continuar</p>
                    <button className='form-control d-flex align-items-center  '>
                        <div className='border border-secondary opacity-50 rounded-circle   ' style={{ width: "1rem", height: "1rem" }}></div>
                        <div className='d-flex text-secondary '><p className='m-0 ms-3'>Paga con</p><Image src={logoPaypal} alt='logoPaypal' className='ms-2' /> </div>
                    </button>
                    <button className='form-control d-flex align-items-center  my-1 '>
                        <div className='border border-secondary opacity-50 rounded-circle  ' style={{ width: "1rem", height: "1rem" }}></div>
                        <div className='d-flex text-secondary '><p className='m-0 ms-3'>Paga con</p><Image src={logoMercadoPago} alt='logoMercadoPago' className='ms-2' /></div>
                    </button>
                    <div className=" border-bottom my-2 w-100"></div>

                    <p className='boletos m-0'> Boletos reservados por: 10:0 min</p>
                    <div className='d-flex justify-content-between '>
                        <p className='subtitle-boletosaRifa m-0'>Total</p>
                        <p className='m-0 value-metodosPago' >$ 21,600.00</p>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='subtitle-boletosaRifa m-0'>Saldo a favor</p>
                        <p className='m-0 value-metodosPago'>$ 1,600.00</p>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='subtitle-boletosaRifa m-0' >Total a pagar</p>
                        <p className='m-0 value-metodosPago'>$ 20,000.00</p>
                    </div>


                    <div className='d-flex justify-content-between mt-3 justify-content-lg-betweem    '>
                        <button className='btn btn-border-pink btn-sm  px-4 rounded-2 ' onClick={() => backStep()}> <AiOutlineArrowLeft /> Regresar</button>
                        <button className='btn btn-pink btn-sm px-4 rounded-2 mx-2 mx-sm-0 ' onClick={() => nextStep()}> Continuar <AiOutlineArrowRight /></button>

                    </div>
                </div>

            </div >

        </section>

    )
}

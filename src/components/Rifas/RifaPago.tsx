import React from 'react'
import logoPaypal from "@/assets/img/paypal.svg"
import logoMercadoPago from "@/assets/img/mercadoPago.svg"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Image from 'next/image'
import BuyTickes from './BuyTickes'
export default function RifaPago({ nextStep, backStep }: any) {
    return (
        <div className=' d-block justify-content-center d-md-flex mt-5 mx-3 mx-lg-0  '>
            <div className='d-block justify-content-center d-lg-flex '>
                < div className=' col-12 col-lg-8  me-0 me-lg-3'>
                    <BuyTickes />

                </div >
                <div className='col-md-5 col-sm-12 col-12 mt-3 mt-lg-0 ms-0 ms-md-4  '>
                    <p className=' fw-lighter  fs-4 fw-bold opacity-75 mt-3 mt-lg-0'>3 / 3 Efectua el pago</p>
                    <p className='subtitle-boletosaRifa m-0'>Confirma y paga tus boletos</p>
                    <div className='d-flex text-secondary  mt-3 '>
                        <p className='m-0 '>Paga con</p>
                        <Image src={logoPaypal} alt='' className='ms-2' />
                    </div>
                    <div className=" border-bottom my-2 w-100"></div>

                    <div className='d-flex justify-content-between justify-content-lg-between mt-3   '>
                        <div className=''>
                            <p className=' subtitle-boletosaRifa '>Total a pagar</p>
                            <p className='value-metodosPago '>$ 21,600.00</p>
                        </div>
                        <div className='  ms-3 ms-md-0'>
                            <p className='subtitle-boletosaRifa '>Boletos selecionados: 1</p>
                            <div className='raffle-container raffe-container-size ' >
                                <div className='lh-sm  border-1 border rounded-1 text-center raffle-box  '>5656</div>
                            </div>
                        </div>
                    </div>
                    <p className='boletos'> Boletos reservados por: 10:00 min</p>

                    <div className='d-flex justify-content-between mt-4   '>
                        <button className='btn btn-border-pink btn-sm px-2 rounded-2 fw-fw-semibold  ' onClick={() => backStep()}> <AiOutlineArrowLeft /> Regresar</button>
                        <button className='btn btn-pink btn-sm px-2 rounded-2 ' onClick={() => nextStep()}> Proceder al pago <AiOutlineArrowRight /></button>

                    </div>
                </div>

            </div>

        </div>



    )
}

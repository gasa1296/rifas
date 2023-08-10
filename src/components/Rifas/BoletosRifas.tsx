import Image from 'next/image'
import React from 'react'
import fondo from "@/assets/img/fondo.jpg"
import rectangulo from "@/assets/img/Rectángulo.svg"
import BuyTickes from './BuyTickes'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function BoletosRifas({ nextStep, backStep }: any) {

    return (
        <div className='d-block justify-content-center d-lg-flex  mt-5  '>


            < div className=' col-12 col-lg-6  '>
                <BuyTickes />

            </div >


            <div className=' col-lg-5 col-12 ms-4  ' >
                <p className='donaciones-title mt-3 mt-md-0'>1 / 3 Selecciona tus boletos</p>
                <p className='text-secondary '>Da clic para seleccionar tus boletos</p>
                <div className='flex-wrap d-flex  rounded  '>
                    <div className='raffle-container' >
                        <div className='lh-sm  border-1 border rounded-1 text-center raffle-box  '>5656</div>
                    </div>
                    <div className='raffle-container ' >
                        <div className='lh-sm  border-1 border rounded-1 text-center raffle-box  '>5656</div>
                    </div>
                    <div className='raffle-container ' >
                        <div className='lh-sm  border-1 border rounded-1 text-center raffle-box  '>5656</div>
                    </div>
                    <div className='raffle-container ' >
                        <div className='lh-sm  border-1 border rounded-1 text-center raffle-box  '>5656</div>
                    </div>

                </div>
                <div className=" border-bottom my-2 w-75"></div>
                <div className='d-flex justify-content-between mt-3 m-2  '>
                    <div className='mx-4'>
                        <p className=' fs-5 opacity-75 '>Total a pagar</p>
                        <p className='fw-semibold opacity-75  fw-bolder '>$ 21,600.00</p>
                    </div>
                    <div className=' '>
                        <p className='fs-5 opacity-75'>Boletos selecionados: 1</p>
                        <div className='raffle-container raffe-container-size ' >
                            <div className='lh-sm  border-1 border rounded-1 text-center raffle-box  '>5656</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end mt-4 '>
                    <button className='btn btn-pink btn-sm border rounded-1 px-3 ' onClick={() => nextStep()}> Continuar <AiOutlineArrowRight /></button>
                </div>

            </div>


        </div>

    )
}

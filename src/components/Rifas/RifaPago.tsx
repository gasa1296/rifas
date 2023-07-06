import React from 'react'
import logoPaypal from "@/assets/img/paypal.svg"
import logoMercadoPago from "@/assets/img/mercadoPago.svg"
import Image from 'next/image'
import BuyTickes from './BuyTickes'
export default function RifaPago({ nextStep, backStep }: any) {
    return (
        <div className=' d-block justify-content-center d-md-flex mt-5'>
            < div className='col-md-4 col-12 text-secondary  bg-body-secondary opacity-75 p-4 mx-2' >
                <BuyTickes />

            </div >
            <div className='col-md-5 col-12  mx-4'>
                <p className=' fw-lighter  fs-4 fw-bold'>3 / 3 Efectua el pago</p>
                <p className='text-secondary m-0'>Confirma y paga tus boletos</p>
                <div className='d-flex text-secondary  mt-3 '>
                    <p className='m-0 '>Paga con</p>
                    <Image src={logoPaypal} alt='' className='ms-2' />
                </div>
                <div className=" border-bottom my-2 w-75"></div>
                <div className='d-flex  text-start me-3   '>
                    <div className='text-secondary mt-2'>
                        <p className='m-0'>Total a pagar</p>
                        <p className='fw-bold  my-2'>$ 21,600.00</p>
                    </div>
                    <div className='mx-5  mt-2 text-secondary'>
                        <p className='m-0'>Boletos selecionados:</p>
                        <div className='col-4 text-center rounded  bg-success text-light mt-2  '>5656</div>


                    </div>
                </div>
                <div className='d-flex justify-content-between mt-3 m-2  '>
                    <button className='btn btn-outline-secondary btn-sm px-5 rounded-2 fw-fw-semibold  ' onClick={() => backStep()}> Regresar</button>
                    <button className='btn btn-outline-secondary btn-sm px-5 rounded-2 ' onClick={() => nextStep()}> Proceder al pago</button>

                </div>
            </div>


        </div>
    )
}

import Image from 'next/image'
import React from 'react'
import fondo from "@/assets/img/fondo.jpg"
import rectangulo from "@/assets/img/Rectángulo.svg"
import BuyTickes from './BuyTickes'
export default function BoletosRifas({ nextStep, backStep }: any) {

    return (
        <div className='my-5'>
            <div className='d-block justify-content-center d-md-flex'>


                < div className='col-md-4 col-12 text-secondary  bg-body-secondary opacity-75 p-4 mx-2' >
                    <BuyTickes />

                </div >


                <div className=' col-md-5 col-12  mx-3' >
                    <p className=' text-secondary fs-4 fw-bold'>1 / 3 Selecciona tus boletos</p>
                    <p className='text-secondary '>Da clic para seleccionar tus boletos</p>
                    <div className='flex-wrap d-flex  rounded  '>
                        <div className=' col-md-1 col-3 m-2 p-1 rounded bg-success text-light '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                        <div className='col-md-1 col-3 m-2 p-1 rounded  bg-success text-light  '>5656</div>
                    </div>
                    <div className=" border-bottom my-2  "></div>


                    <div className='d-flex  text-start me-3   '>
                        <div className='mx-4'>
                            <p className=' fs-5 opacity-75 '>Total a pagar</p>
                            <p className='fw-semibold opacity-75   '>$ 21,600.00</p>
                        </div>
                        <div className='mx-5'>
                            <p className='fs-5 opacity-75'>Boletos selecionados:</p>
                            <div className='col-4 text-center rounded  bg-success text-light  '>5656</div>


                        </div>
                    </div>
                    <div className=" border-bottom my-2  "></div>
                    <div className='d-flex justify-content-end '>
                        <button className='btn btn-outline-secondary btn-sm w-25 rounded-1 ' onClick={() => nextStep()}> Continuar</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

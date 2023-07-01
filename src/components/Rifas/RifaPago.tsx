import React from 'react'
import logoPaypal from "@/assets/img/paypal.svg"
import logoMercadoPago from "@/assets/img/mercadoPago.svg"
import Image from 'next/image'
export default function RifaPago({ nextStep, backStep }: any) {
    return (
        <div className=' d-block justify-content-center d-md-flex mt-5'>
            < div className='col-md-4 col-12 text-secondary  bg-body-secondary opacity-75 p-4 mx-2' >
                <p className='fs-4 text-secondary fw-bold '>¡Hola!¡Soy Emiliano , ayúdame a vencer el cáncer!</p>
                <p className=' text-secondary fs-5 '>Recaudado</p>
                <div className='d-flex'>
                    <p className='  fs-3 fw-bold '>30%</p>
                    <p className='fs-3 mx-4 fw-bold ' >$24,409.00</p>
                </div>
                <p className='text-secondary fs-5 m-0 '>la meta es de 100,000 MXN</p>

                <div className=" border-bottom my-1 "></div>
                <div className='d-flex  text-start me-3  '>
                    <div className='mx-4'>
                        <h6 className='fw-bold'>Costo por boleto</h6>
                        <p className='text-secondary '>$1,200.00</p>
                    </div>
                    <div className='mx-5'>
                        <h6 className='fw-bold'>Numero de boleto</h6>
                        <p className='text-secondary '>64</p>
                    </div>
                </div>


            </div >
            <div className='col-md-5 col-12  mx-4'>
                <p className=' text-secondary fs-4 fw-bold'>3 / 3 Efectua el pago</p>
                <p className='text-secondary m-0'>Confirma y paga tus boletos</p>
                <div className='d-flex text-secondary  mt-3 '>
                    <p className='m-0 '>Paga con</p>
                    <Image src={logoPaypal} alt='' className='ms-2' />
                </div>
                <div className=" border-bottom my-2 w-75"></div>
                <div className='d-flex  text-start me-3   '>
                    <div className='text-secondary'>
                        <h6 className='fw-bold'>Total a pagar</h6>
                        <p className='text-secondary '>$ 21,600.00</p>
                    </div>
                    <div className='mx-5 text-secondary'>
                        <h6 className='fw-bold'>Boletos selecionados:</h6>
                        <div className='border border-black m-2 rounded w-25 '>5656</div>

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

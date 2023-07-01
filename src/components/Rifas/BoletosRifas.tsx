import Image from 'next/image'
import React from 'react'
import fondo from "@/assets/img/fondo.jpg"
import rectangulo from "@/assets/img/Rectángulo.svg"
export default function BoletosRifas({ nextStep, backStep }: any) {

    return (
        <div className='my-5'>
            <div className='d-block justify-content-center d-md-flex'>

                <div className='col-md-4 col-12  text-secondary  px-4 bg-body-secondary opacity-75'>
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


                </div>


                <div className=' col-md-5 col-12  mx-3' >
                    <p className=' text-secondary fs-4 fw-bold'>1 / 3 Selecciona tus boletos</p>
                    <p className='text-secondary '>Da clic para seleccionar tus boletos</p>
                    <div className='flex-wrap d-flex  rounded   '>
                        <div className='border border-black col-md-1 col-3 m-2 p-1 rounded  '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                        <div className='border border-black col-md-1 col-3 m-2 rounded '>5656</div>
                    </div>
                    <div className=" border-bottom my-2  "></div>


                    <div className='d-flex  text-start me-3   '>
                        <div className='mx-4'>
                            <h6 className='fw-bold'>Total a pagar</h6>
                            <p className='text-secondary '>$ 21,600.00</p>
                        </div>
                        <div className='mx-5'>
                            <h6 className='fw-bold'>Boletos selecionados:</h6>

                            <div className='border border-black m-2 rounded w-25 '>5656</div>

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

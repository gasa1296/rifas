import React from 'react'

export default function BuyTickes() {
    return (
        <div>
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
    )
}

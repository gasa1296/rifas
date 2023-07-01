import React from 'react'
import picture from "@/assets/img/picture.png"
import Image from 'next/image'
export default function ConfiguraRifa({ step, setStep }: any) {
    return (
        <div className='mx-4 row'>
            <p className='text-secondary fs-5'>1. Selecciona una de tus asociaciones a la que quieres apoyar.</p>
            <div className='col-12 col-md-12 '>


                <label className='text-secondary my-2 '>Seleccionar Asociación Civil</label>
                <select className="form-select form-select-md mb-3 " >
                    <option selected>Seleccionar A.C</option>
                    <option value="1">Uno</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                </select>
                <p className='text-secondary fs-5'>2. Elige una causa o agrega una nueva</p>
                <div className='d-md-flex col-12 m-auto '>
                    <div className='col-6 col-md-5 '>
                        <Image src={picture} alt='..' className='w-25 h-25 d-block mx-auto' />
                    </div>
                    <div className='text-secondary col-12 col-md-7 '>
                        <h6>Cura contra el ebola</h6>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum mollitia rem dignissimos quia dolo</p>
                        <p>monto a recaudar:<p>$790.0000</p></p>
                        <button className='form-control m-3 text-secondary '>Cambiar causa</button>
                    </div>

                </div>
                <p className='text-secondary fs-5'>3. Elige tu premio o agrega uno nuevo</p>
                <div className='d-md-flex col-12 m-auto '>
                    <div className='col-6 col-md-5 '>
                        <Image src={picture} alt='..' className='w-25 h-25 d-block mx-auto' />
                    </div>
                    <div className='text-secondary col-12 col-md-7 '>
                        <h6>Cura contra el ebola</h6>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum mollitia rem dignissimos quia dolo</p>
                        <p>monto a recaudar:<p>$790.0000</p></p>
                        <button className='form-control m-3 text-secondary '>Cambiar premio</button>
                    </div>
                </div>
                <p className='text-secondary fs-5'>4. Datos de la rifa</p>
                <label className='text-secondary my-2 '>Monto a recaudar en pesos MXN</label>
                <input className='form-control   ' type="text" placeholder='$' />
                <p className='text-secondary fs-6'>Tu monto a recaudar tiene que ser mayor al valor del premio ($1,500) más tus gastos de recuperación. Te recomendamos un monto a recaudar de: $2,100.00</p>

                <label className="form-label fw-bold">Selecciona el número de boletos para tu rifa</label>
                <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                <label className="form-label fw-bold">Costo por boleto</label>
                <input type="range" className="form-range   " min="0" max="5" id="customRange2" />
                <p className='text-secondary  fw-bold'>Calculadora del costo por boleto</p>
                <div className='d-flex justify-content-between  border-bottom mb-3 text-secondary '>
                    <p className='m-0'>Número de boletos</p>
                    <p className='m-0 fw-bold'>1</p>
                </div>
                <div className='d-flex justify-content-between  border-bottom mb-3 text-secondary '>
                    <p className='m-0'>Costo por boleto</p>
                    <p className='m-0 fw-bold'>$ 0.00</p>
                </div> <div className='d-flex justify-content-between  border-bottom mb-3 text-secondary '>
                    <p className='m-0'>Monto a recaudar</p>
                    <p className='m-0 fw-bold'>$ 0.00</p>
                </div> <div className='d-flex justify-content-between  border-bottom mb-3 text-secondary '>
                    <p className='m-0'>Valor del premio</p>
                    <p className='m-0 fw-bold'>$ 0.00</p>
                </div> <div className='d-flex justify-content-between  border-bottom mb-3 text-secondary '>
                    <p className='m-0'>Cuota de recuperación</p>
                    <p className='m-0 fw-bold'>$ 0.00</p>
                </div> <div className='d-flex justify-content-between  border-bottom mb-3 text-secondary '>
                    <p className='m-0'>Ingreso total generado</p>
                    <p className='m-0 fw-bold'>$ 0.00</p>
                </div>
                <div className=' w-100 mb-3 '>
                    <button className='btn btn-outline-dark  w-100' onClick={() => setStep()} > Continuar</button>
                </div>
            </div>
        </div>
    )
}

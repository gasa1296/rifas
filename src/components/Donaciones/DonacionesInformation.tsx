import React from 'react'
import Image from 'next/image'
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg"

export default function DonacionesDescripcion({ step, setStep }: any) {
    return (
        <div>
            {step === 2 && <section className='row m-0' >
                <div className=' col-12 col-md-6 '>
                    <Image src={imagenDonaciones} alt=".." className='w-75 mx-5' />
                </div>
                <div className='col-12 col-md-6 text-secondary mx-4 mx-md-0 '>
                    <h4 className=' lh-sm m-0 text-md-start  text-center'>2 / 3  Completa la informacion</h4>

                    <label className='text-secondary my-2 '> ¿Cual es el nla condicion de tu producto?*</label>
                    <div className='d-flex '>
                        <div className="input-group w-25 m-2">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="radio" />
                            </div>
                            <input type="text" className="form-control" placeholder='Nuevo' />
                        </div>
                        <div className="input-group w-25 m-2">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="radio" />
                            </div>
                            <input type="text" className="form-control" placeholder='Usado' />
                        </div>
                    </div>
                    <label className='text-secondary my-2 '> ¿Cuál es el precio de tu producto (En pesos MXN)?*</label>
                    <input className='form-control  w-75 ' />
                    <label className='text-secondary my-2 '> ¿Quieres asignar tu premio a alguna Asociación?*</label>
                    <select className="form-select form-select-md mb-3 w-75">
                        <option selected></option>
                        <option value="1">Uno</option>
                        <option value="2">Dos</option>
                        <option value="3">Tres</option>
                    </select>
                    <p className='text-secondary my-2 '> ¿Quieres asignar tu premio a alguna Asociación?*</p>
                    <div className='border  border-light-subtle w-25 h-25 mw-50'>
                        <Image src={imagenDonaciones} alt=".." className=' w-100 h-100 auto ' />
                    </div>
                    <div className='d-flex justify-content-between w-75 mw-md-50  my-3'>
                        <button className='btn btn-outline-secondary btn-sm w-25  ' onClick={() => setStep(1)}> Regresar</button>
                        <button className='btn btn-outline-secondary btn-sm w-25 ' onClick={() => setStep(3)}> Continuar</button>

                    </div>
                </div>
            </section>}

        </div>
    )
}

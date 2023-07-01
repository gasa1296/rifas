import React from 'react'
import Image from 'next/image'
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg"
export default function DonacionesDescripcion({ step, setStep }: any) {
    return (
        <div>
            {step === 1 && <section className='row m-0' >
                <div className=' col-12 col-md-6 '>
                    <Image src={imagenDonaciones} alt=".." className='w-75 mx-5' />
                </div>
                <div className='col-12 col-md-6 text-secondary mx-4 mx-md-0 '>
                    <h4 className=' lh-sm m-0 text-md-start  text-center'>1 / 3  Identifiquemos tu premio</h4>
                    <label className='text-secondary my-2 '> ¿Cual es el nombre del premio?*</label>
                    <input className='form-control  w-75 ' />
                    <label className='text-secondary my-2 '> ¿Cual es la descripcion de tu premio?*</label>
                    <textarea className='form-control  w-75 ' />
                    <label className='text-secondary my-2 '> ¿Que categoria describe tu producto?*</label>
                    <select className="form-select form-select-md mb-3 w-75">
                        <option selected></option>
                        <option value="1">Uno</option>
                        <option value="2">Dos</option>
                        <option value="3">Tres</option>
                    </select>
                    <div className='d-flex justify-content-end w-75 mw-md-50 '>
                        <button className='btn btn-outline-secondary btn-sm w-50 ' onClick={() => setStep(2)} > Continuar</button>
                    </div>
                </div>
            </section>}

        </div >

    )
}

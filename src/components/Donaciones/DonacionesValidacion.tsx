import React from 'react'
import Image from 'next/image'
import imagenDonaciones from "@/assets/img/ImagenDonaciones.svg"
export default function DonacionesValidacion({ step, setStep }: any) {
    return (
        <div>
            {step === 3 && <section className='row m-0' >
                <div className=' col-md-6 col-12   '>
                    <Image src={imagenDonaciones} alt=".." className='w-75 mx-5' />
                </div>
                <div className=' col-md-5 col-12  mx-3 text-secondary mx-4 mx-md-0 '>
                    <h4 className=' lh-sm m-0 text-md-start  text-center'>3 / 3  Premio en validacion</h4>
                    <p className='m-0 fw-bold fs-5 text-center my-3'>Gracias</p>
                    <p className="m-0 fw-bold fs-5 text-center">Estamos muy contentos de</p>
                    <p className="m-0 fw-bold fs-5 text-center">  Conseguir tu valiso apoyo</p>
                    <p className=" my-2 text-center fw-bold ">¿Cuales son los siguientes pasos?</p>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label">
                            Tu premio será sometido a un proceso  de revisión
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label">
                            Una vez autorizado, te enviaremos un mensaje de confirmación
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label">
                            tu premio ya será parte del catálogo.
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label ">
                            Si seleccionaste alguna asociación será asignado a dicha asociación para ser elegido en una rifa.
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label ">
                            Pronto sabras de nosotros en un máximo de 48 hrs
                        </label>
                    </div>
                    <p className="text-center fw-bold">¡Sigue rifándote!</p>
                    <div className='d-flex justify-content-between  mw-md-50  mt-2 '>
                        <button className='btn btn-outline-secondary btn-sm w-50 mx-2 ' > Ver catalogo de premios</button>
                        <button className='btn btn-outline-secondary btn-sm w-50 mx-2 ' onClick={() => setStep(1)}>Ir a donar otro premio</button>

                    </div>
                </div>



            </section >}
        </div>

    )
}

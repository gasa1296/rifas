import React from 'react'

export default function CrearCuenta({ nextStep, backStep }: any) {
    return (
        <section className='text-secondary row'>
            <div className='col-md-8 col-10 m-auto'>
                <h2 className="text-center text-secondary">Para comenzar a rifarte necesitas crear </h2>
                <h2 className="text-center text-secondary">una cuenta.</h2>
                <p className='text-center fw-semibold '>si eres una asociacion o quieres donar un premio es necesario crear una cuenta </p>
            </div>
            <div className="  mb-3 col-10 col-md-5 m-auto  text-secondary shadow rounded">
                <div className='m-auto col-md-10 col-12 py-2'>
                    <div className=" text-center text-secondary fw-bold">Registra tu cuenta</div>
                    <label>Nombre completo</label>
                    <input type='text' className='w-100 form-control my-2 ' />
                    <label>Correo electronico</label>
                    <input type='email' className='w-100   form-control my-2 ' />
                    <label>Empresa (Opcional)</label>
                    <input type='text' className='w-100  form-control my-2 ' />
                    <label>Contrasena</label>
                    <input type='password' className='w-100  form-control my-2 ' />
                    <label>Confirmar contrasena</label>
                    <input type='password' className='w-100  form-control my-2 ' />
                    <div className="form-check  m-auto col-md-10 col-12 ">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label fw-bold ">
                            He leido y acepto los terminos
                        </label>
                    </div>
                    <div className="d-grid gap-2 col-10 mx-auto my-3">
                        <button className="btn btn-secondary" type="button" onClick={() => nextStep()}>Registrate</button>
                        <p className='text-center fw-bold mt-2'>O registrate con tus redes sociales</p>
                        <button className="btn btn-secondary" type="button"> Resgitrate con Facebook</button>
                        <button className="btn btn-secondary my-2" type="button">Registrate con Google</button>
                    </div>

                </div>

            </div>
        </section>

    )
}

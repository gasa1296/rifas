import React from 'react'
import Image from 'next/image'
import fondo from "@/assets/img/fondo.jpg"


export default function HomeCreateRifa() {
    return (
        <div>

            <section className='row my-5 mt-4 mx-5'>
                <div className='col-md-5  text-secondary'>
                    <h5 className=' fw-bold   text-secondary fs-1 display-5'>Aqui comienza la esperanza</h5>
                    <p className='fs-4  text-secondary' >Sigue las instrucciones para crear tu rifa</p>
                    <p className=' fw-bold  fs-4 text-secondary'>paso 1</p>
                    <p>Registrate contesta el formulario.  Agrega el premio que ganaran los participantes</p>
                    <p>No cuentas con un premio?, puedes elegir entre los donados por nuestros benefactores </p>
                    <p>De acuerdo al premio elegido  nuestra  plataforma cuenta con una calculadores que te indicara la cantidad y precios de los boletos que necesitas para recaudar el monto</p>
                    <p>Una vez enviada sera revisada por nuestro equipo para hacer recomendaciones o si esta lista para publicarse</p>
                    <a href="#" className="btn fs-6 btn-outline-secondary w-75">Iniciar rifa</a>

                </div>
                <div className='col-md-7'>
                    <div className='col-md-12'>
                        <Image src={fondo} alt="fondo" className='w-100 h-100' />
                    </div>
                </div>
            </section>
        </div>
    )
}

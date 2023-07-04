import React from 'react'
import fondo from "@/assets/img/fondo.jpg"
import Image from 'next/image'

export default function HomeTestimonios() {
    return (
        <div>
            <section className='mx-5 mt-5'>
                <h5 className=' fw-bold display-5 text-secondary'>Testimoniales</h5>
                <p className='fs-2  text-secondary' >Decidieron cambiar una realidad y lograron resultados inesperados</p>

                <div className='row'>
                    <div className='col-md-5  text-secondary'>
                        <p className='fs-2 fw-semibold   text-secondary' >Ayudame a escuchar</p>

                        <p className='fs-4  text-secondary' >Mas de $350.000 pesos recaudados</p>
                        <p className='fs-6 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa esse quia necessitatibus maiores odit unde consequuntur totam expedita ullam quod, tempora, dignissimos veritatis voluptatem, voluptates aliquam blanditiis! Beatae, atque?</p>
                    </div>
                    <div className='col-md-7 text-secondary '>
                        <div className='col-md-12'>
                            <Image src={fondo} alt="fondo" className='w-75 h-75 mx-auto d-block' />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

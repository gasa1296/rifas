import React from 'react'
import fondo from "@/assets/img/fondotestimonio.svg"
import Image from 'next/image'

export default function HomeTestimonios() {
    return (
        <div>
            <section className='mx-5' style={{ marginBottom: "120px" }}>
                <h5 className=' fw-medium  display-5 text-secondary'>Testimoniales</h5>
                <p className='fs-2 fw-normal text-secondary w-75' >Decidieron cambiar una realidad y lograron resultados inesperados</p>

                <div className='row'>
                    <div className='col-md-5  text-secondary'>
                        <p className='fs-2 fw-semibold   text-secondary' >Ayudame a escuchar</p>

                        <p className='fs-4  text-secondary' >Mas de $350.000 pesos recaudados</p>
                        <p className='fs-6 '>Ethical aute vinyl, 90’s keytar big mood cred ad reprehenderit. Taiyaki gluten-free kinfolk mumblecore post-ironic taxidermy godard. Small batch lorem praxis, duis twee activated charcoal farm-to-table meh laboris tbh. Deep v craft beer post-ironic kale chips small batch subway tile ethical actually ut. Trust fund snackwave polaroid, pinterest hell of cupidatat pop-up lumbersexual consectetur tofu hashtag. Mukbang celiac Brooklyn readymade cillum same leggings consectetur dolor.</p>
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

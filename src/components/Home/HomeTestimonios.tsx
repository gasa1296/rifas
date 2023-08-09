import React from 'react'
import fondo from "@/assets/img/fondotestimonio.svg"
import Image from 'next/image'

export default function HomeTestimonios() {
    return (
        <div>
            <section className='' style={{ marginBottom: "120px" }}>
                <h5 className=' home-title-testimonios'>Testimoniales</h5>
                <p className='home-subtitle-testimonios ' >Decidieron cambiar una realidad y lograron resultados inesperados</p>

                <div className='row  '>
                    <div className='col-md-5 mt-4  text-secondary'>
                        <p className='home-title-container-testimonios' >Ayudame a escuchar</p>

                        <p className='home-subtitle-container-testimonios' >Mas de $350.000 pesos recaudados</p>
                        <p className='home-information-container-testimonios'>Ethical aute vinyl, 90’s keytar big mood cred ad reprehenderit. Taiyaki gluten-free kinfolk mumblecore post-ironic taxidermy godard. Small batch lorem praxis, duis twee activated charcoal farm-to-table meh laboris tbh. Deep v craft beer post-ironic kale chips small batch subway tile ethical actually ut. Trust fund snackwave polaroid, pinterest hell of cupidatat pop-up lumbersexual consectetur tofu hashtag. Mukbang celiac Brooklyn readymade cillum same leggings consectetur dolor.</p>
                        <p className='home-subtitle-container-testimonios' >APAC A.C</p>

                    </div>
                    <div className='col-md-6 text-secondary mt-4 '>
                        <div className='col-md-12'>
                            <Image src={fondo} alt="fondo" className='w-75 h-75 mx-auto d-block' />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

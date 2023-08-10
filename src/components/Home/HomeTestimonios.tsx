import React from 'react'
import fondo from "@/assets/img/Testimonial-img.jpg"
import testimnialesFondo from "@/assets/img/bg-testomoniales.png"
import Image from 'next/image'

export default function HomeTestimonios() {
    return (
        <div className=' ' style={{ marginTop: "130px" }}>
            <Image src={testimnialesFondo} alt='fondoTestimoniales' className=' fondo-testimoniales' />

            <section className='row m-0 mx-3 mx-lg-5 p-2 ' style={{ marginBottom: "120px" }}>
                <h5 className=' home-title-testimonios'>Testimoniales</h5>
                <p className='home-subtitle-testimonios ' >Decidieron cambiar una realidad y lograron resultados inesperados</p>

                <div className=' d-flex justify-content-between row '>
                    <div className=' col-12 col-lg-5 mt-4 me-5  text-start '>
                        <p className='home-title-container-testimonios' >Ayudame a escuchar</p>

                        <p className='home-subtitle-container-testimonios' >Mas de $350.000 pesos recaudados</p>
                        <p className='home-information-container-testimonios'>Ethical aute vinyl, 90’s keytar big mood cred ad reprehenderit. Taiyaki gluten-free kinfolk mumblecore post-ironic taxidermy godard. Small batch lorem praxis, duis twee activated charcoal farm-to-table meh laboris tbh. Deep v craft beer post-ironic kale chips small batch subway tile ethical actually ut. Trust fund snackwave polaroid, pinterest hell of cupidatat pop-up lumbersexual consectetur tofu hashtag. Mukbang celiac Brooklyn readymade cillum same leggings consectetur dolor.</p>
                        <p className='home-subtitle-container-testimonios' >APAC A.C</p>

                    </div>
                    <div className='col-10 col-lg-5 mt-4  '>
                        <div className=''>
                            <Image src={fondo} alt="fondo" className='w-100 h-75 ' />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

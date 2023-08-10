import React from 'react'
import Image from 'next/image'
import imagenNosotros from "@/assets/img/Portada-Header-nosotros.png"
import vision from "@/assets/img/Vision.jpg"
import mision from "@/assets/img/Mision.jpg"
import { BsFacebook, BsTwitter, BsWhatsapp, BsFillShareFill, } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import HomeTestimonios from '../Home/HomeTestimonios'
import HomeRifate from '../Home/HomeRifate'
import { useRouter } from "next/router";

export default function index() {

    const router = useRouter();

    return (
        <section className=' m-0 '>
            <div className='d-block justify-content-center d-lg-flex  fondo-nosotros  p-3 row m-0 '>
                <div className=' col-12 col-lg-6 pt-2 '>
                    <Image src={imagenNosotros} className=" w-75 h-100 mx-auto d-block " alt="..." />
                </div>
                <div className=' col-12 col-lg-6 pt-2 '>
                    <h5 className='title-nosotros  m-0'>¡Rífate!</h5>
                    <p className='subtitle-nosotros m-0'> Y sumate con amor </p>
                    <p className='text-nosotros m-0 lh-1 mt-2'>¡Ayudanos para hacer realidad </p>
                    <p className='text-nosotros m-0 '> las historias con las que te puedes rifar !</p>
                    <p className='information-nosotros mt-2 col-12 col-lg-8'>Rifa con causa es una plataforma que te ayuda a recaudar fondos para causas sociales de Asociaciones Civiles y otras organizaciones sin fines de lucro, a traves de un innovador modelo para administrar eventos (rifas) de bienes,productos o servicios  </p>
                    <button onClick={() => router.push("/rifas/crear_rifas")} className="btn btn-pink btn-sm px-5 fs-6 mt-2 " type="submit">Comenzar a rifarme</button>
                    <div className=" border-bottom border-2  w-75 my-3  "></div>
                    <div>
                        <h6 className="raffle-container-finish">Compartir:</h6>
                        <BsFacebook color=" #C3286D" size={25} className="mx-2" />
                        <BsTwitter color=" #C3286D" size={25} className="mx-2" />
                        <MdEmail color=" #C3286D" size={25} className="mx-2" />
                        <BsWhatsapp color=" #C3286D" size={25} className="mx-2" />
                        <BsFillShareFill color=" #C3286D" size={25} className="mx-2" />
                    </div>
                </div>
            </div>

            <section className='d-lg-flex d-block justify-content-center  mt-5'>
                <div className='col-12 col-lg-5  container-img'>
                    <Image src={vision} className="size-vision-mision-img  p-0 " alt="vision" />
                    <h6 className='  title-vision-mision my-3'>Vision</h6>
                    <p className='  text-vision-mision'> Creemos que hemos sido afortunados dentro de la rifa de la vida. Queremos aportar de regreso a la sociedad, a los menos favorecidos, a nuestro prójimo. Queremos ser activos agentes de cambio. Y lo queremos hacer a través de lo que conocemos: Tecnología e innovación. Y lo queremos hacer simple, para todos.</p>
                    <button className="btn btn-pink btn-sm px-5 fs-6 mt-2  " type="submit">Comenzar a rifarme</button>
                </div>
                <div className='col-12 col-lg-5 mt-5 mt-lg-0 '>
                    <Image src={mision} className="size-vision-mision-img  " alt="mision" />
                    <h6 className='title-vision-mision my-3'>Mision</h6>
                    <p className='text-vision-mision'>Establecernos como la primera y principal plataforma electrónica de generación de eventos (sorteos) privados para beneficencia en el mercado mexicano y latinoamericano. Ser la mejor opción para nuestros usuarios en base a resultados, simplicidad, transparencia y satisfacción de clientes.</p>
                    <button className="btn btn-pink btn-sm px-5 fs-6 mt-2 " type="submit">Comenzar a rifarme</button>
                </div>
            </section>
            <HomeTestimonios />
            <HomeRifate />

        </section>
    )
}

import React from 'react'
import fondo from "@/assets/img/fondo.jpg"
import imagen from "@/assets/img/imagen.svg"
import segundaImagen from "@/assets/img/SegundaImagen.svg"
import Image from 'next/image'
import Rifa from '../Rifas/Rifa'
import RifasActivas from '../Rifas/RifasActivas'
import HomeHeader from './HomeHeader'
import HomeCreateRifa from './HomeCreateRifa'
import HomeTestimonios from './HomeTestimonios'
import HomeRifate from './HomeRifate'
export default function Home() {
    return (
        <div className=''>
            <HomeHeader />
            <Rifa />
            <RifasActivas />
            <HomeCreateRifa />
            <HomeTestimonios />
            <HomeRifate />


        </div >
    )
}

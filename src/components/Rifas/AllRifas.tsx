import React from 'react'
import { AiFillCamera, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import fondoAllRifas from "@/assets/img/gal-microsite-apac1.jpg"
import Image from "next/image";
import Rifa from './Rifa';
import RifasActivas from './RifasActivas';


export default function AllRifas() {
    return (
        <div className=''>
            <div className='d-block d-lg-flex   justify-content-center container-AllRifas   '>
                <div className=' col-12 col-lg-5 '>
                    <p className=' title-AllRifas mt-5 mt-lg-4 '>¡Rífate! </p>
                    <p className='subtitle-AllRifas'> Y súmate con amor</p>
                    <p className='text-AllRifas m-0 lh-2'>Aquí encontraras las historias con las que te puedes rifar!</p>

                </div>
                <div className='mx-5 mt-2 col-12 col-lg-5 '>
                    <Image src={fondoAllRifas} alt='fondoAllrifas' className='w-100 h-100 ' />
                </div>
            </div>
            <Rifa />
            <RifasActivas />
        </div>
    )
}

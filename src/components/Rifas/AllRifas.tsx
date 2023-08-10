import React from 'react'
import { AiFillCamera, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import fondoAllRifas from "@/assets/img/gal-microsite-apac1.jpg"
import Image from "next/image";
import Rifa from './Rifa';
import RifasActivas from './RifasActivas';


export default function AllRifas() {
    return (
        <div className=''>
            <div className='d-block d-lg-flex   justify-content-center   '>
                <div className=' col-12 col-lg-5 '>
                    <p className=' title-participating mt-5 mt-lg-4 '>¡Rífate! </p>
                    <p className='fw-normal display-6 opacity-75 my-4'> Y súmate con amor</p>
                    <p className='fw-semibold fs-5 opacity-75 m-0'>Aquí encontraras las historias con las Que te puedes rifar las</p>
                    <p className='fw-semibold fs-5 opacity-75 m-0 '>  Que te puedes rifar</p>

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

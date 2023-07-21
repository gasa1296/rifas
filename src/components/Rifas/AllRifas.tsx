import React from 'react'
import { AiFillCamera, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import fondoAllRifas from "@/assets/img/fondoAllRifas.svg"
import Image from "next/image";
import Rifa from './Rifa';
import RifasActivas from './RifasActivas';


export default function AllRifas() {
    return (
        <div className='mt-4'>
            <div className='d-block d-lg-flex   justify-content-around '>
                <div className='mx-5 mt-4 '>
                    <p className=' fw-semibold display-3 opacity-50 mt-5 mt-lg-4 '>¡Rífate! </p>
                    <p className='fw-normal display-6 opacity-75 my-4'>Súmate con amor</p>
                    <p className='fw-semibold fs-5 opacity-75 m-0'>Aquí encontraras las historias con las Que te puedes rifar las</p>
                    <p className='fw-semibold fs-5 opacity-75 m-0'>  Que te puedes rifar</p>

                </div>
                <div className='mx-5 mt-2'>
                    <Image src={fondoAllRifas} alt='fondoAllrifas' className='w-100' />
                </div>
            </div>
            <Rifa />
            <RifasActivas />
        </div>
    )
}

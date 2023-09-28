import React from 'react'
import { AiOutlineMenu, AiFillDollarCircle, AiOutlineUser } from "react-icons/ai";
import { FaHandHoldingHeart, FaGift, FaBriefcase, FaUsers } from "react-icons/fa";
import { BsWindowSidebar } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default function DashboardResumen() {
    return (
        <section className='row m-0 d-flex flex-wrap '>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <AiFillDollarCircle color="#784B5F" size={30} />
                <p className='title-resumen m-0'>Rifas</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>73 rifas creadas</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver Rifas</button>
            </div>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <FaHandHoldingHeart color="#784B5F" size={30} />
                <p className='title-resumen m-0'>Causas</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>22 causas creadas</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver Causas</button>
            </div>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <FaGift color="#784B5F" size={30} />
                <p className='title-resumen m-0'>premios</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>62 premios creados</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver Premios</button>
            </div>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <FaBriefcase color="#784B5F" size={30} />
                <p className='title-resumen m-0'>Cartera</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>0 creadas</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver Cartera</button>
            </div>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <BsWindowSidebar color="#784B5F" size={30} />
                <p className='title-resumen m-0'>Micrositios</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>12 usuarios creados</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver Micrositio</button>
            </div>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <FaUsers color="#784B5F" size={30} />
                <p className='title-resumen m-0'>Usuarios</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>Perfil APAC, A.C.</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver usuarios</button>
            </div>
            <div className='container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3'>
                <AiOutlineUser color="#784B5F" size={30} />
                <p className='title-resumen m-0'>Mi perfil</p>
                <p className='informationRaffle-resumen m-0 mb-2 '>Perfil APAC, A.C.</p>
                <button className='button-Resumen p-2 px-3 m-0'>Ver perfil</button>
            </div>


        </section>
    )
}

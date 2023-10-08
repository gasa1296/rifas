import React from 'react'
import { BsSearch } from "react-icons/bs";
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineMenu, AiFillDollarCircle, AiOutlineUser } from "react-icons/ai";
import { getStatusColor } from '@/utils/getStatusColor';
import RifaOption from './Components/RifaOption';

export default function DashboadrRifas() {

    const options = [


        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
            informacion: "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
            recaudado: "$ 28,980.00",
            fecha: "04-10-2023",
            precio: "$890.00",
            estado: "Vigente",

        },

        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
            informacion: "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
            recaudado: "$ 28,980.00",
            fecha: "07-12-2023",
            precio: "$960.00",
            estado: "En proceso",

        },
        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
            informacion: "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
            recaudado: "$ 28,980.00",
            fecha: "04-10-2022",
            precio: "$960.00",
            estado: "Cancelada",

        },
        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
            informacion: "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
            recaudado: "$ 28,980.00",
            fecha: "07-10-2022",
            precio: "$4.960.00",
            estado: "Finalizada",

        },
    ]



    return (
        <section className=''>
            <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 '>
                <div className=' d-block d-md-flex mt-2 '>
                    <p className='title-dashboard mx-2 '>APAC, A.C. /</p>
                    <p className='title-dashboard  '>Rifas</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <button className=' p-2 me-3 button-dashboard m-0 '><MdKeyboardArrowLeft />Mis asociaciones </button>
                    <button className='me-3 button-user  m-0 p-2  '><AiFillDollarCircle size={20} className='mx-2' />Nueva Rifa </button>
                </div>

            </div>


            <div className='pt-3 background-dashboard mt-3 '>
                <div className='d-block d-md-flex justify-content-between align-items-center border-1   mb-4  px-3 ' >

                    <div className='d-flex align-items-center '> <h6 className='me-2'>Fechas </h6>
                        <input
                            type="datetime-local"
                            className={`w-25 form-control my-2 fs-5 m-0 `}

                        />
                        <input
                            type="datetime-local"
                            className={`w-25 form-control my-2 fs-5 m-0 `}

                        />
                    </div>

                    <div className="input-group  w-75  border-input " >
                        <input type="text" className="form-control" placeholder="Buscar Rifas " />
                        <button className="btn btn-btn-outline-light  " type="button" id="button-addon2"><BsSearch /></button>
                    </div>
                </div>

                <div className='table-responsive  mx-3 '>

                    <table className="table ">
                        <thead className='container-cartera '>
                            <tr className=''>
                                <th className='select-DashboarRifas px-2' scope="col">Imagen</th>
                                <th className='select-DashboarRifas ' scope="col">Titulo</th>
                                <th className='select-DashboarRifas ' scope="col">Recaudado</th>
                                <th style={{ width: "115px" }} className='select-DashboarRifas  ' scope="col">Fecha Rifa</th>
                                <th style={{ width: "115px" }} className='select-DashboarRifas ' scope="col">Precio boleto</th>
                                <th className='select-DashboarRifas  ' scope="col">Estado</th>
                                <th className='select-DashboarRifas  ' scope="col">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {options.map((option, index) => (
                                <RifaOption option={option} index={index} />


                            ))}

                        </tbody>

                    </table>

                </div>
            </div>




        </section >
    )
}

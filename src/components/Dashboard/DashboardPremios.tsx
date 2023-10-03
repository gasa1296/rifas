import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { FaGift, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ModalPremioDashboard from '../modal/ModalPremioDashboard';

export default function DashboardPremios() {
    const [showScreen, setShowScreen] = useState(false)
    const handleClose = () => setShowScreen(false);
    return (
        <section className=' '>
            <ModalPremioDashboard showScreen={showScreen} setShowScreen={setShowScreen} handleClose={handleClose} />

            <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center py-3 col-12 '>
                <div className=' d-block d-md-flex '>
                    <p className='title-dashboard ms-3  '>APAC, A.C. /</p>
                    <p className='title-dashboard ms-3 '>Premios</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <button className=' p-2 me-3 button-dashboard m-0 '><MdKeyboardArrowLeft />Mis asociaciones </button>
                    <button onClick={() => { setShowScreen(true) }} className='me-3 button-dashboard btn-pink m-0 p-2  '><FaGift className='mx-2' />Nuevo premio </button>
                </div>

            </div>

            <div className='pt-3 background-dashboard mt-3 px-3'>

                <div className='d-flex justify-content-between border-1  '>
                    <h6>Fechas </h6>
                    <div className="input-group mb-3 w-50  border-input " >
                        <input type="text" className="form-control" placeholder="Buscar premios " />
                        <button className="btn btn-btn-outline-light  " type="button" id="button-addon2"><BsSearch /></button>
                    </div>
                </div>

                <div className='table-responsive '>

                    <table className="table ">
                        <thead className='container-cartera '>
                            <tr className=''>
                                <th className='select-DashboarRifas px-2' scope="col">Imagen</th>
                                <th className='select-DashboarRifas ' scope="col">Titulo</th>
                                <th className='select-DashboarRifas px-3' scope="col">Fecha alta</th>
                                <th className='select-DashboarRifas px-4' scope="col">Precio</th>
                                <th className='select-DashboarRifas px-4' scope="col">Estado</th>
                                <th className='select-DashboarRifas px-4' scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-secondary  borderLateral-Rifas'>
                                <th scope="row">  <FaImage size={30} className=' mt-3 mx-2' /></th>
                                <td>
                                    <h6 className='text-cartera px-2 mt-3'>iPhone de última generación</h6>
                                    <p className="parraf-cartera px-2">iPhone un dispositivo de vanguardia que combina la elegancia del diseño con el rendimiento excepcional, cuenta con lo último en tecnología.</p>
                                </td>
                                <td className='number-dashboardRifas mt-3'>04-10-2023</td>
                                <td className='number-dashboardRifas px-4'>$890.00</td>
                                <td className='number-dashboardRifas px-4'>Vigente</td>
                                <td className='icon-dashboarRifas px-4'><FaRegEdit color="#2161BD" size={18} className='mx-2' /> <FaInfoCircle color="#2161BD" size={18} /> </td>
                            </tr>
                            <tr className='  borderLateral-Rifas fondo-table'>
                                <th scope="row">  <FaImage size={30} className=' mt-3 mx-2' /></th>
                                <td>
                                    <h6 className='text-cartera px-2 mt-3'>Apple Watch</h6>
                                    <p className="parraf-cartera px-2">Ya sea que busques un teléfono de alto rendimiento para tus tareas diarias, un dispositivo para disfrutar de tus contenidos multimedia favoritos.</p>
                                </td>
                                <td className='number-dashboardRifas mt-3'>07-12-2023</td>
                                <td className='number-dashboardRifas px-4'>$ 960.00</td>
                                <td className='number-dashboardRifas px-4'>Vigente</td>
                                <td className='icon-dashboarRifas px-4'><FaRegEdit color="#2161BD" size={18} className='mx-2' /> <FaInfoCircle color="#2161BD" size={18} /> </td>
                            </tr>  <tr className='table-secondary borderLateral-vigente'>
                                <th scope="row">  <FaImage size={30} className=' mt-3 mx-2' /></th>
                                <td>
                                    <h6 className='text-cartera px-2 mt-3'>Televisión Samsung de 50 pulgadas OLED</h6>
                                    <p className="parraf-cartera px-2">Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.</p>
                                </td>
                                <td className='number-dashboardRifas mt-3'>11-10-2024</td>
                                <td className='number-dashboardRifas px-4'>$ 960.00</td>
                                <td className='number-dashboardRifas px-4'>En proceso</td>
                                <td className='icon-dashboarRifas px-4'><FaRegEdit color="#2161BD" size={18} className='mx-2' /> <FaInfoCircle color="#2161BD" size={18} /> </td>
                            </tr>

                        </tbody>
                    </table>

                </div>


            </div>






        </section >
    )
}

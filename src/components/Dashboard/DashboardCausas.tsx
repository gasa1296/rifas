import React, { useState } from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload, FaHandHoldingHeart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiFillDollarCircle, AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ModalCausasDashboard from '../modal/ModalCausasDashboard';

export default function DashboardCausas() {
    const [showScreenCausa, setShowScreenCausa] = useState(false)
    const handleClose = () => setShowScreenCausa(false);


    return (
        <section className=''>
            <ModalCausasDashboard showScreenCausa={showScreenCausa} setShowScreenCasusa={setShowScreenCausa} handleClose={handleClose} />

            <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center py-3 col-12 '>
                <div className=' d-block d-md-flex '>
                    <p className='title-dashboard ms-3  '>APAC, A.C. /</p>
                    <p className='title-dashboard ms-3 '>Causas</p>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                    <button className=' p-2 me-3 button-dashboard m-0 '><MdKeyboardArrowLeft />Mis asociaciones </button>
                    <button onClick={() => { setShowScreenCausa(true) }} className='me-3 button-dashboard btn-pink m-0 p-2  '><FaHandHoldingHeart size={20} className='mx-2' />Nueva causa </button>
                </div>

            </div>


            <div className='pt-3 background-dashboard mt-3 px-3'>

                <div className='d-flex justify-content-between border-1   '>
                    <h6>Fechas </h6>
                    <div className="input-group mb-3 w-50  border-input " >
                        <input type="text" className="form-control" placeholder="Buscar causa " />
                        <button className="btn btn-btn-outline-light  " type="button" id="button-addon2"><BsSearch /></button>
                    </div>
                </div>

                <div className='table-responsive '>

                    <table className="table ">
                        <thead className='container-cartera '>
                            <tr className=''>
                                <th className='select-DashboarRifas px-2' scope="col">Imagen</th>
                                <th className='select-DashboarRifas ' scope="col">Titulo</th>
                                <th className='select-DashboarRifas px-3' scope="col">Recaudado</th>
                                <th className='select-DashboarRifas px-3' scope="col">Fecha Rifa</th>
                                <th className='select-DashboarRifas px-3' scope="col">Precio boleto</th>
                                <th className='select-DashboarRifas px-2' scope="col">Estado</th>
                                <th className='select-DashboarRifas px-2' scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-secondary  borderLateral-Rifas'>
                                <th scope="row">  <FaImage size={30} className=' mt-3 mx-2' /></th>
                                <td>
                                    <h6 className='text-cartera px-2 mt-3'>¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!</h6>
                                    <p className="parraf-cartera px-2">Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.</p>
                                </td>
                                <td className='number-dashboardRifas mt-3'>$ 28,980.00</td>
                                <td className='number-dashboardRifas'>07-12-2023</td>
                                <td className='number-dashboardRifas'>$890.00</td>
                                <td className='number-dashboardRifas'>Vigente</td>
                                <td className='icon-dashboarRifas px-3'><FaRegEdit color="#2161BD" size={18} /> <FaInfoCircle color="#2161BD" size={18} /> </td>
                            </tr>
                            <tr className='fondo-table borderLateral-Rifas'>
                                <th scope="row">  <FaImage size={30} className=' mt-3 mx-2' /></th>
                                <td>
                                    <h6 className='text-cartera px-2 mt-3'>¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!</h6>
                                    <p className="parraf-cartera px-2">Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.</p>
                                </td>
                                <td className='number-dashboardRifas mt-3'>$ 28,980.00</td>
                                <td className='number-dashboardRifas'>07-12-2023</td>
                                <td className='number-dashboardRifas'>$890.00</td>
                                <td className='number-dashboardRifas'>Vigente</td>
                                <td className='icon-dashboarRifas px-3'><FaRegEdit color="#2161BD" size={18} /> <FaInfoCircle color="#2161BD" size={18} /> </td>
                            </tr>
                            <tr className='table-secondary  borderLateral-vigente'>
                                <th scope="row">  <FaImage size={30} className=' mt-3 mx-2' /></th>
                                <td>
                                    <h6 className='text-cartera px-2 mt-3'>¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!</h6>
                                    <p className="parraf-cartera px-2">Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.</p>
                                </td>
                                <td className='number-dashboardRifas mt-3'>$ 28,980.00</td>
                                <td className='number-dashboardRifas'>07-12-2023</td>
                                <td className='number-dashboardRifas'>$890.00</td>
                                <td className='number-dashboardRifas px-2 '>Proceso</td>
                                <td className='icon-dashboarRifas px-3'><FaRegEdit color="#2161BD" size={18} /> <FaInfoCircle color="#2161BD" size={18} /> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>




        </section >
    )
}

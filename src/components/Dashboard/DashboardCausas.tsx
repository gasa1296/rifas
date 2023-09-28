import React from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export default function DashboardCausas() {
    return (
        <section className='mx-0 mx-lg-3 pb-4 '>
            <div className='d-flex justify-content-between border-1  '>
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


        </section >
    )
}

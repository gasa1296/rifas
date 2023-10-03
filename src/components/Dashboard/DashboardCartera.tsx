import React from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

function DashboardCartera() {
    return (
        <section className=' '>
            <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center py-3 col-12'>
                <div className=' d-block d-md-flex '>
                    <p className='title-dashboard ms-3  '>APAC, A.C. /</p>
                    <p className='title-dashboard ms-3 '>Cartera</p>
                </div>

                <button className='me-0 me-3 button-dashboard m-0 p-2 '><MdKeyboardArrowLeft />Mis asociaciones </button>
            </div>

            <div className='pt-3 background-dashboard mt-3 px-3'>


                <div className='d-flex container-cartera  p-3 mt-2'>
                    <div className='ms-4 text-center'>
                        <FaBriefcase color='#784B5F' size={30} />
                        <p className='value-Cartera mt-2'>$1600.00</p>
                    </div>

                    <div className='ms-4'>
                        <p className='m-0 saldo-Cartera'>Saldo de tu cartera</p>
                        <p className='m-0 information-Saldo'>Este es el saldo aplicado a tu cuenta, no tiene vencimiento y lo puedes ocupar para comprar boletos para cualquier rifa.</p>
                    </div>
                </div>
                <p className='mt-3 details-Cartera '>Detalle de movimientos</p>


                <div className='table-responsive'>
                    <table className="table ">
                        <thead className='fondo-table '>

                            <tr className=''>
                                <th className='select-DashboarRifas px-2' scope="col">Imagen</th>
                                <th className='select-DashboarRifas px-2 ' scope="col">Titulo</th>
                                <th className='select-DashboarRifas px-3' scope="col">Fecha Rifa</th>
                                <th className='select-DashboarRifas px-4' scope="col">Monto</th>
                                <th className='select-DashboarRifas' scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='table-secondary  borderLateral-Rifas '>
                                <th scope="row ps-2" >  <FaImage size={30} className='' /></th>
                                <td>
                                    <h6 className='text-carteramt mt- '>¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!</h6>
                                    <p className="parraf-cartera">Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.</p>
                                </td>
                                <td className='number-dashboardRifas'>04-10-2023</td>
                                <td className='number-dashboardRifas'>-$ 890.003</td>
                                <td className='number-dashboardRifas'>Canjeado</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className='table-secondary  borderLateral-Rifas'>
                                <th scope="row ps-2" >  <FaImage size={30} className='' /></th>
                                <td>
                                    <h6 className='text-cartera mt-3'>¡Hola! ¡Soy Emiliano, ayúdame a vencer el cáncer!</h6>
                                    <p className="parraf-cartera">Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.</p>
                                </td>
                                <td className='number-dashboardRifas '>04-10-2023</td>
                                <td className='number-dashboardRifas '>-$ 890.003</td>
                                <td className='number-dashboardRifas'>Canjeado</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


            </div>





        </section>
    )
}

export default DashboardCartera
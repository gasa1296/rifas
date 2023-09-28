import React from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload, FaTrash } from "react-icons/fa";

export default function DasboardUsers() {
    return (
        <div className='table-responsive'>
            <table className="table ">
                <thead className='fondo-table '>

                    <tr className=''>
                        <th className='select-DashboarRifas px-2' scope="col">Imagen</th>
                        <th className='select-DashboarRifas px-4 ' scope="col">Nombre</th>
                        <th className='select-DashboarRifas ' scope="col">Apellidos</th>
                        <th className='select-DashboarRifas px-5' scope="col">Correo</th>
                        <th className='select-DashboarRifas px-2' scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='table-secondary  borderLateral-Rifas '>
                        <th scope="row ps-2" >  <FaImage size={30} className='' /></th>
                        <td className='number-dashboardRifas px-4'>Jesús</td>
                        <td className='number-dashboardRifas '>Beltran Parra</td>
                        <td className='number-dashboardRifas px-5'>parra.beltran12@gmail.com</td>
                        <td className='icon-dashboarRifas px-3'><FaRegEdit color="#2161BD" size={18} className='mx-1' /> <FaTrash size={18} className='' color="#2161BD" /></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='table-secondary  borderLateral-vigente '>
                        <th scope="row ps-2" >  <FaImage size={30} className='' /></th>
                        <td className='number-dashboardRifas px-4'>Liliana</td>
                        <td className='number-dashboardRifas'>Fernandez Estrada</td>
                        <td className='number-dashboardRifas px-5'>liliana1fernandez@yahoo.com</td>
                        <td className='icon-dashboarRifas px-3'><FaRegEdit color="#2161BD" size={18} className='mx-1' /> <FaTrash size={18} className='' color="#2161BD" /></td>
                    </tr>

                </tbody>
                <tbody>
                    <tr className='table-secondary  borderLateral-Rifas '>
                        <th scope="row ps-2" >  <FaImage size={30} className='' /></th>
                        <td className='number-dashboardRifas px-4'>Cuautli</td>
                        <td className='number-dashboardRifas '>Martinez Martinez</td>
                        <td className='number-dashboardRifas px-5'>cuautli.martinez@gmail.com</td>
                        <td className='icon-dashboarRifas px-3'><FaRegEdit color="#2161BD" size={18} className='mx-1' /> <FaTrash size={18} className='' color="#2161BD" /></td>
                    </tr>

                </tbody>
            </table>

        </div >
    )
}

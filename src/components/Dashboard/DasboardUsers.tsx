import React from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload, FaTrash } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export default function DasboardUsers() {
    return (

        <section className='mx-0 mx-lg-3'>
            <div className="input-group mb-3 w-50  border-input mt-3" >
                <input type="text" className="form-control" placeholder="Buscar por nombre, correo " />
                <button className="btn btn-btn-outline-light  " type="button" id="button-addon2"><BsSearch /></button>
            </div>
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
        </section>

    )
}

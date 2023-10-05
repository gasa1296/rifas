import React, { useState } from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaUsers, FaTrash } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { BsSearch } from "react-icons/bs";
import ModalAddUser from '../modal/ModalAddUser';
import ModalDeleteUser from '../modal/ModalDeleteUser';
import ModalAsociarUser from '../modal/ModalAsociarUser';
import ModalEditUser from '../modal/ModalEditUser';

export default function DasboardUsers() {
    const [showScreen, setShowScreen] = useState(false)
    const [showScreenDelete, setShowScreenDelete] = useState(false);
    const [showAsociarusuario, setShowAsociarUsuario] = useState(false);
    const [showEditUser, setShowEditUser] = useState(false);
    const handleClose = () => setShowScreen(false);
    const handleCloseDelete = () => setShowScreenDelete(false);
    const handleCloseAsociacion = () => setShowAsociarUsuario(false);
    const handleCloseEdit = () => setShowEditUser(false);



    return (

        <section className=''>
            <ModalAddUser setShowScreen={setShowScreen} showScreen={showScreen} handleClose={handleClose} />
            <ModalDeleteUser setShowScreenDelete={setShowScreenDelete} showScreenDelete={showScreenDelete} handleCloseDelete={handleCloseDelete} />
            <ModalAsociarUser showAsociarusuario={showAsociarusuario} setShowAsociarUsuario={setShowAsociarUsuario} handleCloseAsociacion={handleCloseAsociacion} />
            <ModalEditUser showEditUser={showEditUser} setShowEditUser={setShowEditUser} handleCloseEdit={handleCloseEdit} />
            <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center py-3 col-12 '>
                <div className=' d-block d-md-flex '>
                    <p className='title-dashboard ms-3  '>APAC, A.C. /</p>
                    <p className='title-dashboard ms-3 '>Usuarios</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <button className='me-3 button-dashboard  m-0 p-2  '><MdKeyboardArrowLeft className='' />Mis asociaciones </button>

                    <button onClick={() => { setShowAsociarUsuario(true) }} className='me-3 button-dashboard btn-pink m-0 p-2  '><BsLink45Deg size={20} className='mx-1' />Asociar usuario </button>
                    <button onClick={() => { setShowScreen(true) }} className='me-3 button-dashboard btn-pink m-0 p-2  '><FaUsers className='mx-2' />Nuevo usuario </button>
                </div>

            </div>

            <div className='pt-3 background-dashboard mt-3 px-3'>




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
                                <td className='icon-dashboarRifas px-3'><FaRegEdit onClick={() => { setShowEditUser(true) }} color="#2161BD" size={18} className='mx-1' /> <FaTrash onClick={() => { setShowScreenDelete(true) }} size={18} className='' color="#2161BD" /></td>
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


            </div>



        </section>

    )
}

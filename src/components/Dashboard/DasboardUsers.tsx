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

    const options = [
        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            nombre: "Jesús",
            apellido: "Beltran Parra",
            correo: "parra.beltran12@gmail.com"

        },
        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            nombre: "Liliana",
            apellido: "Fernandez Estrada",
            correo: "liliana1fernandez@yahoo.com"

        },
        {
            icon: <FaImage size={30} className='mt-3 mx-2' />,
            nombre: "Cuautli",
            apellido: "Martinez Martinez",
            correo: "cuautli.martinez@gmail.com"
        }


    ]

    return (

        <section className=''>
            <ModalAddUser setShowScreen={setShowScreen} showScreen={showScreen} handleClose={handleClose} />
            <ModalDeleteUser setShowScreenDelete={setShowScreenDelete} showScreenDelete={showScreenDelete} handleCloseDelete={handleCloseDelete} />
            <ModalAsociarUser showAsociarusuario={showAsociarusuario} setShowAsociarUsuario={setShowAsociarUsuario} handleCloseAsociacion={handleCloseAsociacion} />
            <ModalEditUser showEditUser={showEditUser} setShowEditUser={setShowEditUser} handleCloseEdit={handleCloseEdit} />
            <div className='background-dashboard  d-block d-lg-flex justify-content-between p-3  align-items-center  col-12 '>
                <div className=' d-block d-md-flex  mt-2'>
                    <p className='title-dashboard mx-2  '>APAC, A.C. /</p>
                    <p className='title-dashboard '>Usuarios</p>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                    <button className=' button-dashboard m-0 p-1  '><MdKeyboardArrowLeft size={20} className='' />Mis asociaciones </button>

                    <button onClick={() => { setShowAsociarUsuario(true) }} className='button-user  mx-2  p-1 '><BsLink45Deg size={20} className='mx-1' />Asociar usuario </button>
                    <button onClick={() => { setShowScreen(true) }} className=' button-user   p-1 '><FaUsers className='mx-2' />Nuevo usuario </button>
                </div>

            </div>

            <div className='pt-3 background-dashboard mt-3 px-3'>




                <div className="input-group mb-3 w-50  border-input mt-3 " >
                    <input type="text" className="form-control" placeholder="Buscar por nombre, correo " />
                    <button className="btn btn-btn-outline-light  " type="button" id="button-addon2"><BsSearch /></button>
                </div>
                <div className='table-responsive'>
                    <table className="table ">
                        <thead className='fondo-table '>

                            <tr className=''>
                                <th className='select-DashboarRifas px-2' scope="col">Imagen</th>
                                <th className='select-DashboarRifas  ' scope="col">Nombre</th>
                                <th className='select-DashboarRifas ' scope="col">Apellidos</th>
                                <th className='select-DashboarRifas ' scope="col">Correo</th>
                                <th className='select-DashboarRifas px-2' scope="col">Acciones</th>
                            </tr>
                        </thead>



                        <tbody>


                            {options.map((option, index) => (

                                <tr className='table-secondary  borderLateral-Rifas ' style={{ borderLeft: index % 2 === 0 ? '#000' : '#cb1818' }}>
                                    <th scope="row " className=' icon p-2  ' >  {option.icon}</th>
                                    <td className='number-dashboardRifas '>{option.nombre}</td>
                                    <td className='number-dashboardRifas '>{option.apellido}</td>
                                    <td className='number-dashboardRifas '>{option.correo}</td>
                                    <td className='icon-dashboarRifas '><FaRegEdit onClick={() => { setShowEditUser(true) }} color="#2161BD" size={18} className='mx-1' /> <FaTrash onClick={() => { setShowScreenDelete(true) }} size={18} className='' color="#2161BD" /></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                </div >


            </div>



        </section>

    )
}

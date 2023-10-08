import ModalEditRifas from '@/components/modal/ModalEditRifas';
import ModalInformationRifa from '@/components/modal/ModalInformationRifa';
import { getStatusColor } from '@/utils/getStatusColor'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";

export default function RifaOption({ option, index }: any) {

    const [showScreenEditRifa, setShowScreenEditRifa] = useState(false)
    const [showScreenInformationRifa, setShowScreenInformationRifa] = useState(false)
    const handleClose = () => setShowScreenEditRifa(false);
    const handleCloseModalInformation = () => setShowScreenInformationRifa(false);


    return (
        <tr className=' position-relative ' style={{ background: index % 2 === 0 ? 'table-secondary' : '#fff' }}>
            <ModalEditRifas showScreenEditRifa={showScreenEditRifa} setShowScreenEditRifa={setShowScreenEditRifa} handleClose={handleClose} />
            <ModalInformationRifa showScreenInformationRifa={showScreenInformationRifa} setShowScreenInformationRifa={setShowScreenInformationRifa} handleCloseModalInformation={handleCloseModalInformation} />
            <th scope="row ">
                <div className='position-absolute top-0 start-0 borderLateral-Rifas  ' style={{ backgroundColor: getStatusColor(option.estado) }}></div>
                <div className='  d-flex justify-content-center  align-items-center bg-light  icon mt-5 p-1 ms-1 '>{option.icon}</div>
            </th>

            <td>
                <h6 className='text-cartera px-2 mt-3'>{option.titulo}</h6>
                <p className="parraf-cartera px-2">{option.informacion}</p>
            </td>
            <td style={{ width: "120px" }} className='number-dashboardRifas mt-3'>{option.recaudado}</td>
            <td className='number-dashboardRifas px-3'>{option.fecha}</td>
            <td className='number-dashboardRifas'>{option.precio}</td>
            <td style={{ width: "", color: getStatusColor(option.estado) }} className='number-dashboardRifas'>{option.estado}</td>
            <td className='icon-dashboarRifas'><FaRegEdit onClick={() => { setShowScreenEditRifa(true) }} color="#2161BD" size={18} /> <FaInfoCircle onClick={() => { setShowScreenInformationRifa(true) }} color="#2161BD" size={18} /> <FaDownload color="#2161BD" size={18} /></td>
        </tr>
    )
}

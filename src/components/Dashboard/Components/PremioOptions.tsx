import ModalEditPremio from '@/components/modal/ModalEditPremio';
import ModalInformationPremio from '@/components/modal/ModalInformationPremio';
import { getStatusColor } from '@/utils/getStatusColor'
import React, { useState } from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";

export default function PremioOptions({ option, index }: any) {
    const [showScreenEditPremio, setShowScreenEditPremio] = useState(false)
    const [showScreenInformationPremio, setShowScreenInformationPremio] = useState(false)
    const handleClose = () => setShowScreenEditPremio(false);
    const handleCloseModalInformation = () => setShowScreenInformationPremio(false);
    return (
        <tr className='border position-relative ' style={{ background: index % 2 === 0 ? 'table-secondary' : '#fff' }}>
            <ModalEditPremio showScreenEditPremio={showScreenEditPremio} setShowScreenEditPremio={setShowScreenEditPremio} handleClose={handleClose} />
            <ModalInformationPremio showScreenInformationPremio={showScreenInformationPremio} setShowScreenInformationPremio={setShowScreenInformationPremio} handleCloseModalInformation={handleCloseModalInformation} />
            <th scope="row">
                <div className='position-absolute top-0 start-0 borderLateral-Rifas ' style={{ backgroundColor: getStatusColor(option.estado) }}></div>
                <div className='  d-flex justify-content-center  align-items-center bg-light  icon mt-4 p-2 ms-2 '>{option.icon}</div>

            </th>

            <td>
                <h6 className='text-cartera px-2 mt-3'>{option.titulo}</h6>
                <p className="parraf-cartera px-2">{option.informacion}</p>
            </td>
            <td className='number-dashboardRifas '>{option.fecha}</td>
            <td className='number-dashboardRifas '>{option.precio}</td>
            <td style={{ width: "110px", color: getStatusColor(option.estado) }} className='number-dashboardRifas px-3'>{option.estado}</td>
            <td className='icon-dashboarRifas px-3 '><FaRegEdit onClick={() => { setShowScreenEditPremio(true) }} color="#2161BD" size={18} /> <FaInfoCircle onClick={() => { setShowScreenInformationPremio(true) }} color="#2161BD" size={18} /> <FaDownload color="#2161BD" size={18} /></td>
        </tr>
    )
}

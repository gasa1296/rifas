import ModalCausasDashboard from '@/components/modal/ModalCausasDashboard';
import ModalEditCausa from '@/components/modal/ModalEditCausa';
import ModalInformationCausa from '@/components/modal/ModalInformationCausa';
import { getStatusColor } from '@/utils/getStatusColor'
import React, { useState } from 'react'
import { FaBriefcase, FaImage, FaRegEdit, FaInfoCircle, FaDownload } from "react-icons/fa";
export default function CausasOption({ option, index }: any) {

    const [showScreenEditCausa, setShowScreenEditCausa] = useState(false)
    const [showScreenInformationCausa, setShowScreenInformationCausa] = useState(false)
    const handleClose = () => setShowScreenEditCausa(false);
    const handleCloseModalInformation = () => setShowScreenInformationCausa(false);
    return (


        <tr className='border position-relative ' style={{ background: index % 2 === 0 ? 'table-secondary' : '#fff' }}>
            <ModalEditCausa showScreenEditCausa={showScreenEditCausa} setShowScreenEditCausa={setShowScreenEditCausa} handleClose={handleClose} />
            <ModalInformationCausa showScreenInformationCausa={showScreenInformationCausa} setShowScreenInformationCausa={setShowScreenInformationCausa} handleCloseModalInformation={handleCloseModalInformation} />

            <th scope="row">
                <div className='position-absolute top-0 start-0 borderLateral-Rifas ' style={{ backgroundColor: getStatusColor(option.estado) }}></div>
                <div className='  d-flex justify-content-center  align-items-center bg-light  icon mt-4 p-2 ms-2 '>{option.icon}</div>
            </th>

            <td>
                <h6 className='text-cartera px-2 mt-3'>{option.titulo}</h6>
                <p className="parraf-cartera px-2">{option.informacion}</p>
            </td>
            <td className='number-dashboardRifas '>{option.fecha}</td>
            <td className='number-dashboardRifas'>{option.precio}</td>
            <td style={{ width: "110px", color: getStatusColor(option.estado) }} className='number-dashboardRifas'>{option.estado}</td>
            <td className='icon-dashboarRifas'><FaRegEdit onClick={() => { setShowScreenEditCausa(true) }} color="#2161BD" size={18} /> <FaInfoCircle onClick={() => { setShowScreenInformationCausa(true) }} color="#2161BD" size={18} /> <FaDownload color="#2161BD" size={18} /></td>
        </tr>

    )
}

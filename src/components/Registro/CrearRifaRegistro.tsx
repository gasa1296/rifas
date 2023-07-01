import React, { useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ConfiguraRifa from '../Rifas/ConfiguraRifa';
import DefinicionRifa from '../Rifas/DefinicionRifa';
import ConfirmacionRifa from '../Rifas/ConfirmacionRifa';
export default function CrearRifaRegistro({ nextStep, backStep }: any) {
    const [step, setStep] = useState(0)
    return (
        <div>
            <h2 className="text-center text-secondary">¡Es momento de rifarnos Cuautli!</h2>

            <div className='mb-3 col-12 col-md-5 m-auto  text-secondary shadow rounded'>

                <div className=' d-flex justify-content-between align-items-center m-3 rounded  ' onClick={() => setStep(1)}>
                    <button className={`form-control fs-4 text-light bg-secondary  ${step === 1 ? " opacity-50 " : " opacity-100  "}`}>Configura el premio tu rifa  {step === 1 ? <MdKeyboardArrowUp size={30} /> : < MdKeyboardArrowDown size={30} />} </button>
                </div>
                {step === 1 && <ConfiguraRifa />}

                <div className=' d-flex justify-content-between align-items-center m-3 rounded  ' onClick={() => setStep(2)} >
                    <button className={`form-control fs-4 text-light bg-secondary  ${step === 2 ? " opacity-50 " : " opacity-100  "}`}> Define los datos de tu rifa  {step === 2 ? <MdKeyboardArrowUp size={30} /> : < MdKeyboardArrowDown size={30} />}</button>
                </div>

                {step === 2 && <DefinicionRifa />}

                <div className=' d-flex justify-content-around align-items-center m-3 bg-secondary rounded  ' onClick={() => setStep(3)}>
                    <button className={`form-control fs-4 text-light bg-secondary  ${step === 3 ? " opacity-50 " : " opacity-100  "}`}>Confirmación de la rifa   {step === 3 ? <MdKeyboardArrowUp size={30} /> : < MdKeyboardArrowDown size={30} />} </button>
                </div>
                {step === 3 && <ConfirmacionRifa />}

            </div>
            <div className=' text-dark text-center ' >
                <button className=" my-2 w-50 btn btn-outline-secondary" type="button" onClick={() => nextStep()}>Ir al inicio</button>
            </div>
        </div>
    )
}

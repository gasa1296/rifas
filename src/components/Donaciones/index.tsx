import React, { useState } from 'react';
import DonacionesDescripcion from './DonacionesDescripcion'
import DonacionesInformation from './DonacionesInformation'
import DonacionesValidacion from './DonacionesValidacion'

export default function Donacioneshkh() {
    const [step, setStep] = useState(1)
    return (
        <div className='my-4'>
            {step === 1 && <DonacionesDescripcion step={step} setStep={setStep} />}
            {step === 2 && <DonacionesInformation step={step} setStep={setStep} />}
            {step === 3 && <DonacionesValidacion step={step} setStep={setStep} />}
        </div>
    )
}

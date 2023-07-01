import React from 'react'
import Tabs from '../Tab'
import CreateAccount from '../Registro/CreateAccount';
import RegistarRifas from './RegistarRifas';
import CrearCuenta from './CrearCuenta';


export default function CrearRifas() {
    const tabs = [
        { label: "Crear una cuenta", Component: CrearCuenta },
        { label: "Registro una AC", Component: RegistarRifas },
        { label: "Crear rifa", Component: CreateAccount },
    ];

    return (
        <div>
            <Tabs tabs={tabs} />
        </div >
    )
}

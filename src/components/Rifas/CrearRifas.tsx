import React from 'react'
import Tabs from '../Tab'
import CreateAccount from '../Registro/CreateAccount';
import FinalizarRegristo from "@/components/Registro/FinalizarRegistro"
import RegistroCuenta from '../Registro/RegistroCuenta';


export default function CrearRifas() {
    const tabs = [
        { label: "Crear una cuenta", Component: CreateAccount },
        { label: "Registro una AC", Component: RegistroCuenta },
        { label: "Crear rifa", Component: FinalizarRegristo },
    ];

    return (
        <div>
            <Tabs tabs={tabs} />
        </div >
    )
}

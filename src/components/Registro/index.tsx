import React from "react";
import Tabs from "../Tab";
import CreateAccount from "./CreateAccount";
import RegistroCuenta from "./RegistroCuenta";
import CrearRifaRegistro from "./CrearRifaRegistro";
import FinalizarRegistro from "./FinalizarRegistro";
import RegistroCompletado from "./RegistroCompletado";
import RegistroSucessfull from "./RegistroSucessfull";
export default function Registro() {
  const tabs = [
    { label: " Crear una cuenta", Component: CreateAccount },
    { label: " Cuenta Completada", Component: RegistroSucessfull },
    { label: " Registro una AC", Component: RegistroCuenta },
    { label: " Crear rifa", Component: FinalizarRegistro },
  ];

  return (
    <section>
      <Tabs tabs={tabs} />
    </section>
  );
}

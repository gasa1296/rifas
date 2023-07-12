import React from "react";
import Tabs from "../Tab";
import CreateAccount from "./CreateAccount";
import RegistroCuenta from "./RegistroCuenta";
import CrearRifaRegistro from "./CrearRifaRegistro";
import FinalizarRegistro from "./FinalizarRegistro";
export default function Registro() {
  const tabs = [
    { label: "Registro una AC", Component: RegistroCuenta },
    { label: "Crear una cuenta", Component: CreateAccount },
    { label: "Crear rifa", Component: FinalizarRegistro },
  ];

  return (
    <section>
      <Tabs tabs={tabs} />
    </section>
  );
}

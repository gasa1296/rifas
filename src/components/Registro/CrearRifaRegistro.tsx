import React from "react";
import RegistroSucessfull from "./RegistroSucessfull";
import Tabs from "../Tab";
import RegistroCuenta from "./RegistroCuenta";
import CreateRifa from "./CreateRifa";

export default function CrearRifaRegistro() {
  const tabs = [
    { label: " Cuenta Completada", Component: RegistroSucessfull },
    { label: " Registro una AC", Component: RegistroCuenta },
    { label: " Crear rifa", Component: CreateRifa },
  ];

  return (
    <section>
      <Tabs tabs={tabs} />
    </section>
  );
}

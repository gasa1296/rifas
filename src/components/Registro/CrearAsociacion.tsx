import React from "react";
import Tabs from "../Tab";

import RegistroCuenta from "./RegistroCuenta";
import FinalizarRegistro from "./FinalizarRegistro";

export default function CreateAsociacion() {
  const tabs = [
    { label: " Registro una AC", Component: RegistroCuenta },
    { label: " Crear rifa", Component: FinalizarRegistro },
  ];

  return (
    <section>
      <Tabs tabs={tabs} />
    </section>
  );
}

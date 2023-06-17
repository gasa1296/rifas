import React from "react";
import Tabs from "../Tab";
import CreateAccount from "./CreateAccount";
export default function Registro() {
  const tabs = [
    { label: "Crear una cuenta", Component: CreateAccount },
    { label: "Registro una AC", Component: CreateAccount },
    { label: "Crear rifa", Component: CreateAccount },
  ];

  return (
    <section>
      <Tabs tabs={tabs} />
    </section>
  );
}

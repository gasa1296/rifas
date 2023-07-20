import React, { useState } from "react";
import DonacionesDescripcion from "./DonacionesDescripcion";
import DonacionesInformation from "./DonacionesInformation";
import DonacionesValidacion from "./DonacionesValidacion";
import Tabs from "../Tab";

export default function Donacioneshkh() {
  const tabs = [
    { label: "Crear una cuenta", Component: DonacionesDescripcion },
    { label: "Registro una AC", Component: DonacionesInformation },
    { label: "Crear rifa", Component: DonacionesValidacion },
  ];

  return (
    <div className="my-4">
      <Tabs hasHeader={false} tabs={tabs} />
    </div>
  );
}

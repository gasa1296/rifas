import Layout from "@/components/Layout";
import CreateAccount from "@/components/Registro/CreateAccount";
import BoletosRifas from "@/components/Rifas/BoletosRifas";
import MetodosPagoRifa from "@/components/Rifas/MetodosPagoRifa";
import RifaPago from "@/components/Rifas/RifaPago";
import Tabs from "@/components/Tab";
import React from "react";

export default function RifasDetails() {

  const tabs = [
    { label: "Crear una cuenta", Component: BoletosRifas },
    { label: "Registro una AC", Component: MetodosPagoRifa },
    { label: "Crear rifa", Component: RifaPago },
  ];
  return <div>
    <Layout>
      <Tabs tabs={tabs} hasHeader={false} />
    </Layout>
  </div>;
}

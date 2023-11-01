import Layout from "@/components/Layout";
import Registro from "@/components/Registro";
import Image from "next/image";
import React from "react";
import fondoRegistro from "@/assets/img/fondoRegistro.png";
export default function RegistroPage() {
  return (
    <>
      <Image
        src={fondoRegistro}
        alt="fondoRifaDescriptions"
        className="img-fluid position-absolute start-0  fondoRifaDescriptions "
        style={{ top: 150 }}
      />
      <Layout>
        <Registro />
      </Layout>
    </>
  );
}

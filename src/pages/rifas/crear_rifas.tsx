import Layout from "@/components/Layout";
import CrearRifaRegistro from "@/components/Registro/CrearRifaRegistro";

import Image from "next/image";
import React from "react";
import fondoRegistro from "@/assets/img/fondoRegistro.png";

export default function CrearRifasPage() {
  return (
    <div>
      <Image
        src={fondoRegistro}
        alt="fondoRifaDescriptions"
        className="img-fluid position-absolute start-0  fondoRifaDescriptions "
        style={{ top: 150 }}
      />
      <Layout>
        <CrearRifaRegistro />
      </Layout>
    </div>
  );
}

import React from "react";
import Image from "next/image";

import iconos1 from "@/assets/img/iconos_Mesa de trabajo.png";
import iconos2 from "@/assets/img/iconos_InfografiaRifaCausa-02.png";
import iconos3 from "@/assets/img/iconos_InfografiaRifaCausa-03.png";
import iconos4 from "@/assets/img/iconos_InfografiaRifaCausa-04.png";
import iconos5 from "@/assets/img/iconos_InfografiaRifaCausa-05.png";

export default function HomeParticipating() {
  const options = [
    { label: "Conoce los proyectos sociales", icon: iconos1 },
    { label: "Elige el mas cercano a tu corazon", icon: iconos2 },
    {
      label: "Compra un boleto y Participa por un increible premio",
      icon: iconos3,
    },
    { label: "Monitorea el seguimiento de tu aportacion", icon: iconos4 },
    { label: "Espera el resultado de tu aportacion", icon: iconos5 },
  ];

  return (
    <section className="  mx-3 mx-lg-0" style={{ marginTop: "70px" }}>
      <h5 className=" title-participating text-center">Rífate participando</h5>
      <p className=" subtitle-participating text-center m-0 lh-1">
        Ganes o pierdas, el simple hecho de ayudar
      </p>
      <p className=" subtitle-participating  text-center m-0 ">
        ¡te convierte en un ganador!
      </p>

      <div className="d-flex justify-content-between  flex-wrap row mt-5 ">
        {options.map((option, index) => (
          <div
            key={index}
            className=" mx-0 mx-lg-2 mt-5 col-12 col-sm-6 col-lg-2 "
          >
            <Image
              src={option.icon}
              className=" w-50 h-50  mx-auto d-block "
              alt={`icono-${index}`}
            />
            <p className="text-center text-partcipating mt-3 ">
              {option.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react'
import historiasFondo from "@/assets/img/Historias-img.jpg";
import Image from "next/image";

export default function HomeHistory() {
    return (
        <section className="row  mt-5   d-block  d-lg-flex justify-content-center  text-center text-lg-start mx-2 mx-lg-0  ">
            <div className="col-12 col-lg-4  p-0 mx-0 mx-lg-5  ">
                <h4 className=" home-header-subtitle text-center text-lg-start">
                    ¡Historias increibles Personas como tu!
                </h4>

                <p className=" lh-sm  my-3 home-header-parragraph">
                    Vamos juntos a conseguir los recursos que tu Asocioacion Civil
                    necesita para cumplir con sus metas
                </p>
            </div>

            <div className="col-12 col-lg-5    p-0 ">
                <Image src={historiasFondo} alt="fondo" className="w-100 h-100  " />
            </div>
        </section>
    )
}

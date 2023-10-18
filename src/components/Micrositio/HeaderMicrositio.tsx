import React from 'react'
import FondoMicrositio from "@/assets/img/Banner-asociacion-microsite.jpg";
import Image from "next/image";
export default function HeaderMicrositio() {
    return (

        <section className="row  py-5  d-block  d-lg-flex justify-content-center  fondoHeader-micrositio text-center text-lg-start mx-0 mx-lg-0  ">
            <div className="col-12 col-lg-4   p-0 ">
                <Image
                    src={FondoMicrositio}
                    alt="fondo"
                    className="w-100 h-100 d rounded d-block mx-auto "
                />
            </div>


            <div className="col-12 col-lg-5   p-0 mx-0 mx-lg-0   ">
                <h4 className=" text-center ms-5  text-lg-start title-headerMicrositio">
                    ¿Quiénes somos?
                </h4>

                <p className=" lh-sm   ms-5   my-3 parragraph-headerMicrositio">
                    APAC, I.A.P. Asociación Pro Personas con Parálisis Cerebral es una institución de asistencia privada, fundada en 1970, que brinda atención especializada a personas con parálisis cerebral y discapacidades afines.
                </p>
                <h4 className=" text-center  pt-2  ms-5  text-lg-start title-headerMicrositio">
                    ¿Qué hacemos?
                </h4>

                <p className=" lh-sm  ms-5  my-3 parragraph-headerMicrositio">
                    La misión de APAC es mejorar la calidad de vida de las Personas con Parálisis Cerebral. La visión de APAC es ser una institución de vanguardia en la atención a personas con Parálisis Cerebral y otras discapacidades afines en México y América Latina.
                </p>
            </div>


        </section>

    )
}

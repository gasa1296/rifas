import React from "react";
import Image from "next/image";
import logo from "@/assets/img/fondoPremio.svg";
import imagenRifaDesceiption from "@/assets/img/Premio-donar.jpg";

export default function RifasDescription() {
  return (
    <div className="row m-0 d-block  justify-content-lg-center">
      <div className="  mb-5 mt-5  mx-0 mx-lg-5 mb-5 col-12 col-lg-7 ">
        <h3 className="title-RifaDescription my-2  text-center text-lg-start ">
          Acerca de la rifa
        </h3>
        <div className=" border-bottom border-1  my-2 w-100 w-lg-50 text-center text-lg-start "></div>
        <h5 className="subtitle-rifDescription text-center text-lg-start">
          ¿Cómo voy a utilizar el dinero?
        </h5>
        <p className="col-12 col-lg-6 text-rifaDescription opacity-75 text-center text-lg-start">
          Cada centavo recaudado durante esta rifa será destinado a APAC, para
          proporcionar asistencia médica, apoyo emocional y recursos necesarios
          para pacientes con cáncer y sus familias. Queremos asegurarnos de que
          nadie enfrente esta batalla solo y que cada persona afectada reciba el
          amor y el apoyo que necesita. Esperamos contar con tu valiosa
          presencia en nuestra rifa benéfica. Tu participación marcará una
          diferencia significativa en la vida de aquellos que necesitan
          esperanza y fuerza para vencer al cáncer. ¡Juntos, podemos hacer
          posible el cambio!
        </p>
        <div className=" border-bottom border-1  my-2 w-100 w-lg-50   "></div>
        <h5 className="subtitle-rifDescription text-center text-lg-start">
          ¿Cuál es el premio?
        </h5>
        <div className="d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ">
          <div className="col-12  col-lg-4">
            <Image
              src={imagenRifaDesceiption}
              alt="fondoDescription"
              className="w-100 h-75 d-block mx-auto mx-lg-0"
            />
          </div>
          <p className="col-12 col-lg-8 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ">
            ¡El Gran Premio de nuestra rifa benéfica es un espectacular iPhone
            de última generación! El afortunado ganador tendrá en sus manos el
            codiciado iPhone, un dispositivo de vanguardia que combina la
            elegancia del diseño con el rendimiento excepcional. Este iPhone
            cuenta con lo último en tecnología, ofreciendo una experiencia única
            a su usuario. ¡El Gran Premio de nuestra rifa benéfica es un
            espectacular iPhone de última generación! El afortunado ganador
            tendrá en sus manos el codiciado iPhone, un dispositivo de
            vanguardia que combina la elegancia del diseño con el rendimiento
            excepcional. Este iPhone cuenta con lo último en tecnología,
            ofreciendo una experiencia única a su usuario.
          </p>
        </div>
      </div>
    </div>
  );
}

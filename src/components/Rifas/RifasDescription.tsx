import React from "react";
import Image from "next/image";

import fondoDestacada from "@/assets/img/bg-iconos-rifa-destacada.jpg";
import LogoRifas from "@/assets/img/logoRifas.svg";

import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";

export default function RifasDescription() {
  const { raffle } = useSelector(selectRaffleState);

  return (
    <div className="row m-0 d-block  justify-content-lg-center  overflow-hidden   position-relative mt-5 ">
      <div>
        <Image
          src={fondoDestacada}
          alt="fondoRifaDescriptions"
          className="img-fluid position-absolute top-0 end-0 mt-5  fondoRifaDescriptions"
        />
      </div>
      <div className="  mb-5 mt-5  mx-0 mx-lg-5 mb-5 col-12 col-lg-7 position-relative ">
        <h3 className="title-RifaDescription   text-center text-lg-start z-2   ">
          Acerca de la rifa
        </h3>

        <div className=" border-bottom border-1  z-2  my-2 w-100 w-lg-50 text-center text-lg-start "></div>
        <h5 className="subtitle-rifDescription text-center text-lg-start  z-2 ">
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
        <h5 className="subtitle-rifDescription text-center text-lg-start  z-2 ">
          ¿Cuál es el premio?
        </h5>
        <div className="d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ">
          <div className="col-12  col-lg-4  z-2 ">
            <Image
              src={raffle?.prizeData?.image || LogoRifas}
              alt="fondoDescription"
              className="w-100 h-75 d-block mx-auto mx-lg-0"
              width={100}
              height={100}
            />
          </div>
          <p className="col-12 col-lg-8 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ">
            {raffle?.prizeData?.name || ""}
            <br />
            {raffle?.prizeData?.description || ""}
          </p>
          <p className="col-12 col-lg-8 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 "></p>
        </div>
      </div>
    </div>
  );
}

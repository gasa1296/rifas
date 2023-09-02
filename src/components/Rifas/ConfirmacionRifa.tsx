import React from "react";
import fondoRifasActivas from "@/assets/img/gal-microsite-apac2.jpg";
import imagenConfirmacionRifa from "@/assets/img/Premio-donar.jpg";

import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { parseNumber } from "@/utils/ParseNumber";
import { useRouter } from "next/router";

export default function ConfirmacionRifa({ finalRaffle }: any) {
  const router = useRouter();
  return (
    <section className=" shadow  px-3">
      <p className="title-confirmacionRifa mb-0 mt-3">
        ¡Felicidades estas a un pequeño paso!
      </p>
      <p className="subtitle-confirmacionRifa m-0">
        Tu Rifa esta en proceso de aprobación:
      </p>
      <p className="text-confirmacionRifa  col-11">
        Gracias por rifarte con nosotros, tu rifa esta en proceso de aprobación
        y en menos de 24 horas estará lista para que la compartas con todos tus
        conocidos y juntos apoyemos a tu noble causa.
      </p>

      <p className="subtitle-confirmacionRifa ">
        Recibirás un correo electrónico una vez que tu causa haya sido aprobada
        y este en circulación.
      </p>

      <div className="d-flex row  m-0 justify-content-center p-3 rounded-2  ">
        <div
          className="col-3 col-lg-2 shadow  p-0  mt-4 mt-md-0 "
          style={{ maxWidth: "309px", width: "100%", height: "700px" }}
        >
          <Image src={fondoRifasActivas} className="w-100 h-25" alt="" />
          <div className="p-3">
            <h6 className="raffles-title-card  ">
              {finalRaffle?.raffle?.title || ""}
            </h6>
            <p className="card-text raffles-subtitle-card my-1">
              {finalRaffle?.raffle?.description || ""}
            </p>
            <p className=" textInformatinRifa  d-flex m-0 lh-sm">
              La meta es de:{" "}
              {/*  {Number(raffle.ticket_number) * Number(raffle.ticket_price)}  MXN  */}
              <p className="fw-bold m-0">
                {" $"}
                {parseNumber(finalRaffle?.raffle?.price) || ""} MXN.
              </p>
            </p>
            <div className="d-flex textInformatinRifa  m-0 lh-sm">
              <p className=" m-0 ">Costo por boleto: </p>
              <p className="  fw-semibold m-0 ">
                ${parseNumber(finalRaffle?.raffle?.ticket_price) || ""}
              </p>
            </div>
            <div className="d-flex  textInformatinRifa m-0  ">
              <p className="m-0"> Numero de boletos: </p>
              <p className=" fw-semibold m-0 ">
                {finalRaffle?.raffle?.ticket_number || ""}
              </p>
            </div>
            <h6 className=" textInformatinRifa ">
              Fecha de inicio:{" "}
              {new Date(
                finalRaffle?.raffle?.start_date || ""
              ).toLocaleDateString()}
            </h6>
            <h6 className=" textInformatinRifa my-1">
              Fecha de fin:{" "}
              {new Date(
                finalRaffle?.raffle?.end_date || ""
              ).toLocaleDateString()}
            </h6>
            <h6 className="mt-3 informationPremio">¿Cuál es el premio?</h6>
            <p className="text-informativopPremio">
              ¡El Gran Premio de nuestra rifa benéfica es un espectacular iPhone
              de última generación!
            </p>
            <div className=" col-12 col-md-8    ">
              <Image
                src={imagenConfirmacionRifa}
                alt="donation"
                className="w-100 h-auto mx-0 "
              />
            </div>
          </div>
        </div>
        <button onClick={() => router.push("/")} className="btn btn-pink mt-4">
          Crear otra Rifa
        </button>
        <button
          onClick={() => router.push("/")}
          className="btn btn-border-pink mt-3"
        >
          Ir al inicio
        </button>
      </div>
    </section>
  );
}

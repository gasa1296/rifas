import Image from "next/image";
import fondo from "@/assets/img/Rifa-destacada-portada.jpg";
import fondoDestacada from "@/assets/img/bg-iconos-rifa-destacada.jpg";
import BoletosRifas from "./BoletosRifas";
import { BiLoaderAlt } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsWhatsapp, BsFillShareFill, } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
export default function Rifa({ href = "/rifas" }: any) {
  const { raffles, loading } = useSelector(selectRaffleState);

  const router = useRouter();

  if (loading) {
    return <div></div>;
  }
  const getRouter = (): string => {
    if (router.pathname === "/rifas") return `/rifas/${raffle.id}`;
    return "/rifas";
  };
  const raffle = raffles[0];

  if (!raffle) return <div className="my-4"></div>;

  return (
    <div className="  " style={{ marginBottom: "100px" }}>
      <Image src={fondoDestacada} alt='fondodestacada' className=' fondo-destacada' />

      <section className=" mt-5 mb-5 mx-3 mx-lg-5 container-destacada ">
        <h3 className="  raffle-title mt-5 mt-lg-3 ">Rifa Destacada</h3>
        <p className=" raffe-text mt-2 mb-3   ">{raffle.name}</p>
        <div className="d-flex justify-content-center  row ">
          <div className="col-lg-6  position-relative ">
            <Image src={fondo} alt="fondo" className=" w-100 h-100 " />
          </div>
          <div className=" col-md-5 mx-3 mx-md-4  ">
            <p className="fs-3 mt-4 mt-md-0 raffle-container-title">
              Recaudado
            </p>
            <div className="d-flex  mb-0">
              <BiLoaderAlt
                size={46}
                className=" mt-2 me-2 position-relative "
                color={"#00C851"}
              />
              <p className=" raffle-container-textinformation  ">30%</p>
              <p className=" ms-4 raffle-container-textinformation  ">
                $24,409.00
              </p>
            </div>
            <p className="raffle-container-title   fs-3">
              La meta es de {raffle.ticket_number * raffle.ticket_price} MXN
            </p>

            <div className=" border-bottom border-2  my-2 position-relative "></div>

            <div className="d-flex  justify-content-between text-start me-3   ">
              <div className="">
                <h6 className=" raffle-container-textinformation2">
                  Costo por boleto
                </h6>
                <p className=" raffle-container-value  ">
                  ${raffle.ticket_price}
                </p>
              </div>
              <div>
                <h6 className="raffle-container-textinformation2">
                  Numero de boletos
                </h6>
                <p className="raffle-container-value ">
                  {raffle.ticket_number}
                </p>
              </div>
            </div>
            <div className="d-flex ">
              <button
                className="btn btn-pink btn-sm border col-5 button-rifaDestacada  "
                onClick={() => router.push(`/rifas/${raffle.id}`)}
              >
                Comprar boletos
              </button>
              <button
                className="btn btn-border-pink btn-sm col-5  ms-4  button-rifaDestacada "
                onClick={() => router.push(getRouter())}
              >
                Ver detalles
              </button>
            </div>
            <div className=" border-bottom border-2  my-3 position-relative "></div>

            <div className="d-flex  justify-content-between text-start me-3   ">
              <div className="">
                <h6 className=" raffle-container-finish">
                  La rifa termina en:
                </h6>
                <p className=" raffle-container-value  ">59 dias</p>
              </div>
              <div>
                <h6 className="raffle-container-finish">Compartir:</h6>
                <BsFacebook color=" #C3286D" size={25} className="mx-2" />
                <BsTwitter color=" #C3286D" size={25} className="mx-2" />
                <MdEmail color=" #C3286D" size={25} className="mx-2" />
                <BsWhatsapp color=" #C3286D" size={25} className="mx-2" />
                <BsFillShareFill color=" #C3286D" size={25} className="mx-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

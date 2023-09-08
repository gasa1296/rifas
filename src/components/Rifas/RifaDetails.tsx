import Image from "next/image";
import { useState } from "react";
import fondo from "@/assets/img/Rifa-destacada-portada.jpg";

import fondoDetails from "@/assets/img/bg-iconos-rifa-destacada.jpg";
import { BiLoaderAlt } from "react-icons/bi";
import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsFillShareFill,
} from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { getDays } from "@/utils/getDays";
import LogoRifas from "@/assets/img/logoRifas.svg";
export default function RifaDetails() {
  const { raffle, loading } = useSelector(selectRaffleState);

  const router = useRouter();

  if (!raffle || loading) return <div className="my-4"></div>;

  return (
    <section className="mx-3 mx-lg-5 py-3">
      <h3 className="  mt-5 mt-md-3 title-RifaDetails">{raffle.name}</h3>
      <p className=" mt-2 mb-3  subtitle-RifaDetails col-6 ">
        {raffle.description}
      </p>
      <div className="d-flex justify-content-between row mt-4">
        <div className="col-lg-6  position-relative m-0 ">
          <Image
            width={100}
            height={100}
            src={raffle.image || LogoRifas}
            alt="fondo"
            className=" w-100 h-100 "
          />
        </div>
        <div className=" col-lg-6  ">
          <p className="fs-3 mt-4 mt-md-0 raffle-container-title">Recaudado</p>
          <div className="d-lg-flex d-block mb-0">
            <BiLoaderAlt
              size={46}
              className=" mt-2 me-2 position-relative "
              color={"#00C851"}
            />
            <p className=" raffle-container-textinformation  ">30%</p>
            <p className=" ms-0 ms-lg-4 raffle-container-textinformation  ">
              $24,409.00
            </p>
          </div>
          <p className="raffle-container-title   fs-3">
            La meta es de{" "}
            {Number(raffle.ticket_number) * Number(raffle.ticket_price)} MXN
          </p>

          <div className=" border-bottom border-2  my-2 position-relative "></div>

          <div className="d-flex  justify-content-between text-start me-3 pt-3  ">
            <div className="">
              <h6 className=" raffle-container-textinformation2">
                Costo por boleto
              </h6>
              <p className=" raffle-container-value fw-semibold  ">
                ${raffle.ticket_price}
              </p>
            </div>
            <div>
              <h6 className="raffle-container-textinformation2">
                Numero de boletos
              </h6>
              <p className="raffle-container-value fw-semibold  ">
                {raffle.ticket_number}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start ">
            <button
              className="btn btn-pink btn-sm border col-6 button-rifaDestacada  "
              onClick={() => router.push(`/rifas/${raffle.id}`)}
            >
              Comprar boletos
            </button>
          </div>
          <div className=" border-bottom border-2  my-3 position-relative "></div>

          <div className="d-flex  justify-content-between text-start me-3   ">
            <div className="">
              <h6 className=" raffle-container-finish">La rifa termina en:</h6>
              <p className=" raffle-container-value lh-1  m-0 fw-bold">
                <LuCalendarDays color="#5C5C5C" className="mb-1" />{" "}
                {getDays(raffle.end_date)} dias
              </p>
            </div>
            <div>
              <h6 className="raffle-container-finish">Compartir:</h6>

              <BsFacebook
                color=" #C3286D"
                size={25}
                className="mx- position-relative 2"
              />
              <BsTwitter
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
              <MdEmail
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
              <BsWhatsapp
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
              <BsFillShareFill
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

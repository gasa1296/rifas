import React from "react";
import Header from "@/assets/img/Header-bg.jpg";
import historiasFondo from "@/assets/img/Historias-img.jpg";
import rifate from "@/assets/img/Rífate_con_amor.png";
import imagenHeader from "@/assets/img/Portada-Header-nosotros.png";
import { MdAccessTime } from "react-icons/md";

import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import HomeHistory from "./HomeHistory";

export default function HomeHeader() {
  const openWhatsApp = () => {
    let message = encodeURIComponent(
      "¡Hola! Me gustaría hacer una consulta sobre Rifa con causa."
    );
    let phoneNumber = "+584121243793";
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <section className="mt-4">
      <section className="text-center m-0 position-relative  ">
        <section className=" m-0  ">
          <div className=" justify-content-center d-lg-flex  fondo-nosotros  p-4 row m-0 ">

            <div className=" col-12 col-lg-7 pt-2 ">
              <h5 className="title-home-header  m-0 lh-sm">¡Rífate!</h5>
              <p className="subtitle-home-header p-0 m-0">  Súmate con amor </p>
              <p className="text-home-header m-0 lh-1 mt-2">
                La primer plataforma de rifas en América Latina dedicada en apoyar causas sociales
              </p>

              <p className="recent-raffles">Rifas recientes de la semana</p>

              <div className="d-block d-md-flex flex-wrap  pb-5 ">
                <div className=" p-3 shadow  col-12 col-md-5 mx-0 mx-lg-3 mt-3 mt-md-2 ">
                  <h6 className="raffles-title-card ">¡Hola! ¡Soy Emiliano, ayúdame a vencer el cáncer!</h6>
                  <p className="card-text raffles-subtitle-card lh-sm text-start ">
                    por Fundación Castro Limón A.C.
                  </p>

                  <p className="card-text  raffles-subtitle-card  p-0 text-start  ">
                    <MdAccessTime size={20} className="mb-1  opacity-75 " />
                    20% 8,048.00 recaudado
                  </p>
                  <button className="btn fs-6 btn-pink w-75 ">
                    Comprar boleto
                  </button>
                </div>
                <div className=" p-3 shadow  col-12 col-md-5 mx-0 mx-lg-3 mt-3 mt-md-2 ">
                  <h6 className="raffles-title-card ">¡Hola! ¡Soy Emiliano, ayúdame a vencer el cáncer!</h6>
                  <p className="card-text raffles-subtitle-card lh-sm text-start ">
                    por Fundación Castro Limón A.C.
                  </p>

                  <p className="card-text  raffles-subtitle-card  p-0 text-start  ">
                    <MdAccessTime size={20} className="mb-1  opacity-75 " />
                    20% 8,048.00 recaudado
                  </p>
                  <button className="btn fs-6 btn-pink w-75 ">
                    Comprar boleto
                  </button>
                </div>


              </div>



            </div>
            <div className=" col-12 col-lg-5  ">
              <Image
                src={imagenHeader}
                className=" w-100 h-100 mx-auto d-block "
                alt="..."
              />
            </div>


          </div>

          <div onClick={openWhatsApp} className="icon-whatsapp ">
            <BsWhatsapp color=" white" size={30} className="header-icono " />
          </div>
        </section>

      </section>

      <HomeHistory />
    </section>
  );
}

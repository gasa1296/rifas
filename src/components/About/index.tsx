import React from "react";
import Image from "next/image";
import imagenNosotros from "@/assets/img/Portada-Header-nosotros.png";
import vision from "@/assets/img/Vision.jpg";
import mision from "@/assets/img/Mision.jpg";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import HomeTestimonios from "../Home/HomeTestimonios";
import HomeRifate from "../Home/HomeRifate";
import { useRouter } from "next/router";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";

export default function About() {
  const router = useRouter();

  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}`;
  const title = "";

  return (
    <section className=" m-0  ">
      <div className=" justify-content-center d-lg-flex  fondo-nosotros  p-3 row m-0 ">
        <div className=" col-12 col-lg-6 pt-2 ">
          <Image
            src={imagenNosotros}
            className=" w-100 h-100 mx-auto d-block "
            alt="fonfo-nosotros"
          />
        </div>
        <div className=" col-12 col-lg-6 pt-2 ">
          <h5 className="title-nosotros  m-0">¡Rífate!</h5>
          <p className="subtitle-nosotros m-0"> Y sumate con amor </p>
          <p className="text-nosotros m-0 lh-1 mt-2">
            ¡Ayudanos para hacer realidad{" "}
          </p>
          <p className="text-nosotros m-0 ">
            {" "}
            las historias con las que te puedes rifar !
          </p>
          <p className="information-nosotros mt-2 col-12 col-lg-8">
            Rifa con causa es una plataforma que te ayuda a recaudar fondos para
            causas sociales de Asociaciones Civiles y otras organizaciones sin
            fines de lucro, a traves de un innovador modelo para administrar
            eventos (rifas) de bienes,productos o servicios{" "}
          </p>
          <button
            onClick={() => router.push("/rifas/crear_rifas")}
            className="btn btn-pink btn-sm px-5 fs-6 mt-2 "
            type="submit"
          >
            Comenzar a rifarme
          </button>
          <div className=" border-bottom border-2  w-75 my-3  "></div>
          <div>
            <h6 className="raffle-container-finish">Compartir:</h6>
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <BsFacebook
                color=" #C3286D"
                size={25}
                className="mx- position-relative 2"
              />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <BsTwitter
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
            </TwitterShareButton>

            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="Demo__some-network__share-button"
            >
              <MdEmail
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
            </EmailShareButton>

            <WhatsappShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <BsWhatsapp
                color=" #C3286D"
                size={25}
                className="mx-2  position-relative "
              />
            </WhatsappShareButton>
          </div>
        </div>
      </div>

      <section className="d-lg-flex d-block justify-content-center mx-4 mx-lg-0  mt-5">
        <div className="col-12 col-lg-5  mx-0 mx-lg-4">
          <Image src={vision} className=" w-100 h-50 p-0 " alt="vision" />
          <h6 className="  title-vision-mision my-3 text-lg-start  text-center">
            Visión
          </h6>
          <p className="  text-vision-mision text-lg-start  text-center">
            {" "}
            Creemos que hemos sido afortunados dentro de la rifa de la vida.
            Queremos aportar de regreso a la sociedad, a los menos favorecidos,
            a nuestro prójimo. Queremos ser activos agentes de cambio. Y lo
            queremos hacer a través de lo que conocemos: Tecnología e
            innovación. Y lo queremos hacer simple, para todos.
          </p>
          <button
            onClick={() => router.push("/rifas/crear_rifas")}
            className="btn btn-pink btn-sm fs-6 mt-2 col-12 col-lg-7  "
            type="submit"
          >
            Comenzar a rifarme
          </button>
        </div>
        <div className="col-12 col-lg-5 mt-5 mt-lg-0 mx-0 mx-lg-4 ">
          <Image src={mision} className=" w-100 h-50 p-0  " alt="mision" />
          <h6 className="title-vision-mision my-3 text-lg-start  text-center">
            Misión
          </h6>
          <p className="text-vision-mision text-lg-start  text-center">
            Establecernos como la primera y principal plataforma electrónica de
            generación de eventos (sorteos) privados para beneficencia en el
            mercado mexicano y latinoamericano. Ser la mejor opción para
            nuestros usuarios en base a resultados, simplicidad, transparencia y
            satisfacción de clientes.
          </p>
          <button
            className="btn btn-pink btn-sm col-12 col-lg-7  fs-6 mt-2 "
            type="submit"
          >
            Comenzar a rifarme
          </button>
        </div>
      </section>
      <HomeTestimonios />
      <HomeRifate />
    </section>
  );
}

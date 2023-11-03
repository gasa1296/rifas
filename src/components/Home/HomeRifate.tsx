import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fondo from "@/assets/img/emprendedor2018.jpg";
import fondo1 from "@/assets/img/emprendedor-1.jpg";
import fondo2 from "@/assets/img/emprendedor-2.jpg";
import fondo3 from "@/assets/img/emprendedor-3.jpg";
import fondo4 from "@/assets/img/emprendedor-4.jpg";

export default function HomeRifate() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className=" mt-5 mx-4 mx-lg-0" style={{ marginBottom: "120px" }}>
      <h5 className=" home-title-rifate text-center">¡Rífate también!</h5>
      <p className=" my-2 home-text-rifate  text-center">
        ¡Te estamos esperando,al Igual que ellos nos apoyaran!
      </p>
      <Slider
        {...settings}
        className="d-flex justify-content-between mx-0 mx-lg-0 "
      >
        <div className="w-100">
          <Image src={fondo} className="w-50 h-25   mx-auto" alt="..." />{" "}
        </div>
        <div className="w-100">
          <Image src={fondo1} className="w-50 h-25   mx-auto" alt="..." />{" "}
        </div>
        <div className="w-100">
          <Image src={fondo2} className="w-50 h-25   mx-auto" alt="..." />{" "}
        </div>
        <div className="w-100">
          <Image src={fondo3} className="w-50 h-25   mx-auto" alt="..." />{" "}
        </div>
        <div className="w-100">
          <Image src={fondo4} className="w-50 h-25   mx-auto" alt="..." />{" "}
        </div>
      </Slider>
    </section>
  );
}

import React from "react";
import fondo from "@/assets/img/Testimonial-img.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimnialesFondo from "@/assets/img/bg-testomoniales.png";
import Image from "next/image";
import { useRaffleStore } from "@/store/zustand/RaffleStore";
import LogoRifas from "@/assets/img/logoRifas.svg";

export default function HomeTestimonios() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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

  const testimonies = useRaffleStore((state) => state.testimonies);

  return (
    <div className="pt-5 ">
      <section
        className="row m-0 mx-0 mx-lg-5  position-relative  rounded pb-5"
        style={{ overflow: "hidden" }}
      >
        <Image
          src={testimnialesFondo}
          alt="fondoTestimoniales"
          className="img-fluid position-absolute top-0 start-0 w-100 h-100 rounded"
        />
        <h5 className=" home-title-testimonios pt-5 ps-5">Testimoniales</h5>
        <Slider {...settings}>
          {testimonies?.map((testimonio, index) => (
            <div key={index} className="py-3 p-5">
              <p className="home-subtitle-testimonios ">
                {testimonio.raffle.short_description}
              </p>

              <div className=" d-flex justify-content-between row ">
                <div className=" col-12 col-lg-5 mt-4 me-5  text-start ">
                  <p className="home-title-container-testimonios">
                    {testimonio.raffle.name}
                  </p>

                  <p className="home-subtitle-container-testimonios">
                    Mas de $ {testimonio.raffle.raised} pesos recaudados
                  </p>
                  <p className="home-information-container-testimonios">
                    {testimonio.raffle.description}
                  </p>
                  <p className="home-subtitle-container-testimonios">
                    {testimonio.association.association_name}
                  </p>
                </div>
                <div className="col-10 col-lg-5 mt-4  ">
                  <div className="">
                    <Image
                      width={100}
                      height={100}
                      src={testimonio.raffle.image || LogoRifas}
                      alt="fondo"
                      className="w-100 h-75 "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/*   <div className="d-flex mt-5 justify-content-center ">
          {` `}
          <div className={`circle-homeTestimonios border mx-2`}></div>
          <div className="circle-homeTestimonios bg-light  border mx-2"></div>
          <div className="circle-homeTestimonios  bg-light  border mx-2"></div>
          <div className="circle-homeTestimonios  bg-light  border mx-2"></div>
        </div> */}
      </section>
    </div>
  );
}

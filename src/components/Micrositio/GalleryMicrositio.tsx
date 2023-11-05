import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import fondos1 from "@/assets/img/gal-microsite-apac1.jpg";
import fondos2 from "@/assets/img/gal-microsite-apac2.jpg";
import fondos3 from "@/assets/img/gal-microsite-apac3.jpg";
import LogoRifas from "@/assets/img/logoRifas.svg";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import { isHttp } from "../FormGenerator/helper";

export default function GalleryMicrositio() {
  const site = useAsociatonsStoreDashboard((state) => state.site);
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section className=" mt-5 mx-4 mx-lg-3" style={{ marginBottom: "90px" }}>
      <p className=" raffles-title lh-1 mb-4 ">Nuestra galeria de rifados</p>

      <Slider {...settings} className="d-flex mx-0 mx-lg-0 pb-3">
        {!site && (
          <Image
            src={fondos1}
            className="w-100 h-25 px-2  "
            alt="fondos-micrositio"
          />
        )}
        {site?.images.map((image: any, index: number) => (
          <Image
            key={index}
            width={50}
            height={50}
            src={
              isHttp(image?.file)
                ? image?.file
                : `${process.env.NEXT_PUBLIC_BASE_URL}${image?.file}`
            }
            className="w-100 h-100 px-2  "
            style={{ width: "500px", height: "500px" }}
            alt="fondos-micrositio"
          />
        ))}
      </Slider>
    </section>
  );
}

/* <Image
              width={50}
              height={50}
              src={LogoRifas}
              className="w-100 h-100 px-2  "
              alt="fondos-micrositio"
            /> */

/*   */

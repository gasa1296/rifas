import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import fondos1 from "@/assets/img/gal-microsite-apac1.jpg";
import fondos2 from "@/assets/img/gal-microsite-apac2.jpg";
import fondos3 from "@/assets/img/gal-microsite-apac3.jpg";


export default function GalleryMicrositio() {
    const slider = React.useRef<any>(null);
    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
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

            <Slider
                {...settings}
                className="d-flex mx-0 mx-lg-0 pb-3"
            >
                <Image src={fondos1} className="w-100 h-25 px-2  " alt="fondos-micrositio" />
                <Image src={fondos2} className="w-10 h-25 px-2 " alt="fondos-micrositio" />
                <Image src={fondos3} className="w-100 h-25 px-2" alt="fondos-micrositio" />
                <Image src={fondos1} className="w-100 h-25 px-2" alt="fondos-micrositio" />
                <Image src={fondos2} className="w-10 h-25 px-2 " alt="fondos-micrositio" />
                <Image src={fondos3} className="w-100 h-25 px-2" alt="fondos-micrositio" />
                <Image src={fondos1} className="w-100 h-25 px-2  " alt="fondos-micrositio" />

            </Slider>
        </section>
    )
}

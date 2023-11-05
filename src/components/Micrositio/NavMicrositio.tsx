import React from "react";
import Image from "next/image";
import LogoRifas from "@/assets/img/logoRifas.svg";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsTiktok,
  BsYoutube,
  BsVimeo,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";

export default function NavMicrositio() {
  const site = useAsociatonsStoreDashboard((state) => state.site);

  return (
    <section className="p-2 d-flex justify-content-between align-items-center">
      <div className=" d-flex justify-content-start align-items-center   ">
        <Image
          width={50}
          height={50}
          src={site?.image || LogoRifas}
          alt="fondo"
          className=" ms-4 logo-micrositio"
        />
        <p
          style={{ color: "#784B5F" }}
          className="text-center fs-3 mt-2 fw-medium ms-3 text-capitalize "
        >
          {site?.association_name}
        </p>
      </div>
      <div>
        <a href={site?.facebook} className={`${!site?.facebook && "d-none"}`}>
          <BsFacebook
            color=" #C3286D"
            size={25}
            className="mx- position-relative 2"
          />
        </a>
        <a className={`${!site?.twitter && "d-none"}`} href={site?.twitter}>
          <BsTwitter
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>

        <a className={`${!site?.instagram && "d-none"}`} href={site?.instagram}>
          <BsInstagram
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>

        <a className={`${!site?.tiktok && "d-none"}`} href={site?.tiktok}>
          <BsTiktok
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>

        <a className={`${!site?.youtube && "d-none"}`} href={site?.youtube}>
          <BsYoutube
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>

        <a className={`${!site?.vimeo && "d-none"}`} href={site?.vimeo}>
          <BsVimeo
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>

        <a className={`${!site?.linkedin && "d-none"}`} href={site?.linkedin}>
          <BsLinkedin
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>

        <a className={`${!site?.pinterest && "d-none"}`} href={site?.pinterest}>
          <BsPinterest
            color=" #C3286D"
            size={25}
            className="mx-2  position-relative "
          />
        </a>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import LogoRifas from "@/assets/img/logoRifas.svg";
export default function HeaderMicrositio() {
  const site = useAsociatonsStoreDashboard((state) => state.site);
  return (
    <section className="row  py-5  d-block  d-lg-flex justify-content-center  fondoHeader-micrositio text-center text-lg-start mx-0 mx-lg-0  ">
      <div className="col-12 col-lg-4   p-0 ">
        <Image
          src={site?.main_image || LogoRifas}
          width={50}
          height={50}
          alt="fondo"
          className="w-100 h-100 d rounded d-block mx-auto "
          style={{ maxWidth: "585px", maxHeight: "585px" }}
        />
      </div>

      <div className="col-12 col-lg-7 mt-3 mt-lg-0  p-0 mx-0 mx-lg-0   ">
        <h4 className=" text-center ms-5  text-lg-start title-headerMicrositio">
          ¿Quiénes somos?
        </h4>

        <p className=" lh-sm   ms-5   my-3 parragraph-headerMicrositio">
          {site?.who}
        </p>
        <h4 className=" text-center  pt-2 mt-3 mt-lg-0   ms-5  text-lg-start title-headerMicrositio">
          ¿Qué hacemos?
        </h4>

        <p className=" lh-sm  ms-5  my-3 parragraph-headerMicrositio">
          {site?.what}
        </p>
      </div>
    </section>
  );
}

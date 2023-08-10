import React, { useEffect } from "react";
import fondo from "@/assets/img/fondo.jpg";
import imagen from "@/assets/img/imagen.svg";
import segundaImagen from "@/assets/img/SegundaImagen.svg";
import Image from "next/image";
import Rifa from "../Rifas/Rifa";
import RifasActivas from "../Rifas/RifasActivas";
import HomeHeader from "./HomeHeader";
import HomeCreateRifa from "./HomeCreateRifa";
import HomeTestimonios from "./HomeTestimonios";
import HomeRifate from "./HomeRifate";
import { useDispatch } from "react-redux";
import { Raffles } from "@/store/slices/raffles";
import HomeParticipating from "./HomeParticipating";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Raffles({}) as any);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="">
      <HomeHeader />
      <Rifa />
      <RifasActivas />
      <HomeCreateRifa />
      <HomeParticipating />
      <HomeTestimonios />
      <HomeRifate />

    </div>
  );
}

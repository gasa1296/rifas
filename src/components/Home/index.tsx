import React, { useEffect } from "react";

import Rifa from "../Rifas/Rifa";
import RifasActivas from "../Rifas/RifasActivas";
import HomeHeader from "./HomeHeader";
import HomeCreateRifa from "./HomeCreateRifa";
import HomeTestimonios from "./HomeTestimonios";
import HomeRifate from "./HomeRifate";

import HomeParticipating from "./HomeParticipating";
export default function Home() {
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

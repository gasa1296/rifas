import React from "react";

import RifasActivas from "./RifasActivas";
import RifasDescription from "./RifasDescription";

import RifaDetails from "./RifaDetails";

export default function Rifas() {
  return (
    <div className="">
      <div className="background-rifa">
        <RifaDetails />
        <RifasDescription />
      </div>
      <RifasActivas />
    </div>
  );
}

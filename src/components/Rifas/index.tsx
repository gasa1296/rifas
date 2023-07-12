import React from "react";
import Rifa from "./Rifa";
import RifasActivas from "./RifasActivas";
import RifasDescription from "./RifasDescription";

export default function Rifas() {
  return (
    <div>
      <Rifa />
      <RifasDescription />
      <RifasActivas />
    </div>
  );
}

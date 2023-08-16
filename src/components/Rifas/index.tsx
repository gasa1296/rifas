import React, { useEffect } from "react";
import Rifa from "./Rifa";
import RifasActivas from "./RifasActivas";
import RifasDescription from "./RifasDescription";
import { Raffles } from "@/store/slices/raffles";
import { useDispatch } from "react-redux";
import AllRifas from "./AllRifas";

export default function Rifas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Raffles({}) as any);

    //eslint-disable-next-line
  }, []);

  return (
    <div className="background-rifa">
      <Rifa />
      <RifasDescription />
      <RifasActivas />
    </div>
  );
}

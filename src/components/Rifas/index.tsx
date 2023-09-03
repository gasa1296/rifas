import React, { useEffect } from "react";
import Rifa from "./Rifa";
import RifasActivas from "./RifasActivas";
import RifasDescription from "./RifasDescription";
import { Raffles } from "@/store/slices/raffles";
import { useDispatch } from "react-redux";
import AllRifas from "./AllRifas";
import RifaDetails from "./RifaDetails";

export default function Rifas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Raffles({}) as any);

    //eslint-disable-next-line
  }, []);

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

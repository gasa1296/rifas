import React, { useEffect } from "react";
import Rifa from "./Rifa";
import RifasActivas from "./RifasActivas";
import RifasDescription from "./RifasDescription";
import { Raffles } from "@/store/slices/raffles";
import { useDispatch } from "react-redux";

export default function Rifas() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Raffles({}) as any);
  }, []);

  return (
    <div>
      <Rifa />
      <RifasDescription />
      <RifasActivas />
    </div>
  );
}

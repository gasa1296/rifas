import { selectRaffleState, setReserveTime } from "@/store/slices/raffles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function useTimer() {
  const dispatch = useDispatch();
  const { reserveTime } = useSelector(selectRaffleState);

  useEffect(() => {
    if (reserveTime > 0) {
      // Actualiza el temporizador cada segundo
      const timer = setTimeout(
        () => dispatch(setReserveTime(reserveTime - 1)),
        1000
      );
      // Limpia el temporizador si el componente es eliminado
      return () => clearTimeout(timer);
    }
  }, [reserveTime]);

  // Convierte el tiempo a formato MM:SS
  const minutes = Math.floor(reserveTime / 60);
  const seconds = reserveTime % 60;
  const displayTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  return { displayTime };
}

export default useTimer;

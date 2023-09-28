import useTimer from "@/hooks/useTimer";
import useTotalValue from "@/hooks/useTotalValue";
import { parseNumber } from "@/utils/ParseNumber";
import React from "react";

export default function MethodReview() {
  const { coupon, totalPrice, totalPay, selectedWallet, walletAccount } =
    useTotalValue();

  const { displayTime } = useTimer();

  return (
    <section>
      <p className="boletos m-0 d-flex">
        Boletos reservados por:{" "}
        <p className="time-boletos">{displayTime} min</p>
      </p>
      <div className="d-flex justify-content-between ">
        <p className="subtitle-boletosaRifa m-0">Total</p>
        <p className="m-0 value-metodosPago">$ {parseNumber(totalPrice)}</p>
      </div>
      {selectedWallet && (
        <div className="d-flex justify-content-between ">
          <p className="subtitle-boletosaRifa m-0">Saldo a favor</p>
          <p className="m-0 value-metodosPago">
            $ {parseNumber(walletAccount)}
          </p>
        </div>
      )}
      {coupon && (
        <div className="d-flex justify-content-between ">
          <p className="subtitle-boletosaRifa m-0">Cupon activo</p>
          <p className="m-0 value-metodosPago">
            - {coupon.value} {coupon.type === 1 ? "%" : "$"}
          </p>
        </div>
      )}

      <div className="d-flex justify-content-between ">
        <p className="subtitle-boletosaRifa m-0">Total a pagar</p>
        <p className="m-0 value-metodosPago">$ {parseNumber(totalPay)}</p>
      </div>
    </section>
  );
}

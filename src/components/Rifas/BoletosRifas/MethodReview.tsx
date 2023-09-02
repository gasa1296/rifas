import { selectAuthState } from "@/store/slices/auth";
import { selectRaffleState } from "@/store/slices/raffles";
import { parseNumber } from "@/utils/ParseNumber";
import React from "react";
import { useSelector } from "react-redux";

export default function MethodReview() {
  const { raffle, selectedTickets, selectedWallet } =
    useSelector(selectRaffleState);
  const { profile } = useSelector(selectAuthState);

  const walletAccount = selectedWallet ? Number(profile?.wallet.value) : 0;

  const totalPrice =
    selectedTickets.length * (Number(raffle?.ticket_price) || 0);

  const totalPay = walletAccount > totalPrice ? 0 : totalPrice - walletAccount;
  return (
    <section>
      <p className="boletos m-0 d-flex">
        Boletos reservados por: <p className="time-boletos">10:00min</p>
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

      <div className="d-flex justify-content-between ">
        <p className="subtitle-boletosaRifa m-0">Total a pagar</p>
        <p className="m-0 value-metodosPago">$ {parseNumber(totalPay)}</p>
      </div>
    </section>
  );
}

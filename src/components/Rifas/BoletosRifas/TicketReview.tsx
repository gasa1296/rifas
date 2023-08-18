import { selectRaffleState } from "@/store/slices/raffles";
import { parseNumber } from "@/utils/ParseNumber";
import React from "react";
import { useSelector } from "react-redux";

export default function TicketReview() {
  const { raffle, selectedTickets } = useSelector(selectRaffleState);

  const totalPrice = selectedTickets.length * (raffle?.ticket_price || 0);
  return (
    <>
      <div className=" border-bottom my-2 w-100"></div>
      <div className="row  mt-3 m-2  ">
        <div className="col-6">
          <p className=" subtitle-boletosaRifa ">Total a pagar</p>
          <p className="value-boletosRifas ">$ {parseNumber(totalPrice)}</p>
        </div>
        <div className="col-6">
          <p className="subtitle-boletosaRifa">
            Boletos selecionados: {selectedTickets.length}
          </p>
          <ul className="flex-wrap d-flex  rounded list-unstyled   ">
            {selectedTickets.map((ticketNumber) => (
              <li
                className="raffle-container raffle-container-success"
                style={{ cursor: "pointer" }}
                key={ticketNumber}
              >
                <div className="lh-sm  border-1 border rounded-1 text-center raffle-box raffle-box-success ">
                  {ticketNumber}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

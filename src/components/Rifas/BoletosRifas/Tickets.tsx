import { selectRaffleState, setSelectedTicket } from "@/store/slices/raffles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Tickets() {
  const dispatch = useDispatch();
  const { raffle, selectedTickets } = useSelector(selectRaffleState);
  // Generate an array of ticket numbers
  const ticketNumbers = Array.from(
    { length: raffle?.ticket_number ?? 0 },
    (_, i) => i + 1
  );

  const handleSelectTicket = (ticketNumber: number) => {
    const findTicket = selectedTickets.find(
      (ticket) => ticket === ticketNumber
    );
    if (findTicket) {
      return dispatch(
        setSelectedTicket(
          selectedTickets.filter((ticket) => ticket !== ticketNumber)
        ) as any
      );
    }

    dispatch(setSelectedTicket([...selectedTickets, ticketNumber]) as any);
  };

  return (
    <ul
      className="flex-wrap d-flex justify-content-center rounded list-unstyled   "
      style={{ height: "400px", overflowY: "scroll" }}
    >
      {ticketNumbers.map((ticketNumber) => {
        const findTicket = selectedTickets.find(
          (ticket) => ticket === ticketNumber
        );
        return (
          <li
            onClick={() => handleSelectTicket(ticketNumber)}
            className={`raffle-container ${
              findTicket ? "raffle-container-success" : ""
            }`}
            style={{ cursor: "pointer" }}
            key={ticketNumber}
          >
            <div
              className={`lh-sm  border-1 border rounded-1 text-center raffle-box ${
                findTicket ? "raffle-box-success" : ""
              } `}
            >
              {ticketNumber}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

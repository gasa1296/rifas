import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import BuyTickes from "../BuyTickes";
import Tickets from "./Tickets";
import TicketReview from "./TicketReview";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";

export default function BoletosRifas({ nextStep }: any) {
  const handleSubmit = () => {
    nextStep();
  };

  return (
    <div className="d-block justify-content-center d-lg-flex  mt-5 mx-2 mx-lg-0  ">
      <div className=" col-12 col-lg-6  ">
        <BuyTickes />
      </div>

      <div className=" col-lg-6 col-12   ms-0 mx-lg-3">
        <p className="donaciones-title mt-3 mt-md-0">
          1 / 3 Selecciona tus boletos
        </p>
        <p className="subtitle-boletosaRifa ">
          Da clic para seleccionar tus boletos
        </p>
        <Tickets />
        <TicketReview />

        <div className="d-flex justify-content-end mt-4 ">
          <button
            className="btn btn-pink btn-sm border rounded-1 px-3 "
            onClick={handleSubmit}
          >
            {" "}
            Continuar <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

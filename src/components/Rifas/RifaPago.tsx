import React from "react";
import logoPaypal from "@/assets/img/paypal.svg";
import logoMercadoPago from "@/assets/img/mercadoPago.svg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";
import BuyTickes from "./BuyTickes";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { selectAuthState } from "@/store/slices/auth";
import { parseNumber } from "@/utils/ParseNumber";
import Paypal from "../PaymentMethods/Paypal";
export default function RifaPago({ nextStep, backStep }: any) {
  const [success, setSuccess] = React.useState(false);
  const { raffle, selectedPaymentMethod, selectedTickets, selectedWallet } =
    useSelector(selectRaffleState);
  const { profile } = useSelector(selectAuthState);

  const Icon =
    selectedPaymentMethod === "paypal" ? logoPaypal : logoMercadoPago;

  const walletAccount = selectedWallet ? Number(profile?.wallet.value) : 0;

  const totalPrice =
    selectedTickets.length * (Number(raffle?.ticket_price) || 0);

  const totalPay = walletAccount > totalPrice ? 0 : totalPrice - walletAccount;

  return (
    <div className="d-block justify-content-center d-lg-flex  mt-5 mx-3 mx-lg-0   ">
      <div className=" col-12 col-lg-6  ">
        <BuyTickes />
      </div>
      <div className="col-lg-6 col-12 pt-5 pt-lg-0  ms-0 mx-lg-3  ">
        <p className=" donaciones-title">3 / 3 Efectua el pago</p>
        <p className="subtitle-boletosaRifa m-0">Confirma y paga tus boletos</p>
        <div className="d-flex text-secondary  mt-3 ">
          <p className="m-0 ">Paga con</p>
          <Image src={Icon} alt="" className="ms-2" />
        </div>
        <div className=" border-bottom my-2 w-100"></div>

        <div className="row  mt-3 m-2  ">
          <div className="col-6">
            <p className=" subtitle-boletosaRifa ">Total a pagar</p>
            <p className="value-boletosRifas ">$ {parseNumber(totalPay)}</p>
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
        <p className="boletos"> Boletos reservados por: 10:00 min</p>

        <div className="d-flex justify-content-between mt-4   ">
          <button
            className="btn btn-border-pink btn-sm px-2 rounded-2 fw-fw-semibold  "
            onClick={() => backStep()}
          >
            {" "}
            <AiOutlineArrowLeft /> Regresar
          </button>
          <button
            className="btn btn-pink btn-sm px-2 rounded-2 "
            onClick={() => nextStep()}
          >
            {" "}
            Proceder al pago <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

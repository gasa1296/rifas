import React from "react";
import BuyTickes from "./BuyTickes";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsFillShareFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiHeartCircle } from "react-icons/bi";
import Paypal from "../PaymentMethods/Paypal";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { selectAuthState } from "@/store/slices/auth";
import { MercadoPagoButton } from "../PaymentMethods/Mercadopago";
import { parseNumber } from "@/utils/ParseNumber";

export default function PaySuccessful({ initialStep }: any) {
  const router = useRouter();

  const [success, setSuccess] = React.useState(false);
  const { raffle, selectedPaymentMethod, selectedTickets, selectedWallet } =
    useSelector(selectRaffleState);
  const { profile } = useSelector(selectAuthState);

  const walletAccount = selectedWallet ? Number(profile?.wallet.value) : 0;

  const totalPrice =
    selectedTickets.length * (Number(raffle?.ticket_price) || 0);

  const totalPay = walletAccount > totalPrice ? 0 : totalPrice - walletAccount;

  if (!success && selectedPaymentMethod === "paypal")
    return (
      <div className="  d-block justify-content-center d-lg-flex mt-5 mx-3 mx-lg-0 ">
        <div className=" col-12 col-lg-6   ">
          <BuyTickes />
        </div>
        <div className="col-lg-6 col-12 mt-3 mt-md-0 text-center px-5 mx-auto">
          <Paypal setSuccess={setSuccess} totalPay={totalPay} />
        </div>
      </div>
    );
  if (!success && selectedPaymentMethod === "mercadopago")
    return (
      <div className="  d-block justify-content-center d-lg-flex mt-5 mx-3 mx-lg-0 ">
        <div className=" col-12 col-lg-6   ">
          <BuyTickes />
        </div>
        <div className="col-lg-6 col-12 mt-3 mt-md-0 text-center px-5 mx-auto">
          <MercadoPagoButton setSuccess={setSuccess} totalPay={totalPay} />
        </div>
      </div>
    );

  return (
    <div className="  d-block justify-content-center d-lg-flex mt-5 mx-3 mx-lg-0 ">
      <div className=" col-12 col-lg-6   ">
        <BuyTickes />
      </div>
      <div className="col-lg-6 col-12 mt-3 mt-md-0 text-center mx-auto ">
        <BiHeartCircle size={60} color="#C3286D" />
        <h3 className="my-2 tank-paySucessfull"> Gracias </h3>
        <p className=" m-0  text-paySucessful ">
          Estamos muy contentos de conseguir tu valioso amor
        </p>
        <p className=" mb-3   text-paySucessful"> para gente hermosa</p>
        <p className=" m-0  d-flex justify-content-center  text-paySucessful">
          {" "}
          Número de boletos adquiridos:{" "}
          <p className="value-paySucessful m-0">{selectedTickets.length}</p>
        </p>
        <p className=" m-0  d-flex justify-content-center  text-paySucessful m-0 ">
          {" "}
          Total pagado:{" "}
          <p className="value-paySucessful m-0">
            {" "}
            $ {parseNumber(totalPay)} MXN
          </p>
        </p>
        {/* <p className=" m-0 d-flex justify-content-center  text-paySucessful">
          {" "}
          Número de referencia:{" "}
          <p className="value-paySucessful m-0">t8zbvmk6.</p>
        </p> */}
        <p className=" mt-3 mb-0  text-paySucessful ">
          Ayúdanos a compartir en tus redes sociales y más gente se una a la
          causa.
        </p>
        <div>
          <h6 className=" text-center share-paySucessfull my-2 ">Compartir:</h6>
          <BsFacebook color=" #C3286D" size={25} className="mx-2 mt-2" />
          <BsTwitter color=" #C3286D" size={25} className="mx-2" />
          <MdEmail color=" #C3286D" size={25} className="mx-2" />
          <BsWhatsapp color=" #C3286D" size={25} className="mx-2" />
          <BsFillShareFill color=" #C3286D" size={25} className="mx-2" />
        </div>
        <button
          onClick={() => router.push("/rifas")}
          className="mt-3 btn btn-border-pink  w-50 "
        >
          Ver las rifas disponibles
        </button>
      </div>
    </div>
  );
}

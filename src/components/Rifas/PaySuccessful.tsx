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
import { usePaypalPayment } from "@/store/zustand/PaypalStore";
import useTotalValue from "@/hooks/useTotalValue";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import Wallet from "../PaymentMethods/Wallet";

export default function PaySuccessful({ initialStep }: any) {
  const router = useRouter();

  const [success, setSuccess] = React.useState(false);
  const { raffle, selectedPaymentMethod, selectedTickets } =
    useSelector(selectRaffleState);

  const payId = usePaypalPayment((state) => state.payId);
  const error = usePaypalPayment((state) => state.error);

  const { totalPay, selectedWallet } = useTotalValue();

  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/rifas/detalles/${raffle?.id}`;
  const title = raffle?.name;

  if (!success && totalPay === 0 && selectedWallet) {
    return (
      <div className="  d-block justify-content-center d-lg-flex mt-5 mx-3 mx-lg-0 ">
        <div className=" col-12 col-lg-6   ">
          <BuyTickes />
        </div>
        <div className="col-lg-6 col-12 mt-3 mt-md-0 text-center px-5 mx-auto">
          <Wallet setSuccess={setSuccess} />
        </div>
      </div>
    );
  }

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

  if (error) {
    return (
      <div className="  d-block justify-content-center d-lg-flex mt-5 mx-3 mx-lg-0 ">
        <div className=" col-12 col-lg-6   ">
          <BuyTickes />
        </div>
        <div className="col-lg-6 col-12 mt-3 mt-md-0 text-center mx-auto ">
          <BiHeartCircle size={60} color="#C3286D" />
          <h3 className="my-2 tank-paySucessfull"> Error al hacer el pago </h3>
          <p className=" m-0  text-paySucessful ">
            Tuvimos un error al procesar el pago, porfavor intentalo de nuevo
          </p>

          <button
            onClick={() => router.push("/rifas")}
            className="mt-3 btn btn-border-pink  w-50 "
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

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
          <p className="value-paySucessful m-0 ps-1">
            {selectedTickets.length}
          </p>
        </p>
        <p className=" m-0  d-flex justify-content-center  text-paySucessful m-0 ">
          {" "}
          Total pagado:{" "}
          <p className="value-paySucessful m-0 ps-1">
            {" "}
            ${parseNumber(totalPay)} MXN
          </p>
        </p>
        <p className=" m-0 d-flex justify-content-center  text-paySucessful">
          {" "}
          Número de referencia:{" "}
          <p className="value-paySucessful m-0 ps-1">{payId}.</p>
        </p>
        <p className=" mt-3 mb-0  text-paySucessful ">
          Ayúdanos a compartir en tus redes sociales y más gente se una a la
          causa.
        </p>
        <div>
          <h6 className=" text-center share-paySucessfull my-2 ">Compartir:</h6>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <BsFacebook
              color=" #C3286D"
              size={25}
              className="mx- position-relative 2"
            />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <BsTwitter
              color=" #C3286D"
              size={25}
              className="mx-2  position-relative "
            />
          </TwitterShareButton>

          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <MdEmail
              color=" #C3286D"
              size={25}
              className="mx-2  position-relative "
            />
          </EmailShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <BsWhatsapp
              color=" #C3286D"
              size={25}
              className="mx-2  position-relative "
            />
          </WhatsappShareButton>
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

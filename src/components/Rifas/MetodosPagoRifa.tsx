import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import logoPaypal from "@/assets/img/paypal.svg";
import logoMercadoPago from "@/assets/img/mercadoPago.svg";
import Image from "next/image";
import BuyTickes from "./BuyTickes";
import { selectAuthState } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import MethodReview from "./BoletosRifas/MethodReview";
import { parseNumber } from "@/utils/ParseNumber";
import {
  selectRaffleState,
  setSelectedPaymentMethod,
  setSelectedWallet,
} from "@/store/slices/raffles";
import { validateCoupon } from "@/store/slices/raffles";
import { toast } from "react-hot-toast";
import useTotalValue from "@/hooks/useTotalValue";

type Imethods = "paypal" | "mercadopago";
export default function MetodosPagoRifa({ nextStep, backStep }: any) {
  const { totalPay } = useTotalValue();

  const { profile } = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const { selectedPaymentMethod, selectedWallet } =
    useSelector(selectRaffleState);

  const [cupon, setCupon] = useState<string>("");

  const handleSelectMethod = (method: Imethods) => {
    dispatch(setSelectedPaymentMethod(method));
  };

  const handleApplyCupon = async () => {
    const { payload } = await dispatch(validateCoupon(cupon) as any);

    if (payload) return toast.success("Cupon aplicado");
  };
  const disableButton = selectedPaymentMethod === null && totalPay !== 0;

  return (
    <section>
      <div className="d-block justify-content-center d-lg-flex  mt-5 mx-3 mx-lg-0 ">
        <div className=" col-12 col-lg-6   ">
          <BuyTickes />
        </div>
        <div className="col-lg-6 col-12  pt-5 pt-lg-0 ms-0 mx-lg-3 ">
          <p className=" donaciones-title">2 / 3 Elige el metodo de pago</p>
          <p className="subtitle-boletosaRifa mb-1">
            Introduce el código de tu cupón
          </p>
          <div className=" d-block d-md-flex">
            <input
              value={cupon}
              onChange={(e) => setCupon(e.target.value)}
              type="text"
              placeholder="Código de tu cupón"
              className="form-control input-placeholder opacity-75 "
            />
            <button
              onClick={handleApplyCupon}
              className="form-control btn-border-pink mx-0 mx-md-3  w-50 mt-3 mt-md-0"
            >
              Aplicar
            </button>
          </div>
          <div className=" border-bottom my-2 w-100"></div>
          {profile?.wallet?.value ? (
            <>
              <p className=" subtitle-boletosaRifa my-1 ">
                Tu saldo disponible
              </p>
              <button
                onClick={() => dispatch(setSelectedWallet(!selectedWallet))}
                className="form-control d-flex align-items-center  "
              >
                <div
                  className={`border border-secondary rounded-circle  ${
                    selectedWallet && "bg-pink"
                  }`}
                  style={{ width: "1rem", height: "1rem" }}
                ></div>
                <div className="placeholder-button ">
                  <p className="m-0 ms-3">
                    Utilizar los $ {parseNumber(Number(profile?.wallet.value))}{" "}
                    de mi billetera
                  </p>{" "}
                </div>
              </button>
              <div className=" border-bottom my-2 w-100"></div>{" "}
            </>
          ) : (
            <></>
          )}
          <p className=" subtitle-boletosaRifa my-2 ">
            Selecciona tu método de pago para continuar
          </p>
          <button
            onClick={() => handleSelectMethod("paypal")}
            className="form-control d-flex align-items-center outline-none my-1"
          >
            <div
              className={`border border-secondary rounded-circle  ${
                selectedPaymentMethod === "paypal" && "bg-pink"
              }`}
              style={{ width: "1rem", height: "1rem" }}
            ></div>
            <div className="d-flex text-secondary ">
              <p className="m-0 ms-3">Paga con</p>
              <Image src={logoPaypal} alt="logoPaypal" className="ms-2" />{" "}
            </div>
          </button>
          Efectua el pago
          <button
            onClick={() => handleSelectMethod("mercadopago")}
            className="form-control d-flex align-items-center  my-1 "
          >
            <div
              className={`border border-secondary rounded-circle  ${
                selectedPaymentMethod === "mercadopago" && "bg-pink"
              }`}
              style={{ width: "1rem", height: "1rem" }}
            ></div>
            <div className="d-flex text-secondary ">
              <p className="m-0 ms-3">Paga con</p>
              <Image
                src={logoMercadoPago}
                alt="logoMercadoPago"
                className="ms-2"
              />
            </div>
          </button>
          <div className=" border-bottom my-2 w-100"></div>
          <MethodReview />
          <div className="d-flex justify-content-between mt-3 justify-content-lg-betweem    ">
            <button
              className="btn btn-border-pink btn-sm  px-4 rounded-2 "
              onClick={() => backStep()}
            >
              {" "}
              <AiOutlineArrowLeft /> Regresar
            </button>
            <button
              disabled={disableButton}
              className="btn btn-pink btn-sm px-4 rounded-2 mx-2 mx-sm-0 "
              onClick={() => nextStep()}
            >
              {" "}
              Continuar <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

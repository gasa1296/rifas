import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { usePaypalPayment } from "@/store/zustand/PaypalStore";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { selectRaffleState } from "@/store/slices/raffles";
import { ValidateSession } from "@/store/slices/auth";
export default function Wallet({ setSuccess }: { setSuccess: any }) {
  const setWalletCapture = usePaypalPayment((state) => state.setWalletCapture);
  const getPaymentCreate = usePaypalPayment((state) => state.getPaymentCreate);
  const dispatch = useDispatch();

  const { raffle, coupon, selectedWallet, selectedTickets } =
    useSelector(selectRaffleState);

  const payWidthWallet = async () => {
    try {
      await getPaymentCreate(raffle?.id || 0, {
        wallet: selectedWallet,
        tickets: selectedTickets,
      });
      const result = await setWalletCapture(raffle?.id || 0, coupon?.id || "");
      dispatch(ValidateSession({}) as any);
      setSuccess(true);
    } catch (error) {
      toast.error("Error al procesar el pago");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      payWidthWallet();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };

    //eslint-disable-next-line
  }, []);
  return <section className=" pt-5 pt-lg-0 ">Loading...</section>;
}

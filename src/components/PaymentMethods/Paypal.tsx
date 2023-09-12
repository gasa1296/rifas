import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { usePaypalPayment } from "@/store/zustand/PaypalStore";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { selectRaffleState } from "@/store/slices/raffles";
export default function Paypal({
  totalPay,
  setSuccess,
}: {
  totalPay: number;
  setSuccess: any;
}) {
  const getPaymentCreate = usePaypalPayment((state) => state.getPaymentCreate);
  const setPaymentCapture = usePaypalPayment(
    (state) => state.setPaymentCapture
  );

  const { raffle, selectedTickets, selectedWallet, coupon } =
    useSelector(selectRaffleState);

  const createOrder = (data: any, actions: any) => {
    // Crea una orden de PayPal

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPay,
            currency_code: "MXN",
          },
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    // Captura el pago de PayPal
    return actions.order.capture().then(async function (details: any) {
      // El pago ha sido capturado con éxito
      //setPaymentCreate()
      try {
        const result = await setPaymentCapture(
          raffle?.id || 0,
          totalPay,
          data.orderID,
          coupon?.id || "",
          selectedWallet
        );
        console.log("Test", result);
        setSuccess(true);
      } catch (error) {
        toast.error("Error al procesar el pago");
      }
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getPaymentCreate(raffle?.id || 0, {
        wallet: selectedWallet,
        tickets: selectedTickets,
      });
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };

    //eslint-disable-next-line
  }, []);
  return (
    <section className=" pt-5 pt-lg-0 ">
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_ID || "",
          currency: "MXN",
        }}
      >
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
        ></PayPalButtons>
      </PayPalScriptProvider>
    </section>
  );
}

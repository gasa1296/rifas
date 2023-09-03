import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { usePaypalPayment } from "@/store/zustand/PaypalStore";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
export default function Paypal({ totalPay }: { totalPay: number }) {
  const getPaymentCreate = usePaypalPayment((state) => state.getPaymentCreate);

  const { raffle, selectedWallet, selectedTickets } =
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
    return actions.order.capture().then(function (details: any) {
      // El pago ha sido capturado con éxito
      //setPaymentCreate()
      console.log("details", data, details);
    });
  };

  useEffect(() => {
    getPaymentCreate(raffle?.id || 0, {
      wallet: selectedWallet,
      tickets: selectedTickets,
    });
  }, []);

  return (
    <section className=" pt-5 pt-lg-0 ">
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_ID || "",
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

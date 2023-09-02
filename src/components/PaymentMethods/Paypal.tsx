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
    console.log(
      "fir123123st",
      actions.order.create({
        purchase_units: [
          {
            amount: {
              value: totalPay,
              currency_code: "MXN",
            },
          },
        ],
      })
    );

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
          "client-id":
            "ASF-bf0D1FnxEfK1y7M30-1nyba4Evbv0h7CEEmBloTYG0-dpiY6YQ-COxNvqmU2fqzuPTH9Su5MWgRe",
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

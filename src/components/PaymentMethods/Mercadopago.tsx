import { selectRaffleState } from "@/store/slices/raffles";
import { usePaypalPayment } from "@/store/zustand/PaypalStore";
/* import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react"; */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
/* initMercadoPago("TEST-18bdd1a9-b7d0-49be-98ba-4697332e1d3f"); */
export function MercadoPagoButton({
  totalPay,
  setSuccess,
}: {
  totalPay: number;
  setSuccess: any;
}) {
  const getPaymentCreate = usePaypalPayment((state) => state.getPaymentCreate);
  const setMercadopagoCapture = usePaypalPayment(
    (state) => state.setMercadopagoCapture
  );
  const { raffle, selectedWallet, selectedTickets } =
    useSelector(selectRaffleState);

  const initialization = {
    amount: totalPay,
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };
  const onSubmit = async (props: any) => {
    try {
      await setMercadopagoCapture(raffle?.id || 0, totalPay, props);
      setSuccess(true);
    } catch (error) {
      toast.error("Error al procesar el pago");
    }
  };
  const onError = async (error: any) =>
    toast.error("Error al procesar el pago");

  const onReady = async () => {};

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
    <>
      {/* <CardPayment
        initialization={initialization}
        customization={customization as any}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      /> */}
    </>
  );
}

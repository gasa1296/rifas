import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
initMercadoPago("TEST-18bdd1a9-b7d0-49be-98ba-4697332e1d3f");
export function MercadoPagoButton({ totalPay }: { totalPay: number }) {
  const initialization = {
    amount: totalPay,
    preferenceId: "TEST-18bdd1a9-b7d0-49be-98ba-4697332e1d3f",
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };
  const onSubmit = async ({ selectedPaymentMethod, formData }: any) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve(true);
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
  };
  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };
  const onReady = async () => {
    /*
      Callback llamado cuando el Brick está listo.
      Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
  };

  return (
    <>
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </>
  );
}

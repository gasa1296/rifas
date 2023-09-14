import { Api } from ".";

export const getPaypalCreate = (raffleId: number, raffle: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/paypal_create/`,
    method: "POST",
    _data: raffle,
  });
};
export const setPaypalCapture = (raffleId: number, details: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/paypal/`,
    method: "PUT",
    _data: details,
  });
};
export const setWalletCapture = (raffleId: number, details: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/wallet/`,
    method: "PUT",
    _data: details,
  });
};
export const setMercadopago = (raffleId: number, details: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/mercadopago/`,
    method: "PUT",
    _data: details,
  });
};

export const setReserveTickets = (raffleId: number, raffle: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/reserve/`,
    method: "POST",
    _data: raffle,
  });
};
export const getReservedTickets = (raffleId: number) => {
  return Api({
    endpoint: `/buying/${raffleId}/reserved/`,
    method: "GET",
  });
};
export const getPrice = (raffleId: number) => {
  return Api({
    endpoint: `/buying/${raffleId}/get_price/`,
    method: "POST",
  });
};
export const deleteReservedTickets = (
  raffleId: number,
  reservedTickets: number[]
) => {
  return Api({
    endpoint: `/buying/${raffleId}/unreserve/`,
    method: "delete",
    _data: { tickets: reservedTickets },
  });
};

import { Api } from ".";

export const getPaypalCreate = (raffleId: number, raffle: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/paypal_create/`,
    method: "POST",
    _data: raffle,
  });
};

export const getReserveTickets = (raffleId: number, raffle: any) => {
  return Api({
    endpoint: `/buying/${raffleId}/reserve/`,
    method: "POST",
    _data: raffle,
  });
};

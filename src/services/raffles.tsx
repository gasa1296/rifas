import { Auth, Profile } from "@/types/Model/Profile";
import { Api } from ".";
import { RafflesI } from "@/types/Model/Raffle";

export const getRaffles = () => {
  return Api({
    endpoint: "/raffles/",
    method: "GET",
  });
};

export const createDonations = (donation: any) => {
  return Api({
    endpoint: "/prizes/",
    method: "POST",
    _data: donation,
  });
};

export const getAssociationsApproveds = () => {
  return Api({
    endpoint: "/associations/approveds",
    method: "GET",
  });
};

export const createCause = (cause: any) => {
  return Api({
    endpoint: "/causes/",
    method: "POST",
    _data: cause,
  });
};

export const createPrize = (prize: any) => {
  return Api({
    endpoint: "/prizes/",
    method: "POST",
    _data: prize,
  });
};

export const getCausesCategories = () => {
  return Api({
    endpoint: "/cause_category/",
    method: "GET",
  });
};

export const getPrizesCategories = () => {
  return Api({
    endpoint: "/prize_category/",
    method: "GET",
  });
};
export const createNewRaffle = (raffle: RafflesI) => {
  return Api({
    endpoint: "/raffles/",
    method: "POST",
    _data: raffle,
  });
};

import { Auth, Profile } from "@/types/Model/Profile";
import { Api } from ".";

export const getRaffles = () => {
  return Api({
    endpoint: "/raffles/",
    method: "GET",
  });
};

export const createDonations = (donation: any) => {
  return Api({
    endpoint: "/associations/",
    method: "POST",
    _data: donation
  });
};
import { Auth, Profile } from "@/types/Model/Profile";
import { Api } from ".";

export const getRaffles = () => {
  return Api({
    endpoint: "/raffles/",
    method: "GET",
  });
};

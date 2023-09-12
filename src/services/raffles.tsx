import { Auth, Profile } from "@/types/Model/Profile";
import { Api } from ".";
import { RafflesI } from "@/types/Model/Raffle";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const getRaffles = () => {
  return Api({
    endpoint: "/raffles/",
    method: "GET",
  });
};
export const getRafflesFeatures = () => {
  return Api({
    endpoint: "/raffles/featured/",
    method: "GET",
  });
};
export const getRafflesDate = () => {
  return Api({
    endpoint: "/raffles_dates",
    method: "GET",
  });
};
export const getTestimonies = () => {
  return Api({
    endpoint: "/testimonies/",
    method: "GET",
  });
};
export const getRaffle = (id: String | string[]) => {
  return Api({
    endpoint: `/raffles/${id}`,
    method: "GET",
  });
};
export const getRaffleTickets = (id: String | string[]) => {
  return Api({
    endpoint: `/raffles/${id}/tickets`,
    method: "GET",
  });
};
export const getPrizebyId = (id: String | string[]) => {
  return Api({
    endpoint: `/prizes/${id}/`,
    method: "GET",
  });
};

export const validateApplyCoupon = (coupon: String, raffleId: Number) => {
  return Api({
    endpoint: `/buying/${raffleId}/get_coupon/`,
    method: "POST",
    _data: { coupon },
  });
};

export const createDonations = (donation: any) => {
  const formData = new FormData();
  formData.append("name", donation.name);
  formData.append("description", donation.description);
  formData.append("category", donation.category);
  formData.append("status", donation.status);
  formData.append("value", donation.value);
  if (donation.association)
    formData.append("association", donation.association);
  if (donation.image[0]) formData.append("image", donation.image[0]);

  return axios.post(baseUrl + "/prizes/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

export const getAssociationsApproveds = () => {
  return Api({
    endpoint: "/associations/approveds",
    method: "GET",
  });
};

export const createCause = (cause: any) => {
  const formData = new FormData();
  formData.append("name", cause.name);
  formData.append("description", cause.description);
  formData.append("categories", cause.categories);
  formData.append("goal", cause.goal);
  formData.append("association", cause.association);
  if (cause.image[0]) formData.append("image", cause.image[0]);

  return axios.post(baseUrl + "/causes/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
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
  const formData = new FormData();
  formData.append("name", raffle.name);
  formData.append("description", raffle.description);
  formData.append("association", raffle.association);
  formData.append("delivery_type", raffle.delivery_type);
  formData.append("end_date", raffle.end_date);
  formData.append("price", raffle.price);
  if (typeof raffle.cause === "string") formData.append("cause", raffle.cause);
  if (typeof raffle.prize === "string") formData.append("prize", raffle.prize);
  formData.append("short_description", raffle.short_description);
  formData.append("start_date", raffle.start_date);
  formData.append("ticket_number", raffle.ticket_number);
  formData.append("ticket_price", raffle.ticket_price);

  if (raffle.banner[0]) formData.append("banner", raffle.banner[0]);
  if (raffle.image[0]) formData.append("image", raffle.image[0]);

  return axios.post(baseUrl + "/raffles/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

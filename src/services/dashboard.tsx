import { Api } from ".";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const getDashboardCause = (id: string, pagination: number) => {
  return Api({
    endpoint: `/associations/${id}/causes/?page=${pagination}`,
    method: "GET",
  });
};

export const getDashboardWallet = (id: string, pagination: number) => {
  return Api({
    endpoint: `/associations/${id}/refunds/?page=${pagination}`,
    method: "GET",
  });
};

export const getDashboardPrize = (id: string, pagination: number) => {
  return Api({
    endpoint: `/associations/${id}/prizes/?page=${pagination}`,
    method: "GET",
  });
};

export const getDashboardRaffle = (id: string) => {
  return Api({
    endpoint: `/associations/${id}/raffles/`,
    method: "GET",
  });
};

export const setEditCauses = (id: number, cause: any) => {
  const formData = new FormData();
  formData.append("name", cause.name);
  formData.append("description", cause.description);
  formData.append("categories", cause.categories);
  formData.append("goal", cause.goal);
  formData.append("association", cause.association);
  if (cause.image[0]) formData.append("image", cause.image[0]);

  return axios.put(baseUrl + `/causes/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

export const editPrize = (id: number, donation: any) => {
  const formData = new FormData();
  formData.append("name", donation.name);
  formData.append("description", donation.description);
  formData.append("category", donation.category);
  formData.append("status", donation.status);
  formData.append("value", donation.value);
  if (donation.association)
    formData.append("association", donation.association);
  if (donation.image[0]) formData.append("image", donation.image[0]);

  return axios.put(baseUrl + `/prizes/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

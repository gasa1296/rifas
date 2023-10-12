import { Api } from ".";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const getDashboardCause = (id: string, pagination: number) => {
  return Api({
    endpoint: `/associations/${id}/causes/?page=${pagination}`,
    method: "GET",
  });
};

export const getDashboardPrize = (id: string) => {
  return Api({
    endpoint: `/associations/${id}/prizes/`,
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

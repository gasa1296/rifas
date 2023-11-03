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

export const getDashboardPrizeUser = (pagination: number) => {
  return Api({
    endpoint: `/prizes/my_prizes/?page=${pagination}`,
    method: "GET",
  });
};

export const getDashboardResumen = (id: string) => {
  return Api({
    endpoint: `/associations/${id}/counts/`,
    method: "GET",
  });
};
export const getDashboardResumenProfile = () => {
  return Api({
    endpoint: `/prizes/get_counts/`,
    method: "GET",
  });
};

export const getDashboardRaffle = (id: string) => {
  return Api({
    endpoint: `/associations/${id}/raffles/`,
    method: "GET",
  });
};

export const getDashboardUser = (id: string, pagination: number) => {
  return Api({
    endpoint: `/associations/${id}/list_helpers/?page=${pagination}`,
    method: "GET",
  });
};
export const setDashboardAddUser = (id: string, payload: any) => {
  return Api({
    endpoint: `/associations/${id}/add_helper/?email=${payload.email}`,
    method: "POST",
    _data: payload,
  });
};
export const setDashboardCreateUser = (id: string, payload: any) => {
  const formData = new FormData();
  formData.append("company_name", payload.company_name);
  formData.append("full_name", payload.full_name);
  formData.append("email", payload.email);
  formData.append("password", payload.password);

  if (payload.image[0]) formData.append("image", payload.image[0]);

  return axios.post(
    baseUrl + `/associations/${id}/create_helper/?email=${payload.email}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
      },
    }
  );
};

export const setDashboardUpdateUser = (id: string, payload: any) => {
  const formData = new FormData();
  formData.append("company_name", payload.company_name);
  formData.append("full_name", payload.full_name);
  formData.append("email", payload.email);
  if (payload.password) formData.append("password", payload.password);

  if (payload.image[0]) formData.append("image", payload.image[0]);

  return axios.put(
    baseUrl + `/associations/${id}/update_helper/?user_id=${payload.id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
      },
    }
  );
};

export const setDashboardDeleteUser = (id: string, userId: string) => {
  return Api({
    endpoint: `/associations/${id}/delete_helper/?user_id=${userId}`,
    method: "DELETE",
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
  if (typeof donation.image[0] !== "string" && donation.image[0])
    formData.append("image", donation.image[0]);

  return axios.put(baseUrl + `/prizes/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

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
export const getMicrosite = (asociationId: string) => {
  return Api({
    endpoint: `/associations/${asociationId}/`,
    method: "GET",
  });
};

export const getSite = (slug: string) => {
  return Api({
    endpoint: `/associations/microsite/?slug=${slug}`,
    method: "GET",
  });
};

export const createImagesGallery = (image: any, associationId: string) => {
  const formData = new FormData();
  formData.append("association", associationId);
  if (image) formData.append("file", image);

  return axios.post(baseUrl + "/association_gallery/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

export const deleteImagesGallery = (id: number) => {
  return Api({
    endpoint: `/association_gallery/${id}`,
    method: "DELETE",
  });
};

export const updateMicrosite = (asociationId: string, asociacion: any) => {
  const formData = new FormData();
  formData.append("association_name", asociacion.association_name);
  formData.append("first_name", asociacion.first_name);
  formData.append("last_name", asociacion.last_name);
  formData.append("last_name2", asociacion.last_name2);
  formData.append("rfc", asociacion.rfc);
  formData.append("slug", asociacion.slug);
  formData.append("who", asociacion.who);
  formData.append("what", asociacion.what);
  formData.append("address", asociacion.address);
  formData.append("zip", asociacion.zip);
  formData.append("state", asociacion.state);
  formData.append("province", asociacion.province);
  formData.append("email", asociacion.email);
  formData.append("phone", asociacion.phone);

  formData.append("facebook", asociacion.facebook);
  formData.append("twitter", asociacion.twitter);
  formData.append("instagram", asociacion.instagram);
  formData.append("tiktok", asociacion.tiktok);
  formData.append("youtube", asociacion.youtube);
  formData.append("vimeo", asociacion.vimeo);
  formData.append("linkedin", asociacion.linkedin);
  formData.append("pinterest", asociacion.pinterest);

  if (asociacion.image[0] && typeof asociacion.image[0] !== "string")
    formData.append("image", asociacion.image[0]);

  if (asociacion.main_image[0] && typeof asociacion.main_image[0] !== "string")
    formData.append("main_image", asociacion.main_image[0]);

  return axios.put(baseUrl + `/associations/${asociationId}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
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

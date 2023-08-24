import { Auth, GoogleAuth, Profile } from "@/types/Model/Profile";
import { Api } from ".";

import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const registerUser = (profile: Profile) => {
  return Api({
    endpoint: "/profile/register_profile/",
    method: "POST",
    _data: {
      ...profile,
    },
  });
};
export const loginUser = (auth: Auth) => {
  return Api({
    endpoint: "/auth/JWT",
    method: "POST",
    _data: {
      ...auth,
    },
  });
};
export const loginGoogleUser = (auth: GoogleAuth) => {
  return Api({
    endpoint: "/profile/google/",
    method: "POST",
    _data: {
      ...auth,
    },
  });
};

export const getUserProfile = () => {
  return Api({
    endpoint: "/profile/show_profile",
    method: "GET",
  });
};
export const refreshToken = (refresh: String) => {
  return Api({
    endpoint: "/auth/JWT/refresh",
    method: "POST",
    _data: {
      refresh,
    },
  });
};

export const createAsociacion = (asociacion: any) => {
  const formData = new FormData();
  formData.append("address", asociacion.address);
  formData.append("association_name", asociacion.association_name);
  formData.append("email", asociacion.email);
  formData.append("first_name", asociacion.first_name);
  formData.append("fiscal_address2", asociacion.fiscal_address2);
  formData.append("last_name", asociacion.last_name);
  formData.append("last_name2", asociacion.last_name2);
  formData.append("paypal", asociacion.paypal);
  formData.append("phone", asociacion.phone);
  formData.append("regime", asociacion.regime);
  formData.append("rfc", asociacion.rfc);
  formData.append("province", asociacion.province);
  formData.append("rfc2", asociacion.rfc2);
  formData.append("state", asociacion.state);
  formData.append("user", asociacion.user);
  formData.append("zip", asociacion.zip);

  if (asociacion.image[0]) formData.append("image", asociacion.image[0]);

  return axios.post(baseUrl + "/associations/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

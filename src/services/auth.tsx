import { Auth, GoogleAuth, Profile } from "@/types/Model/Profile";
import { Api } from ".";

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
  return Api({
    endpoint: "/associations/",
    method: "POST",
    _data: asociacion,
  });
};

import { Api } from ".";

export const getAllNotifications = () => {
  return Api({
    endpoint: `/notifications/`,
    method: "GET",
  });
};
export const setContacto = (payload: any) => {
  return Api({
    endpoint: `/notifications/contact_form/`,
    method: "POST",
    _data: payload,
  });
};

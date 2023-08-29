import { Api } from ".";

export const getAllNotifications = () => {
  return Api({
    endpoint: `/notifications/`,
    method: "GET",
  });
};

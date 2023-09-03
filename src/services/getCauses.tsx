import { Api } from ".";

export const getCausesStore = (pagination: number) => {
  return Api({
    endpoint: `/causes/my_causes/?page=${pagination}`,
    method: "GET",
  });
};

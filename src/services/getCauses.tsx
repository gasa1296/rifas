import { Api } from ".";

export const getCausesStore = (pagination: number) => {
  return Api({
    endpoint: `/causes/my_causes/?page=${pagination}`,
    method: "GET",
  });
};
export const getSeachCause = (search: string) => {
  return Api({
    endpoint: `/causes/search/?name=${search}`,
    method: "GET",
  });
};
export const getSeachPremios = (search: string) => {
  return Api({
    endpoint: `/prizes/search/?name=${search}`,
    method: "GET",
  });
};

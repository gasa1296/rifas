import { Api } from ".";

export const getDashboardCause = (id: string) => {
    return Api({
        endpoint: `/associations/${id}/causes/`,
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

export const setEditCauses = (id: string) => {
    return Api({
        endpoint: `/causes/${id}/`,
        method: "PUT",
        _data: {},
    });
};
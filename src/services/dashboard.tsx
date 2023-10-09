import { Api } from ".";

export const getDashboardCause = () => {
    return Api({
        endpoint: `/causes/`,
        method: "GET",
    });
};

export const getDashboardRaffle = () => {
    return Api({
        endpoint: `/raffles/`,
        method: "GET",
    });
};

export const getDashboardPrize = () => {
    return Api({
        endpoint: `/prizes/`,
        method: "GET",
    });
};
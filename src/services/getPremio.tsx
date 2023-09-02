import { Api } from ".";

export const getPremioStore = () => {
    return Api({
        endpoint: `/prizes/`,
        method: "GET",
    });
};

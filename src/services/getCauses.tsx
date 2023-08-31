import { Api } from ".";

export const getCausesStore = () => {
    return Api({
        endpoint: `/causes/my_causes/`,
        method: "GET",
    });
};

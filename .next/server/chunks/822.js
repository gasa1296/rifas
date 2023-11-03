"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 7896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Contacto-bg.5de213e9.jpg","height":150,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAEACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwb/2gAMAwEAAhADEAAAAI4a4//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 3697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ab": () => (/* binding */ getDashboardPrizeUser),
/* harmony export */   "An": () => (/* binding */ getDashboardWallet),
/* harmony export */   "Hd": () => (/* binding */ getDashboardPrize),
/* harmony export */   "Ie": () => (/* binding */ setDashboardDeleteUser),
/* harmony export */   "Kj": () => (/* binding */ getDashboardRaffle),
/* harmony export */   "SB": () => (/* binding */ editPrize),
/* harmony export */   "c5": () => (/* binding */ setDashboardAddUser),
/* harmony export */   "eB": () => (/* binding */ getDashboardResumen),
/* harmony export */   "ep": () => (/* binding */ getDashboardUser),
/* harmony export */   "ng": () => (/* binding */ setDashboardCreateUser),
/* harmony export */   "p6": () => (/* binding */ getDashboardCause),
/* harmony export */   "qN": () => (/* binding */ setDashboardUpdateUser),
/* harmony export */   "xU": () => (/* binding */ setEditCauses),
/* harmony export */   "zQ": () => (/* binding */ getDashboardResumenProfile)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseUrl = "https://www.api.rifaconcausa.org/" || 0;
const getDashboardCause = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/causes/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardWallet = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/refunds/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardPrize = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/prizes/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardPrizeUser = (pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/my_prizes/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardResumen = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/counts/`,
        method: "GET"
    });
};
const getDashboardResumenProfile = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/get_counts/`,
        method: "GET"
    });
};
const getDashboardRaffle = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/raffles/`,
        method: "GET"
    });
};
const getDashboardUser = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/list_helpers/?page=${pagination}`,
        method: "GET"
    });
};
const setDashboardAddUser = (id, payload)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/add_helper/?email=${payload.email}`,
        method: "POST",
        _data: payload
    });
};
const setDashboardCreateUser = (id, payload)=>{
    const formData = new FormData();
    formData.append("company_name", payload.company_name);
    formData.append("full_name", payload.full_name);
    formData.append("email", payload.email);
    formData.append("password", payload.password);
    if (payload.image[0]) formData.append("image", payload.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + `/associations/${id}/create_helper/?email=${payload.email}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const setDashboardUpdateUser = (id, payload)=>{
    const formData = new FormData();
    formData.append("company_name", payload.company_name);
    formData.append("full_name", payload.full_name);
    formData.append("email", payload.email);
    if (payload.password) formData.append("password", payload.password);
    if (payload.image[0]) formData.append("image", payload.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/associations/${id}/update_helper/?user_id=${payload.id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const setDashboardDeleteUser = (id, userId)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/delete_helper/?user_id=${userId}`,
        method: "DELETE"
    });
};
const setEditCauses = (id, cause)=>{
    const formData = new FormData();
    formData.append("name", cause.name);
    formData.append("description", cause.description);
    formData.append("categories", cause.categories);
    formData.append("goal", cause.goal);
    formData.append("association", cause.association);
    if (cause.image[0]) formData.append("image", cause.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/causes/${id}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const editPrize = (id, donation)=>{
    const formData = new FormData();
    formData.append("name", donation.name);
    formData.append("description", donation.description);
    formData.append("category", donation.category);
    formData.append("status", donation.status);
    formData.append("value", donation.value);
    if (donation.association) formData.append("association", donation.association);
    if (typeof donation.image[0] !== "string" && donation.image[0]) formData.append("image", donation.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/prizes/${id}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useAsociatonsStoreDashboard),
/* harmony export */   "p": () => (/* binding */ useRaffleStoreDashboard)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _services_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3697);
/* harmony import */ var _services_raffles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3843);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9956);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__, _utils_handleError__WEBPACK_IMPORTED_MODULE_3__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__, _utils_handleError__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useRaffleStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isLoading: false,
        raffle: [],
        error: false,
        rafflePurchase: [],
        paginacion: 1,
        getRaffle: async (id)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardRaffle */ .Kj)(id);
            set({
                raffle: data.results,
                isLoading: false
            });
        },
        getRafflesPurchase: async (pagination)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_2__/* .getRafflesPurchase */ .bN)(pagination || 1);
                const nextPagination = data.next ? pagination + 1 : null;
                set((state)=>({
                        rafflePurchase: pagination === 1 ? data.results : [
                            ...state.rafflePurchase,
                            ...data.results
                        ],
                        isLoading: false,
                        paginacion: nextPagination
                    }));
            } catch (error) {}
        }
    }));
const useAsociatonsStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isLoading: false,
        asociations: [],
        resumen: [],
        error: false,
        wallets: [],
        pagination: 1,
        user: [],
        resumenProfile: [],
        getAsociations: async ()=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_2__/* .getAssociationsApproveds */ .fM)();
            set({
                asociations: data.results,
                isLoading: false
            });
        },
        getWallet: async (id, pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardWallet */ .An)(id, pagination);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    wallets: pagination === 1 ? data.results : [
                        ...state.wallets,
                        ...data.results
                    ],
                    isLoading: false,
                    pagination: nextPagination
                }));
        },
        getUser: async (id, pagination)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardUser */ .ep)(id, pagination);
                const nextPagination = data.next ? pagination + 1 : null;
                set((state)=>({
                        user: pagination === 1 ? data.results : [
                            ...state.user,
                            ...data.results
                        ],
                        isLoading: false,
                        pagination: nextPagination
                    }));
            } catch (error) {}
        },
        setAddUser: async (id, payload)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardAddUser */ .c5)(id, payload);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        setCreateUser: async (id, payload)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardCreateUser */ .ng)(id, payload);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        setEditUser: async (id, payload)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardUpdateUser */ .qN)(id, payload);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        setRemoveUser: async (id, userId)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardDeleteUser */ .Ie)(id, userId);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        getResumen: async (id)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardResumen */ .eB)(id);
            set({
                resumen: data,
                isLoading: false
            });
        },
        getResumenProfile: async ()=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardResumenProfile */ .zQ)();
                set({
                    resumenProfile: data,
                    isLoading: false
                });
            } catch (error) {}
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
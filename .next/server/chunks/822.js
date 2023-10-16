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
/* harmony export */   "An": () => (/* binding */ getDashboardWallet),
/* harmony export */   "Hd": () => (/* binding */ getDashboardPrize),
/* harmony export */   "Kj": () => (/* binding */ getDashboardRaffle),
/* harmony export */   "SB": () => (/* binding */ editPrize),
/* harmony export */   "p6": () => (/* binding */ getDashboardCause),
/* harmony export */   "xU": () => (/* binding */ setEditCauses)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseUrl = "https://gasa1296.pythonanywhere.com" || 0;
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
const getDashboardRaffle = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/raffles/`,
        method: "GET"
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
    if (donation.image[0]) formData.append("image", donation.image[0]);
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useRaffleStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isLoading: false,
        raffle: [],
        error: false,
        getRaffle: async (id)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardRaffle */ .Kj)(id);
            set({
                raffle: data.results,
                isLoading: false
            });
        }
    }));
const useAsociatonsStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isLoading: false,
        asociations: [],
        error: false,
        wallets: [],
        pagination: 1,
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
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
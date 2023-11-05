"use strict";
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 3697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ab": () => (/* binding */ getDashboardPrizeUser),
/* harmony export */   "An": () => (/* binding */ getDashboardWallet),
/* harmony export */   "ED": () => (/* binding */ getMicrosite),
/* harmony export */   "EH": () => (/* binding */ deleteImagesGallery),
/* harmony export */   "Hd": () => (/* binding */ getDashboardPrize),
/* harmony export */   "Ie": () => (/* binding */ setDashboardDeleteUser),
/* harmony export */   "Kj": () => (/* binding */ getDashboardRaffle),
/* harmony export */   "NP": () => (/* binding */ getSite),
/* harmony export */   "SB": () => (/* binding */ editPrize),
/* harmony export */   "c5": () => (/* binding */ setDashboardAddUser),
/* harmony export */   "eB": () => (/* binding */ getDashboardResumen),
/* harmony export */   "ep": () => (/* binding */ getDashboardUser),
/* harmony export */   "gR": () => (/* binding */ updateMicrosite),
/* harmony export */   "ng": () => (/* binding */ setDashboardCreateUser),
/* harmony export */   "p6": () => (/* binding */ getDashboardCause),
/* harmony export */   "qA": () => (/* binding */ createImagesGallery),
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
const getMicrosite = (asociationId)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${asociationId}/`,
        method: "GET"
    });
};
const getSite = (slug)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/microsite/?slug=${slug}`,
        method: "GET"
    });
};
const createImagesGallery = (image, associationId)=>{
    const formData = new FormData();
    formData.append("association", associationId);
    if (image) formData.append("file", image);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/association_gallery/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const deleteImagesGallery = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/association_gallery/${id}`,
        method: "DELETE"
    });
};
const updateMicrosite = (asociationId, asociacion)=>{
    const formData = new FormData();
    formData.append("association_name", asociacion.association_name);
    formData.append("first_name", asociacion.first_name);
    formData.append("last_name", asociacion.last_name);
    formData.append("last_name2", asociacion.last_name2);
    formData.append("rfc", asociacion.rfc);
    formData.append("slug", asociacion.slug);
    formData.append("who", asociacion.who);
    formData.append("what", asociacion.what);
    formData.append("address", asociacion.address);
    formData.append("zip", asociacion.zip);
    formData.append("state", asociacion.state);
    formData.append("province", asociacion.province);
    formData.append("email", asociacion.email);
    formData.append("phone", asociacion.phone);
    formData.append("facebook", asociacion.facebook);
    formData.append("twitter", asociacion.twitter);
    formData.append("instagram", asociacion.instagram);
    formData.append("tiktok", asociacion.tiktok);
    formData.append("youtube", asociacion.youtube);
    formData.append("vimeo", asociacion.vimeo);
    formData.append("linkedin", asociacion.linkedin);
    formData.append("pinterest", asociacion.pinterest);
    if (asociacion.image[0] && typeof asociacion.image[0] !== "string") formData.append("image", asociacion.image[0]);
    if (asociacion.main_image[0] && typeof asociacion.main_image[0] !== "string") formData.append("main_image", asociacion.main_image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/associations/${asociationId}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
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
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__, _utils_handleError__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__, _utils_handleError__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





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
        microsite: null,
        site: null,
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
        },
        getSite: async (slug)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getSite */ .NP)(slug);
                set({
                    site: data,
                    isLoading: false
                });
            } catch (error) {}
        },
        getMicrosite: async (asociationId)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getMicrosite */ .ED)(asociationId);
                set({
                    microsite: data,
                    isLoading: false
                });
            } catch (error) {}
        },
        updateMicrosite: async (asociationId, payload)=>{
            try {
                set({
                    isLoading: true
                });
                if (payload.images.length > 0) {
                    const petitions = [];
                    payload.images.map((gallery)=>petitions.push((0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .createImagesGallery */ .qA)(gallery, payload.id.toString())));
                    const resultGallery = await Promise.all(petitions);
                    payload.images = resultGallery.map((gallery)=>gallery.data.id);
                }
                const petitionsOld = [];
                payload.oldImages.map((image)=>petitionsOld.push((0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .deleteImagesGallery */ .EH)(image.id)));
                await Promise.all(petitionsOld);
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .updateMicrosite */ .gR)(asociationId, payload);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("Se actualizo el micrositio con exito!!");
                set({
                    microsite: data,
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
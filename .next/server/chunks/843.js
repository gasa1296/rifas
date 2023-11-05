"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 3843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ createDonations),
/* harmony export */   "DK": () => (/* binding */ getPrizebyId),
/* harmony export */   "E$": () => (/* binding */ getCausesCategories),
/* harmony export */   "GS": () => (/* binding */ getPrizesCategories),
/* harmony export */   "J2": () => (/* binding */ createPrizeGallery),
/* harmony export */   "Uj": () => (/* binding */ updateGalleryCause),
/* harmony export */   "V": () => (/* binding */ getRaffles),
/* harmony export */   "V2": () => (/* binding */ createCauseGallery),
/* harmony export */   "Wi": () => (/* binding */ createCause),
/* harmony export */   "Z2": () => (/* binding */ deleteImageGalleryRaffle),
/* harmony export */   "bN": () => (/* binding */ getRafflesPurchase),
/* harmony export */   "bl": () => (/* binding */ getRaffleTickets),
/* harmony export */   "cF": () => (/* binding */ getTestimonies),
/* harmony export */   "cW": () => (/* binding */ updateGalleryPrize),
/* harmony export */   "dY": () => (/* binding */ deleteImageGallery),
/* harmony export */   "fM": () => (/* binding */ getAssociationsApproveds),
/* harmony export */   "fk": () => (/* binding */ validateApplyCoupon),
/* harmony export */   "kw": () => (/* binding */ getRafflesFeatures),
/* harmony export */   "p4": () => (/* binding */ createNewRaffle),
/* harmony export */   "sw": () => (/* binding */ getRafflesDate),
/* harmony export */   "tE": () => (/* binding */ getRaffle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseUrl = "https://gasa1296.pythonanywhere.com" || 0;
const getRaffles = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/raffles/",
        method: "GET"
    });
};
const getRafflesFeatures = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/raffles/featured/",
        method: "GET"
    });
};
const getRafflesDate = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/raffles_dates",
        method: "GET"
    });
};
const getRafflesPurchase = (pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/raffles/purchased_raffles/?page=${pagination}`,
        method: "GET"
    });
};
const getTestimonies = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/testimonies/",
        method: "GET"
    });
};
const getRaffle = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/raffles/${id}`,
        method: "GET"
    });
};
const getRaffleTickets = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/raffles/${id}/tickets`,
        method: "GET"
    });
};
const getPrizebyId = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/${id}/`,
        method: "GET"
    });
};
const validateApplyCoupon = (coupon, raffleId)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/buying/${raffleId}/get_coupon/`,
        method: "POST",
        _data: {
            coupon
        }
    });
};
const updateGalleryCause = (causeId, cause)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/causes/${causeId}/`,
        method: "PUT",
        _data: cause
    });
};
const updateGalleryPrize = (prizeId, prize)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/${prizeId}/`,
        method: "PUT",
        _data: prize
    });
};
const createDonations = (donation)=>{
    const formData = new FormData();
    formData.append("name", donation.name);
    formData.append("description", donation.description);
    formData.append("category", donation.category);
    formData.append("status", donation.status);
    formData.append("value", donation.value);
    if (donation.association) formData.append("association", donation.association);
    if (donation.image[0]) formData.append("image", donation.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/prizes/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const getAssociationsApproveds = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/associations/approveds",
        method: "GET"
    });
};
const createCause = (cause)=>{
    const formData = new FormData();
    formData.append("name", cause.name);
    formData.append("description", cause.description);
    formData.append("categories", cause.categories);
    formData.append("goal", cause.goal);
    formData.append("association", cause.association);
    if (cause.image[0]) formData.append("image", cause.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/causes/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const createCauseGallery = (image, causeId)=>{
    const formData = new FormData();
    if (image) formData.append("file", image);
    formData.append("cause", causeId);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/causes_gallery/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const createPrizeGallery = (image, prizeId)=>{
    const formData = new FormData();
    formData.append("prize", prizeId);
    if (image) formData.append("file", image);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/prize_gallery/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const deleteImageGallery = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prize_gallery/${id}`,
        method: "DELETE"
    });
};
const deleteImageGalleryRaffle = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/causes_gallery/${id}`,
        method: "DELETE"
    });
};
const getCausesCategories = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/cause_category/",
        method: "GET"
    });
};
const getPrizesCategories = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/prize_category/",
        method: "GET"
    });
};
const createNewRaffle = (raffle)=>{
    const formData = new FormData();
    formData.append("name", raffle.name);
    formData.append("description", raffle.description);
    formData.append("association", raffle.association);
    formData.append("delivery_type", raffle.delivery_type);
    formData.append("end_date", raffle.end_date);
    formData.append("price", raffle.price);
    if (typeof raffle.cause === "string") formData.append("cause", raffle.cause);
    if (typeof raffle.prize === "string") formData.append("prize", raffle.prize);
    formData.append("short_description", raffle.short_description);
    formData.append("start_date", raffle.start_date);
    formData.append("ticket_number", raffle.ticket_number);
    formData.append("ticket_price", raffle.ticket_price);
    if (raffle.banner[0]) formData.append("banner", raffle.banner[0]);
    if (raffle.image[0]) formData.append("image", raffle.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/raffles/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
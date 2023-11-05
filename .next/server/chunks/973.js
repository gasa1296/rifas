"use strict";
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseUrl = "https://www.api.rifaconcausa.org/";
const Api = (props)=>{
    const { endpoint , method , _data , tokenUse , params , urlParams  } = {
        method: "GET",
        _data: {},
        tokenUse: false,
        params: {},
        urlParams: "",
        ...props
    };
    const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: baseUrl,
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    });
    // Add a request interceptor
    instance.interceptors.request.use(async (config)=>{
        const token = await localStorage.getItem("sessionToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(error) {
        return Promise.reject(error);
    });
    return instance.request({
        data: Object.keys(_data).length !== 0 ? _data : undefined,
        params: Object.keys(params).length !== 0 ? params : undefined,
        url: urlParams ? `${endpoint}/${urlParams}` : endpoint
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ handleError)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const handleError = (error)=>{
    let message = "";
    let detail = error.response.data.detail;
    if (error.response.data.email) detail = error.response.data.email.join(" ");
    if (error.response.data === "Invalid Coupon") detail = "Cupon invalido";
    switch(error.response?.status){
        case 400:
            message = detail || "Sorry, bad request.";
            break;
        case 401:
            message = detail || "Sorry, but you do not have permission to access this page. Please login.";
            break;
        case 404:
            message = detail || "Sorry, but the page you're looking for doesn't exist. Please check the URL and try again.";
            break;
        case 500:
            message = detail || "Sorry, but there was a server error processing your request. Please try again later.";
            break;
        default:
            message = error?.response?.data?.message ?? error.message;
    }
    react_hot_toast__WEBPACK_IMPORTED_MODULE_0__.toast.error(message);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
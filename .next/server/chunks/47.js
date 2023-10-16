"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 1047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRaffleStore)
/* harmony export */ });
/* harmony import */ var _services_raffles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3843);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_raffles__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__]);
([_services_raffles__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useRaffleStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({
        isLoading: false,
        raffleFeature: null,
        testimonies: [],
        raffleDate: [],
        error: false,
        setTestimonies: async ()=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getTestimonies */ .cF)();
                set({
                    testimonies: data.results,
                    isLoading: false
                });
            } catch (error) {}
        },
        setRaffleFeature: async ()=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getRafflesFeatures */ .kw)();
                set({
                    raffleFeature: data.results[0] || null,
                    isLoading: false
                });
            } catch (error) {}
        },
        setRaffleDate: async ()=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getRafflesDate */ .sw)();
                set({
                    raffleDate: data.results,
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
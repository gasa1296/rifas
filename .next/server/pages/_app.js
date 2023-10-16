(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ validateAuthPath)
/* harmony export */ });
const validateAuthPath = (pathname, authorizated)=>{
    if (!authorizated) {
        if (pathname === "/donaciones" || pathname === "/rifas/crear_rifas" || pathname === "/rifas/[id]") {
            return true;
        }
    }
    return false;
};


/***/ }),

/***/ 2136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9403);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3571);
/* harmony import */ var _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2377);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);
/* harmony import */ var _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__, _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_7__]);
([_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__, _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function AuthWrapper({ children  }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { authenticated  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__/* .selectAuthState */ ._9);
    const getNotifications = (0,_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__/* .useNotificationStore */ .G)((state)=>state.getNotifications);
    const setTestimonies = (0,_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_7__/* .useRaffleStore */ .Z)((state)=>state.setTestimonies);
    const setRaffleFeature = (0,_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_7__/* .useRaffleStore */ .Z)((state)=>state.setRaffleFeature);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const getAuthSession = async ()=>{
        const token = await localStorage.getItem("sessionToken");
        if (!token) {
            return setLoading(false);
        }
        const { payload  } = await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__/* .ValidateSession */ .ib)({}));
        setTimeout(()=>setLoading(false), 200);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if ((0,_helper__WEBPACK_IMPORTED_MODULE_8__/* .validateAuthPath */ .D)(router.pathname, authenticated)) router.push("/");
    //eslint-disable-next-line
    }, [
        router.pathname,
        authenticated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .getCategories */ .CP)({}));
            dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .Raffles */ .H4)({}));
            setTestimonies();
            setRaffleFeature();
            getAuthSession();
        }, 200);
        return ()=>clearTimeout(timeoutId);
    //eslint-disable-next-line
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            if (authenticated) {
                getNotifications();
            }
        }, 200);
        return ()=>clearTimeout(timeoutId);
    //eslint-disable-next-line
    }, [
        authenticated
    ]);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: " "
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9377:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7987);
/* harmony import */ var _en_lang_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5207);
/* harmony import */ var _utils_getInitialLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7348);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    lng: (0,_utils_getInitialLanguage__WEBPACK_IMPORTED_MODULE_3__/* .getInitLanguage */ .h)(),
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: _en_lang_json__WEBPACK_IMPORTED_MODULE_2__
        },
        es: {
            translation: _en_lang_json__WEBPACK_IMPORTED_MODULE_2__
        }
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18next)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2540);
/* harmony import */ var _languages_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9377);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9224);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var _components_AuthWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2136);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5931);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languages_i18n__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _components_AuthWrapper__WEBPACK_IMPORTED_MODULE_7__]);
([_languages_i18n__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _components_AuthWrapper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AuthWrapper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9403);
/* harmony import */ var _slices_raffles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices_auth__WEBPACK_IMPORTED_MODULE_1__, _slices_raffles__WEBPACK_IMPORTED_MODULE_2__]);
([_slices_auth__WEBPACK_IMPORTED_MODULE_1__, _slices_raffles__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        auth: _slices_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        raffles: _slices_raffles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Theme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./src/theme/themes/dark.ts
const dark = {
    background: "#fff",
    primary: "#D88506",
    headerText: "#fff"
};
/* harmony default export */ const themes_dark = (dark);

;// CONCATENATED MODULE: ./src/theme/themes/light.ts
const light = {
    background: "#000",
    primary: "#D88506",
    headerText: "#fff"
};
/* harmony default export */ const themes_light = (light);

;// CONCATENATED MODULE: ./src/theme/themes/index.ts


const themes = {
    dark: themes_dark,
    light: themes_light
};
/* harmony default export */ const theme_themes = (themes);

;// CONCATENATED MODULE: ./src/theme/index.tsx




function Theme({ children  }) {
    const theme = "dark";
    const getThemes = (theme)=>{
        const currentTheme = theme_themes[theme] || theme_themes.dark;
        return currentTheme;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.ThemeProvider, {
        theme: getThemes(theme),
        children: children
    });
}


/***/ }),

/***/ 7348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getInitLanguage)
/* harmony export */ });
const getInitLanguage = ()=>{
    let INIT_LANGUAGE;
    const DEFAULT_LANGUAGE = "es";
    if (false) {}
    return DEFAULT_LANGUAGE;
};



/***/ }),

/***/ 5931:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 5207:
/***/ ((module) => {

"use strict";
module.exports = {"test":"hi"};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [542,843,701,47], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dc": () => (/* binding */ postEmail),
/* harmony export */   "KU": () => (/* binding */ loginFacebookUser),
/* harmony export */   "Lj": () => (/* binding */ updateUserProfile),
/* harmony export */   "a$": () => (/* binding */ registerUser),
/* harmony export */   "bx": () => (/* binding */ loginGoogleUser),
/* harmony export */   "et": () => (/* binding */ getUserProfile),
/* harmony export */   "g$": () => (/* binding */ refreshToken),
/* harmony export */   "iz": () => (/* binding */ postValidateAccount),
/* harmony export */   "l0": () => (/* binding */ updateAsociacion),
/* harmony export */   "pH": () => (/* binding */ loginUser),
/* harmony export */   "pw": () => (/* binding */ getMyAssociations),
/* harmony export */   "r": () => (/* binding */ createAsociacion)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseUrl = "https://www.api.rifaconcausa.org/" || 0;
const registerUser = (profile)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/profile/register_profile/",
        method: "POST",
        _data: {
            ...profile
        }
    });
};
const loginUser = (auth)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/auth/JWT",
        method: "POST",
        _data: {
            ...auth
        }
    });
};
const loginGoogleUser = (auth)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/profile/google/",
        method: "POST",
        _data: {
            ...auth
        }
    });
};
const loginFacebookUser = (auth)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/profile/facebook/",
        method: "POST",
        _data: {
            ...auth
        }
    });
};
const getUserProfile = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/profile/show_profile",
        method: "GET"
    });
};
const updateUserProfile = (profilePayload)=>{
    const formData = new FormData();
    formData.append("company_name", profilePayload.company_name);
    formData.append("full_name", profilePayload.full_name);
    formData.append("email", profilePayload.email);
    if (profilePayload.image[0]) formData.append("image", profilePayload.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + "/profile/update_profile/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const refreshToken = (refresh)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: "/auth/JWT/refresh/",
        method: "POST",
        _data: {
            refresh
        }
    });
};
const postEmail = (email)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/resert_password/`,
        method: "POST",
        _data: {
            email
        }
    });
};
const postValidateAccount = (code)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/activation/${code}/activate`,
        method: "GET"
    });
};
const getMyAssociations = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/`,
        method: "GET"
    });
};
const createAsociacion = (asociacion)=>{
    const formData = new FormData();
    formData.append("address", asociacion.address);
    formData.append("association_name", asociacion.association_name);
    formData.append("email", asociacion.email);
    formData.append("first_name", asociacion.first_name);
    formData.append("fiscal_address2", asociacion.fiscal_address2);
    formData.append("last_name", asociacion.last_name);
    formData.append("last_name2", asociacion.last_name2);
    formData.append("paypal", asociacion.paypal);
    formData.append("phone", asociacion.phone);
    formData.append("regime", asociacion.regime);
    formData.append("rfc", asociacion.rfc);
    formData.append("province", asociacion.province);
    formData.append("rfc2", asociacion.rfc2);
    formData.append("state", asociacion.state);
    formData.append("user", asociacion.user);
    formData.append("zip", asociacion.zip);
    if (asociacion.image[0]) formData.append("image", asociacion.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/associations/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const updateAsociacion = (asociacion)=>{
    const formData = new FormData();
    formData.append("address", asociacion.address);
    formData.append("association_name", asociacion.association_name);
    formData.append("email", asociacion.email);
    formData.append("first_name", asociacion.first_name);
    formData.append("fiscal_address2", asociacion.fiscal_address2);
    formData.append("last_name", asociacion.last_name);
    formData.append("last_name2", asociacion.last_name2);
    formData.append("paypal", asociacion.paypal);
    formData.append("phone", asociacion.phone);
    formData.append("regime", asociacion.regime);
    formData.append("rfc", asociacion.rfc);
    formData.append("province", asociacion.province);
    formData.append("rfc2", asociacion.rfc2);
    formData.append("state", asociacion.state);
    formData.append("user", asociacion.user);
    formData.append("zip", asociacion.zip);
    if (asociacion.image[0]) formData.append("image", asociacion.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/associations/${asociacion.id}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ setContacto),
/* harmony export */   "k": () => (/* binding */ getAllNotifications)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getAllNotifications = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/notifications/`,
        method: "GET"
    });
};
const setContacto = (payload)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/notifications/contact_form/`,
        method: "POST",
        _data: payload
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_register__WEBPACK_IMPORTED_MODULE_0__]);
_register__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ REGISTER_EXTRA_REDUCERS)
/* harmony export */ });
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks__WEBPACK_IMPORTED_MODULE_0__]);
_thunks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const REGISTER_EXTRA_REDUCERS = (builder)=>{
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .Register.pending */ .aX.pending, (state)=>{
        state.loading = true;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .Register.fulfilled */ .aX.fulfilled, (state, action)=>{
        if (action.payload) {
        //
        }
        state.loading = false;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .Login.pending */ .m3.pending, (state)=>{
        state.loading = true;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .Login.fulfilled */ .m3.fulfilled, (state, action)=>{
        if (action.payload) {
            state.authenticated = true;
            state.profile = action.payload;
        }
        state.loading = false;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .UpdateProfile.pending */ .Ot.pending, (state)=>{
        state.loading = true;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .UpdateProfile.fulfilled */ .Ot.fulfilled, (state, action)=>{
        if (action.payload) {
            state.authenticated = true;
            state.profile = action.payload;
        }
        state.loading = false;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .CreateAsociacion.pending */ .Ek.pending, (state)=>{
        state.loading = true;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .CreateAsociacion.fulfilled */ .Ek.fulfilled, (state, action)=>{
        if (action.payload) {
            state.profile = {
                ...state.profile,
                hasAssociation: true
            };
        }
        state.loading = false;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.$f),
/* harmony export */   "Ek": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.Ek),
/* harmony export */   "Ot": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.Ot),
/* harmony export */   "UF": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.UF),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_9": () => (/* binding */ selectAuthState),
/* harmony export */   "aX": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.aX),
/* harmony export */   "ib": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.ib),
/* harmony export */   "m3": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.m3),
/* harmony export */   "wt": () => (/* binding */ setLogout),
/* harmony export */   "yx": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.yx)
/* harmony export */ });
/* unused harmony export authSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extra_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9740);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_extra_reducers__WEBPACK_IMPORTED_MODULE_1__, _thunks__WEBPACK_IMPORTED_MODULE_2__]);
([_extra_reducers__WEBPACK_IMPORTED_MODULE_1__, _thunks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const initialState = {
    authenticated: false,
    loading: false,
    profile: null
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setLogout: (state)=>{
            state.authenticated = false;
            state.profile = null;
            localStorage.removeItem("sessionToken");
            localStorage.removeItem("sessionTokenRefresh");
        }
    },
    extraReducers: (builder)=>{
        (0,_extra_reducers__WEBPACK_IMPORTED_MODULE_1__/* .REGISTER_EXTRA_REDUCERS */ .s)(builder);
    }
});
const { setLogout  } = authSlice.actions;
const selectAuthState = (state)=>state.auth;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ UpdateAsociacion),
/* harmony export */   "Ek": () => (/* binding */ CreateAsociacion),
/* harmony export */   "Ot": () => (/* binding */ UpdateProfile),
/* harmony export */   "UF": () => (/* binding */ LoginGoogle),
/* harmony export */   "aX": () => (/* binding */ Register),
/* harmony export */   "ib": () => (/* binding */ ValidateSession),
/* harmony export */   "m3": () => (/* binding */ Login),
/* harmony export */   "yx": () => (/* binding */ LoginFacebook)
/* harmony export */ });
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9956);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_0__, _utils_handleError__WEBPACK_IMPORTED_MODULE_1__]);
([_services_auth__WEBPACK_IMPORTED_MODULE_0__, _utils_handleError__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const PREFIX = "auth";
const Register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/register`, async (Profile, thunkAPI)=>{
    try {
        const { data  } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .registerUser */ .a$)(Profile);
        /* await thunkAPI.dispatch(
        Login({ email: Profile.email, password: Profile.password })
      ); */ return data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const Login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/login`, async (auth, thunkAPI)=>{
    try {
        const { data  } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .loginUser */ .pH)(auth);
        await localStorage.setItem("sessionToken", data.access);
        await localStorage.setItem("sessionTokenRefresh", data.refresh);
        const profile = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getUserProfile */ .et)();
        const associations = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getMyAssociations */ .pw)();
        if (associations.data.results.length > 0) profile.data.hasAssociation = true;
        return {
            ...data,
            ...profile.data
        };
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const LoginGoogle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/login`, async (auth, thunkAPI)=>{
    try {
        const { data  } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .loginGoogleUser */ .bx)(auth);
        await localStorage.setItem("sessionToken", data.access);
        await localStorage.setItem("sessionTokenRefresh", data.refresh);
        const profile = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getUserProfile */ .et)();
        const associations = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getMyAssociations */ .pw)();
        if (associations.data.results.length > 0) profile.data.hasAssociation = true;
        return {
            ...data,
            ...profile.data
        };
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const LoginFacebook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/login`, async (auth, thunkAPI)=>{
    try {
        const { data  } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .loginFacebookUser */ .KU)(auth);
        await localStorage.setItem("sessionToken", data.access);
        await localStorage.setItem("sessionTokenRefresh", data.refresh);
        const profile = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getUserProfile */ .et)();
        const associations = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getMyAssociations */ .pw)();
        if (associations.data.results.length > 0) profile.data.hasAssociation = true;
        return {
            ...data,
            ...profile.data
        };
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const CreateAsociacion = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/create-asociacion`, async (Asociacion, thunkAPI)=>{
    try {
        const { auth  } = thunkAPI.getState();
        const { id  } = auth.profile || {
            id: null
        };
        Asociacion.user = id?.toString();
        const result = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .createAsociacion */ .r)(Asociacion);
        return {};
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const UpdateProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/update_profile`, async (ProfilePayload, thunkAPI)=>{
    try {
        const result = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .updateUserProfile */ .Lj)(ProfilePayload);
        const profile = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getUserProfile */ .et)();
        return profile.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const UpdateAsociacion = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/asociacion`, async (Asociacion, thunkAPI)=>{
    try {
        const { auth  } = thunkAPI.getState();
        const { id  } = auth.profile || {
            id: null
        };
        Asociacion.user = id?.toString();
        const result = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .updateAsociacion */ .l0)(Asociacion);
        return result.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const ValidateSession = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/login`, async (auth, thunkAPI)=>{
    try {
        const access = await localStorage.getItem("sessionToken");
        const refresh = await localStorage.getItem("sessionTokenRefresh");
        const refreshResponse = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .refreshToken */ .g$)(refresh || "");
        const profile = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getUserProfile */ .et)();
        const associations = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .getMyAssociations */ .pw)();
        if (associations.data.results.length > 0) profile.data.hasAssociation = true;
        localStorage.setItem("sessionToken", refreshResponse.data.access);
        const data = {
            refresh,
            access: refreshResponse.data.access
        };
        return {
            ...data,
            ...profile.data
        };
    } catch (error) {
        //handleError(error)
        await localStorage.removeItem("sessionToken");
        await localStorage.removeItem("sessionTokenRefresh");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useNotificationStore)
/* harmony export */ });
/* harmony import */ var _services_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7998);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_notification__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__]);
([_services_notification__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useNotificationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({
        isLoading: false,
        notifications: [],
        notificationsSize: 0,
        error: false,
        getNotifications: async ()=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_notification__WEBPACK_IMPORTED_MODULE_0__/* .getAllNotifications */ .k)();
            set({
                notifications: data,
                notificationsSize: data.length,
                isLoading: false
            });
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
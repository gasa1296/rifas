"use strict";
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 3509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _raffles__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _raffles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_raffles__WEBPACK_IMPORTED_MODULE_0__]);
_raffles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ RAFFLES_EXTRA_REDUCERS)
/* harmony export */ });
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks__WEBPACK_IMPORTED_MODULE_0__]);
_thunks__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const RAFFLES_EXTRA_REDUCERS = (builder)=>{
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .Raffles.pending */ .H4.pending, (state)=>{
        state.loading = true;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .Raffles.fulfilled */ .H4.fulfilled, (state, action)=>{
        if (action.payload) {
            state.raffles = action.payload;
        }
        state.loading = false;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .GetAssociations.fulfilled */ .f_.fulfilled, (state, action)=>{
        if (action.payload) {
            state.associations = action.payload;
        }
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .createRaffle.pending */ .ni.pending, (state)=>{
        state.loading = true;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .createRaffle.fulfilled */ .ni.fulfilled, (state, action)=>{
        state.loading = false;
    });
    builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_0__/* .validateCoupon.fulfilled */ .hD.fulfilled, (state, action)=>{
        if (action.payload) {
            state.coupon = action.payload;
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.CP),
/* harmony export */   "FL": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.FL),
/* harmony export */   "H4": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.H4),
/* harmony export */   "RS": () => (/* binding */ setPrizesCategories),
/* harmony export */   "S2": () => (/* binding */ setDonationsForm2),
/* harmony export */   "VB": () => (/* binding */ selectRaffleState),
/* harmony export */   "Z8": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.Z8),
/* harmony export */   "ZG": () => (/* binding */ setReserveTime),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ZX": () => (/* binding */ setSelectedTicket),
/* harmony export */   "_Z": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__._Z),
/* harmony export */   "_b": () => (/* binding */ resetBuyRaffle),
/* harmony export */   "a3": () => (/* binding */ setDonationsForm1),
/* harmony export */   "cC": () => (/* binding */ setSelectedPaymentMethod),
/* harmony export */   "f_": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.f_),
/* harmony export */   "hD": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.hD),
/* harmony export */   "jM": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.jM),
/* harmony export */   "k": () => (/* binding */ setCausesCategories),
/* harmony export */   "ni": () => (/* reexport safe */ _thunks__WEBPACK_IMPORTED_MODULE_2__.ni),
/* harmony export */   "oR": () => (/* binding */ setRaffle),
/* harmony export */   "we": () => (/* binding */ setSelectedWallet)
/* harmony export */ });
/* unused harmony export rafflesSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extra_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3509);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_extra_reducers__WEBPACK_IMPORTED_MODULE_1__, _thunks__WEBPACK_IMPORTED_MODULE_2__]);
([_extra_reducers__WEBPACK_IMPORTED_MODULE_1__, _thunks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const initialState = {
    raffles: [],
    raffle: null,
    loading: true,
    donationForm1: {},
    donationFrom2: {},
    associations: [],
    causesCategories: [],
    prizesCategories: [],
    selectedTickets: [],
    selectedPaymentMethod: null,
    selectedWallet: false,
    coupon: null,
    reserveTime: 600
};
const rafflesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "raffles",
    initialState,
    reducers: {
        setRaffle: (state, action)=>{
            state.raffle = action.payload;
        },
        setDonationsForm1: (state, action)=>{
            state.donationForm1 = action.payload;
        },
        setDonationsForm2: (state, action)=>{
            state.donationFrom2 = action.payload;
        },
        setCausesCategories: (state, action)=>{
            state.causesCategories = action.payload;
        },
        setPrizesCategories: (state, action)=>{
            state.prizesCategories = action.payload;
        },
        setSelectedTicket: (state, action)=>{
            state.selectedTickets = action.payload;
        },
        setSelectedPaymentMethod: (state, action)=>{
            state.selectedPaymentMethod = action.payload;
        },
        setSelectedWallet: (state, action)=>{
            state.selectedWallet = action.payload;
        },
        setReserveTime: (state, action)=>{
            state.reserveTime = action.payload;
        },
        resetBuyRaffle: (state)=>{
            state.selectedTickets = [];
            state.selectedPaymentMethod = null;
            state.selectedWallet = false;
            state.coupon = null;
            state.raffle = null;
            state.reserveTime = 600;
        }
    },
    extraReducers: (builder)=>{
        (0,_extra_reducers__WEBPACK_IMPORTED_MODULE_1__/* .RAFFLES_EXTRA_REDUCERS */ .C)(builder);
    }
});
const { setRaffle , setReserveTime , setSelectedTicket , setDonationsForm1 , setDonationsForm2 , setPrizesCategories , setCausesCategories , setSelectedPaymentMethod , setSelectedWallet , resetBuyRaffle  } = rafflesSlice.actions;
const selectRaffleState = (state)=>state.raffles;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rafflesSlice.reducer);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "FL": () => (/* binding */ createRafflesPrize),
/* harmony export */   "H4": () => (/* binding */ Raffles),
/* harmony export */   "Z8": () => (/* binding */ createRafflesCause),
/* harmony export */   "_Z": () => (/* binding */ Donations),
/* harmony export */   "f_": () => (/* binding */ GetAssociations),
/* harmony export */   "hD": () => (/* binding */ validateCoupon),
/* harmony export */   "jM": () => (/* binding */ GetRaffle),
/* harmony export */   "ni": () => (/* binding */ createRaffle)
/* harmony export */ });
/* harmony import */ var _services_raffles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3843);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9956);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_raffles__WEBPACK_IMPORTED_MODULE_0__, _utils_handleError__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__]);
([_services_raffles__WEBPACK_IMPORTED_MODULE_0__, _utils_handleError__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "raffles";
const Raffles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/raffles`, async (Profile, thunkAPI)=>{
    try {
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getRaffles */ .V)();
        return result.data.results;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const GetAssociations = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/associations`, async (Profile, thunkAPI)=>{
    try {
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getAssociationsApproveds */ .fM)();
        return result.data.results;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const GetRaffle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/raffle`, async (raffleId, thunkAPI)=>{
    try {
        thunkAPI.dispatch((0,___WEBPACK_IMPORTED_MODULE_3__/* .setRaffle */ .oR)(null));
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getRaffle */ .tE)(raffleId);
        const raffleTickets = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getRaffleTickets */ .bl)(raffleId);
        const prize = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getPrizebyId */ .DK)(result.data.prize);
        thunkAPI.dispatch((0,___WEBPACK_IMPORTED_MODULE_3__/* .setRaffle */ .oR)({
            ...result.data,
            ticketUnavailable: raffleTickets.data,
            prizeData: prize.data
        }));
        return result.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const Donations = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/donations`, async (donation, thunkAPI)=>{
    try {
        const { raffles  } = thunkAPI.getState();
        const dataDonation = {
            ...raffles.donationForm1,
            ...raffles.donationFrom2
        };
        dataDonation.status = dataDonation.status === "on" ? 1 : 0;
        dataDonation.association = Number(dataDonation.association);
        if (dataDonation.association === 0 || dataDonation.association === undefined) delete dataDonation.association;
        dataDonation.category = Number(dataDonation.category);
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createDonations */ .Bk)(dataDonation);
        const petitions = [];
        dataDonation.image.map((gallery)=>petitions.push((0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createPrizeGallery */ .J2)(gallery, result.data.id)));
        const resultGallery = await Promise.all(petitions);
        await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .updateGalleryPrize */ .cW)(result.data.id, {
            gallery: resultGallery.map((gallery)=>gallery.data.id),
            name: dataDonation.name,
            value: dataDonation.value
        });
        return result.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const createRafflesCause = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/causes`, async (cause, thunkAPI)=>{
    try {
        cause.categories = [
            Number(cause.categories)
        ];
        cause.association = Number(cause.association);
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createCause */ .Wi)(cause);
        const petitions = [];
        if (cause.image && cause.image.length > 1) {
            cause.image.map((gallery)=>petitions.push((0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createCauseGallery */ .V2)(gallery, result.data.id)));
            const resultGallery = await Promise.all(petitions);
            await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .updateGalleryCause */ .Uj)(result.data.id, {
                gallery: resultGallery.map((gallery)=>gallery.data.id),
                goal: cause.goal,
                association: cause.association,
                name: cause.name,
                categories: cause.categories
            });
        }
        return result.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const createRafflesPrize = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/prizes`, async (prize, thunkAPI)=>{
    try {
        prize.status = prize.status === "on" ? 1 : 0;
        prize.association = Number(prize.association);
        if (prize.association === 0 || prize.association === undefined) delete prize.association;
        prize.category = Number(prize.category);
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createDonations */ .Bk)(prize);
        if (prize.image && prize.image.length > 1) {
            const petitions = [];
            prize.image.map((gallery)=>petitions.push((0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createPrizeGallery */ .J2)(gallery, result.data.id)));
            const resultGallery = await Promise.all(petitions);
            await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .updateGalleryPrize */ .cW)(result.data.id, {
                gallery: resultGallery.map((gallery)=>gallery.data.id),
                name: prize.name,
                value: prize.value
            });
        }
        return result.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const getCategories = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/prizes`, async (prize, thunkAPI)=>{
    try {
        const causesResult = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getCausesCategories */ .E$)();
        const prizesResult = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .getPrizesCategories */ .GS)();
        thunkAPI.dispatch((0,___WEBPACK_IMPORTED_MODULE_3__/* .setCausesCategories */ .k)(causesResult.data.results));
        thunkAPI.dispatch((0,___WEBPACK_IMPORTED_MODULE_3__/* .setPrizesCategories */ .RS)(prizesResult.data.results));
        return {};
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const createRaffle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/create-raffles`, async (raffle, thunkAPI)=>{
    try {
        const payload = {
            ...raffle
        };
        if (typeof payload?.prize === "object") payload.prize = payload?.prize?.id.toString();
        if (typeof payload?.cause === "object") payload.cause = payload?.cause?.id.toString();
        const raffleResult = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .createNewRaffle */ .p4)(payload);
        return raffleResult.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});
const validateCoupon = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(`${PREFIX}/validate-coupon`, async (coupon, thunkAPI)=>{
    try {
        const { raffles  } = thunkAPI.getState();
        const result = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_0__/* .validateApplyCoupon */ .fk)(coupon, raffles?.raffle?.id || 0);
        return result.data;
    } catch (error) {
        (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S)(error);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
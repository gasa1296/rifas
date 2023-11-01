"use strict";
exports.id = 424;
exports.ids = [424];
exports.modules = {

/***/ 424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function Tabs({ tabs , hasHeader =true  }) {
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const nextStep = (customStep)=>{
        if (step < tabs.length - 1) setStep(customStep || step + 1);
    };
    const backStep = (customStep)=>{
        if (step > 0) setStep(customStep || step - 1);
    };
    const initialStep = ()=>setStep(0);
    const renderComponent = ()=>{
        const Component = tabs[step].Component;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            nextStep: nextStep,
            backStep: backStep,
            initialStep: initialStep
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-0 mx-md-4 mt-4",
        children: [
            hasHeader && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-bottom  position-relative ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " title-tabs3 d-flex align-items-center position-absolute  ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdKeyboardArrowLeft, {
                                size: 30,
                                className: "mt-1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: "m-0  d-none d-md-block text",
                                onClick: ()=>router.push("/"),
                                children: "Volver al inicio"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: " d-flex flex-column flex-lg-row  list-unstyled align-items-center justify-content-center",
                        children: tabs.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `mx-3 opacity-75  ${index < step ? "title-tabs  " : "Title-tabs2 opacity-50 "} fs-5 d-flex align-items-center  `,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheck, {
                                        size: 17
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "m-0 px-2",
                                        children: [
                                            "0",
                                            index + 1,
                                            ".",
                                            tab.label
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            renderComponent()
        ]
    });
}


/***/ })

};
;
"use strict";
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logoRifas.106db5b6.svg","height":114,"width":130,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 6764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputCaptchap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);



function InputCaptchap({ register , label , name , required , setValue , error  }) {
    const [captchaResponse, setCaptchaResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    function handleCaptcha(response) {
        setCaptchaResponse(response);
        setValue(name, response);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: ` form-check-label title-form-generator  ${error && "text-danger "}`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
                sitekey: "6Lc8zg0oAAAAAHFQmcPdU8SLs86YvXWMfYTjEvaM" || 0,
                onChange: handleCaptcha
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: "text",
                ...register(name, {
                    required
                }),
                className: "d-none"
            })
        ]
    });
}


/***/ }),

/***/ 9829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputText({ register , label , name , required , error  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: "checkbox",
                ...register(name, {
                    required
                }),
                className: ` form-check-input ${error && "border-danger"} fs-5`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `ms-2 form-check-label title-form-generator  ${error && "text-danger "}`,
                htmlFor: name,
                children: label
            })
        ]
    });
}


/***/ }),

/***/ 6140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputCustom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputCustom(props) {
    const Component = props.Component;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...props
    });
}


/***/ }),

/***/ 5343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputDate({ register , label , name , required , error , minDate ="" , watch  }) {
    const values = watch();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator my-2`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-5 col-md-7 d-md-flex d-flex ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "datetime-local",
                        min: new Date(values[minDate] || null).toISOString().slice(0, 16),
                        className: `w-100 form-control my-2 fs-5 m-0 ${error && "border-danger "}`,
                        ...register(name, {
                            required
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 3844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputEmail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputEmail({ register , label , name , required , error  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: "email",
                ...register(name, {
                    required
                }),
                className: `w-100 form-control my-2 fs-5 ${error && "border-danger "}`
            })
        ]
    });
}


/***/ }),

/***/ 4743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputFile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _helper__WEBPACK_IMPORTED_MODULE_5__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _helper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function InputFile({ label , name , error , setValue , maxFile , subLabel , watch  }) {
    const values = watch();
    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [previews, setPreviews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const MAX_UPLOAD_ITEMS = maxFile || 5;
    const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const onChangeFile = (event)=>{
        const { files: inputFiles  } = event.target;
        if (!inputFiles?.length || !inputFiles) return;
        const file = inputFiles[0];
        if (previews?.length === MAX_UPLOAD_ITEMS) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(`Solo puedes subir ${MAX_UPLOAD_ITEMS} ${MAX_UPLOAD_ITEMS > 1 ? "fotos" : "foto"} `);
            return;
        }
        const preview = URL.createObjectURL(file);
        setValue(name, [
            ...files,
            file
        ]);
        setFiles((prev)=>[
                ...prev,
                file
            ]);
        setPreviews((prev)=>[
                ...prev,
                preview
            ]);
    };
    const onDelete = (index)=>{
        setValue(name, files.filter((_, key)=>key !== index));
        setPreviews((prev)=>prev.filter((_, key)=>key !== index));
        setFiles((prev)=>prev.filter((_, key)=>key !== index));
    };
    const handleParseFiles = async ()=>{
        if (!values[name]) return;
        const files = await (0,_helper__WEBPACK_IMPORTED_MODULE_5__/* .handleGetFiles */ .wf)(values[name]);
        setFiles(files);
        setValue(name, files);
        const previews = values[name].map((image)=>(0,_helper__WEBPACK_IMPORTED_MODULE_5__/* .isHttp */ .ek)(image) ? image : `${"https://gasa1296.pythonanywhere.com"}${image}`);
        setPreviews(previews);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            handleParseFiles();
        }, 200);
        return ()=>clearTimeout(timeoutId);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator  mt-2`,
                htmlFor: name,
                children: label
            }),
            subLabel === "" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "  fs-6 mb-0",
                children: subLabel
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                accept: "image/*",
                type: "file",
                onChange: (event)=>onChangeFile(event),
                style: {
                    display: "none"
                },
                ref: fileRef
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 w-100 d-flex flex-wrap mb-4",
                children: [
                    previews.map((preview, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "me-2 mb-2 position-relative ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    width: 150,
                                    height: 150,
                                    style: {
                                        objectFit: "cover"
                                    },
                                    className: "rounded",
                                    src: preview,
                                    alt: "preview"
                                }, index),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        onDelete(index);
                                    },
                                    className: "btn position-absolute top-0 end-0  mt-2 me-2 p-1 pt-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {
                                        size: 20,
                                        color: "white"
                                    })
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: " bg-white",
                        style: {
                            width: "150px",
                            height: "150px",
                            borderStyle: "dashed"
                        },
                        onClick: (e)=>{
                            e.preventDefault();
                            fileRef.current?.click();
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCamera, {
                                size: 40,
                                color: "#313131"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " fs-6",
                                children: "Agrega o arrastra tus fotos aqu\xed"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputNumber)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputNumber({ register , label , name , required , setValue , error , watch , customChange  }) {
    const values = watch();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: "number",
                ...register(name, {
                    required
                }),
                className: `w-100 form-control my-2 fs-5 ${error && "border-danger "}`,
                onChange: (e)=>{
                    setValue(name, e.target.value);
                    customChange && customChange({
                        setValue,
                        newValue: e.target.value,
                        values
                    });
                }
            })
        ]
    });
}


/***/ }),

/***/ 2064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputPassword({ register , label , name , required , error , validate =()=>{} , watch  }) {
    const values = watch();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: "password",
                ...register(name, {
                    required,
                    validate: (value)=>validate(value, values)
                }),
                className: `w-100 form-control my-2 fs-5  ${error && "border-danger "}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-danger ",
                children: [
                    error?.message,
                    " "
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputRadioButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputRadioButton({ register , label , name , required , error , options , disabledStyle  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator`,
                htmlFor: name,
                children: label
            }),
            disabledStyle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check",
                children: options?.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "form-check-input",
                                value: option.value,
                                ...register(name, {
                                    required
                                }),
                                type: "radio",
                                name: name,
                                id: `${name}${index + 1}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-check-label",
                                htmlFor: `${name}${index + 1}`,
                                children: option.label
                            })
                        ]
                    }, index))
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex flex-wrap my-3",
                children: options?.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " btn btn-outline-secondary opacity-75  d-flex align-items-center me-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: option.value,
                                ...register(name, {
                                    required
                                }),
                                name: name,
                                className: "form-check-input mt-0",
                                type: "radio",
                                id: `${name}${index + 1}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-gray m-0 ms-2 ",
                                htmlFor: `${name}${index + 1}`,
                                children: option.label
                            })
                        ]
                    }, index))
            })
        ]
    });
}


/***/ }),

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputRange)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2037);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_2__);



const STEP = 1;
const MIN = 0;
function InputRange({ label , name , error , maxRange =10 , setValue , register , required , customChange , watch  }) {
    const values = watch();
    const MAX = maxRange;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `form-check-label fw-bold ps-2 fs-6 my-2  ${error && "text-danger "}`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_range__WEBPACK_IMPORTED_MODULE_2__.Range, {
                    ...register(name, {
                        required
                    }),
                    values: [
                        values[name]
                    ] || 0,
                    onChange: (valuesChange)=>{
                        setValue(name, valuesChange[0]);
                        customChange({
                            setValue,
                            newValue: valuesChange[0],
                            values
                        });
                    },
                    step: STEP,
                    min: MIN,
                    max: MAX,
                    renderTrack: ({ props , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onMouseDown: props.onMouseDown,
                            onTouchStart: props.onTouchStart,
                            style: {
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: props.ref,
                                style: {
                                    height: "5px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: (0,react_range__WEBPACK_IMPORTED_MODULE_2__.getTrackBackground)({
                                        values: [
                                            values[name]
                                        ] || 0,
                                        colors: [
                                            "#C3286D",
                                            "#ccc"
                                        ],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                },
                                children: children
                            })
                        }),
                    renderThumb: ({ props , isDragged  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ...props,
                            style: {
                                ...props.style,
                                height: "42px",
                                width: "50px",
                                borderRadius: "4px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA",
                                color: isDragged ? "#C3286D" : "inherit"
                            },
                            children: values[name] || [
                                0
                            ]
                        })
                })
            })
        ]
    });
}


/***/ }),

/***/ 6597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InputSelectItems)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/assets/img/logoRifas.svg
var logoRifas = __webpack_require__(9037);
// EXTERNAL MODULE: ./src/utils/ParseNumber.ts
var ParseNumber = __webpack_require__(6843);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/FormGenerator/Components/SelectItems.tsx




const Cause = ({ selectedItem , resetValue  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "m-0 mt-2",
                children: "Causa seleccionada"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex mt-2  ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: selectedItem.image || logoRifas/* default */.Z,
                        alt: "logorifas",
                        width: 150,
                        height: 150,
                        style: {
                            objectFit: "cover"
                        },
                        className: "rounded"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ms-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "lh-1  fw-bold",
                                children: selectedItem.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "m-0 lh-sm",
                                children: selectedItem?.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "m-0 lh-sm pt-1",
                                children: [
                                    "Monto a recaudar:",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "fw-bold",
                                        children: [
                                            "$",
                                            (0,ParseNumber/* parseNumber */.p)(selectedItem?.goal)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-pink  mt-3  mb-4",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    resetValue();
                                },
                                children: "Cambiar causa"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Prize = ({ selectedItem , resetValue  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "m-0 mt-2",
                children: "Premio seleccionado"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex mt-2  ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: selectedItem.image || logoRifas/* default */.Z,
                        alt: "logorifas2",
                        width: 150,
                        height: 150,
                        style: {
                            objectFit: "cover"
                        },
                        className: "rounded"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ms-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "lh-1 fw-bold ",
                                children: selectedItem.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "m-0 lh-sm",
                                children: selectedItem?.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "m-0 lh-sm pt-1",
                                children: [
                                    "Monto a recaudar:",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "fw-bold",
                                        children: [
                                            "$",
                                            (0,ParseNumber/* parseNumber */.p)(Number(selectedItem?.value))
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-pink  mt-3  mb-4",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    resetValue();
                                },
                                children: "Cambiar premio"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/FormGenerator/Fields/InputSelectItems.tsx



const types = {
    cause: Cause,
    prize: Prize
};
function InputSelectItems({ register , label , name , required , error , ModalComponent , createTitle , selectTitle , setValue  }) {
    const [show, setShow] = (0,external_react_.useState)(false);
    const [activeSelect, setActiveSelect] = (0,external_react_.useState)(false);
    const [selected, setSelected] = (0,external_react_.useState)(null);
    const SelectedComponent = types[selected?.type || "cause"];
    const handleClose = ()=>{
        setShow(false);
        setActiveSelect(false);
    };
    const handleShow = (e)=>{
        e.preventDefault();
        setShow(true);
    };
    const handleSubmit = (data)=>{
        setSelected(data);
        setValue(name, data);
        setShow(false);
    };
    const resetValue = ()=>{
        setSelected(null);
        setValue(name, null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: `${error && "text-danger"} opacity-75 mt-3 fs-4 fw-medium `,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: name,
                name: name,
                type: "text",
                ...register(name, {
                    required
                }),
                className: "d-none"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalComponent, {
                activeSelect: activeSelect,
                handleSubmit: handleSubmit,
                show: show,
                handleClose: handleClose
            }),
            selected ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedComponent, {
                selectedItem: selected,
                resetValue: resetValue
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-lg-flex col-12  m-auto mb-3 mt-2  ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: (e)=>{
                            handleShow(e);
                            setActiveSelect(true);
                        },
                        className: " btn btn-pink col-12 col-lg-6 mt-lg-0  my-4 ",
                        children: selectTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: " mx-0 mx-lg-2 btn btn-withe  col-12 col-lg-6 mt-lg-0 my-0 my-lg-4",
                        onClick: handleShow,
                        children: createTitle
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputSliser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2950);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_3__);




function InputSliser({ label , name , error , setValue , register , required , marks , customChange , watch  }) {
    const values = watch();
    const handleChange = (value)=>{
        setValue(name, marks[value]);
        customChange({
            setValue,
            newValue: marks[value],
            values
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `title-form-generator ${error && "text-danger "}`,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-4 my-3 mb-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_slider__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...register(name, {
                        required
                    }),
                    min: 0,
                    max: Object.keys(marks).length - 1,
                    marks: marks,
                    onChange: handleChange
                })
            })
        ]
    });
}


/***/ }),

/***/ 5938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputSubtitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputSubtitle({ register , label , name , required , error , subLabel  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "opacity-75 mt-3 fs-4 fw-medium ",
                children: label
            }),
            subLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " subtitle-form-generator mb-0 ",
                children: subLabel
            })
        ]
    });
}


/***/ }),

/***/ 9521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputText({ register , label , name , required , error , subLabel , disabled  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator`,
                htmlFor: name,
                children: label
            }),
            subLabel === "" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: ` text-secondary fs-6 mb-0 ${error && "text-danger"}`,
                children: subLabel
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                disabled: disabled,
                type: "text",
                ...register(name, {
                    required
                }),
                className: `w-100 form-control my-2 fs-5 m-0 ${error && "border-danger "}`
            })
        ]
    });
}


/***/ }),

/***/ 8168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputTextSlug)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputTextSlug({ register , label , name , required , error , subLabel , disabled  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "d-md-flex d-block align-items-center justify-content-cneter",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator `,
                htmlFor: name,
                children: label
            }),
            subLabel === "" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: ` text-secondary fs-6 mb-0 pe-2 ${error && "text-danger"}`,
                children: subLabel
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                disabled: disabled,
                type: "text",
                ...register(name, {
                    required
                }),
                className: `w-100 form-control my-2 fs-5 m-0 ${error && "border-danger "}`
            })
        ]
    });
}


/***/ }),

/***/ 7599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputTextarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputTextarea({ register , label , name , required , error , subLabel  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator`,
                htmlFor: name,
                children: label
            }),
            subLabel === "" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: ` text-secondary fs-6 mb-0 ${error && "text-danger"}`,
                children: subLabel
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ...register(name, {
                    required
                }),
                className: `w-100 form-control my-2 fs-5 ${error && "border-danger "}`,
                id: name,
                name: name,
                cols: 5,
                rows: 5
            })
        ]
    });
}


/***/ }),

/***/ 3505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputTitle({ register , label , name , required , error  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "  fw-medium fs-3",
            style: {
                color: "#C3286D"
            },
            children: label
        })
    });
}


/***/ }),

/***/ 211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InputSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputSelect({ register , label , name , required , error , options , setValue , customChange , watch  }) {
    const values = watch();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `${error && "text-danger"} title-form-generator `,
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                ...register(name, {
                    required
                }),
                className: `form-select form-select-md my-2 fs-5 w-100 ${error && "border-danger "}`,
                onChange: (e)=>{
                    setValue(name, e.target.value);
                    customChange && customChange({
                        setValue,
                        newValue: e.target.value,
                        values
                    });
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        selected: true
                    }),
                    options?.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: option.value,
                            children: option.label
                        }, index))
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K$": () => (/* binding */ FieldComponents),
/* harmony export */   "O4": () => (/* binding */ getDefaultValues),
/* harmony export */   "ek": () => (/* binding */ isHttp),
/* harmony export */   "wf": () => (/* binding */ handleGetFiles)
/* harmony export */ });
/* harmony import */ var _Fields_InputText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9521);
/* harmony import */ var _Fields_InputEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3844);
/* harmony import */ var _Fields_InputCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9829);
/* harmony import */ var _Fields_InputPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2064);
/* harmony import */ var _Fields_InputNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5342);
/* harmony import */ var _Fields_InputTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3505);
/* harmony import */ var _Fields_InputRadioButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3000);
/* harmony import */ var _Fields_inputSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(211);
/* harmony import */ var _Fields_InputFile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4743);
/* harmony import */ var _Fields_InputTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7599);
/* harmony import */ var _Fields_InputSelectItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6597);
/* harmony import */ var _Fields_InputSubtitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5938);
/* harmony import */ var _Fields_InputSliser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2536);
/* harmony import */ var _Fields_InputDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5343);
/* harmony import */ var _Fields_InputCustom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6140);
/* harmony import */ var _Fields_InputRange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(140);
/* harmony import */ var _Fields_Captchap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6764);
/* harmony import */ var _Fields_InputTextSlug__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8168);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Fields_InputFile__WEBPACK_IMPORTED_MODULE_8__]);
_Fields_InputFile__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const getDefaultValues = (fields)=>{
    const defaultValues = {};
    fields.map((field)=>{
        if (field.type !== "title" && field.type !== "custom" && field.type !== "subtitle") defaultValues[field.name] = field.default || "";
    });
    return defaultValues;
};
const FieldComponents = {
    textSlug: _Fields_InputTextSlug__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
    text: _Fields_InputText__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    email: _Fields_InputEmail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    checkbox: _Fields_InputCheckbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    password: _Fields_InputPassword__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    number: _Fields_InputNumber__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    title: _Fields_InputTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    radioButton: _Fields_InputRadioButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    select: _Fields_inputSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    file: _Fields_InputFile__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    textarea: _Fields_InputTextarea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    selectItems: _Fields_InputSelectItems__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    subtitle: _Fields_InputSubtitle__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    sliser: _Fields_InputSliser__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    custom: _Fields_InputCustom__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    date: _Fields_InputDate__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    range: _Fields_InputRange__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    captchap: _Fields_Captchap__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z
};
function isHttp(url) {
    return url?.startsWith("http://") || url?.startsWith("https://");
}
async function urlToFile(url, mimeType) {
    const httpUrl = isHttp(url) ? url : `${"https://gasa1296.pythonanywhere.com"}${url}`;
    const res = await fetch(httpUrl);
    const buf = await res.arrayBuffer();
    const file = new File([
        buf
    ], url, {
        type: mimeType
    });
    return file;
}
const handleGetFiles = async (urls)=>{
    return new Promise((resolve, reject)=>{
        const promiseArray = urls?.map((url)=>urlToFile(url, "image/png"));
        Promise.all(promiseArray).then((fileArray)=>{
            resolve(fileArray);
        }).catch((err)=>reject(err));
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ parseNumber)
/* harmony export */ });
const parseNumber = (number)=>{
    number = Number(number);
    const options = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    };
    return number.toLocaleString("es-ES", options); //
};


/***/ })

};
;
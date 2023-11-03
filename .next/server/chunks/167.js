"use strict";
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 1545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateRifaDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9818);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9403);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Registro_CrearAsociacion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5616);
/* harmony import */ var _components_Rifas_ConfiguraRifa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8644);
/* harmony import */ var _components_Rifas_DefinicionRifa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3316);
/* harmony import */ var _components_Rifas_ConfirmacionRifa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6968);
/* harmony import */ var _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4568);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_raffles__WEBPACK_IMPORTED_MODULE_7__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_8__, _components_Registro_CrearAsociacion__WEBPACK_IMPORTED_MODULE_10__, _components_Rifas_ConfiguraRifa__WEBPACK_IMPORTED_MODULE_11__, _components_Rifas_DefinicionRifa__WEBPACK_IMPORTED_MODULE_12__, _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_14__]);
([_store_slices_raffles__WEBPACK_IMPORTED_MODULE_7__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_8__, _components_Registro_CrearAsociacion__WEBPACK_IMPORTED_MODULE_10__, _components_Rifas_ConfiguraRifa__WEBPACK_IMPORTED_MODULE_11__, _components_Rifas_DefinicionRifa__WEBPACK_IMPORTED_MODULE_12__, _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
const StepIcon = (step, currentStep)=>{
    if (step === currentStep) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdKeyboardArrowUp, {
        size: 30
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdKeyboardArrowDown, {
        size: 30
    });
};
function CreateRifaDashboard({ nextStep , backStep , disable , handleClose  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [raffle, setRaffle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const getRaffle = (0,_store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_14__/* .useRaffleStoreDashboard */ .p)((state)=>state.getRaffle);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { profile  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_8__/* .selectAuthState */ ._9);
    const canCreateRaffle = profile?.role === 1;
    const handleChangeRaffle = (data)=>{
        setRaffle({
            ...raffle,
            ...data
        });
        setStep((prev)=>prev + 1);
    };
    const handleSubmit = async ()=>{
        const { payload  } = await dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_7__/* .createRaffle */ .ni)(raffle));
        await getRaffle(router.query.id);
        handleClose();
        if (!payload) setStep(1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (step === 3) handleSubmit();
    //eslint-disable-next-line
    }, [
        step
    ]);
    const resetRaffle = ()=>{
        setStep(1);
        setRaffle({});
    };
    if (!canCreateRaffle && !disable) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Registro_CrearAsociacion__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "  bg-white mb-3 col-12 col-lg-8 m-auto  ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " d-flex justify-content-between align-items-center    ",
                    onClick: ()=>{},
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: ` fs-4 text-light  fondo-crear-rifa  d-flex justify-content-between align-item-center  ${step === 1 ? " opacity-50 " : " opacity-100  "}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-fondo-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillDollarCircle, {
                                        size: 25,
                                        className: "me-2"
                                    }),
                                    "Configura el premio tu rifa"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "m-0",
                                children: StepIcon(step, 1)
                            })
                        ]
                    })
                }),
                step === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Rifas_ConfiguraRifa__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    handleChangeRaffle: handleChangeRaffle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " d-flex justify-content-between align-items-center  mt-4  ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: ` fs-4  text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${step === 2 ? " opacity-50 " : " opacity-100  "}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineClipboardList, {}),
                                    " Define los datos de tu rifa"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "m-0",
                                children: StepIcon(step, 2)
                            })
                        ]
                    })
                }),
                step === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Rifas_DefinicionRifa__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    handleChangeRaffle: handleChangeRaffle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " d-flex justify-content-around align-items-center   mt-4   ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: ` fs-4 text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${step === 3 ? " opacity-50 " : " opacity-100  "}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHandHoldingHeart, {}),
                                    " Confirmaci\xf3n de la rifa"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "m-0",
                                children: StepIcon(step, 3)
                            })
                        ]
                    })
                }),
                step === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Rifas_ConfirmacionRifa__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    resetRaffle: resetRaffle,
                    raffle: raffle
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function DashboardTable({ head , options , Component , actions , disableFilter , title , pagination , getRequest , loading  }) {
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        triggerOnce: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            pagination && getRequest && getRequest(pagination);
        }
    //eslint-disable-next-line
    }, [
        inView
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pt-3 background-dashboard mt-3 ",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-3 ps-3 details-Cartera ",
                children: title
            }),
            !disableFilter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-block d-md-flex justify-content-between align-items-center border-1   mb-4  px-3 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex align-items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "me-2",
                                children: "Fechas "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "datetime-local",
                                className: `w-25 form-control my-2 fs-5 m-0 `
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "datetime-local",
                                className: `w-25 form-control my-2 fs-5 m-0 `
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-group  w-75  border-input ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Buscar Rifas "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-btn-outline-light  ",
                                type: "button",
                                id: "button-addon2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsSearch, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "table-responsive  mx-3 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: "table ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                className: "container-cartera ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    className: "",
                                    children: head.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "select-DashboarRifas px-2 text-left",
                                            scope: "col",
                                            style: item.width ? {
                                                width: item.width
                                            } : {},
                                            children: item.label
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                children: options.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        actions: actions,
                                        option: option,
                                        index: index
                                    }, index))
                            })
                        ]
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "1000px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: ref
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4568);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_1__]);
_store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function HeaderDashboard({ renderButton , screen , profile  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const associations = (0,_store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_1__/* .useAsociatonsStoreDashboard */ .R)((state)=>state.asociations);
    const filterAssociation = associations.find((association)=>association.id === Number(router.query.id));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " d-block d-md-flex mt-2 ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "title-dashboard mx-2  ",
                    children: [
                        !profile && `${filterAssociation?.association_name} / `,
                        screen
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center ",
                children: [
                    !profile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: " p-2 me-3 button-dashboard m-0 ",
                        onClick: ()=>router.push("/dashboard/"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdKeyboardArrowLeft, {}),
                            "Mis asociaciones"
                        ]
                    }),
                    renderButton && renderButton()
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PremioOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getStatusColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5913);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9037);






function PremioOptions({ option , index , actions  }) {
    const { setShowEdit , setShowInfo  } = actions;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: "border position-relative text-left",
        style: {
            background: index % 2 === 0 ? "#F2F2F2" : "#fff"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                scope: "row text-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "position-absolute top-0 start-0 borderLateral-Rifas ",
                        style: {
                            backgroundColor: (0,_utils_getStatusColor__WEBPACK_IMPORTED_MODULE_5__/* .getStatusColorPrizes */ .sG)(option.status)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "  d-flex justify-content-start align-items-center  icon ms-3 w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            width: 50,
                            height: 50,
                            src: option.image || _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                            alt: option.name,
                            className: "rounded"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "text-cartera px-2 ",
                        children: option.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "parraf-cartera px-2",
                        children: option.informacion
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "number-dashboardRifas ",
                children: new Date(option.created_at).toLocaleDateString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "number-dashboardRifas ",
                children: option.value
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                style: {
                    color: (0,_utils_getStatusColor__WEBPACK_IMPORTED_MODULE_5__/* .getStatusColorPrizes */ .sG)(option.status)
                },
                className: "number-dashboardRifas px-3",
                children: (0,_utils_getStatusColor__WEBPACK_IMPORTED_MODULE_5__/* .getStatusValuePrizes */ .Eu)(option.status)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "icon-dashboarRifas ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegEdit, {
                    onClick: ()=>{
                        setShowEdit(option);
                    },
                    color: "#2161BD",
                    size: 18
                })
            })
        ]
    });
}


/***/ }),

/***/ 623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalEditPremio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9818);
/* harmony import */ var _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4568);
/* harmony import */ var _store_zustand_PrizesDashboardStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5539);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__, _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_6__, _store_zustand_PrizesDashboardStore__WEBPACK_IMPORTED_MODULE_7__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__, _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_6__, _store_zustand_PrizesDashboardStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ModalEditPremio({ show , setShow , handleReset  }) {
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__/* .selectRaffleState */ .VB);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const updatePrize = (0,_store_zustand_PrizesDashboardStore__WEBPACK_IMPORTED_MODULE_7__/* .usePrizeStoreDashboard */ .E)((state)=>state.updatePrize);
    const { prizesCategories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__/* .selectRaffleState */ .VB);
    const associations = (0,_store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_6__/* .useAsociatonsStoreDashboard */ .R)((state)=>state.asociations);
    const submitData = async (data)=>{
        await updatePrize(show.id, data, show);
        handleReset();
    };
    const gallery = show?.images && show?.images?.length > 0 ? show?.images?.map((image)=>image.file) : show?.image ? [
        show?.image
    ] : [];
    const fields = [
        {
            label: " \xbfCu\xe1l es el nombre del premio?",
            name: "name",
            required: true,
            type: "text",
            default: show?.name
        },
        {
            label: "\xbfCu\xe1l es la descripci\xf3n del  premio?*",
            name: "description",
            required: true,
            type: "textarea",
            default: show?.description
        },
        {
            label: "\xbfQu\xe9 categor\xeda describe tu producto?*",
            name: "category",
            required: true,
            type: "select",
            options: prizesCategories.map((prize)=>({
                    label: prize.name,
                    value: prize.id
                })),
            default: show?.category
        },
        {
            label: "\xbfCu\xe1l es el precio de tu producto (pesos MXN)?*",
            name: "value",
            required: true,
            type: "number",
            default: show?.value
        },
        {
            label: "\xbfQuieres asignar tu premio a alguna Asociaci\xf3n?",
            name: "association",
            required: false,
            type: "select",
            options: associations.map((association)=>({
                    label: association.association_name,
                    value: association.id
                })),
            default: show?.association
        },
        {
            label: "\xbfCu\xe1l es la condici\xf3n de tu producto?*",
            name: "status",
            required: true,
            type: "radioButton",
            options: [
                {
                    label: "Nuevo",
                    value: "nuevo"
                },
                {
                    label: "Usado",
                    value: "usado"
                }
            ],
            default: "nuevo"
        },
        {
            label: "Agrega las fotos de tu premio",
            name: "image",
            required: false,
            type: "file",
            default: [
                ...gallery
            ]
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                className: "custom-modal",
                show: show,
                setShowScreen: ()=>setShow(false),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                    className: "px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "m-auto mb-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "text-secondary text-center m-0",
                                children: "Editar Premio"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                cursor: "pointer"
                            },
                            className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                            onClick: ()=>setShow(false),
                            children: "X"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            buttonText: "Guardar Causa",
                            fields: fields,
                            submitData: submitData,
                            loading: loading
                        })
                    ]
                })
            })
        }) : null
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalEditRifas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ModalEditRifas({ show , setShow  }) {
    const submitData = async (data)=>{
    // handleChangeRaffle(data);
    };
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__/* .selectRaffleState */ .VB);
    const fields = [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            className: "custom-modal",
            show: show,
            setShowScreen: ()=>setShow(false),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                className: "px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-secondary text-center m-0",
                            children: "Editar Rifa"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                        onClick: ()=>setShow(false),
                        children: "X"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        buttonText: "Guardar Rifa",
                        fields: fields,
                        submitData: submitData,
                        loading: loading
                    })
                ]
            })
        }) : null
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalInformationPremio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ModalInformationPremio({ show , setShow  }) {
    const submitData = async (data)=>{
    // handleChangeRaffle(data);
    };
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__/* .selectRaffleState */ .VB);
    const fields = [
        {
            label: "Nombre del premio ",
            name: "name-cause",
            required: true,
            type: "text"
        },
        {
            label: "Descripci\xf3n del premio",
            name: "descriptions-cause",
            required: true,
            type: "textarea"
        },
        {
            label: "Fotos de tu premio",
            name: "photo",
            required: false,
            type: "file"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                className: "custom-modal",
                show: show,
                setShowScreen: ()=>setShow(false),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                    className: "px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "m-auto mb-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "text-secondary text-center m-0",
                                children: "Informaci\xf3n del Premio"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                cursor: "pointer"
                            },
                            className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                            onClick: ()=>setShow(false),
                            children: "X"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            buttonText: "Cerrar",
                            fields: fields,
                            submitData: submitData,
                            loading: loading
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center m-0 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "title-informationCausa",
                                    children: "Agregado por: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "information-cause mx-2",
                                    children: "Cuautli Martinez"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center m-0 ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "title-informationCausa",
                                    children: [
                                        "Fecha en que se agrego:",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "information-cause mx-2",
                                    children: " 31/05/2023"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center m-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "title-informationCausa",
                                    children: "Monto a lograr: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "information-cause mx-2",
                                    children: " $ 1000.00 pesos"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex align-items-center m-0 p-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "title-informationCausa ",
                                    children: "Estado de tu rifa: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mx-2 information-cause",
                                    children: "Tu rifa esta en proceso de verificaci\xf3n."
                                })
                            ]
                        })
                    ]
                })
            })
        }) : null
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalInformationRifa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ModalInformationRifa({ show , setShow  }) {
    const submitData = async (data)=>{
    //handleChangeRaffle(data);
    };
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_5__/* .selectRaffleState */ .VB);
    const fields = [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            className: "custom-modal",
            show: show,
            setShowScreen: ()=>setShow(false),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                className: "px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-secondary text-center m-0",
                            children: "Informaci\xf3n del Premio"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                        onClick: ()=>setShow(false),
                        children: "X"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        buttonText: "Cerrar",
                        fields: fields,
                        submitData: submitData,
                        loading: loading
                    })
                ]
            })
        }) : null
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalNewRaffleDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dashboard_Components_CreateRifaDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Dashboard_Components_CreateRifaDashboard__WEBPACK_IMPORTED_MODULE_3__]);
_Dashboard_Components_CreateRifaDashboard__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ModalNewRaffleDashboard({ showModalRaffle , handleClose  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showModalRaffle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                className: "",
                size: "xl",
                show: showModalRaffle,
                handleCloseDelete: handleClose,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-header",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                className: "modal-title text-secondary text-center m-0",
                                id: "staticBackdropLabel",
                                children: [
                                    " ",
                                    "Crear una Rifa"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2 btn-close",
                                onClick: handleClose,
                                type: "button",
                                "data-bs-dismiss": "modal",
                                "aria-label": "Close"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dashboard_Components_CreateRifaDashboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            disable: true,
                            handleClose: handleClose
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-footer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleClose,
                            type: "button",
                            className: "btn btn-border-pink",
                            "data-bs-dismiss": "modal",
                            children: "Cerrar"
                        })
                    })
                ]
            })
        }) : null
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalPremioDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);
/* harmony import */ var _ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5951);
/* harmony import */ var _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4568);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_4__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__, _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_8__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_4__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__, _store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ModalPremioDashboard({ showScreen , handleClose , handleSubmit , activeSelect , setShowScreen , handleReset  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { prizesCategories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .selectRaffleState */ .VB);
    const associations = (0,_store_zustand_DashboardStore__WEBPACK_IMPORTED_MODULE_8__/* .useAsociatonsStoreDashboard */ .R)((state)=>state.asociations);
    const fields = [
        {
            label: " \xbfCu\xe1l es el nombre del premio?",
            name: "name",
            required: true,
            type: "text"
        },
        {
            label: "\xbfCu\xe1l es la descripci\xf3n del  premio?*",
            name: "description",
            required: true,
            type: "textarea"
        },
        {
            label: "\xbfQu\xe9 categor\xeda describe tu producto?*",
            name: "category",
            required: true,
            type: "select",
            options: prizesCategories.map((prize)=>({
                    label: prize.name,
                    value: prize.id
                }))
        },
        {
            label: "\xbfCu\xe1l es el precio de tu producto (pesos MXN)?*",
            name: "value",
            required: true,
            type: "number"
        },
        {
            label: "\xbfQuieres asignar tu premio a alguna Asociaci\xf3n?",
            name: "association",
            required: false,
            type: "select",
            options: associations.map((association)=>({
                    label: association.association_name,
                    value: association.id
                }))
        },
        {
            label: "\xbfCu\xe1l es la condici\xf3n de tu producto?*",
            name: "status",
            required: true,
            type: "radioButton",
            options: [
                {
                    label: "Nuevo",
                    value: "nuevo"
                },
                {
                    label: "Usado",
                    value: "usado"
                }
            ]
        },
        {
            label: "Agrega las fotos de tu premio",
            name: "image",
            required: false,
            type: "file"
        }
    ];
    const submitData = async (data)=>{
        setLoading(true);
        const { payload  } = await dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .createRafflesPrize */ .FL)(data));
        if (payload) {
            setShowScreen();
            handleReset();
        }
        setLoading(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
            show: showScreen,
            onHide: handleClose,
            className: "custom-modal ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                className: "px-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                        children: [
                            !activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "title-Modal",
                                children: "Donar premio"
                            }),
                            activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "title-Modal",
                                children: "Seleccionar premio"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                        onClick: handleClose,
                        children: "X"
                    }),
                    !activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            fields: fields,
                            submitData: submitData,
                            loading: loading,
                            renderButton: (handleSend)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: "row w-100 mx-auto mt-5   ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border-bottom  border border-dark opacity-50 w-100 "
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex justify-content-end mt-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-3 p-0 pe-2   ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        disabled: loading,
                                                        variant: "secondary",
                                                        onClick: handleClose,
                                                        className: "w-100 text-dark bg-light",
                                                        children: "Cerrar"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-4 p-0 ps-2 ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        disabled: loading,
                                                        variant: "secondary",
                                                        type: "submit",
                                                        className: "w-100 btn btn-pink",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            handleSend();
                                                        },
                                                        children: "Guardar premio"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        })
                    }),
                    activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        handleSubmit: handleSubmit
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ usePrizeStoreDashboard)
/* harmony export */ });
/* harmony import */ var _services_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3697);
/* harmony import */ var _services_raffles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3843);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_dashboard__WEBPACK_IMPORTED_MODULE_0__, _services_raffles__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_2__]);
([_services_dashboard__WEBPACK_IMPORTED_MODULE_0__, _services_raffles__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const usePrizeStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)((set)=>({
        isLoading: false,
        prize: [],
        error: false,
        pagination: 1,
        prizeUser: [],
        paginationUser: 1,
        getPrize: async (id, pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_0__/* .getDashboardPrize */ .Hd)(id, pagination);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    prize: pagination === 1 ? data.results : [
                        ...state.prize,
                        ...data.results
                    ],
                    isLoading: false,
                    pagination: nextPagination
                }));
        },
        getPrizeUser: async (pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_0__/* .getDashboardPrizeUser */ .Ab)(pagination);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    prizeUser: pagination === 1 ? data.results : [
                        ...state.prizeUser,
                        ...data.results
                    ],
                    isLoading: false,
                    paginationUser: nextPagination
                }));
        },
        updatePrize: async (prizeId, prize, oldData)=>{
            set({
                isLoading: true
            });
            prize.status = prize.status === "usado" ? 1 : 0;
            prize.association = Number(prize.association);
            if (prize.association === 0 || prize.association === undefined) delete prize.association;
            prize.category = Number(prize.category);
            await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_0__/* .editPrize */ .SB)(prizeId, prize);
            if (prize.image && prize.image.length > 1) {
                const petitions = [];
                oldData.images.map((image)=>petitions.push((0,_services_raffles__WEBPACK_IMPORTED_MODULE_1__/* .deleteImageGallery */ .dY)(image.id)));
                prize.image.map((gallery)=>petitions.push((0,_services_raffles__WEBPACK_IMPORTED_MODULE_1__/* .createPrizeGallery */ .J2)(gallery, prizeId.toString())));
                const resultGallery = await Promise.all(petitions);
                await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_1__/* .updateGalleryPrize */ .cW)(prizeId.toString(), {
                    gallery: resultGallery.map((gallery)=>gallery.data.id),
                    name: prize.name,
                    value: prize.value
                });
            }
            set({
                //prize: data,
                isLoading: false
            });
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eu": () => (/* binding */ getStatusValuePrizes),
/* harmony export */   "HY": () => (/* binding */ getStatusValue),
/* harmony export */   "sG": () => (/* binding */ getStatusColorPrizes),
/* harmony export */   "z2": () => (/* binding */ getStatusColor)
/* harmony export */ });
const getStatusColor = (status)=>{
    switch(status){
        case "0":
            return "#00A650";
        case "1":
            return "#FF8800";
        case "2":
            return "#F23D4F";
        case "3":
            return "#784B5F";
        case "4":
            return "#784B5F";
        case "5":
            return "#784B5F";
        case "6":
            return "#784B5F";
        default:
            return "#784B5F";
    }
};
const getStatusValue = (status)=>{
    switch(status.toString()){
        case "0":
            return "Canceled";
        case "1":
            return "Public";
        case "2":
            return "Completed";
        case "3":
            return "Draft";
        case "4":
            return "Paused";
        case "5":
            return "Requested";
        case "6":
            return "Rejectes";
        default:
            return "Default";
    }
};
const getStatusColorPrizes = (status)=>{
    switch(status.toString()){
        case "0":
            return "#00A650";
        case "1":
            return "#FF8800";
        default:
            return "status-vigente";
    }
};
const getStatusValuePrizes = (status)=>{
    switch(status.toString()){
        case "0":
            return "Nuevo";
        case "1":
            return "Usado";
        default:
            return "status-vigente";
    }
};


/***/ })

};
;
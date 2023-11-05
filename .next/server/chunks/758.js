"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 5909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-rifa-footer.e20d0103.png","height":85,"width":180,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdUlEQVR42mO4zpDre5Ex26VGPEwVyM67ypDjc40hJw1I2wAxA8M1htyCS4zZ8VFSAcr3GQrELzPmiADFZIBYCojBCvKBCmITJANV7jHky1xmyAFJSgOxLtAEBQagsZ4gK7IlghRuAK0DCsYBrYgB0inXGHIyAOAOLgU+Qd9rAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 6744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-rifa-menu.ec6072d9.png","height":55,"width":117,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAa0lEQVR42gXAQQoBYRQA4O/NjGGlpCRLR3ALCzdwBQfjHq4gkWTJxkYpzP8UB5vVN8p7N3nc1vfpsshzMEuO2DeYB89L/b0OVNtX/Loqo0VAA8iWSGqpF3TJGL0Gp+QzLHX3URaVGKGgj/YPADYkDn6vUeMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 5271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/portada-rifa1.7178cb16.jpg","height":220,"width":301,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAuDf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgQSAAMFEf/aAAgBAQABPwDpwo6xXZX2AVU18BBz/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Aj//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAwEBPwB4f//Z","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 7488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormGenerator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _helper__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _helper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function FormGenerator({ fields , submitData , buttonText ="Enviar" , loading =false , renderButton  }) {
    const { handleSubmit , register , formState: { errors  } , setValue , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: (0,_helper__WEBPACK_IMPORTED_MODULE_3__/* .getDefaultValues */ .O4)(fields)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "",
        onSubmit: handleSubmit(submitData),
        children: [
            fields.map((field, index)=>{
                const FieldComponent = _helper__WEBPACK_IMPORTED_MODULE_3__/* .FieldComponents */ .K$[field.type];
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldComponent, {
                    error: errors[field.name],
                    register: register,
                    setValue: setValue,
                    watch: watch,
                    ...field
                }, index);
            }),
            renderButton ? renderButton(handleSubmit(submitData)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: loading,
                className: "btn btn-pink w-100 my-4",
                type: "submit",
                children: buttonText
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_logo_rifa_footer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5909);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_auth__WEBPACK_IMPORTED_MODULE_6__]);
_store_slices_auth__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { authenticated  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_6__/* .selectAuthState */ ._9);
    const routeCreate = authenticated ? "/rifas/crear_rifas" : "/registro";
    const routeRifas = authenticated ? "/rifas" : "/registro";
    const routeDonations = authenticated ? "/donaciones" : "/registro";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: " mt-5 footer-fondo p-4  ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " mw-100   ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _assets_img_logo_rifa_footer_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                alt: "fondo",
                                className: " "
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: ".footer-title mt-5 mt-md-0 ",
                                    children: "\xa1R\xedfate!"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: " list-unstyled footer-information ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "listas-footer",
                                            onClick: ()=>router.push(routeCreate),
                                            children: "Inicia una rifa"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "listas-footer",
                                            onClick: ()=>router.push(routeRifas),
                                            children: "Comprar boletos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "listas-footer",
                                            onClick: ()=>router.push(routeDonations),
                                            children: "Haz una donacion"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "listas-footer",
                                            onClick: ()=>router.push("/registro"),
                                            children: "Crear una cuenta"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: ".footer-title",
                                    children: "Nosotros"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: " list-unstyled footer-information",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/nosotros"),
                                            className: "button-contacto",
                                            children: "Conocenos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/faq"),
                                            className: "button-contacto",
                                            children: "\xbfComo funciona?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            onClick: ()=>router.push("/contacto"),
                                            className: "button-contacto",
                                            children: [
                                                " ",
                                                "\xbfNecesitas ayuda?"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: ".footer-title",
                                    children: "Legal"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: " list-unstyled footer-information",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "button-contacto",
                                            onClick: ()=>router.push("/terminosCondiciones"),
                                            children: "Terminos y condiciones"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "button-contacto",
                                            onClick: ()=>router.push("/privacyNotice"),
                                            children: "Aviso de privacidad"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "button-contacto",
                                            onClick: ()=>router.push("/frequentQuestions"),
                                            children: "Preguntan frecuentes"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/contacto"),
                                            className: "button-contacto",
                                            children: "Reportar rifa"
                                        })
                                    ]
                                })
                            ]
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: ".footer-title",
                                    children: "Redes"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: " list-unstyled footer-information",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("https://www.instagram.com/rifaconcausa/"),
                                            className: "button-contacto",
                                            children: "Instagram"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("https://www.facebook.com/profile.php?id=100094965330971"),
                                            className: "button-contacto",
                                            children: "Facebook"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-5 text-secondary fs-6 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-0 footer-text ",
                            children: "Escribenos"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "footer-text",
                            children: "Contacto@rifaconcausa.org"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " border-bottom border-1 border-black opacity-25 w-auto mx-5  "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-block d-lg-flex justify-content-between mt-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mx-5 footer-text",
                            children: "2023. Rifa con Causa Todos los derechos reservados"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "footer-text d-flex ",
                            children: [
                                "Creado por ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mx-2 fw-bold",
                                    children: "Keep in Touch"
                                }),
                                " \xa1hacemos que las cosas sucedan!"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_logo_rifa_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6744);
/* harmony import */ var _modal_ModalLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8961);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9403);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modal_ModalNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6989);
/* harmony import */ var _modal_ModalProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2931);
/* harmony import */ var _ResponsiveNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6602);
/* harmony import */ var _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2377);
/* harmony import */ var _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_ModalLogin__WEBPACK_IMPORTED_MODULE_4__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_7__, _modal_ModalNotification__WEBPACK_IMPORTED_MODULE_9__, _modal_ModalProfile__WEBPACK_IMPORTED_MODULE_10__, _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_12__, _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_13__]);
([_modal_ModalLogin__WEBPACK_IMPORTED_MODULE_4__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_7__, _modal_ModalNotification__WEBPACK_IMPORTED_MODULE_9__, _modal_ModalProfile__WEBPACK_IMPORTED_MODULE_10__, _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_12__, _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Nav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { authenticated , profile  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_7__/* .selectAuthState */ ._9);
    const [showNotification, setShowNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showprofile, setShowProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notificationsSize = (0,_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_12__/* .useNotificationStore */ .G)((state)=>state.notificationsSize);
    const postValidateAccount = (0,_store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_13__/* .ForgotPasswordStore */ .N)((state)=>state.postValidateAccount);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    const options = [
        {
            label: "Rifas",
            path: "/rifas"
        },
        {
            label: "Nosotros",
            path: "/nosotros"
        },
        {
            label: "Ingreso",
            path: "/",
            onClick: handleShow
        },
        {
            label: "Registro",
            path: "/registro"
        }
    ];
    const authOptions = [
        {
            label: "Rifas",
            path: "/rifas"
        },
        {
            label: "Donaciones",
            path: "/donaciones"
        },
        {
            label: "Crear Rifa",
            path: "/rifas/crear_rifas"
        },
        {
            label: "Nosotros",
            path: "/nosotros"
        },
        {
            label: "Perfil",
            path: "/perfil",
            Icon: react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosNotifications,
            onClick: ()=>setShowNotification(!showNotification)
        },
        {
            label: `Hola ${profile?.full_name}`,
            path: "/",
            onClick: ()=>setShowProfile(!showprofile)
        }
    ];
    const selectOptions = authenticated ? authOptions : options;
    const handleValidateAccount = async ()=>{
        if (router?.query?.validateAccount) {
            await postValidateAccount(router?.query?.validateAccount);
            await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_7__/* .ValidateSession */ .ib)({}));
            router.push("/rifas/crear_rifas");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>handleValidateAccount(), 200);
        return ()=>clearTimeout(timeoutId);
    //eslint-disable-next-line
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "position-absolute top-0 w-100 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_ModalNotification__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                showNotification: showNotification,
                setShowNotification: setShowNotification
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_ModalProfile__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                setShowProfile: setShowProfile,
                showprofile: showprofile
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_ModalLogin__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                show: show,
                handleClose: handleClose
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "d-md-flex justify-content-between align-items-center mt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-0 mx-lg-2",
                        style: {
                            cursor: "pointer"
                        },
                        onClick: ()=>router.push("/"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: _assets_img_logo_rifa_menu_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                            alt: "fondo",
                            className: "img-fluid"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResponsiveNav__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        selectOptions: selectOptions
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "d-none  home-navbar d-md-flex  list-unstyled text-secondary align-items-center justify-content-center m-0",
                        children: selectOptions.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: " mx-3 my-2",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: ()=>option.onClick ? option.onClick() : router.push(option.path),
                                children: option.Icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "position-relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "notification-active",
                                            children: notificationsSize
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(option.Icon, {
                                            className: " size-icon m-0"
                                        })
                                    ]
                                }) : option.label
                            }, index))
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResponsiveNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function ResponsiveNav({ selectOptions  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineMenu, {
                className: "d-flex d-md-none position-absolute top-0 end-0 mx-4 mt-4",
                size: 28,
                style: {
                    cursor: "pointer"
                },
                onClick: ()=>setOpen(!open)
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "home-navbar d-md-none position-absolute z-1 flex-column w-100 py-2 text-center top-75 start-0 mt-3  bg-light  shadow p-3 mb-5 bg-body-tertiary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "  list-unstyled text-secondary align-items-center justify-content-center m-0",
                    children: selectOptions.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: " mx-4 my-2 cursor-pointer",
                            onClick: ()=>option.onClick ? option.onClick() : router.push(option.path),
                            children: option.Icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(option.Icon, {
                                className: "me-2"
                            }) : option.label
                        }, index))
                })
            })
        ]
    });
}


/***/ }),

/***/ 2758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6923);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5153);
/* harmony import */ var _modal_ModalForgotPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4618);
/* harmony import */ var _modal_ModalRecoverPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5336);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Nav__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _modal_ModalForgotPassword__WEBPACK_IMPORTED_MODULE_4__, _modal_ModalRecoverPassword__WEBPACK_IMPORTED_MODULE_5__]);
([_Nav__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _modal_ModalForgotPassword__WEBPACK_IMPORTED_MODULE_4__, _modal_ModalRecoverPassword__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Layout({ children , home  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleClose = ()=>setShow(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router?.query?.recoverPassword) {
            setShow(true);
            setCode(router?.query?.recoverPassword);
        }
    //eslint-disable-next-line
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: " position-relative mx-auto ",
        style: {
            maxWidth: "1440px",
            paddingTop: "62px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_ModalForgotPassword__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_ModalRecoverPassword__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                handleClose: handleClose,
                show: show,
                code: code
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-3 mx-lg-3",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoginWithFacebook)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9403);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6804);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__]);
_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function LoginWithFacebook({ handleClose  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleFacebookResponse = async (response)=>{
        const { payload  } = await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__/* .LoginFacebook */ .yx)({
            token: response.accessToken
        }));
        if (payload) {
            handleClose();
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4___default()), {
        appId: "679244714108869" || 0,
        fields: "name,email,picture",
        callback: handleFacebookResponse,
        render: (renderProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: ()=>{
                    renderProps.onClick();
                },
                className: "btn btn-primary ",
                style: {
                    backgroundColor: "#3b5998",
                    border: "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFacebook, {
                        size: 18,
                        className: "me-2 me-lg-3"
                    }),
                    "Continuar con facebook"
                ]
            })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ LoginWithGoogle)
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__]);
_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LoginWithGoogle = ({ handleClose  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        //eslint-disable-next-line
        window.onGoogleSuccess = (response)=>{
            submitData(response);
        // hit your backend, passing up response.credential
        };
        // Inject the google provided script
        // (an importable module would be nicer here)
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        document.body.appendChild(script);
        return ()=>{
            // clean up for react lifecycle
            window.onGoogleSuccess = undefined;
            document.body.removeChild(script);
        };
    //eslint-disable-next-line
    }, []);
    const submitData = async (data)=>{
        const { payload  } = await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_1__/* .LoginGoogle */ .UF)(data));
        if (payload) {
            handleClose();
            router.push("/");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "g_id_onload",
                "data-client_id": "388797586221-62o9ph0f22lokf6i4c4apjkstr7t775c.apps.googleusercontent.com",
                "data-callback": "onGoogleSuccess" // as defined above
                ,
                "data-context": "signin",
                "data-ux_mode": "popup",
                "data-auto_prompt": "false",
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "g_id_signin ",
                "data-type": "standard",
                "data-shape": "rectangular",
                "data-theme": "outline",
                "data-text": "signin_with",
                "data-size": "large",
                "data-logo_alignment": "left",
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalForgotPassword)
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9403);
/* harmony import */ var _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_6__, _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_6__, _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ModalForgotPassword() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_6__/* .selectAuthState */ ._9);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    /*    const handleClose = () => setShow(false);
       const handleShow = () => setShow(true); */ const setShowModal = (0,_store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__/* .ForgotPasswordStore */ .N)((state)=>state.setShowModal);
    const showModal = (0,_store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__/* .ForgotPasswordStore */ .N)((state)=>state.showModal);
    const postEmail = (0,_store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__/* .ForgotPasswordStore */ .N)((state)=>state.postEmail);
    const isLoading = (0,_store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__/* .ForgotPasswordStore */ .N)((state)=>state.isLoading);
    const handleClose = ()=>{
        setShowModal(false);
    };
    const fields = [
        {
            label: "Correo electr\xf3nico",
            name: "email",
            required: true,
            type: "email"
        }
    ];
    const submitData = async (data)=>{
        const result = await postEmail(data.email);
        if (result) {
            handleClose();
            router.push("/");
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].error("Ocurrio un error al enviar el correo");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            className: "custom-modal",
            show: showModal,
            onHide: handleClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                className: "px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-secondary text-center m-0",
                            children: "Olvidaste tu contrasena"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                        onClick: handleClose,
                        children: "X"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        buttonText: "Enviar",
                        fields: fields,
                        submitData: submitData,
                        loading: isLoading
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalLogin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9403);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Login_LoginWithGoogle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1103);
/* harmony import */ var _Login_LoginWithFacebook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3231);
/* harmony import */ var _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_5__, _Login_LoginWithGoogle__WEBPACK_IMPORTED_MODULE_7__, _Login_LoginWithFacebook__WEBPACK_IMPORTED_MODULE_8__, _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_9__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_3__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_5__, _Login_LoginWithGoogle__WEBPACK_IMPORTED_MODULE_7__, _Login_LoginWithFacebook__WEBPACK_IMPORTED_MODULE_8__, _store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







/* import { GoogleLogin } from "react-google-login"; */ 


function ModalLogin({ show , handleClose  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_5__/* .selectAuthState */ ._9);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const setShowModal = (0,_store_zustand_ForgotPassword__WEBPACK_IMPORTED_MODULE_9__/* .ForgotPasswordStore */ .N)((state)=>state.setShowModal);
    const fields = [
        {
            label: "Correo electr\xf3nico",
            name: "email",
            required: true,
            type: "email"
        },
        {
            label: "Contrase\xf1a",
            name: "password",
            required: true,
            type: "password"
        }
    ];
    const submitData = async (data)=>{
        const { payload  } = await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_5__/* .Login */ .m3)(data));
        if (payload) {
            handleClose();
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        show: show,
        onHide: handleClose,
        className: "custom-modal",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
            className: "px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "m-auto mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-secondary text-center m-0",
                            children: "Iniciar sesi\xf3n"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-secondary text-center m-0",
                            children: "Para continuar"
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    buttonText: "Iniciar sesion",
                    fields: fields,
                    submitData: submitData,
                    loading: loading
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    onClick: ()=>{
                        handleClose();
                        setShowModal(true);
                    },
                    className: "text-center mb-3 fw-medium  password",
                    children: "\xbfOlvidaste tu contrase\xf1a?"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " mx-0 mx-md-auto d-flex flex-lg-wrap flex-wrap  justify-content-center mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-2 my-md-0 mx-3",
                            children: " "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " mx-0 mx-md-auto d-flex flex-wrap  justify-content-center mb-4 p-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "my-2 my-md-0 mx-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Login_LoginWithFacebook__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        handleClose: handleClose
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " mt-1 mt-md-0 mx-2 ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Login_LoginWithGoogle__WEBPACK_IMPORTED_MODULE_7__/* .LoginWithGoogle */ .t, {
                                        handleClose: handleClose
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " border-bottom border-2 my-3  "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            onClick: ()=>{
                                handleClose();
                                router.push("/registro");
                            },
                            className: "fw-bold  text-center registroAqui",
                            "style-": {
                                cursor: "pointer"
                            },
                            children: "\xbfNo tienes una cuenta? Registrate aqui"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                            onClick: ()=>{
                                handleClose();
                                router.push("/faq");
                            },
                            className: "fw-bold text-center mb-3",
                            children: [
                                "\xbfPorque necesito una cuenta?",
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalNotification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_portada_rifa1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5271);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__]);
_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ModalNotification({ showNotification , setShowNotification  }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const isLoading = (0,_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__/* .useNotificationStore */ .G)((state)=>state.isLoading);
    const error = (0,_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__/* .useNotificationStore */ .G)((state)=>state.error);
    const notifications = (0,_store_zustand_NotificationStore__WEBPACK_IMPORTED_MODULE_5__/* .useNotificationStore */ .G)((state)=>state.notifications);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function handleOutsideClick(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowNotification(false);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return ()=>{
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []); // Volver a ejecutar si el método onClose cambia
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showNotification && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: modalRef,
            className: "container-modalNotification rounded-3 shadow",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " contenedor border-bottom border rounded-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " d-flex justify-content-around  pt-2 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: " z-3 notification ",
                                children: [
                                    "Notificaciones (",
                                    notifications.length,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "z-3 leido-notification ",
                                children: "marcar todo como leido"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-3 row m-0 border-bottom",
                    children: [
                        !!isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-0",
                            children: "Cargando..."
                        }),
                        !!error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-0 text-danger ",
                            children: "Error al cargar las notificaciones"
                        }),
                        !isLoading && !error && notifications.map((notifications)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                onClick: ()=>{},
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "name-notifications m-0",
                                        children: notifications.subject
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-between   row m-0 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-4  p-0   ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: " mt-1 size-imagenNotifications w-100 h-auto  rounded",
                                                    src: _assets_img_portada_rifa1_jpg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                    alt: "portadarifa1"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "col-6 px-1 parraf-notifications mt-1 mt-lg-0 ",
                                                children: notifications.message
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-1 p-0 d-flex justify-content-center rounded   bg-white align-items-center mb-5",
                                                style: {
                                                    width: "30px",
                                                    height: "30px",
                                                    border: "1px solid #70707036"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineCheckCircle, {
                                                    size: 20,
                                                    style: {
                                                        color: "#707070"
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, notifications.id))
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9403);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_auth__WEBPACK_IMPORTED_MODULE_2__]);
_store_slices_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ModalProfile({ showprofile , setShowProfile  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { authenticated , profile  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_2__/* .selectAuthState */ ._9);
    const [showDashboar, setShowDashboar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const authOptions = [
        {
            label: "Cerrar sesion",
            path: "/",
            onClick: ()=>{
                dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_2__/* .setLogout */ .wt)());
                router.push("/");
            }
        },
        {
            label: "Asociacion",
            path: "/",
            onClick: ()=>router.push("/dashboard")
        },
        {
            label: "Profile",
            path: "/",
            onClick: ()=>router.push("/profile")
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showprofile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-Profile me-0 me-md-1 rounded-3 shadow p-0  p-md-2",
            children: authOptions.map((Options, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: " mx-2 mx-md-3 my-2 ",
                    style: {
                        cursor: "pointer"
                    },
                    onClick: ()=>{
                        setShowProfile(false);
                        Options.onClick ? Options.onClick() : router.push(Options.path);
                    },
                    children: Options.Icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "position-relative ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "notification-active"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Options.Icon, {
                                className: " size-icon m-0"
                            })
                        ]
                    }) : Options.label
                }, index))
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalRecoverPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7488);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9403);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_2__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_5__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_2__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ModalRecoverPassword({ handleClose , show , code  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_5__/* .selectAuthState */ ._9);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const fields = [
        {
            label: "Contrase\xf1a",
            name: "paswword",
            required: true,
            type: "password"
        },
        {
            label: "Confirmar Contrase\xf1a",
            name: "password-confirmation",
            required: true,
            type: "password"
        }
    ];
    const submitData = async (data)=>{
        const { payload  } = await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_5__/* .Login */ .m3)({
            ...data,
            code
        }));
        if (payload) {
            handleClose();
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Modal, {
            className: "custom-modal",
            show: show,
            onHide: handleClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Modal.Body, {
                className: "px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-secondary text-center m-0",
                            children: "Recuperar Contrase\xf1a"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                        onClick: handleClose,
                        children: "X"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        buttonText: "Enviar",
                        fields: fields,
                        submitData: submitData,
                        loading: loading
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ForgotPasswordStore)
/* harmony export */ });
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__]);
([_services_auth__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const ForgotPasswordStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({
        showModal: false,
        isLoading: false,
        error: false,
        postEmail: async (email)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .postEmail */ .Dc)(email);
                set({
                    isLoading: false
                });
                return true;
            } catch (error) {
                set({
                    isLoading: false,
                    error: true
                });
                return false;
            }
        },
        postValidateAccount: async (code)=>{
            try {
                set({
                    isLoading: true
                });
                const result = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__/* .postValidateAccount */ .iz)(code);
                await localStorage.setItem("sessionToken", result.data.access);
                await localStorage.setItem("sessionTokenRefresh", result.data.refresh);
                set({
                    isLoading: false
                });
                return result.data;
            } catch (error) {
                set({
                    isLoading: false,
                    error: true
                });
                return false;
            }
        },
        setShowModal: (showModal)=>{
            set({
                showModal
            });
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
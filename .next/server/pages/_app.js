/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartContextProvider\": () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children  }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cartProducts?.length > 0) {\n            ls?.setItem(\"cart\", JSON.stringify(cartProducts));\n        }\n    }, [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ls && ls.getItem(\"cart\")) {\n            setCartProducts(JSON.parse(ls.getItem(\"cart\")));\n        }\n    }, []);\n    function addProduct(productId) {\n        setCartProducts((prev)=>[\n                ...prev,\n                productId\n            ]);\n    }\n    function removeProduct(productId) {\n        setCartProducts((prev)=>{\n            const pos = prev.indexOf(productId);\n            if (pos !== -1) {\n                return prev.filter((value, index)=>index !== pos);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartProducts([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macrost/Desktop/tanya-copy/components/CartContext.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUQ7QUFFbEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxTQUFTSSxvQkFBb0IsRUFBQ0MsU0FBUSxFQUFDLEVBQUU7SUFDOUMsTUFBTUMsS0FBSyxNQUE2QixHQUFHQyxDQUFtQixHQUFHLElBQUk7SUFDckUsTUFBTSxDQUFDRSxjQUFhQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNsREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLGNBQWNFLFNBQVMsR0FBRztZQUM1QkwsSUFBSU0sUUFBUSxRQUFRQyxLQUFLQyxTQUFTLENBQUNMO1FBQ3JDLENBQUM7SUFDSCxHQUFHO1FBQUNBO0tBQWE7SUFDakJSLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSyxNQUFNQSxHQUFHUyxPQUFPLENBQUMsU0FBUztZQUM1QkwsZ0JBQWdCRyxLQUFLRyxLQUFLLENBQUNWLEdBQUdTLE9BQU8sQ0FBQztRQUN4QyxDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBQ0wsU0FBU0UsV0FBV0MsU0FBUyxFQUFFO1FBQzdCUixnQkFBZ0JTLENBQUFBLE9BQVE7bUJBQUlBO2dCQUFLRDthQUFVO0lBQzdDO0lBQ0EsU0FBU0UsY0FBY0YsU0FBUyxFQUFFO1FBQ2hDUixnQkFBZ0JTLENBQUFBLE9BQVE7WUFDdEIsTUFBTUUsTUFBTUYsS0FBS0csT0FBTyxDQUFDSjtZQUN6QixJQUFJRyxRQUFRLENBQUMsR0FBRztnQkFDZCxPQUFPRixLQUFLSSxNQUFNLENBQUMsQ0FBQ0MsT0FBTUMsUUFBVUEsVUFBVUo7WUFDaEQsQ0FBQztZQUNELE9BQU9GO1FBQ1Q7SUFDRjtJQUNBLFNBQVNPLFlBQVk7UUFDbkJoQixnQkFBZ0IsRUFBRTtJQUNwQjtJQUNBLHFCQUNFLDhEQUFDUCxZQUFZd0IsUUFBUTtRQUFDSCxPQUFPO1lBQUNmO1lBQWFDO1lBQWdCTztZQUFXRztZQUFjTTtRQUFTO2tCQUMxRnJCOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWZyb250Ly4vY29tcG9uZW50cy9DYXJ0Q29udGV4dC5qcz84MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FydENvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IGxzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiBudWxsO1xuICBjb25zdCBbY2FydFByb2R1Y3RzLHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhcnRQcm9kdWN0cz8ubGVuZ3RoID4gMCkge1xuICAgICAgbHM/LnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcbiAgICB9XG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobHMgJiYgbHMuZ2V0SXRlbSgnY2FydCcpKSB7XG4gICAgICBzZXRDYXJ0UHJvZHVjdHMoSlNPTi5wYXJzZShscy5nZXRJdGVtKCdjYXJ0JykpKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgZnVuY3Rpb24gYWRkUHJvZHVjdChwcm9kdWN0SWQpIHtcbiAgICBzZXRDYXJ0UHJvZHVjdHMocHJldiA9PiBbLi4ucHJldixwcm9kdWN0SWRdKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgIHNldENhcnRQcm9kdWN0cyhwcmV2ID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IHByZXYuaW5kZXhPZihwcm9kdWN0SWQpO1xuICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHByZXYuZmlsdGVyKCh2YWx1ZSxpbmRleCkgPT4gaW5kZXggIT09IHBvcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhckNhcnQoKSB7XG4gICAgc2V0Q2FydFByb2R1Y3RzKFtdKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnRQcm9kdWN0cyxzZXRDYXJ0UHJvZHVjdHMsYWRkUHJvZHVjdCxyZW1vdmVQcm9kdWN0LGNsZWFyQ2FydH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibHMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJjYXJ0UHJvZHVjdHMiLCJzZXRDYXJ0UHJvZHVjdHMiLCJsZW5ndGgiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJwYXJzZSIsImFkZFByb2R1Y3QiLCJwcm9kdWN0SWQiLCJwcmV2IiwicmVtb3ZlUHJvZHVjdCIsInBvcyIsImluZGV4T2YiLCJmaWx0ZXIiLCJ2YWx1ZSIsImluZGV4IiwiY2xlYXJDYXJ0IiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/macrost/Desktop/tanya-copy/pages/_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macrost/Desktop/tanya-copy/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macrost/Desktop/tanya-copy/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUMrQjtBQUNiO0FBSWpDLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxXQUFXLEVBQUNDLFFBQU8sRUFBRSxHQUFHRCxXQUFXLEdBQUUsRUFBRTtJQUM5RSxxQkFDRTtrQkFDRSw0RUFBQ0gsNERBQWVBO1lBQUNJLFNBQVNBO3NCQUN4Qiw0RUFBQ0wsd0VBQW1CQTswQkFDbEIsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtZnJvbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQge0NhcnRDb250ZXh0UHJvdmlkZXJ9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FydENvbnRleHRcIjtcbmltcG9ydCB7U2Vzc2lvblByb3ZpZGVyfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczoge3Nlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgICAgPENhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
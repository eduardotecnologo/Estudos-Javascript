/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n\n\nvar _jsxFileName = \"/Users/edudeveloper/Documents/Git/Estudos-Javascript/ProjetoMetas/site/pages/index.js\";\n\n\n\n\n\nfunction Home({\n  data\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Jumbotron, {\n      fluid: true,\n      className: \"list\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n        children: `.list{\n            background-color: #e5e5e5;\n            padding-top: 30px;\n            padding-bottom: 50px;\n            margin-bottom: 0rem !important;\n          }.title-top{\n            color: #717171;\n          }.list-meta{\n            color: #717171;\n          }`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: \"display-4 text-center title-top\",\n          children: \"Minhas Metas!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ListGroup, {\n          children: data.metas.map(meta => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ListGroupItem, {\n              className: \"list-meta\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ListGroupItemHeading, {\n                children: meta.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 21\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ListGroupItemText, {\n                children: meta.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 21\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ListGroupItemText, {\n                children: meta.status\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 21\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 19\n            }, this)\n          }, \"{meta._id}\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 17\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n;\nasync function getServerSideProps() {\n  const response = await fetch(`http://localhost:3001/metas`);\n  const data = await response.json(); //console.log(data);\n\n  return {\n    props: {\n      data\n    } // will be passed to the page component as props\n\n  };\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsIm1ldGFzIiwibWFwIiwibWV0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF3QjtBQUN0QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGlEQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFpQixlQUFTLEVBQUMsTUFBM0I7QUFBQSw4QkFDRTtBQUFBLGtCQUNJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBYUUsOERBQUMsaURBQUQ7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxpREFBRDtBQUFBLG9CQUVJQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxJQUFJLGlCQUNqQjtBQUFBLG1DQUNFLDhEQUFDLHFEQUFEO0FBQWUsdUJBQVMsRUFBQyxXQUF6QjtBQUFBLHNDQUNFLDhEQUFDLDREQUFEO0FBQUEsMEJBQXVCQSxJQUFJLENBQUNDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBLDBCQUFvQkQsSUFBSSxDQUFDRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0UsOERBQUMseURBQUQ7QUFBQSwwQkFBb0JGLElBQUksQ0FBQ0c7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFTLFlBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQW1DRDs7QUFBQTtBQUVNLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3pDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsNkJBQUYsQ0FBNUI7QUFDQSxRQUFNVCxJQUFJLEdBQUcsTUFBTVEsUUFBUSxDQUFDRSxJQUFULEVBQW5CLENBRnlDLENBR3pDOztBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUVYO0FBQUYsS0FERixDQUNVOztBQURWLEdBQVA7QUFHRDtBQUFBO0FBRUQsK0RBQWVELElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbXBvbmVudCwgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0sIExpc3RHcm91cEl0ZW1IZWFkaW5nLCBMaXN0R3JvdXBJdGVtVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAge2AubGlzdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIH0udGl0bGUtdG9we1xuICAgICAgICAgICAgY29sb3I6ICM3MTcxNzE7XG4gICAgICAgICAgfS5saXN0LW1ldGF7XG4gICAgICAgICAgICBjb2xvcjogIzcxNzE3MTtcbiAgICAgICAgICB9YH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGlzcGxheS00IHRleHQtY2VudGVyIHRpdGxlLXRvcFwiPk1pbmhhcyBNZXRhcyE8L2gyPlxuICAgICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRhdGEubWV0YXMubWFwKG1ldGEgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwie21ldGEuX2lkfVwiPlxuICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW0gY2xhc3NOYW1lPVwibGlzdC1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGluZz57bWV0YS5uYW1lfTwvTGlzdEdyb3VwSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD57bWV0YS5kZXNjcmlwdGlvbn08L0xpc3RHcm91cEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+e21ldGEuc3RhdHVzfTwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9KdW1ib3Ryb24+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9tZXRhc2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfS8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Menu_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
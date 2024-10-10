/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/antras.js":
/*!*******************************!*\
  !*** ./src/helpers/antras.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   antras: () => (/* binding */ antras)\n/* harmony export */ });\nconst antras = () => {\r\n    return '<h2>Antra funkcija</h2>';\r\n} \n\n//# sourceURL=webpack://webpack-example/./src/helpers/antras.js?");

/***/ }),

/***/ "./src/helpers/pirmas.js":
/*!*******************************!*\
  !*** ./src/helpers/pirmas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pirmas: () => (/* binding */ pirmas)\n/* harmony export */ });\nconst pirmas = () => {\r\n    return '<h1>Pirma funkcija</h1>';\r\n} \n\n//# sourceURL=webpack://webpack-example/./src/helpers/pirmas.js?");

/***/ }),

/***/ "./src/helpers/trecias.js":
/*!********************************!*\
  !*** ./src/helpers/trecias.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trecias: () => (/* binding */ trecias)\n/* harmony export */ });\nconst trecias = () => {\r\n    return '<h3>Trecia funkcija</h3>';\r\n} \n\n//# sourceURL=webpack://webpack-example/./src/helpers/trecias.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_pirmas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/pirmas.js */ \"./src/helpers/pirmas.js\");\n/* harmony import */ var _helpers_antras_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/antras.js */ \"./src/helpers/antras.js\");\n/* harmony import */ var _helpers_trecias_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/trecias.js */ \"./src/helpers/trecias.js\");\n\r\n\r\n\r\n\r\ndocument.querySelector('body').innerHTML += (0,_helpers_pirmas_js__WEBPACK_IMPORTED_MODULE_0__.pirmas)();\r\ndocument.querySelector('body').innerHTML += (0,_helpers_antras_js__WEBPACK_IMPORTED_MODULE_1__.antras)();\r\ndocument.querySelector('body').innerHTML += (0,_helpers_trecias_js__WEBPACK_IMPORTED_MODULE_2__.trecias)();\r\n\r\nconst random = (min, max) => {\r\n    const minCeiled = Math.ceil(min);\r\n    const maxFloored = Math.floor(max);\r\n    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive\r\n  }\r\n\r\nconst randomHeader = () => {\r\n    const choises = ['Hello', 'Goodbye'];\r\n\r\n    document.querySelector('body').innerHTML += `<h3>${choises[random(0, choises.length - 1)]} World</h3>`;\r\n}\r\n\r\nrandomHeader();\n\n//# sourceURL=webpack://webpack-example/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
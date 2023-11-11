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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_productCard_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/productCard/script */ \"./src/productCard/script.js\");\n/* harmony import */ var _src_cart_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/cart/script */ \"./src/cart/script.js\");\n/* harmony import */ var _src_utils_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/utils/modes */ \"./src/utils/modes.js\");\n\r\n\r\n\r\n\r\n(0,_src_utils_modes__WEBPACK_IMPORTED_MODULE_2__.useMode)();\r\n\r\n(0,_src_productCard_script__WEBPACK_IMPORTED_MODULE_0__.useProductCard)();\r\n(0,_src_cart_script__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n\n//# sourceURL=webpack://lass/./index.js?");

/***/ }),

/***/ "./src/productCard/style.scss":
/*!************************************!*\
  !*** ./src/productCard/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lass/./src/productCard/style.scss?");

/***/ }),

/***/ "./src/cart/script.js":
/*!****************************!*\
  !*** ./src/cart/script.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var _utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/waitForElement */ \"./src/utils/waitForElement.js\");\n\r\n\r\nfunction useCart() {\r\n    let cart;\r\n    const cartObserver = new MutationObserver(onOpenProductPopup);\r\n\r\n    (0,_utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__.waitForElement)('.t706__cartwin').then((cartElem) => {\r\n        cart = cartElem;\r\n        cartObserver.observe(cartElem, { attributes: true });\r\n    });\r\n\r\n    function onOpenProductPopup(mutations) {\r\n        for (const mutation of mutations) {\r\n            if (mutation.attributeName === 'class' && mutation.target.classList.contains('t706__cartwin_showed')) {\r\n                return setTimeout(drawTexts, 250);\r\n            }\r\n        }\r\n    }\r\n\r\n    function drawTexts() {\r\n        const products = cart.querySelectorAll('.t706__product');\r\n        products.forEach((productElem) => {\r\n            const textOptions = window.tcart.products?.[productElem?.dataset?.cartProductI]?.textOptions;\r\n            if (!textOptions?.length) {\r\n                return;\r\n            }\r\n            const container = productElem.querySelector('.t706__product-title');\r\n            if (!container) {\r\n                return;\r\n            }\r\n            textOptions.forEach(({ text }) => {\r\n                container.appendChild(createTextElem(text));\r\n            });\r\n        });\r\n    }\r\n\r\n    function createTextElem(text) {\r\n        const elem = document.createElement('div');\r\n        elem.classList.add('t706__product-title__option');\r\n        elem.textContent = text;\r\n        return elem;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/cart/script.js?");

/***/ }),

/***/ "./src/productCard/addInput.js":
/*!*************************************!*\
  !*** ./src/productCard/addInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addInput: () => (/* binding */ addInput),\n/* harmony export */   removeInput: () => (/* binding */ removeInput)\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\n\r\n\r\nconst addInput = (productElement, onValid = () => {}) => {\r\n    const existingInput = productElement.querySelector('.prod-text-input');\r\n    if (existingInput) {\r\n        return existingInput;\r\n    }\r\n\r\n    const { wrapper, input, label } = createInput();\r\n    const container = productElement.querySelector('.js-product-controls-wrapper');\r\n    container.appendChild(wrapper);\r\n    onChange(input?.value, false);\r\n    input.addEventListener('input', (event) => onChange(event?.target?.value));\r\n\r\n    function onChange(value = '', showError = true) {\r\n        const isShort = value.length < _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH;\r\n        const isLong = value.length > _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_LENGTH;\r\n        const isValid = !isShort && !isLong;\r\n        if (isValid) {\r\n            wrapper.classList.remove('invalid');\r\n            label.textContent = '';\r\n        } else if (showError) {\r\n            const msg = isShort ? _utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOO_SHORT_MSG : _utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOO_LONG_MSG;\r\n            label.textContent = isShort ? _utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOO_SHORT_MSG : _utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOO_LONG_MSG;\r\n            wrapper.classList.add('invalid');\r\n        }\r\n        onValid(isValid);\r\n    }\r\n\r\n    function createInput() {\r\n        const wrapper = document.createElement('div');\r\n        wrapper.classList.add('prod-text-input');\r\n        const input = document.createElement('input');\r\n        input.setAttribute('type', 'text');\r\n        input.classList.add('prod-text-input__input');\r\n        const title = document.createElement('div');\r\n        title.classList.add('t-product__option-title', 'prod-text-input__title');\r\n        title.textContent = 'надпись для нанесения (до 29 симв)';\r\n        const label = document.createElement('div');\r\n        label.classList.add('prod-text-input__label');\r\n\r\n        wrapper.appendChild(title);\r\n        wrapper.appendChild(input);\r\n        wrapper.appendChild(label);\r\n\r\n        return { wrapper, input, label };\r\n    }\r\n\r\n    return input;\r\n};\r\n\r\nconst removeInput = (productElement) => {\r\n    const existingInput = productElement.querySelector('.prod-text-input');\r\n    if (existingInput) {\r\n        existingInput.remove();\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/productCard/addInput.js?");

/***/ }),

/***/ "./src/productCard/processProducts.js":
/*!********************************************!*\
  !*** ./src/productCard/processProducts.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   processProducts: () => (/* binding */ processProducts)\n/* harmony export */ });\nconst getOptions = (product) => {\r\n    const options = product.querySelectorAll('.t-product__option-variants');\r\n    return [...options].reduce((acc, option) => {\r\n        const checked = option.querySelector('.t-product__option-item_active input');\r\n        if (!checked) {\r\n            return acc;\r\n        }\r\n        acc[checked.name] = checked.value;\r\n        return acc;\r\n    }, {});\r\n};\r\n\r\nconst compareProducts = (product, uid, selectedOptions) => {\r\n    const { options, gen_uid } = product;\r\n    if (gen_uid !== uid) {\r\n        return false;\r\n    }\r\n    for (const option of options) {\r\n        if (selectedOptions[option.option] !== option.variant) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n};\r\n\r\nconst updateProducts = (textValue, uid, selectedOptions, amount) => {\r\n    window.tcart.products = window.tcart.products.map((product) => {\r\n        console.log(JSON.parse(JSON.stringify(product)));\r\n        const isThatProduct = compareProducts(product, uid, selectedOptions);\r\n        if (!isThatProduct) {\r\n            console.log(1);\r\n            return product;\r\n        }\r\n\r\n        if (!product.textOptions) {\r\n            console.log(2);\r\n            return {\r\n                ...product,\r\n                textOptions: [\r\n                    { text: textValue, amount },\r\n                ]\r\n            }\r\n        }\r\n        const sameOption = product.textOptions.find(({ text }) => text === textValue);\r\n        if (!sameOption) {\r\n            console.log(3);\r\n            return {\r\n                ...product,\r\n                textOptions: [\r\n                    ...product.textOptions,\r\n                    { text: textValue, amount },\r\n                ]\r\n            }\r\n        }\r\n        const updatedOptions = product.textOptions.map((option) => {\r\n            if (option.text === textValue) {\r\n                return { ...option, amount: option.amount + amount };\r\n            }\r\n            return option;\r\n        });\r\n        console.log(4);\r\n        return {\r\n            ...product,\r\n            textOptions: updatedOptions,\r\n        }\r\n    });\r\n};\r\n\r\nconst saveLocalStorage = () => localStorage.setItem('tcart', JSON.stringify(window.tcart));\r\n\r\nconst getProductAmount = (productElement) => {\r\n    const stringAmount = productElement.querySelector('.t-store__prod__quantity-input')?.value;\r\n    if (stringAmount && !isNaN(stringAmount)) {\r\n        return parseInt(stringAmount, 10);\r\n    }\r\n    return 1;\r\n};\r\n\r\nconst processProducts = (textValue, productElement) => {\r\n    if (!window.tcart?.products) {\r\n        return;\r\n    }\r\n    const uid = productElement?.dataset?.productGenUid || null;\r\n    if (!uid) {\r\n        return console.error('Нет uid для продукта', productElement);\r\n    }\r\n    const amount = getProductAmount(productElement);\r\n    const selectedOptions = getOptions(productElement);\r\n\r\n    setTimeout(() => {\r\n        updateProducts(textValue, uid, selectedOptions, amount);\r\n        saveLocalStorage();\r\n    }, 150);\r\n}\n\n//# sourceURL=webpack://lass/./src/productCard/processProducts.js?");

/***/ }),

/***/ "./src/productCard/script.js":
/*!***********************************!*\
  !*** ./src/productCard/script.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProductCard: () => (/* binding */ useProductCard)\n/* harmony export */ });\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ \"./src/utils/functions.js\");\n/* harmony import */ var _addInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addInput */ \"./src/productCard/addInput.js\");\n/* harmony import */ var _processProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processProducts */ \"./src/productCard/processProducts.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/productCard/style.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction useProductCard() {\r\n    let productElement, input, button;\r\n    const popupObserver = new MutationObserver(onOpenProductPopup);\r\n\r\n    window.addEventListener('load', () => {\r\n        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.waitForElement)('.js-store-product').then((card) => {\r\n            productElement = card;\r\n            button = productElement.querySelector('[href=\"#order\"]');\r\n            const popup = card.closest('.t-popup');\r\n            if (popup) {\r\n                popupObserver.observe(popup, { attributes: true });\r\n            } else {\r\n                if ((0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.isCustom)(productElement)) {\r\n                    initCustomProduct();\r\n                }\r\n            }\r\n        });\r\n    });\r\n\r\n    function onOpenProductPopup(mutations) {\r\n        for (const mutation of mutations) {\r\n            if (mutation.attributeName === 'class' && mutation.target.classList.contains('t-popup_show')) {\r\n                if ((0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.isCustom)(productElement)) {\r\n                    initCustomProduct();\r\n                } else {\r\n                    clearCustomProduct();\r\n                }\r\n                return;\r\n            }\r\n        }\r\n    }\r\n\r\n    function initCustomProduct() {\r\n        input = (0,_addInput__WEBPACK_IMPORTED_MODULE_1__.addInput)(productElement, onValid);\r\n        addButtonListener();\r\n    }\r\n\r\n    function clearCustomProduct() {\r\n        (0,_addInput__WEBPACK_IMPORTED_MODULE_1__.removeInput)(productElement);\r\n        onValid(true);\r\n        removeButtonListener();\r\n    }\r\n\r\n    function onValid(isValid) {\r\n        if (isValid) {\r\n            button.classList.remove('disabled');\r\n        } else {\r\n            button.classList.add('disabled');\r\n        }\r\n    }\r\n\r\n    function removeButtonListener() {\r\n        button.removeEventListener('click', onCheckout);\r\n    }\r\n\r\n    function addButtonListener() {\r\n        removeButtonListener();\r\n        button.addEventListener('click', onCheckout);\r\n    }\r\n    \r\n    function onCheckout() {\r\n        const textValue = input.value;\r\n\r\n        (0,_processProducts__WEBPACK_IMPORTED_MODULE_2__.processProducts)(textValue, productElement);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/productCard/script.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CUSTOM_CATEGORY_ID: () => (/* binding */ CUSTOM_CATEGORY_ID),\n/* harmony export */   MAX_LENGTH: () => (/* binding */ MAX_LENGTH),\n/* harmony export */   MIN_LENGTH: () => (/* binding */ MIN_LENGTH),\n/* harmony export */   TOO_LONG_MSG: () => (/* binding */ TOO_LONG_MSG),\n/* harmony export */   TOO_SHORT_MSG: () => (/* binding */ TOO_SHORT_MSG)\n/* harmony export */ });\nconst CUSTOM_CATEGORY_ID = window.CUSTOM_CATEGORY_ID || '710715095531';\r\nconst MAX_LENGTH = window.MAX_LENGTH || 29;\r\nconst MIN_LENGTH = window.MIN_LENGTH || 1;\r\nconst TOO_SHORT_MSG = window.TOO_SHORT_MSG || 'Надпись не может быть пустой';\r\nconst TOO_LONG_MSG = window.TOO_LONG_MSG || 'Надпись не может быть длиннее 29 символов';\n\n//# sourceURL=webpack://lass/./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isCustom: () => (/* binding */ isCustom),\n/* harmony export */   waitForElement: () => (/* binding */ waitForElement)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/utils/constants.js\");\n\r\n\r\nfunction waitForElement(selector = null, getElemFn = null) {\r\n    return new Promise((resolve) => {\r\n        const getElem = selector ? () => document.querySelector(selector) : getElemFn\r\n\r\n        const elem = getElem();\r\n        if (elem) {\r\n            return resolve(elem);\r\n        }\r\n\r\n        const observer = new MutationObserver(() => {\r\n            const elem = getElem();\r\n            if (elem) {\r\n                observer.disconnect();\r\n                resolve(elem);\r\n            }\r\n        });\r\n\r\n        observer.observe(document.body, {\r\n            childList: true,\r\n            subtree: true\r\n        });\r\n    });\r\n}\r\n\r\nfunction isCustom(product) {\r\n    const partUid = product?.dataset.productPartUid;\r\n    return partUid === _constants__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_CATEGORY_ID;\r\n}\n\n//# sourceURL=webpack://lass/./src/utils/functions.js?");

/***/ }),

/***/ "./src/utils/modes.js":
/*!****************************!*\
  !*** ./src/utils/modes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMode: () => (/* binding */ useMode)\n/* harmony export */ });\nconst MODES = {\r\n    PROD: 'prod',\r\n    DEV: 'dev',\r\n    LOCAL: 'local',\r\n};\r\n\r\nconst useMode = () => {\r\n    const currentMode = localStorage.getItem('mode') || MODES.PROD;\r\n\r\n    for (const mode of Object.values(MODES)) {\r\n        if (mode !== currentMode) {\r\n            document.querySelectorAll(`script[data-mode=\"${mode}\"], style[data-mode=\"${mode}\"]`).forEach((element) => element.remove());\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://lass/./src/utils/modes.js?");

/***/ }),

/***/ "./src/utils/waitForElement.js":
/*!*************************************!*\
  !*** ./src/utils/waitForElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   waitForElement: () => (/* binding */ waitForElement)\n/* harmony export */ });\nfunction waitForElement(selector = null, getElemFn = null) {\r\n    return new Promise((resolve) => {\r\n        const getElem = selector ? () => document.querySelector(selector) : getElemFn\r\n\r\n        const elem = getElem();\r\n        if (elem) {\r\n            return resolve(elem);\r\n        }\r\n\r\n        const observer = new MutationObserver(() => {\r\n            const elem = getElem();\r\n            if (elem) {\r\n                observer.disconnect();\r\n                resolve(elem);\r\n            }\r\n        });\r\n\r\n        observer.observe(document.body, {\r\n            childList: true,\r\n            subtree: true\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://lass/./src/utils/waitForElement.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
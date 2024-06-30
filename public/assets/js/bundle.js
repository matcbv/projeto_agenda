/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/models/FormValidator.js":
/*!******************************************!*\
  !*** ./frontend/models/FormValidator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Validator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Validator = /*#__PURE__*/function () {
  function Validator(body) {
    _classCallCheck(this, Validator);
    this.emailMsg = document.querySelector('.email-message');
    this.passwordMsg = document.querySelector('.password-message');
    this.body = body;
    this.errors = 0;
  }
  return _createClass(Validator, [{
    key: "checkRegister",
    value: function checkRegister() {
      this.emailMsg.innerText = '';
      this.passwordMsg.innerText = '';
      if (!this.body.querySelector('#email').value) {
        this.emailMsg.innerText = 'Email é obrigatório.';
        this.errors++;
      }
      if (!this.body.querySelector('#password').value) {
        this.passwordMsg.innerText = 'Senha é obrigatória.';
        this.errors++;
      }
      if (this.body.querySelector('#password').value !== this.body.querySelector('#passwordConfirmation').value) {
        this.passwordMsg.innerText = 'Senhas não conferem.';
        this.errors++;
      }
      if (this.body.querySelector('#password').value.length < 8 || this.body.querySelector('#password').value.length > 20) {
        this.passwordMsg.innerText = 'A Senha precisa ter de 8 a 20 caracteres.';
        this.errors++;
      }
    }
  }, {
    key: "checkLogin",
    value: function checkLogin() {
      this.emailMsg.innerText = '';
      this.passwordMsg.innerText = '';
      if (!this.body.querySelector('#email').value) {
        this.emailMsg.innerText = 'Email é obrigatório.';
        this.errors++;
      }
      if (!this.body.querySelector('#password').value) {
        this.passwordMsg.innerText = 'Senha é obrigatória.';
        this.errors++;
      }
    }
  }]);
}();


/***/ }),

/***/ "./frontend/assets/css/error404.css":
/*!******************************************!*\
  !*** ./frontend/assets/css/error404.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/footer.css":
/*!****************************************!*\
  !*** ./frontend/assets/css/footer.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/form.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/form.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/general.css":
/*!*****************************************!*\
  !*** ./frontend/assets/css/general.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/header.css":
/*!****************************************!*\
  !*** ./frontend/assets/css/header.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/main.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/main.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/messages.css":
/*!******************************************!*\
  !*** ./frontend/assets/css/messages.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_general_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/general.css */ "./frontend/assets/css/general.css");
/* harmony import */ var _assets_css_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/header.css */ "./frontend/assets/css/header.css");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/main.css */ "./frontend/assets/css/main.css");
/* harmony import */ var _assets_css_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/footer.css */ "./frontend/assets/css/footer.css");
/* harmony import */ var _assets_css_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/form.css */ "./frontend/assets/css/form.css");
/* harmony import */ var _assets_css_error404_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/error404.css */ "./frontend/assets/css/error404.css");
/* harmony import */ var _assets_css_messages_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/messages.css */ "./frontend/assets/css/messages.css");
/* harmony import */ var _models_FormValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/FormValidator */ "./frontend/models/FormValidator.js");
// Iremos importar nossos estilos a serem interpretados pelo MiniCssExtractPlugin. O caminho deles deve ser relativo ao arquivo atual:








var registerForm = document.querySelector('.register-form');
var loginForm = document.querySelector('.login-form');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var validator = new _models_FormValidator__WEBPACK_IMPORTED_MODULE_7__["default"](e.target);
    validator.checkRegister();
    if (validator.errors === 0) {
      e.target.submit();
    } else return;
  });
}
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var validator = new _models_FormValidator__WEBPACK_IMPORTED_MODULE_7__["default"](e.target);
    validator.checkLogin();
    if (validator.errors === 0) {
      e.target.submit();
    } else return;
  });
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map
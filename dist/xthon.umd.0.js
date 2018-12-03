((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[0,7,38],{

/***/ "028d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForgetPassword_vue_vue_type_style_index_0_id_73083722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("121a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForgetPassword_vue_vue_type_style_index_0_id_73083722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForgetPassword_vue_vue_type_style_index_0_id_73083722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalForgetPassword_vue_vue_type_style_index_0_id_73083722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "121a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1743":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2e53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return validateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return validatePasswordLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return validatePasswordNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return validatePasswordCapital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return validatePasswordLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return validatePasswordSpecial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validateCreditCardNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validateExpirationDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return validateZipCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return validateTextNoHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return validateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getYouTubeID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatNumber; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4917");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6b54");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);



// Source: https://stackoverflow.com/a/1373724
function validateEmail(email) {
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/; // eslint-disable-line max-len

  return re.test(String(email).toLowerCase());
}
function validateName(name) {
  if (name && name.length >= 2) {
    return true;
  }

  return false;
}
function validatePassword(password) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W|_])[A-Za-z\d\W|_]{8,}/;
  return re.test(String(password));
}
function validatePasswordLength(password) {
  return password.length >= 8;
}
function validatePasswordNumber(password) {
  var re = /^(?=.*\d)/;
  return re.test(String(password));
}
function validatePasswordCapital(password) {
  var re = /^(?=.*[A-Z])/;
  return re.test(String(password));
}
function validatePasswordLower(password) {
  var re = /^(?=.*[a-z])/;
  return re.test(String(password));
}
function validatePasswordSpecial(password) {
  var re = /\W|_/g;
  return re.test(String(password));
}
function validateCreditCardNumber(number) {
  if (number) {
    return number.toString().length === 16;
  }

  return false;
}
function validateExpirationDate(month, year) {
  var d = new Date();
  var currentYear = d.getFullYear() - 2000;

  if (year > currentYear) {
    return true;
  }

  if (month >= d.getMonth() && year === currentYear) {
    return true;
  }

  return false;
}
function validateZipCode(code) {
  if (code) {
    return code.toString().length === 5;
  }

  return false;
}
function validateTextNoHtml(text, allowEmpty) {
  var re = /<[a-z/][\s\S]*>/i;

  if (!re.test(text)) {
    if (!text || text.replace(/[\n\r]/g, '').length === 0) {
      if (allowEmpty) {
        return true;
      }

      return false;
    }

    return true;
  }

  return false;
}
function validateURL(url) {
  var re = /^((http|https):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

  if (re.test(url)) {
    return true;
  }

  return false;
}
function getYouTubeID(url) {
  if (!url) {
    return null;
  }

  var re = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line no-useless-escape

  var match = url.match(re);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return null;
}
function formatNumber(newVal, oldVal, max) {
  var notANumber = newVal && isNaN(newVal.charAt(newVal.length - 1));
  var tooLarge = newVal && newVal.length > max;

  if (notANumber || tooLarge) {
    return oldVal;
  }

  return newVal;
}

/***/ }),

/***/ "336d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "3dcd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPassword_vue_vue_type_style_index_0_id_1fed21e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebe0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPassword_vue_vue_type_style_index_0_id_1fed21e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPassword_vue_vue_type_style_index_0_id_1fed21e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPassword_vue_vue_type_style_index_0_id_1fed21e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "42ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLogin_vue_vue_type_style_index_0_id_10ae3fea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ba0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLogin_vue_vue_type_style_index_0_id_10ae3fea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLogin_vue_vue_type_style_index_0_id_10ae3fea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLogin_vue_vue_type_style_index_0_id_10ae3fea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "732d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputName_vue_vue_type_style_index_0_id_1281aa44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("336d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputName_vue_vue_type_style_index_0_id_1281aa44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputName_vue_vue_type_style_index_0_id_1281aa44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputName_vue_vue_type_style_index_0_id_1281aa44_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "853f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login/ModalForgetPassword.vue?vue&type=template&id=73083722&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{attrs:{"prevent-body-scroll":false,"state":_vm.childState,"enable-esc":true},on:{"modal:close":function($event){_vm.closeModals()},"modal:open":function($event){_vm.childState = true}}},[_c('div',{attrs:{"slot":"trigger"},slot:"trigger"},[_c('a',[_vm._v("Forgot password?")])]),_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Password Recovery")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('UserDialog',{attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"disable-close":_vm.userDialogSpinner},on:{"modal:close":function($event){_vm.closeModals()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Processing...")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),_c('form',{on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.validateSubmit()}}},[(!this.showEmailInput)?_c('div',[_c('p',{staticClass:"is-centered"},[_vm._v("We are going to send you a temporary password to the email address you entered. Please use that password to log in.")])]):_vm._e(),(this.showEmailInput)?_c('div',[_c('p',{staticClass:"is-centered"},[_vm._v("Please enter your email below. We are going to send you a temporary password to that email address. Please use that password to log in.")]),_c('InputEmail',{key:_vm.email,attrs:{"label":"Email","required":true},on:{"input:valid":function($event){_vm.validEmailInput = true},"input:invalid":function($event){_vm.validEmailInput = false},"input:email":function($event){_vm.emailInput = $event}}})],1):_vm._e(),_c('div',{staticClass:"is-centered forgot-password-cta",on:{"click":function($event){$event.preventDefault();_vm.requestPassword()}}},[_c('button',{staticClass:"button is-centered is-large is-warning",attrs:{"type":"submit","disabled":_vm.submitButtonDisabled}},[_vm._v("Request new password")])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/login/ModalForgetPassword.vue?vue&type=template&id=73083722&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Modal.vue + 4 modules
var Modal = __webpack_require__("a0d0");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login/ModalForgetPassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ModalForgetPasswordvue_type_script_lang_js_ = ({
  props: ['email'],
  components: {
    UserDialog: function UserDialog() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "b7cf"));
    },
    InputEmail: function InputEmail() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "ba03"));
    },
    Modal: Modal["default"]
  },
  computed: {
    /*
     * Show the email input only if the previously entered email is not valid.
     */
    showEmailInput: function showEmailInput() {
      if (validator["d" /* validateEmail */](this.email)) {
        return false;
      }

      return true;
    },
    submitButtonDisabled: function submitButtonDisabled() {
      if (this.validEmailInput || !this.showEmailInput) {
        return false;
      }

      return true;
    }
  },
  data: function data() {
    return {
      userDialogSpinner: false,
      userDialogModal: false,
      userDialogDisableClose: false,
      userDialogMessage: '',
      childState: false,
      emailInput: '',
      validEmailInput: false
    };
  },
  methods: {
    closeModals: function closeModals() {
      this.childState = false;
      this.userDialogModal = false;
    },
    validateSubmit: function validateSubmit() {
      if (!this.submitButtonDisabled) {
        this.requestPassword();
      }
    },

    /*
     * Request a password reset.
     * Use a temporary dialog window while the API call is performed.
     * Display the answer in the dialog box.
     */
    requestPassword: function requestPassword() {
      var _this = this;

      this.userDialogSpinner = true;
      this.userDialogModal = true;
      this.userDialogMessage = '';
      return this.$store.dispatch('SET_TEMPORARY_PASSWORD', {
        email: this.emailInput
      }).then(function () {
        _this.userDialogMessage = 'Your password has been reset. Please check your email.';
        _this.userDialogSpinner = false;
      }).catch(function (err) {
        _this.userDialogMessage = 'There has been an error. Please try again later.';
        _this.userDialogSpinner = false;
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/login/ModalForgetPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_ModalForgetPasswordvue_type_script_lang_js_ = (ModalForgetPasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/login/ModalForgetPassword.vue?vue&type=style&index=0&id=73083722&scoped=true&lang=scss&
var ModalForgetPasswordvue_type_style_index_0_id_73083722_scoped_true_lang_scss_ = __webpack_require__("028d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/login/ModalForgetPassword.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  login_ModalForgetPasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "73083722",
  null
  
)

component.options.__file = "ModalForgetPassword.vue"
/* harmony default export */ var ModalForgetPassword = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "9a86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ba0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InputPassword.vue?vue&type=template&id=1fed21e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.requireCurrentPassword)?_c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line password-input-wrapper is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"},[_c('label',{staticClass:"label",attrs:{"for":("input-current-password_" + _vm._uid)}},[_vm._v("Current password:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"lock","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.currentPassword),expression:"form.currentPassword"}],staticClass:"input",attrs:{"type":"password","name":"action","placeholder":"","required":_vm.required,"autocomplete":"current-password","id":("input-current-password_" + _vm._uid)},domProps:{"value":(_vm.form.currentPassword)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "currentPassword", $event.target.value)},function($event){_vm.$emit('input:currentPassword', $event.target.value)}]}})],1)])]):_vm._e(),_c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line password-input-wrapper is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"},[_c('label',{staticClass:"label",attrs:{"for":("input-password_" + _vm._uid)}},[_vm._v(_vm._s(_vm.label)+":")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"lock","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.password),expression:"form.password"}],staticClass:"input",attrs:{"type":"password","name":"action","placeholder":"","required":_vm.required,"autocomplete":"current-password new-password","id":("input-password_" + _vm._uid)},domProps:{"value":(_vm.form.password)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "password", $event.target.value)},function($event){_vm.$emit('input:password', $event.target.value)}]}})],1)]),(_vm.passwordErrorMessage || _vm.errorMessage)?_c('div',{staticClass:"column is-5 is-offset-5"},[_c('span',{staticClass:"error-message"},[_vm._v(_vm._s(_vm.passwordErrorMessage)+_vm._s(_vm.errorMessage))])]):_vm._e()]),(_vm.duplicate)?_c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line password-input-wrapper is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"},[_c('label',{staticClass:"label",attrs:{"for":("input-password-confirmation_" + _vm._uid)}},[_vm._v(_vm._s(_vm.label)+" confirmation:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"lock","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.passwordConfirmation),expression:"form.passwordConfirmation"}],staticClass:"input",attrs:{"type":"password","name":"action","placeholder":"","required":_vm.required,"autocomplete":"current-password new-password","id":("input-password-confirmation_" + _vm._uid)},domProps:{"value":(_vm.form.passwordConfirmation)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "passwordConfirmation", $event.target.value)},function($event){_vm.$emit('input:passwordConfirmation', $event.target.value)}]}})],1)]),(_vm.passwordConfirmationErrorMessage || _vm.errorMessage)?_c('div',{staticClass:"column is-5 is-offset-5"},[_c('span',{staticClass:"error-message"},[_vm._v(_vm._s(_vm.passwordConfirmationErrorMessage)+_vm._s(_vm.errorMessage))])]):_vm._e()]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/InputPassword.vue?vue&type=template&id=1fed21e2&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InputPassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InputPasswordvue_type_script_lang_js_ = ({
  props: ['label', 'duplicate', 'required', 'provideFeedback', 'errorMessage', 'requireCurrentPassword'],
  data: function data() {
    return {
      form: {},
      passwordErrorMessage: '',
      passwordConfirmationErrorMessage: '',
      timeout: null,
      timeoutConf: null,
      errorMessageTimeout: 6000
    };
  },
  components: {
    Icons: Icons["default"]
  },
  methods: {
    validateAllFields: function validateAllFields() {
      var validCurrentPass = validator["g" /* validatePassword */](this.form.currentPassword) || !this.requireCurrentPassword;
      var validPass = validator["g" /* validatePassword */](this.form.password);
      var validPassConf = this.form.password === this.form.passwordConfirmation || !this.duplicate;

      if (validCurrentPass && validPass && validPassConf) {
        this.$emit('input:valid');
        return true;
      }

      this.$emit('input:invalid');
      return false;
    },
    refreshPasswordConfirmationField: function refreshPasswordConfirmationField() {
      var _this = this;

      this.validateAllFields();
      this.passwordConfirmationErrorMessage = '';
      clearTimeout(this.timeoutConf);
      this.timeoutConf = setTimeout(function () {
        if (_this.form.passwordConfirmation !== _this.form.password) {
          _this.passwordConfirmationErrorMessage = 'The passwords do not match.';
        } else {
          _this.passwordConfirmationErrorMessage = '';
        }
      }, this.errorMessageTimeout);
    },
    refreshPasswordField: function refreshPasswordField() {
      var _this2 = this;

      this.validateAllFields();
      this.passwordErrorMessage = '';
      clearTimeout(this.timeout);

      if (this.provideFeedback) {
        this.timeout = setTimeout(function () {
          if (!validator["i" /* validatePasswordLength */](_this2.form.password)) {
            _this2.passwordErrorMessage += 'The password needs to be at least 8 characters long. ';
          }

          if (!validator["h" /* validatePasswordCapital */](_this2.form.password)) {
            _this2.passwordErrorMessage += 'Add at least one capital letter. ';
          }

          if (!validator["j" /* validatePasswordLower */](_this2.form.password)) {
            _this2.passwordErrorMessage += 'Add at least one lower-case letter. ';
          }

          if (!validator["k" /* validatePasswordNumber */](_this2.form.password)) {
            _this2.passwordErrorMessage += 'Add at least one number. ';
          }

          if (!validator["l" /* validatePasswordSpecial */](_this2.form.password)) {
            _this2.passwordErrorMessage += 'Add at least one special character. ';
          }
        }, this.errorMessageTimeout);
      }
    }
  },
  watch: {
    'form.currentPassword': function formCurrentPassword() {
      this.validateAllFields();
    },
    'form.password': function formPassword() {
      this.validateAllFields();
      this.refreshPasswordConfirmationField();
      this.refreshPasswordField();
    },
    'form.passwordConfirmation': function formPasswordConfirmation(newVal, oldVal) {
      this.validateAllFields();
      this.refreshPasswordConfirmationField();
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/InputPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InputPasswordvue_type_script_lang_js_ = (InputPasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/InputPassword.vue?vue&type=style&index=0&id=1fed21e2&scoped=true&lang=scss&
var InputPasswordvue_type_style_index_0_id_1fed21e2_scoped_true_lang_scss_ = __webpack_require__("3dcd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/InputPassword.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InputPasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1fed21e2",
  null
  
)

component.options.__file = "InputPassword.vue"
/* harmony default export */ var InputPassword = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a0d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Modal.vue?vue&type=template&id=4e58d0c1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"modal",class:{'is-active': _vm.state, 'dark': _vm.theme === 'dark'}},[_c('div',{staticClass:"modal-background",on:{"click":function($event){_vm.closeModal()},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.closeModal()}}}),_c('div',{staticClass:"modal-content donate-view donate-view__wrapper inner-close small-modal",class:(_vm.size + "-modal")},[_c('h1',{staticClass:"modal-title"},[_vm._t("header")],2),_vm._t("content"),_c('transition',{attrs:{"name":"fade"}},[(!_vm.disableClose)?_c('button',{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{"click":function($event){$event.preventDefault();_vm.closeModal()}}}):_vm._e()])],2)]),_c('div',{on:{"click":function($event){_vm.openModal()}}},[_vm._t("trigger")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/Modal.vue?vue&type=template&id=4e58d0c1&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  props: ['disableClose', 'preventBodyScroll', 'state', 'size', 'enableEsc', 'theme'],
  data: function data() {
    return {
      modalActive: false
    };
  },
  methods: {
    openModal: function openModal() {
      this.$emit('modal:open');
    },
    closeModal: function closeModal() {
      this.$emit('modal:close');
    }
  },
  mounted: function mounted() {
    var _this = this;

    /*
     * Create an event listener so that the modal can be closed on esc key press.
     */
    if (this.enableEsc) {
      document.body.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
          _this.closeModal();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/general/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/Modal.vue?vue&type=style&index=0&id=4e58d0c1&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss_ = __webpack_require__("b4bc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/Modal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4e58d0c1",
  null
  
)

component.options.__file = "Modal.vue"
/* harmony default export */ var Modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a4ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InputName.vue?vue&type=template&id=1281aa44&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"},[_c('label',{staticClass:"label",attrs:{"for":("input-name-first_" + _vm._uid)}},[_vm._v("First name:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"user","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.firstname),expression:"form.firstname"}],staticClass:"input",attrs:{"type":"text","placeholder":"","required":_vm.required,"autocomplete":"given-name","id":("input-name-first_" + _vm._uid)},domProps:{"value":(_vm.form.firstname)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "firstname", $event.target.value)},function($event){_vm.$emit('input:first', $event.target.value)}]}})],1)]),(_vm.firstnameErrorMessage)?_c('div',{staticClass:"column is-5 is-offset-5"},[_c('span',{staticClass:"error-message"},[_vm._v(_vm._s(_vm.firstnameErrorMessage))])]):_vm._e()]),_c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"},[_c('label',{staticClass:"label",attrs:{"for":("input-name-last_" + _vm._uid)}},[_vm._v("Last name:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"user","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model:value",value:(_vm.form.lastname),expression:"form.lastname",arg:"value"}],staticClass:"input",attrs:{"type":"text","placeholder":"","required":_vm.required,"autocomplete":"family-name","id":("input-name-last_" + _vm._uid)},domProps:{"value":(_vm.form.lastname)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "lastname", $event.target.value)},function($event){_vm.$emit('input:last', $event.target.value)}]}})],1)]),(_vm.lastnameErrorMessage)?_c('div',{staticClass:"column is-5 is-offset-5"},[_c('span',{staticClass:"error-message"},[_vm._v(_vm._s(_vm.lastnameErrorMessage))])]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/InputName.vue?vue&type=template&id=1281aa44&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InputName.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InputNamevue_type_script_lang_js_ = ({
  props: ['label', 'required'],
  data: function data() {
    return {
      form: {},
      firstnameErrorMessage: '',
      lastnameErrorMessage: '',
      firstnameTimeout: null,
      lastnameTimeout: null,
      timeout: null,
      errorMessageTimeout: 5000
    };
  },
  components: {
    Icons: Icons["default"]
  },
  methods: {
    validateAllFields: function validateAllFields() {
      if (validator["f" /* validateName */](this.form.firstname) && validator["f" /* validateName */](this.form.lastname)) {
        this.$emit('input:valid');
        return true;
      }

      this.$emit('input:invalid');
      return false;
    },
    refreshFirstNameValidation: function refreshFirstNameValidation() {
      var _this = this;

      this.firstnameErrorMessage = '';
      clearTimeout(this.firstnameTimeout);
      this.firstnameTimeout = setTimeout(function () {
        if (!validator["f" /* validateName */](_this.form.firstname)) {
          _this.firstnameErrorMessage = 'This field is required';
        } else {
          _this.firstnameErrorMessage = '';
        }
      }, this.errorMessageTimeout);
    },
    refreshLastNameValidation: function refreshLastNameValidation() {
      var _this2 = this;

      this.lastnameErrorMessage = '';
      clearTimeout(this.lastnameTimeout);
      this.lastnameTimeout = setTimeout(function () {
        if (!validator["f" /* validateName */](_this2.form.lastname)) {
          _this2.lastnameErrorMessage = 'This field is required';
        } else {
          _this2.lastnameErrorMessage = '';
        }
      }, this.errorMessageTimeout);
    }
  },
  watch: {
    'form.firstname': function formFirstname() {
      this.validateAllFields();
      this.refreshFirstNameValidation();
    },
    'form.lastname': function formLastname() {
      this.validateAllFields();
      this.refreshLastNameValidation();
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/InputName.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InputNamevue_type_script_lang_js_ = (InputNamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/InputName.vue?vue&type=style&index=0&id=1281aa44&scoped=true&lang=scss&
var InputNamevue_type_style_index_0_id_1281aa44_scoped_true_lang_scss_ = __webpack_require__("732d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/InputName.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InputNamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1281aa44",
  null
  
)

component.options.__file = "InputName.vue"
/* harmony default export */ var InputName = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "b4bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1743");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ba03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InputEmail.vue?vue&type=template&id=6dd9abbe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line email-input-wrapper is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"},[_c('label',{staticClass:"label",attrs:{"for":("input-email_" + _vm._uid)}},[_vm._v(_vm._s(_vm.label))])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"email","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],staticClass:"input",attrs:{"type":"text","name":"action","placeholder":"","autocomplete":"email","required":_vm.required,"id":("input-email_" + _vm._uid)},domProps:{"value":(_vm.form.email)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value)},function($event){_vm.$emit('input:email', $event.target.value)}]}})],1)]),(_vm.errorMessage)?_c('div',{staticClass:"column is-5 is-offset-5"},[_c('span',{staticClass:"error-message"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/InputEmail.vue?vue&type=template&id=6dd9abbe&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InputEmail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InputEmailvue_type_script_lang_js_ = ({
  props: ['label', 'required'],
  data: function data() {
    return {
      form: {},
      errorMessage: '',
      errorMessageTimeout: 5000,
      timeout: null
    };
  },
  components: {
    Icons: Icons["default"]
  },
  methods: {
    validateAllFields: function validateAllFields() {
      if (validator["d" /* validateEmail */](this.form.email)) {
        this.$emit('input:valid');
        return true;
      }

      this.$emit('input:invalid');
      return false;
    },
    refreshFieldValidation: function refreshFieldValidation() {
      var _this = this;

      this.errorMessage = '';
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        if (!validator["d" /* validateEmail */](_this.form.email)) {
          _this.errorMessage = 'Email is invalid';
        } else {
          _this.errorMessage = '';
        }
      }, this.errorMessageTimeout);
    }
  },
  watch: {
    'form.email': function formEmail() {
      this.validateAllFields();
      this.refreshFieldValidation();
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/InputEmail.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InputEmailvue_type_script_lang_js_ = (InputEmailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/InputEmail.vue?vue&type=style&index=0&id=6dd9abbe&scoped=true&lang=scss&
var InputEmailvue_type_style_index_0_id_6dd9abbe_scoped_true_lang_scss_ = __webpack_require__("cd13");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/InputEmail.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InputEmailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6dd9abbe",
  null
  
)

component.options.__file = "InputEmail.vue"
/* harmony default export */ var InputEmail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "cd13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputEmail_vue_vue_type_style_index_0_id_6dd9abbe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a86");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputEmail_vue_vue_type_style_index_0_id_6dd9abbe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputEmail_vue_vue_type_style_index_0_id_6dd9abbe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputEmail_vue_vue_type_style_index_0_id_6dd9abbe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ebe0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fa8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login/SocialLogin.vue?vue&type=template&id=10ae3fea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("header"),_c('div',{staticClass:"trigger social-signup"},[(_vm.showOnly === 'facebook' || !_vm.showOnly)?_c('a',{staticClass:"button is-medium social-button__facebook",on:{"click":function($event){_vm.openLoginBox()}}},[_c('span',{staticClass:"icon is-medium"},[_c('Icons',{attrs:{"icon":"facebook","iconwidth":"28px","iconheight":"28px","color":"#fff"}})],1),_c('span',[_vm._v("Facebook")])]):_vm._e(),(_vm.showOnly === 'gmail' || !_vm.showOnly)?_c('a',{staticClass:"button is-medium social-button__gmail",on:{"click":function($event){_vm.openLoginBox()}}},[_c('span',{staticClass:"icon is-medium"},[_c('Icons',{attrs:{"icon":"gmail","iconwidth":"28px","iconheight":"28px","color":"#fff"}})],1),_c('span',[_vm._v("Gmail")])]):_vm._e(),(_vm.showOnly === 'twitter' || !_vm.showOnly)?_c('a',{staticClass:"button is-medium social-button__twitter",on:{"click":function($event){_vm.openLoginBox()}}},[_c('span',{staticClass:"icon is-medium"},[_c('Icons',{attrs:{"icon":"twitter","iconwidth":"28px","iconheight":"28px","color":"#fff"}})],1),_c('span',[_vm._v("Twitter")])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/login/SocialLogin.vue?vue&type=template&id=10ae3fea&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login/SocialLogin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SocialLoginvue_type_script_lang_js_ = ({
  props: ['showOnly'],
  components: {
    Icons: Icons["default"]
  },
  methods: {
    openLoginBox: function openLoginBox() {
      console.log('open social login');
    }
  }
});
// CONCATENATED MODULE: ./src/components/login/SocialLogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_SocialLoginvue_type_script_lang_js_ = (SocialLoginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/login/SocialLogin.vue?vue&type=style&index=0&id=10ae3fea&scoped=true&lang=scss&
var SocialLoginvue_type_style_index_0_id_10ae3fea_scoped_true_lang_scss_ = __webpack_require__("42ce");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/login/SocialLogin.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  login_SocialLoginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "10ae3fea",
  null
  
)

component.options.__file = "SocialLogin.vue"
/* harmony default export */ var SocialLogin = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.umd.0.js.map
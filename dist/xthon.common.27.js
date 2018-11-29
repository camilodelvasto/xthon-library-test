((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[27,57,58,70],{

/***/ "2013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("84fe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2606":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3372":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shareOnTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shareOnLinkedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shareByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shareOnFacebook; });
/* unused harmony export popUpWindow */
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Share utilities. Includes a pop-up window and sharer utilities
 * coded specifically for each service.
 * The functions can be invoked with urlParams to be added on top of the current URL to be shared.
 */
function shareOnTwitter() {
  var urlParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var text = arguments.length > 1 ? arguments[1] : undefined;
  var via = arguments.length > 2 ? arguments[2] : undefined;
  var title = arguments.length > 3 ? arguments[3] : undefined;
  var shareUrl = "".concat(window.location.origin).concat(window.location.pathname);
  var newText = stripTags(text);

  if (urlParams) {
    shareUrl += "?".concat(urlParams);
  }

  if (newText.length > 111) {
    newText = "".concat(newText.substring(0, 111), "...");
  }

  var shareServiceUrl = 'https://twitter.com/intent/tweet/';
  popUpWindow("".concat(shareServiceUrl, "?url=").concat(encodeURIComponent(shareUrl), "&text=").concat(encodeURI(newText), "&via=").concat(encodeURI(via)), "".concat(encodeURI(title)), 450, 320);
}
function shareOnLinkedIn(urlParams, text, via, title) {
  var shareUrl = "".concat(window.location.origin).concat(window.location.pathname);
  var shareServiceUrl = 'http://www.linkedin.com/shareArticle/';
  var newText = stripTags(text);

  if (urlParams) {
    shareUrl += "?".concat(urlParams);
  }

  if (newText.length > 211) {
    newText = "".concat(newText.substring(0, 211), "...");
  }

  popUpWindow("".concat(shareServiceUrl, "?mini=true&url=").concat(encodeURIComponent(shareUrl), "&text=").concat(encodeURI(newText)), "".concat(encodeURI(title)), 650, 420);
}
function shareByEmail(urlParams, text, via, title) {
  document.querySelector('.at-share-btn').click();
}
function shareOnFacebook(urlParams, text, via, title) {
  var shareUrl = "".concat(window.location.origin).concat(window.location.pathname);

  if (urlParams) {
    shareUrl += "?".concat(urlParams);
  }

  var newText = stripTags(text);

  if (newText.length > 140) {
    newText = "".concat(newText.substring(0, 140), "...");
  }

  if (window) {
    window.FB.ui({
      method: 'share',
      href: encodeURIComponent(shareUrl),
      quote: encodeURI(newText),
      hashtag: "#".concat(via)
    }, function (response) {
      return response;
    });
  }
}
function popUpWindow(url, title, w, h) {
  // Credit goes to https://stackoverflow.com/a/16861050/1176464
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;
  var newWindow = window.open(url, title, "scrollbars=yes, width=".concat(w, ", height=").concat(h, ", top=").concat(top, ", left=").concat(left)); // Puts focus on the newWindow

  if (window.focus) {
    newWindow.focus();
  }
}

function stripTags(text) {
  return text.replace(/(<([^>]+)>)/ig, '');
}

/***/ }),

/***/ "4052":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4706":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7680122-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Icons.vue?vue&type=template&id=74a2d538&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-wrapper"},[(_vm.icon === 'link')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}})]):_vm._e(),(_vm.icon === 'camera')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"}})]):_vm._e(),(_vm.icon === 'crop-square')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"}})]):_vm._e(),(_vm.icon === 'crop-landscape')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z"}})]):_vm._e(),(_vm.icon === 'crop-portrait')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M17,19H7V5H17M17,3H7A2,2 0 0,0 5,5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z"}})]):_vm._e(),(_vm.icon === 'email')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"}})]):_vm._e(),(_vm.icon === 'calendar')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"}})]):_vm._e(),(_vm.icon === 'check')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})]):_vm._e(),(_vm.icon === 'bike')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z"}})]):_vm._e(),(_vm.icon === 'chart-line-variant')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"}})]):_vm._e(),(_vm.icon === 'hash')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z"}})]):_vm._e(),(_vm.icon === 'heart')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})]):_vm._e(),(_vm.icon === 'gmail')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}})]):_vm._e(),(_vm.icon === 'linkedin')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}})]):_vm._e(),(_vm.icon === 'chain')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}})]):_vm._e(),(_vm.icon === 'location')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"}})]):_vm._e(),(_vm.icon === 'share')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"}})]):_vm._e(),(_vm.icon === 'bubble')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20"}})]):_vm._e(),(_vm.icon === 'money')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M11.8,10.9C9.53,10.31 8.8,9.7 8.8,8.75C8.8,7.66 9.81,6.9 11.5,6.9C13.28,6.9 13.94,7.75 14,9H16.21C16.14,7.28 15.09,5.7 13,5.19V3H10V5.16C8.06,5.58 6.5,6.84 6.5,8.77C6.5,11.08 8.41,12.23 11.2,12.9C13.7,13.5 14.2,14.38 14.2,15.31C14.2,16 13.71,17.1 11.5,17.1C9.44,17.1 8.63,16.18 8.5,15H6.32C6.44,17.19 8.08,18.42 10,18.83V21H13V18.85C14.95,18.5 16.5,17.35 16.5,15.3C16.5,12.46 14.07,11.5 11.8,10.9Z"}})]):_vm._e(),(_vm.icon === 'facebook')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"}})]):_vm._e(),(_vm.icon === 'instagram')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}})]):_vm._e(),(_vm.icon === 'plus')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}})]):_vm._e(),(_vm.icon === 'target')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M11,2V4.07C7.38,4.53 4.53,7.38 4.07,11H2V13H4.07C4.53,16.62 7.38,19.47 11,19.93V22H13V19.93C16.62,19.47 19.47,16.62 19.93,13H22V11H19.93C19.47,7.38 16.62,4.53 13,4.07V2M11,6.08V8H13V6.09C15.5,6.5 17.5,8.5 17.92,11H16V13H17.91C17.5,15.5 15.5,17.5 13,17.92V16H11V17.91C8.5,17.5 6.5,15.5 6.08,13H8V11H6.09C6.5,8.5 8.5,6.5 11,6.08M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z"}})]):_vm._e(),(_vm.icon === 'alarm')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"}})]):_vm._e(),(_vm.icon === 'twitter')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}})]):_vm._e(),(_vm.icon === 'chevron-down')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}})]):_vm._e(),(_vm.icon === 'user')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}})]):_vm._e(),(_vm.icon === 'credit-card')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}})]):_vm._e(),(_vm.icon === 'pencil')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}})]):_vm._e(),(_vm.icon === 'close-circle')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}})]):_vm._e(),(_vm.icon === 'lock')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}})]):_vm._e(),(_vm.icon === 'usd')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"}})]):_vm._e(),(_vm.icon === 'search')?_c('svg',{staticStyle:{"fill":"none","fill-rule":"evenodd","clip-rule":"evenodd"},style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight), stroke: ("" + _vm.color)}),attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:serif":"http://www.serif.com/","width":"100%","height":"100%","viewBox":"0 0 213 213","version":"1.1","xml:space":"preserve"}},[_c('g',{attrs:{"transform":"matrix(1,0,0,1,-10379.2,-74.9986)"}},[_c('g',{attrs:{"transform":"matrix(8.33333,0,0,8.33333,0,0)"}},[_c('g',{attrs:{"transform":"matrix(1,0,0,1,1255.69,12.7766)"}},[_c('path',{staticStyle:{"stroke-width":"1.83px"},attrs:{"d":"M0,12.825C3.542,12.825 6.413,9.954 6.413,6.412C6.413,2.87 3.542,0 0,0C-3.542,0 -6.413,2.87 -6.413,6.412C-6.413,9.954 -3.542,12.825 0,12.825Z"}})])]),_c('g',{attrs:{"transform":"matrix(8.33333,0,0,8.33333,0,0)"}},[_c('g',{attrs:{"transform":"matrix(0.70716,0.707054,0.707054,-0.70716,1263.88,22.6599)"}},[_c('path',{staticStyle:{"stroke-width":"1.83px","stroke-linecap":"round"},attrs:{"d":"M-1.384,-3.341L8.066,-3.341"}})])])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/Icons.vue?vue&type=template&id=74a2d538&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Icons.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Iconsvue_type_script_lang_js_ = ({
  props: ['icon', 'iconwidth', 'iconheight', 'color']
});
// CONCATENATED MODULE: ./src/components/general/Icons.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_Iconsvue_type_script_lang_js_ = (Iconsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/Icons.vue?vue&type=style&index=0&id=74a2d538&scoped=true&lang=scss&
var Iconsvue_type_style_index_0_id_74a2d538_scoped_true_lang_scss_ = __webpack_require__("2013");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/Icons.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_Iconsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "74a2d538",
  null
  
)

component.options.__file = "Icons.vue"
/* harmony default export */ var Icons = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5249":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("684e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5abe":
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {
'use strict';


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));


/***/ }),

/***/ "623f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VLazyImagePlugin", function() { return VLazyImagePlugin; });
var VLazyImageComponent = {
  props: {
    src: {
      type: String,
      required: true
    },
    srcPlaceholder: {
      type: String,
      default: ''
    },
    srcset: {
      type: String
    },
    isBackground: {
      type: Boolean
    },
    isEditable: {
      type: Boolean
    },
    intersectionOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    defaultText: {
      type: String
    }
  },
  data: function data() {
    return {
      observer: null,
      intersected: false,
      loaded: false
    };
  },
  computed: {
    srcImage: function srcImage() {
      return this.intersected ? this.src : this.srcPlaceholder;
    },
    srcsetImage: function srcsetImage() {
      return this.intersected && this.srcset ? this.srcset : false;
    }
  },
  render: function render(h) {
    if (this.isBackground) {
      return h('div', {
        style: {
          'background-image': "url(".concat(this.srcImage, ")")
        },
        class: {
          'v-lazy-image': true,
          'v-lazy-image-loaded': this.loaded
        }
      }, [this.srcImage || !this.isEditable ? '' : this.defaultText]);
    }

    return h('img', {
      attrs: {
        src: this.srcImage,
        srcset: this.srcsetImage
      },
      class: {
        'v-lazy-image': true,
        'v-lazy-image-loaded': this.loaded
      }
    });
  },
  mounted: function mounted() {
    var _this = this;

    this.$el.addEventListener('load', function (ev) {
      if (_this.$el.getAttribute('src') !== _this.srcPlaceholder) {
        _this.loaded = true;

        _this.$emit('load');
      }
    });
    /**
     * Add a polyfill for other and older browsers.
     * Needs to run in the client and not in the server.
     */

    if (typeof window !== 'undefined') {
      __webpack_require__("5abe");

      this.observer = new IntersectionObserver(function (entries) {
        var image = entries[0];

        if (image.isIntersecting) {
          _this.intersected = true;

          _this.observer.disconnect();

          _this.$emit('intersect');
        }
      }, this.intersectionOptions);
      this.observer.observe(this.$el);
    }
  },
  destroyed: function destroyed() {
    this.observer.disconnect();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VLazyImageComponent);
var VLazyImagePlugin = {
  install: function install(Vue, opts) {
    Vue.component('VLazyImage', VLazyImageComponent);
  }
};

/***/ }),

/***/ "684e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6cd1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingIconsRow_vue_vue_type_style_index_0_id_58ced9b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4052");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingIconsRow_vue_vue_type_style_index_0_id_58ced9b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingIconsRow_vue_vue_type_style_index_0_id_58ced9b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingIconsRow_vue_vue_type_style_index_0_id_58ced9b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "84fe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "91a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7680122-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/SharingIconsRow.vue?vue&type=template&id=58ced9b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sharing-icons-row__wrapper"},[_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column"},[_c('div',{staticClass:"sharing-icons-row__share-item sharing-icons-row__share-facebook button is-white",on:{"click":function($event){_vm.shareFB()}}},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"20px","iconheight":"20px","icon":"facebook","color":"#fff"}}),_c('span',[_vm._v("Share")])],1)]),_c('div',{staticClass:"column"},[_c('div',{staticClass:"sharing-icons-row__share-item sharing-icons-row__share-twitter button is-white",on:{"click":function($event){_vm.shareTweet()}}},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"20px","iconheight":"20px","icon":"twitter","color":"#fff"}}),_c('span',[_vm._v("Tweet")])],1)]),_c('div',{staticClass:"column"},[_c('div',{staticClass:"sharing-icons-row__share-item sharing-icons-row__share-linkedin button is-white",on:{"click":function($event){_vm.shareLinkedIn()}}},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"20px","iconheight":"20px","icon":"linkedin","color":"#fff"}}),_c('span',[_vm._v("Share")])],1)]),_c('div',{staticClass:"column"},[_c('DonateAction',{attrs:{"fundraiser-id":_vm.fundraiserId,"nonprofit-ein":_vm.nonprofitEin,"trigger":_vm.trigger}},[_c('div',{staticClass:"sharing-icons-row__share-item sharing-icons-row__share-email button is-white"},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"20px","iconheight":"20px","icon":"usd","color":"#fff"}}),_c('span',[_vm._v("\n            Donate\n          ")])],1)])],1),_c('div',{staticClass:"column"},[_c('div',{staticClass:"sharing-icons-row__share-item sharing-icons-row__share-plus button is-light",on:{"click":function($event){_vm.shareEmail()}}},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"20px","iconheight":"20px","icon":"email","color":"#444"}}),_c('span',[_vm._v("Email")]),_c('div',{staticClass:"addthis_inline_share_toolbox"})],1)]),_c('div',{staticClass:"column"},[_c('div',{staticClass:"sharing-icons-row__share-item sharing-icons-row__share-plus button is-light"},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"20px","iconheight":"20px","icon":"plus","color":"#444"}}),_c('span',[_vm._v("More")])],1)])]),_c('div',{staticClass:"fb-like-follow__wrapper"},[_c('div',{staticClass:"fb-like-follow__fb-like"},[_c('div',{staticClass:"fb-like",attrs:{"data-href":_vm.fullURL,"data-layout":"button_count","data-share":"false","data-action":"like","data-show-faces":"false"}})]),_c('div',{staticClass:"fb-like-follow__follow"},[_c('div',{staticClass:"sharing-icons-row__share-plus button is-small is-light"},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"16px","iconheight":"16px","icon":"alarm","color":"#444"}}),_c('span',[_vm._v("Follow")])],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/SharingIconsRow.vue?vue&type=template&id=58ced9b6&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/components/general/DonateAction.vue + 4 modules
var DonateAction = __webpack_require__("eaf4");

// EXTERNAL MODULE: ./src/util/sharer.js
var sharer = __webpack_require__("3372");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/SharingIconsRow.vue?vue&type=script&lang=js&
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



/* harmony default export */ var SharingIconsRowvue_type_script_lang_js_ = ({
  components: {
    DonateAction: DonateAction["default"],
    Icons: Icons["default"]
  },
  data: function data() {
    return {
      fullURL: '',
      shareText: 'Check out this website!',
      siteName: 'Volunteerathon',
      shareWindowTitle: 'Sharing'
    };
  },
  props: ['routePath', 'fundraiserId', 'trigger', 'nonprofitEin'],
  mounted: function mounted() {
    this.loadScripts();
  },
  methods: {
    loadScripts: function loadScripts() {
      if (typeof window !== 'undefined' && window.FB) {
        window.FB.XFBML.parse();
      }

      if (window.addthis && window.addthis.layers && typeof window.addthis.layers.refresh === 'function') {
        window.addthis.layers.refresh();
      }
    },
    shareFB: function shareFB() {
      sharer["b" /* shareOnFacebook */](null, this.shareText, this.siteName, this.shareWindowTitle);
    },
    shareTweet: function shareTweet() {
      sharer["d" /* shareOnTwitter */](null, this.shareText, this.siteName, this.shareWindowTitle);
    },
    shareLinkedIn: function shareLinkedIn() {
      sharer["c" /* shareOnLinkedIn */](null, this.shareText, this.siteName, this.shareWindowTitle);
    },
    shareEmail: function shareEmail() {
      sharer["a" /* shareByEmail */](null, this.shareText, this.siteName, this.shareWindowTitle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/general/SharingIconsRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_SharingIconsRowvue_type_script_lang_js_ = (SharingIconsRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/SharingIconsRow.vue?vue&type=style&index=0&id=58ced9b6&scoped=true&lang=scss&
var SharingIconsRowvue_type_style_index_0_id_58ced9b6_scoped_true_lang_scss_ = __webpack_require__("6cd1");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/SharingIconsRow.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_SharingIconsRowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "58ced9b6",
  null
  
)

component.options.__file = "SharingIconsRow.vue"
/* harmony default export */ var SharingIconsRow = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "c79a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserParticipant_vue_vue_type_style_index_0_id_0c9e0d60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2606");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserParticipant_vue_vue_type_style_index_0_id_0c9e0d60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserParticipant_vue_vue_type_style_index_0_id_0c9e0d60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserParticipant_vue_vue_type_style_index_0_id_0c9e0d60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d3d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7680122-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fundraiser/FundraiserParticipant.vue?vue&type=template&id=0c9e0d60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.fundraiser.participant)?_c('div',{staticClass:"container is-fluid white-bg fundraiser-participant__wrapper"},[_c('div',{staticClass:"fundraiser-body"},[(_vm.canEdit)?_c('p',{},[(_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.closeEditor()}}},[_vm._v("Stop editing")]):_vm._e(),(!_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.openEditor()}}},[_vm._v("Edit this section")]):_vm._e()]):_vm._e(),(_vm.editing)?_c('h2',[_vm._v("Edit the fundraiser info")]):_vm._e(),_c('div',{staticClass:"fundraiser-participant",class:{'columns is-editing': _vm.editing}},[_c('figure',{staticClass:"fundraiser-participant__avatar",class:{'is-editing column is-6': _vm.editing}},[_c('InlineImageEditor',{ref:"imageEditor",staticClass:"fundraiser-participant__img",attrs:{"location":"fundraiser.participant.avatar","item":_vm.fundraiser.participant.avatar,"alt":_vm.fundraiser.participant.name,"is-background-image":true,"open-default":false,"edition-is-enabled":_vm.editing,"disable-orientation":true,"default-text":"Add your avatar","type":"avatar"},on:{"edition:open":function($event){_vm.newImageOpenId = $event},"edition:close":function($event){_vm.newImageOpenId = null},"image:remove":function($event){_vm.removeNewImage()}}})],1),_c('div',{staticClass:"fundraiser-participant__details",class:{'column is-5': _vm.editing}},[_c('h3',{staticClass:"fundraiser-participant__name"},[_vm._v("by\n          "),_c('div',{staticClass:"emphasis"},[_c('InlineFieldEditor',{ref:"fundraiserParticipant",attrs:{"type":"text","remove-returns":true,"allow-empty":false,"error-text":"This field can't be empty","value":_vm.fundraiser.participant.fullname,"edition-is-enabled":_vm.editing,"placeholder":"Add the name of the fundraiser","location":"fundraiser.participant.fullname"},on:{"next:field":function($event){_vm.openEdition('fundraiserCity')},"previous:field":function($event){_vm.openEdition('fundraiserDescription')}}})],1)]),_c('div',{staticClass:"fundraiser-participant__detail-item-wrapper",class:{'is-editing': _vm.editing}},[_c('div',{staticClass:"fundraiser-participant__detail-item"},[_c('Icons',{staticClass:"fundraiser-participant__icon icon-location",attrs:{"iconwidth":"24px","iconheight":"24px","icon":"location","color":"#f0f0f0"}}),_c('div',{staticClass:"fundraiser-participant__location"},[_c('InlineFieldEditor',{ref:"fundraiserCity",attrs:{"type":"text","remove-returns":true,"allow-empty":false,"error-text":"This field can't be empty","value":_vm.fundraiser.participant.location,"edition-is-enabled":_vm.editing,"layout":"inline","placeholder":"Add the name of the fundraiser","location":"fundraiser.participant.location"},on:{"next:field":function($event){_vm.openEdition('fundraiserEmail')},"previous:field":function($event){_vm.openEdition('fundraiserParticipant')}}})],1)],1),_c('div',{staticClass:"fundraiser-participant__detail-item"},[_c('Icons',{staticClass:"fundraiser-participant__icon",attrs:{"iconwidth":"24px","iconheight":"24px","icon":"email","color":"#f0f0f0"}}),_c('div',{staticClass:"fundraiser-participant__contact"},[(_vm.editing)?_c('InlineFieldEditor',{ref:"fundraiserEmail",attrs:{"type":"email","remove-returns":true,"allow-empty":false,"error-text":"Please add your email address for notifications","value":_vm.fundraiser.participant.email,"edition-is-enabled":_vm.editing,"layout":"inline","placeholder":"Email address","location":"fundraiser.participant.email"},on:{"next:field":function($event){_vm.openEdition('fundraiserDescription')},"previous:field":function($event){_vm.openEdition('fundraiserCity')}}}):_vm._e(),(!_vm.editing && _vm.fundraiser.participant.email)?_c('a',{attrs:{"href":("mailto:" + (_vm.fundraiser.participant.email))}},[_vm._v("Contact")]):_vm._e()],1)],1),(!_vm.editing)?_c('div',{staticClass:"fundraiser-participant__subscribe"},[_c('div',{staticClass:"button is-warning"},[_vm._v("+Subscribe to receive updates")])]):_vm._e()])])]),_c('div',{staticClass:"fundraiser-participant__description",class:{'is-editing': _vm.editing}},[_c('p',[_c('InlineFieldEditor',{ref:"fundraiserDescription",attrs:{"type":"textarea","remove-returns":false,"allow-empty":false,"error-text":"Add a compelling intro for your fundraiser.","value":_vm.fundraiser.description,"edition-is-enabled":_vm.editing,"layout":"block","placeholder":"Email address","location":"fundraiser.description"},on:{"next:field":function($event){_vm.openEdition('fundraiserParticipant')},"previous:field":function($event){_vm.openEdition('fundraiserEmail')}}})],1),_c('SharingIconsRow',{key:_vm.$route.fullPath,attrs:{"route-path":_vm.$route.fullPath,"fundraiser-id":_vm.fundraiser.fundraiser_id,"trigger":"fundraiser/participant/shareIconsRow"}})],1)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fundraiser/FundraiserParticipant.vue?vue&type=template&id=0c9e0d60&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/components/general/SharingIconsRow.vue + 4 modules
var SharingIconsRow = __webpack_require__("91a9");

// EXTERNAL MODULE: ./src/components/plugins/LazyLoadedImage.js
var LazyLoadedImage = __webpack_require__("623f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fundraiser/FundraiserParticipant.vue?vue&type=script&lang=js&
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



/* harmony default export */ var FundraiserParticipantvue_type_script_lang_js_ = ({
  props: ['fundraiser', 'editing', 'canEdit'],
  components: {
    Icons: Icons["default"],
    LazyLoadedImage: LazyLoadedImage["default"],
    SharingIconsRow: SharingIconsRow["a" /* default */],
    InlineFieldEditor: function InlineFieldEditor() {
      return __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, "b3b0"));
    },
    InlineImageEditor: function InlineImageEditor() {
      return __webpack_require__.e(/* import() */ 63).then(__webpack_require__.bind(null, "145d"));
    }
  },
  methods: {
    closeEditor: function closeEditor() {
      this.$emit('edit:close');
    },
    openEditor: function openEditor() {
      this.$emit('edit:open');
    },
    openEdition: function openEdition(ref) {
      this.$refs[ref].openEdition();
    }
  }
});
// CONCATENATED MODULE: ./src/components/fundraiser/FundraiserParticipant.vue?vue&type=script&lang=js&
 /* harmony default export */ var fundraiser_FundraiserParticipantvue_type_script_lang_js_ = (FundraiserParticipantvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/fundraiser/FundraiserParticipant.vue?vue&type=style&index=0&id=0c9e0d60&scoped=true&lang=scss&
var FundraiserParticipantvue_type_style_index_0_id_0c9e0d60_scoped_true_lang_scss_ = __webpack_require__("c79a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/fundraiser/FundraiserParticipant.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  fundraiser_FundraiserParticipantvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0c9e0d60",
  null
  
)

component.options.__file = "FundraiserParticipant.vue"
/* harmony default export */ var FundraiserParticipant = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "eaf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7680122-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/DonateAction.vue?vue&type=template&id=16ec67de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"donate",on:{"click":function($event){_vm.donate()}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/DonateAction.vue?vue&type=template&id=16ec67de&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/DonateAction.vue?vue&type=script&lang=js&

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
/* harmony default export */ var DonateActionvue_type_script_lang_js_ = ({
  props: ['fundraiserId', 'trigger', 'givingLevel', 'commentId', 'updateId', 'nonprofitEin'],
  methods: {
    donate: function donate() {
      var args = {
        fundraiserId: this.fundraiserId,
        commentId: this.commentId,
        fullPath: "".concat(window.location.origin).concat(window.location.pathname),
        givingLevel: this.givingLevel,
        nonprofitEin: this.nonprofitEin,
        referrer: window.location.href,
        timestamp: Math.floor(Date.now() / 1000),
        trigger: this.trigger,
        updateId: this.updateId
      }; // save donation info in store

      this.$store.dispatch('START_DONATION', {
        initiator: args
      }); // open donation funnel

      if (this.nonprofitEin) {
        this.$router.push("/nonprofit/".concat(this.nonprofitEin, "/donate"));
      } else {
        this.$router.push({
          name: "".concat(this.$route.name, "/donate"),
          params: this.$route.params
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/general/DonateAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_DonateActionvue_type_script_lang_js_ = (DonateActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/DonateAction.vue?vue&type=style&index=0&id=16ec67de&scoped=true&lang=scss&
var DonateActionvue_type_style_index_0_id_16ec67de_scoped_true_lang_scss_ = __webpack_require__("5249");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/DonateAction.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_DonateActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "16ec67de",
  null
  
)

component.options.__file = "DonateAction.vue"
/* harmony default export */ var DonateAction = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.common.27.js.map
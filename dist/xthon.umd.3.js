((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[3],{

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

/***/ "5637":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/AppFooter.vue?vue&type=template&id=00f7b10b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"footer hero"},[_c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"social-icons"},[_c('div',{staticClass:"container"},[_vm._v("\n        Share it!\n        "),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.shareFB()}}},[_c('Icons',{staticClass:"share-icon-gray",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"facebook"}})],1),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.shareTweet()}}},[_c('Icons',{staticClass:"share-icon-gray",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"twitter"}})],1),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.shareLinkedIn()}}},[_c('Icons',{staticClass:"share-icon-gray",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"linkedin"}})],1),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.shareEmail()}}},[_c('Icons',{staticClass:"share-icon-gray",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"email"}})],1)])]),_c('div',{staticClass:"footer-links-wrapper"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"columns"},_vm._l((_vm.footerMenuLinks),function(menu){return _c('div',{staticClass:"footer-links column"},[_c('h3',{domProps:{"innerHTML":_vm._s(menu.heading)}}),_c('ul',_vm._l((menu.links),function(item){return _c('li',[_c('a',{attrs:{"href":item.href}},[_vm._v(_vm._s(item.name))])])}))])}))])]),_c('div',{staticClass:"copy"},[_c('div',{staticClass:"container"},[_vm._v("\n        Copyright 2010-"+_vm._s(_vm.currentYear())+" "),_c('a',{attrs:{"rel":"noopener","href":"//thedailysource.org","target":"_blank"}},[_vm._v("The Daily Source")]),_vm._v(" All Rights Reserved.  "),_c('a',{attrs:{"href":"#"}},[_vm._v("Terms of Service")])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/AppFooter.vue?vue&type=template&id=00f7b10b&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/sharer.js
var sharer = __webpack_require__("3372");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/AppFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AppFootervue_type_script_lang_js_ = ({
  components: {
    Icons: Icons["default"]
  },
  computed: {
    footerMenuLinks: function footerMenuLinks() {
      return this.$store.state.common.footerMenuLinks;
    }
  },
  data: function data() {
    return {
      shareText: 'Check out this website I found!',
      siteName: 'GiveItUpForGood',
      shareWindowTitle: 'Sharing'
    };
  },
  methods: {
    loadScripts: function loadScripts() {
      if (typeof window !== 'undefined' && window.FB) {
        window.FB.XFBML.parse();
      }

      if (window.addthis.layers && typeof window.addthis.layers.refresh === 'function') {
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
    },
    donate: function donate() {
      this.$emit('donateFromButton');
    },
    currentYear: function currentYear() {
      return new Date().getFullYear();
    }
  }
});
// CONCATENATED MODULE: ./src/components/general/AppFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_AppFootervue_type_script_lang_js_ = (AppFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/AppFooter.vue?vue&type=style&index=0&id=00f7b10b&scoped=true&lang=scss&
var AppFootervue_type_style_index_0_id_00f7b10b_scoped_true_lang_scss_ = __webpack_require__("80fd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/AppFooter.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_AppFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "00f7b10b",
  null
  
)

component.options.__file = "AppFooter.vue"
/* harmony default export */ var AppFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "80fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_00f7b10b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8946");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_00f7b10b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_00f7b10b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_00f7b10b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8946":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.umd.3.js.map
((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[31,57],{

/***/ "2943":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08f4ebd0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/ShareBox.vue?vue&type=template&id=47055205&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"share-box__wrapper"},[_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.fb()}}},[_c('Icons',{staticClass:"share-facebook",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"facebook"}})],1),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.tweet()}}},[_c('Icons',{staticClass:"share-twitter",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"twitter"}})],1),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.linkedIn()}}},[_c('Icons',{staticClass:"share-linkedin",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"linkedin"}})],1),_c('div',{staticClass:"icon-wrapper",on:{"click":function($event){_vm.email()}}},[_c('Icons',{staticClass:"share-email",attrs:{"iconwidth":"32px","iconheight":"32px","icon":"email"}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/ShareBox.vue?vue&type=template&id=47055205&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/sharer.js
var sharer = __webpack_require__("3372");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/ShareBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ShareBoxvue_type_script_lang_js_ = ({
  components: {
    Icons: Icons["default"]
  },
  props: ['urlParams', 'text', 'via', 'title'],
  methods: {
    fb: function fb() {
      sharer["b" /* shareOnFacebook */](this.urlParams, this.text, this.via, this.title);
    },
    tweet: function tweet() {
      sharer["d" /* shareOnTwitter */](this.urlParams, this.text, this.via, this.title);
    },
    linkedIn: function linkedIn() {
      sharer["c" /* shareOnLinkedIn */](this.urlParams, this.text, this.via, this.title);
    },
    email: function email() {
      sharer["a" /* shareByEmail */](this.urlParams, this.text, this.via, this.title);
    }
  }
});
// CONCATENATED MODULE: ./src/components/general/ShareBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_ShareBoxvue_type_script_lang_js_ = (ShareBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/ShareBox.vue?vue&type=style&index=0&id=47055205&scoped=true&lang=scss&
var ShareBoxvue_type_style_index_0_id_47055205_scoped_true_lang_scss_ = __webpack_require__("c28e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/ShareBox.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_ShareBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "47055205",
  null
  
)

component.options.__file = "ShareBox.vue"
/* harmony default export */ var ShareBox = __webpack_exports__["a"] = (component.exports);

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

/***/ "3c7e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4775":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4e17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08f4ebd0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitHero.vue?vue&type=template&id=e31e90f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{staticClass:"nonprofit-hero"},[_c('InlineImageEditor',{key:_vm._uid + '_' + _vm.nonprofit.EIN,ref:"imageEditor",staticClass:"hero is-medium nonprofit-hero__hero-wrapper",attrs:{"location":"nonprofit.data.hero","item":_vm.nonprofit.data.hero,"is-background-image":true,"open-default":false,"edition-is-enabled":_vm.editing,"is-standalone":true,"disable-orientation":true,"initial-ratio":0.3,"default-image":_vm.nonprofit.data.default_hero,"required":true,"layout":"overlay","type":"avatar"},on:{"edition:open":function($event){_vm.newImageOpenId = $event},"edition:close":function($event){_vm.newImageOpenId = null}}}),_c('div',{staticClass:"container nonprofit-hero__hero-container"},[(_vm.nonprofit.data && _vm.nonprofit.data.logo || _vm.editing)?_c('InlineImageEditor',{key:_vm._uid + '_' + _vm.nonprofit.EIN,ref:"imageEditor",staticClass:"nonprofit-hero__logo-wrapper",attrs:{"location":"nonprofit.data.logo","item":_vm.nonprofit.data.logo,"is-background-image":true,"open-default":false,"edition-is-enabled":_vm.editing,"is-standalone":true,"disable-orientation":true,"required":false,"default-text":"Add a logo","layout":"overlay","type":"avatar"},on:{"edition:open":function($event){_vm.newImageOpenId = $event},"edition:close":function($event){_vm.newImageOpenId = null}}}):_vm._e()],1),_c('div',{staticClass:"container columns"},[(!_vm.nonprofit.data.name)?_c('div',{staticClass:"nonprofit-hero__nonprofit-name column is-6-tablet is-7-desktop is-7-widescreen is-7-fullhd",class:{'not-claimed': !_vm.nonprofit.data.logo && !_vm.editing}},[_c('InlineFieldEditor',{ref:"nonprofitName",attrs:{"type":"textarea","remove-returns":true,"allow-empty":false,"error-text":"This field can't be empty","edition-is-enabled":_vm.editing,"value":_vm.nonprofit.NAME,"location":"nonprofit.data.name"}})],1):_vm._e(),(_vm.nonprofit.data.name)?_c('div',{staticClass:"nonprofit-hero__nonprofit-name column is-6-tablet is-7-desktop is-7-widescreen is-7-fullhd",class:{'not-claimed': !_vm.nonprofit.data.logo}},[_c('InlineFieldEditor',{ref:"nonprofitName",attrs:{"type":"textarea","remove-returns":true,"allow-empty":false,"error-text":"This field can't be empty","edition-is-enabled":_vm.editing,"value":_vm.nonprofit.data.name,"location":"nonprofit.data.name"}})],1):_vm._e(),_c('div',{staticClass:"nonprofit-hero__cta-wrapper column is-6-tablet is-5-desktop is-5-widescreen is-5-fullhd",class:{'not-claimed': !_vm.nonprofit.data.logo}},[_c('div',{staticClass:"button nonprofit-hero__cta-fundraise"},[_vm._v("Fundraise")]),_c('DonateAction',{attrs:{"nonprofit-ein":_vm.nonprofit.EIN,"trigger":"nonprofit/hero/cta"}},[_c('div',{staticClass:"button nonprofit-hero__cta-donate"},[_vm._v("\n            Donate\n          ")])]),_c('div',{staticClass:"button nonprofit-hero__cta-share",on:{"click":function($event){_vm.share()}}},[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.openShareBox)?_c('ShareBox',{staticClass:"share-box__wrapper",attrs:{"text":_vm.shareText,"via":_vm.siteName,"title":_vm.shareWindowTitle}}):_vm._e()],1),_c('Icons',{staticClass:"share-icon-trigger",attrs:{"iconwidth":"16px","iconheight":"16px","icon":"share","color":"#ffffff"}}),_vm._v("\n          Share\n        ")],1),_c('div',{staticClass:"nonprofit-hero__cta-manage"},[(!_vm.editing)?_c('a',{staticClass:"unselectable",on:{"click":function($event){_vm.enableEdition()}}},[_vm._v("Manage this nonprofit")]):_vm._e(),(_vm.editing)?_c('a',{staticClass:"unselectable",on:{"click":function($event){_vm.closeEdition()}}},[_vm._v("Close edition")]):_vm._e()])],1)]),_c('div',{staticClass:"container"},[(_vm.common.nonprofit)?_c('div',{staticClass:"nonprofit-intro"},[_vm._v("\n        "+_vm._s(_vm.common.nonprofit.intro)+"\n      ")]):_vm._e()])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitHero.vue?vue&type=template&id=e31e90f8&scoped=true&

// EXTERNAL MODULE: ./src/components/general/DonateAction.vue + 4 modules
var DonateAction = __webpack_require__("eaf4");

// EXTERNAL MODULE: ./src/components/general/ShareBox.vue + 4 modules
var ShareBox = __webpack_require__("2943");

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitHero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NonprofitHerovue_type_script_lang_js_ = ({
  props: ['common', 'nonprofit', 'editing'],
  components: {
    DonateAction: DonateAction["default"],
    Icons: Icons["default"],
    ShareBox: ShareBox["a" /* default */],
    InlineFieldEditor: function InlineFieldEditor() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "b3b0"));
    },
    InlineImageEditor: function InlineImageEditor() {
      return __webpack_require__.e(/* import() */ 48).then(__webpack_require__.bind(null, "145d"));
    }
  },
  data: function data() {
    return {
      showLoginModal: false,
      shareText: 'Check out this nonprofit!',
      siteName: 'Volunteerathon',
      shareWindowTitle: 'Share Nonprofit',
      openShareBox: false
    };
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.user.loggedIn;
    }
  },
  methods: {
    share: function share(commentId) {
      this.openShareBox = !this.openShareBox;
    },
    enableEdition: function enableEdition() {
      this.$emit('edit:open');
    },
    closeEdition: function closeEdition() {
      this.$emit('edit:close');
    }
  }
});
// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var nonprofit_NonprofitHerovue_type_script_lang_js_ = (NonprofitHerovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/nonprofit/NonprofitHero.vue?vue&type=style&index=0&id=e31e90f8&scoped=true&lang=scss&
var NonprofitHerovue_type_style_index_0_id_e31e90f8_scoped_true_lang_scss_ = __webpack_require__("f9f4");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitHero.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nonprofit_NonprofitHerovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e31e90f8",
  null
  
)

component.options.__file = "NonprofitHero.vue"
/* harmony default export */ var NonprofitHero = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5249":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("684e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "684e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c28e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareBox_vue_vue_type_style_index_0_id_47055205_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4775");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareBox_vue_vue_type_style_index_0_id_47055205_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareBox_vue_vue_type_style_index_0_id_47055205_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareBox_vue_vue_type_style_index_0_id_47055205_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "eaf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08f4ebd0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/DonateAction.vue?vue&type=template&id=16ec67de&scoped=true&
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

/***/ }),

/***/ "f9f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitHero_vue_vue_type_style_index_0_id_e31e90f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3c7e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitHero_vue_vue_type_style_index_0_id_e31e90f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitHero_vue_vue_type_style_index_0_id_e31e90f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitHero_vue_vue_type_style_index_0_id_e31e90f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.umd.31.js.map
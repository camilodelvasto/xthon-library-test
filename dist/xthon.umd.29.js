((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[29,57],{

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

/***/ "3cdb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4052":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5249":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("684e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateAction_vue_vue_type_style_index_0_id_16ec67de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "91a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a5fafe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/SharingIconsRow.vue?vue&type=template&id=58ced9b6&scoped=true&
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

/***/ "dc0a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a5fafe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitAbout.vue?vue&type=template&id=a8bb5026&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nonprofit-extended"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"nonprofit-extended__separator"}),(!_vm.nonprofit.data.about || _vm.editing)?_c('div',[_c('h2',{ref:"aboutHeading"},[_vm._v("About "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.data.name || _vm.nonprofit.NAME)}})]),_c('NonprofitIRSData',{ref:"nonprofitIRSDataTable",attrs:{"nonprofit":_vm.nonprofit,"editing":_vm.editing,"can-edit":_vm.canEdit},on:{"edit:open":function($event){_vm.enableEdition()},"edit:close":function($event){_vm.closeEdition()},"edit:previous":function($event){_vm.openEdition('nonprofitEmail')},"edit:next":function($event){_vm.openEdition('nonprofitAbout')}}})],1):_vm._e(),(_vm.nonprofit.data.about || _vm.editing)?_c('div',[_c('h2',[_vm._v("About "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.data.name || _vm.nonprofit.NAME)}})]),_c('div',{staticClass:"columns"},[_c('div',{staticClass:"nonprofit-extended__about column is-8-desktop"},[_c('div',{staticClass:"style-paragraph"},[_c('InlineFieldEditor',{ref:"nonprofitAbout",attrs:{"type":"textarea","allow-empty":false,"error-text":"This field can't be empty","value":_vm.nonprofit.data.about,"edition-is-enabled":_vm.editing,"placeholder":"Add a description.","location":"nonprofit.data.about"},on:{"next:field":function($event){_vm.openEdition('nonprofitCity')},"previous:field":function($event){_vm.openChildEdition('nonprofitName')}}})],1),_c('p',[_vm._v("501(c)(3) nonprofit. Donations are 100% deductible")]),(_vm.nonprofit.EIN)?_c('div',{staticClass:"helper-text"},[_vm._v("\n            EMPLOYER ID NUMBER (EIN): "+_vm._s(_vm.nonprofit.EIN)+"\n          ")]):_vm._e()]),_c('div',{staticClass:"nonprofit-extended__icons column is-4-desktop"},[(_vm.nonprofit.data)?_c('div',{staticClass:"nonprofit-extended__icon"},[_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"24px","iconheight":"24px","icon":"location","color":"#f0f0f0"}}),_c('div',{staticClass:"display-block"},[_c('InlineFieldEditor',{ref:"nonprofitCity",attrs:{"type":"text","layout":"inline","allow-empty":false,"edition-is-enabled":_vm.editing,"error-text":"This field can't be empty","value":_vm.nonprofit.data.city,"placeholder":((_vm.nonprofit.CITY) + ", " + (_vm.nonprofit.STATE)),"location":"nonprofit.data.city"},on:{"next:field":function($event){_vm.openEdition('nonprofitWebsite')},"previous:field":function($event){_vm.openEdition('nonprofitAbout')}}})],1)],1):_vm._e(),(_vm.nonprofit.data)?_c('div',{staticClass:"nonprofit-extended__icon"},[(_vm.nonprofit.data.website || _vm.editing)?_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"24px","iconheight":"24px","icon":"link","color":"#f0f0f0"}}):_vm._e(),_c('div',{staticClass:"display-block"},[(_vm.nonprofit.data.website || _vm.editing)?_c('InlineFieldEditor',{ref:"nonprofitWebsite",attrs:{"type":"url","layout":"inline","allow-empty":true,"edition-is-enabled":_vm.editing,"error-text":"Please enter a valid URL: https://example.org","value":_vm.nonprofit.data.website,"placeholder":"Add a website","location":"nonprofit.data.website"},on:{"next:field":function($event){_vm.openEdition('nonprofitEmail')},"previous:field":function($event){_vm.openEdition('nonprofitCity')}}}):_vm._e()],1)],1):_vm._e(),(_vm.nonprofit.data)?_c('div',{staticClass:"nonprofit-extended__icon"},[(_vm.nonprofit.data.email || _vm.editing)?_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"24px","iconheight":"24px","icon":"email","color":"#f0f0f0"}}):_vm._e(),_c('div',{staticClass:"display-block"},[(_vm.nonprofit.data.email || _vm.editing)?_c('InlineFieldEditor',{ref:"nonprofitEmail",attrs:{"type":"email","layout":"inline","allow-empty":false,"error-text":"Please enter a valid email address","placeholder":"Add a contact email","edition-is-enabled":_vm.editing,"value":_vm.nonprofit.data.email,"location":"nonprofit.data.email"},on:{"previous:field":function($event){_vm.openEdition('nonprofitWebsite')}}}):_vm._e()],1)],1):_vm._e(),(!_vm.editing)?_c('DonateAction',{attrs:{"nonprofit-ein":_vm.nonprofit.EIN,"trigger":"nonprofit/about/data"}},[_c('button',{staticClass:"button is-success nonprofit-extended__donate",attrs:{"type":"submit"}},[_vm._v("\n              Donate\n            ")])]):_vm._e()],1)])]):_vm._e(),_c('div',{staticClass:"columns"},[_c('div',{staticClass:"nonprofit-extended__media column is-12-desktop"},[_c('div',{staticClass:"nonprofit-extended__icon"},[(_vm.nonprofit.data.media && _vm.nonprofit.data.media.length || _vm.editing)?_c('Icons',{staticClass:"icon",attrs:{"iconwidth":"24px","iconheight":"24px","icon":"camera","color":"#f0f0f0"}}):_vm._e(),(_vm.editing && _vm.nonprofit.data.media)?_c('p',[_c('span',[_vm._v(_vm._s(_vm.nonprofit.data.media.length)+" Photos and videos")])]):_vm._e(),(!_vm.editing && _vm.nonprofit.data.media && _vm.nonprofit.data.media.length)?_c('MediaViewer',{ref:"mediaViewer",attrs:{"media":_vm.nonprofit.data.media},on:{"modal:open":function($event){_vm.stopFlickity()},"modal:close":function($event){_vm.startFlickity()}}},[_c('div',{attrs:{"slot":"trigger"},slot:"trigger"},[(_vm.nonprofit.data.media)?_c('a',[_vm._v(_vm._s(_vm.nonprofit.data.media.length)+" Photos and videos")]):_vm._e()])]):_vm._e()],1),(_vm.editing)?_c('MediaEditor',{attrs:{"media-source":_vm.nonprofit.data,"location":"nonprofit.data.media"}}):_vm._e(),(_vm.nonprofit.data.media && !_vm.editing)?_c('flickity',{ref:"carousel",staticClass:"nonprofit-extended__media-wrapper",class:{'short-wrapper': _vm.nonprofit.data.media.length < 3},attrs:{"options":_vm.nonprofitMediaCarouselOptions}},_vm._l((_vm.nonprofit.data.media),function(item,index){return _c('div',{on:{"click":function($event){}}},[(item.type === 'image')?_c('LazyLoadedImage',{key:item.src,staticClass:"nonprofit-extended__media-item",attrs:{"is-background":true,"src":item.src}}):_vm._e(),(item.type === 'video')?_c('LazyLoadedImage',{key:item.src,staticClass:"nonprofit-extended__media-item ",attrs:{"is-background":true,"src":("https://img.youtube.com/vi/" + (item.src) + "/mqdefault.jpg")}}):_vm._e()],1)})):_vm._e()],1)]),_c('SharingIconsRow',{key:_vm.$route.fullPath,attrs:{"nonprofit-ein":_vm.nonprofit.EIN,"route-path":_vm.$route.fullPath,"trigger":"nonprofit/about/shareIconsRow"}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitAbout.vue?vue&type=template&id=a8bb5026&scoped=true&

// EXTERNAL MODULE: ./src/components/general/DonateAction.vue + 4 modules
var DonateAction = __webpack_require__("eaf4");

// EXTERNAL MODULE: ./src/components/general/SharingIconsRow.vue + 4 modules
var SharingIconsRow = __webpack_require__("91a9");

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/components/plugins/Flickity.vue + 4 modules
var Flickity = __webpack_require__("fbe1");

// EXTERNAL MODULE: ./src/components/plugins/LazyLoadedImage.js
var LazyLoadedImage = __webpack_require__("623f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitAbout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var NonprofitAboutvue_type_script_lang_js_ = ({
  props: ['nonprofit', 'editing', 'canEdit'],
  components: {
    DonateAction: DonateAction["default"],
    Icons: Icons["default"],
    Flickity: Flickity["a" /* default */],
    SharingIconsRow: SharingIconsRow["a" /* default */],
    LazyLoadedImage: LazyLoadedImage["default"],
    MediaEditor: function MediaEditor() {
      return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "f5df"));
    },
    NonprofitIRSData: function NonprofitIRSData() {
      return __webpack_require__.e(/* import() */ 65).then(__webpack_require__.bind(null, "424e"));
    },
    MediaViewer: function MediaViewer() {
      return __webpack_require__.e(/* import() */ 60).then(__webpack_require__.bind(null, "3f98"));
    },
    InlineFieldEditor: function InlineFieldEditor() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "b3b0"));
    }
  },
  data: function data() {
    return {
      nonprofitMediaCarouselOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: true
      }
    };
  },
  methods: {
    stopFlickity: function stopFlickity() {
      this.$refs.carousel.pausePlayer();
    },
    startFlickity: function startFlickity() {
      this.$refs.carousel.unpausePlayer();
    },
    enableEdition: function enableEdition() {
      this.$emit('edit:open');
    },
    openEdition: function openEdition(fieldName) {
      this.$refs[fieldName].openEdition();
    },
    closeEdition: function closeEdition(fieldName) {
      this.$emit('edit:close');
    },
    openChildEdition: function openChildEdition(fieldName) {
      this.$refs.nonprofitIRSDataTable.openEdition(fieldName);
    },
    triggerMediaViewer: function triggerMediaViewer(cell) {
      this.$refs.mediaViewer.openModal();
      this.$refs.mediaViewer.$refs.flickity.select(cell);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var carousel = this.$refs.carousel;

    if (carousel) {
      carousel.on('staticClick', function (event, pointer, cellElement, cellIndex) {
        _this.triggerMediaViewer(cellIndex);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitAbout.vue?vue&type=script&lang=js&
 /* harmony default export */ var nonprofit_NonprofitAboutvue_type_script_lang_js_ = (NonprofitAboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/nonprofit/NonprofitAbout.vue?vue&type=style&index=0&id=a8bb5026&scoped=true&lang=scss&
var NonprofitAboutvue_type_style_index_0_id_a8bb5026_scoped_true_lang_scss_ = __webpack_require__("f9c2");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitAbout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nonprofit_NonprofitAboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a8bb5026",
  null
  
)

component.options.__file = "NonprofitAbout.vue"
/* harmony default export */ var NonprofitAbout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "eaf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a5fafe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/DonateAction.vue?vue&type=template&id=16ec67de&scoped=true&
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

/***/ "f9c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitAbout_vue_vue_type_style_index_0_id_a8bb5026_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3cdb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitAbout_vue_vue_type_style_index_0_id_a8bb5026_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitAbout_vue_vue_type_style_index_0_id_a8bb5026_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitAbout_vue_vue_type_style_index_0_id_a8bb5026_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fbe1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a5fafe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/Flickity.vue?vue&type=template&id=3091e956&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/Flickity.vue?vue&type=template&id=3091e956&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/Flickity.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/**
 * This is a fork of the original vueflickity component.
 * Modified to work with SSR: https://github.com/drewjbartlett/vue-flickity
 */
var Flickity = {};
/* harmony default export */ var Flickityvue_type_script_lang_js_ = ({
  props: {
    options: Object
  },
  mounted: function mounted() {
    Flickity = __webpack_require__("217b");
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.$flickity.destroy();
    this.$flickity = null;
  },
  methods: {
    /**
     * Initialize a new flickity and emit init event.
     */
    init: function init() {
      this.$flickity = new Flickity(this.$el, this.options);
      this.$emit('init', this.$flickity);
    },

    /**
     * Return the current flickity instance to access directly
     *
     * @return {Flickity}
     */
    flickity: function flickity() {
      return this.$flickity;
    },

    /**
     * Selecting Slides
     */

    /**
     * Select a slide
     *
     * @param {number} index
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    select: function select(index, isWrapped, isInstant) {
      this.$flickity.select(index, isWrapped, isInstant);
    },

    /**
     * Change to the next slide
     *
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    next: function next(isWrapped, isInstant) {
      this.$flickity.next(isWrapped, isInstant);
    },

    /**
     * Change to the previous slide
     *
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    previous: function previous(isWrapped, isInstant) {
      this.$flickity.previous(isWrapped, isInstant);
    },

    /**
     * Select a cell
     *
     * @param {number} value
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    selectCell: function selectCell(value, isWrapped, isInstant) {
      this.$flickity.selectCell(value, isWrapped, isInstant);
    },

    /**
     * Sizing and Positioning
     */

    /**
     * Trigger a resize event
     */
    resize: function resize() {
      this.$flickity.resize();
    },

    /**
     * Trigger a reposition event
     */
    reposition: function reposition() {
      this.$flickity.reposition();
    },

    /**
     * Adding and removing cells
     */

    /**
     * Prepend elements to flickity
     *
     * @param {array|HTMLElement|NodeList} elements
     */
    prepend: function prepend(elements) {
      this.$flickity.prepend(elements);
    },

    /**
     * Append elements to flickity
     *
     * @param {array|HTMLElement|NodeList} elements
     */
    append: function append(elements) {
      this.$flickity.append(elements);
    },

    /**
     * Insert elements at a given index
     *
     * @param {array|HTMLElement|NodeList} elements
     * @param {number} index
     */
    insert: function insert(elements, index) {
      this.$flickity.insert(elements, index);
    },

    /**
     * Remove elements from flickity
     *
     * @param {array|HTMLElement|NodeList} elements
     */
    remove: function remove(elements) {
      this.$flickity.remove(elements);
    },

    /**
     * Player
     */

    /**
     * Trigger a playPlayer event
     */
    playPlayer: function playPlayer() {
      this.$flickity.playPlayer();
    },

    /**
     * Trigger a stopPlayer event
     */
    stopPlayer: function stopPlayer() {
      this.$flickity.stopPlayer();
    },

    /**
     * Trigger a pausePlayer event
     */
    pausePlayer: function pausePlayer() {
      this.$flickity.pausePlayer();
    },

    /**
     * Trigger a unpausePlayer event
     */
    unpausePlayer: function unpausePlayer() {
      this.$flickity.unpausePlayer();
    },

    /**
     * Trigger a rerender event
     */
    rerender: function rerender() {
      this.$flickity.destroy();
      this.init();
    },

    /**
     * Utilities
     */

    /**
     * Destroy the flickity instance
     */
    destroy: function destroy() {
      this.$flickity.destroy();
    },

    /**
     * Trigger a rerender event
     */
    reloadCells: function reloadCells() {
      this.$flickity.reloadCells();
    },

    /**
     * Get the cell elements
     *
     * @return {array}
     */
    getCellElements: function getCellElements() {
      return this.$flickity.getCellElements();
    },

    /**
     * Return flickity data
     *
     * @return {Flickity}
     */
    data: function data() {
      return Flickity.data(this.$el);
    },

    /**
     * Events
     */

    /**
     * Attach an event
     *
     * @param {string} eventName
     * @param {function} listener
     */
    on: function on(eventName, listener) {
      this.$flickity.on(eventName, listener);
    },

    /**
     * Remove an event
     *
     * @param {string} eventName
     * @param {function} listener
     */
    off: function off(eventName, listener) {
      this.$flickity.off(eventName, listener);
    },

    /**
     * Attach an event once
     *
     * @param {string} eventName
     * @param {function} listener
     */
    once: function once(eventName, listener) {
      this.$flickity.once(eventName, listener);
    },

    /**
     * Properties
     */

    /**
     * Return the selected element
     *
     * @return {HTMLElement}
     */
    selectedElement: function selectedElement() {
      return this.$flickity.selectedElement;
    },

    /**
     * Return the selected elements
     *
     * @return {array}
     */
    selectedElements: function selectedElements() {
      return this.$flickity.selectedElements;
    },

    /**
     * Return the selected index
     *
     * @return {number}
     */
    selectedIndex: function selectedIndex() {
      return this.$flickity.selectedIndex;
    },

    /**
     * Return the cells
     *
     * @return {array}
     */
    cells: function cells() {
      return this.$flickity.cells;
    },

    /**
     * Return the slides
     *
     * @return {array}
     */
    slides: function slides() {
      return this.$flickity.slides;
    },

    /**
     * Disable dragging of slider
     */
    disableDrag: function disableDrag() {
      this.$flickity.options.draggable = false;
      this.$flickity.updateDraggable();
    },

    /**
     * Enable dragging of slider
     */
    enableDrag: function enableDrag() {
      this.$flickity.options.draggable = true;
      this.$flickity.updateDraggable();
    }
  }
});
// CONCATENATED MODULE: ./src/components/plugins/Flickity.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_Flickityvue_type_script_lang_js_ = (Flickityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/Flickity.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_Flickityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Flickity.vue"
/* harmony default export */ var plugins_Flickity = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.umd.29.js.map
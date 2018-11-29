((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[47],{

/***/ "3c16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8454");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "73e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ef6b7e28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ExplorePage.vue?vue&type=template&id=d8f134f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"explore__wrapper",class:("version" + _vm.version)},[(!_vm.version || _vm.version === 1)?_c('div',[_c('AppHeader',{attrs:{"layout":"home"}}),_c('section',{staticClass:"examples__section-wrapper"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Examples of Volunteerathons done to raise money")]),_c('NonprofitFundraisers',{attrs:{"fundraisers":_vm.fundraisers,"limit":"5"}})],1)]),_c('section',{staticClass:"find-nonprofits__section-wrapper"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Find a nonprofit")]),_c('p',{staticClass:"section-intro"},[_vm._v("Search our directory of over 800,000 IRS nonprofits that you can make tax-deductible donations to or raise money for. The search will take you to their profiles on our site where you can donate to them:")]),(_vm.canRender)?_c('NonprofitAjaxSearch',{attrs:{"placeholder":"Enter a nonprofit name","standalone":true},on:{"selected":function($event){_vm.goToNonprofit($event)}}}):_vm._e()],1)]),_c('NonprofitForm',{attrs:{"submit-button-label":"Submit"}},[_c('div',{attrs:{"slot":"heading"},slot:"heading"},[_c('h1',{staticClass:"section-title title title-blue"},[_vm._v("Start Your Own Volunteerathon")])])]),_c('section',{staticClass:"other-sites__section-wrapper"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Explore our other websites")]),_c('p',[_vm._v("We have many websites to help nonprofits and their supporters raise awareness and raise money for their causes. Click the images below to visit them.")]),_c('div',{staticClass:"columns is-multiline"},_vm._l((_vm.otherSites),function(site,key){return _c('div',{staticClass:"column is-4"},[_c('a',{attrs:{"href":site.url,"target":"_blank","alt":site.name}},[_c('LazyLoadedImage',{staticClass:"other-sites-img__wrapper",class:("other-sites-" + key),attrs:{"src":site.imgsrc,"is-background":true}})],1)])})),_c('div',{staticClass:"columns is-centered align-center"},[_c('transition-group',{attrs:{"name":"list-complete"}},[(!_vm.showMoreWebsitesNotice)?_c('p',{key:_vm._uid + 1,staticClass:"list-complete-item"},[_c('button',{staticClass:"button is-medium is-warning",on:{"click":function($event){$event.preventDefault();_vm.showMoreWebsitesNotice = true}}},[_vm._v("View all")])]):_vm._e(),(_vm.showMoreWebsitesNotice)?_c('p',{key:_vm._uid + 2,staticClass:"list-complete-item"},[_vm._v("More websites are coming soon. Please return to view them.")]):_vm._e()])],1)])]),_c('WaysSupport',{attrs:{"version":_vm.version || 1}},[_c('div',{attrs:{"slot":"heading"},slot:"heading"},[_c('h1',{staticClass:"section-title title title-blue"},[_vm._v("Ways to support our nonprofit’s work")])])]),_c('AppFooter')],1):_vm._e(),(_vm.version === 2)?_c('div',[_c('AppHeader',{attrs:{"layout":"page"}}),_c('section',{staticClass:"find-nonprofits__section-wrapper"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Find a nonprofit")]),_c('p',{staticClass:"section-intro"},[_vm._v("Search our directory of over 800,000 IRS nonprofits that you can make tax-deductible donations to or raise money for. The search will take you to their profiles on our site where you can donate to them:")]),(_vm.canRender)?_c('NonprofitAjaxSearch',{attrs:{"standalone":true},on:{"selected":function($event){_vm.goToNonprofit($event)}}}):_vm._e()],1)]),_c('section',{staticClass:"examples__section-wrapper"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Examples of Volunteerathons done to raise money")]),_c('NonprofitFundraisers',{attrs:{"fundraisers":_vm.fundraisers,"limit":"5"}})],1)]),_c('NonprofitForm',{staticClass:"start-your-own__section-wrapper",attrs:{"submit-button-label":"Submit"}},[_c('div',{attrs:{"slot":"heading"},slot:"heading"},[_c('h1',[_vm._v("Start Your Own Volunteerathon")])])]),_c('section',{staticClass:"other-sites__section-wrapper"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Explore our other websites")]),_c('p',[_vm._v("We have many websites to help nonprofits and their supporters raise awareness and raise money for their causes. Click the images below to visit them.")]),_c('div',{staticClass:"columns is-multiline"},_vm._l((_vm.otherSites),function(site,key){return _c('div',{staticClass:"column is-4"},[_c('a',{attrs:{"href":site.url,"target":"_blank","alt":site.name}},[_c('LazyLoadedImage',{staticClass:"other-sites-img__wrapper",class:("other-sites-" + key),attrs:{"src":site.imgsrc,"is-background":true}})],1)])})),_c('div',{staticClass:"columns is-centered align-center"},[_c('transition-group',{attrs:{"name":"list-complete"}},[(!_vm.showMoreWebsitesNotice)?_c('p',{key:_vm._uid + 1,staticClass:"list-complete-item"},[_c('button',{staticClass:"button is-medium is-warning",on:{"click":function($event){$event.preventDefault();_vm.showMoreWebsitesNotice = true}}},[_vm._v("View all")])]):_vm._e(),(_vm.showMoreWebsitesNotice)?_c('p',{key:_vm._uid + 2,staticClass:"list-complete-item"},[_vm._v("More websites are coming soon. Please return to view them.")]):_vm._e()])],1)])]),_c('WaysSupport',{attrs:{"version":_vm.version}},[_c('div',{attrs:{"slot":"heading"},slot:"heading"},[_c('h1',{staticClass:"section-title title"},[_vm._v("Ways to support our nonprofit’s work")])])]),_c('AppFooter')],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ExplorePage.vue?vue&type=template&id=d8f134f4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-meta/lib/vue-meta.js
var vue_meta = __webpack_require__("0a89");
var vue_meta_default = /*#__PURE__*/__webpack_require__.n(vue_meta);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ExplorePage.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_meta_default.a);
/* harmony default export */ var ExplorePagevue_type_script_lang_js_ = ({
  name: 'explore',

  /**
   * Uses dynamic import to speed up page performance.
   * See https://webpack.js.org/guides/code-splitting/ for reference.
   */
  components: {
    AppFooter: function AppFooter() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "5637"));
    },
    AppHeader: function AppHeader() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "a609"));
    },
    LazyLoadedImage: function LazyLoadedImage() {
      return __webpack_require__.e(/* import() */ 70).then(__webpack_require__.bind(null, "623f"));
    },
    TopMenu: function TopMenu() {
      return __webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(null, "3a84"));
    },
    NonprofitAjaxSearch: function NonprofitAjaxSearch() {
      return Promise.all(/* import() */[__webpack_require__.e(4), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "d662"));
    },
    NonprofitFundraisers: function NonprofitFundraisers() {
      return __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "7436"));
    },
    NonprofitForm: function NonprofitForm() {
      return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "61d5"));
    },
    WaysSupport: function WaysSupport() {
      return __webpack_require__.e(/* import() */ 56).then(__webpack_require__.bind(null, "d990"));
    }
  },
  data: function data() {
    return {
      showMoreWebsitesNotice: false,
      canRender: false,
      showSocialMedia: false,
      otherSites: [{
        name: 'Quitathon',
        url: 'https://quitathon.org',
        imgsrc: '/static/assets/images/other-sites/quitathon.png'
      }, {
        name: 'Loseathon',
        url: 'https://loseathon.org',
        imgsrc: '/static/assets/images/other-sites/loseathon.png'
      }, {
        name: 'Bike for Good',
        url: 'https://bike-for-good.org',
        imgsrc: '/static/assets/images/other-sites/bike-for-good.png'
      }, {
        name: 'Polar plunge for Good',
        url: 'https://polar-plunge-for-good.org',
        imgsrc: '/static/assets/images/other-sites/polar-plunge-for-good.png'
      }, {
        name: 'Give it up for Good',
        url: 'https://give-it-up.org',
        imgsrc: '/static/assets/images/other-sites/give-it-up-for-good.png'
      }, {
        name: 'Run for Good',
        url: 'https://run-for-good.org',
        imgsrc: '/static/assets/images/other-sites/run-for-good.png'
      }]
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: 'Explore',
      meta: [{
        vmid: 'og:title',
        property: 'og:title',
        content: 'Explore multiple ways to do good!'
      }, {
        vmid: 'description',
        name: 'description',
        content: 'Check out Volunteerathons to donate to and nonprofits that are doing good deeds and that also need your help.'
      }, {
        vmid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }, {
        vmid: 'og:image:width',
        property: 'og:image:width',
        content: '1280'
      }, {
        vmid: 'og:image:height',
        property: 'og:image:height',
        content: '680'
      }, {
        vmid: 'og:image',
        property: 'og:image',
        content: "".concat(this.$store.state.extra.request.protocol, "://").concat(this.$store.state.extra.request.host, "/public/volunteerathon-screenshot.png")
      }]
    };
  },
  mounted: function mounted() {
    this.canRender = true;
  },
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        ein = _ref.route.params.ein;
    return new Promise(function (resolve, reject) {
      return store.dispatch('FETCH_EXPLORE_FUNDRAISERS').then(function (data) {
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  computed: {
    fundraisers: function fundraisers() {
      return this.$store.state.explore.fundraisers.data;
    },
    version: function version() {
      return parseInt(this.$route.query.version, 10) || 0;
    }
  },
  methods: {
    goToNonprofit: function goToNonprofit(nonprofit) {
      this.$router.push("/nonprofit/".concat(nonprofit.EIN));
    }
  }
});
// CONCATENATED MODULE: ./src/views/ExplorePage.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_ExplorePagevue_type_script_lang_js_ = (ExplorePagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/ExplorePage.vue?vue&type=style&index=0&lang=scss&
var ExplorePagevue_type_style_index_0_lang_scss_ = __webpack_require__("3c16");

// EXTERNAL MODULE: ./src/views/ExplorePage.vue?vue&type=style&index=1&id=d8f134f4&scoped=true&lang=scss&
var ExplorePagevue_type_style_index_1_id_d8f134f4_scoped_true_lang_scss_ = __webpack_require__("f140");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ExplorePage.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_ExplorePagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d8f134f4",
  null
  
)

component.options.__file = "ExplorePage.vue"
/* harmony default export */ var ExplorePage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8454":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e72c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f140":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_1_id_d8f134f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e72c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_1_id_d8f134f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_1_id_d8f134f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExplorePage_vue_vue_type_style_index_1_id_d8f134f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.umd.47.js.map
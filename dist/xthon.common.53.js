((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[53],{

/***/ "4137":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4443aff0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/account/AccountNonprofits.vue?vue&type=template&id=6009db2c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-management-page__wrapper"},[_c('UserDialog',{attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"diseable-close":_vm.userDialogDisableClose},on:{"modal:close":function($event){_vm.closeUserDialog()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(_vm.userDialogHeading))]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),_c('h3',[_vm._v("Nonprofits I manage")]),_c('section',{staticClass:"nonprofits-section"},[(_vm.userData.fundraisers.length)?_c('div',[_c('table',{staticClass:"table is-striped is-fullwidth fundraisers-table"},[_vm._m(0),_c('tbody',_vm._l((_vm.userData.nonprofits),function(nonprofit){return _c('tr',{key:nonprofit.ein},[_c('td',[_c('router-link',{attrs:{"to":("/nonprofit/" + (nonprofit.ein))}},[_vm._v(_vm._s(nonprofit.name))])],1),_c('td',[_vm._v(_vm._s(_vm._f("usd")(nonprofit.raised)))]),_c('td',[_vm._v(_vm._s(nonprofit.donors_count))])])}))])]):_c('div',[_c('p',[_vm._v("You are not managing any nonprofit yet. If you represent one or more organizations, get to the nonprofit page using the search engine below. There you will be able to claim the organization and manage it.")]),_c('NonprofitAjaxSearch',{attrs:{"placeholder":"Enter a nonprofit name","standalone":true},on:{"selected":function($event){_vm.goToNonprofit($event)}}})],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Nonprofit")]),_c('th',[_vm._v("Raised")]),_c('th',[_vm._v("Donors count")])])])}]


// CONCATENATED MODULE: ./src/components/account/AccountNonprofits.vue?vue&type=template&id=6009db2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/account/AccountNonprofits.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AccountNonprofitsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      userDialogModal: false,
      userDialogHeading: 'Processing...',
      userDialogMessage: '',
      userDialogSpinner: false,
      userDialogDisableClose: false
    };
  },
  components: {
    NonprofitAjaxSearch: function NonprofitAjaxSearch() {
      return Promise.all(/* import() */[__webpack_require__.e(4), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "d662"));
    },
    UserDialog: function UserDialog() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "b7cf"));
    }
  },
  computed: {
    userData: function userData() {
      return this.$store.state.user;
    }
  },
  methods: {
    goToNonprofit: function goToNonprofit(ein) {
      this.$router.push("/nonprofit/".concat(ein));
    }
  }
});
// CONCATENATED MODULE: ./src/components/account/AccountNonprofits.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_AccountNonprofitsvue_type_script_lang_js_ = (AccountNonprofitsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/account/AccountNonprofits.vue?vue&type=style&index=0&id=6009db2c&scoped=true&lang=scss&
var AccountNonprofitsvue_type_style_index_0_id_6009db2c_scoped_true_lang_scss_ = __webpack_require__("6857");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/account/AccountNonprofits.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_AccountNonprofitsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6009db2c",
  null
  
)

component.options.__file = "AccountNonprofits.vue"
/* harmony default export */ var AccountNonprofits = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6857":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNonprofits_vue_vue_type_style_index_0_id_6009db2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd40");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNonprofits_vue_vue_type_style_index_0_id_6009db2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNonprofits_vue_vue_type_style_index_0_id_6009db2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNonprofits_vue_vue_type_style_index_0_id_6009db2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cd40":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.common.53.js.map
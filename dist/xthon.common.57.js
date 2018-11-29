((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[57],{

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

/***/ })

}]);
//# sourceMappingURL=xthon.common.57.js.map
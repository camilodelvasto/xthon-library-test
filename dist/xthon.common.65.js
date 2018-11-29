((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[65],{

/***/ "424e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4141df1d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitIRSData.vue?vue&type=template&id=f23c4894&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nonprofit-irs-data__wrapper"},[_c('div',{staticClass:"nonprofit-extended"},[_c('div',{staticClass:"nonprofit-data-section__irs-data"},[_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column is-9"},[_c('div',{staticClass:"table-row columns"},[_vm._m(0),_c('div',{staticClass:"table-data column is-8"},[(!_vm.nonprofit.data.name)?_c('div',[_c('InlineFieldEditor',{ref:"nonprofitName",attrs:{"layout":"inline","type":"textarea","allow-empty":false,"remove-returns":true,"error-text":"This field can't be empty","value":_vm.nonprofit.NAME,"edition-is-enabled":_vm.editing,"location":"nonprofit.data.name"},on:{"next:field":function($event){_vm.openEdition('nonprofitAbout')},"previous:field":function($event){_vm.emitPreviousField()}}})],1):_c('div',[_c('InlineFieldEditor',{ref:"nonprofitName",attrs:{"layout":"inline","type":"textarea","allow-empty":false,"remove-returns":true,"error-text":"This field can't be empty","edition-is-enabled":_vm.editing,"value":_vm.nonprofit.data.name,"location":"nonprofit.data.name"},on:{"next:field":function($event){_vm.emitNextField()},"previous:field":function($event){_vm.emitPreviousField()}}})],1)])]),_c('div',{staticClass:"table-row columns"},[_vm._m(1),_c('div',{staticClass:"table-data column is-8"},[_c('p',[_vm._v("501(c)("+_vm._s(_vm.nonprofit.SUBSECTION)+") nonprofit. Donations are 100% deductible")])])]),_c('div',{staticClass:"table-row columns"},[_vm._m(2),_c('div',{staticClass:"table-data column is-8"},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.CLASSIFICATION)}})])]),_c('div',{staticClass:"table-row columns"},[_vm._m(3),_c('div',{staticClass:"table-data column is-8"},[_c('p',[_vm._v(_vm._s(_vm.nonprofit.NTEE_CD.length > 1 ? _vm.nonprofit.NTEE_CD : _vm.nonprofit.ACTIVITY))])])]),_c('div',{staticClass:"table-row columns"},[_vm._m(4),_c('div',{staticClass:"table-data column is-8"},[_c('p',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.STREET)}}),_vm._v(",\n                "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.CITY)}}),_vm._v(",\n                "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.STATE)}}),_vm._v(",\n                "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.nonprofit.ZIP)}})])])]),_c('div',{staticClass:"table-row columns"},[_vm._m(5),_c('div',{staticClass:"table-data column is-8"},[_c('p',[_vm._v(_vm._s(_vm.nonprofit.EIN))])])]),_c('div',{staticClass:"helper-text"},[_vm._v("\n            *Data from IRS.gov\n          ")])]),_c('div',{staticClass:"column is-3"},[_c('div',{staticClass:"nonprofit-description__manage-cta"},[(!_vm.editing && !_vm.canEdit)?_c('button',{staticClass:"unselectable button is-medium is-rounded",on:{"click":function($event){_vm.enableEdition()}}},[_vm._v("Claim this organization\n            ")]):_vm._e(),(!_vm.editing && _vm.canEdit)?_c('button',{staticClass:"unselectable button is-medium is-rounded",on:{"click":function($event){_vm.enableEdition()}}},[_vm._v("Edit\n            ")]):_vm._e(),(_vm.editing)?_c('button',{staticClass:"unselectable button is-medium is-rounded",on:{"click":function($event){_vm.closeEdition()}}},[_vm._v("Close\n            ")]):_vm._e()])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-heading column is-4"},[_c('p',[_vm._v("Name:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-heading column is-4"},[_c('p',[_vm._v("Deductibility:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-heading column is-4"},[_c('p',[_vm._v("Classification:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-heading column is-4"},[_c('p',[_vm._v("Type/Activity:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-heading column is-4"},[_c('p',[_vm._v("Address:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-heading column is-4"},[_c('p',[_vm._v("Employer ID Number (EIN):")])])}]


// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitIRSData.vue?vue&type=template&id=f23c4894&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitIRSData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NonprofitIRSDatavue_type_script_lang_js_ = ({
  props: ['nonprofit', 'editing', 'canEdit'],
  components: {
    InlineFieldEditor: function InlineFieldEditor() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "b3b0"));
    }
  },
  methods: {
    enableEdition: function enableEdition() {
      this.$emit('edit:open');
    },
    closeEdition: function closeEdition() {
      this.$emit('edit:close');
    },
    openEdition: function openEdition(fieldName) {
      this.$refs[fieldName].openEdition();
    },
    emitPreviousField: function emitPreviousField() {
      this.$emit('edit:previous');
    },
    emitNextField: function emitNextField() {
      this.$emit('edit:next');
    }
  }
});
// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitIRSData.vue?vue&type=script&lang=js&
 /* harmony default export */ var nonprofit_NonprofitIRSDatavue_type_script_lang_js_ = (NonprofitIRSDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/nonprofit/NonprofitIRSData.vue?vue&type=style&index=0&id=f23c4894&scoped=true&lang=scss&
var NonprofitIRSDatavue_type_style_index_0_id_f23c4894_scoped_true_lang_scss_ = __webpack_require__("d98d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitIRSData.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nonprofit_NonprofitIRSDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f23c4894",
  null
  
)

component.options.__file = "NonprofitIRSData.vue"
/* harmony default export */ var NonprofitIRSData = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7275":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d98d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitIRSData_vue_vue_type_style_index_0_id_f23c4894_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7275");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitIRSData_vue_vue_type_style_index_0_id_f23c4894_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitIRSData_vue_vue_type_style_index_0_id_f23c4894_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitIRSData_vue_vue_type_style_index_0_id_f23c4894_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.common.65.js.map
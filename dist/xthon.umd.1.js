((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[1,6,7],{

/***/ "0a4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialog_vue_vue_type_style_index_0_id_79900a42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ded2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialog_vue_vue_type_style_index_0_id_79900a42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialog_vue_vue_type_style_index_0_id_79900a42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialog_vue_vue_type_style_index_0_id_79900a42_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1743":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f841f0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Modal.vue?vue&type=template&id=4e58d0c1&scoped=true&
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

/***/ "b4bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1743");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4e58d0c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b7cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f841f0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/UserDialog.vue?vue&type=template&id=79900a42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{staticClass:"user-dialog-component-wrapper",attrs:{"prevent-body-scroll":false,"state":_vm.state,"disableClose":_vm.disableClose},on:{"modal:close":function($event){_vm.$emit('modal:close')}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._t("header",[_vm._v("Processing")])],2),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"columns is-centered"},[_vm._t("content",[_c('p',[_vm._v("Hang tight, processing...")])])],2),(_vm.spinner)?_c('div',{staticClass:"spinner"},[_c('div',{staticClass:"bounce1"}),_c('div',{staticClass:"bounce2"}),_c('div',{staticClass:"bounce3"})]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/UserDialog.vue?vue&type=template&id=79900a42&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Modal.vue + 4 modules
var Modal = __webpack_require__("a0d0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/UserDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UserDialogvue_type_script_lang_js_ = ({
  props: ['state', 'spinner', 'disableClose'],
  components: {
    Modal: Modal["default"]
  }
});
// CONCATENATED MODULE: ./src/components/general/UserDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_UserDialogvue_type_script_lang_js_ = (UserDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/UserDialog.vue?vue&type=style&index=0&id=79900a42&scoped=true&lang=scss&
var UserDialogvue_type_style_index_0_id_79900a42_scoped_true_lang_scss_ = __webpack_require__("0a4d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/UserDialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_UserDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "79900a42",
  null
  
)

component.options.__file = "UserDialog.vue"
/* harmony default export */ var UserDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ded2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.umd.1.js.map
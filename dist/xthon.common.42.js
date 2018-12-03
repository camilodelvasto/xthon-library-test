((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[42],{

/***/ "1720":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/EditableImageField.vue?vue&type=template&id=4c8a5663&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"columns is-multiline is-mobile"},[_c('div',{staticClass:"column is-4-tablet is-11-mobile"},[_c('label',{attrs:{"for":("input-editable_" + _vm._uid)}},[_vm._v(_vm._s(_vm.label))])]),_c('div',{staticClass:"column is-5-tablet is-7-mobile"},[(!_vm.fieldIsOpen)?_c('div',{staticClass:"edition-trigger",on:{"click":function($event){_vm.openEdition()}}},[(_vm.avatar)?_c('img',{attrs:{"src":_vm.avatar,"width":"200"}}):_vm._e(),(!_vm.avatar)?_c('avatar',{attrs:{"username":_vm.$store.state.user.firstname + ' ' + _vm.$store.state.user.lastname,"rounded":false}}):_vm._e()],1):_vm._e(),(_vm.fieldIsOpen)?_c('div',{staticClass:"edition-box"},[_c('croppa',{attrs:{"initial-image":_vm.avatar,"placeholder":'Select file',"placeholder-font-size":20,"show-remove-button":false},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()},"new-image":function($event){_vm.errorMessage = ''}},model:{value:(_vm.myCroppa),callback:function ($$v) {_vm.myCroppa=$$v},expression:"myCroppa"}},[_c('div',{attrs:{"slot":"initial"},slot:"initial"},[_vm._v("Click here to upload a file")])]),_c('div',{staticClass:"control"},[_c('button',{staticClass:"button is-warning",on:{"click":function($event){_vm.myCroppa.remove()}}},[_vm._v("Remove")]),_c('button',{staticClass:"button is-success",on:{"click":function($event){_vm.saveField()}}},[_vm._v("Generate")])]),(_vm.fieldIsOpen)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v("Move the picture around the frame to crop it. You can also scroll or pinch with two fingers to zoom.")]),_c('p',[_vm._v("Click generate once ready to save the image.")])]):_vm._e()],1):_vm._e()]),_c('div',{staticClass:"column is-3-tablet is-5-mobile is-pulled-right"},[_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': _vm.fieldIsOpen},on:{"click":function($event){_vm.openEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"pencil","iconwidth":"20px","iconheight":"20px","color":"#999"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.saveField()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"check","iconwidth":"20px","iconheight":"20px","color":"#999"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.cancelEdition()},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"close-circle","iconwidth":"20px","iconheight":"20px","color":"#999"}})],1)]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.errorMessage)?_c('div',{staticClass:"column is-11-mobile is-6-tablet is-offset-4-tablet editable-error-message-wrapper"},[_c('span',{staticClass:"editable-error-message"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/EditableImageField.vue?vue&type=template&id=4c8a5663&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/EditableImageField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EditableImageFieldvue_type_script_lang_js_ = ({
  props: ['label', 'type', 'avatar', 'errorText'],
  data: function data() {
    return {
      fieldIsOpen: false,
      errorMessage: '',
      myCroppa: {}
    };
  },
  components: {
    Icons: Icons["default"],
    Avatar: function Avatar() {
      return __webpack_require__.e(/* import() */ 66).then(__webpack_require__.t.bind(null, "4a89", 7));
    }
  },
  methods: {
    cancelEdition: function cancelEdition() {
      this.fieldIsOpen = false;
      this.errorMessage = '';
    },
    openEdition: function openEdition() {
      this.fieldIsOpen = true;
      this.errorMessage = '';
    },
    saveField: function saveField() {
      var _this = this;

      this.myCroppa.generateBlob(function (blob) {
        if (!blob) {
          _this.errorMessage = _this.errorText;
        } else {
          _this.$emit('input:save', blob);

          _this.fieldIsOpen = false;
        }
      }, 'image/jpeg', 0.8); // 80% compressed jpeg file
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/EditableImageField.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_EditableImageFieldvue_type_script_lang_js_ = (EditableImageFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/EditableImageField.vue?vue&type=style&index=0&lang=scss&
var EditableImageFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("4eab");

// EXTERNAL MODULE: ./src/components/input/EditableImageField.vue?vue&type=style&index=1&id=4c8a5663&scoped=true&lang=scss&
var EditableImageFieldvue_type_style_index_1_id_4c8a5663_scoped_true_lang_scss_ = __webpack_require__("7bba");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/EditableImageField.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_EditableImageFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4c8a5663",
  null
  
)

component.options.__file = "EditableImageField.vue"
/* harmony default export */ var EditableImageField = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4eab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b03");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6b03":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7bba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_1_id_4c8a5663_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ece7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_1_id_4c8a5663_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_1_id_4c8a5663_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableImageField_vue_vue_type_style_index_1_id_4c8a5663_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ece7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.common.42.js.map
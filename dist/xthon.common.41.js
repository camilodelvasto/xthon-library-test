((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[41],{

/***/ "1573":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineRichTextEditor.vue?vue&type=template&id=a9fb4eb8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("field-wrapper layout-" + _vm.layout + " is-editing-" + _vm.editionIsEnabled)},[_c('UserDialog',{attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"disable-close":_vm.userDialogSpinner},on:{"modal:close":function($event){_vm.closeUserDialog()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(_vm.userDialogHeading))]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),(_vm.editionIsEnabled)?_c('div',{staticClass:"action-icons-wrapper",class:{'is-open': _vm.fieldIsOpen}},[_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': _vm.fieldIsOpen},on:{"click":function($event){_vm.openEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"pencil","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.saveField()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"check","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.cancelEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"close-circle","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1)]):_vm._e(),_c('div',{staticClass:"action-buttons-wrapper"},[(_vm.fieldIsOpen)?_c('button',{staticClass:"button is-warning button-cancel",on:{"click":function($event){_vm.cancelEdition()}}},[_vm._v("Cancel")]):_vm._e(),(_vm.fieldIsOpen)?_c('button',{staticClass:"button is-info button-save",on:{"click":function($event){_vm.saveField()}}},[_vm._v("Save")]):_vm._e()]),_c('div',{staticClass:"editable-field-wrapper"},[(!_vm.fieldIsOpen)?_c('div',{staticClass:"input-non-editable-value",domProps:{"innerHTML":_vm._s(_vm.value || _vm.placeholder)},on:{"click":function($event){_vm.openEdition()}}}):_vm._e(),(_vm.editionIsEnabled && _vm.fieldIsOpen)?_c('div',[_c('wysiwyg',{model:{value:(_vm.fieldValue),callback:function ($$v) {_vm.fieldValue=$$v},expression:"fieldValue"}})],1):_vm._e()]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.errorMessage)?_c('div',{staticClass:"editable-error-message-wrapper"},[_c('span',{staticClass:"editable-error-message"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/InlineRichTextEditor.vue?vue&type=template&id=a9fb4eb8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineRichTextEditor.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InlineRichTextEditorvue_type_script_lang_js_ = ({
  props: ['type', 'value', 'errorText', 'allowEmpty', 'removeReturns', 'layout', 'location', 'placeholder', 'editionIsEnabled', 'defaultOpen'],
  data: function data() {
    return {
      userDialogSpinner: true,
      userDialogModal: false,
      userDialogHeading: 'Processing...',
      userDialogMessage: '',
      fieldIsOpen: false,
      fieldValue: this.value,
      errorMessage: '',
      blurTimeout: null
    };
  },
  components: {
    Icons: Icons["default"],
    UserDialog: function UserDialog() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "b7cf"));
    }
  },
  methods: {
    cancelEdition: function cancelEdition() {
      this.fieldIsOpen = false;
      this.errorMessage = '';
      this.$emit('edit:close');
    },
    openEdition: function openEdition() {
      if (!this.editionIsEnabled) {
        return;
      }

      this.fieldIsOpen = true;
      this.fieldValue = this.value;
    },

    /*
     * This method will save a field if it can be validated.
     */
    saveField: function saveField() {
      var _this = this;

      if (!this.fieldIsOpen) {
        return;
      }

      if (!this.location) {
        this.$emit('edit:save');
        this.cancelEdition();
        return;
      }

      return new Promise(function (resolve, reject) {
        clearTimeout(_this.blurTimeout);

        if (_this.fieldValue) {
          _this.userDialogModal = true;
          console.log('content: ', _this.fieldValue);

          _this.$store.dispatch('SAVE_INLINE_FIELD', {
            location: _this.location,
            route: _this.$route,
            value: _this.fieldValue
          }).then(function () {
            _this.cancelEdition();

            _this.fieldIsOpen = false;
            _this.userDialogModal = false;
            resolve(_this.fieldValue);
          }).catch(function (err) {
            console.log(err);
            _this.userDialogModal = false;
            reject(err);
          });
        } else {
          _this.errorMessage = _this.errorText;
          _this.userDialogModal = false;
          resolve();
        }
      });
    },
    tabPressed: function tabPressed(e) {
      var _this2 = this;

      this.saveField().then(function (data) {
        if (data) {
          if (!e.shiftKey) {
            _this2.$emit('next:field');
          } else {
            _this2.$emit('previous:field');
          }
        }
      }).catch(function (err) {
        return err;
      });
    },
    enterPressed: function enterPressed(e) {
      if (!e.shiftKey) {
        this.saveField();
      }
    },

    /**
     * The timeout is needed so an external button can save before the blur cancels the edition
     */
    blurInput: function blurInput() {
      var _this3 = this;

      this.blurTimeout = setTimeout(function () {
        _this3.cancelEdition();
      }, 200);
    }
  },
  mounted: function mounted() {
    __webpack_require__("a6a5");

    if (this.defaultOpen) {
      this.openEdition();
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/InlineRichTextEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InlineRichTextEditorvue_type_script_lang_js_ = (InlineRichTextEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/InlineRichTextEditor.vue?vue&type=style&index=0&lang=scss&
var InlineRichTextEditorvue_type_style_index_0_lang_scss_ = __webpack_require__("1b2b");

// EXTERNAL MODULE: ./src/components/input/InlineRichTextEditor.vue?vue&type=style&index=1&id=a9fb4eb8&scoped=true&lang=scss&
var InlineRichTextEditorvue_type_style_index_1_id_a9fb4eb8_scoped_true_lang_scss_ = __webpack_require__("b1f8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/InlineRichTextEditor.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InlineRichTextEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a9fb4eb8",
  null
  
)

component.options.__file = "InlineRichTextEditor.vue"
/* harmony default export */ var InlineRichTextEditor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1b2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9acc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "385e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9acc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a6a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_wysiwyg_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7aa6");
/* harmony import */ var vue_wysiwyg_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_wysiwyg_2__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_wysiwyg_2__WEBPACK_IMPORTED_MODULE_1___default.a, {
  hideModules: {
    justifyLeft: true,
    justifyCenter: true,
    justifyRight: true,
    code: true,
    table: true
  },
  forcePlainTextOnPaste: true
});

/***/ }),

/***/ "b1f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_1_id_a9fb4eb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("385e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_1_id_a9fb4eb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_1_id_a9fb4eb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineRichTextEditor_vue_vue_type_style_index_1_id_a9fb4eb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.common.41.js.map
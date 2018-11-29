((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[9],{

/***/ "0a33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b3b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a5fafe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineFieldEditor.vue?vue&type=template&id=24240787&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("field-wrapper layout-" + _vm.layout + " is-editing-" + _vm.editionIsEnabled)},[_c('UserDialog',{attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"disable-close":_vm.userDialogSpinner},on:{"modal:close":function($event){_vm.closeUserDialog()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(_vm.userDialogHeading))]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),(_vm.editionIsEnabled)?_c('div',{staticClass:"action-icons-wrapper",class:{'is-open': _vm.fieldIsOpen}},[_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': _vm.fieldIsOpen},on:{"click":function($event){_vm.openEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"pencil","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.saveField()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"check","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.cancelEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"close-circle","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1)]):_vm._e(),_c('div',{staticClass:"editable-field-wrapper"},[(!_vm.fieldIsOpen)?_c('div',{staticClass:"input-non-editable-value",domProps:{"innerHTML":_vm._s(_vm.value || _vm.placeholder)},on:{"click":function($event){_vm.openEdition()}}}):_vm._e(),(_vm.editionIsEnabled && _vm.fieldIsOpen)?_c('div',[(_vm.type === 'textarea')?_c('div',{staticClass:"action-buttons-wrapper"},[(_vm.fieldIsOpen)?_c('button',{staticClass:"button is-warning button-cancel",on:{"click":function($event){_vm.cancelEdition()}}},[_vm._v("Cancel")]):_vm._e(),(_vm.fieldIsOpen)?_c('button',{staticClass:"button is-info button-save",on:{"click":function($event){_vm.saveField()}}},[_vm._v("Save")]):_vm._e()]):_vm._e(),((_vm.type || 'text')==='checkbox'&&(_vm.type === 'text' || _vm.type === 'url' || _vm.type === 'email'))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"placeholder":_vm.placeholder,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.fieldValue)?_vm._i(_vm.fieldValue,null)>-1:(_vm.fieldValue)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.tabPressed($event)},"change":function($event){var $$a=_vm.fieldValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.fieldValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.fieldValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.fieldValue=$$c}}}}):((_vm.type || 'text')==='radio'&&(_vm.type === 'text' || _vm.type === 'url' || _vm.type === 'email'))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"placeholder":_vm.placeholder,"type":"radio"},domProps:{"checked":_vm._q(_vm.fieldValue,null)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.tabPressed($event)},"change":function($event){_vm.fieldValue=null}}}):(_vm.type === 'text' || _vm.type === 'url' || _vm.type === 'email')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"placeholder":_vm.placeholder,"type":_vm.type || 'text'},domProps:{"value":(_vm.fieldValue)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.tabPressed($event)},"input":function($event){if($event.target.composing){ return; }_vm.fieldValue=$event.target.value}}}):_vm._e(),(_vm.type === 'textarea')?_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"rows":_vm.calculateRows()},domProps:{"value":(_vm.fieldValue)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.enterPressed($event)}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.tabPressed($event)},"input":function($event){if($event.target.composing){ return; }_vm.fieldValue=$event.target.value}}}):_vm._e()]):_vm._e()]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.errorMessage)?_c('div',{staticClass:"editable-error-message-wrapper"},[_c('span',{staticClass:"editable-error-message"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/InlineFieldEditor.vue?vue&type=template&id=24240787&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineFieldEditor.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var InlineFieldEditorvue_type_script_lang_js_ = ({
  props: ['type', 'value', 'errorText', 'allowEmpty', 'removeReturns', 'layout', 'location', 'placeholder', 'editionIsEnabled'],
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
    },
    openEdition: function openEdition() {
      var _this = this;

      if (!this.editionIsEnabled) {
        return;
      }

      this.fieldIsOpen = true;
      this.fieldValue = this.value;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        _this.$refs.input.focus();
      });
    },
    calculateRows: function calculateRows() {
      var rows = this.fieldValue ? Math.ceil(this.fieldValue.length / 60) : 0;

      if (this.fieldValue) {
        rows += this.fieldValue.split(/\n/).length;
      }

      return rows > 2 ? rows : 2;
    },

    /*
     * This method will save a field if it can be validated.
     */
    saveField: function saveField() {
      var _this2 = this;

      if (!this.fieldIsOpen) {
        return;
      }

      return new Promise(function (resolve, reject) {
        clearTimeout(_this2.blurTimeout);

        if (_this2.validateField()) {
          _this2.userDialogModal = true;

          _this2.$store.dispatch('SAVE_INLINE_FIELD', {
            location: _this2.location,
            route: _this2.$route,
            value: _this2.fieldValue
          }).then(function () {
            _this2.cancelEdition();

            _this2.fieldIsOpen = false;
            _this2.userDialogModal = false;
            resolve(_this2.fieldValue);
          }).catch(function (err) {
            console.log(err);
            _this2.userDialogModal = false;
            reject(err);
          });
        } else {
          _this2.errorMessage = _this2.errorText;
          _this2.userDialogModal = false;
          resolve();
        }
      });
    },
    tabPressed: function tabPressed(e) {
      var _this3 = this;

      if (this.type === 'textarea') {
        this.removeTrailingReturn();
      }

      this.saveField().then(function (data) {
        if (data) {
          if (!e.shiftKey) {
            _this3.$emit('next:field');
          } else {
            _this3.$emit('previous:field');
          }
        }
      }).catch(function (err) {
        return err;
      });
    },
    enterPressed: function enterPressed(e) {
      if (!e.shiftKey) {
        this.removeTrailingReturn();
        this.saveField();
      }
    },
    removeTrailingReturn: function removeTrailingReturn() {
      // Remove leading and trailing carriage return on save
      if (this.fieldValue) {
        this.fieldValue = this.fieldValue.replace(/^[\r\n]+|[\r\n]+$/g, '');
      }
    },

    /**
     * The timeout is needed so an external button can save before the blur cancels the edition
     */
    blurInput: function blurInput() {
      var _this4 = this;

      this.blurTimeout = setTimeout(function () {
        _this4.cancelEdition();
      }, 200);
    },
    validateField: function validateField() {
      if (this.type === 'text') {
        if (validator["m" /* validateTextNoHtml */](this.fieldValue, this.allowEmpty)) {
          return true;
        }

        return false;
      }

      if (this.type === 'textarea') {
        if (validator["m" /* validateTextNoHtml */](this.fieldValue, this.allowEmpty)) {
          return true;
        }

        return false;
      }

      if (this.type === 'url') {
        if (validator["n" /* validateURL */](this.fieldValue)) {
          return true;
        }

        return false;
      }

      if (this.type === 'email') {
        if (validator["d" /* validateEmail */](this.fieldValue)) {
          return true;
        }

        return false;
      }
    }
  },
  watch: {
    fieldValue: function fieldValue(newVal) {
      // Remove any triple carriage return.
      if (this.fieldValue) {
        this.fieldValue = newVal.replace(/(\r\n|\r|\n){3,}/g, '$1\n'); // Remove all carriage returns if this should be treated like an input.

        if (this.removeReturns) {
          this.fieldValue = newVal.replace(/(\r\n|\r|\n)/g, '');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/InlineFieldEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InlineFieldEditorvue_type_script_lang_js_ = (InlineFieldEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/InlineFieldEditor.vue?vue&type=style&index=0&id=24240787&scoped=true&lang=scss&
var InlineFieldEditorvue_type_style_index_0_id_24240787_scoped_true_lang_scss_ = __webpack_require__("f545");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/InlineFieldEditor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InlineFieldEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "24240787",
  null
  
)

component.options.__file = "InlineFieldEditor.vue"
/* harmony default export */ var InlineFieldEditor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f545":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineFieldEditor_vue_vue_type_style_index_0_id_24240787_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a33");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineFieldEditor_vue_vue_type_style_index_0_id_24240787_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineFieldEditor_vue_vue_type_style_index_0_id_24240787_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineFieldEditor_vue_vue_type_style_index_0_id_24240787_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.common.9.js.map
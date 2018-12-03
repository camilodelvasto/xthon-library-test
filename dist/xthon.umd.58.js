((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[58],{

/***/ "79fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a89a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPasswordChange_vue_vue_type_style_index_0_id_6aeb6722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("79fc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPasswordChange_vue_vue_type_style_index_0_id_6aeb6722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPasswordChange_vue_vue_type_style_index_0_id_6aeb6722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPasswordChange_vue_vue_type_style_index_0_id_6aeb6722_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c401":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login/ModalPasswordChange.vue?vue&type=template&id=6aeb6722&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Modal',{attrs:{"prevent-body-scroll":false,"state":_vm.state},on:{"modal:close":function($event){_vm.$emit('modal:close')}}},[_c('div',{attrs:{"slot":"trigger"},slot:"trigger"},[_vm._t("trigger")],2),_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._t("heading")],2),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('UserDialog',{staticClass:"user-dialog-password-change",attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"disable-close":_vm.userDialogSpinner},on:{"modal:close":function($event){_vm.closeModals()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Processing...")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),_c('form',{on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.validateSubmit()}}},[_c('InputPassword',{attrs:{"label":"New password","require-current-password":true,"required":true,"duplicate":true,"provide-feedback":true},on:{"input:valid":function($event){_vm.submitButtonDisabled = false},"input:invalid":function($event){_vm.submitButtonDisabled = true},"input:currentPassword":function($event){_vm.form.currentPassword = $event},"input:password":function($event){_vm.form.password = $event},"input:passwordConfirmation":function($event){_vm.form.passwordConfirmation = $event}}}),_c('div',{staticClass:"columns is-centered"},[_c('div',{staticClass:"form-submit-wrapper",on:{"click":function($event){$event.preventDefault();_vm.submitPasswordChangeRequest()}}},[_c('button',{staticClass:"button is-large is-danger is-centered",attrs:{"disabled":_vm.submitButtonDisabled}},[_vm._v("Submit")])])])],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/login/ModalPasswordChange.vue?vue&type=template&id=6aeb6722&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login/ModalPasswordChange.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ModalPasswordChangevue_type_script_lang_js_ = ({
  props: ['state'],
  data: function data() {
    return {
      editing: false,
      fieldValue: this.value,
      errorMessage: '',
      blurTimeout: null,
      submitButtonDisabled: true,
      form: {},
      userDialogSpinner: false,
      userDialogModal: false,
      userDialogMessage: ''
    };
  },
  components: {
    InputPassword: function InputPassword() {
      return __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, "9c9c"));
    },
    UserDialog: function UserDialog() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "b7cf"));
    },
    Modal: function Modal() {
      return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "a0d0"));
    },
    Icons: Icons["default"]
  },
  methods: {
    validateSubmit: function validateSubmit() {
      if (this.submitButtonDisabled) {
        return;
      }

      this.submitPasswordChangeRequest();
    },
    closeModals: function closeModals() {
      this.userDialogModal = false;
      this.$emit('modal:close');
    },

    /**
     * Submit a password change request.
     * TODO: this needs to take into account the social login option.
     */
    submitPasswordChangeRequest: function submitPasswordChangeRequest() {
      var _this = this;

      this.userDialogMessage = '';
      this.userDialogModal = true;
      this.userDialogSpinner = true;
      return this.$store.dispatch('SUBMIT_PASSWORD_CHANGE_REQUEST', {
        form: this.form
      }).then(function () {
        _this.userDialogMessage = 'Your password was changed successfully!';
        _this.userDialogSpinner = false;
      }).catch(function (err) {
        if (err.code === 401) {
          _this.userDialogMessage = 'Unauthorized. Your current password was incorrect.';
        } else {
          _this.userDialogMessage = "Error: ".concat(err.message);
        }

        _this.userDialogSpinner = false;
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/login/ModalPasswordChange.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_ModalPasswordChangevue_type_script_lang_js_ = (ModalPasswordChangevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/login/ModalPasswordChange.vue?vue&type=style&index=0&id=6aeb6722&scoped=true&lang=scss&
var ModalPasswordChangevue_type_style_index_0_id_6aeb6722_scoped_true_lang_scss_ = __webpack_require__("a89a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/login/ModalPasswordChange.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  login_ModalPasswordChangevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6aeb6722",
  null
  
)

component.options.__file = "ModalPasswordChange.vue"
/* harmony default export */ var ModalPasswordChange = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.umd.58.js.map
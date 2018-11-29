((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[54],{

/***/ "142f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_4339f73b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b2d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_4339f73b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_4339f73b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_4339f73b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7b2d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a82f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c7680122-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/account/AccountSettings.vue?vue&type=template&id=4339f73b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-management-page__wrapper"},[_c('UserDialog',{attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"disable-close":_vm.userDialogSpinner},on:{"modal:close":function($event){_vm.closeUserDialog()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(_vm.userDialogHeading))]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),_c('h3',[_vm._v("Settings")]),_c('section',{staticClass:"account-section"},[_c('h4',[_vm._v("Personal Data")]),_c('EditableTextField',{ref:"firstname",attrs:{"label":"First name:","value":_vm.userData.firstname,"error-text":"This field can't be empty","type":"name"},on:{"input:save":function($event){_vm.updateUserField('firstname', $event)},"next:field":function($event){_vm.openEdition('lastname')}}}),_c('EditableTextField',{ref:"lastname",attrs:{"label":"Last name:","value":_vm.userData.lastname,"error-text":"This field can't be empty","type":"name"},on:{"input:save":function($event){_vm.updateUserField('lastname', $event)},"next:field":function($event){_vm.openEdition('email')},"previous:field":function($event){_vm.openEdition('firstname')}}}),_c('EditableTextField',{ref:"email",attrs:{"label":"Email:","value":_vm.userData.email,"error-text":"Email is invalid","type":"email"},on:{"input:save":function($event){_vm.updateUserField('email', $event)},"previous:field":function($event){_vm.openEdition('lastname')}}}),_c('EditableImageField',{attrs:{"label":"Avatar:","avatar":_vm.userData.avatar,"error-text":"Invalid image","type":"avatar"},on:{"input:save":function($event){_vm.updateAvatar($event)}}}),_c('div',{staticClass:"columns is-multiline is-mobile"},[_vm._m(0),_c('div',{staticClass:"column is-5-tablet is-7-mobile"},[_c('ModalPasswordChange',{attrs:{"state":_vm.passwordChangeModal},on:{"modal:close":function($event){_vm.passwordChangeModal = false}}},[_c('div',{attrs:{"slot":"trigger"},on:{"click":function($event){_vm.passwordChangeModal = true}},slot:"trigger"},[_c('a',[_vm._v("Not shown. Change password?")])]),_c('div',{attrs:{"slot":"heading"},slot:"heading"},[_vm._v("Password change")])])],1)])],1),_c('section',{staticClass:"account-section"},[_c('h4',[_vm._v("Stored Payment Methods")]),(_vm.userData.payment_methods.length)?_c('div',[_c('table',{staticClass:"table is-striped is-fullwidth payment-methods-table"},[_vm._m(1),_c('tbody',_vm._l((_vm.userData.payment_methods),function(method){return _c('tr',{key:method.id},[(method.method === 'card')?_c('td',[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"credit-card","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_vm._v(" Credit Card\n            ")],1):_vm._e(),_c('td',[_vm._v("**** **** **** "+_vm._s(method.last_four))]),_c('td',[_vm._v(_vm._s(method.expiration_month)+"/"+_vm._s(method.expiration_year))]),_c('td',[_c('a',{staticClass:"delete",on:{"click":function($event){_vm.removePaymentMethod(method.id)}}},[_vm._v("(Remove)")])])])}))]),_c('p',{staticClass:"small"},[_vm._v("*Note: you can add a new payment method directly on the donation screen.")])]):_c('p',[_vm._v("You don't have any stored payment methods. You can add them while donating.")])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column is-4-tablet is-11-mobile"},[_c('label',[_vm._v("Password")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Payment method")]),_c('th',[_vm._v("Number")]),_c('th',[_vm._v("Expiration")]),_c('th',[_vm._v("Remove")])])])}]


// CONCATENATED MODULE: ./src/components/account/AccountSettings.vue?vue&type=template&id=4339f73b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/account/AccountSettings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AccountSettingsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      userDialogModal: false,
      userDialogHeading: 'Processing...',
      userDialogMessage: '',
      userDialogSpinner: false,
      passwordChangeModal: false
    };
  },
  components: {
    DonateBillingMethod: function DonateBillingMethod() {
      return __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, "a6f6"));
    },
    UserDialog: function UserDialog() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "b7cf"));
    },
    Icons: function Icons() {
      return __webpack_require__.e(/* import() */ 58).then(__webpack_require__.bind(null, "4706"));
    },
    ModalPasswordChange: function ModalPasswordChange() {
      return __webpack_require__.e(/* import() */ 45).then(__webpack_require__.bind(null, "c401c"));
    },
    EditableTextField: function EditableTextField() {
      return __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, "0350"));
    },
    EditableImageField: function EditableImageField() {
      return __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, "1720"));
    }
  },
  computed: {
    userData: function userData() {
      return this.$store.state.user;
    }
  },
  methods: {
    openEdition: function openEdition(fieldName) {
      this.$refs[fieldName].openEdition();
    },
    removePaymentMethod: function removePaymentMethod(id) {
      var _this = this;

      this.userDialogModal = true;
      this.userDialogSpinner = true;
      return this.$store.dispatch('REMOVE_PAYMENT_METHOD', {
        id: id
      }).then(function (data) {
        _this.userDialogMessage = 'The payment method was removed.';
        _this.userDialogSpinner = false;
      }).catch(function (err) {
        _this.userDialogMessage = 'An error occurred. Try again later.';
        _this.userDialogSpinner = false;
        console.log(err);
      });
    },
    updateUserField: function updateUserField(fieldName, newValue) {
      var _this2 = this;

      if (this.$store.state.user[fieldName] === newValue) {
        return;
      }

      this.userDialogModal = true;
      this.userDialogSpinner = true;
      return this.$store.dispatch('UPDATE_USER_FIELD', {
        field: fieldName,
        value: newValue
      }).then(function (data) {
        _this2.userDialogModal = false;
      }).catch(function (err) {
        _this2.userDialogMessage = 'An error occurred. Try again later.';
        _this2.userDialogSpinner = false;
        console.log(err);
      });
    },
    updateAvatar: function updateAvatar(blob) {
      // TODO: dispatch event to update the image in the DB
      console.log(blob);
    },
    closeUserDialog: function closeUserDialog() {
      this.userDialogMessage = '';
      this.userDialogModal = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/account/AccountSettings.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_AccountSettingsvue_type_script_lang_js_ = (AccountSettingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/account/AccountSettings.vue?vue&type=style&index=0&id=4339f73b&scoped=true&lang=scss&
var AccountSettingsvue_type_style_index_0_id_4339f73b_scoped_true_lang_scss_ = __webpack_require__("142f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/account/AccountSettings.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_AccountSettingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4339f73b",
  null
  
)

component.options.__file = "AccountSettings.vue"
/* harmony default export */ var AccountSettings = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.umd.54.js.map
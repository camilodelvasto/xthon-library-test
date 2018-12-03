((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[55],{

/***/ "6c29":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "acfb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogInModal_vue_vue_type_style_index_0_id_2cbdc909_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c29");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogInModal_vue_vue_type_style_index_0_id_2cbdc909_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogInModal_vue_vue_type_style_index_0_id_2cbdc909_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogInModal_vue_vue_type_style_index_0_id_2cbdc909_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e3b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/LogInModal.vue?vue&type=template&id=2cbdc909&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"modal",class:{'is-active': _vm.showingLoginModal},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.validateSubmit()}}},[_c('div',{staticClass:"modal-background",on:{"click":function($event){_vm.closeLoginBox()}}}),_c('div',{staticClass:"modal-content donate-view donate-view__wrapper inner-close small-modal"},[_c('h1',{staticClass:"title-centered"},[_vm._t("heading",[(_vm.loggedIn)?_c('span',[_vm._v("Your account")]):_vm._e(),(!_vm.loggedIn && !_vm.register)?_c('span',[_vm._v("Login")]):_vm._e(),(!_vm.loggedIn && _vm.register)?_c('span',[_vm._v("Register")]):_vm._e()])],2),_vm._t("intro",[(!_vm.loggedIn)?_c('p',{staticClass:"is-centered"},[_vm._v("Please log in with your email and password:")]):_vm._e()]),_c('div',{staticClass:"centered"},[(_vm.loggedIn)?_c('p',[_vm._v("You are logged in as "+_vm._s(_vm.userName))]):_vm._e(),(_vm.loggedIn)?_c('UserManagementLinks',{attrs:{"layout":"header"},on:{"goto:account":function($event){_vm.closeLoginBox()}}}):_vm._e(),(_vm.loggedIn)?_c('div',{on:{"click":function($event){_vm.logUserOut()}}},[_c('a',[_vm._v("Log Out »")])]):_vm._e()],1),_c('transition',{attrs:{"name":"slide-fade","mode":"out-in"}},[(!_vm.loggedIn)?_c('div',[_c('form',{on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.validateSubmit()}}},[(_vm.requireName)?_c('InputName',{attrs:{"label":"Email (for the receipt):","required":true},on:{"input:valid":function($event){_vm.validateAllFields()},"input:invalid":function($event){_vm.validateAllFields()},"input:first":function($event){_vm.form.firstname = $event; _vm.errorMessage = ''},"input:last":function($event){_vm.form.lastname = $event; _vm.errorMessage = ''}}}):_vm._e(),_c('InputEmail',{attrs:{"label":"Email","required":true},on:{"input:valid":function($event){_vm.validateAllFields()},"input:invalid":function($event){_vm.validateAllFields()},"input:email":function($event){_vm.setEmail($event)}}}),_c('InputPassword',{attrs:{"label":"Password","required":true,"duplicate":_vm.register,"provide-feedback":_vm.register,"error-message":_vm.errorMessage},on:{"input:valid":function($event){_vm.validateAllFields()},"input:invalid":function($event){_vm.validateAllFields()},"input:password":function($event){_vm.form.password = $event; _vm.errorMessage = ''},"input:passwordConfirmation":function($event){_vm.form.passwordConfirmation = $event; _vm.errorMessage = ''}}})],1),_c('div',{staticClass:"columns form-column__wrapper form-column__extra-padded input-line password-input-wrapper"},[_c('div',{staticClass:"column is-5 form-column__label-column input-label"}),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('ModalForgetPassword',{key:_vm.forgetPasswordEmail,attrs:{"email":_vm.forgetPasswordEmail}})],1)]),_c('div',{staticClass:"columns is-centered"},[_c('div',{staticClass:"form-submit-wrapper",on:{"click":function($event){$event.preventDefault();_vm.loginOrRegister()}}},[_c('button',{staticClass:"button is-large is-danger",attrs:{"disabled":_vm.submitButtonDisabled}},[_vm._v("Submit")])])]),_c('SocialLogin',[_c('div',{staticClass:"social-login-wrapper columns is-centered",attrs:{"slot":"header"},slot:"header"},[_c('p',{staticClass:"is-centered"},[_vm._v("Or with one of the following services:")])])])],1):_vm._e()]),_c('button',{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{"click":function($event){$event.preventDefault();_vm.closeLoginBox()}}})],2)]),(_vm.layout === 'social-signup')?_c('div',[_c('SocialLogin',{attrs:{"show-only":_vm.showOnly}})],1):_vm._e(),(_vm.layout === 'app-header')?_c('div',[(!_vm.loggedIn)?_c('div',[_c('span',{on:{"click":function($event){_vm.openLoginBox()}}},[_c('a',[_vm._v("Login")])]),_vm._v("\n      |\n      "),_c('span',{on:{"click":function($event){_vm.openLoginBox()}}},[_c('a',[_vm._v("Register")])])]):_vm._e(),(_vm.loggedIn)?_c('div',{on:{"click":function($event){_vm.openLoginBox()}}},[_vm._t("logged",[_c('a',[_vm._v(_vm._s(_vm.userName)+" »")])])],2):_vm._e()]):_vm._e(),(!_vm.layout)?_c('div',[(!_vm.loggedIn)?_c('div',{staticClass:"trigger"},[_c('span',{on:{"click":function($event){_vm.openLoginBox()}}},[_vm._t("trigger")],2)]):_vm._e(),_vm._t("intro")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/LogInModal.vue?vue&type=template&id=2cbdc909&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/components/login/ModalForgetPassword.vue + 4 modules
var ModalForgetPassword = __webpack_require__("853f");

// EXTERNAL MODULE: ./src/components/input/InputEmail.vue + 4 modules
var InputEmail = __webpack_require__("ba03");

// EXTERNAL MODULE: ./src/components/input/InputName.vue + 4 modules
var InputName = __webpack_require__("a4ab");

// EXTERNAL MODULE: ./src/components/input/InputPassword.vue + 4 modules
var InputPassword = __webpack_require__("9c9c");

// EXTERNAL MODULE: ./src/components/login/SocialLogin.vue + 4 modules
var SocialLogin = __webpack_require__("fa8f");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/LogInModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var LogInModalvue_type_script_lang_js_ = ({
  props: ['layout', 'login', 'signup', 'showOnly', 'display', 'requireName', 'register'],
  components: {
    Icons: Icons["default"],
    InputEmail: InputEmail["default"],
    InputName: InputName["a" /* default */],
    InputPassword: InputPassword["default"],
    ModalForgetPassword: ModalForgetPassword["a" /* default */],
    SocialLogin: SocialLogin["a" /* default */],
    UserManagementLinks: function UserManagementLinks() {
      return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "90de"));
    }
  },
  data: function data() {
    return {
      showingLoginModal: this.display || false,
      errorMessage: '',
      welcomeMessage: '',
      submitButtonDisabled: true,
      form: {},
      forgetPasswordEmail: '',
      timeout: null
    };
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.user.loggedIn;
    },
    userName: function userName() {
      return this.$store.state.user.fullname;
    }
  },
  methods: {
    setEmail: function setEmail(event) {
      this.form.email = event;
      this.forgetPasswordEmail = event;
    },
    openLoginBox: function openLoginBox() {
      this.showingLoginModal = true;
    },
    closeLoginBox: function closeLoginBox() {
      this.showingLoginModal = false;
      clearTimeout(this.timeout);
      this.$emit('modal:close');
    },
    logUserOut: function logUserOut() {
      this.$store.commit('LOG_OFF', {
        status: false
      });
      this.closeLoginBox();
    },
    validateSubmit: function validateSubmit() {
      if (!this.submitButtonDisabled) {
        this.logUserIn();
      }
    },
    loginOrRegister: function loginOrRegister() {
      if (this.register) {
        this.closeLoginBox();
      } else {
        this.logUserIn();
      }
    },
    validateAllFields: function validateAllFields() {
      var validName = validator["f" /* validateName */](this.form.firstname) && validator["f" /* validateName */](this.form.lastname);
      var validPass = validator["g" /* validatePassword */](this.form.password) && !this.register || validator["g" /* validatePassword */](this.form.password) && this.form.password === this.form.passwordConfirmation;

      if (validPass && validator["d" /* validateEmail */](this.form.email) && (validName && this.requireName || !this.requireName)) {
        this.submitButtonDisabled = false;
      } else {
        this.submitButtonDisabled = true;
      }
    },
    logUserIn: function logUserIn() {
      var _this = this;

      if (!this.submitButtonDisabled) {
        this.submitButtonDisabled = true;
        return this.$store.dispatch('AUTHENTICATE_USER', {
          email: this.form.email,
          password: this.form.password
        }).then(function (data) {
          if (data) {
            // provide some feedback
            _this.welcomeMessage = "You are logged in, ".concat(_this.userName);

            _this.$emit('modal:logged');

            _this.timeout = setTimeout(function () {
              _this.showingLoginModal = false;
            }, 6000);
          } else {
            _this.validateAllFields();

            _this.errorMessage = 'Wrong password or email does not exist';
          }
        }).catch(function (err) {
          console.log('error: ', err);
        });
      }
    }
  },
  watch: {
    display: function display(value) {
      if (value) {
        this.showingLoginModal = value;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/general/LogInModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_LogInModalvue_type_script_lang_js_ = (LogInModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/LogInModal.vue?vue&type=style&index=0&id=2cbdc909&scoped=true&lang=scss&
var LogInModalvue_type_style_index_0_id_2cbdc909_scoped_true_lang_scss_ = __webpack_require__("acfb");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/LogInModal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_LogInModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2cbdc909",
  null
  
)

component.options.__file = "LogInModal.vue"
/* harmony default export */ var LogInModal = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.umd.55.js.map
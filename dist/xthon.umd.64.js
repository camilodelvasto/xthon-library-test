((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[64],{

/***/ "16ed":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "61d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f841f0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitForm.vue?vue&type=template&id=ff1f7ac4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"form-wrapper"},[_c('form',{on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }}}},[_c('div',{staticClass:"columns form-column__wrapper  is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label",attrs:{"for":("input-email_" + _vm._uid)}},[_vm._v("How many miles will you ride:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"chart-line-variant","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.howManyMiles),expression:"form.howManyMiles"}],staticClass:"input",attrs:{"type":"number","name":"action","placeholder":"","required":true},domProps:{"value":(_vm.form.howManyMiles)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "howManyMiles", $event.target.value)}}})],1)])]),_c('div',{staticClass:"columns form-column__wrapper  is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label",attrs:{"for":("input-email_" + _vm._uid)}},[_vm._v("Start location:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"location","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.startLocation),expression:"form.startLocation"}],staticClass:"input",attrs:{"type":"text","name":"action","placeholder":"","required":true},domProps:{"value":(_vm.form.startLocation)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "startLocation", $event.target.value)}}})],1)])]),_c('div',{staticClass:"columns form-column__wrapper  is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label",attrs:{"for":("input-email_" + _vm._uid)}},[_vm._v("End location:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"location","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.endLocation),expression:"form.endLocation"}],staticClass:"input",attrs:{"type":"text","name":"action","placeholder":"","required":true},domProps:{"value":(_vm.form.endLocation)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "endLocation", $event.target.value)}}})],1)])]),_c('div',{staticClass:"columns form-column__wrapper  is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label",attrs:{"for":("input-email_" + _vm._uid)}},[_vm._v("Date of the event:")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"calendar","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('datetime',{model:{value:(_vm.form.date),callback:function ($$v) {_vm.$set(_vm.form, "date", $$v)},expression:"form.date"}})],1)])]),(_vm.enableNonprofitSearch)?_c('div',{staticClass:"columns form-column__wrapper  is-multiline"},[_vm._m(0),(_vm.canRender)?_c('NonprofitAjaxSearch',{attrs:{"standalone":false},on:{"selected":function($event){_vm.setNonprofit($event)}}}):_vm._e()],1):_vm._e(),_c('div',{staticClass:"columns form-column__wrapper is-multiline"},[_vm._m(1),_c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"radio"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.ownRide),expression:"form.ownRide"}],attrs:{"type":"radio","name":"non-profit-is","value":"own"},domProps:{"checked":_vm._q(_vm.form.ownRide,"own")},on:{"change":function($event){_vm.$set(_vm.form, "ownRide", "own")}}}),_vm._v("\n              Your own ride\n            ")]),_c('label',{staticClass:"radio"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.ownRide),expression:"form.ownRide"}],attrs:{"type":"radio","name":"non-profit-is","value":"event"},domProps:{"checked":_vm._q(_vm.form.ownRide,"event")},on:{"change":function($event){_vm.$set(_vm.form, "ownRide", "event")}}}),_vm._v("\n              Part of an existing event\n            ")])])]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.form.ownRide === 'event')?_c('div',{staticClass:"columns form-column__wrapper  is-multiline"},[_c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label",attrs:{"for":("input-email_" + _vm._uid)}},[_vm._v("Name of the event")])]),_c('div',{staticClass:"column is-5 form-column__input-column"},[_c('div',{staticClass:"control input-wrapper"},[_c('Icons',{staticClass:"input-icon",attrs:{"icon":"bike","iconwidth":"20px","iconheight":"20px","color":"#999"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.eventName),expression:"form.eventName"}],staticClass:"input",attrs:{"type":"text","name":"action","placeholder":"","required":true},domProps:{"value":(_vm.form.eventName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "eventName", $event.target.value)}}})],1)])]):_vm._e()]),_c('button',{staticClass:"button is-success is-large",attrs:{"type":"submit"},on:{"click":function($event){$event.preventDefault();_vm.validateSubmit()}}},[_vm._v("Continue")])],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label"},[_vm._v("Pick a nonprofit:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column is-5 form-column__label-column"},[_c('label',{staticClass:"label"},[_vm._v("Is this:")])])}]


// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitForm.vue?vue&type=template&id=ff1f7ac4&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nonprofit/NonprofitForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NonprofitFormvue_type_script_lang_js_ = ({
  props: ['submitButtonLabel', 'enableNonprofitSearch'],

  /**
   * Uses dynamic import to speed up page performance.
   * See https://webpack.js.org/guides/code-splitting/ for reference.
   */
  components: {
    Icons: Icons["default"],
    ComboBox: function ComboBox() {
      return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "3a87"));
    },
    NonprofitAjaxSearch: function NonprofitAjaxSearch() {
      return Promise.all(/* import() */[__webpack_require__.e(4), __webpack_require__.e(61)]).then(__webpack_require__.bind(null, "d662"));
    }
  },
  mounted: function mounted() {
    this.canRender = true;
    var storedForm = window.localStorage.getItem('nonprofitForm');

    if (storedForm) {
      this.form = JSON.parse(storedForm);
    }
  },
  data: function data() {
    return {
      canRender: false,
      form: {},
      errorMessage: '',
      nonprofitErrorMessage: '',
      nonprofitIsErrorMessage: '',
      hoursErrorMessage: '',
      targetNonprofitErrorMessage: ''
    };
  },

  /**
   * TODO: validate form, submit data to api, display thank you or error dialog.
   */
  methods: {
    setNonprofit: function setNonprofit($event) {
      console.log($event);
    }
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.user.loggedIn;
    }
  }
});
// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var nonprofit_NonprofitFormvue_type_script_lang_js_ = (NonprofitFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/nonprofit/NonprofitForm.vue?vue&type=style&index=0&id=ff1f7ac4&scoped=true&lang=scss&
var NonprofitFormvue_type_style_index_0_id_ff1f7ac4_scoped_true_lang_scss_ = __webpack_require__("6993");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/nonprofit/NonprofitForm.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nonprofit_NonprofitFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ff1f7ac4",
  null
  
)

component.options.__file = "NonprofitForm.vue"
/* harmony default export */ var NonprofitForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6993":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitForm_vue_vue_type_style_index_0_id_ff1f7ac4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("16ed");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitForm_vue_vue_type_style_index_0_id_ff1f7ac4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitForm_vue_vue_type_style_index_0_id_ff1f7ac4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonprofitForm_vue_vue_type_style_index_0_id_ff1f7ac4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.umd.64.js.map
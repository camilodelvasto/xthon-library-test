((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[36],{

/***/ "0350":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/EditableTextField.vue?vue&type=template&id=c893dd7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-multiline is-mobile"},[_c('div',{staticClass:"column is-4-tablet is-11-mobile"},[_c('label',{attrs:{"for":("input-editable_" + _vm._uid)}},[_vm._v(_vm._s(_vm.label))])]),_c('div',{staticClass:"column is-5-tablet is-7-mobile"},[(!_vm.fieldIsOpen)?_c('div',{staticClass:"input-non-editable-value",domProps:{"innerHTML":_vm._s(_vm.value)},on:{"click":function($event){_vm.openEdition()}}}):_c('div',[((_vm.type || 'text')==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.fieldValue)?_vm._i(_vm.fieldValue,null)>-1:(_vm.fieldValue)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.next($event)},"change":function($event){var $$a=_vm.fieldValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.fieldValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.fieldValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.fieldValue=$$c}}}}):((_vm.type || 'text')==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"type":"radio"},domProps:{"checked":_vm._q(_vm.fieldValue,null)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.next($event)},"change":function($event){_vm.fieldValue=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fieldValue),expression:"fieldValue"}],ref:"input",staticClass:"input-editable-value",attrs:{"id":("input-editable_" + _vm._uid),"type":_vm.type || 'text'},domProps:{"value":(_vm.fieldValue)},on:{"blur":function($event){_vm.blurInput()},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }_vm.cancelEdition()},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveField()}],"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.next($event)},"input":function($event){if($event.target.composing){ return; }_vm.fieldValue=$event.target.value}}})])]),_c('div',{staticClass:"column is-3-tablet is-5-mobile is-pulled-right"},[_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': _vm.fieldIsOpen},on:{"click":function($event){_vm.openEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"pencil","iconwidth":"20px","iconheight":"20px","color":"#999"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.saveField(12)}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"check","iconwidth":"20px","iconheight":"20px","color":"#999"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.cancelEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"close-circle","iconwidth":"20px","iconheight":"20px","color":"#999"}})],1)]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.errorMessage)?_c('div',{staticClass:"column is-11-mobile is-6-tablet is-offset-4-tablet editable-error-message-wrapper"},[_c('span',{staticClass:"editable-error-message"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/EditableTextField.vue?vue&type=template&id=c893dd7c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/util/validator.js
var validator = __webpack_require__("2e53");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/EditableTextField.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var EditableTextFieldvue_type_script_lang_js_ = ({
  props: ['label', 'type', 'value', 'errorText'],
  data: function data() {
    return {
      fieldIsOpen: false,
      fieldValue: this.value,
      errorMessage: '',
      blurTimeout: null
    };
  },
  components: {
    Icons: Icons["default"]
  },
  methods: {
    cancelEdition: function cancelEdition() {
      this.fieldIsOpen = false;
      this.errorMessage = '';
    },
    openEdition: function openEdition() {
      var _this = this;

      this.fieldValue = this.value;
      this.fieldIsOpen = true;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        _this.$refs.input.focus();
      });
    },
    saveField: function saveField(id) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!_this2.fieldIsOpen) {
          reject('err');
        }

        clearTimeout(_this2.blurTimeout);

        if (_this2.validateAllFields()) {
          _this2.$emit('input:save', _this2.fieldValue);

          _this2.cancelEdition();

          resolve();
        } else {
          _this2.errorMessage = _this2.errorText;
        }
      });
    },
    next: function next(e) {
      var _this3 = this;

      this.saveField().then(function () {
        if (!e.shiftKey) {
          _this3.$emit('next:field');
        } else {
          _this3.$emit('previous:field');
        }
      }).catch(function (err) {
        return err;
      });
    },

    /**
     * This is needed in order to allow an external button to save before the blur cancels the edition
     */
    blurInput: function blurInput() {
      var _this4 = this;

      this.blurTimeout = setTimeout(function () {
        _this4.cancelEdition();
      }, 200);
    },
    validateAllFields: function validateAllFields() {
      if (this.type === 'name') {
        if (validator["f" /* validateName */](this.fieldValue)) {
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
  }
});
// CONCATENATED MODULE: ./src/components/input/EditableTextField.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_EditableTextFieldvue_type_script_lang_js_ = (EditableTextFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/EditableTextField.vue?vue&type=style&index=0&id=c893dd7c&scoped=true&lang=scss&
var EditableTextFieldvue_type_style_index_0_id_c893dd7c_scoped_true_lang_scss_ = __webpack_require__("c8e9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/EditableTextField.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_EditableTextFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c893dd7c",
  null
  
)

component.options.__file = "EditableTextField.vue"
/* harmony default export */ var EditableTextField = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "2e53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return validateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return validatePasswordLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return validatePasswordNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return validatePasswordCapital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return validatePasswordLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return validatePasswordSpecial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validateCreditCardNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validateExpirationDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return validateZipCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return validateTextNoHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return validateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getYouTubeID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatNumber; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4917");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6b54");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);



// Source: https://stackoverflow.com/a/1373724
function validateEmail(email) {
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/; // eslint-disable-line max-len

  return re.test(String(email).toLowerCase());
}
function validateName(name) {
  if (name && name.length >= 2) {
    return true;
  }

  return false;
}
function validatePassword(password) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W|_])[A-Za-z\d\W|_]{8,}/;
  return re.test(String(password));
}
function validatePasswordLength(password) {
  return password.length >= 8;
}
function validatePasswordNumber(password) {
  var re = /^(?=.*\d)/;
  return re.test(String(password));
}
function validatePasswordCapital(password) {
  var re = /^(?=.*[A-Z])/;
  return re.test(String(password));
}
function validatePasswordLower(password) {
  var re = /^(?=.*[a-z])/;
  return re.test(String(password));
}
function validatePasswordSpecial(password) {
  var re = /\W|_/g;
  return re.test(String(password));
}
function validateCreditCardNumber(number) {
  if (number) {
    return number.toString().length === 16;
  }

  return false;
}
function validateExpirationDate(month, year) {
  var d = new Date();
  var currentYear = d.getFullYear() - 2000;

  if (year > currentYear) {
    return true;
  }

  if (month >= d.getMonth() && year === currentYear) {
    return true;
  }

  return false;
}
function validateZipCode(code) {
  if (code) {
    return code.toString().length === 5;
  }

  return false;
}
function validateTextNoHtml(text, allowEmpty) {
  var re = /<[a-z/][\s\S]*>/i;

  if (!re.test(text)) {
    if (!text || text.replace(/[\n\r]/g, '').length === 0) {
      if (allowEmpty) {
        return true;
      }

      return false;
    }

    return true;
  }

  return false;
}
function validateURL(url) {
  var re = /^((http|https):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

  if (re.test(url)) {
    return true;
  }

  return false;
}
function getYouTubeID(url) {
  if (!url) {
    return null;
  }

  var re = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line no-useless-escape

  var match = url.match(re);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return null;
}
function formatNumber(newVal, oldVal, max) {
  var notANumber = newVal && isNaN(newVal.charAt(newVal.length - 1));
  var tooLarge = newVal && newVal.length > max;

  if (notANumber || tooLarge) {
    return oldVal;
  }

  return newVal;
}

/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "75d9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c8e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_c893dd7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("75d9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_c893dd7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_c893dd7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableTextField_vue_vue_type_style_index_0_id_c893dd7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.common.36.js.map
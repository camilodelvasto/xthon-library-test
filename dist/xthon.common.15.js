((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[15,58,63],{

/***/ "145d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ef6b7e28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineImageEditor.vue?vue&type=template&id=2a421070&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.fieldIsOpen && _vm.isStandalone)?_c('div',{staticClass:"overlay"}):_vm._e(),_c('div',{class:("field-wrapper layout-" + _vm.layout + " is-open-" + _vm.fieldIsOpen + " flex-one")},[_c('UserDialog',{attrs:{"spinner":_vm.userDialogSpinner,"state":_vm.userDialogModal,"disable-close":_vm.userDialogSpinner},on:{"modal:close":function($event){_vm.cancelEdition()}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(_vm.userDialogHeading))]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('p',[_vm._v(_vm._s(_vm.userDialogMessage))])])]),_c('div',{staticClass:"editable-field-wrapper flex-one",class:{'columns': !_vm.isStandalone}},[_c('div',{class:{'flex-one': _vm.isBackgroundImage && !_vm.fieldIsOpen, 'column is-6': !_vm.isStandalone}},[(!_vm.fieldIsOpen)?_c('div',{class:{'flex-one': _vm.isBackgroundImage},on:{"click":function($event){_vm.openEdition()}}},[_c('LazyLoadedImage',{staticClass:"inline-image-item",class:{'is-open': _vm.fieldIsOpen, 'is-background': _vm.isBackgroundImage},attrs:{"is-background":_vm.isBackgroundImage,"src":_vm.staticImage,"alt":_vm.alt,"default-text":_vm.defaultText,"is-editable":_vm.editionIsEnabled}})],1):_vm._e(),(_vm.fieldIsOpen)?_c('croppa',{style:({width: ((_vm.calculateWidth + 6) + "px"), height: ((_vm.calculateHeight + 6) + "px")}),attrs:{"initial-image":_vm.croppaInitialImage,"placeholder":'Select file',"placeholder-font-size":20,"show-remove-button":false,"width":_vm.calculateWidth,"height":_vm.calculateHeight,"prevent-white-space":true},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.saveImage()},"new-image":function($event){_vm.errorMessage = ''}},model:{value:(_vm.croppaObject),callback:function ($$v) {_vm.croppaObject=$$v},expression:"croppaObject"}},[_c('div',{attrs:{"slot":"initial"},slot:"initial"},[_vm._v("Click here to upload a file")])]):_vm._e()],1),(_vm.editionIsEnabled)?_c('div',{staticClass:"image-control",class:{'column is-6': !_vm.isStandalone, 'hero-image': _vm.ratio === 0.3}},[_c('div',{staticClass:"action-icons-wrapper",class:{'is-open': _vm.fieldIsOpen}},[_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': _vm.fieldIsOpen},on:{"click":function($event){_vm.openEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"pencil","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.saveImage()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"check","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1),_c('div',{staticClass:"action-icon-wrapper",class:{'hide-icon': !_vm.fieldIsOpen},on:{"click":function($event){_vm.cancelEdition()}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"close-circle","iconwidth":"16px","iconheight":"16px","color":"#FFF"}})],1)]),_c('div',{staticClass:"button-wrapper"},[(!_vm.disableOrientation && _vm.fieldIsOpen)?_c('div',{staticClass:"orientation-wrapper"},[_c('div',{on:{"click":function($event){_vm.ratio = 1}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"crop-square","iconwidth":"24px","iconheight":"24px","color":"#333"}})],1),_c('div',{on:{"click":function($event){_vm.ratio = 4/3}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"crop-portrait","iconwidth":"24px","iconheight":"24px","color":"#333"}})],1),_c('div',{on:{"click":function($event){_vm.ratio = 3/4}}},[_c('Icons',{staticClass:"action-icon",attrs:{"icon":"crop-landscape","iconwidth":"24px","iconheight":"24px","color":"#333"}})],1)]):_vm._e(),(!_vm.required)?_c('button',{staticClass:"button is-warning",on:{"click":function($event){_vm.removeImage()}}},[_vm._v("Remove")]):_vm._e(),(_vm.fieldIsOpen)?_c('button',{staticClass:"button is-info",on:{"click":function($event){_vm.clearField()}}},[_vm._v("Clear")]):_vm._e(),(_vm.defaultImage && _vm.fieldIsOpen)?_c('button',{staticClass:"button is-primary",on:{"click":function($event){_vm.useDefault()}}},[_vm._v("Use default")]):_vm._e(),(_vm.fieldIsOpen)?_c('button',{staticClass:"button is-success",on:{"click":function($event){_vm.saveImage()}}},[_vm._v("Generate")]):_vm._e()]),(_vm.fieldIsOpen)?_c('div',{staticClass:"instructions"},[_c('p',[_vm._v("Move the picture around the frame to crop it. You can also scroll or pinch with two fingers to zoom.")]),_c('p',[_vm._v("Click generate once ready to save the image.")])]):_vm._e()]):_vm._e()]),_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.errorMessage)?_c('div',{staticClass:"editable-error-message-wrapper"},[_c('span',{staticClass:"editable-error-message"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/InlineImageEditor.vue?vue&type=template&id=2a421070&scoped=true&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/components/plugins/LazyLoadedImage.js
var LazyLoadedImage = __webpack_require__("623f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineImageEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var InlineImageEditorvue_type_script_lang_js_ = ({
  props: ['item', 'layout', 'location', 'openId', 'openDefault', 'isBackgroundImage', 'alt', 'editionIsEnabled', 'type', 'is-standalone', 'disableOrientation', 'initialRatio', 'defaultImage', 'required', 'defaultText'],
  data: function data() {
    return {
      croppaObject: {},
      croppaInitialImage: '',
      ratio: 1,
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
    LazyLoadedImage: LazyLoadedImage["default"],
    UserDialog: function UserDialog() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "b7cf"));
    }
  },
  computed: {
    calculateWidth: function calculateWidth() {
      if (typeof window === 'undefined' || typeof this.$el === 'undefined') {
        return 400;
      }

      var wrapperWidth = this.$el.clientWidth;

      if (this.type === 'avatar') {
        if (this.layout === 'overlay') {
          return wrapperWidth - 12;
        }

        return wrapperWidth / 2 - 12;
      }

      return wrapperWidth < 400 ? wrapperWidth - 6 : 400;
    },
    calculateHeight: function calculateHeight() {
      return this.calculateWidth * this.ratio;
    },
    initialImage: function initialImage() {
      return typeof this.item !== 'undefined' ? this.item.src : '';
    },
    staticImage: function staticImage() {
      return this.initialImage ? this.initialImage : this.defaultImage ? this.defaultImage.src : '';
    }
  },
  mounted: function mounted() {
    if (this.openDefault) {
      this.openEdition();
    }

    if (this.initialRatio) {
      this.ratio = this.initialRatio;
    }

    this.croppaInitialImage = this.initialImage;
  },
  methods: {
    cancelEdition: function cancelEdition() {
      if (this.fieldIsOpen && !this.croppaObject.hasImage()) {
        this.$emit('image:remove');
      }

      this.fieldIsOpen = false;
      this.errorMessage = '';
      this.userDialogModal = false;
      this.$emit('edition:close', this._uid);
    },
    openEdition: function openEdition() {
      if (!this.editionIsEnabled) {
        return;
      }

      this.fieldIsOpen = true;
      this.$emit('edition:open', this._uid);
    },
    clearField: function clearField() {
      if (this.croppaObject && this.croppaObject.hasImage()) {
        this.croppaObject.remove();
      }
    },
    useDefault: function useDefault() {
      this.croppaInitialImage = this.defaultImage.src;
      this.croppaObject.refresh();
    },
    removeImage: function removeImage() {
      var _this = this;

      this.userDialogModal = true;
      this.userDialogSpinner = true;
      this.errorMessage = '';

      if (typeof this.item !== 'undefined') {
        this.$store.dispatch('REMOVE_IMAGE', {
          location: this.location,
          route: this.$route,
          id: this.item.id
        }).then(function () {
          _this.cancelEdition();
        }).catch(function (err) {
          _this.userDialogSpinner = false;
          _this.errorMessage = 'An unknown error occurred.';
          console.log(err);
        });
      } else {
        this.cancelEdition();
      }
    },

    /*
     * This method will save an image to the library if it can be validated.
     */
    saveImage: function saveImage() {
      var _this2 = this;

      if (!this.fieldIsOpen) {
        return;
      }

      this.userDialogModal = true;
      this.croppaObject.generateBlob(function (blob) {
        if (!blob) {
          _this2.userDialogMessage = "The image couldn't be generated.";
          _this2.userDialogSpinner = false;
        } else {
          _this2.userDialogSpinner = true;

          _this2.$store.dispatch('SAVE_IMAGE_FIELD', {
            location: _this2.location,
            route: _this2.$route,
            blob: blob
          }).then(function () {
            _this2.cancelEdition();
          }).catch(function (err) {
            console.log(err);
          });
        }
      }, 'image/jpeg', 0.8); // 80% compressed jpeg file
    }
  },
  watch: {
    /*
     * Close this instance if another one was opened.
     */
    openId: function openId(newValue) {
      if (this.fieldIsOpen) {
        if (newValue !== this._uid) {
          this.fieldIsOpen = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/InlineImageEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_InlineImageEditorvue_type_script_lang_js_ = (InlineImageEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/InlineImageEditor.vue?vue&type=style&index=0&id=2a421070&scoped=true&lang=scss&
var InlineImageEditorvue_type_style_index_0_id_2a421070_scoped_true_lang_scss_ = __webpack_require__("353b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/InlineImageEditor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_InlineImageEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2a421070",
  null
  
)

component.options.__file = "InlineImageEditor.vue"
/* harmony default export */ var InlineImageEditor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("84fe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_style_index_0_id_74a2d538_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "353b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("addf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4706":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ef6b7e28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Icons.vue?vue&type=template&id=74a2d538&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-wrapper"},[(_vm.icon === 'link')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}})]):_vm._e(),(_vm.icon === 'camera')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"}})]):_vm._e(),(_vm.icon === 'crop-square')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"}})]):_vm._e(),(_vm.icon === 'crop-landscape')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z"}})]):_vm._e(),(_vm.icon === 'crop-portrait')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M17,19H7V5H17M17,3H7A2,2 0 0,0 5,5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z"}})]):_vm._e(),(_vm.icon === 'email')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"}})]):_vm._e(),(_vm.icon === 'calendar')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"}})]):_vm._e(),(_vm.icon === 'check')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})]):_vm._e(),(_vm.icon === 'bike')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z"}})]):_vm._e(),(_vm.icon === 'chart-line-variant')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"}})]):_vm._e(),(_vm.icon === 'hash')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z"}})]):_vm._e(),(_vm.icon === 'heart')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}})]):_vm._e(),(_vm.icon === 'gmail')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}})]):_vm._e(),(_vm.icon === 'linkedin')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}})]):_vm._e(),(_vm.icon === 'chain')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}})]):_vm._e(),(_vm.icon === 'location')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"}})]):_vm._e(),(_vm.icon === 'share')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"}})]):_vm._e(),(_vm.icon === 'bubble')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20"}})]):_vm._e(),(_vm.icon === 'money')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M11.8,10.9C9.53,10.31 8.8,9.7 8.8,8.75C8.8,7.66 9.81,6.9 11.5,6.9C13.28,6.9 13.94,7.75 14,9H16.21C16.14,7.28 15.09,5.7 13,5.19V3H10V5.16C8.06,5.58 6.5,6.84 6.5,8.77C6.5,11.08 8.41,12.23 11.2,12.9C13.7,13.5 14.2,14.38 14.2,15.31C14.2,16 13.71,17.1 11.5,17.1C9.44,17.1 8.63,16.18 8.5,15H6.32C6.44,17.19 8.08,18.42 10,18.83V21H13V18.85C14.95,18.5 16.5,17.35 16.5,15.3C16.5,12.46 14.07,11.5 11.8,10.9Z"}})]):_vm._e(),(_vm.icon === 'facebook')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"}})]):_vm._e(),(_vm.icon === 'instagram')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}})]):_vm._e(),(_vm.icon === 'plus')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}})]):_vm._e(),(_vm.icon === 'target')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M11,2V4.07C7.38,4.53 4.53,7.38 4.07,11H2V13H4.07C4.53,16.62 7.38,19.47 11,19.93V22H13V19.93C16.62,19.47 19.47,16.62 19.93,13H22V11H19.93C19.47,7.38 16.62,4.53 13,4.07V2M11,6.08V8H13V6.09C15.5,6.5 17.5,8.5 17.92,11H16V13H17.91C17.5,15.5 15.5,17.5 13,17.92V16H11V17.91C8.5,17.5 6.5,15.5 6.08,13H8V11H6.09C6.5,8.5 8.5,6.5 11,6.08M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z"}})]):_vm._e(),(_vm.icon === 'alarm')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"}})]):_vm._e(),(_vm.icon === 'twitter')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}})]):_vm._e(),(_vm.icon === 'chevron-down')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}})]):_vm._e(),(_vm.icon === 'user')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}})]):_vm._e(),(_vm.icon === 'credit-card')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}})]):_vm._e(),(_vm.icon === 'pencil')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}})]):_vm._e(),(_vm.icon === 'close-circle')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}})]):_vm._e(),(_vm.icon === 'lock')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}})]):_vm._e(),(_vm.icon === 'usd')?_c('svg',{style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight)}),attrs:{"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":_vm.color,"d":"M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"}})]):_vm._e(),(_vm.icon === 'search')?_c('svg',{staticStyle:{"fill":"none","fill-rule":"evenodd","clip-rule":"evenodd"},style:({width: ("" + _vm.iconwidth), height: ("" + _vm.iconheight), stroke: ("" + _vm.color)}),attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:serif":"http://www.serif.com/","width":"100%","height":"100%","viewBox":"0 0 213 213","version":"1.1","xml:space":"preserve"}},[_c('g',{attrs:{"transform":"matrix(1,0,0,1,-10379.2,-74.9986)"}},[_c('g',{attrs:{"transform":"matrix(8.33333,0,0,8.33333,0,0)"}},[_c('g',{attrs:{"transform":"matrix(1,0,0,1,1255.69,12.7766)"}},[_c('path',{staticStyle:{"stroke-width":"1.83px"},attrs:{"d":"M0,12.825C3.542,12.825 6.413,9.954 6.413,6.412C6.413,2.87 3.542,0 0,0C-3.542,0 -6.413,2.87 -6.413,6.412C-6.413,9.954 -3.542,12.825 0,12.825Z"}})])]),_c('g',{attrs:{"transform":"matrix(8.33333,0,0,8.33333,0,0)"}},[_c('g',{attrs:{"transform":"matrix(0.70716,0.707054,0.707054,-0.70716,1263.88,22.6599)"}},[_c('path',{staticStyle:{"stroke-width":"1.83px","stroke-linecap":"round"},attrs:{"d":"M-1.384,-3.341L8.066,-3.341"}})])])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/Icons.vue?vue&type=template&id=74a2d538&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/Icons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Iconsvue_type_script_lang_js_ = ({
  props: ['icon', 'iconwidth', 'iconheight', 'color']
});
// CONCATENATED MODULE: ./src/components/general/Icons.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_Iconsvue_type_script_lang_js_ = (Iconsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/Icons.vue?vue&type=style&index=0&id=74a2d538&scoped=true&lang=scss&
var Iconsvue_type_style_index_0_id_74a2d538_scoped_true_lang_scss_ = __webpack_require__("2013");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/Icons.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_Iconsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "74a2d538",
  null
  
)

component.options.__file = "Icons.vue"
/* harmony default export */ var Icons = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "84fe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "addf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.common.15.js.map
((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[63],{

/***/ "145d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08f4ebd0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/InlineImageEditor.vue?vue&type=template&id=2a421070&scoped=true&
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

/***/ "353b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("addf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineImageEditor_vue_vue_type_style_index_0_id_2a421070_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "addf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.umd.63.js.map
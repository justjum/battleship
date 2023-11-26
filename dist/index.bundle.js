/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ITC Machine Std Bold.otf */ "./src/fonts/ITC Machine Std Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/lunchds.ttf */ "./src/fonts/lunchds.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'ITC-Machine';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'Lunchtime';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    background-color: rgb(47, 54, 61);
    display: flex;
    justify-content: center;
    margin: 0;
}

.grey-out {
    display: flex;
    background-color: lightslategray;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
}

h1 {
    font-family: 'ITC-Machine';
    outline: rgb(47, 54, 61);
    color: rgb(148, 167, 185);
    font-size: 80px;
    margin: 0;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    line-height: 0.75em;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.section {
    border: black solid 1px;
    background-color: whitesmoke;
    width: 750px;
    height: auto;
    display: flex;
    position: relative;
    padding: 3px;
    margin: 10px;
}

.gameboard {
    border: red solid 1px;
    width: 400px;
    height: 400px;
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.icon {
    width: 38px;
}

#aisection {
    position: relative;
    opacity: 0.3;
}

.alert-box {
    position: absolute;
    display: none;
    background-color: rgb(51, 54, 56);
    padding: 20px;
    opacity: 1;
    top: 100px;
    left: 100px;
    right: 100px;
    z-index: 5;
    font-family: 'Lunchtime';
    color: rgb(148, 167, 185);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.game-over-box {
    position: absolute;
    display: none;
    background-color: rgb(51, 54, 56);
    padding: 20px;
    opacity: 1;
    top: 100px;
    left: 100px;
    right: 100px;
    z-index: 5;
    font-family: 'Lunchtime';
    color: rgb(148, 167, 185);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    font-family: 'Courier New', Courier, monospace;
    width: 100px;
    justify-self: center;
}

.instructions {
    position: absolute;
    background-color: rgb(51, 54, 56);
    padding: 20px;
    opacity: 1;
    top: 100px;
    left: 100px;
    right: 100px;
    z-index: 3;
    font-family: 'Lunchtime';
    color: rgb(190, 215, 238);
    font-size: larger;
}

.required {
    border-color: rgb(255, 80, 80);
    border-width: 5px;
    background-color: rgb(245, 200, 200);
}


.fleetsquare, .movesquare {
    outline: steelblue solid 1px;
    background-color: rgb(144, 205, 255);
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.movesquare:hover {
    cursor: crosshair;
    background-color: lightcoral;
}


.compass {
    width: 200px;
    position: absolute;
    right: 30px;
    bottom: 30px;
}

.ship-select {
    display: flex;
    flex-direction: column;
}

.ship {
    display: flex;
    padding: 5px;
    width: fit-content;
    cursor: move;
    height: 40px;
}

.aiship {
    display: flex;
    padding: 5px;
    width: fit-content;
    cursor: move;
    height: 40px;
}

.ship-square {
    position: relative;
    outline: steelblue solid 1px;
    background-color: rgb(144, 205, 255);
    width: 40px;
    height: 40px;
}

.dragging {
    background-color: rgb(165, 147, 42);
}

.allowed {
    background-color: lightgreen;
}

.disallowed {
    background-color: lightcoral;
}

.placedship {
    opacity: 0.5;
}

.footer {
    display: flex;
    justify-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAA6C;AACjD;;AAEA;IACI,wBAAwB;IACxB,4CAA6B;AACjC;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,0BAA0B;IAC1B,wBAAwB;IACxB,yBAAyB;IACzB,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,8CAA8C;IAC9C,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,oCAAoC;AACxC;;;AAGA;IACI,4BAA4B;IAC5B,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,oCAAoC;IACpC,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["@font-face {\n    font-family: 'ITC-Machine';\n    src: url(./fonts/ITC\\ Machine\\ Std\\ Bold.otf);\n}\n\n@font-face {\n    font-family: 'Lunchtime';\n    src: url(./fonts/lunchds.ttf);\n}\n\nbody {\n    background-color: rgb(47, 54, 61);\n    display: flex;\n    justify-content: center;\n    margin: 0;\n}\n\n.grey-out {\n    display: flex;\n    background-color: lightslategray;\n    opacity: 0.5;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 3;\n}\n\nh1 {\n    font-family: 'ITC-Machine';\n    outline: rgb(47, 54, 61);\n    color: rgb(148, 167, 185);\n    font-size: 80px;\n    margin: 0;\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    line-height: 0.75em;\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.section {\n    border: black solid 1px;\n    background-color: whitesmoke;\n    width: 750px;\n    height: auto;\n    display: flex;\n    position: relative;\n    padding: 3px;\n    margin: 10px;\n}\n\n.gameboard {\n    border: red solid 1px;\n    width: 400px;\n    height: 400px;\n    margin: 10px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.icon {\n    width: 38px;\n}\n\n#aisection {\n    position: relative;\n    opacity: 0.3;\n}\n\n.alert-box {\n    position: absolute;\n    display: none;\n    background-color: rgb(51, 54, 56);\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 5;\n    font-family: 'Lunchtime';\n    color: rgb(148, 167, 185);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.game-over-box {\n    position: absolute;\n    display: none;\n    background-color: rgb(51, 54, 56);\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 5;\n    font-family: 'Lunchtime';\n    color: rgb(148, 167, 185);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton {\n    font-family: 'Courier New', Courier, monospace;\n    width: 100px;\n    justify-self: center;\n}\n\n.instructions {\n    position: absolute;\n    background-color: rgb(51, 54, 56);\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 3;\n    font-family: 'Lunchtime';\n    color: rgb(190, 215, 238);\n    font-size: larger;\n}\n\n.required {\n    border-color: rgb(255, 80, 80);\n    border-width: 5px;\n    background-color: rgb(245, 200, 200);\n}\n\n\n.fleetsquare, .movesquare {\n    outline: steelblue solid 1px;\n    background-color: rgb(144, 205, 255);\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.movesquare:hover {\n    cursor: crosshair;\n    background-color: lightcoral;\n}\n\n\n.compass {\n    width: 200px;\n    position: absolute;\n    right: 30px;\n    bottom: 30px;\n}\n\n.ship-select {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.aiship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.ship-square {\n    position: relative;\n    outline: steelblue solid 1px;\n    background-color: rgb(144, 205, 255);\n    width: 40px;\n    height: 40px;\n}\n\n.dragging {\n    background-color: rgb(165, 147, 42);\n}\n\n.allowed {\n    background-color: lightgreen;\n}\n\n.disallowed {\n    background-color: lightcoral;\n}\n\n.placedship {\n    opacity: 0.5;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/ai.js":
/*!***************************!*\
  !*** ./src/modules/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AIcontrol)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/modules/index.js");


class AIcontrol {
    constructor(level = 'easy') {
        this.level = level;
        this.moves = this.buildMoveMap();
        this.placeFleet();

    }

    placeFleet(fleet=5, index=0) {
        while (fleet>0) {
            console.log('aiplacing')
            let ship = ___WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.ships[index];
            let length = ship.length;
            let y = this.randomInteger();
            let z = this.randomInteger();
            let orient = this.randomOrient();
            if (___WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.placeShip(index, length, y, z, orient) !== 'block') {
                ___WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.placeShip(index, length, y, z, orient);
                fleet--;
                index++;
                length--;

            }
        }
    }

    buildMoveMap() {
        let moveMap = new Map();
        for (let x=0; x<10; x++) {
            for (let y=0; y<10; y++) {
                moveMap.set([x,y].toString(),'unplayed');
            }
        }
        return moveMap;
    }

    randomSquare() {
        let x=Math.floor(Math.random()*10);
        let y=Math.floor(Math.random()*10);
        return `${x},${y}`
    }

    randomInteger() {
        return Math.floor(Math.random()*10);
    }

    randomOrient() {
        let x=Math.floor(Math.random()*2);
        return x>0 ? true : false;
    }

    findUnplayedSquare(checked = new Map, square=this.randomSquare(), status) {
        status = this.moves.get(square.toString())
        if (status === 'unplayed') {
            return square;
        }
        else if (checked.get(square.toString() === 'checked')) {
            alert('this')
            return;
        }
        else {
            checked.set(square.toString(), 'checked');
            console.log(checked);
            return this.findUnplayedSquare(checked);
        }
    }

    aimove() {
        let square = this.findUnplayedSquare();
        return square;
    }
}


/***/ }),

/***/ "./src/modules/dom/dombuild.js":
/*!*************************************!*\
  !*** ./src/modules/dom/dombuild.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFleetBoard: () => (/* binding */ buildFleetBoard),
/* harmony export */   buildMovesBoard: () => (/* binding */ buildMovesBoard),
/* harmony export */   buildPage: () => (/* binding */ buildPage)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/modules/player.js");
/* harmony import */ var _domcontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domcontroller */ "./src/modules/dom/domcontroller.js");
/* harmony import */ var _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/carrier.png */ "./src/images/carrier.png");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/battleship.png */ "./src/images/battleship.png");
/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/destroyer.png */ "./src/images/destroyer.png");
/* harmony import */ var _images_submarine_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/submarine.png */ "./src/images/submarine.png");
/* harmony import */ var _images_patrolboat_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/patrolboat.png */ "./src/images/patrolboat.png");
/* harmony import */ var _images_compassx_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/compassx.png */ "./src/images/compassx.png");
/* harmony import */ var _images_miss_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/miss.png */ "./src/images/miss.png");
/* harmony import */ var _images_hit_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/hit.png */ "./src/images/hit.png");
/* harmony import */ var _images_shipsquare_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/shipsquare.png */ "./src/images/shipsquare.png");















function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class='grey-out' id='grey-out'></div>
    <h1>Sink the Ships!</h1>
    <div class='container' id='container'>
        <div class='section' id='humansection'>
            <div class='alert-box' id='alert-box'>
                <h2 class='alert' id='alert'>Alert</h2>
                <button class='accept-alert' id='accept-alert'>Clear Message</button>
            </div>
            <div class='game-over-box' id='game-over-box'>
                <h2 class='alert'> </h2>
                <button class='accept-alert' id='restart-game'>Restart Game</button>
            </div>
            <div class='instructions' id='instructions'>
                <p>1. Please enter your name below:</p>
                <input type='text' class='player-name' id='player-name' name='player-name' placeholder='Player Name'>
                <p>2. Drag and drop your fleet onto the gameboard</p>
                <p>3. Click on the compass to adjust the direction of drop</p>
                <button class='playgame' id='playgame'>I'm ready!</button>
            </div>
            <div class='gameboard' id='humanfleet'></div>
            <div class='ship-select' id='ship-select'>
                <img class='ship' draggable='true' id='0carrier' data-length=5 src='${_images_carrier_png__WEBPACK_IMPORTED_MODULE_3__}'>
                <img class='ship' draggable='true' id='1battleship' data-length=4 src='${_images_battleship_png__WEBPACK_IMPORTED_MODULE_4__}'>
                <img class='ship' draggable='true' id='2destroyer' data-length=3 src='${_images_destroyer_png__WEBPACK_IMPORTED_MODULE_5__}'>
                <img class='ship' draggable='true' id='3submarine' data-length=3 src='${_images_submarine_png__WEBPACK_IMPORTED_MODULE_6__}'>
                <img class='ship' draggable='true' id='4patrol-boat' data-length=2 src='${_images_patrolboat_png__WEBPACK_IMPORTED_MODULE_7__}'>
                <img class='compass' id='compass' src='${_images_compassx_png__WEBPACK_IMPORTED_MODULE_8__}'>
            </div>
        </div>
        <div class='section' id='aisection'>
            <div class='gameboard' id='humanmoves'></div>
            <div class='ship-select' id='ship-ai'>
                <img class='aiship' draggable='false' id='aicarrier' src='${_images_carrier_png__WEBPACK_IMPORTED_MODULE_3__}'>
                <img class='aiship' draggable='false' id='aibattleship' src='${_images_battleship_png__WEBPACK_IMPORTED_MODULE_4__}'>
                <img class='aiship' draggable='false' id='aidestroyer' src='${_images_destroyer_png__WEBPACK_IMPORTED_MODULE_5__}'>
                <img class='aiship' draggable='false' id='aisubmarine' src='${_images_submarine_png__WEBPACK_IMPORTED_MODULE_6__}'>
                <img class='aiship' draggable='false' id='aipatrolboat' src='${_images_patrolboat_png__WEBPACK_IMPORTED_MODULE_7__}'>
            </div>
        </div>
    </div>
    <div class='footer'>
        <a href="https://www.freepik.com/free-vector/set-silhouettes-naval-ships_11052928.htm#query=warship&position=0&from_view=keyword&track=sph&uuid=964a7c96-eef1-485b-ae2d-68a3463e1a03">Battleship Images by macrovector on Freepik</a>
    </div>
    `
}

function buildFleetBoard(board, player) {
    const gameboard = document.getElementById(`${player}fleet`);
    gameboard.textContent = '';
    board.forEach((a, b) => {
        let coords = b.replace(/[^0-9]/ig, "")
        const square = document.createElement('div');
        square.setAttribute('class', 'fleetsquare');
        square.setAttribute('id', `fleet${player}${coords}`)
        if (a !== 'empty') {
            let b;
            switch (a) {
                case 'hit': b = _images_hit_png__WEBPACK_IMPORTED_MODULE_10__;
                break;
                case 'miss': b = _images_miss_png__WEBPACK_IMPORTED_MODULE_9__;
                break;
                case a: b = _images_shipsquare_png__WEBPACK_IMPORTED_MODULE_11__;
                break;
            }
            let icon = document.createElement('img');
            icon.setAttribute('src', b);
            icon.setAttribute('class', 'icon')
            square.appendChild(icon);
        }
        gameboard.append(square);
    })
}

function buildMovesBoard(board, player) {
    const gameboard = document.getElementById(`${player}moves`);
    gameboard.textContent = '';
    board.forEach((a, b) => {
        let coords = b.replace(/[^0-9]/ig, "")
        const square = document.createElement('div');
        square.setAttribute('class', 'movesquare');
        square.setAttribute('id', `move${player}${coords}` )
        if (a === 'hit') {
            square.setAttribute('played', '');
            square.innerHTML = `<img class='icon' src=${_images_hit_png__WEBPACK_IMPORTED_MODULE_10__}>`
        }
        else if (a === 'miss') {
            square.setAttribute('played', '');
            square.innerHTML = `<img class='icon' src=${_images_miss_png__WEBPACK_IMPORTED_MODULE_9__}>`
        }
        gameboard.append(square);
    })
}


/***/ }),

/***/ "./src/modules/dom/domcontroller.js":
/*!******************************************!*\
  !*** ./src/modules/dom/domcontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMController)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/modules/index.js");
/* harmony import */ var _dombuild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dombuild */ "./src/modules/dom/dombuild.js");
/* harmony import */ var _images_compassx_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/compassx.png */ "./src/images/compassx.png");
/* harmony import */ var _images_compassy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/compassy.png */ "./src/images/compassy.png");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player */ "./src/modules/player.js");






class DOMController {
    constructor(orient=true) {
        this.orient = orient;
        
    }

    acceptInstructions() {
        document.getElementById('playgame').onclick = () => {
            let input = document.getElementById('player-name');
            if (input.value !== "") {
                _index__WEBPACK_IMPORTED_MODULE_0__.game.human.name = input.value;
                document.getElementById('instructions').style.display = 'none'
                this.toggleGrey('none');
            }
            else {
                input.classList.add('required');
            }
            
        }
    }

    toggleGrey(value) {
        const greyOut = document.getElementById('grey-out');
        greyOut.style.display = value;
    }

    alert(message) {
        this.toggleGrey('flex');
        const alertBox = document.getElementById('alert-box');
        alertBox.children[0].innerText = message;
        alertBox.style.display = 'flex';
    }

    alertListener() {
        document.getElementById('accept-alert').onclick = () => {
            this.acceptAlert();
        }
    }

    acceptAlert() {
        this.toggleGrey('none');
        document.getElementById('alert-box').style.display = 'none'
    }

    gameOver(message) {
        this.toggleGrey('flex');
        const gameOverBox = document.getElementById('game-over-box');
        gameOverBox.children[0].innerText = message;
        gameOverBox.style.display = 'flex';
    }

    gameOverListener() {
        document.getElementById('restart-game').onclick = () => {
            document.location.reload();
        }
    }

    loadShipPlacement() {
        const dragShip = document.querySelectorAll('.ship');
        dragShip.forEach((ship) => {
            ship.addEventListener('dragstart', this.dragStart); 
            ship.addEventListener('dragend', this.dragEnd);
        });
        this.fleetEventListeners();
        this.compassEventListener();
        this.acceptInstructions();
        this.alertListener();
        this.gameOverListener();
    }

    fleetEventListeners() {
        const fleetSquare = document.querySelectorAll('.fleetsquare');
        fleetSquare.forEach((square) => {
            square.addEventListener('dragover', this.dragOverEventHandler);
            square.addEventListener('dragleave', this.dragLeaveEventHandler);
            square.addEventListener('drop', this.dropEventHandler);
        });
    }

    dragStart(event) {
        this.classList.add('dragging')
    }

    dragEnd(event){
        event.preventDefault();
        this.classList.remove('dragging');
    }

    dragOverEventHandler(event) {
        event.preventDefault();
        const dragging = document.querySelector('.dragging')
        let length = dragging.getAttribute('data-length');
        let coords = this.id.replace(/[^0-9]/ig, "");
        let xpos = coords[0];
        let ypos = coords[1];
        let validDrop = true;
        if (_index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.checkValidDrop(length, xpos, ypos, _index__WEBPACK_IMPORTED_MODULE_0__.controller.orient) === false) {
            validDrop = false;
        }
        _index__WEBPACK_IMPORTED_MODULE_0__.controller.colorDropSquares(xpos, ypos, length, validDrop)
    }

    colorDropSquares(xpos, ypos, length, validDrop) {
        for (let x=0; x<length; x++) {
            const square = document.getElementById(`fleethuman${xpos}${ypos}`)
            if (square !== null) {
                validDrop ? square.classList.add('allowed') : square.classList.add('disallowed');
            }
            
            _index__WEBPACK_IMPORTED_MODULE_0__.controller.orient ? xpos++ : ypos++;
        }
        
    }    

    dragLeaveEventHandler(event) {
        event.preventDefault();
        _index__WEBPACK_IMPORTED_MODULE_0__.controller.decolorDropSquares()
    }

    decolorDropSquares() {
        const elements = document.querySelectorAll('.fleetsquare');
        elements.forEach((square) => {
            square.classList.remove('allowed');
            square.classList.remove('disallowed');
        });
    
    };

    dropEventHandler(event, fleet) {
        event.preventDefault();
        const dragging = document.querySelector('.dragging')
        let index = dragging.id.replace(/[^0-9]/ig, "");
        let coords = this.id.replace(/[^0-9]/ig, "")
        let length = dragging.getAttribute('data-length');
        let xpos = coords[0];
        let ypos = coords[1];
        if (_index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.checkValidDrop(length, xpos, ypos, _index__WEBPACK_IMPORTED_MODULE_0__.controller.orient) === true) {
            _index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.placeShip(index, length, xpos, ypos, _index__WEBPACK_IMPORTED_MODULE_0__.controller.orient)
            ;(0,_dombuild__WEBPACK_IMPORTED_MODULE_1__.buildFleetBoard)(_index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.board, 'human');
            dragging.classList.add('placedship');
            dragging.removeEventListener('dragstart', this.dragStart)
            dragging.removeEventListener('dragstart', this.dragEnd, false)
            dragging.setAttribute('draggable', false)
            _index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips--
        }
        if (_index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips > 0) {
            _index__WEBPACK_IMPORTED_MODULE_0__.controller.fleetEventListeners();
        }
        else {
            _index__WEBPACK_IMPORTED_MODULE_0__.controller.alert(`Let's go!`)
            document.getElementById('aisection').style.opacity = 1;
            _index__WEBPACK_IMPORTED_MODULE_0__.game.playGame();
        }
    }

    compassEventListener() {
        const compass = document.getElementById('compass');
        compass.addEventListener('click', ()=>{
            this.orient = !this.orient;
            let compassImage = this.orient ? _images_compassx_png__WEBPACK_IMPORTED_MODULE_2__ : _images_compassy_png__WEBPACK_IMPORTED_MODULE_3__;
            console.log(compassImage)
            compass.setAttribute('src', `${compassImage}`)
        })
    }

    gameplayEventListeners() {
        const moveSquare = document.querySelectorAll('.movesquare');
        moveSquare.forEach((square) => {
            if (square.hasAttribute('played')) {
                console.log('yup');
                return;
            }
            square.addEventListener('mousedown', function() {
                let player = square.id.replace(/[^a-z]/ig, "")
                let coords = square.id.replace(/[^0-9]/ig, "")
                let xpos = coords[0];
                let ypos = coords[1];
                _index__WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.receiveAttack(xpos,ypos)
                ;(0,_dombuild__WEBPACK_IMPORTED_MODULE_1__.buildMovesBoard)(_index__WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.board, `human` )
                _index__WEBPACK_IMPORTED_MODULE_0__.game.endTurn();
                _index__WEBPACK_IMPORTED_MODULE_0__.game.playGame();
            })
        });
    }



}





/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/player */ "./src/modules/player.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");
/* harmony import */ var _dom_domcontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/domcontroller */ "./src/modules/dom/domcontroller.js");
/* harmony import */ var _dom_dombuild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/dombuild */ "./src/modules/dom/dombuild.js");





class Game {
    constructor() {
        this.human = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('Anonymous', false);
        this.ai = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('Battlebot', true);
        this.attack = this.human;
        this.defend = this.ai;
    }

    playGame() {
        if (this.attack === this.human) {
            _index__WEBPACK_IMPORTED_MODULE_1__.controller.gameplayEventListeners();
        }
        else {
            let square = _index__WEBPACK_IMPORTED_MODULE_1__.aiControl.aimove();
            _index__WEBPACK_IMPORTED_MODULE_1__.aiControl.moves.set(square, 'played')
            let coords = square.replace(/[^0-9]/ig, "")
            let xpos = coords[0];
            let ypos = coords[1];
            this.human.gameboard.receiveAttack(xpos,ypos)
            ;(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_3__.buildFleetBoard)(this.human.gameboard.board, 'human')
            this.endTurn();
            this.playGame();
        }
    }

    endTurn() {
        let temp = this.attack;
        this.attack = this.defend;
        this.defend = temp;
    }

}



/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard),
/* harmony export */   testship: () => (/* binding */ testship)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");



class Gameboard {
    constructor(name) {
        this.player = name;
        this.board = this.buildBoard();
        this.ships = this.addShips();
        this.fleet = 0;
        this.gameOver = false;
        //this.defaultPlacement();
    }

    //originally used a standard array however 'map' made referencing/updating squares simpler
    buildBoard() {
        let board = new Map();
        for (let x=0; x<10; x++) {
            for (let y=0; y<10; y++) {
                board.set([x,y].toString(),'empty');
            }
        }
        return board;
    }
    
    addShips() {
        let ships = [];
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('carrier', 5))
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('battleship', 4))
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('destroyer', 3))
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('submarine', 3))
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('patrol boat', 2))
        return ships;
    }

    checkSpace(xpos, ypos) {    
        let status = this.board.get(`${xpos},${ypos}`);
        if (status === undefined) {
            return 'off board'
        }
        
        else {
            return `${status}`
        }
    }

    checkValidDrop(length, xpos, ypos, orient, validDrop=true) {
        for (let x=0; x<length; x++) {
            const square = document.getElementById(`fleethuman${xpos}${ypos}`)
            if (square === null) {
                validDrop=false;
                break;
            }
            let status = this.checkSpace(xpos, ypos);
            if (status !== 'empty') {
                validDrop=false;
            }
            orient ? xpos++ : ypos++;

        }
        return validDrop
    }
    //originally had very similar hor/vert functions, ternery operator on 'orientation' neater refactor
    placeShip(index, length, xpos, ypos, orient) {
        let tempx = xpos;
        let tempy = ypos;
        for (let x=1; x<=length; x++) {
            let status = this.checkSpace(tempx, tempy);
            if (status !== 'empty') {
                return 'block'
            }
            orient ? tempx++ : tempy++;
        }
        for (let y=1; y<=length; y++) {
                this.board.set(`${xpos},${ypos}`, index);
            orient ? xpos++ : ypos++;
        }
        this.fleet++;
    }
     
    receiveAttack(xpos, ypos) {
        let space = this.checkSpace(xpos, ypos);
        if (space === 'empty') {
            this.board.set(`${xpos},${ypos}`, 'miss');
        }
        else if (space === 'hit' || space === 'miss') {
            return;
        }
        else if (space !== undefined) {
            console.log(space);
            this.board.set(`${xpos},${ypos}`, 'hit')
            this.ships[space].hit();
            this.ships[space].sunk ? this.fleet-- : '';
            this.fleet === 0 ? _index__WEBPACK_IMPORTED_MODULE_1__.controller.gameOver(`Jum has won the battle`): '';
        }
        else {
            return;
        }
    }
    // default placement of fleet to focus on DOM / gameplay
    defaultPlacement() {
        this.placeShip(0, 5, 0, 0, true);
        this.placeShip(1, 4, 2, 1, false);
        this.placeShip(2, 3, 5, 4, true);
        this.placeShip(3, 2, 7, 7, false);
        this.placeShip(4, 1, 9, 9, true);
    }
}

//const game = new Gameboard();
const testship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('testship', 4);







/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aiControl: () => (/* binding */ aiControl),
/* harmony export */   controller: () => (/* binding */ controller),
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _dom_dombuild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/dombuild */ "./src/modules/dom/dombuild.js");
/* harmony import */ var _dom_domcontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/domcontroller */ "./src/modules/dom/domcontroller.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ai */ "./src/modules/ai.js");
/* harmony import */ var _images_carrier_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/carrier.png */ "./src/images/carrier.png");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png");
/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/destroyer.png */ "./src/images/destroyer.png");
/* harmony import */ var _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/submarine.png */ "./src/images/submarine.png");
/* harmony import */ var _images_patrolboat_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/patrolboat.png */ "./src/images/patrolboat.png");












(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildPage)();
const controller = new _dom_domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"];
const game = new _game__WEBPACK_IMPORTED_MODULE_2__["default"];

const aiControl = new _ai__WEBPACK_IMPORTED_MODULE_4__["default"];
console.log(game.human.gameboard.board);
console.log(game.ai.gameboard.board);

(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildFleetBoard)(game.human.gameboard.board, 'human');
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildMovesBoard)(game.human.gameboard.board, 'human');
controller.loadShipPlacement();



/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ "./src/modules/ai.js");



class Player {
    constructor(name, control) {
        this.name = name;
        this.ai = control,
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](name);
        this.placedShips = 5;
    }

    aiTurn() {

    }
} 



//human and ai placements to come later

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");


class Ship {
    constructor(name, length, hits = 0, sunk = false) {
        this.name = name;
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    } 
    
    hit() {
        this.hits++
        this.isSunk();
        this.sunk ? this.shipSunk():'';
    }

    isSunk() {
        this.sunk = this.length === this.hits ? true : false;
        
    }

    shipSunk() {
        _index__WEBPACK_IMPORTED_MODULE_0__.controller.alert(`${_index__WEBPACK_IMPORTED_MODULE_0__.game.attack.name} sunk ${_index__WEBPACK_IMPORTED_MODULE_0__.game.defend.name}'s ${this.name}`)
        _index__WEBPACK_IMPORTED_MODULE_0__.controller.sunkShip(this.name);
    }
}




/* const battleship = new Ship('battleship', 5);
console.log(battleship.name);
console.log(battleship.length);
console.log(battleship)
 */

//shipSunk(this.name): this.sunk=false;


/***/ }),

/***/ "./src/fonts/ITC Machine Std Bold.otf":
/*!********************************************!*\
  !*** ./src/fonts/ITC Machine Std Bold.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dc6e5974a79b8929f5d.otf";

/***/ }),

/***/ "./src/fonts/lunchds.ttf":
/*!*******************************!*\
  !*** ./src/fonts/lunchds.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9929025cdebc42a4b56.ttf";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc375ccac8282f857a0f.png";

/***/ }),

/***/ "./src/images/carrier.png":
/*!********************************!*\
  !*** ./src/images/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73afd4cfacfead3917b6.png";

/***/ }),

/***/ "./src/images/compassx.png":
/*!*********************************!*\
  !*** ./src/images/compassx.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "819c1ce8daf68799528e.png";

/***/ }),

/***/ "./src/images/compassy.png":
/*!*********************************!*\
  !*** ./src/images/compassy.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ff4f0effcdc0583d439.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37d9f616ac9a164dadb2.png";

/***/ }),

/***/ "./src/images/hit.png":
/*!****************************!*\
  !*** ./src/images/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a479ee249679eb436fed.png";

/***/ }),

/***/ "./src/images/miss.png":
/*!*****************************!*\
  !*** ./src/images/miss.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6de88548b20e1e1b46f.png";

/***/ }),

/***/ "./src/images/patrolboat.png":
/*!***********************************!*\
  !*** ./src/images/patrolboat.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "417d960fdc902adfa36c.png";

/***/ }),

/***/ "./src/images/shipsquare.png":
/*!***********************************!*\
  !*** ./src/images/shipsquare.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c0ab39e82cae124a3de.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7928fe123b89ad33a8bb.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./src/modules/index.js");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");





const game = new _modules_game__WEBPACK_IMPORTED_MODULE_2__["default"]();
console.log(game.human.gameboard.board);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNklBQW1EO0FBQy9GLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFV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SyxVQUFVO0FBQ3JGLFFBQVEsOENBQVU7QUFDbEI7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ0Y7O0FBRWU7O0FBRWpDLGlCQUFpQixxREFBSTtBQUNyQix3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZG9tYnVpbGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0lUQyBNYWNoaW5lIFN0ZCBCb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvbHVuY2hkcy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0lUQy1NYWNoaW5lJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMdW5jaHRpbWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDU0LCA2MSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5ncmV5LW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6ICdJVEMtTWFjaGluZSc7XG4gICAgb3V0bGluZTogcmdiKDQ3LCA1NCwgNjEpO1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOiA3NTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmdhbWVib2FyZCB7XG4gICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDM4cHg7XG59XG5cbiNhaXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5hbGVydC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTQsIDU2KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICByaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XG4gICAgY29sb3I6IHJnYigxNDgsIDE2NywgMTg1KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLW92ZXItYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDU0LCA1Nik7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgZm9udC1mYW1pbHk6ICdMdW5jaHRpbWUnO1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgNTYpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVuY2h0aW1lJztcbiAgICBjb2xvcjogcmdiKDE5MCwgMjE1LCAyMzgpO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4ucmVxdWlyZWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgODAsIDgwKTtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMDAsIDIwMCk7XG59XG5cblxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XG4gICAgb3V0bGluZTogc3RlZWxibHVlIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMDUsIDI1NSk7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vdmVzcXVhcmU6aG92ZXIge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cblxuLmNvbXBhc3Mge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xufVxuXG4uc2hpcC1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNoaXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWlzaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnNoaXAtc3F1YXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3V0bGluZTogc3RlZWxibHVlIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMDUsIDI1NSk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZHJhZ2dpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE0NywgNDIpO1xufVxuXG4uYWxsb3dlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmRpc2FsbG93ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi5wbGFjZWRzaGlwIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSVRDLU1hY2hpbmUnO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0lUQ1xcXFwgTWFjaGluZVxcXFwgU3RkXFxcXCBCb2xkLm90Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvbHVuY2hkcy50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA1NCwgNjEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JleS1vdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJVEMtTWFjaGluZSc7XFxuICAgIG91dGxpbmU6IHJnYig0NywgNTQsIDYxKTtcXG4gICAgY29sb3I6IHJnYigxNDgsIDE2NywgMTg1KTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMC43NWVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDM4cHg7XFxufVxcblxcbiNhaXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmFsZXJ0LWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgNTYpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XFxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgNTYpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XFxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDU0LCA1Nik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbiAgICByaWdodDogMTAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVuY2h0aW1lJztcXG4gICAgY29sb3I6IHJnYigxOTAsIDIxNSwgMjM4KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5yZXF1aXJlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgODAsIDgwKTtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIwMCwgMjAwKTtcXG59XFxuXFxuXFxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XFxuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIwNSwgMjU1KTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb3Zlc3F1YXJlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcblxcbi5jb21wYXNzIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBib3R0b206IDMwcHg7XFxufVxcblxcbi5zaGlwLXNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWlzaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIwNSwgMjU1KTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTQ3LCA0Mik7XFxufVxcblxcbi5hbGxvd2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmRpc2FsbG93ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4ucGxhY2Vkc2hpcCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSWNvbnRyb2wge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsID0gJ2Vhc3knKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5tb3ZlcyA9IHRoaXMuYnVpbGRNb3ZlTWFwKCk7XG4gICAgICAgIHRoaXMucGxhY2VGbGVldCgpO1xuXG4gICAgfVxuXG4gICAgcGxhY2VGbGVldChmbGVldD01LCBpbmRleD0wKSB7XG4gICAgICAgIHdoaWxlIChmbGVldD4wKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWlwbGFjaW5nJylcbiAgICAgICAgICAgIGxldCBzaGlwID0gZ2FtZS5haS5nYW1lYm9hcmQuc2hpcHNbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnJhbmRvbUludGVnZXIoKTtcbiAgICAgICAgICAgIGxldCB6ID0gdGhpcy5yYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgICAgICBsZXQgb3JpZW50ID0gdGhpcy5yYW5kb21PcmllbnQoKTtcbiAgICAgICAgICAgIGlmIChnYW1lLmFpLmdhbWVib2FyZC5wbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeSwgeiwgb3JpZW50KSAhPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGdhbWUuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChpbmRleCwgbGVuZ3RoLCB5LCB6LCBvcmllbnQpO1xuICAgICAgICAgICAgICAgIGZsZWV0LS07XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRNb3ZlTWFwKCkge1xuICAgICAgICBsZXQgbW92ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PDEwOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHk9MDsgeTwxMDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbW92ZU1hcC5zZXQoW3gseV0udG9TdHJpbmcoKSwndW5wbGF5ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZU1hcDtcbiAgICB9XG5cbiAgICByYW5kb21TcXVhcmUoKSB7XG4gICAgICAgIGxldCB4PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCB5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIHJldHVybiBgJHt4fSwke3l9YFxuICAgIH1cblxuICAgIHJhbmRvbUludGVnZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgIH1cblxuICAgIHJhbmRvbU9yaWVudCgpIHtcbiAgICAgICAgbGV0IHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICByZXR1cm4geD4wID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZpbmRVbnBsYXllZFNxdWFyZShjaGVja2VkID0gbmV3IE1hcCwgc3F1YXJlPXRoaXMucmFuZG9tU3F1YXJlKCksIHN0YXR1cykge1xuICAgICAgICBzdGF0dXMgPSB0aGlzLm1vdmVzLmdldChzcXVhcmUudG9TdHJpbmcoKSlcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3VucGxheWVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGVja2VkLmdldChzcXVhcmUudG9TdHJpbmcoKSA9PT0gJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgYWxlcnQoJ3RoaXMnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tlZC5zZXQoc3F1YXJlLnRvU3RyaW5nKCksICdjaGVja2VkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRVbnBsYXllZFNxdWFyZShjaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFpbW92ZSgpIHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZmluZFVucGxheWVkU3F1YXJlKCk7XG4gICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9nYW1lYm9hcmQnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcidcbmltcG9ydCB7IHBsYWNlU2hpcCwgZHJhZ292ZXIgfSBmcm9tICcuL2RvbWNvbnRyb2xsZXInO1xuaW1wb3J0IENhcnJpZXIgZnJvbSAnLi4vLi4vaW1hZ2VzL2NhcnJpZXIucG5nJ1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi4vLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJ1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuLi8uLi9pbWFnZXMvZGVzdHJveWVyLnBuZydcbmltcG9ydCBTdWJtYXJpbmUgZnJvbSAnLi4vLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnXG5pbXBvcnQgUGF0cm9sQm9hdCBmcm9tICcuLi8uLi9pbWFnZXMvcGF0cm9sYm9hdC5wbmcnXG5pbXBvcnQgQ29tcGFzc3ggZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbXBhc3N4LnBuZydcbmltcG9ydCBNaXNzIGZyb20gJy4uLy4uL2ltYWdlcy9taXNzLnBuZydcbmltcG9ydCBIaXQgZnJvbSAnLi4vLi4vaW1hZ2VzL2hpdC5wbmcnXG5pbXBvcnQgU2hpcFNxdWFyZSBmcm9tICcuLi8uLi9pbWFnZXMvc2hpcHNxdWFyZS5wbmcnXG5leHBvcnQge2J1aWxkUGFnZSwgYnVpbGRGbGVldEJvYXJkLCBidWlsZE1vdmVzQm9hcmR9XG5cblxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2dyZXktb3V0JyBpZD0nZ3JleS1vdXQnPjwvZGl2PlxuICAgIDxoMT5TaW5rIHRoZSBTaGlwcyE8L2gxPlxuICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcicgaWQ9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J3NlY3Rpb24nIGlkPSdodW1hbnNlY3Rpb24nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWxlcnQtYm94JyBpZD0nYWxlcnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9J2FsZXJ0JyBpZD0nYWxlcnQnPkFsZXJ0PC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdhY2NlcHQtYWxlcnQnIGlkPSdhY2NlcHQtYWxlcnQnPkNsZWFyIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZS1vdmVyLWJveCcgaWQ9J2dhbWUtb3Zlci1ib3gnPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nYWxlcnQnPiA8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2FjY2VwdC1hbGVydCcgaWQ9J3Jlc3RhcnQtZ2FtZSc+UmVzdGFydCBHYW1lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2luc3RydWN0aW9ucycgaWQ9J2luc3RydWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgPHA+MS4gUGxlYXNlIGVudGVyIHlvdXIgbmFtZSBiZWxvdzo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdwbGF5ZXItbmFtZScgaWQ9J3BsYXllci1uYW1lJyBuYW1lPSdwbGF5ZXItbmFtZScgcGxhY2Vob2xkZXI9J1BsYXllciBOYW1lJz5cbiAgICAgICAgICAgICAgICA8cD4yLiBEcmFnIGFuZCBkcm9wIHlvdXIgZmxlZXQgb250byB0aGUgZ2FtZWJvYXJkPC9wPlxuICAgICAgICAgICAgICAgIDxwPjMuIENsaWNrIG9uIHRoZSBjb21wYXNzIHRvIGFkanVzdCB0aGUgZGlyZWN0aW9uIG9mIGRyb3A8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0ncGxheWdhbWUnIGlkPSdwbGF5Z2FtZSc+SSdtIHJlYWR5ITwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdodW1hbmZsZWV0Jz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NoaXAtc2VsZWN0JyBpZD0nc2hpcC1zZWxlY3QnPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzBjYXJyaWVyJyBkYXRhLWxlbmd0aD01IHNyYz0nJHtDYXJyaWVyfSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nc2hpcCcgZHJhZ2dhYmxlPSd0cnVlJyBpZD0nMWJhdHRsZXNoaXAnIGRhdGEtbGVuZ3RoPTQgc3JjPScke0JhdHRsZXNoaXB9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPScyZGVzdHJveWVyJyBkYXRhLWxlbmd0aD0zIHNyYz0nJHtEZXN0cm95ZXJ9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPSczc3VibWFyaW5lJyBkYXRhLWxlbmd0aD0zIHNyYz0nJHtTdWJtYXJpbmV9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPSc0cGF0cm9sLWJvYXQnIGRhdGEtbGVuZ3RoPTIgc3JjPScke1BhdHJvbEJvYXR9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjb21wYXNzJyBpZD0nY29tcGFzcycgc3JjPScke0NvbXBhc3N4fSc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3NlY3Rpb24nIGlkPSdhaXNlY3Rpb24nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZWJvYXJkJyBpZD0naHVtYW5tb3Zlcyc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwLXNlbGVjdCcgaWQ9J3NoaXAtYWknPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2FpY2Fycmllcicgc3JjPScke0NhcnJpZXJ9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdhaXNoaXAnIGRyYWdnYWJsZT0nZmFsc2UnIGlkPSdhaWJhdHRsZXNoaXAnIHNyYz0nJHtCYXR0bGVzaGlwfSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWlkZXN0cm95ZXInIHNyYz0nJHtEZXN0cm95ZXJ9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdhaXNoaXAnIGRyYWdnYWJsZT0nZmFsc2UnIGlkPSdhaXN1Ym1hcmluZScgc3JjPScke1N1Ym1hcmluZX0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2FpcGF0cm9sYm9hdCcgc3JjPScke1BhdHJvbEJvYXR9Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdmb290ZXInPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS12ZWN0b3Ivc2V0LXNpbGhvdWV0dGVzLW5hdmFsLXNoaXBzXzExMDUyOTI4Lmh0bSNxdWVyeT13YXJzaGlwJnBvc2l0aW9uPTAmZnJvbV92aWV3PWtleXdvcmQmdHJhY2s9c3BoJnV1aWQ9OTY0YTdjOTYtZWVmMS00ODViLWFlMmQtNjhhMzQ2M2UxYTAzXCI+QmF0dGxlc2hpcCBJbWFnZXMgYnkgbWFjcm92ZWN0b3Igb24gRnJlZXBpazwvYT5cbiAgICA8L2Rpdj5cbiAgICBgXG59XG5cbmZ1bmN0aW9uIGJ1aWxkRmxlZXRCb2FyZChib2FyZCwgcGxheWVyKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfWZsZWV0YCk7XG4gICAgZ2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hcmQuZm9yRWFjaCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gYi5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmbGVldHNxdWFyZScpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBmbGVldCR7cGxheWVyfSR7Y29vcmRzfWApXG4gICAgICAgIGlmIChhICE9PSAnZW1wdHknKSB7XG4gICAgICAgICAgICBsZXQgYjtcbiAgICAgICAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpdCc6IGIgPSBIaXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWlzcyc6IGIgPSBNaXNzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgYTogYiA9IFNoaXBTcXVhcmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGIpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgICAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVib2FyZC5hcHBlbmQoc3F1YXJlKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBidWlsZE1vdmVzQm9hcmQoYm9hcmQsIHBsYXllcikge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsYXllcn1tb3Zlc2ApO1xuICAgIGdhbWVib2FyZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGJvYXJkLmZvckVhY2goKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IGIucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW92ZXNxdWFyZScpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBtb3ZlJHtwbGF5ZXJ9JHtjb29yZHN9YCApXG4gICAgICAgIGlmIChhID09PSAnaGl0Jykge1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgncGxheWVkJywgJycpO1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPSdpY29uJyBzcmM9JHtIaXR9PmBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3BsYXllZCcsICcnKTtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz0naWNvbicgc3JjPSR7TWlzc30+YFxuICAgICAgICB9XG4gICAgICAgIGdhbWVib2FyZC5hcHBlbmQoc3F1YXJlKTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IHtnYW1lLCBjb250cm9sbGVyfSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCB7IGJ1aWxkTW92ZXNCb2FyZCwgYnVpbGRGbGVldEJvYXJkIH0gZnJvbSAnLi9kb21idWlsZCc7XG5pbXBvcnQgQ29tcGFzc3ggZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbXBhc3N4LnBuZydcbmltcG9ydCBDb21wYXNzeSBmcm9tICcuLi8uLi9pbWFnZXMvY29tcGFzc3kucG5nJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKG9yaWVudD10cnVlKSB7XG4gICAgICAgIHRoaXMub3JpZW50ID0gb3JpZW50O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhY2NlcHRJbnN0cnVjdGlvbnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Z2FtZScpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW5hbWUnKTtcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGdhbWUuaHVtYW4ubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVHcmV5KCdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVHcmV5KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGdyZXlPdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JleS1vdXQnKTtcbiAgICAgICAgZ3JleU91dC5zdHlsZS5kaXNwbGF5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYWxlcnQobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUdyZXkoJ2ZsZXgnKTtcbiAgICAgICAgY29uc3QgYWxlcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQtYm94Jyk7XG4gICAgICAgIGFsZXJ0Qm94LmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGFsZXJ0Qm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG4gICAgYWxlcnRMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VwdC1hbGVydCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjY2VwdEFsZXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY2NlcHRBbGVydCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVHcmV5KCdub25lJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydC1ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUdyZXkoJ2ZsZXgnKTtcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyLWJveCcpO1xuICAgICAgICBnYW1lT3ZlckJveC5jaGlsZHJlblswXS5pbm5lclRleHQgPSBtZXNzYWdlO1xuICAgICAgICBnYW1lT3ZlckJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxuICAgIGdhbWVPdmVyTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWdhbWUnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZHJhZ1NoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgICAgICBkcmFnU2hpcC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KTsgXG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuY29tcGFzc0V2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hY2NlcHRJbnN0cnVjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hbGVydExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGZsZWV0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGZsZWV0U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZWV0c3F1YXJlJyk7XG4gICAgICAgIGZsZWV0U3F1YXJlLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3ZlckV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3BFdmVudEhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gICAgfVxuXG4gICAgZHJhZ0VuZChldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9XG5cbiAgICBkcmFnT3ZlckV2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpXG4gICAgICAgIGxldCBsZW5ndGggPSBkcmFnZ2luZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuZ3RoJyk7XG4gICAgICAgIGxldCBjb29yZHMgPSB0aGlzLmlkLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XG4gICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgbGV0IHZhbGlkRHJvcCA9IHRydWU7XG4gICAgICAgIGlmIChnYW1lLmh1bWFuLmdhbWVib2FyZC5jaGVja1ZhbGlkRHJvcChsZW5ndGgsIHhwb3MsIHlwb3MsIGNvbnRyb2xsZXIub3JpZW50KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhbGlkRHJvcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuY29sb3JEcm9wU3F1YXJlcyh4cG9zLCB5cG9zLCBsZW5ndGgsIHZhbGlkRHJvcClcbiAgICB9XG5cbiAgICBjb2xvckRyb3BTcXVhcmVzKHhwb3MsIHlwb3MsIGxlbmd0aCwgdmFsaWREcm9wKSB7XG4gICAgICAgIGZvciAobGV0IHg9MDsgeDxsZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZsZWV0aHVtYW4ke3hwb3N9JHt5cG9zfWApXG4gICAgICAgICAgICBpZiAoc3F1YXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsaWREcm9wID8gc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2FsbG93ZWQnKSA6IHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkaXNhbGxvd2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRyb2xsZXIub3JpZW50ID8geHBvcysrIDogeXBvcysrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gICAgXG5cbiAgICBkcmFnTGVhdmVFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29udHJvbGxlci5kZWNvbG9yRHJvcFNxdWFyZXMoKVxuICAgIH1cblxuICAgIGRlY29sb3JEcm9wU3F1YXJlcygpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxlZXRzcXVhcmUnKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnYWxsb3dlZCcpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FsbG93ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfTtcblxuICAgIGRyb3BFdmVudEhhbmRsZXIoZXZlbnQsIGZsZWV0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJylcbiAgICAgICAgbGV0IGluZGV4ID0gZHJhZ2dpbmcuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKTtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICBsZXQgbGVuZ3RoID0gZHJhZ2dpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWxlbmd0aCcpO1xuICAgICAgICBsZXQgeHBvcyA9IGNvb3Jkc1swXTtcbiAgICAgICAgbGV0IHlwb3MgPSBjb29yZHNbMV07XG4gICAgICAgIGlmIChnYW1lLmh1bWFuLmdhbWVib2FyZC5jaGVja1ZhbGlkRHJvcChsZW5ndGgsIHhwb3MsIHlwb3MsIGNvbnRyb2xsZXIub3JpZW50KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZ2FtZS5odW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKGluZGV4LCBsZW5ndGgsIHhwb3MsIHlwb3MsIGNvbnRyb2xsZXIub3JpZW50KVxuICAgICAgICAgICAgYnVpbGRGbGVldEJvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbiAgICAgICAgICAgIGRyYWdnaW5nLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZHNoaXAnKTtcbiAgICAgICAgICAgIGRyYWdnaW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KVxuICAgICAgICAgICAgZHJhZ2dpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnRW5kLCBmYWxzZSlcbiAgICAgICAgICAgIGRyYWdnaW5nLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpXG4gICAgICAgICAgICBnYW1lLmh1bWFuLnBsYWNlZFNoaXBzLS1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZS5odW1hbi5wbGFjZWRTaGlwcyA+IDApIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZmxlZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udHJvbGxlci5hbGVydChgTGV0J3MgZ28hYClcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaXNlY3Rpb24nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIGdhbWUucGxheUdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhc3NFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBjb21wYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhc3MnKTtcbiAgICAgICAgY29tcGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICB0aGlzLm9yaWVudCA9ICF0aGlzLm9yaWVudDtcbiAgICAgICAgICAgIGxldCBjb21wYXNzSW1hZ2UgPSB0aGlzLm9yaWVudCA/IENvbXBhc3N4IDogQ29tcGFzc3k7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wYXNzSW1hZ2UpXG4gICAgICAgICAgICBjb21wYXNzLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7Y29tcGFzc0ltYWdlfWApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2FtZXBsYXlFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgbW92ZVNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3Zlc3F1YXJlJyk7XG4gICAgICAgIG1vdmVTcXVhcmUuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmhhc0F0dHJpYnV0ZSgncGxheWVkJykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygneXVwJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBzcXVhcmUuaWQucmVwbGFjZSgvW15hLXpdL2lnLCBcIlwiKVxuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBzcXVhcmUuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICAgICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgIGdhbWUuYWkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeHBvcyx5cG9zKVxuICAgICAgICAgICAgICAgIGJ1aWxkTW92ZXNCb2FyZChnYW1lLmFpLmdhbWVib2FyZC5ib2FyZCwgYGh1bWFuYCApXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmRUdXJuKCk7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufVxuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2R1bGVzL3BsYXllcidcbmltcG9ydCB7Y29udHJvbGxlciwgYWlDb250cm9sfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9kb20vZG9tY29udHJvbGxlcic7XG5pbXBvcnQgeyBidWlsZEZsZWV0Qm9hcmQgfSBmcm9tICcuL2RvbS9kb21idWlsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmh1bWFuID0gbmV3IFBsYXllcignQW5vbnltb3VzJywgZmFsc2UpO1xuICAgICAgICB0aGlzLmFpID0gbmV3IFBsYXllcignQmF0dGxlYm90JywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXR0YWNrID0gdGhpcy5odW1hbjtcbiAgICAgICAgdGhpcy5kZWZlbmQgPSB0aGlzLmFpO1xuICAgIH1cblxuICAgIHBsYXlHYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2sgPT09IHRoaXMuaHVtYW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2FtZXBsYXlFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGFpQ29udHJvbC5haW1vdmUoKTtcbiAgICAgICAgICAgIGFpQ29udHJvbC5tb3Zlcy5zZXQoc3F1YXJlLCAncGxheWVkJylcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBzcXVhcmUucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgICAgIHRoaXMuaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeHBvcyx5cG9zKVxuICAgICAgICAgICAgYnVpbGRGbGVldEJvYXJkKHRoaXMuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKVxuICAgICAgICAgICAgdGhpcy5lbmRUdXJuKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmRUdXJuKCkge1xuICAgICAgICBsZXQgdGVtcCA9IHRoaXMuYXR0YWNrO1xuICAgICAgICB0aGlzLmF0dGFjayA9IHRoaXMuZGVmZW5kO1xuICAgICAgICB0aGlzLmRlZmVuZCA9IHRlbXA7XG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCdcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5idWlsZEJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmFkZFNoaXBzKCk7XG4gICAgICAgIHRoaXMuZmxlZXQgPSAwO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIC8vdGhpcy5kZWZhdWx0UGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgLy9vcmlnaW5hbGx5IHVzZWQgYSBzdGFuZGFyZCBhcnJheSBob3dldmVyICdtYXAnIG1hZGUgcmVmZXJlbmNpbmcvdXBkYXRpbmcgc3F1YXJlcyBzaW1wbGVyXG4gICAgYnVpbGRCb2FyZCgpIHtcbiAgICAgICAgbGV0IGJvYXJkID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCB4PTA7IHg8MTA7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeT0wOyB5PDEwOyB5KyspIHtcbiAgICAgICAgICAgICAgICBib2FyZC5zZXQoW3gseV0udG9TdHJpbmcoKSwnZW1wdHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIFxuICAgIGFkZFNoaXBzKCkge1xuICAgICAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnY2FycmllcicsIDUpKVxuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdiYXR0bGVzaGlwJywgNCkpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ2Rlc3Ryb3llcicsIDMpKVxuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdzdWJtYXJpbmUnLCAzKSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgncGF0cm9sIGJvYXQnLCAyKSlcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNoZWNrU3BhY2UoeHBvcywgeXBvcykgeyAgICBcbiAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuYm9hcmQuZ2V0KGAke3hwb3N9LCR7eXBvc31gKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ29mZiBib2FyZCdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7c3RhdHVzfWBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVmFsaWREcm9wKGxlbmd0aCwgeHBvcywgeXBvcywgb3JpZW50LCB2YWxpZERyb3A9dHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB4PTA7IHg8bGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmbGVldGh1bWFuJHt4cG9zfSR7eXBvc31gKVxuICAgICAgICAgICAgaWYgKHNxdWFyZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhbGlkRHJvcD1mYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmNoZWNrU3BhY2UoeHBvcywgeXBvcyk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAnZW1wdHknKSB7XG4gICAgICAgICAgICAgICAgdmFsaWREcm9wPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JpZW50ID8geHBvcysrIDogeXBvcysrO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkRHJvcFxuICAgIH1cbiAgICAvL29yaWdpbmFsbHkgaGFkIHZlcnkgc2ltaWxhciBob3IvdmVydCBmdW5jdGlvbnMsIHRlcm5lcnkgb3BlcmF0b3Igb24gJ29yaWVudGF0aW9uJyBuZWF0ZXIgcmVmYWN0b3JcbiAgICBwbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeHBvcywgeXBvcywgb3JpZW50KSB7XG4gICAgICAgIGxldCB0ZW1weCA9IHhwb3M7XG4gICAgICAgIGxldCB0ZW1weSA9IHlwb3M7XG4gICAgICAgIGZvciAobGV0IHg9MTsgeDw9bGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmNoZWNrU3BhY2UodGVtcHgsIHRlbXB5KTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgIT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Jsb2NrJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JpZW50ID8gdGVtcHgrKyA6IHRlbXB5Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeT0xOyB5PD1sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGAke3hwb3N9LCR7eXBvc31gLCBpbmRleCk7XG4gICAgICAgICAgICBvcmllbnQgPyB4cG9zKysgOiB5cG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGVldCsrO1xuICAgIH1cbiAgICAgXG4gICAgcmVjZWl2ZUF0dGFjayh4cG9zLCB5cG9zKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IHRoaXMuY2hlY2tTcGFjZSh4cG9zLCB5cG9zKTtcbiAgICAgICAgaWYgKHNwYWNlID09PSAnZW1wdHknKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgJHt4cG9zfSwke3lwb3N9YCwgJ21pc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcGFjZSA9PT0gJ2hpdCcgfHwgc3BhY2UgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwYWNlKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGAke3hwb3N9LCR7eXBvc31gLCAnaGl0JylcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc3BhY2VdLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tzcGFjZV0uc3VuayA/IHRoaXMuZmxlZXQtLSA6ICcnO1xuICAgICAgICAgICAgdGhpcy5mbGVldCA9PT0gMCA/IGNvbnRyb2xsZXIuZ2FtZU92ZXIoYEp1bSBoYXMgd29uIHRoZSBiYXR0bGVgKTogJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVmYXVsdCBwbGFjZW1lbnQgb2YgZmxlZXQgdG8gZm9jdXMgb24gRE9NIC8gZ2FtZXBsYXlcbiAgICBkZWZhdWx0UGxhY2VtZW50KCkge1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCgwLCA1LCAwLCAwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMSwgNCwgMiwgMSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCgyLCAzLCA1LCA0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMywgMiwgNywgNywgZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCg0LCAxLCA5LCA5LCB0cnVlKTtcbiAgICB9XG59XG5cbi8vY29uc3QgZ2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbmV4cG9ydCBjb25zdCB0ZXN0c2hpcCA9IG5ldyBTaGlwKCd0ZXN0c2hpcCcsIDQpO1xuXG5cblxuXG5cbiIsImltcG9ydCB7YnVpbGRQYWdlLCBidWlsZEZsZWV0Qm9hcmQsIGJ1aWxkTW92ZXNCb2FyZH0gZnJvbSAnLi9kb20vZG9tYnVpbGQnXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL2RvbS9kb21jb250cm9sbGVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEFJY29udHJvbCBmcm9tICcuL2FpJztcbmltcG9ydCBDYXJyaWVyIGZyb20gJy4uL2ltYWdlcy9jYXJyaWVyLnBuZydcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZydcbmltcG9ydCBEZXN0cm95ZXIgZnJvbSAnLi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmcnXG5pbXBvcnQgU3VibWFyaW5lIGZyb20gJy4uL2ltYWdlcy9zdWJtYXJpbmUucG5nJ1xuaW1wb3J0IFBhdHJvbEJvYXQgZnJvbSAnLi4vaW1hZ2VzL3BhdHJvbGJvYXQucG5nJ1xuXG5cbmJ1aWxkUGFnZSgpO1xuY29uc3QgY29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lO1xuXG5jb25zdCBhaUNvbnRyb2wgPSBuZXcgQUljb250cm9sO1xuY29uc29sZS5sb2coZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQpO1xuY29uc29sZS5sb2coZ2FtZS5haS5nYW1lYm9hcmQuYm9hcmQpO1xuXG5idWlsZEZsZWV0Qm9hcmQoZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQsICdodW1hbicpO1xuYnVpbGRNb3Zlc0JvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbmNvbnRyb2xsZXIubG9hZFNoaXBQbGFjZW1lbnQoKTtcblxuZXhwb3J0IHtnYW1lLCBjb250cm9sbGVyLCBhaUNvbnRyb2x9IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCdcbmltcG9ydCBBSWNvbnRyb2wgZnJvbSAnLi9haSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250cm9sKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWkgPSBjb250cm9sLFxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQobmFtZSk7XG4gICAgICAgIHRoaXMucGxhY2VkU2hpcHMgPSA1O1xuICAgIH1cblxuICAgIGFpVHVybigpIHtcblxuICAgIH1cbn0gXG5cblxuXG4vL2h1bWFuIGFuZCBhaSBwbGFjZW1lbnRzIHRvIGNvbWUgbGF0ZXIiLCJpbXBvcnQgeyBnYW1lLCBjb250cm9sbGVyIH0gZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgICAgICB0aGlzLnN1bmsgPSBzdW5rO1xuICAgIH0gXG4gICAgXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrK1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgICAgICB0aGlzLnN1bmsgPyB0aGlzLnNoaXBTdW5rKCk6Jyc7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzaGlwU3VuaygpIHtcbiAgICAgICAgY29udHJvbGxlci5hbGVydChgJHtnYW1lLmF0dGFjay5uYW1lfSBzdW5rICR7Z2FtZS5kZWZlbmQubmFtZX0ncyAke3RoaXMubmFtZX1gKVxuICAgICAgICBjb250cm9sbGVyLnN1bmtTaGlwKHRoaXMubmFtZSk7XG4gICAgfVxufVxuXG5cblxuXG4vKiBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoJ2JhdHRsZXNoaXAnLCA1KTtcbmNvbnNvbGUubG9nKGJhdHRsZXNoaXAubmFtZSk7XG5jb25zb2xlLmxvZyhiYXR0bGVzaGlwLmxlbmd0aCk7XG5jb25zb2xlLmxvZyhiYXR0bGVzaGlwKVxuICovXG5cbi8vc2hpcFN1bmsodGhpcy5uYW1lKTogdGhpcy5zdW5rPWZhbHNlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCAnLi9tb2R1bGVzJ1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSdcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5jb25zb2xlLmxvZyhnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
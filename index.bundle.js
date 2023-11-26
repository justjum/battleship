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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAA6C;AACjD;;AAEA;IACI,wBAAwB;IACxB,4CAA6B;AACjC;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,0BAA0B;IAC1B,wBAAwB;IACxB,yBAAyB;IACzB,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,8CAA8C;IAC9C,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,oCAAoC;AACxC;;;AAGA;IACI,4BAA4B;IAC5B,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,oCAAoC;IACpC,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["@font-face {\n    font-family: 'ITC-Machine';\n    src: url(./fonts/ITC\\ Machine\\ Std\\ Bold.otf);\n}\n\n@font-face {\n    font-family: 'Lunchtime';\n    src: url(./fonts/lunchds.ttf);\n}\n\nbody {\n    background-color: rgb(47, 54, 61);\n    display: flex;\n    justify-content: center;\n    margin: 0;\n}\n\n.grey-out {\n    display: flex;\n    background-color: lightslategray;\n    opacity: 0.5;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 3;\n}\n\nh1 {\n    font-family: 'ITC-Machine';\n    outline: rgb(47, 54, 61);\n    color: rgb(148, 167, 185);\n    font-size: 80px;\n    margin: 0;\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    line-height: 0.75em;\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.section {\n    border: black solid 1px;\n    background-color: whitesmoke;\n    width: 750px;\n    height: auto;\n    display: flex;\n    position: relative;\n    padding: 3px;\n    margin: 10px;\n}\n\n.gameboard {\n    border: red solid 1px;\n    width: 400px;\n    height: 400px;\n    margin: 10px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.icon {\n    width: 38px;\n}\n\n#aisection {\n    position: relative;\n    opacity: 0.3;\n}\n\n.alert-box {\n    position: absolute;\n    display: none;\n    background-color: rgb(51, 54, 56);\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 5;\n    font-family: 'Lunchtime';\n    color: rgb(148, 167, 185);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.game-over-box {\n    position: absolute;\n    display: none;\n    background-color: rgb(51, 54, 56);\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 5;\n    font-family: 'Lunchtime';\n    color: rgb(148, 167, 185);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton {\n    font-family: 'Courier New', Courier, monospace;\n    width: 100px;\n    justify-self: center;\n}\n\n.instructions {\n    position: absolute;\n    background-color: rgb(51, 54, 56);\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 3;\n    font-family: 'Lunchtime';\n    color: rgb(190, 215, 238);\n    font-size: larger;\n}\n\n.required {\n    border-color: rgb(255, 80, 80);\n    border-width: 5px;\n    background-color: rgb(245, 200, 200);\n}\n\n\n.fleetsquare, .movesquare {\n    outline: steelblue solid 1px;\n    background-color: rgb(144, 205, 255);\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.movesquare:hover {\n    cursor: crosshair;\n    background-color: lightcoral;\n}\n\n\n.compass {\n    width: 200px;\n    position: absolute;\n    right: 30px;\n    bottom: 30px;\n}\n\n.ship-select {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.aiship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.ship-square {\n    position: relative;\n    outline: steelblue solid 1px;\n    background-color: rgb(144, 205, 255);\n    width: 40px;\n    height: 40px;\n}\n\n.allowed {\n    background-color: lightgreen;\n}\n\n.disallowed {\n    background-color: lightcoral;\n}\n\n.placedship {\n    opacity: 0.5;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n}\n"],"sourceRoot":""}]);
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
        //controller.sunkShip(this.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNklBQW1EO0FBQy9GLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEs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QUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ0Y7O0FBRWU7O0FBRWpDLGlCQUFpQixxREFBSTtBQUNyQix3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZG9tYnVpbGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0lUQyBNYWNoaW5lIFN0ZCBCb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvbHVuY2hkcy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0lUQy1NYWNoaW5lJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMdW5jaHRpbWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDU0LCA2MSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5ncmV5LW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6ICdJVEMtTWFjaGluZSc7XG4gICAgb3V0bGluZTogcmdiKDQ3LCA1NCwgNjEpO1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOiA3NTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmdhbWVib2FyZCB7XG4gICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDM4cHg7XG59XG5cbiNhaXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5hbGVydC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTQsIDU2KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICByaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XG4gICAgY29sb3I6IHJnYigxNDgsIDE2NywgMTg1KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLW92ZXItYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDU0LCA1Nik7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgZm9udC1mYW1pbHk6ICdMdW5jaHRpbWUnO1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgNTYpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVuY2h0aW1lJztcbiAgICBjb2xvcjogcmdiKDE5MCwgMjE1LCAyMzgpO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4ucmVxdWlyZWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgODAsIDgwKTtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMDAsIDIwMCk7XG59XG5cblxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XG4gICAgb3V0bGluZTogc3RlZWxibHVlIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMDUsIDI1NSk7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vdmVzcXVhcmU6aG92ZXIge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cblxuLmNvbXBhc3Mge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xufVxuXG4uc2hpcC1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNoaXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWlzaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnNoaXAtc3F1YXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3V0bGluZTogc3RlZWxibHVlIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMDUsIDI1NSk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWxsb3dlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmRpc2FsbG93ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi5wbGFjZWRzaGlwIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSVRDLU1hY2hpbmUnO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0lUQ1xcXFwgTWFjaGluZVxcXFwgU3RkXFxcXCBCb2xkLm90Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvbHVuY2hkcy50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA1NCwgNjEpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JleS1vdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJVEMtTWFjaGluZSc7XFxuICAgIG91dGxpbmU6IHJnYig0NywgNTQsIDYxKTtcXG4gICAgY29sb3I6IHJnYigxNDgsIDE2NywgMTg1KTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMC43NWVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDM4cHg7XFxufVxcblxcbiNhaXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmFsZXJ0LWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgNTYpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XFxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgNTYpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBmb250LWZhbWlseTogJ0x1bmNodGltZSc7XFxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNjcsIDE4NSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDU0LCA1Nik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbiAgICByaWdodDogMTAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVuY2h0aW1lJztcXG4gICAgY29sb3I6IHJnYigxOTAsIDIxNSwgMjM4KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5yZXF1aXJlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgODAsIDgwKTtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIwMCwgMjAwKTtcXG59XFxuXFxuXFxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XFxuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIwNSwgMjU1KTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb3Zlc3F1YXJlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcblxcbi5jb21wYXNzIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBib3R0b206IDMwcHg7XFxufVxcblxcbi5zaGlwLXNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWlzaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIwNSwgMjU1KTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmFsbG93ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uZGlzYWxsb3dlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5wbGFjZWRzaGlwIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJY29udHJvbCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWwgPSAnZWFzeScpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLm1vdmVzID0gdGhpcy5idWlsZE1vdmVNYXAoKTtcbiAgICAgICAgdGhpcy5wbGFjZUZsZWV0KCk7XG5cbiAgICB9XG5cbiAgICBwbGFjZUZsZWV0KGZsZWV0PTUsIGluZGV4PTApIHtcbiAgICAgICAgd2hpbGUgKGZsZWV0PjApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhaXBsYWNpbmcnKVxuICAgICAgICAgICAgbGV0IHNoaXAgPSBnYW1lLmFpLmdhbWVib2FyZC5zaGlwc1tpbmRleF07XG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMucmFuZG9tSW50ZWdlcigpO1xuICAgICAgICAgICAgbGV0IHogPSB0aGlzLnJhbmRvbUludGVnZXIoKTtcbiAgICAgICAgICAgIGxldCBvcmllbnQgPSB0aGlzLnJhbmRvbU9yaWVudCgpO1xuICAgICAgICAgICAgaWYgKGdhbWUuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChpbmRleCwgbGVuZ3RoLCB5LCB6LCBvcmllbnQpICE9PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5haS5nYW1lYm9hcmQucGxhY2VTaGlwKGluZGV4LCBsZW5ndGgsIHksIHosIG9yaWVudCk7XG4gICAgICAgICAgICAgICAgZmxlZXQtLTtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIGxlbmd0aC0tO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZE1vdmVNYXAoKSB7XG4gICAgICAgIGxldCBtb3ZlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCB4PTA7IHg8MTA7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeT0wOyB5PDEwOyB5KyspIHtcbiAgICAgICAgICAgICAgICBtb3ZlTWFwLnNldChbeCx5XS50b1N0cmluZygpLCd1bnBsYXllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlTWFwO1xuICAgIH1cblxuICAgIHJhbmRvbVNxdWFyZSgpIHtcbiAgICAgICAgbGV0IHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHk9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgcmV0dXJuIGAke3h9LCR7eX1gXG4gICAgfVxuXG4gICAgcmFuZG9tSW50ZWdlcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgfVxuXG4gICAgcmFuZG9tT3JpZW50KCkge1xuICAgICAgICBsZXQgeD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XG4gICAgICAgIHJldHVybiB4PjAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZmluZFVucGxheWVkU3F1YXJlKGNoZWNrZWQgPSBuZXcgTWFwLCBzcXVhcmU9dGhpcy5yYW5kb21TcXVhcmUoKSwgc3RhdHVzKSB7XG4gICAgICAgIHN0YXR1cyA9IHRoaXMubW92ZXMuZ2V0KHNxdWFyZS50b1N0cmluZygpKVxuICAgICAgICBpZiAoc3RhdHVzID09PSAndW5wbGF5ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoZWNrZWQuZ2V0KHNxdWFyZS50b1N0cmluZygpID09PSAnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICBhbGVydCgndGhpcycpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGVja2VkLnNldChzcXVhcmUudG9TdHJpbmcoKSwgJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZFVucGxheWVkU3F1YXJlKGNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWltb3ZlKCkge1xuICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5maW5kVW5wbGF5ZWRTcXVhcmUoKTtcbiAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL2dhbWVib2FyZCdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVyJ1xuaW1wb3J0IHsgcGxhY2VTaGlwLCBkcmFnb3ZlciB9IGZyb20gJy4vZG9tY29udHJvbGxlcic7XG5pbXBvcnQgQ2FycmllciBmcm9tICcuLi8uLi9pbWFnZXMvY2Fycmllci5wbmcnXG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuLi8uLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcnXG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4uLy4uL2ltYWdlcy9kZXN0cm95ZXIucG5nJ1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcuLi8uLi9pbWFnZXMvc3VibWFyaW5lLnBuZydcbmltcG9ydCBQYXRyb2xCb2F0IGZyb20gJy4uLy4uL2ltYWdlcy9wYXRyb2xib2F0LnBuZydcbmltcG9ydCBDb21wYXNzeCBmcm9tICcuLi8uLi9pbWFnZXMvY29tcGFzc3gucG5nJ1xuaW1wb3J0IE1pc3MgZnJvbSAnLi4vLi4vaW1hZ2VzL21pc3MucG5nJ1xuaW1wb3J0IEhpdCBmcm9tICcuLi8uLi9pbWFnZXMvaGl0LnBuZydcbmltcG9ydCBTaGlwU3F1YXJlIGZyb20gJy4uLy4uL2ltYWdlcy9zaGlwc3F1YXJlLnBuZydcbmV4cG9ydCB7YnVpbGRQYWdlLCBidWlsZEZsZWV0Qm9hcmQsIGJ1aWxkTW92ZXNCb2FyZH1cblxuXG5mdW5jdGlvbiBidWlsZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nZ3JleS1vdXQnIGlkPSdncmV5LW91dCc+PC9kaXY+XG4gICAgPGgxPlNpbmsgdGhlIFNoaXBzITwvaDE+XG4gICAgPGRpdiBjbGFzcz0nY29udGFpbmVyJyBpZD0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2VjdGlvbicgaWQ9J2h1bWFuc2VjdGlvbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdhbGVydC1ib3gnIGlkPSdhbGVydC1ib3gnPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0nYWxlcnQnIGlkPSdhbGVydCc+QWxlcnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2FjY2VwdC1hbGVydCcgaWQ9J2FjY2VwdC1hbGVydCc+Q2xlYXIgTWVzc2FnZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lLW92ZXItYm94JyBpZD0nZ2FtZS1vdmVyLWJveCc+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPSdhbGVydCc+IDwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYWNjZXB0LWFsZXJ0JyBpZD0ncmVzdGFydC1nYW1lJz5SZXN0YXJ0IEdhbWU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0naW5zdHJ1Y3Rpb25zJyBpZD0naW5zdHJ1Y3Rpb25zJz5cbiAgICAgICAgICAgICAgICA8cD4xLiBQbGVhc2UgZW50ZXIgeW91ciBuYW1lIGJlbG93OjwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J3BsYXllci1uYW1lJyBpZD0ncGxheWVyLW5hbWUnIG5hbWU9J3BsYXllci1uYW1lJyBwbGFjZWhvbGRlcj0nUGxheWVyIE5hbWUnPlxuICAgICAgICAgICAgICAgIDxwPjIuIERyYWcgYW5kIGRyb3AgeW91ciBmbGVldCBvbnRvIHRoZSBnYW1lYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgPHA+My4gQ2xpY2sgb24gdGhlIGNvbXBhc3MgdG8gYWRqdXN0IHRoZSBkaXJlY3Rpb24gb2YgZHJvcDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdwbGF5Z2FtZScgaWQ9J3BsYXlnYW1lJz5JJ20gcmVhZHkhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dhbWVib2FyZCcgaWQ9J2h1bWFuZmxlZXQnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcC1zZWxlY3QnIGlkPSdzaGlwLXNlbGVjdCc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nc2hpcCcgZHJhZ2dhYmxlPSd0cnVlJyBpZD0nMGNhcnJpZXInIGRhdGEtbGVuZ3RoPTUgc3JjPScke0NhcnJpZXJ9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPScxYmF0dGxlc2hpcCcgZGF0YS1sZW5ndGg9NCBzcmM9JyR7QmF0dGxlc2hpcH0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzJkZXN0cm95ZXInIGRhdGEtbGVuZ3RoPTMgc3JjPScke0Rlc3Ryb3llcn0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzNzdWJtYXJpbmUnIGRhdGEtbGVuZ3RoPTMgc3JjPScke1N1Ym1hcmluZX0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzRwYXRyb2wtYm9hdCcgZGF0YS1sZW5ndGg9MiBzcmM9JyR7UGF0cm9sQm9hdH0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2NvbXBhc3MnIGlkPSdjb21wYXNzJyBzcmM9JyR7Q29tcGFzc3h9Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2VjdGlvbicgaWQ9J2Fpc2VjdGlvbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdodW1hbm1vdmVzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NoaXAtc2VsZWN0JyBpZD0nc2hpcC1haSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWljYXJyaWVyJyBzcmM9JyR7Q2Fycmllcn0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2FpYmF0dGxlc2hpcCcgc3JjPScke0JhdHRsZXNoaXB9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdhaXNoaXAnIGRyYWdnYWJsZT0nZmFsc2UnIGlkPSdhaWRlc3Ryb3llcicgc3JjPScke0Rlc3Ryb3llcn0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2Fpc3VibWFyaW5lJyBzcmM9JyR7U3VibWFyaW5lfSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWlwYXRyb2xib2F0JyBzcmM9JyR7UGF0cm9sQm9hdH0nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Zvb3Rlcic+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9zZXQtc2lsaG91ZXR0ZXMtbmF2YWwtc2hpcHNfMTEwNTI5MjguaHRtI3F1ZXJ5PXdhcnNoaXAmcG9zaXRpb249MCZmcm9tX3ZpZXc9a2V5d29yZCZ0cmFjaz1zcGgmdXVpZD05NjRhN2M5Ni1lZWYxLTQ4NWItYWUyZC02OGEzNDYzZTFhMDNcIj5CYXR0bGVzaGlwIEltYWdlcyBieSBtYWNyb3ZlY3RvciBvbiBGcmVlcGlrPC9hPlxuICAgIDwvZGl2PlxuICAgIGBcbn1cblxuZnVuY3Rpb24gYnVpbGRGbGVldEJvYXJkKGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9ZmxlZXRgKTtcbiAgICBnYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2FyZC5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBjb29yZHMgPSBiLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIilcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZsZWV0c3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGZsZWV0JHtwbGF5ZXJ9JHtjb29yZHN9YClcbiAgICAgICAgaWYgKGEgIT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgIGxldCBiO1xuICAgICAgICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGl0JzogYiA9IEhpdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtaXNzJzogYiA9IE1pc3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBhOiBiID0gU2hpcFNxdWFyZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYik7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTW92ZXNCb2FyZChib2FyZCwgcGxheWVyKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfW1vdmVzYCk7XG4gICAgZ2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hcmQuZm9yRWFjaCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gYi5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb3Zlc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYG1vdmUke3BsYXllcn0ke2Nvb3Jkc31gIClcbiAgICAgICAgaWYgKGEgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdwbGF5ZWQnLCAnJyk7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9J2ljb24nIHNyYz0ke0hpdH0+YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGEgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgncGxheWVkJywgJycpO1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPSdpY29uJyBzcmM9JHtNaXNzfT5gXG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQge2dhbWUsIGNvbnRyb2xsZXJ9IGZyb20gJy4uL2luZGV4J1xuaW1wb3J0IHsgYnVpbGRNb3Zlc0JvYXJkLCBidWlsZEZsZWV0Qm9hcmQgfSBmcm9tICcuL2RvbWJ1aWxkJztcbmltcG9ydCBDb21wYXNzeCBmcm9tICcuLi8uLi9pbWFnZXMvY29tcGFzc3gucG5nJ1xuaW1wb3J0IENvbXBhc3N5IGZyb20gJy4uLy4uL2ltYWdlcy9jb21wYXNzeS5wbmcnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3Iob3JpZW50PXRydWUpIHtcbiAgICAgICAgdGhpcy5vcmllbnQgPSBvcmllbnQ7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFjY2VwdEluc3RydWN0aW9ucygpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlnYW1lJykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZScpO1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5odW1hbi5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUdyZXkoJ25vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUdyZXkodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZ3JleU91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmV5LW91dCcpO1xuICAgICAgICBncmV5T3V0LnN0eWxlLmRpc3BsYXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlR3JleSgnZmxleCcpO1xuICAgICAgICBjb25zdCBhbGVydEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydC1ib3gnKTtcbiAgICAgICAgYWxlcnRCb3guY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgYWxlcnRCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBhbGVydExpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0LWFsZXJ0Jykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0QWxlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjY2VwdEFsZXJ0KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUdyZXkoJ25vbmUnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LWJveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlR3JleSgnZmxleCcpO1xuICAgICAgICBjb25zdCBnYW1lT3ZlckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXItYm94Jyk7XG4gICAgICAgIGdhbWVPdmVyQm94LmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgIGdhbWVPdmVyQm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXJMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtZ2FtZScpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRTaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBkcmFnU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICAgIGRyYWdTaGlwLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpOyBcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZsZWV0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5jb21wYXNzRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFjY2VwdEluc3RydWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFsZXJ0TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lT3Zlckxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZmxlZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZmxlZXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxlZXRzcXVhcmUnKTtcbiAgICAgICAgZmxlZXRTcXVhcmUuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcEV2ZW50SGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYWdTdGFydChldmVudCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJylcbiAgICB9XG5cbiAgICBkcmFnRW5kKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIH1cblxuICAgIGRyYWdPdmVyRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJylcbiAgICAgICAgbGV0IGxlbmd0aCA9IGRyYWdnaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1sZW5ndGgnKTtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKTtcbiAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICBsZXQgdmFsaWREcm9wID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmNoZWNrVmFsaWREcm9wKGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFsaWREcm9wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5jb2xvckRyb3BTcXVhcmVzKHhwb3MsIHlwb3MsIGxlbmd0aCwgdmFsaWREcm9wKVxuICAgIH1cblxuICAgIGNvbG9yRHJvcFNxdWFyZXMoeHBvcywgeXBvcywgbGVuZ3RoLCB2YWxpZERyb3ApIHtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmxlZXRodW1hbiR7eHBvc30ke3lwb3N9YClcbiAgICAgICAgICAgIGlmIChzcXVhcmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YWxpZERyb3AgPyBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYWxsb3dlZCcpIDogc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FsbG93ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udHJvbGxlci5vcmllbnQgPyB4cG9zKysgOiB5cG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSAgICBcblxuICAgIGRyYWdMZWF2ZUV2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb250cm9sbGVyLmRlY29sb3JEcm9wU3F1YXJlcygpXG4gICAgfVxuXG4gICAgZGVjb2xvckRyb3BTcXVhcmVzKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGVldHNxdWFyZScpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdhbGxvd2VkJyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWxsb3dlZCcpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB9O1xuXG4gICAgZHJvcEV2ZW50SGFuZGxlcihldmVudCwgZmxlZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZHJhZ2dpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKVxuICAgICAgICBsZXQgaW5kZXggPSBkcmFnZ2luZy5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpO1xuICAgICAgICBsZXQgY29vcmRzID0gdGhpcy5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGxldCBsZW5ndGggPSBkcmFnZ2luZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuZ3RoJyk7XG4gICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgaWYgKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmNoZWNrVmFsaWREcm9wKGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lLmh1bWFuLmdhbWVib2FyZC5wbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpXG4gICAgICAgICAgICBidWlsZEZsZWV0Qm9hcmQoZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQsICdodW1hbicpO1xuICAgICAgICAgICAgZHJhZ2dpbmcuY2xhc3NMaXN0LmFkZCgncGxhY2Vkc2hpcCcpO1xuICAgICAgICAgICAgZHJhZ2dpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpXG4gICAgICAgICAgICBkcmFnZ2luZy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdFbmQsIGZhbHNlKVxuICAgICAgICAgICAgZHJhZ2dpbmcuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSlcbiAgICAgICAgICAgIGdhbWUuaHVtYW4ucGxhY2VkU2hpcHMtLVxuICAgICAgICB9XG4gICAgICAgIGlmIChnYW1lLmh1bWFuLnBsYWNlZFNoaXBzID4gMCkge1xuICAgICAgICAgICAgY29udHJvbGxlci5mbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFsZXJ0KGBMZXQncyBnbyFgKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fpc2VjdGlvbicpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFzc0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFzcycpO1xuICAgICAgICBjb21wYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMub3JpZW50ID0gIXRoaXMub3JpZW50O1xuICAgICAgICAgICAgbGV0IGNvbXBhc3NJbWFnZSA9IHRoaXMub3JpZW50ID8gQ29tcGFzc3ggOiBDb21wYXNzeTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBhc3NJbWFnZSlcbiAgICAgICAgICAgIGNvbXBhc3Muc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtjb21wYXNzSW1hZ2V9YClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnYW1lcGxheUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBtb3ZlU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vdmVzcXVhcmUnKTtcbiAgICAgICAgbW92ZVNxdWFyZS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuaGFzQXR0cmlidXRlKCdwbGF5ZWQnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5dXAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHNxdWFyZS5pZC5yZXBsYWNlKC9bXmEtel0vaWcsIFwiXCIpXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHNxdWFyZS5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgICAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgICAgICAgICAgbGV0IHlwb3MgPSBjb29yZHNbMV07XG4gICAgICAgICAgICAgICAgZ2FtZS5haS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4cG9zLHlwb3MpXG4gICAgICAgICAgICAgICAgYnVpbGRNb3Zlc0JvYXJkKGdhbWUuYWkuZ2FtZWJvYXJkLmJvYXJkLCBgaHVtYW5gIClcbiAgICAgICAgICAgICAgICBnYW1lLmVuZFR1cm4oKTtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXlHYW1lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG59XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvcGxheWVyJ1xuaW1wb3J0IHtjb250cm9sbGVyLCBhaUNvbnRyb2x9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL2RvbS9kb21jb250cm9sbGVyJztcbmltcG9ydCB7IGJ1aWxkRmxlZXRCb2FyZCB9IGZyb20gJy4vZG9tL2RvbWJ1aWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaHVtYW4gPSBuZXcgUGxheWVyKCdBbm9ueW1vdXMnLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYWkgPSBuZXcgUGxheWVyKCdCYXR0bGVib3QnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hdHRhY2sgPSB0aGlzLmh1bWFuO1xuICAgICAgICB0aGlzLmRlZmVuZCA9IHRoaXMuYWk7XG4gICAgfVxuXG4gICAgcGxheUdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGFjayA9PT0gdGhpcy5odW1hbikge1xuICAgICAgICAgICAgY29udHJvbGxlci5nYW1lcGxheUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gYWlDb250cm9sLmFpbW92ZSgpO1xuICAgICAgICAgICAgYWlDb250cm9sLm1vdmVzLnNldChzcXVhcmUsICdwbGF5ZWQnKVxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHNxdWFyZS5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgICAgICBsZXQgeHBvcyA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgdGhpcy5odW1hbi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4cG9zLHlwb3MpXG4gICAgICAgICAgICBidWlsZEZsZWV0Qm9hcmQodGhpcy5odW1hbi5nYW1lYm9hcmQuYm9hcmQsICdodW1hbicpXG4gICAgICAgICAgICB0aGlzLmVuZFR1cm4oKTtcbiAgICAgICAgICAgIHRoaXMucGxheUdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZFR1cm4oKSB7XG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy5hdHRhY2s7XG4gICAgICAgIHRoaXMuYXR0YWNrID0gdGhpcy5kZWZlbmQ7XG4gICAgICAgIHRoaXMuZGVmZW5kID0gdGVtcDtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJ1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmJ1aWxkQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuYWRkU2hpcHMoKTtcbiAgICAgICAgdGhpcy5mbGVldCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy90aGlzLmRlZmF1bHRQbGFjZW1lbnQoKTtcbiAgICB9XG5cbiAgICAvL29yaWdpbmFsbHkgdXNlZCBhIHN0YW5kYXJkIGFycmF5IGhvd2V2ZXIgJ21hcCcgbWFkZSByZWZlcmVuY2luZy91cGRhdGluZyBzcXVhcmVzIHNpbXBsZXJcbiAgICBidWlsZEJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAobGV0IHg9MDsgeDwxMDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5PTA7IHk8MTA7IHkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkLnNldChbeCx5XS50b1N0cmluZygpLCdlbXB0eScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgXG4gICAgYWRkU2hpcHMoKSB7XG4gICAgICAgIGxldCBzaGlwcyA9IFtdO1xuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdjYXJyaWVyJywgNSkpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnZGVzdHJveWVyJywgMykpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ3N1Ym1hcmluZScsIDMpKVxuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdwYXRyb2wgYm9hdCcsIDIpKVxuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY2hlY2tTcGFjZSh4cG9zLCB5cG9zKSB7ICAgIFxuICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5ib2FyZC5nZXQoYCR7eHBvc30sJHt5cG9zfWApO1xuICAgICAgICBpZiAoc3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnb2ZmIGJvYXJkJ1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtzdGF0dXN9YFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZERyb3AobGVuZ3RoLCB4cG9zLCB5cG9zLCBvcmllbnQsIHZhbGlkRHJvcD10cnVlKSB7XG4gICAgICAgIGZvciAobGV0IHg9MDsgeDxsZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZsZWV0aHVtYW4ke3hwb3N9JHt5cG9zfWApXG4gICAgICAgICAgICBpZiAoc3F1YXJlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsaWREcm9wPWZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuY2hlY2tTcGFjZSh4cG9zLCB5cG9zKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgIT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgICAgICB2YWxpZERyb3A9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmllbnQgPyB4cG9zKysgOiB5cG9zKys7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWREcm9wXG4gICAgfVxuICAgIC8vb3JpZ2luYWxseSBoYWQgdmVyeSBzaW1pbGFyIGhvci92ZXJ0IGZ1bmN0aW9ucywgdGVybmVyeSBvcGVyYXRvciBvbiAnb3JpZW50YXRpb24nIG5lYXRlciByZWZhY3RvclxuICAgIHBsYWNlU2hpcChpbmRleCwgbGVuZ3RoLCB4cG9zLCB5cG9zLCBvcmllbnQpIHtcbiAgICAgICAgbGV0IHRlbXB4ID0geHBvcztcbiAgICAgICAgbGV0IHRlbXB5ID0geXBvcztcbiAgICAgICAgZm9yIChsZXQgeD0xOyB4PD1sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuY2hlY2tTcGFjZSh0ZW1weCwgdGVtcHkpO1xuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmllbnQgPyB0ZW1weCsrIDogdGVtcHkrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB5PTE7IHk8PWxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5zZXQoYCR7eHBvc30sJHt5cG9zfWAsIGluZGV4KTtcbiAgICAgICAgICAgIG9yaWVudCA/IHhwb3MrKyA6IHlwb3MrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsZWV0Kys7XG4gICAgfVxuICAgICBcbiAgICByZWNlaXZlQXR0YWNrKHhwb3MsIHlwb3MpIHtcbiAgICAgICAgbGV0IHNwYWNlID0gdGhpcy5jaGVja1NwYWNlKHhwb3MsIHlwb3MpO1xuICAgICAgICBpZiAoc3BhY2UgPT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGAke3hwb3N9LCR7eXBvc31gLCAnbWlzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNwYWNlID09PSAnaGl0JyB8fCBzcGFjZSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3BhY2UpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5zZXQoYCR7eHBvc30sJHt5cG9zfWAsICdoaXQnKVxuICAgICAgICAgICAgdGhpcy5zaGlwc1tzcGFjZV0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NwYWNlXS5zdW5rID8gdGhpcy5mbGVldC0tIDogJyc7XG4gICAgICAgICAgICB0aGlzLmZsZWV0ID09PSAwID8gY29udHJvbGxlci5nYW1lT3ZlcihgSnVtIGhhcyB3b24gdGhlIGJhdHRsZWApOiAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkZWZhdWx0IHBsYWNlbWVudCBvZiBmbGVldCB0byBmb2N1cyBvbiBET00gLyBnYW1lcGxheVxuICAgIGRlZmF1bHRQbGFjZW1lbnQoKSB7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDAsIDUsIDAsIDAsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCgxLCA0LCAyLCAxLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDIsIDMsIDUsIDQsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCgzLCAyLCA3LCA3LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDQsIDEsIDksIDksIHRydWUpO1xuICAgIH1cbn1cblxuLy9jb25zdCBnYW1lID0gbmV3IEdhbWVib2FyZCgpO1xuZXhwb3J0IGNvbnN0IHRlc3RzaGlwID0gbmV3IFNoaXAoJ3Rlc3RzaGlwJywgNCk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHtidWlsZFBhZ2UsIGJ1aWxkRmxlZXRCb2FyZCwgYnVpbGRNb3Zlc0JvYXJkfSBmcm9tICcuL2RvbS9kb21idWlsZCdcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vZG9tL2RvbWNvbnRyb2xsZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgQUljb250cm9sIGZyb20gJy4vYWknO1xuaW1wb3J0IENhcnJpZXIgZnJvbSAnLi4vaW1hZ2VzL2NhcnJpZXIucG5nJ1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJ1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuLi9pbWFnZXMvZGVzdHJveWVyLnBuZydcbmltcG9ydCBTdWJtYXJpbmUgZnJvbSAnLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnXG5pbXBvcnQgUGF0cm9sQm9hdCBmcm9tICcuLi9pbWFnZXMvcGF0cm9sYm9hdC5wbmcnXG5cblxuYnVpbGRQYWdlKCk7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IERPTUNvbnRyb2xsZXI7XG5jb25zdCBnYW1lID0gbmV3IEdhbWU7XG5cbmNvbnN0IGFpQ29udHJvbCA9IG5ldyBBSWNvbnRyb2w7XG5jb25zb2xlLmxvZyhnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCk7XG5jb25zb2xlLmxvZyhnYW1lLmFpLmdhbWVib2FyZC5ib2FyZCk7XG5cbmJ1aWxkRmxlZXRCb2FyZChnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCwgJ2h1bWFuJyk7XG5idWlsZE1vdmVzQm9hcmQoZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQsICdodW1hbicpO1xuY29udHJvbGxlci5sb2FkU2hpcFBsYWNlbWVudCgpO1xuXG5leHBvcnQge2dhbWUsIGNvbnRyb2xsZXIsIGFpQ29udHJvbH0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJ1xuaW1wb3J0IEFJY29udHJvbCBmcm9tICcuL2FpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5haSA9IGNvbnRyb2wsXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChuYW1lKTtcbiAgICAgICAgdGhpcy5wbGFjZWRTaGlwcyA9IDU7XG4gICAgfVxuXG4gICAgYWlUdXJuKCkge1xuXG4gICAgfVxufSBcblxuXG5cbi8vaHVtYW4gYW5kIGFpIHBsYWNlbWVudHMgdG8gY29tZSBsYXRlciIsImltcG9ydCB7IGdhbWUsIGNvbnRyb2xsZXIgfSBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdHMgPSAwLCBzdW5rID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4gICAgICAgIHRoaXMuc3VuayA9IHN1bms7XG4gICAgfSBcbiAgICBcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrXG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgICAgIHRoaXMuc3VuayA/IHRoaXMuc2hpcFN1bmsoKTonJztcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuc3VuayA9IHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNoaXBTdW5rKCkge1xuICAgICAgICBjb250cm9sbGVyLmFsZXJ0KGAke2dhbWUuYXR0YWNrLm5hbWV9IHN1bmsgJHtnYW1lLmRlZmVuZC5uYW1lfSdzICR7dGhpcy5uYW1lfWApXG4gICAgICAgIC8vY29udHJvbGxlci5zdW5rU2hpcCh0aGlzLm5hbWUpO1xuICAgIH1cbn1cblxuXG5cblxuLyogY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKCdiYXR0bGVzaGlwJywgNSk7XG5jb25zb2xlLmxvZyhiYXR0bGVzaGlwLm5hbWUpO1xuY29uc29sZS5sb2coYmF0dGxlc2hpcC5sZW5ndGgpO1xuY29uc29sZS5sb2coYmF0dGxlc2hpcClcbiAqL1xuXG4vL3NoaXBTdW5rKHRoaXMubmFtZSk6IHRoaXMuc3Vuaz1mYWxzZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vbW9kdWxlcydcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuY29uc29sZS5sb2coZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
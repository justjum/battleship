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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'ITC-Machine';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    background-color: rgb(5, 75, 133);
    display: flex;
    justify-content: center;
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
    color: slategrey;
    font-size: 80px;
    margin: 0;
    display: flex;
    justify-content: center;
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
    opacity: 0.7;
}

.alert-box {
    position: absolute;
    display: none;
    background-color: white;
    padding: 20px;
    opacity: 1;
    top: 100px;
    left: 100px;
    right: 100px;
    z-index: 5;
}

.instructions {
    position: absolute;
    background-color: white;
    padding: 20px;
    opacity: 1;
    top: 100px;
    left: 100px;
    right: 100px;
    z-index: 3;
}

.required {
    border-color: coral;
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


.compass {
    width: 200px;
    position: absolute;
    right: 50px;
    bottom: 50px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAA6C;AACjD;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,0BAA0B;IAC1B,wBAAwB;IACxB,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,4BAA4B;IAC5B,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,UAAU;IACV,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,4BAA4B;IAC5B,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;;AAGA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,oCAAoC;IACpC,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["@font-face {\n    font-family: 'ITC-Machine';\n    src: url(./fonts/ITC\\ Machine\\ Std\\ Bold.otf);\n}\n\nbody {\n    background-color: rgb(5, 75, 133);\n    display: flex;\n    justify-content: center;\n}\n\n.grey-out {\n    display: flex;\n    background-color: lightslategray;\n    opacity: 0.5;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 3;\n}\n\nh1 {\n    font-family: 'ITC-Machine';\n    outline: rgb(47, 54, 61);\n    color: slategrey;\n    font-size: 80px;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.section {\n    border: black solid 1px;\n    background-color: whitesmoke;\n    width: 750px;\n    height: auto;\n    display: flex;\n    position: relative;\n}\n\n.gameboard {\n    border: red solid 1px;\n    width: 400px;\n    height: 400px;\n    margin: 10px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.icon {\n    width: 38px;\n}\n\n#aisection {\n    position: relative;\n    opacity: 0.7;\n}\n\n.alert-box {\n    position: absolute;\n    display: none;\n    background-color: white;\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 5;\n}\n\n.instructions {\n    position: absolute;\n    background-color: white;\n    padding: 20px;\n    opacity: 1;\n    top: 100px;\n    left: 100px;\n    right: 100px;\n    z-index: 3;\n}\n\n.required {\n    border-color: coral;\n}\n\n\n.fleetsquare, .movesquare {\n    outline: steelblue solid 1px;\n    background-color: rgb(144, 205, 255);\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.compass {\n    width: 200px;\n    position: absolute;\n    right: 50px;\n    bottom: 50px;\n}\n\n.ship-select {\n    display: flex;\n    flex-direction: column;\n}\n\n.ship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.aiship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.ship-square {\n    outline: steelblue solid 1px;\n    background-color: rgb(144, 205, 255);\n    width: 40px;\n    height: 40px;\n}\n\n.dragging {\n    background-color: rgb(165, 147, 42);\n}\n\n.allowed {\n    background-color: lightgreen;\n}\n\n.disallowed {\n    background-color: lightcoral;\n}\n\n.placedship {\n    opacity: 0.5;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n}\n"],"sourceRoot":""}]);
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

    placeFleet(fleet=5, index=0, length=5) {
        while (fleet>0) {
            console.log('aiplacing')
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














function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class='grey-out' id='grey-out'></div>
    <h1>Sink the Ships!</h1>
    <div class='container' id='container'>
        <div class='section' id='humansection'>
            <div class='alert-box' id='alert-box'>
                <h2 class='alert' id='alert'>Alert</h2>
                <button class='accept-alert' id='accept-alert'>Ok!</button>
            </div>
            <div class='instructions' id='instructions'>
                <p>1. Please enter your name below:</p>
                <input type='text' class='player-name' id='player-name' name='player-name' placeholder='Please enter your name here'>
                <p>2. Drag and drop your fleet onto the gameboard</p>
                <p>3. Click on the compass to adjust the direction of drop</p>
                <button class='playgame' id='playgame'>I'm ready!</button>
            </div>
            <div class='gameboard' id='humanfleet'></div>
            <div class='ship-select' id='ship-select'>
                <img class='ship' draggable='true' id='0carrier' data-length=5 src='${_images_carrier_png__WEBPACK_IMPORTED_MODULE_3__}'>
                <img class='ship' draggable='true' id='1battleship' data-length=4 src='${_images_battleship_png__WEBPACK_IMPORTED_MODULE_4__}'>
                <img class='ship' draggable='true' id='2destroyer' data-length=3 src='${_images_destroyer_png__WEBPACK_IMPORTED_MODULE_5__}'>
                <img class='ship' draggable='true' id='3submarine' data-length=2 src='${_images_submarine_png__WEBPACK_IMPORTED_MODULE_6__}'>
                <img class='ship' draggable='true' id='4patrol-boat' data-length=1 src='${_images_patrolboat_png__WEBPACK_IMPORTED_MODULE_7__}'>
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
            let icon = document.createElement('img');
            icon.setAttribute('src', a);
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
            square.innerHTML = `<img class='icon' src=${_images_hit_png__WEBPACK_IMPORTED_MODULE_10__}>`
        }
        else if (a === 'miss') {
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
            if (square.innerHTML === 'H' || square.innerHTML === 'M') {
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
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('submarine', 2))
        ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]('patrol boat', 1))
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
            this.fleet === 0 ? alert('Game Over'): '';
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
        alert(`${_index__WEBPACK_IMPORTED_MODULE_0__.game.attack.name} sunk ${_index__WEBPACK_IMPORTED_MODULE_0__.game.defend.name}'s ${this.name}`)
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

module.exports = __webpack_require__.p + "389f456186e1a506d411.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "203c7417092503408590.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDRjs7QUFFZTs7QUFFakMsaUJBQWlCLHFEQUFJO0FBQ3JCLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21idWlsZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2RvbWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSVRDIE1hY2hpbmUgU3RkIEJvbGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0lUQy1NYWNoaW5lJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDc1LCAxMzMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmV5LW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6ICdJVEMtTWFjaGluZSc7XG4gICAgb3V0bGluZTogcmdiKDQ3LCA1NCwgNjEpO1xuICAgIGNvbG9yOiBzbGF0ZWdyZXk7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24ge1xuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdhbWVib2FyZCB7XG4gICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDM4cHg7XG59XG5cbiNhaXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5hbGVydC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5yZXF1aXJlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiBjb3JhbDtcbn1cblxuXG4uZmxlZXRzcXVhcmUsIC5tb3Zlc3F1YXJlIHtcbiAgICBvdXRsaW5lOiBzdGVlbGJsdWUgc29saWQgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIwNSwgMjU1KTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5jb21wYXNzIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIGJvdHRvbTogNTBweDtcbn1cblxuLnNoaXAtc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmFpc2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zaGlwLXNxdWFyZSB7XG4gICAgb3V0bGluZTogc3RlZWxibHVlIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMDUsIDI1NSk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZHJhZ2dpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE0NywgNDIpO1xufVxuXG4uYWxsb3dlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmRpc2FsbG93ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi5wbGFjZWRzaGlwIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJVEMtTWFjaGluZSc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvSVRDXFxcXCBNYWNoaW5lXFxcXCBTdGRcXFxcIEJvbGQub3RmKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCA3NSwgMTMzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmV5LW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogJ0lUQy1NYWNoaW5lJztcXG4gICAgb3V0bGluZTogcmdiKDQ3LCA1NCwgNjEpO1xcbiAgICBjb2xvcjogc2xhdGVncmV5O1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbn1cXG5cXG4jYWlzZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5hbGVydC1ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMTAwcHg7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnJlcXVpcmVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBjb3JhbDtcXG59XFxuXFxuXFxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XFxuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIwNSwgMjU1KTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5jb21wYXNzIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbiAgICBib3R0b206IDUwcHg7XFxufVxcblxcbi5zaGlwLXNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWlzaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgICBvdXRsaW5lOiBzdGVlbGJsdWUgc29saWQgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMDUsIDI1NSk7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE0NywgNDIpO1xcbn1cXG5cXG4uYWxsb3dlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5kaXNhbGxvd2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnBsYWNlZHNoaXAge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUljb250cm9sIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCA9ICdlYXN5Jykge1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMubW92ZXMgPSB0aGlzLmJ1aWxkTW92ZU1hcCgpO1xuICAgICAgICB0aGlzLnBsYWNlRmxlZXQoKTtcblxuICAgIH1cblxuICAgIHBsYWNlRmxlZXQoZmxlZXQ9NSwgaW5kZXg9MCwgbGVuZ3RoPTUpIHtcbiAgICAgICAgd2hpbGUgKGZsZWV0PjApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhaXBsYWNpbmcnKVxuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnJhbmRvbUludGVnZXIoKTtcbiAgICAgICAgICAgIGxldCB6ID0gdGhpcy5yYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgICAgICBsZXQgb3JpZW50ID0gdGhpcy5yYW5kb21PcmllbnQoKTtcbiAgICAgICAgICAgIGlmIChnYW1lLmFpLmdhbWVib2FyZC5wbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeSwgeiwgb3JpZW50KSAhPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGdhbWUuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChpbmRleCwgbGVuZ3RoLCB5LCB6LCBvcmllbnQpO1xuICAgICAgICAgICAgICAgIGZsZWV0LS07XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRNb3ZlTWFwKCkge1xuICAgICAgICBsZXQgbW92ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PDEwOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHk9MDsgeTwxMDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbW92ZU1hcC5zZXQoW3gseV0udG9TdHJpbmcoKSwndW5wbGF5ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZU1hcDtcbiAgICB9XG5cbiAgICByYW5kb21TcXVhcmUoKSB7XG4gICAgICAgIGxldCB4PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCB5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIHJldHVybiBgJHt4fSwke3l9YFxuICAgIH1cblxuICAgIHJhbmRvbUludGVnZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgIH1cblxuICAgIHJhbmRvbU9yaWVudCgpIHtcbiAgICAgICAgbGV0IHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICByZXR1cm4geD4wID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZpbmRVbnBsYXllZFNxdWFyZShjaGVja2VkID0gbmV3IE1hcCwgc3F1YXJlPXRoaXMucmFuZG9tU3F1YXJlKCksIHN0YXR1cykge1xuICAgICAgICBzdGF0dXMgPSB0aGlzLm1vdmVzLmdldChzcXVhcmUudG9TdHJpbmcoKSlcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3VucGxheWVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGVja2VkLmdldChzcXVhcmUudG9TdHJpbmcoKSA9PT0gJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgYWxlcnQoJ3RoaXMnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tlZC5zZXQoc3F1YXJlLnRvU3RyaW5nKCksICdjaGVja2VkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRVbnBsYXllZFNxdWFyZShjaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFpbW92ZSgpIHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZmluZFVucGxheWVkU3F1YXJlKCk7XG4gICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9nYW1lYm9hcmQnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcidcbmltcG9ydCB7IHBsYWNlU2hpcCwgZHJhZ292ZXIgfSBmcm9tICcuL2RvbWNvbnRyb2xsZXInO1xuaW1wb3J0IENhcnJpZXIgZnJvbSAnLi4vLi4vaW1hZ2VzL2NhcnJpZXIucG5nJ1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi4vLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJ1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuLi8uLi9pbWFnZXMvZGVzdHJveWVyLnBuZydcbmltcG9ydCBTdWJtYXJpbmUgZnJvbSAnLi4vLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnXG5pbXBvcnQgUGF0cm9sQm9hdCBmcm9tICcuLi8uLi9pbWFnZXMvcGF0cm9sYm9hdC5wbmcnXG5pbXBvcnQgQ29tcGFzc3ggZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbXBhc3N4LnBuZydcbmltcG9ydCBNaXNzIGZyb20gJy4uLy4uL2ltYWdlcy9taXNzLnBuZydcbmltcG9ydCBIaXQgZnJvbSAnLi4vLi4vaW1hZ2VzL2hpdC5wbmcnXG5leHBvcnQge2J1aWxkUGFnZSwgYnVpbGRGbGVldEJvYXJkLCBidWlsZE1vdmVzQm9hcmR9XG5cblxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2dyZXktb3V0JyBpZD0nZ3JleS1vdXQnPjwvZGl2PlxuICAgIDxoMT5TaW5rIHRoZSBTaGlwcyE8L2gxPlxuICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcicgaWQ9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J3NlY3Rpb24nIGlkPSdodW1hbnNlY3Rpb24nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWxlcnQtYm94JyBpZD0nYWxlcnQtYm94Jz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9J2FsZXJ0JyBpZD0nYWxlcnQnPkFsZXJ0PC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdhY2NlcHQtYWxlcnQnIGlkPSdhY2NlcHQtYWxlcnQnPk9rITwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnN0cnVjdGlvbnMnIGlkPSdpbnN0cnVjdGlvbnMnPlxuICAgICAgICAgICAgICAgIDxwPjEuIFBsZWFzZSBlbnRlciB5b3VyIG5hbWUgYmVsb3c6PC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0ncGxheWVyLW5hbWUnIGlkPSdwbGF5ZXItbmFtZScgbmFtZT0ncGxheWVyLW5hbWUnIHBsYWNlaG9sZGVyPSdQbGVhc2UgZW50ZXIgeW91ciBuYW1lIGhlcmUnPlxuICAgICAgICAgICAgICAgIDxwPjIuIERyYWcgYW5kIGRyb3AgeW91ciBmbGVldCBvbnRvIHRoZSBnYW1lYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgPHA+My4gQ2xpY2sgb24gdGhlIGNvbXBhc3MgdG8gYWRqdXN0IHRoZSBkaXJlY3Rpb24gb2YgZHJvcDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdwbGF5Z2FtZScgaWQ9J3BsYXlnYW1lJz5JJ20gcmVhZHkhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dhbWVib2FyZCcgaWQ9J2h1bWFuZmxlZXQnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2hpcC1zZWxlY3QnIGlkPSdzaGlwLXNlbGVjdCc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nc2hpcCcgZHJhZ2dhYmxlPSd0cnVlJyBpZD0nMGNhcnJpZXInIGRhdGEtbGVuZ3RoPTUgc3JjPScke0NhcnJpZXJ9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPScxYmF0dGxlc2hpcCcgZGF0YS1sZW5ndGg9NCBzcmM9JyR7QmF0dGxlc2hpcH0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzJkZXN0cm95ZXInIGRhdGEtbGVuZ3RoPTMgc3JjPScke0Rlc3Ryb3llcn0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzNzdWJtYXJpbmUnIGRhdGEtbGVuZ3RoPTIgc3JjPScke1N1Ym1hcmluZX0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzRwYXRyb2wtYm9hdCcgZGF0YS1sZW5ndGg9MSBzcmM9JyR7UGF0cm9sQm9hdH0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2NvbXBhc3MnIGlkPSdjb21wYXNzJyBzcmM9JyR7Q29tcGFzc3h9Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2VjdGlvbicgaWQ9J2Fpc2VjdGlvbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdodW1hbm1vdmVzJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NoaXAtc2VsZWN0JyBpZD0nc2hpcC1haSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWljYXJyaWVyJyBzcmM9JyR7Q2Fycmllcn0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2FpYmF0dGxlc2hpcCcgc3JjPScke0JhdHRsZXNoaXB9Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdhaXNoaXAnIGRyYWdnYWJsZT0nZmFsc2UnIGlkPSdhaWRlc3Ryb3llcicgc3JjPScke0Rlc3Ryb3llcn0nPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2Fpc3VibWFyaW5lJyBzcmM9JyR7U3VibWFyaW5lfSc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWlwYXRyb2xib2F0JyBzcmM9JyR7UGF0cm9sQm9hdH0nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Zvb3Rlcic+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9zZXQtc2lsaG91ZXR0ZXMtbmF2YWwtc2hpcHNfMTEwNTI5MjguaHRtI3F1ZXJ5PXdhcnNoaXAmcG9zaXRpb249MCZmcm9tX3ZpZXc9a2V5d29yZCZ0cmFjaz1zcGgmdXVpZD05NjRhN2M5Ni1lZWYxLTQ4NWItYWUyZC02OGEzNDYzZTFhMDNcIj5CYXR0bGVzaGlwIEltYWdlcyBieSBtYWNyb3ZlY3RvciBvbiBGcmVlcGlrPC9hPlxuICAgIDwvZGl2PlxuICAgIGBcbn1cblxuZnVuY3Rpb24gYnVpbGRGbGVldEJvYXJkKGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9ZmxlZXRgKTtcbiAgICBnYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2FyZC5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBjb29yZHMgPSBiLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIilcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZsZWV0c3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGZsZWV0JHtwbGF5ZXJ9JHtjb29yZHN9YClcbiAgICAgICAgaWYgKGEgIT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYSk7XG4gICAgICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTW92ZXNCb2FyZChib2FyZCwgcGxheWVyKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfW1vdmVzYCk7XG4gICAgZ2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hcmQuZm9yRWFjaCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gYi5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb3Zlc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYG1vdmUke3BsYXllcn0ke2Nvb3Jkc31gIClcbiAgICAgICAgaWYgKGEgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9J2ljb24nIHNyYz0ke0hpdH0+YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGEgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPSdpY29uJyBzcmM9JHtNaXNzfT5gXG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH0pXG59XG4iLCJpbXBvcnQge2dhbWUsIGNvbnRyb2xsZXJ9IGZyb20gJy4uL2luZGV4J1xuaW1wb3J0IHsgYnVpbGRNb3Zlc0JvYXJkLCBidWlsZEZsZWV0Qm9hcmQgfSBmcm9tICcuL2RvbWJ1aWxkJztcbmltcG9ydCBDb21wYXNzeCBmcm9tICcuLi8uLi9pbWFnZXMvY29tcGFzc3gucG5nJ1xuaW1wb3J0IENvbXBhc3N5IGZyb20gJy4uLy4uL2ltYWdlcy9jb21wYXNzeS5wbmcnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3Iob3JpZW50PXRydWUpIHtcbiAgICAgICAgdGhpcy5vcmllbnQgPSBvcmllbnQ7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFjY2VwdEluc3RydWN0aW9ucygpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlnYW1lJykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZScpO1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5odW1hbi5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUdyZXkoJ25vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUdyZXkodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZ3JleU91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmV5LW91dCcpO1xuICAgICAgICBncmV5T3V0LnN0eWxlLmRpc3BsYXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlR3JleSgnZmxleCcpO1xuICAgICAgICBjb25zdCBhbGVydEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydC1ib3gnKTtcbiAgICAgICAgYWxlcnRCb3guY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgYWxlcnRCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbiAgICBhbGVydExpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0LWFsZXJ0Jykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0QWxlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjY2VwdEFsZXJ0KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUdyZXkoJ25vbmUnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LWJveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBsb2FkU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZHJhZ1NoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgICAgICBkcmFnU2hpcC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KTsgXG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuY29tcGFzc0V2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hY2NlcHRJbnN0cnVjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hbGVydExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgZmxlZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZmxlZXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxlZXRzcXVhcmUnKTtcbiAgICAgICAgZmxlZXRTcXVhcmUuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcEV2ZW50SGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYWdTdGFydChldmVudCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJylcbiAgICB9XG5cbiAgICBkcmFnRW5kKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIH1cblxuICAgIGRyYWdPdmVyRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJylcbiAgICAgICAgbGV0IGxlbmd0aCA9IGRyYWdnaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1sZW5ndGgnKTtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKTtcbiAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICBsZXQgdmFsaWREcm9wID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmNoZWNrVmFsaWREcm9wKGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFsaWREcm9wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5jb2xvckRyb3BTcXVhcmVzKHhwb3MsIHlwb3MsIGxlbmd0aCwgdmFsaWREcm9wKVxuICAgIH1cblxuICAgIGNvbG9yRHJvcFNxdWFyZXMoeHBvcywgeXBvcywgbGVuZ3RoLCB2YWxpZERyb3ApIHtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmxlZXRodW1hbiR7eHBvc30ke3lwb3N9YClcbiAgICAgICAgICAgIGlmIChzcXVhcmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YWxpZERyb3AgPyBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYWxsb3dlZCcpIDogc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FsbG93ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udHJvbGxlci5vcmllbnQgPyB4cG9zKysgOiB5cG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSAgICBcblxuICAgIGRyYWdMZWF2ZUV2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb250cm9sbGVyLmRlY29sb3JEcm9wU3F1YXJlcygpXG4gICAgfVxuXG4gICAgZGVjb2xvckRyb3BTcXVhcmVzKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGVldHNxdWFyZScpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdhbGxvd2VkJyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWxsb3dlZCcpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB9O1xuXG4gICAgZHJvcEV2ZW50SGFuZGxlcihldmVudCwgZmxlZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZHJhZ2dpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKVxuICAgICAgICBsZXQgaW5kZXggPSBkcmFnZ2luZy5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpO1xuICAgICAgICBsZXQgY29vcmRzID0gdGhpcy5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGxldCBsZW5ndGggPSBkcmFnZ2luZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuZ3RoJyk7XG4gICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgaWYgKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmNoZWNrVmFsaWREcm9wKGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lLmh1bWFuLmdhbWVib2FyZC5wbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpXG4gICAgICAgICAgICBidWlsZEZsZWV0Qm9hcmQoZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQsICdodW1hbicpO1xuICAgICAgICAgICAgZHJhZ2dpbmcuY2xhc3NMaXN0LmFkZCgncGxhY2Vkc2hpcCcpO1xuICAgICAgICAgICAgZHJhZ2dpbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpXG4gICAgICAgICAgICBkcmFnZ2luZy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdFbmQsIGZhbHNlKVxuICAgICAgICAgICAgZHJhZ2dpbmcuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSlcbiAgICAgICAgICAgIGdhbWUuaHVtYW4ucGxhY2VkU2hpcHMtLVxuICAgICAgICB9XG4gICAgICAgIGlmIChnYW1lLmh1bWFuLnBsYWNlZFNoaXBzID4gMCkge1xuICAgICAgICAgICAgY29udHJvbGxlci5mbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFsZXJ0KGBMZXQncyBnbyFgKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fpc2VjdGlvbicpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFzc0V2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFzcycpO1xuICAgICAgICBjb21wYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMub3JpZW50ID0gIXRoaXMub3JpZW50O1xuICAgICAgICAgICAgbGV0IGNvbXBhc3NJbWFnZSA9IHRoaXMub3JpZW50ID8gQ29tcGFzc3ggOiBDb21wYXNzeTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBhc3NJbWFnZSlcbiAgICAgICAgICAgIGNvbXBhc3Muc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtjb21wYXNzSW1hZ2V9YClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnYW1lcGxheUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBtb3ZlU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vdmVzcXVhcmUnKTtcbiAgICAgICAgbW92ZVNxdWFyZS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuaW5uZXJIVE1MID09PSAnSCcgfHwgc3F1YXJlLmlubmVySFRNTCA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBzcXVhcmUuaWQucmVwbGFjZSgvW15hLXpdL2lnLCBcIlwiKVxuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBzcXVhcmUuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICAgICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgIGdhbWUuYWkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeHBvcyx5cG9zKVxuICAgICAgICAgICAgICAgIGJ1aWxkTW92ZXNCb2FyZChnYW1lLmFpLmdhbWVib2FyZC5ib2FyZCwgYGh1bWFuYCApXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmRUdXJuKCk7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufVxuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2R1bGVzL3BsYXllcidcbmltcG9ydCB7Y29udHJvbGxlciwgYWlDb250cm9sfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9kb20vZG9tY29udHJvbGxlcic7XG5pbXBvcnQgeyBidWlsZEZsZWV0Qm9hcmQgfSBmcm9tICcuL2RvbS9kb21idWlsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmh1bWFuID0gbmV3IFBsYXllcignQW5vbnltb3VzJywgZmFsc2UpO1xuICAgICAgICB0aGlzLmFpID0gbmV3IFBsYXllcignQmF0dGxlYm90JywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXR0YWNrID0gdGhpcy5odW1hbjtcbiAgICAgICAgdGhpcy5kZWZlbmQgPSB0aGlzLmFpO1xuICAgIH1cblxuICAgIHBsYXlHYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2sgPT09IHRoaXMuaHVtYW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2FtZXBsYXlFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGFpQ29udHJvbC5haW1vdmUoKTtcbiAgICAgICAgICAgIGFpQ29udHJvbC5tb3Zlcy5zZXQoc3F1YXJlLCAncGxheWVkJylcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBzcXVhcmUucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgICAgIHRoaXMuaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeHBvcyx5cG9zKVxuICAgICAgICAgICAgYnVpbGRGbGVldEJvYXJkKHRoaXMuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKVxuICAgICAgICAgICAgdGhpcy5lbmRUdXJuKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmRUdXJuKCkge1xuICAgICAgICBsZXQgdGVtcCA9IHRoaXMuYXR0YWNrO1xuICAgICAgICB0aGlzLmF0dGFjayA9IHRoaXMuZGVmZW5kO1xuICAgICAgICB0aGlzLmRlZmVuZCA9IHRlbXA7XG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuYnVpbGRCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5hZGRTaGlwcygpO1xuICAgICAgICB0aGlzLmZsZWV0ID0gMDtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMuZGVmYXVsdFBsYWNlbWVudCgpO1xuICAgIH1cblxuICAgIC8vb3JpZ2luYWxseSB1c2VkIGEgc3RhbmRhcmQgYXJyYXkgaG93ZXZlciAnbWFwJyBtYWRlIHJlZmVyZW5jaW5nL3VwZGF0aW5nIHNxdWFyZXMgc2ltcGxlclxuICAgIGJ1aWxkQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PDEwOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHk9MDsgeTwxMDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQuc2V0KFt4LHldLnRvU3RyaW5nKCksJ2VtcHR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBcbiAgICBhZGRTaGlwcygpIHtcbiAgICAgICAgbGV0IHNoaXBzID0gW107XG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ2NhcnJpZXInLCA1KSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnYmF0dGxlc2hpcCcsIDQpKVxuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdkZXN0cm95ZXInLCAzKSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnc3VibWFyaW5lJywgMikpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ3BhdHJvbCBib2F0JywgMSkpXG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjaGVja1NwYWNlKHhwb3MsIHlwb3MpIHsgICAgXG4gICAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmJvYXJkLmdldChgJHt4cG9zfSwke3lwb3N9YCk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICdvZmYgYm9hcmQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3N0YXR1c31gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1ZhbGlkRHJvcChsZW5ndGgsIHhwb3MsIHlwb3MsIG9yaWVudCwgdmFsaWREcm9wPXRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmxlZXRodW1hbiR7eHBvc30ke3lwb3N9YClcbiAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YWxpZERyb3A9ZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5jaGVja1NwYWNlKHhwb3MsIHlwb3MpO1xuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgICAgIHZhbGlkRHJvcD1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yaWVudCA/IHhwb3MrKyA6IHlwb3MrKztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZERyb3BcbiAgICB9XG4gICAgLy9vcmlnaW5hbGx5IGhhZCB2ZXJ5IHNpbWlsYXIgaG9yL3ZlcnQgZnVuY3Rpb25zLCB0ZXJuZXJ5IG9wZXJhdG9yIG9uICdvcmllbnRhdGlvbicgbmVhdGVyIHJlZmFjdG9yXG4gICAgcGxhY2VTaGlwKGluZGV4LCBsZW5ndGgsIHhwb3MsIHlwb3MsIG9yaWVudCkge1xuICAgICAgICBsZXQgdGVtcHggPSB4cG9zO1xuICAgICAgICBsZXQgdGVtcHkgPSB5cG9zO1xuICAgICAgICBmb3IgKGxldCB4PTE7IHg8PWxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5jaGVja1NwYWNlKHRlbXB4LCB0ZW1weSk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAnZW1wdHknKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9jaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yaWVudCA/IHRlbXB4KysgOiB0ZW1weSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHk9MTsgeTw9bGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgJHt4cG9zfSwke3lwb3N9YCwgaW5kZXgpO1xuICAgICAgICAgICAgb3JpZW50ID8geHBvcysrIDogeXBvcysrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxlZXQrKztcbiAgICB9XG4gICAgIFxuICAgIHJlY2VpdmVBdHRhY2soeHBvcywgeXBvcykge1xuICAgICAgICBsZXQgc3BhY2UgPSB0aGlzLmNoZWNrU3BhY2UoeHBvcywgeXBvcyk7XG4gICAgICAgIGlmIChzcGFjZSA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5zZXQoYCR7eHBvc30sJHt5cG9zfWAsICdtaXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3BhY2UgPT09ICdoaXQnIHx8IHNwYWNlID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcGFjZSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgJHt4cG9zfSwke3lwb3N9YCwgJ2hpdCcpXG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NwYWNlXS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc3BhY2VdLnN1bmsgPyB0aGlzLmZsZWV0LS0gOiAnJztcbiAgICAgICAgICAgIHRoaXMuZmxlZXQgPT09IDAgPyBhbGVydCgnR2FtZSBPdmVyJyk6ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlZmF1bHQgcGxhY2VtZW50IG9mIGZsZWV0IHRvIGZvY3VzIG9uIERPTSAvIGdhbWVwbGF5XG4gICAgZGVmYXVsdFBsYWNlbWVudCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMCwgNSwgMCwgMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDEsIDQsIDIsIDEsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMiwgMywgNSwgNCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDMsIDIsIDcsIDcsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoNCwgMSwgOSwgOSwgdHJ1ZSk7XG4gICAgfVxufVxuXG4vL2NvbnN0IGdhbWUgPSBuZXcgR2FtZWJvYXJkKCk7XG5leHBvcnQgY29uc3QgdGVzdHNoaXAgPSBuZXcgU2hpcCgndGVzdHNoaXAnLCA0KTtcblxuXG5cblxuXG4iLCJpbXBvcnQge2J1aWxkUGFnZSwgYnVpbGRGbGVldEJvYXJkLCBidWlsZE1vdmVzQm9hcmR9IGZyb20gJy4vZG9tL2RvbWJ1aWxkJ1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9kb20vZG9tY29udHJvbGxlcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBBSWNvbnRyb2wgZnJvbSAnLi9haSc7XG5pbXBvcnQgQ2FycmllciBmcm9tICcuLi9pbWFnZXMvY2Fycmllci5wbmcnXG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcnXG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4uL2ltYWdlcy9kZXN0cm95ZXIucG5nJ1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcuLi9pbWFnZXMvc3VibWFyaW5lLnBuZydcbmltcG9ydCBQYXRyb2xCb2F0IGZyb20gJy4uL2ltYWdlcy9wYXRyb2xib2F0LnBuZydcblxuXG5idWlsZFBhZ2UoKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgRE9NQ29udHJvbGxlcjtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZTtcblxuY29uc3QgYWlDb250cm9sID0gbmV3IEFJY29udHJvbDtcbmNvbnNvbGUubG9nKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkKTtcbmNvbnNvbGUubG9nKGdhbWUuYWkuZ2FtZWJvYXJkLmJvYXJkKTtcblxuYnVpbGRGbGVldEJvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbmJ1aWxkTW92ZXNCb2FyZChnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCwgJ2h1bWFuJyk7XG5jb250cm9sbGVyLmxvYWRTaGlwUGxhY2VtZW50KCk7XG5cbmV4cG9ydCB7Z2FtZSwgY29udHJvbGxlciwgYWlDb250cm9sfSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnXG5pbXBvcnQgQUljb250cm9sIGZyb20gJy4vYWknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29udHJvbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFpID0gY29udHJvbCxcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKG5hbWUpO1xuICAgICAgICB0aGlzLnBsYWNlZFNoaXBzID0gNTtcbiAgICB9XG5cbiAgICBhaVR1cm4oKSB7XG5cbiAgICB9XG59IFxuXG5cblxuLy9odW1hbiBhbmQgYWkgcGxhY2VtZW50cyB0byBjb21lIGxhdGVyIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCwgaGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gaGl0cztcbiAgICAgICAgdGhpcy5zdW5rID0gc3VuaztcbiAgICB9IFxuICAgIFxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKytcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICAgICAgdGhpcy5zdW5rID8gdGhpcy5zaGlwU3VuaygpOicnO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgdGhpcy5zdW5rID0gdGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2hpcFN1bmsoKSB7XG4gICAgICAgIGFsZXJ0KGAke2dhbWUuYXR0YWNrLm5hbWV9IHN1bmsgJHtnYW1lLmRlZmVuZC5uYW1lfSdzICR7dGhpcy5uYW1lfWApXG4gICAgfVxufVxuXG5cblxuXG4vKiBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoJ2JhdHRsZXNoaXAnLCA1KTtcbmNvbnNvbGUubG9nKGJhdHRsZXNoaXAubmFtZSk7XG5jb25zb2xlLmxvZyhiYXR0bGVzaGlwLmxlbmd0aCk7XG5jb25zb2xlLmxvZyhiYXR0bGVzaGlwKVxuICovXG5cbi8vc2hpcFN1bmsodGhpcy5uYW1lKTogdGhpcy5zdW5rPWZhbHNlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCAnLi9tb2R1bGVzJ1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL21vZHVsZXMvZ2FtZSdcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5jb25zb2xlLmxvZyhnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
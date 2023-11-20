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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.section {
    border: black solid 1px;
    width: 98%;
    height: auto;
    display: flex;

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

.fleetsquare, .movesquare {
    border: black solid 1px;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fleets {
    display: flex;
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
    width: 40px;
    height: 40px;
}

.dragging {
    background-color: brown;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["\n.section {\n    border: black solid 1px;\n    width: 98%;\n    height: auto;\n    display: flex;\n\n}\n\n.gameboard {\n    border: red solid 1px;\n    width: 400px;\n    height: 400px;\n    margin: 10px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.fleetsquare, .movesquare {\n    border: black solid 1px;\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.fleets {\n    display: flex;\n}\n\n.ship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.aiship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n    height: 40px;\n}\n\n.ship-square {\n    outline: steelblue solid 1px;\n    width: 40px;\n    height: 40px;\n}\n\n.dragging {\n    background-color: brown;\n}\n\n.allowed {\n    background-color: lightgreen;\n}\n\n.disallowed {\n    background-color: lightcoral;\n}\n\n.placedship {\n    opacity: 0.5;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n}\n"],"sourceRoot":""}]);
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











function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Sink the Ships!</h1>
    <div class='section' id='humansection'>
        <div class='gameboard' id='humanfleet'></div>
        <div class='ship-select' id='ship-select'>
        <div class='ship' draggable='true' id='0carrier' data-length=5><img src='${_images_carrier_png__WEBPACK_IMPORTED_MODULE_3__}'></div>
        <div class='ship' draggable='true' id='1battleship' data-length=4><img src='${_images_battleship_png__WEBPACK_IMPORTED_MODULE_4__}'></div>
        <div class='ship' draggable='true' id='2destroyer' data-length=3><img src='${_images_destroyer_png__WEBPACK_IMPORTED_MODULE_5__}'></div>
        <div class='ship' draggable='true' id='3submarine' data-length=2><img src='${_images_submarine_png__WEBPACK_IMPORTED_MODULE_6__}'></div>
        <div class='ship' draggable='true' id='4patrol-boat' data-length=1><img src='${_images_patrolboat_png__WEBPACK_IMPORTED_MODULE_7__}'></div>
    </div>
    </div>
    <div class='section' id='aisection'>
        <div class='gameboard' id='humanmoves'></div>
        <div class='ship-select' id='ship-ai'>
        <div class='aiship' draggable='false' id='aicarrier'><img src='${_images_carrier_png__WEBPACK_IMPORTED_MODULE_3__}'></div>
        <div class='aiship' draggable='false' id='aibattleship'><img src='${_images_battleship_png__WEBPACK_IMPORTED_MODULE_4__}'></div>
        <div class='aiship' draggable='false' id='aidestroyer'><img src='${_images_destroyer_png__WEBPACK_IMPORTED_MODULE_5__}'></div>
        <div class='aiship' draggable='false' id='aisubmarine'><img src='${_images_submarine_png__WEBPACK_IMPORTED_MODULE_6__}'></div>
        <div class='aiship' draggable='false' id='aipatrolboat'><img src='${_images_patrolboat_png__WEBPACK_IMPORTED_MODULE_7__}'></div>
    </div>
    </div>
    <div class='fleets'>


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
            square.innerHTML = a;
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
            square.innerHTML = 'H'
        }
        else if (a === 'miss') {
            square.innerHTML = 'M'
        }
        gameboard.append(square);
    })
}

//ondragstart=alert(id)

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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/modules/player.js");




class DOMController {
    constructor(orient=true) {
        this.orient = orient;
    }

    loadShipPlacement() {
        const dragShip = document.querySelectorAll('.ship');
        dragShip.forEach((ship) => {
            ship.addEventListener('dragstart', this.dragStart); 
            ship.addEventListener('dragend', this.dragEnd);
        });
        this.fleetEventListeners();
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
        _index__WEBPACK_IMPORTED_MODULE_0__.controller.colorDropSquares(xpos, ypos, length, this.orient, validDrop)
    }

    colorDropSquares(xpos, ypos, length, orient, validDrop) {
        for (let x=0; x<length; x++) {
            const square = document.getElementById(`fleethuman${xpos}${ypos}`)
            if (square !== null) {
                validDrop ? square.classList.add('allowed') : square.classList.add('disallowed');
            }
            
            orient ? xpos++ : ypos++;
        }
        
    }    

    dragLeaveEventHandler(event) {
        event.preventDefault();
        _index__WEBPACK_IMPORTED_MODULE_0__.controller.decolorDropSquares()
    }

    decolorDropSquares() {
        const elements = document.querySelectorAll('*');
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
            _index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.placeShip(index, length, xpos, ypos)
            ;(0,_dombuild__WEBPACK_IMPORTED_MODULE_1__.buildFleetBoard)(_index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.board, 'human');
            dragging.removeAttribute('draggable');
            dragging.classList.add('placedship')
            dragging.removeEventListener('dragstart', this.dragstart)
            _index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips--
        }
        if (_index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips > 0) {
            _index__WEBPACK_IMPORTED_MODULE_0__.controller.fleetEventListeners();
        }
        else {
            alert('lets go');
            _index__WEBPACK_IMPORTED_MODULE_0__.game.playGame();
        }
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
        this.human = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('greg', false);
        this.ai = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('battlebot', true);
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
            orient ? ypos++ : xpos++;

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











const controller = new _dom_domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"];
const game = new _game__WEBPACK_IMPORTED_MODULE_2__["default"];

const aiControl = new _ai__WEBPACK_IMPORTED_MODULE_4__["default"];
console.log(game.human.gameboard.board);
console.log(game.ai.gameboard.board);
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildPage)();
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

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "297f67d14b578dc833ea.png";

/***/ }),

/***/ "./src/images/carrier.png":
/*!********************************!*\
  !*** ./src/images/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c13a1bad55b3056ebbe.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0aa88df2be0532a88998.png";

/***/ }),

/***/ "./src/images/patrolboat.png":
/*!***********************************!*\
  !*** ./src/images/patrolboat.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a779fff39f7679d1f10.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ebd77c0b435721da039.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDRjs7QUFFZTs7QUFFakMsaUJBQWlCLHFEQUFJO0FBQ3JCLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21idWlsZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2RvbWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi5zZWN0aW9uIHtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICB3aWR0aDogOTglO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5nYW1lYm9hcmQge1xuICAgIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZWV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNoaXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWlzaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnNoaXAtc3F1YXJlIHtcbiAgICBvdXRsaW5lOiBzdGVlbGJsdWUgc29saWQgMXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmRyYWdnaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuLmFsbG93ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbi5kaXNhbGxvd2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4ucGxhY2Vkc2hpcCB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5zZWN0aW9uIHtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmZsZWV0c3F1YXJlLCAubW92ZXNxdWFyZSB7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZsZWV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYWlzaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2hpcC1zcXVhcmUge1xcbiAgICBvdXRsaW5lOiBzdGVlbGJsdWUgc29saWQgMXB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uZHJhZ2dpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuXFxuLmFsbG93ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uZGlzYWxsb3dlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5wbGFjZWRzaGlwIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUljb250cm9sIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCA9ICdlYXN5Jykge1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMubW92ZXMgPSB0aGlzLmJ1aWxkTW92ZU1hcCgpO1xuICAgICAgICB0aGlzLnBsYWNlRmxlZXQoKTtcblxuICAgIH1cblxuICAgIHBsYWNlRmxlZXQoZmxlZXQ9NSwgaW5kZXg9MCwgbGVuZ3RoPTUpIHtcbiAgICAgICAgd2hpbGUgKGZsZWV0PjApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhaXBsYWNpbmcnKVxuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnJhbmRvbUludGVnZXIoKTtcbiAgICAgICAgICAgIGxldCB6ID0gdGhpcy5yYW5kb21JbnRlZ2VyKCk7XG4gICAgICAgICAgICBsZXQgb3JpZW50ID0gdGhpcy5yYW5kb21PcmllbnQoKTtcbiAgICAgICAgICAgIGlmIChnYW1lLmFpLmdhbWVib2FyZC5wbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeSwgeiwgb3JpZW50KSAhPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGdhbWUuYWkuZ2FtZWJvYXJkLnBsYWNlU2hpcChpbmRleCwgbGVuZ3RoLCB5LCB6LCBvcmllbnQpO1xuICAgICAgICAgICAgICAgIGZsZWV0LS07XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRNb3ZlTWFwKCkge1xuICAgICAgICBsZXQgbW92ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PDEwOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHk9MDsgeTwxMDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbW92ZU1hcC5zZXQoW3gseV0udG9TdHJpbmcoKSwndW5wbGF5ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZU1hcDtcbiAgICB9XG5cbiAgICByYW5kb21TcXVhcmUoKSB7XG4gICAgICAgIGxldCB4PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCB5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIHJldHVybiBgJHt4fSwke3l9YFxuICAgIH1cblxuICAgIHJhbmRvbUludGVnZXIoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgIH1cblxuICAgIHJhbmRvbU9yaWVudCgpIHtcbiAgICAgICAgbGV0IHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICByZXR1cm4geD4wID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZpbmRVbnBsYXllZFNxdWFyZShjaGVja2VkID0gbmV3IE1hcCwgc3F1YXJlPXRoaXMucmFuZG9tU3F1YXJlKCksIHN0YXR1cykge1xuICAgICAgICBzdGF0dXMgPSB0aGlzLm1vdmVzLmdldChzcXVhcmUudG9TdHJpbmcoKSlcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3VucGxheWVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGVja2VkLmdldChzcXVhcmUudG9TdHJpbmcoKSA9PT0gJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgYWxlcnQoJ3RoaXMnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tlZC5zZXQoc3F1YXJlLnRvU3RyaW5nKCksICdjaGVja2VkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRVbnBsYXllZFNxdWFyZShjaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFpbW92ZSgpIHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZmluZFVucGxheWVkU3F1YXJlKCk7XG4gICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9nYW1lYm9hcmQnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcidcbmltcG9ydCB7IHBsYWNlU2hpcCwgZHJhZ292ZXIgfSBmcm9tICcuL2RvbWNvbnRyb2xsZXInO1xuaW1wb3J0IENhcnJpZXIgZnJvbSAnLi4vLi4vaW1hZ2VzL2NhcnJpZXIucG5nJ1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi4vLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJ1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuLi8uLi9pbWFnZXMvZGVzdHJveWVyLnBuZydcbmltcG9ydCBTdWJtYXJpbmUgZnJvbSAnLi4vLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnXG5pbXBvcnQgUGF0cm9sQm9hdCBmcm9tICcuLi8uLi9pbWFnZXMvcGF0cm9sYm9hdC5wbmcnXG5leHBvcnQge2J1aWxkUGFnZSwgYnVpbGRGbGVldEJvYXJkLCBidWlsZE1vdmVzQm9hcmR9XG5cblxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5TaW5rIHRoZSBTaGlwcyE8L2gxPlxuICAgIDxkaXYgY2xhc3M9J3NlY3Rpb24nIGlkPSdodW1hbnNlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdodW1hbmZsZWV0Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2hpcC1zZWxlY3QnIGlkPSdzaGlwLXNlbGVjdCc+XG4gICAgICAgIDxkaXYgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzBjYXJyaWVyJyBkYXRhLWxlbmd0aD01PjxpbWcgc3JjPScke0NhcnJpZXJ9Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2hpcCcgZHJhZ2dhYmxlPSd0cnVlJyBpZD0nMWJhdHRsZXNoaXAnIGRhdGEtbGVuZ3RoPTQ+PGltZyBzcmM9JyR7QmF0dGxlc2hpcH0nPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPScyZGVzdHJveWVyJyBkYXRhLWxlbmd0aD0zPjxpbWcgc3JjPScke0Rlc3Ryb3llcn0nPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPSczc3VibWFyaW5lJyBkYXRhLWxlbmd0aD0yPjxpbWcgc3JjPScke1N1Ym1hcmluZX0nPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPSc0cGF0cm9sLWJvYXQnIGRhdGEtbGVuZ3RoPTE+PGltZyBzcmM9JyR7UGF0cm9sQm9hdH0nPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J3NlY3Rpb24nIGlkPSdhaXNlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdodW1hbm1vdmVzJz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2hpcC1zZWxlY3QnIGlkPSdzaGlwLWFpJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWljYXJyaWVyJz48aW1nIHNyYz0nJHtDYXJyaWVyfSc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2FpYmF0dGxlc2hpcCc+PGltZyBzcmM9JyR7QmF0dGxlc2hpcH0nPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdhaXNoaXAnIGRyYWdnYWJsZT0nZmFsc2UnIGlkPSdhaWRlc3Ryb3llcic+PGltZyBzcmM9JyR7RGVzdHJveWVyfSc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2Fpc2hpcCcgZHJhZ2dhYmxlPSdmYWxzZScgaWQ9J2Fpc3VibWFyaW5lJz48aW1nIHNyYz0nJHtTdWJtYXJpbmV9Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nYWlzaGlwJyBkcmFnZ2FibGU9J2ZhbHNlJyBpZD0nYWlwYXRyb2xib2F0Jz48aW1nIHNyYz0nJHtQYXRyb2xCb2F0fSc+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nZmxlZXRzJz5cblxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nZm9vdGVyJz5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL3NldC1zaWxob3VldHRlcy1uYXZhbC1zaGlwc18xMTA1MjkyOC5odG0jcXVlcnk9d2Fyc2hpcCZwb3NpdGlvbj0wJmZyb21fdmlldz1rZXl3b3JkJnRyYWNrPXNwaCZ1dWlkPTk2NGE3Yzk2LWVlZjEtNDg1Yi1hZTJkLTY4YTM0NjNlMWEwM1wiPkJhdHRsZXNoaXAgSW1hZ2VzIGJ5IG1hY3JvdmVjdG9yIG9uIEZyZWVwaWs8L2E+XG4gICAgPC9kaXY+XG4gICAgYFxufVxuXG5mdW5jdGlvbiBidWlsZEZsZWV0Qm9hcmQoYm9hcmQsIHBsYXllcikge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsYXllcn1mbGVldGApO1xuICAgIGdhbWVib2FyZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGJvYXJkLmZvckVhY2goKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IGIucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxlZXRzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZmxlZXQke3BsYXllcn0ke2Nvb3Jkc31gKVxuICAgICAgICBpZiAoYSAhPT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IGE7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTW92ZXNCb2FyZChib2FyZCwgcGxheWVyKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfW1vdmVzYCk7XG4gICAgZ2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hcmQuZm9yRWFjaCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gYi5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb3Zlc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYG1vdmUke3BsYXllcn0ke2Nvb3Jkc31gIClcbiAgICAgICAgaWYgKGEgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gJ0gnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gJ00nXG4gICAgICAgIH1cbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH0pXG59XG5cbi8vb25kcmFnc3RhcnQ9YWxlcnQoaWQpIiwiaW1wb3J0IHtnYW1lLCBjb250cm9sbGVyfSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCB7IGJ1aWxkTW92ZXNCb2FyZCwgYnVpbGRGbGVldEJvYXJkIH0gZnJvbSAnLi9kb21idWlsZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3Iob3JpZW50PXRydWUpIHtcbiAgICAgICAgdGhpcy5vcmllbnQgPSBvcmllbnQ7XG4gICAgfVxuXG4gICAgbG9hZFNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGRyYWdTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICAgICAgZHJhZ1NoaXAuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydCk7IFxuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmxlZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGZsZWV0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGZsZWV0U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZWV0c3F1YXJlJyk7XG4gICAgICAgIGZsZWV0U3F1YXJlLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3ZlckV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3BFdmVudEhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gICAgfVxuXG4gICAgZHJhZ0VuZChldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9XG5cbiAgICBkcmFnT3ZlckV2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpXG4gICAgICAgIGxldCBsZW5ndGggPSBkcmFnZ2luZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuZ3RoJyk7XG4gICAgICAgIGxldCBjb29yZHMgPSB0aGlzLmlkLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XG4gICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgbGV0IHZhbGlkRHJvcCA9IHRydWU7XG4gICAgICAgIGlmIChnYW1lLmh1bWFuLmdhbWVib2FyZC5jaGVja1ZhbGlkRHJvcChsZW5ndGgsIHhwb3MsIHlwb3MsIGNvbnRyb2xsZXIub3JpZW50KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhbGlkRHJvcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuY29sb3JEcm9wU3F1YXJlcyh4cG9zLCB5cG9zLCBsZW5ndGgsIHRoaXMub3JpZW50LCB2YWxpZERyb3ApXG4gICAgfVxuXG4gICAgY29sb3JEcm9wU3F1YXJlcyh4cG9zLCB5cG9zLCBsZW5ndGgsIG9yaWVudCwgdmFsaWREcm9wKSB7XG4gICAgICAgIGZvciAobGV0IHg9MDsgeDxsZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZsZWV0aHVtYW4ke3hwb3N9JHt5cG9zfWApXG4gICAgICAgICAgICBpZiAoc3F1YXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsaWREcm9wID8gc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2FsbG93ZWQnKSA6IHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkaXNhbGxvd2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG9yaWVudCA/IHhwb3MrKyA6IHlwb3MrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9ICAgIFxuXG4gICAgZHJhZ0xlYXZlRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGVjb2xvckRyb3BTcXVhcmVzKClcbiAgICB9XG5cbiAgICBkZWNvbG9yRHJvcFNxdWFyZXMoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdhbGxvd2VkJyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWxsb3dlZCcpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB9O1xuXG4gICAgZHJvcEV2ZW50SGFuZGxlcihldmVudCwgZmxlZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZHJhZ2dpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKVxuICAgICAgICBsZXQgaW5kZXggPSBkcmFnZ2luZy5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpO1xuICAgICAgICBsZXQgY29vcmRzID0gdGhpcy5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGxldCBsZW5ndGggPSBkcmFnZ2luZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuZ3RoJyk7XG4gICAgICAgIGxldCB4cG9zID0gY29vcmRzWzBdO1xuICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgaWYgKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmNoZWNrVmFsaWREcm9wKGxlbmd0aCwgeHBvcywgeXBvcywgY29udHJvbGxlci5vcmllbnQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lLmh1bWFuLmdhbWVib2FyZC5wbGFjZVNoaXAoaW5kZXgsIGxlbmd0aCwgeHBvcywgeXBvcylcbiAgICAgICAgICAgIGJ1aWxkRmxlZXRCb2FyZChnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCwgJ2h1bWFuJyk7XG4gICAgICAgICAgICBkcmFnZ2luZy5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xuICAgICAgICAgICAgZHJhZ2dpbmcuY2xhc3NMaXN0LmFkZCgncGxhY2Vkc2hpcCcpXG4gICAgICAgICAgICBkcmFnZ2luZy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdzdGFydClcbiAgICAgICAgICAgIGdhbWUuaHVtYW4ucGxhY2VkU2hpcHMtLVxuICAgICAgICB9XG4gICAgICAgIGlmIChnYW1lLmh1bWFuLnBsYWNlZFNoaXBzID4gMCkge1xuICAgICAgICAgICAgY29udHJvbGxlci5mbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnbGV0cyBnbycpO1xuICAgICAgICAgICAgZ2FtZS5wbGF5R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZXBsYXlFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgbW92ZVNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3Zlc3F1YXJlJyk7XG4gICAgICAgIG1vdmVTcXVhcmUuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmlubmVySFRNTCA9PT0gJ0gnIHx8IHNxdWFyZS5pbm5lckhUTUwgPT09ICdNJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gc3F1YXJlLmlkLnJlcGxhY2UoL1teYS16XS9pZywgXCJcIilcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gc3F1YXJlLmlkLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIilcbiAgICAgICAgICAgICAgICBsZXQgeHBvcyA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgICAgICAgICBnYW1lLmFpLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhwb3MseXBvcylcbiAgICAgICAgICAgICAgICBidWlsZE1vdmVzQm9hcmQoZ2FtZS5haS5nYW1lYm9hcmQuYm9hcmQsIGBodW1hbmAgKVxuICAgICAgICAgICAgICAgIGdhbWUuZW5kVHVybigpO1xuICAgICAgICAgICAgICAgIGdhbWUucGxheUdhbWUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvcGxheWVyJ1xuaW1wb3J0IHtjb250cm9sbGVyLCBhaUNvbnRyb2x9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL2RvbS9kb21jb250cm9sbGVyJztcbmltcG9ydCB7IGJ1aWxkRmxlZXRCb2FyZCB9IGZyb20gJy4vZG9tL2RvbWJ1aWxkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaHVtYW4gPSBuZXcgUGxheWVyKCdncmVnJywgZmFsc2UpO1xuICAgICAgICB0aGlzLmFpID0gbmV3IFBsYXllcignYmF0dGxlYm90JywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXR0YWNrID0gdGhpcy5odW1hbjtcbiAgICAgICAgdGhpcy5kZWZlbmQgPSB0aGlzLmFpO1xuICAgIH1cblxuICAgIHBsYXlHYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2sgPT09IHRoaXMuaHVtYW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2FtZXBsYXlFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGFpQ29udHJvbC5haW1vdmUoKTtcbiAgICAgICAgICAgIGFpQ29udHJvbC5tb3Zlcy5zZXQoc3F1YXJlLCAncGxheWVkJylcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSBzcXVhcmUucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgICAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgICAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICAgICAgICAgIHRoaXMuaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeHBvcyx5cG9zKVxuICAgICAgICAgICAgYnVpbGRGbGVldEJvYXJkKHRoaXMuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKVxuICAgICAgICAgICAgdGhpcy5lbmRUdXJuKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmRUdXJuKCkge1xuICAgICAgICBsZXQgdGVtcCA9IHRoaXMuYXR0YWNrO1xuICAgICAgICB0aGlzLmF0dGFjayA9IHRoaXMuZGVmZW5kO1xuICAgICAgICB0aGlzLmRlZmVuZCA9IHRlbXA7XG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuYnVpbGRCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5hZGRTaGlwcygpO1xuICAgICAgICB0aGlzLmZsZWV0ID0gMDtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMuZGVmYXVsdFBsYWNlbWVudCgpO1xuICAgIH1cblxuICAgIC8vb3JpZ2luYWxseSB1c2VkIGEgc3RhbmRhcmQgYXJyYXkgaG93ZXZlciAnbWFwJyBtYWRlIHJlZmVyZW5jaW5nL3VwZGF0aW5nIHNxdWFyZXMgc2ltcGxlclxuICAgIGJ1aWxkQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PDEwOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHk9MDsgeTwxMDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQuc2V0KFt4LHldLnRvU3RyaW5nKCksJ2VtcHR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBcbiAgICBhZGRTaGlwcygpIHtcbiAgICAgICAgbGV0IHNoaXBzID0gW107XG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ2NhcnJpZXInLCA1KSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnYmF0dGxlc2hpcCcsIDQpKVxuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdkZXN0cm95ZXInLCAzKSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnc3VibWFyaW5lJywgMikpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ3BhdHJvbCBib2F0JywgMSkpXG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjaGVja1NwYWNlKHhwb3MsIHlwb3MpIHsgICAgXG4gICAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmJvYXJkLmdldChgJHt4cG9zfSwke3lwb3N9YCk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICdvZmYgYm9hcmQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3N0YXR1c31gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1ZhbGlkRHJvcChsZW5ndGgsIHhwb3MsIHlwb3MsIG9yaWVudCwgdmFsaWREcm9wPXRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmxlZXRodW1hbiR7eHBvc30ke3lwb3N9YClcbiAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YWxpZERyb3A9ZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5jaGVja1NwYWNlKHhwb3MsIHlwb3MpO1xuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgICAgIHZhbGlkRHJvcD1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yaWVudCA/IHlwb3MrKyA6IHhwb3MrKztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZERyb3BcbiAgICB9XG4gICAgLy9vcmlnaW5hbGx5IGhhZCB2ZXJ5IHNpbWlsYXIgaG9yL3ZlcnQgZnVuY3Rpb25zLCB0ZXJuZXJ5IG9wZXJhdG9yIG9uICdvcmllbnRhdGlvbicgbmVhdGVyIHJlZmFjdG9yXG4gICAgcGxhY2VTaGlwKGluZGV4LCBsZW5ndGgsIHhwb3MsIHlwb3MsIG9yaWVudCkge1xuICAgICAgICBsZXQgdGVtcHggPSB4cG9zO1xuICAgICAgICBsZXQgdGVtcHkgPSB5cG9zO1xuICAgICAgICBmb3IgKGxldCB4PTE7IHg8PWxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5jaGVja1NwYWNlKHRlbXB4LCB0ZW1weSk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAnZW1wdHknKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9jaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yaWVudCA/IHRlbXB4KysgOiB0ZW1weSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHk9MTsgeTw9bGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgJHt4cG9zfSwke3lwb3N9YCwgaW5kZXgpO1xuICAgICAgICAgICAgb3JpZW50ID8geHBvcysrIDogeXBvcysrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxlZXQrKztcbiAgICB9XG4gICAgIFxuICAgIHJlY2VpdmVBdHRhY2soeHBvcywgeXBvcykge1xuICAgICAgICBsZXQgc3BhY2UgPSB0aGlzLmNoZWNrU3BhY2UoeHBvcywgeXBvcyk7XG4gICAgICAgIGlmIChzcGFjZSA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5zZXQoYCR7eHBvc30sJHt5cG9zfWAsICdtaXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3BhY2UgPT09ICdoaXQnIHx8IHNwYWNlID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcGFjZSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnNldChgJHt4cG9zfSwke3lwb3N9YCwgJ2hpdCcpXG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NwYWNlXS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc3BhY2VdLnN1bmsgPyB0aGlzLmZsZWV0LS0gOiAnJztcbiAgICAgICAgICAgIHRoaXMuZmxlZXQgPT09IDAgPyBhbGVydCgnR2FtZSBPdmVyJyk6ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlZmF1bHQgcGxhY2VtZW50IG9mIGZsZWV0IHRvIGZvY3VzIG9uIERPTSAvIGdhbWVwbGF5XG4gICAgZGVmYXVsdFBsYWNlbWVudCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMCwgNSwgMCwgMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDEsIDQsIDIsIDEsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMiwgMywgNSwgNCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKDMsIDIsIDcsIDcsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoNCwgMSwgOSwgOSwgdHJ1ZSk7XG4gICAgfVxufVxuXG4vL2NvbnN0IGdhbWUgPSBuZXcgR2FtZWJvYXJkKCk7XG5leHBvcnQgY29uc3QgdGVzdHNoaXAgPSBuZXcgU2hpcCgndGVzdHNoaXAnLCA0KTtcblxuXG5cblxuXG4iLCJpbXBvcnQge2J1aWxkUGFnZSwgYnVpbGRGbGVldEJvYXJkLCBidWlsZE1vdmVzQm9hcmR9IGZyb20gJy4vZG9tL2RvbWJ1aWxkJ1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9kb20vZG9tY29udHJvbGxlcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBBSWNvbnRyb2wgZnJvbSAnLi9haSc7XG5pbXBvcnQgQ2FycmllciBmcm9tICcuLi9pbWFnZXMvY2Fycmllci5wbmcnXG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcnXG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4uL2ltYWdlcy9kZXN0cm95ZXIucG5nJ1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcuLi9pbWFnZXMvc3VibWFyaW5lLnBuZydcbmltcG9ydCBQYXRyb2xCb2F0IGZyb20gJy4uL2ltYWdlcy9wYXRyb2xib2F0LnBuZydcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lO1xuXG5jb25zdCBhaUNvbnRyb2wgPSBuZXcgQUljb250cm9sO1xuY29uc29sZS5sb2coZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQpO1xuY29uc29sZS5sb2coZ2FtZS5haS5nYW1lYm9hcmQuYm9hcmQpO1xuYnVpbGRQYWdlKCk7XG5idWlsZEZsZWV0Qm9hcmQoZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQsICdodW1hbicpO1xuYnVpbGRNb3Zlc0JvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbmNvbnRyb2xsZXIubG9hZFNoaXBQbGFjZW1lbnQoKTtcblxuZXhwb3J0IHtnYW1lLCBjb250cm9sbGVyLCBhaUNvbnRyb2x9IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCdcbmltcG9ydCBBSWNvbnRyb2wgZnJvbSAnLi9haSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250cm9sKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWkgPSBjb250cm9sLFxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQobmFtZSk7XG4gICAgICAgIHRoaXMucGxhY2VkU2hpcHMgPSA1O1xuICAgIH1cblxuICAgIGFpVHVybigpIHtcblxuICAgIH1cbn0gXG5cblxuXG4vL2h1bWFuIGFuZCBhaSBwbGFjZW1lbnRzIHRvIGNvbWUgbGF0ZXIiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRzID0gMCwgc3VuayA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSBoaXRzO1xuICAgICAgICB0aGlzLnN1bmsgPSBzdW5rO1xuICAgIH0gXG4gICAgXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrK1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgICAgICB0aGlzLnN1bmsgPyB0aGlzLnNoaXBTdW5rKCk6Jyc7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzaGlwU3VuaygpIHtcbiAgICAgICAgYWxlcnQoYCR7Z2FtZS5hdHRhY2submFtZX0gc3VuayAke2dhbWUuZGVmZW5kLm5hbWV9J3MgJHt0aGlzLm5hbWV9YClcbiAgICB9XG59XG5cblxuXG5cbi8qIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCgnYmF0dGxlc2hpcCcsIDUpO1xuY29uc29sZS5sb2coYmF0dGxlc2hpcC5uYW1lKTtcbmNvbnNvbGUubG9nKGJhdHRsZXNoaXAubGVuZ3RoKTtcbmNvbnNvbGUubG9nKGJhdHRsZXNoaXApXG4gKi9cblxuLy9zaGlwU3Vuayh0aGlzLm5hbWUpOiB0aGlzLnN1bms9ZmFsc2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vbW9kdWxlcydcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuY29uc29sZS5sb2coZ2FtZS5odW1hbi5nYW1lYm9hcmQuYm9hcmQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
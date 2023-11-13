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

.ship {
    display: flex;
    padding: 5px;
    width: fit-content;
    cursor: move;
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

.placedship {
    opacity: 0.5;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB","sourcesContent":["\n.section {\n    border: black solid 1px;\n    width: 98%;\n    height: auto;\n    display: flex;\n\n}\n\n.gameboard {\n    border: red solid 1px;\n    width: 400px;\n    height: 400px;\n    margin: 10px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.fleetsquare, .movesquare {\n    border: black solid 1px;\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ship {\n    display: flex;\n    padding: 5px;\n    width: fit-content;\n    cursor: move;\n}\n\n.ship-square {\n    outline: steelblue solid 1px;\n    width: 40px;\n    height: 40px;\n}\n\n.dragging {\n    background-color: brown;\n}\n\n.allowed {\n    background-color: lightgreen;\n}\n\n.placedship {\n    opacity: 0.5;\n}\n"],"sourceRoot":""}]);
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
class AIcontrol {
    constructor(level = 'easy') {
        this.level = level;
        this.moves = this.buildMoveMap();


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






function buildPage() {
    const content = document.getElementById('content');
    content.innerHTML = `<div class='section' id='humansection'>
        <div class='gameboard' id='humanfleet'></div>
        <div class='gameboard' id='humanmoves'></div>
    </div>
    <div class='section' id='botsection'>
        <div class='gameboard' id='aifleet'></div>
        <div class='gameboard' id='aimoves'></div>
    </div>
    <div class='ship-select' id='ship-select'>
        <div class='ship' draggable='true' id='0carrier' data-length=5>Carrier</div>
        <div class='ship' draggable='true' id='1battleship' data-length=4>Battleship</div>
        <div class='ship' draggable='true' id='2destroyer' data-length=3>Destroyer</div>
        <div class='ship' draggable='true' id='3submarine' data-length=2>Submarine</div>
        <div class='ship' draggable='true' id='4patrol-boat' data-length=1>Patrol Boat</div>
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
/* harmony export */   loadShipPlacement: () => (/* binding */ loadShipPlacement),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/modules/index.js");
/* harmony import */ var _dombuild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dombuild */ "./src/modules/dom/dombuild.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/modules/player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ai */ "./src/modules/ai.js");





let aiControl = new _ai__WEBPACK_IMPORTED_MODULE_3__["default"];

function playGame() {
    if (_index__WEBPACK_IMPORTED_MODULE_0__.game.attack === _index__WEBPACK_IMPORTED_MODULE_0__.game.human) {
        loadEventListeners();
    }
    else {
        let square = aiControl.aimove();
        aiControl.moves.set(square, 'played')
        let coords = square.replace(/[^0-9]/ig, "")
        let xpos = coords[0];
        let ypos = coords[1];
        _index__WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.receiveAttack(xpos,ypos)
        ;(0,_dombuild__WEBPACK_IMPORTED_MODULE_1__.buildMovesBoard)(_index__WEBPACK_IMPORTED_MODULE_0__.game.ai.gameboard.board, `ai`)
        console.log(aiControl.moves)
        _index__WEBPACK_IMPORTED_MODULE_0__.game.endTurn();
        playGame();
        console.log(square);
    }
};

function loadShipPlacement() {
    const dragShip = document.querySelectorAll('.ship');
    dragShip.forEach(ship => {
        console.log(ship.id)
        ship.addEventListener('dragstart', dragstart); 
        ship.addEventListener('dragend', dragend);
    });
    fleetEventListeners();
    }


function fleetEventListeners() {
    const fleetSquare = document.querySelectorAll('.fleetsquare');
    fleetSquare.forEach(square => {
        square.addEventListener('dragover', dragoverEventHandler);
        square.addEventListener('drop', dropEventHandler);
    });
};

function loadEventListeners() {
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
            _index__WEBPACK_IMPORTED_MODULE_0__.game[player].gameboard.receiveAttack(xpos,ypos)
            ;(0,_dombuild__WEBPACK_IMPORTED_MODULE_1__.buildMovesBoard)(_index__WEBPACK_IMPORTED_MODULE_0__.game[player].gameboard.board, `${player}` )
            _index__WEBPACK_IMPORTED_MODULE_0__.game.endTurn();
            playGame();
        })
    });
}

function dragstart() {
    this.classList.add('dragging');
};

function dragend(event) {
    event.preventDefault();
    this.classList.remove('dragging');
    } 

function dragoverEventHandler(event) {
    event.preventDefault();
    const dragging = document.querySelector('.dragging')
    let length = dragging.getAttribute('data-length');
    console.log(this)
    let coords = this.id.replace(/[^0-9]/ig, "");
    let xpos = coords[0];
    let ypos = coords[1];
    let tempx = xpos;
    let tempy = ypos;
    console.log(length)
    let orient = true;
    for (let x=1; x<=length; x++) {
        const square = document.getElementById(`fleethuman${tempx}${tempy}`)
        let status = _index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.checkSpace(tempx, tempy);
        console.log(status);
        if (status === 'empty') {
            square.classList.add('allowed');
        }
        orient ? tempx++ : tempy++;
    }
    const validDrop = false;
}

function dropEventHandler(event, fleet) {
    event.preventDefault();
    console.log('drop')
    const dragging = document.querySelector('.dragging')
    let index = dragging.id.replace(/[^0-9]/ig, "");
    let coords = this.id.replace(/[^0-9]/ig, "")
    let length = dragging.getAttribute('data-length');
    let xpos = coords[0];
    let ypos = coords[1];
    _index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.placeShip(index, length, xpos, ypos)
    ;(0,_dombuild__WEBPACK_IMPORTED_MODULE_1__.buildFleetBoard)(_index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.board, 'human');
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.game.human.gameboard.board);
    dragging.removeAttribute('draggable');
    dragging.classList.add('placedship')
    dragging.removeEventListener('dragstart', dragstart)
    _index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips--
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips);
    if (_index__WEBPACK_IMPORTED_MODULE_0__.game.human.placedShips >= 0) {
        fleetEventListeners();
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


class Game {
    constructor() {
        this.human = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('greg', false);
        this.ai = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('battlebot', true);
        this.attack = this.human;
        this.defend = this.ai;
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
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _dom_dombuild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/dombuild */ "./src/modules/dom/dombuild.js");
/* harmony import */ var _dom_domcontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/domcontroller */ "./src/modules/dom/domcontroller.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");







const game = new _game__WEBPACK_IMPORTED_MODULE_2__["default"];
console.log(game.human.gameboard.board);
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildPage)();
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildFleetBoard)(game.human.gameboard.board, 'human');
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildMovesBoard)(game.ai.gameboard.board, 'ai');
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildFleetBoard)(game.ai.gameboard.board, 'ai');
(0,_dom_dombuild__WEBPACK_IMPORTED_MODULE_0__.buildMovesBoard)(game.human.gameboard.board, 'human');
(0,_dom_domcontroller__WEBPACK_IMPORTED_MODULE_1__.loadShipPlacement)();
(0,_dom_domcontroller__WEBPACK_IMPORTED_MODULE_1__.playGame)();



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
        alert(`You sunk my ${this.name}`)
    }
}




/* const battleship = new Ship('battleship', 5);
console.log(battleship.name);
console.log(battleship.length);
console.log(battleship)
 */

//shipSunk(this.name): this.sunk=false;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZG9tYnVpbGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4uc2VjdGlvbiB7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxufVxuXG4uZ2FtZWJvYXJkIHtcbiAgICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5mbGVldHNxdWFyZSwgLm1vdmVzcXVhcmUge1xuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc2hpcC1zcXVhcmUge1xuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZHJhZ2dpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuXG4uYWxsb3dlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLnBsYWNlZHNoaXAge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnNlY3Rpb24ge1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uZmxlZXRzcXVhcmUsIC5tb3Zlc3F1YXJlIHtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5zaGlwLXNxdWFyZSB7XFxuICAgIG91dGxpbmU6IHN0ZWVsYmx1ZSBzb2xpZCAxcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uYWxsb3dlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5wbGFjZWRzaGlwIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUljb250cm9sIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCA9ICdlYXN5Jykge1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMubW92ZXMgPSB0aGlzLmJ1aWxkTW92ZU1hcCgpO1xuXG5cbiAgICB9XG5cbiAgICBidWlsZE1vdmVNYXAoKSB7XG4gICAgICAgIGxldCBtb3ZlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCB4PTA7IHg8MTA7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeT0wOyB5PDEwOyB5KyspIHtcbiAgICAgICAgICAgICAgICBtb3ZlTWFwLnNldChbeCx5XS50b1N0cmluZygpLCd1bnBsYXllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlTWFwO1xuICAgIH1cblxuICAgIHJhbmRvbVNxdWFyZSgpIHtcbiAgICAgICAgbGV0IHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHk9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgcmV0dXJuIGAke3h9LCR7eX1gXG4gICAgfVxuXG4gICAgZmluZFVucGxheWVkU3F1YXJlKGNoZWNrZWQgPSBuZXcgTWFwLCBzcXVhcmU9dGhpcy5yYW5kb21TcXVhcmUoKSwgc3RhdHVzKSB7XG4gICAgICAgIHN0YXR1cyA9IHRoaXMubW92ZXMuZ2V0KHNxdWFyZS50b1N0cmluZygpKVxuICAgICAgICBpZiAoc3RhdHVzID09PSAndW5wbGF5ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoZWNrZWQuZ2V0KHNxdWFyZS50b1N0cmluZygpID09PSAnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICBhbGVydCgndGhpcycpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGVja2VkLnNldChzcXVhcmUudG9TdHJpbmcoKSwgJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZFVucGxheWVkU3F1YXJlKGNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWltb3ZlKCkge1xuICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5maW5kVW5wbGF5ZWRTcXVhcmUoKTtcbiAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL2dhbWVib2FyZCdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVyJ1xuaW1wb3J0IHsgcGxhY2VTaGlwLCBkcmFnb3ZlciB9IGZyb20gJy4vZG9tY29udHJvbGxlcic7XG5leHBvcnQge2J1aWxkUGFnZSwgYnVpbGRGbGVldEJvYXJkLCBidWlsZE1vdmVzQm9hcmR9XG5cblxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J3NlY3Rpb24nIGlkPSdodW1hbnNlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdodW1hbmZsZWV0Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZWJvYXJkJyBpZD0naHVtYW5tb3Zlcyc+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nc2VjdGlvbicgaWQ9J2JvdHNlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lYm9hcmQnIGlkPSdhaWZsZWV0Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZWJvYXJkJyBpZD0nYWltb3Zlcyc+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nc2hpcC1zZWxlY3QnIGlkPSdzaGlwLXNlbGVjdCc+XG4gICAgICAgIDxkaXYgY2xhc3M9J3NoaXAnIGRyYWdnYWJsZT0ndHJ1ZScgaWQ9JzBjYXJyaWVyJyBkYXRhLWxlbmd0aD01PkNhcnJpZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nc2hpcCcgZHJhZ2dhYmxlPSd0cnVlJyBpZD0nMWJhdHRsZXNoaXAnIGRhdGEtbGVuZ3RoPTQ+QmF0dGxlc2hpcDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPScyZGVzdHJveWVyJyBkYXRhLWxlbmd0aD0zPkRlc3Ryb3llcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPSczc3VibWFyaW5lJyBkYXRhLWxlbmd0aD0yPlN1Ym1hcmluZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdzaGlwJyBkcmFnZ2FibGU9J3RydWUnIGlkPSc0cGF0cm9sLWJvYXQnIGRhdGEtbGVuZ3RoPTE+UGF0cm9sIEJvYXQ8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG59XG5cbmZ1bmN0aW9uIGJ1aWxkRmxlZXRCb2FyZChib2FyZCwgcGxheWVyKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfWZsZWV0YCk7XG4gICAgZ2FtZWJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgYm9hcmQuZm9yRWFjaCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gYi5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmbGVldHNxdWFyZScpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBmbGVldCR7cGxheWVyfSR7Y29vcmRzfWApXG4gICAgICAgIGlmIChhICE9PSAnZW1wdHknKSB7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gYTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYnVpbGRNb3Zlc0JvYXJkKGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9bW92ZXNgKTtcbiAgICBnYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBib2FyZC5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBjb29yZHMgPSBiLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIilcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vdmVzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgbW92ZSR7cGxheWVyfSR7Y29vcmRzfWAgKVxuICAgICAgICBpZiAoYSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnSCdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnTSdcbiAgICAgICAgfVxuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG4gICAgfSlcbn1cblxuLy9vbmRyYWdzdGFydD1hbGVydChpZCkiLCJpbXBvcnQge2dhbWV9IGZyb20gJy4uL2luZGV4J1xuaW1wb3J0IHsgYnVpbGRNb3Zlc0JvYXJkLCBidWlsZEZsZWV0Qm9hcmQgfSBmcm9tICcuL2RvbWJ1aWxkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vcGxheWVyJ1xuaW1wb3J0IEFJY29udHJvbCBmcm9tICcuLi9haSc7XG5cbmxldCBhaUNvbnRyb2wgPSBuZXcgQUljb250cm9sO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gICAgaWYgKGdhbWUuYXR0YWNrID09PSBnYW1lLmh1bWFuKSB7XG4gICAgICAgIGxvYWRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IGFpQ29udHJvbC5haW1vdmUoKTtcbiAgICAgICAgYWlDb250cm9sLm1vdmVzLnNldChzcXVhcmUsICdwbGF5ZWQnKVxuICAgICAgICBsZXQgY29vcmRzID0gc3F1YXJlLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIilcbiAgICAgICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICBnYW1lLmFpLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhwb3MseXBvcylcbiAgICAgICAgYnVpbGRNb3Zlc0JvYXJkKGdhbWUuYWkuZ2FtZWJvYXJkLmJvYXJkLCBgYWlgKVxuICAgICAgICBjb25zb2xlLmxvZyhhaUNvbnRyb2wubW92ZXMpXG4gICAgICAgIGdhbWUuZW5kVHVybigpO1xuICAgICAgICBwbGF5R2FtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcXVhcmUpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGxvYWRTaGlwUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IGRyYWdTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICBkcmFnU2hpcC5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwLmlkKVxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdzdGFydCk7IFxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnZW5kKTtcbiAgICB9KTtcbiAgICBmbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG5cbmZ1bmN0aW9uIGZsZWV0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZmxlZXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxlZXRzcXVhcmUnKTtcbiAgICBmbGVldFNxdWFyZS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRXZlbnRIYW5kbGVyKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBtb3ZlU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vdmVzcXVhcmUnKTtcbiAgICBtb3ZlU3F1YXJlLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICBpZiAoc3F1YXJlLmlubmVySFRNTCA9PT0gJ0gnIHx8IHNxdWFyZS5pbm5lckhUTUwgPT09ICdNJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBzcXVhcmUuaWQucmVwbGFjZSgvW15hLXpdL2lnLCBcIlwiKVxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHNxdWFyZS5pZC5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpXG4gICAgICAgICAgICBsZXQgeHBvcyA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgIGxldCB5cG9zID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgZ2FtZVtwbGF5ZXJdLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhwb3MseXBvcylcbiAgICAgICAgICAgIGJ1aWxkTW92ZXNCb2FyZChnYW1lW3BsYXllcl0uZ2FtZWJvYXJkLmJvYXJkLCBgJHtwbGF5ZXJ9YCApXG4gICAgICAgICAgICBnYW1lLmVuZFR1cm4oKTtcbiAgICAgICAgICAgIHBsYXlHYW1lKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdzdGFydCgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG59O1xuXG5mdW5jdGlvbiBkcmFnZW5kKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgfSBcblxuZnVuY3Rpb24gZHJhZ292ZXJFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJylcbiAgICBsZXQgbGVuZ3RoID0gZHJhZ2dpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWxlbmd0aCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgbGV0IGNvb3JkcyA9IHRoaXMuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKTtcbiAgICBsZXQgeHBvcyA9IGNvb3Jkc1swXTtcbiAgICBsZXQgeXBvcyA9IGNvb3Jkc1sxXTtcbiAgICBsZXQgdGVtcHggPSB4cG9zO1xuICAgIGxldCB0ZW1weSA9IHlwb3M7XG4gICAgY29uc29sZS5sb2cobGVuZ3RoKVxuICAgIGxldCBvcmllbnQgPSB0cnVlO1xuICAgIGZvciAobGV0IHg9MTsgeDw9bGVuZ3RoOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZsZWV0aHVtYW4ke3RlbXB4fSR7dGVtcHl9YClcbiAgICAgICAgbGV0IHN0YXR1cyA9IGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmNoZWNrU3BhY2UodGVtcHgsIHRlbXB5KTtcbiAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2FsbG93ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBvcmllbnQgPyB0ZW1weCsrIDogdGVtcHkrKztcbiAgICB9XG4gICAgY29uc3QgdmFsaWREcm9wID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BFdmVudEhhbmRsZXIoZXZlbnQsIGZsZWV0KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnZHJvcCcpXG4gICAgY29uc3QgZHJhZ2dpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKVxuICAgIGxldCBpbmRleCA9IGRyYWdnaW5nLmlkLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XG4gICAgbGV0IGNvb3JkcyA9IHRoaXMuaWQucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKVxuICAgIGxldCBsZW5ndGggPSBkcmFnZ2luZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuZ3RoJyk7XG4gICAgbGV0IHhwb3MgPSBjb29yZHNbMF07XG4gICAgbGV0IHlwb3MgPSBjb29yZHNbMV07XG4gICAgZ2FtZS5odW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKGluZGV4LCBsZW5ndGgsIHhwb3MsIHlwb3MpXG4gICAgYnVpbGRGbGVldEJvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbiAgICBjb25zb2xlLmxvZyhnYW1lLmh1bWFuLmdhbWVib2FyZC5ib2FyZCk7XG4gICAgZHJhZ2dpbmcucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKTtcbiAgICBkcmFnZ2luZy5jbGFzc0xpc3QuYWRkKCdwbGFjZWRzaGlwJylcbiAgICBkcmFnZ2luZy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnQpXG4gICAgZ2FtZS5odW1hbi5wbGFjZWRTaGlwcy0tXG4gICAgY29uc29sZS5sb2coZ2FtZS5odW1hbi5wbGFjZWRTaGlwcyk7XG4gICAgaWYgKGdhbWUuaHVtYW4ucGxhY2VkU2hpcHMgPj0gMCkge1xuICAgICAgICBmbGVldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5leHBvcnQge2xvYWRTaGlwUGxhY2VtZW50fSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9wbGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmh1bWFuID0gbmV3IFBsYXllcignZ3JlZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5haSA9IG5ldyBQbGF5ZXIoJ2JhdHRsZWJvdCcsIHRydWUpO1xuICAgICAgICB0aGlzLmF0dGFjayA9IHRoaXMuaHVtYW47XG4gICAgICAgIHRoaXMuZGVmZW5kID0gdGhpcy5haTtcbiAgICB9XG5cbiAgICBlbmRUdXJuKCkge1xuICAgICAgICBsZXQgdGVtcCA9IHRoaXMuYXR0YWNrO1xuICAgICAgICB0aGlzLmF0dGFjayA9IHRoaXMuZGVmZW5kO1xuICAgICAgICB0aGlzLmRlZmVuZCA9IHRlbXA7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmJ1aWxkQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuYWRkU2hpcHMoKTtcbiAgICAgICAgdGhpcy5mbGVldCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy90aGlzLmRlZmF1bHRQbGFjZW1lbnQoKTtcbiAgICB9XG5cbiAgICAvL29yaWdpbmFsbHkgdXNlZCBhIHN0YW5kYXJkIGFycmF5IGhvd2V2ZXIgJ21hcCcgbWFkZSByZWZlcmVuY2luZy91cGRhdGluZyBzcXVhcmVzIHNpbXBsZXJcbiAgICBidWlsZEJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAobGV0IHg9MDsgeDwxMDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5PTA7IHk8MTA7IHkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkLnNldChbeCx5XS50b1N0cmluZygpLCdlbXB0eScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgXG4gICAgYWRkU2hpcHMoKSB7XG4gICAgICAgIGxldCBzaGlwcyA9IFtdO1xuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdjYXJyaWVyJywgNSkpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSlcbiAgICAgICAgc2hpcHMucHVzaChuZXcgU2hpcCgnZGVzdHJveWVyJywgMykpXG4gICAgICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoJ3N1Ym1hcmluZScsIDIpKVxuICAgICAgICBzaGlwcy5wdXNoKG5ldyBTaGlwKCdwYXRyb2wgYm9hdCcsIDEpKVxuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY2hlY2tTcGFjZSh4cG9zLCB5cG9zKSB7ICAgIFxuICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5ib2FyZC5nZXQoYCR7eHBvc30sJHt5cG9zfWApO1xuICAgICAgICBpZiAoc3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnb2ZmIGJvYXJkJ1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtzdGF0dXN9YFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vb3JpZ2luYWxseSBoYWQgdmVyeSBzaW1pbGFyIGhvci92ZXJ0IGZ1bmN0aW9ucywgdGVybmVyeSBvcGVyYXRvciBvbiAnb3JpZW50YXRpb24nIG5lYXRlciByZWZhY3RvclxuICAgIHBsYWNlU2hpcChpbmRleCwgbGVuZ3RoLCB4cG9zLCB5cG9zLCBvcmllbnQpIHtcbiAgICAgICAgbGV0IHRlbXB4ID0geHBvcztcbiAgICAgICAgbGV0IHRlbXB5ID0geXBvcztcbiAgICAgICAgZm9yIChsZXQgeD0xOyB4PD1sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuY2hlY2tTcGFjZSh0ZW1weCwgdGVtcHkpO1xuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gJ2VtcHR5Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2snXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcmllbnQgPyB0ZW1weCsrIDogdGVtcHkrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB5PTE7IHk8PWxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5zZXQoYCR7eHBvc30sJHt5cG9zfWAsIGluZGV4KTtcbiAgICAgICAgICAgIG9yaWVudCA/IHhwb3MrKyA6IHlwb3MrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsZWV0Kys7XG4gICAgfVxuICAgICBcbiAgICByZWNlaXZlQXR0YWNrKHhwb3MsIHlwb3MpIHtcbiAgICAgICAgbGV0IHNwYWNlID0gdGhpcy5jaGVja1NwYWNlKHhwb3MsIHlwb3MpO1xuICAgICAgICBpZiAoc3BhY2UgPT09ICdlbXB0eScpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGAke3hwb3N9LCR7eXBvc31gLCAnbWlzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwYWNlKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuc2V0KGAke3hwb3N9LCR7eXBvc31gLCAnaGl0JylcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc3BhY2VdLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tzcGFjZV0uc3VuayA/IHRoaXMuZmxlZXQtLSA6ICcnO1xuICAgICAgICAgICAgdGhpcy5mbGVldCA9PT0gMCA/IGFsZXJ0KCdHYW1lIE92ZXInKTogJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVmYXVsdCBwbGFjZW1lbnQgb2YgZmxlZXQgdG8gZm9jdXMgb24gRE9NIC8gZ2FtZXBsYXlcbiAgICBkZWZhdWx0UGxhY2VtZW50KCkge1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCgwLCA1LCAwLCAwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMSwgNCwgMiwgMSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCgyLCAzLCA1LCA0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoMywgMiwgNywgNywgZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCg0LCAxLCA5LCA5LCB0cnVlKTtcbiAgICB9XG59XG5cbi8vY29uc3QgZ2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbmV4cG9ydCBjb25zdCB0ZXN0c2hpcCA9IG5ldyBTaGlwKCd0ZXN0c2hpcCcsIDQpO1xuXG5cblxuXG5cbiIsImltcG9ydCB7YnVpbGRQYWdlLCBidWlsZEZsZWV0Qm9hcmQsIGJ1aWxkTW92ZXNCb2FyZH0gZnJvbSAnLi9kb20vZG9tYnVpbGQnXG5pbXBvcnQge3BsYXlHYW1lfSBmcm9tICcuL2RvbS9kb21jb250cm9sbGVyJ1xuaW1wb3J0IHtsb2FkU2hpcFBsYWNlbWVudH0gZnJvbSAnLi9kb20vZG9tY29udHJvbGxlcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZTtcbmNvbnNvbGUubG9nKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkKTtcbmJ1aWxkUGFnZSgpO1xuYnVpbGRGbGVldEJvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbmJ1aWxkTW92ZXNCb2FyZChnYW1lLmFpLmdhbWVib2FyZC5ib2FyZCwgJ2FpJyk7XG5idWlsZEZsZWV0Qm9hcmQoZ2FtZS5haS5nYW1lYm9hcmQuYm9hcmQsICdhaScpO1xuYnVpbGRNb3Zlc0JvYXJkKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkLCAnaHVtYW4nKTtcbmxvYWRTaGlwUGxhY2VtZW50KCk7XG5wbGF5R2FtZSgpO1xuXG5leHBvcnQge2dhbWV9IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCdcbmltcG9ydCBBSWNvbnRyb2wgZnJvbSAnLi9haSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250cm9sKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWkgPSBjb250cm9sLFxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQobmFtZSk7XG4gICAgICAgIHRoaXMucGxhY2VkU2hpcHMgPSA1O1xuICAgIH1cblxuICAgIGFpVHVybigpIHtcblxuICAgIH1cbn0gXG5cblxuXG4vL2h1bWFuIGFuZCBhaSBwbGFjZW1lbnRzIHRvIGNvbWUgbGF0ZXIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdHMgPSAwLCBzdW5rID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4gICAgICAgIHRoaXMuc3VuayA9IHN1bms7XG4gICAgfSBcbiAgICBcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrXG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgICAgIHRoaXMuc3VuayA/IHRoaXMuc2hpcFN1bmsoKTonJztcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuc3VuayA9IHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNoaXBTdW5rKCkge1xuICAgICAgICBhbGVydChgWW91IHN1bmsgbXkgJHt0aGlzLm5hbWV9YClcbiAgICB9XG59XG5cblxuXG5cbi8qIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCgnYmF0dGxlc2hpcCcsIDUpO1xuY29uc29sZS5sb2coYmF0dGxlc2hpcC5uYW1lKTtcbmNvbnNvbGUubG9nKGJhdHRsZXNoaXAubGVuZ3RoKTtcbmNvbnNvbGUubG9nKGJhdHRsZXNoaXApXG4gKi9cblxuLy9zaGlwU3Vuayh0aGlzLm5hbWUpOiB0aGlzLnN1bms9ZmFsc2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0ICcuL21vZHVsZXMnXG5cbmltcG9ydCBHYW1lIGZyb20gJy4vbW9kdWxlcy9nYW1lJ1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbmNvbnNvbGUubG9nKGdhbWUuaHVtYW4uZ2FtZWJvYXJkLmJvYXJkKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
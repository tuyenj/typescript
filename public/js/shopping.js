/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/ts/product-repository.ts":
/*!********************************************!*\
  !*** ./resources/ts/product-repository.ts ***!
  \********************************************/
/*! exports provided: ProductRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRepository", function() { return ProductRepository; });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ "./resources/ts/product.ts");

class ProductRepository {
    constructor() {
        this.products = [];
        this.addItem(new _product__WEBPACK_IMPORTED_MODULE_0__["Product"](5, "Arcu Aliquam Ultrices LLC", 2000, "Lorem ipsum dolor sit amet, consectetuer adipiscing", true, "bulbasaur.png"));
        this.addItem(new _product__WEBPACK_IMPORTED_MODULE_0__["Product"](2, "Orci Foundation", 1949, "Lorem ipsum dolor sit", true, "charmander.png"));
        this.addItem(new _product__WEBPACK_IMPORTED_MODULE_0__["Product"](8, "Euismod Ltd", 4252, "Lorem ipsum dolor sit amet, consectetuer", true, "ivysaur.png"));
        this.addItem(new _product__WEBPACK_IMPORTED_MODULE_0__["Product"](7, "Amet Associates", 3573, "Lorem ipsum dolor sit amet, consectetuer", false, "squirtle.png"));
        this.addItem(new _product__WEBPACK_IMPORTED_MODULE_0__["Product"](10, "Molestie Pharetra Foundation", 4771, "Lorem ipsum dolor sit amet, consectetuer", false, "venusaur.png"));
    }
    addItem(product) {
        this.products.push(product);
    }
    getItems() {
        return this.products;
    }
    getItemById(id) {
        let filter = this.products.filter(product => product.id == id);
        //console.log(filter);
        if (filter.length > 0)
            return filter[0];
        return null;
    }
    showItemsInHTML() {
        let total = this.products.length;
        let xhtmlResult = "";
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let currentItem = this.products[i];
                xhtmlResult += `<div class="media product">
                                    <a href="#">
                                        <img class="align-self-start mr-3 img-fluid" src="images/${currentItem.image}" alt="${currentItem.name}">
                                    </a>
                                <div class="media-body">
                                    <h4 class="media-heading">${currentItem.name}</h4>
                                    <p>${currentItem.summary}</p>
                                   ${this.showBuyItemInHTML(currentItem)}
                                </div>
                            </div>`;
            }
        }
        else {
            xhtmlResult = "Data not exist";
        }
        return xhtmlResult;
    }
    ;
    showBuyItemInHTML(product) {
        let xhtmlResult = "";
        if (product.canBuy == true) {
            xhtmlResult = `<input type="number" name="quantity-product-100" value="1" min="1">
                                    <a data-product ="100" href="#" class="price">$ ${product.price}</a>`;
        }
        else {
            xhtmlResult = `<span data-product ="100" class="price">$ ${product.price}</span>`;
        }
        return xhtmlResult;
    }
}


/***/ }),

/***/ "./resources/ts/product.ts":
/*!*********************************!*\
  !*** ./resources/ts/product.ts ***!
  \*********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, name, price, summary, canBuy = true, image) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._summary = summary;
        this._canBuy = canBuy;
        this._image = image;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get summary() {
        return this._summary;
    }
    set summary(value) {
        this._summary = value;
    }
    get canBuy() {
        return this._canBuy;
    }
    set canBuy(value) {
        this._canBuy = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
}


/***/ }),

/***/ "./resources/ts/shopping.ts":
/*!**********************************!*\
  !*** ./resources/ts/shopping.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-repository */ "./resources/ts/product-repository.ts");

let productRepository = new _product_repository__WEBPACK_IMPORTED_MODULE_0__["ProductRepository"]();
let product = productRepository.showItemsInHTML();
$("#list-product").html(product);


/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./resources/ts/shopping.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\laraveltypescript\resources\ts\shopping.ts */"./resources/ts/shopping.ts");


/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/ts/helloworld.ts":
/*!************************************!*\
  !*** ./resources/ts/helloworld.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// variable string
let domain = "tdev.com";
console.log(domain);
// Boolean
let isDone = false;
console.log(isDone);
// Number
let decimal = 12;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// kieu array
let students = ['A', 'B', 'C'];
// khai bao theo kieu gan kieu
let students2 = ['D', 'E', 'F'];
console.log(students);
console.log(students2);
// kieu du lieu enum
var fruit;
(function (fruit) {
    fruit[fruit["Orange"] = 12] = "Orange";
    fruit[fruit["Banana"] = 12] = "Banana";
    fruit[fruit["Mango"] = 13] = "Mango";
    fruit[fruit["Apple"] = 14] = "Apple";
})(fruit || (fruit = {}));
;
let a = fruit.Orange;
console.log('Fruit Orange:', a);
// Arrow Function
let calculateSalary = function () {
    return 1000;
};
console.log('Salary is ', calculateSalary());
let calculateSalaryArrow = () => 1000000;
console.log('Arrow Function is', calculateSalaryArrow());
// Function
function userInfo(name, age) {
    return `My name is ${name} and age is ${age}`;
}
console.log(userInfo("John", 20));
// function tham so mac dinh
function userInfo1(name, age = 18) {
    return `My name is ${name} and age is ${age}`;
}
console.log(userInfo1("John"));
// Tham so khuyet
function userInfo2(name, age) {
    if (age == null) {
        return `My name is ${name}`;
    }
    else {
        return `My name is ${name} and age is ${age}`;
    }
}
console.log(userInfo2("John"));
// total length
function totalLength() {
    return 10;
}
// Rest parameter
function showInfo(name, ...course) {
    return `${name} study ${course.join(", ")}`;
}
console.log(showInfo("David", "Java", "PHP", "C++"));
// function arrow
let f1 = function (i) {
    return i * i;
};
console.log(f1(2));
let f3 = (i) => { return i * i; };
console.log(f3(4));
/**
 * overload
 */
function funcABC(x) {
    return 100;
}
funcABC("TestABC");


/***/ }),

/***/ "./resources/ts/oop.ts":
/*!*****************************!*\
  !*** ./resources/ts/oop.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// class
class Task {
    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    showTaskInfo() {
        console.log(`${this.id} - ${this.name} -${this.state}`);
    }
}
let taskObj1 = new Task(1, "Typescript", "created");
console.log(taskObj1);
taskObj1.showTaskInfo();
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getItems() {
        return this.tasks;
    }
}
let tasks = [
    { id: 1, name: "Coding" },
    { id: 2, name: "Study" }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());


/***/ }),

/***/ "./resources/ts/static.ts":
/*!********************************!*\
  !*** ./resources/ts/static.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

console.log('static');


/***/ }),

/***/ 1:
/*!*****************************************************************************************!*\
  !*** multi ./resources/ts/helloworld.ts ./resources/ts/oop.ts ./resources/ts/static.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\laraveltypescript\resources\ts\helloworld.ts */"./resources/ts/helloworld.ts");
__webpack_require__(/*! C:\laragon\www\laraveltypescript\resources\ts\oop.ts */"./resources/ts/oop.ts");
module.exports = __webpack_require__(/*! C:\laragon\www\laraveltypescript\resources\ts\static.ts */"./resources/ts/static.ts");


/***/ })

/******/ });
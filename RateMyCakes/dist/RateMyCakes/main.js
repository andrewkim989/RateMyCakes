(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\"\n  integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\"\n  crossorigin=\"anonymous\">\n  <style>\n    #wrapper {\n      background-color: lightgrey;\n    }\n    h2 {\n      text-align: center;\n      padding: 10px;\n      color: rgb(218, 114, 131);\n    }\n    #blueline {\n      height: 2px;\n      background-color: blue;\n    }\n    #main {\n      padding: 10px;\n    }\n    #main h4 {\n      padding-left: 25px;\n    }\n    #allcakes {\n      margin: 10px;\n      width: 800px;\n      display: inline-block;\n      vertical-align: top;\n      max-height: 500px;\n      overflow: auto;\n    }\n    #newcake {\n      display: inline-block;\n      margin: 15px;\n      margin-top: 40px;\n      width: 400px;\n      background-color: rgb(169, 100, 209);\n      border-radius: 10px;\n      padding: 8px;\n      padding-left: 20px;\n    }\n    #newcake h4 {\n      padding-left: 10px;\n    }\n    #newcake input[type = \"text\"]{\n      width: 60%;\n    }\n    #newcake input[type = \"submit\"] {\n      background-color: rgb(41, 84, 201);\n      border: none;\n      color: white;\n      padding: 10px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 4px 2px;\n      border-radius: 10px;\n    }\n    #cakeinfo {\n      background-color: rgb(173, 179, 230);\n      margin: 15px;\n      padding: 15px;\n      border-radius: 10px;\n    }\n    #cakeinfo img {\n      width: 250px;\n      display: inline-block;\n      cursor: pointer;\n    }\n    #reviewform {\n      display: inline-block;\n      vertical-align: top;\n      margin-left: 20px;\n      margin-top: 15px;\n      background-color: lightgreen;\n      padding: 15px;\n      padding-left: 30px;\n      padding-right: 50px;\n      border-radius: 8px;\n    }\n    #reviewform input[type = \"submit\"] {\n      background-color: rgb(103, 165, 32);\n      border: none;\n      color: white;\n      padding: 10px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      font-size: 16px;\n      margin: 4px 2px;\n      border-radius: 10px;\n    }\n  </style>\n</head>\n<body>\n  <div id = \"wrapper\">\n    <h2>Welcome to Rate My Cakes!</h2>\n    <div id = \"blueline\"></div>\n    <div id = \"main\">\n      <h4>Submit a new cake by filling out the form on the right! You can also leave a review for each of\n        the cakes already submitted by the users.</h4>\n      <h4>Click on the images of the cake to view a larger image of it and to see the\n        reviews submitted by the users!</h4>\n      <div id = \"allcakes\">\n        <div id = \"cakeinfo\" *ngFor = \"let cake of cakes\">\n          <a (click) = \"getCake(cake)\"><img src = {{cake.image}}></a>\n          <div id = \"reviewform\">\n            <form #newReview = \"ngForm\" (submit) = \"reviewCake(cake, newReview.value)\">\n              Rating: <br>\n              <select name = \"newReview.rate\" ngModel>\n                <option value = \"5\">5 stars</option>\n                <option value = \"4\">4</option>\n                <option value = \"3\">3</option>\n                <option value = \"2\">2</option>\n                <option value = \"1\">1</option>\n              </select>\n              <br><br>\n              Comment: <br>\n              <textarea name = \"newReview.comment\" cols = \"45\" rows = \"4\" ngModel></textarea>\n              <br>\n              <br>\n              <input type = \"submit\" value = \"Submit Review!\"/>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div id = \"newcake\">\n        <h4>Submit a new cake!</h4>\n        <form (submit) = \"createCake()\">\n          Baker name: <br>\n          <input type = \"text\" name = \"newCake.name\" [(ngModel)] = \"newCake.name\" /><br>\n          Image URL: <br>\n          <input type = \"text\" name = \"newCake.image\" [(ngModel)] = \"newCake.image\" />\n          <br>\n          <br>\n          <input type = \"submit\" value = \"Submit Cake!\"/>\n        </form>\n      </div>\n    </div>\n    <app-cake *ngIf = \"cake\" [getCake] = \"cake\"></app-cake>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'RateMyCakes';
        this.cakes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllCakes();
        this.newCake = { name: "", image: "" };
        this.newReview = { rate: "", comment: "" };
    };
    AppComponent.prototype.getAllCakes = function () {
        var _this = this;
        var c = this._httpService.getAll();
        c.subscribe(function (data) {
            console.log("Got all cakes!", data);
            _this.cakes = data["cakes"];
        });
        this.newReview = { rate: "", comment: "" };
    };
    AppComponent.prototype.createCake = function () {
        this.errors = null;
        var createNew = this._httpService.createCake({ name: this.newCake.name,
            image: this.newCake.image });
        createNew.subscribe(function (newdata) { console.log("Cake submitted!", newdata); });
        this.newCake = { name: "", image: "" };
        this.getAllCakes();
    };
    AppComponent.prototype.getCake = function (cake) {
        var _this = this;
        var c = this._httpService.getCake(cake);
        c.subscribe(function (data) {
            console.log("Got the cake!", data);
            _this.cake = data["cake"];
            if (_this.cake.reviews.length == 0) {
                _this.cake["avg"] = "(No rating)";
            }
            else {
                var count = 0;
                var sum = 0;
                for (var _i = 0, _a = _this.cake.reviews; _i < _a.length; _i++) {
                    var rating = _a[_i];
                    count++;
                    sum = sum + rating.rate;
                }
                var avg = (sum / count).toFixed(2);
                _this.cake["avg"] = avg;
            }
        });
    };
    AppComponent.prototype.reviewCake = function (cake, review) {
        this.newReview.rate = review["newReview.rate"];
        this.newReview.comment = review["newReview.comment"];
        var r = this._httpService.reviewCake(cake, this.newReview);
        r.subscribe(function (data) {
            console.log("Got the review!", data);
        });
        this.newReview = { rate: "", comment: "" };
        this.getCake(cake);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cake/cake.component */ "./src/app/cake/cake.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__["CakeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cake/cake.component.css":
/*!*****************************************!*\
  !*** ./src/app/cake/cake.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cake/cake.component.html":
/*!******************************************!*\
  !*** ./src/app/cake/cake.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\"\n    integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\"\n    crossorigin=\"anonymous\">\n    <style>\n      #wrapper {\n        padding: 15px;\n        padding-left: 60px;\n        background-color: lightgrey;\n      }\n      img {\n        width: 400px;\n        display: inline-block;\n      }\n      #reviews {\n        width: 700px;\n        padding-left: 100px;\n        display: inline-block;\n        vertical-align: top;\n        max-height: 600px;\n        overflow: auto;\n      }\n      #review {\n        margin: 10px;\n        padding: 15px;\n        background-color: rgb(182, 173, 230);\n        border-radius: 8px;\n      }\n      h3 {\n        margin-left: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div id = \"wrapper\">\n      <div id = \"cake\">\n        <h2>Baked by {{getCake.name}}</h2>\n        <img src = {{getCake.image}}>\n        <div id = \"reviews\">\n          <h3>Average rating: {{getCake.avg}}</h3>\n          <div id = \"review\" *ngFor = \"let r of getCake.reviews\">\n            <h4>Rating: {{r.rate}}</h4>\n            <h6>{{r.comment}}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./src/app/cake/cake.component.ts":
/*!****************************************!*\
  !*** ./src/app/cake/cake.component.ts ***!
  \****************************************/
/*! exports provided: CakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeComponent", function() { return CakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CakeComponent = /** @class */ (function () {
    function CakeComponent() {
    }
    CakeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CakeComponent.prototype, "getCake", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CakeComponent.prototype, "avg", void 0);
    CakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cake',
            template: __webpack_require__(/*! ./cake.component.html */ "./src/app/cake/cake.component.html"),
            styles: [__webpack_require__(/*! ./cake.component.css */ "./src/app/cake/cake.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CakeComponent);
    return CakeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAll = function () {
        return this._http.get("/cakes");
    };
    HttpService.prototype.createCake = function (newcake) {
        return this._http.post("/cakes", newcake);
    };
    HttpService.prototype.getCake = function (cake) {
        return this._http.get("/cakes/" + cake._id);
    };
    HttpService.prototype.reviewCake = function (cake, review) {
        return this._http.post("/cakes/" + cake._id, review);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\mean_stack\angular\RateMyCakes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
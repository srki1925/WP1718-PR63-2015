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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-guards/auth.guard */ "./src/app/route-guards/auth.guard.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _route_guards_login_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route-guards/login.guard */ "./src/app/route-guards/login.guard.ts");
/* harmony import */ var _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/users/registration/registration.component */ "./src/app/components/users/registration/registration.component.ts");
/* harmony import */ var _route_guards_registration_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route-guards/registration.guard */ "./src/app/route-guards/registration.guard.ts");
/* harmony import */ var _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/errors/no-cars-error/no-cars-error.component */ "./src/app/components/errors/no-cars-error/no-cars-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_route_guards_login_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuard"]] },
    { path: 'registration', component: _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], canActivate: [_route_guards_login_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuard"], _route_guards_registration_guard__WEBPACK_IMPORTED_MODULE_8__["RegistrationGuard"]] },
    { path: 'driver-registration-error', component: _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_9__["NoCarsErrorComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: [
            { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"] }
        ] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/directives/dropdown.directive.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/registration/registration.component */ "./src/app/components/users/registration/registration.component.ts");
/* harmony import */ var _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/errors/no-cars-error/no-cars-error.component */ "./src/app/components/errors/no-cars-error/no-cars-error.component.ts");
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
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
                _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_14__["NoCarsErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/errors/no-cars-error/no-cars-error.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/errors/no-cars-error/no-cars-error.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/errors/no-cars-error/no-cars-error.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/errors/no-cars-error/no-cars-error.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>We are currently not accepting new drivers!</h1>"

/***/ }),

/***/ "./src/app/components/errors/no-cars-error/no-cars-error.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/errors/no-cars-error/no-cars-error.component.ts ***!
  \****************************************************************************/
/*! exports provided: NoCarsErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoCarsErrorComponent", function() { return NoCarsErrorComponent; });
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

var NoCarsErrorComponent = /** @class */ (function () {
    function NoCarsErrorComponent() {
    }
    NoCarsErrorComponent.prototype.ngOnInit = function () {
    };
    NoCarsErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-cars-error',
            template: __webpack_require__(/*! ./no-cars-error.component.html */ "./src/app/components/errors/no-cars-error/no-cars-error.component.html"),
            styles: [__webpack_require__(/*! ./no-cars-error.component.css */ "./src/app/components/errors/no-cars-error/no-cars-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoCarsErrorComponent);
    return NoCarsErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n    font-weight: bold\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"toogleCollapse()\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n            </button>\n            <a routerLink=\"/home\" class=\"navbar-brand\" style=\"cursor:pointer\">Taxi Service</a>\n        </div>\n        <div class=\"navbar-collapse collapse\" #responsiveNavbar collapse=\"navCollapsed\" >\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\" *ngIf=\"!userType || userType === 0\">\n                    <a routerLink=\"/login\" style=\"cursor: pointer;\">Login</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"dropdown\" appDropdown *ngIf=\"!userType || userType === 0\">\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Registration<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a routerLink=\"/registration\" [queryParams]=\"{type: 'customer'}\" style=\"cursor: pointer;\">New Customer</a></li>\n                        <li><a routerLink=\"/registration\" [queryParams]=\"{type: 'driver'}\" style=\"cursor: pointer;\">New Driver</a></li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\" appDropdown *ngIf=\"userType && userType !== 0\">\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Rides<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a style=\"cursor: pointer;\">Add New</a></li>\n                        <li><a style=\"cursor: pointer;\">All Rides</a></li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\" appDropdown *ngIf=\"userType === 3\">\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Users<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a style=\"cursor: pointer;\">All Users</a></li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\" appDropdown *ngIf=\"userType === 3\">\n                        <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Cars<span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a style=\"cursor: pointer;\">Add New</a></li>\n                            <li><a style=\"cursor: pointer;\">All Cars</a></li>\n                        </ul>\n                    </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"userType && userType !== 0\">\n                <li class=\"dropdown\" appDropdown>\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Settings<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a style=\"cursor: pointer;\">User setting</a></li>\n                        <li><a style=\"cursor: pointer;\" (click)=\"onLogout()\">Logout</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userType = _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__["Usertype"].Guest;
        this.username = null;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userType = this.authService.getUserType();
        this.userSubscription = this.authService.userChanged.subscribe(function (user) {
            _this.userType = user.usertype;
            _this.username = user.username;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.toogleCollapse = function () {
        this.responsiveNavbar.nativeElement.classList.toggle('collapse');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('responsiveNavbar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "responsiveNavbar", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <form [formGroup]=\"loginForm\" (submit)=\"onLogin()\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\n        </div>\n        <span *ngIf=\"failed\" class=\"help-block\">Invalid username or password!</span>\n        <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-default\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authSevice) {
        this.router = router;
        this.authSevice = authSevice;
        this.failed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var response = this.authSevice.authenticateUser(this.loginForm.value['username'], this.loginForm.value['password']);
        if (response) {
            this.router.navigate(['/home']);
        }
        else {
            this.failed = true;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/registration/registration.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/users/registration/registration.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n    border: 1px red solid\r\n}"

/***/ }),

/***/ "./src/app/components/users/registration/registration.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/users/registration/registration.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <form [formGroup]=\"registrationForm\" (submit)=\"onRegistration()\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username *</label>\n            <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\">\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('username').touched && registrationForm.get('username').invalid\">This fields is required</span>\n            <span></span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password *</label>\n            <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('password').touched && registrationForm.get('password').invalid\">This fields is required</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email *</label>\n            <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched && registrationForm.get('email').errors['required']\">This fields is required</span>\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched && registrationForm.get('email').errors['email']\">Invalid email format</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lastname\">Lastname</label>\n            <input type=\"text\" id=\"lastname\" formControlName=\"lastname\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"jmbg\">JMBG</label>\n            <input type=\"text\" id=\"jmbg\" formControlName=\"jmbg\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone *</label>\n            <input type=\"text\" id=\"phone\" formControlName=\"phone\" class=\"form-control\">\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('phone').invalid && registrationForm.get('phone').touched && registrationForm.get('phone').errors['required']\">This fields is required.</span>\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('phone').invalid && registrationForm.get('phone').touched && registrationForm.get('phone').errors['pattern']\">Phone can contain only numbers.</span>\n          </div>\n          <div class=\"form-group\" *ngIf=\"isDriver\">\n            <label for=\"carNumber\">Car Number</label>\n            <select id=\"carNumber\" formControlName=\"carNumber\" class=\"form-control\">\n              <option *ngFor=\"let car of freeCars\" [value]=\"car.carNumber\">{{car.carNumber}}</option>\n            </select>\n          </div>\n          <br>\n          <span class=\"help-block\">Fields marked with * are required.</span>\n          <button [disabled]=\"!registrationForm.valid\" type=\"submit\" class=\"btn btn-default\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/users/registration/registration.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/registration/registration.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cars_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cars-data.service */ "./src/app/services/cars-data.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(route, router, carsService, usersService) {
        this.route = route;
        this.router = router;
        this.carsService = carsService;
        this.usersService = usersService;
        this.isDriver = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to query params to protect initialized component tampering trough query
        this.typeSubscription = this.route.queryParams.subscribe(function (query) {
            var type = query['type'];
            if (!type || (type !== 'customer' && type !== 'driver')) {
                _this.router.navigate([''], { relativeTo: _this.route, queryParams: { type: 'customer' } });
            }
            else {
                if (type === 'driver') {
                    _this.isDriver = true;
                    _this.freeCars = _this.carsService.getFreeCars();
                    if (_this.freeCars.length == 0) {
                        _this.router.navigate(['/driver-registration-error']);
                    }
                }
                else {
                    _this.isDriver = false;
                    _this.freeCars = [];
                }
            }
        });
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            jmbg: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{13,13}'), this.jmbgValidator.bind(this)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]),
            carNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        this.typeSubscription.unsubscribe();
    };
    RegistrationComponent.prototype.onRegistration = function () {
        var newUser = {
            username: this.registrationForm.value['username'],
            password: this.registrationForm.value['password'],
            email: this.registrationForm.value['email'],
            name: this.registrationForm.value['name'],
            lastname: this.registrationForm.value['lastname'],
            jmbg: this.registrationForm.value['jmbg'],
            phone: this.registrationForm.value['phone'],
            carNumber: this.registrationForm.value['carNumber'],
            userType: this.isDriver ? _services_usertype_enum__WEBPACK_IMPORTED_MODULE_5__["Usertype"].Driver : _services_usertype_enum__WEBPACK_IMPORTED_MODULE_5__["Usertype"].Customer
        };
        this.usersService.addNewUser(newUser);
    };
    RegistrationComponent.prototype.jmbgValidator = function (control) {
        if (!this.checkJmbg(control.value)) {
            return { 'jmbgInvalid': true };
        }
        return null;
    };
    RegistrationComponent.prototype.checkJmbg = function (jmbg) {
        if (!jmbg) {
            return true;
        }
        var a = +jmbg[0];
        var b = +jmbg[1];
        var c = +jmbg[2];
        var d = +jmbg[3];
        var e = +jmbg[4];
        var f = +jmbg[5];
        var g = +jmbg[6];
        var h = +jmbg[7];
        var i = +jmbg[8];
        var j = +jmbg[9];
        var k = +jmbg[10];
        var l = +jmbg[11];
        var m = +jmbg[12];
        var checksum = 11 - ((7 * (a + g) + 6 * (b + h) + 5 * (c + i) + 4 * (d + j) + 3 * (e + k) + 2 * (f + l)) % 11);
        if (m != checksum)
            return false;
        return true;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/users/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/users/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_cars_data_service__WEBPACK_IMPORTED_MODULE_3__["CarsDataService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/directives/dropdown.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/dropdown.directive.ts ***!
  \**************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toogleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.prototype.openOnFocus = function () {
        this.isOpen = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toogleOpen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "openOnFocus", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/route-guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/route-guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isUserAuthenticated()) {
            return true;
        }
        else {
            console.log('not authenticated');
            this.router.navigate(['login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/route-guards/login.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/route-guards/login.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isUserAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/route-guards/registration.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/route-guards/registration.guard.ts ***!
  \****************************************************/
/*! exports provided: RegistrationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationGuard", function() { return RegistrationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationGuard = /** @class */ (function () {
    function RegistrationGuard(router) {
        this.router = router;
    }
    RegistrationGuard.prototype.canActivate = function (next, state) {
        if (!next.queryParams['type'] || (next.queryParams['type'] !== 'customer' && next.queryParams['type'] !== 'driver')) {
            this.router.navigate(['/login']);
        }
        return true;
    };
    RegistrationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationGuard);
    return RegistrationGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usertype_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usertype.enum */ "./src/app/services/usertype.enum.ts");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(cookieService) {
        this.cookieService = cookieService;
        this.currentUser = { username: null, usertype: _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Guest, token: null };
        this.authenticated = false;
        this.userChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.users = [
            { username: 'c', password: 'c', usertype: _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Customer },
            { username: 'd', password: 'd', usertype: _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Driver },
            { username: 'a', password: 'a', usertype: _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Dispatcher },
        ];
        var cookie = cookieService.getCookie("taxiServiceData");
        if (cookie !== "") {
            var user = this.decodeCookie(cookie);
            if (user.username === 'undefined')
                this.logout();
            this.currentUser.username = user.username;
            this.currentUser.usertype = user.usertype;
            this.currentUser.token = user.token;
            this.authenticated = true;
            this.userChanged.next(this.currentUser);
        }
        else {
            this.authenticated = false;
        }
    }
    AuthService.prototype.authenticateUser = function (username, password) {
        if (this.authenticated)
            return true;
        var foundUser = this.users.find(function (value) {
            return value.username === username && value.password === password;
        });
        if (foundUser) {
            this.currentUser.username = username;
            this.currentUser.usertype = foundUser.usertype;
            this.authenticated = true;
            var cookie = this.createCookie();
            this.cookieService.setCookie('taxiServiceData', cookie, 365);
            this.userChanged.next(this.currentUser);
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return this.authenticated;
    };
    AuthService.prototype.logout = function () {
        this.currentUser.username = null;
        this.currentUser.usertype = _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Guest;
        this.currentUser.token = null;
        this.authenticated = false;
        this.cookieService.removeCookie('taxiServiceData');
        this.userChanged.next(this.currentUser);
    };
    AuthService.prototype.getUserType = function () {
        return this.currentUser.usertype;
    };
    AuthService.prototype.createCookie = function () {
        //api token to be added later
        if (this.authenticated) {
            return this.currentUser.username + ',' + this.currentUser.usertype + ',' + this.currentUser.token;
        }
        return '';
    };
    AuthService.prototype.decodeCookie = function (cookie) {
        var split = cookie.split(',');
        return {
            username: split[0],
            usertype: +split[1],
            token: ''
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cars-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cars-data.service.ts ***!
  \***********************************************/
/*! exports provided: CarsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsDataService", function() { return CarsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/app/services/interfaces.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarsDataService = /** @class */ (function () {
    function CarsDataService() {
        this.cars = [
            { carNumber: 10, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].sedan, registration: 'ns-111-aa', driverId: 2, year: 2010 },
            { carNumber: 11, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].van, registration: 'ns-112-aa', driverId: null, year: 2011 },
            { carNumber: 12, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].sedan, registration: 'ns-113-aa', driverId: null, year: 2012 },
            { carNumber: 13, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].van, registration: 'ns-114-aa', driverId: 5, year: 2013 },
        ];
    }
    CarsDataService.prototype.ngOnInit = function () {
    };
    CarsDataService.prototype.addNewCar = function (newCar) {
        this.cars.push(newCar);
    };
    CarsDataService.prototype.removeCar = function (carId) {
        var index = this.cars.findIndex(function (car) { return car.carNumber === carId; });
        if (index != -1) {
            this.cars.splice(index);
        }
    };
    CarsDataService.prototype.getCar = function (driverId) {
        var foundCar = this.cars.findIndex(function (car) { return car.driverId === driverId; });
        if (foundCar != -1) {
            return this.cars[foundCar];
        }
        else {
            return null;
        }
    };
    CarsDataService.prototype.getAllCars = function () {
        return this.cars.slice();
    };
    CarsDataService.prototype.getFreeCars = function () {
        var retCars = [];
        this.cars.forEach(function (car) {
            if (!car.driverId) {
                retCars.push(car);
            }
        });
        return retCars;
    };
    CarsDataService.prototype.anyFreeCars = function () {
        var index = this.cars.findIndex(function (car) { return car.driverId === null; });
        return index !== -1 ? true : false;
    };
    CarsDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CarsDataService);
    return CarsDataService;
}());



/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
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

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    CookieService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    CookieService.prototype.removeCookie = function (cname) {
        var cookie = this.getCookie(cname);
        if (cookie !== '') {
            this.setCookie(cname, '', -1);
        }
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/services/interfaces.ts":
/*!****************************************!*\
  !*** ./src/app/services/interfaces.ts ***!
  \****************************************/
/*! exports provided: CarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
var CarType;
(function (CarType) {
    CarType[CarType["sedan"] = 0] = "sedan";
    CarType[CarType["van"] = 1] = "van";
    CarType[CarType["undefined"] = 2] = "undefined";
})(CarType || (CarType = {}));


/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(authService) {
        this.authService = authService;
        this.users = [];
    }
    UsersService.prototype.addNewUser = function (newUser) {
        this.users.push(newUser);
    };
    UsersService.prototype.removeUser = function (username) {
        var index = this.users.findIndex(function (user) {
            return user.username === username;
        });
        if (index !== -1) {
            this.users.slice(index);
            this.authService.logout();
        }
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/services/usertype.enum.ts":
/*!*******************************************!*\
  !*** ./src/app/services/usertype.enum.ts ***!
  \*******************************************/
/*! exports provided: Usertype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usertype", function() { return Usertype; });
var Usertype;
(function (Usertype) {
    Usertype[Usertype["Guest"] = 0] = "Guest";
    Usertype[Usertype["Customer"] = 1] = "Customer";
    Usertype[Usertype["Driver"] = 2] = "Driver";
    Usertype[Usertype["Dispatcher"] = 3] = "Dispatcher";
})(Usertype || (Usertype = {}));


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\remoteUser\Desktop\web project\repo\TaxiService\TaxiService\AngularApp\TaxiServiceSPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
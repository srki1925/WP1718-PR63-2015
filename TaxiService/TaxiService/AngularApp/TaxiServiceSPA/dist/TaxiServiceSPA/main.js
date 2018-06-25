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
/* harmony import */ var _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/cars/cars.component */ "./src/app/components/cars/cars.component.ts");
/* harmony import */ var _components_cars_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/cars/add-car/add-car.component */ "./src/app/components/cars/add-car/add-car.component.ts");
/* harmony import */ var _components_cars_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/cars/car-details/car-details.component */ "./src/app/components/cars/car-details/car-details.component.ts");
/* harmony import */ var _components_users_full_user_details_full_user_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/users/full-user-details/full-user-details.component */ "./src/app/components/users/full-user-details/full-user-details.component.ts");
/* harmony import */ var _components_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/users/edit-user/edit-user.component */ "./src/app/components/users/edit-user/edit-user.component.ts");
/* harmony import */ var _components_users_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/users/password-change/password-change.component */ "./src/app/components/users/password-change/password-change.component.ts");
/* harmony import */ var _components_users_management_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/users/management/user-details/user-details.component */ "./src/app/components/users/management/user-details/user-details.component.ts");
/* harmony import */ var _components_rides_rides_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/rides/rides.component */ "./src/app/components/rides/rides.component.ts");
/* harmony import */ var _components_rides_new_ride_new_ride_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/rides/new-ride/new-ride.component */ "./src/app/components/rides/new-ride/new-ride.component.ts");
/* harmony import */ var _components_rides_accept_ride_accept_ride_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/rides/accept-ride/accept-ride.component */ "./src/app/components/rides/accept-ride/accept-ride.component.ts");
/* harmony import */ var _components_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/rides/ride-details/ride-details.component */ "./src/app/components/rides/ride-details/ride-details.component.ts");
/* harmony import */ var _route_guards_no_driver_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../route-guards/no-driver.guard */ "./src/app/route-guards/no-driver.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_route_guards_login_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuard"]] },
    { path: 'registration', component: _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], canActivate: [_route_guards_login_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuard"], _route_guards_registration_guard__WEBPACK_IMPORTED_MODULE_8__["RegistrationGuard"]] },
    { path: 'profile', component: _components_users_full_user_details_full_user_details_component__WEBPACK_IMPORTED_MODULE_13__["FullUserDetailsComponent"], canActivate: [_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'edit-profile', component: _components_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_14__["EditUserComponent"], canActivate: [_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'password-change', component: _components_users_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_15__["PasswordChangeComponent"], canActivate: [_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'driver-registration-error', component: _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_9__["NoCarsErrorComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_route_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: [
            { path: 'rides', component: _components_rides_rides_component__WEBPACK_IMPORTED_MODULE_17__["RidesComponent"], children: [
                    { path: 'new', component: _components_rides_new_ride_new_ride_component__WEBPACK_IMPORTED_MODULE_18__["NewRideComponent"], canActivate: [_route_guards_no_driver_guard__WEBPACK_IMPORTED_MODULE_21__["NoDriverGuard"]] },
                    { path: ':id/edit', component: _components_rides_new_ride_new_ride_component__WEBPACK_IMPORTED_MODULE_18__["NewRideComponent"] },
                    { path: ':id/accept', component: _components_rides_accept_ride_accept_ride_component__WEBPACK_IMPORTED_MODULE_19__["AcceptRideComponent"] },
                    { path: ':id', component: _components_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_20__["RideDetailsComponent"] },
                ] },
            { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], children: [
                    { path: ':username', component: _components_users_management_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"] }
                ] },
            { path: 'cars', component: _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_10__["CarsComponent"], children: [
                    { path: 'new', component: _components_cars_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_11__["AddCarComponent"] },
                    { path: ':id/edit', component: _components_cars_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_11__["AddCarComponent"] },
                    { path: ':id', component: _components_cars_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_12__["CarDetailsComponent"] }
                ] }
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

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\" >\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/directives/dropdown.directive.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/registration/registration.component */ "./src/app/components/users/registration/registration.component.ts");
/* harmony import */ var _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/errors/no-cars-error/no-cars-error.component */ "./src/app/components/errors/no-cars-error/no-cars-error.component.ts");
/* harmony import */ var _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cars/cars.component */ "./src/app/components/cars/cars.component.ts");
/* harmony import */ var _components_cars_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cars/add-car/add-car.component */ "./src/app/components/cars/add-car/add-car.component.ts");
/* harmony import */ var _components_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/drivers/drivers.component */ "./src/app/components/drivers/drivers.component.ts");
/* harmony import */ var _components_drivers_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/drivers/edit-driver/edit-driver.component */ "./src/app/components/drivers/edit-driver/edit-driver.component.ts");
/* harmony import */ var _components_cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cars/cars-list/cars-list.component */ "./src/app/components/cars/cars-list/cars-list.component.ts");
/* harmony import */ var _components_cars_car_item_car_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cars/car-item/car-item.component */ "./src/app/components/cars/car-item/car-item.component.ts");
/* harmony import */ var _components_cars_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cars/car-details/car-details.component */ "./src/app/components/cars/car-details/car-details.component.ts");
/* harmony import */ var _components_users_full_user_details_full_user_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/users/full-user-details/full-user-details.component */ "./src/app/components/users/full-user-details/full-user-details.component.ts");
/* harmony import */ var _components_users_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/users/password-change/password-change.component */ "./src/app/components/users/password-change/password-change.component.ts");
/* harmony import */ var _components_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/users/edit-user/edit-user.component */ "./src/app/components/users/edit-user/edit-user.component.ts");
/* harmony import */ var _components_users_management_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/users/management/user-list/user-list.component */ "./src/app/components/users/management/user-list/user-list.component.ts");
/* harmony import */ var _components_users_management_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/users/management/user-details/user-details.component */ "./src/app/components/users/management/user-details/user-details.component.ts");
/* harmony import */ var _components_users_management_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/users/management/user-item/user-item.component */ "./src/app/components/users/management/user-item/user-item.component.ts");
/* harmony import */ var _components_rides_rides_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/rides/rides.component */ "./src/app/components/rides/rides.component.ts");
/* harmony import */ var _components_rides_rides_list_rides_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/rides/rides-list/rides-list.component */ "./src/app/components/rides/rides-list/rides-list.component.ts");
/* harmony import */ var _components_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/rides/ride-details/ride-details.component */ "./src/app/components/rides/ride-details/ride-details.component.ts");
/* harmony import */ var _components_rides_ride_item_ride_item_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/rides/ride-item/ride-item.component */ "./src/app/components/rides/ride-item/ride-item.component.ts");
/* harmony import */ var _components_rides_new_ride_new_ride_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/rides/new-ride/new-ride.component */ "./src/app/components/rides/new-ride/new-ride.component.ts");
/* harmony import */ var _components_rides_accept_ride_accept_ride_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/rides/accept-ride/accept-ride.component */ "./src/app/components/rides/accept-ride/accept-ride.component.ts");
/* harmony import */ var _components_rides_comment_details_comment_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/rides/comment-details/comment-details.component */ "./src/app/components/rides/comment-details/comment-details.component.ts");
/* harmony import */ var _components_rides_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/rides/add-comment/add-comment.component */ "./src/app/components/rides/add-comment/add-comment.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_external_apis_data_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/external-apis-data.service */ "./src/app/services/external-apis-data.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _components_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"],
                _components_errors_no_cars_error_no_cars_error_component__WEBPACK_IMPORTED_MODULE_14__["NoCarsErrorComponent"],
                _components_cars_cars_component__WEBPACK_IMPORTED_MODULE_15__["CarsComponent"],
                _components_cars_add_car_add_car_component__WEBPACK_IMPORTED_MODULE_16__["AddCarComponent"],
                _components_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_17__["DriversComponent"],
                _components_drivers_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_18__["EditDriverComponent"],
                _components_cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_19__["CarsListComponent"],
                _components_cars_car_item_car_item_component__WEBPACK_IMPORTED_MODULE_20__["CarItemComponent"],
                _components_cars_car_details_car_details_component__WEBPACK_IMPORTED_MODULE_21__["CarDetailsComponent"],
                _components_users_full_user_details_full_user_details_component__WEBPACK_IMPORTED_MODULE_22__["FullUserDetailsComponent"],
                _components_users_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_23__["PasswordChangeComponent"],
                _components_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__["EditUserComponent"],
                _components_users_management_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _components_users_management_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_26__["UserDetailsComponent"],
                _components_users_management_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_27__["UserItemComponent"],
                _components_rides_rides_component__WEBPACK_IMPORTED_MODULE_28__["RidesComponent"],
                _components_rides_rides_list_rides_list_component__WEBPACK_IMPORTED_MODULE_29__["RidesListComponent"],
                _components_rides_ride_details_ride_details_component__WEBPACK_IMPORTED_MODULE_30__["RideDetailsComponent"],
                _components_rides_ride_item_ride_item_component__WEBPACK_IMPORTED_MODULE_31__["RideItemComponent"],
                _components_rides_new_ride_new_ride_component__WEBPACK_IMPORTED_MODULE_32__["NewRideComponent"],
                _components_rides_accept_ride_accept_ride_component__WEBPACK_IMPORTED_MODULE_33__["AcceptRideComponent"],
                _components_rides_comment_details_comment_details_component__WEBPACK_IMPORTED_MODULE_34__["CommentDetailsComponent"],
                _components_rides_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_35__["AddCommentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_36__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBrjeABCsOwW1rhi7eW6_b_fWF8OK2HeiA'
                })
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], _services_external_apis_data_service__WEBPACK_IMPORTED_MODULE_37__["ExternalApisDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cars/add-car/add-car.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/cars/add-car/add-car.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cars/add-car/add-car.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/cars/add-car/add-car.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"!editMode\">New car</h3>\r\n<h3 *ngIf=\"editMode\">Edit {{car?.CarNumber}}</h3>\r\n<form [formGroup]=\"carForm\" (submit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"registration\">Registration</label>\r\n    <input type=\"text\" id=\"registation\" formControlName=\"registration\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"year\">Year</label>\r\n    <input type=\"number\" id=\"year\" formControlName=\"year\" class=\"form-control\">\r\n  </div>\r\n  <select id=\"type\" formControlName=\"type\" class=\"form-control\">\r\n    <option value=0>Sedan</option>\r\n    <option value=1>Van</option>\r\n  </select>\r\n  <hr>\r\n  <button type=\"submit\" class=\"btn btn-primary\">{{editMode ? 'Edit' : 'Add'}}</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cars/add-car/add-car.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/cars/add-car/add-car.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarComponent", function() { return AddCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cars_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cars-data.service */ "./src/app/services/cars-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCarComponent = /** @class */ (function () {
    function AddCarComponent(carsService, route, router) {
        this.carsService = carsService;
        this.route = route;
        this.router = router;
        this.editMode = false;
    }
    AddCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            if (!_this.editMode) {
                _this.carForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
                    year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
                });
            }
            else {
                _this.carsService.getCarByNumber(_this.id).subscribe(function (data) {
                    if (!data) {
                        _this.router.navigate(['/home', 'cars']);
                        return;
                    }
                    _this.car = data;
                    _this.carForm.patchValue({
                        'registration': _this.car['Registration'],
                        'year': _this.car['Year'],
                        'type': _this.car['CarType']
                    });
                });
                _this.carForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                    year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                });
            }
        });
    };
    AddCarComponent.prototype.onSubmit = function () {
        var c;
        if (this.editMode) {
            c = {
                carNumber: this.car['CarNumber'],
                driver: this.car['Driver'],
                carType: +this.carForm.value.type,
                registration: this.carForm.value.registration,
                year: +this.carForm.value.year
            };
            this.carsService.updateCar(c);
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            c = {
                carNumber: null,
                driver: null,
                carType: +this.carForm.value.type,
                registration: this.carForm.value.registration,
                year: +this.carForm.value.year
            };
            this.carsService.addNewCar(c);
        }
    };
    AddCarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-car',
            template: __webpack_require__(/*! ./add-car.component.html */ "./src/app/components/cars/add-car/add-car.component.html"),
            styles: [__webpack_require__(/*! ./add-car.component.css */ "./src/app/components/cars/add-car/add-car.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cars_data_service__WEBPACK_IMPORTED_MODULE_1__["CarsDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddCarComponent);
    return AddCarComponent;
}());



/***/ }),

/***/ "./src/app/components/cars/car-details/car-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/cars/car-details/car-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-size: 20px\r\n}"

/***/ }),

/***/ "./src/app/components/cars/car-details/car-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/cars/car-details/car-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Details</h2>\r\n<div class=\"pull-left\">\r\n  <p class=\"list-group-item-text\">Registration: {{car?.Registration}}</p>\r\n  <p class=\"list-group-item-text\">Driver: {{car?.Driver}}</p>\r\n  <p class=\"list-group-item-text\">CarType: {{car?.CarType === 0 ? 'Sedan' : 'Van'}}</p>\r\n  <p class=\"list-group-item-text\">Year: {{car?.Year}}</p>\r\n</div>\r\n<div class=\"pull-right\">\r\n<a class=\"btn btn-primary\" (click)=\"onEdit()\">Edit</a>\r\n<a *ngIf=\"!car?.Driver\" class=\"btn btn-danger\" (click)=\"onRemove()\">Remove</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cars/car-details/car-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/cars/car-details/car-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: CarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsComponent", function() { return CarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cars_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cars-data.service */ "./src/app/services/cars-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarDetailsComponent = /** @class */ (function () {
    function CarDetailsComponent(route, router, carsService) {
        this.route = route;
        this.router = router;
        this.carsService = carsService;
        this.car = null;
    }
    CarDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carSubscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.carSubscription = _this.carsService.getCarByNumber(_this.id).subscribe(function (car) {
                if (!car) {
                    _this.router.navigate(['../'], { relativeTo: _this.route });
                }
                _this.car = car;
            });
        });
    };
    CarDetailsComponent.prototype.ngOnDestroy = function () {
        this.carSubscription.unsubscribe();
    };
    CarDetailsComponent.prototype.onEdit = function () {
        this.router.navigate(['../', this.car['CarNumber'], 'edit'], { relativeTo: this.route });
    };
    CarDetailsComponent.prototype.onRemove = function () {
        this.carsService.removeCar(this.car['CarNumber']);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-details',
            template: __webpack_require__(/*! ./car-details.component.html */ "./src/app/components/cars/car-details/car-details.component.html"),
            styles: [__webpack_require__(/*! ./car-details.component.css */ "./src/app/components/cars/car-details/car-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_cars_data_service__WEBPACK_IMPORTED_MODULE_2__["CarsDataService"]])
    ], CarDetailsComponent);
    return CarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/cars/car-item/car-item.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/cars/car-item/car-item.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cars/car-item/car-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/cars/car-item/car-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[car.CarNumber]\" routerLinkActive=\"active\" style=\"cursor:pointer\" class=\"list-group-item clearfix\" >\r\n  <div class=\"pull-left\">\r\n      <h4 class=\"list-group-item-heading\">{{car.CarNumber}}</h4>\r\n  </div>\r\n</a>"

/***/ }),

/***/ "./src/app/components/cars/car-item/car-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/cars/car-item/car-item.component.ts ***!
  \****************************************************************/
/*! exports provided: CarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarItemComponent", function() { return CarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cars_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cars-data.service */ "./src/app/services/cars-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarItemComponent = /** @class */ (function () {
    function CarItemComponent(route, router, carsService) {
        this.route = route;
        this.router = router;
        this.carsService = carsService;
    }
    CarItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarItemComponent.prototype, "car", void 0);
    CarItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-item',
            template: __webpack_require__(/*! ./car-item.component.html */ "./src/app/components/cars/car-item/car-item.component.html"),
            styles: [__webpack_require__(/*! ./car-item.component.css */ "./src/app/components/cars/car-item/car-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_cars_data_service__WEBPACK_IMPORTED_MODULE_2__["CarsDataService"]])
    ], CarItemComponent);
    return CarItemComponent;
}());



/***/ }),

/***/ "./src/app/components/cars/cars-list/cars-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/cars/cars-list/cars-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pre-scrollable {\r\n    max-height: 400px;\r\n    overflow-y: scroll;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cars/cars-list/cars-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/cars/cars-list/cars-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row well well-sm pre-scrollable\">\r\n  <div class=\"list-group\">\r\n  <app-car-item *ngFor=\"let car of cars\"\r\n  [car]=\"car\"></app-car-item>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cars/cars-list/cars-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/cars/cars-list/cars-list.component.ts ***!
  \******************************************************************/
/*! exports provided: CarsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsListComponent", function() { return CarsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cars_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cars-data.service */ "./src/app/services/cars-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarsListComponent = /** @class */ (function () {
    function CarsListComponent(carService) {
        this.carService = carService;
        this.cars = [];
    }
    CarsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carsSubscription = this.carService.getAllCars().subscribe(function (data) {
            _this.cars = data;
            console.log(_this.cars);
        });
    };
    CarsListComponent.prototype.ngOnDestroy = function () {
        this.carsSubscription.unsubscribe();
    };
    CarsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cars-list',
            template: __webpack_require__(/*! ./cars-list.component.html */ "./src/app/components/cars/cars-list/cars-list.component.html"),
            styles: [__webpack_require__(/*! ./cars-list.component.css */ "./src/app/components/cars/cars-list/cars-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cars_data_service__WEBPACK_IMPORTED_MODULE_1__["CarsDataService"]])
    ], CarsListComponent);
    return CarsListComponent;
}());



/***/ }),

/***/ "./src/app/components/cars/cars.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cars/cars.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cars/cars.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cars/cars.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h3>All cars</h3>\r\n    <app-cars-list></app-cars-list>\r\n  </div>\r\n  <div class=\"col-md-5 col-md-offset-1\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cars/cars.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cars/cars.component.ts ***!
  \***************************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
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

var CarsComponent = /** @class */ (function () {
    function CarsComponent() {
    }
    CarsComponent.prototype.ngOnInit = function () {
    };
    CarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cars',
            template: __webpack_require__(/*! ./cars.component.html */ "./src/app/components/cars/cars.component.html"),
            styles: [__webpack_require__(/*! ./cars.component.css */ "./src/app/components/cars/cars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "./src/app/components/drivers/drivers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/drivers/drivers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/drivers/drivers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/drivers/drivers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  drivers works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/drivers/drivers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/drivers/drivers.component.ts ***!
  \*********************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
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

var DriversComponent = /** @class */ (function () {
    function DriversComponent() {
    }
    DriversComponent.prototype.ngOnInit = function () {
    };
    DriversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! ./drivers.component.html */ "./src/app/components/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.css */ "./src/app/components/drivers/drivers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/components/drivers/edit-driver/edit-driver.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/drivers/edit-driver/edit-driver.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/drivers/edit-driver/edit-driver.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/drivers/edit-driver/edit-driver.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit-driver works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/drivers/edit-driver/edit-driver.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/drivers/edit-driver/edit-driver.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDriverComponent", function() { return EditDriverComponent; });
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

var EditDriverComponent = /** @class */ (function () {
    function EditDriverComponent() {
    }
    EditDriverComponent.prototype.ngOnInit = function () {
    };
    EditDriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-driver',
            template: __webpack_require__(/*! ./edit-driver.component.html */ "./src/app/components/drivers/edit-driver/edit-driver.component.html"),
            styles: [__webpack_require__(/*! ./edit-driver.component.css */ "./src/app/components/drivers/edit-driver/edit-driver.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditDriverComponent);
    return EditDriverComponent;
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

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"toogleCollapse()\">\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a routerLink=\"/home\" class=\"navbar-brand\" style=\"cursor:pointer\">Taxi Service</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\" #responsiveNavbar collapse=\"navCollapsed\" >\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\" *ngIf=\"!userType || userType === 0\">\r\n                    <a routerLink=\"/login\" style=\"cursor: pointer;\">Login</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" class=\"dropdown\" appDropdown *ngIf=\"!userType || userType === 0\">\r\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Registration<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a routerLink=\"/registration\" [queryParams]=\"{type: 'customer'}\" style=\"cursor: pointer;\">New Customer</a></li>\r\n                        <li><a routerLink=\"/registration\" [queryParams]=\"{type: 'driver'}\" style=\"cursor: pointer;\">New Driver</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\" appDropdown *ngIf=\"userType && userType !== 0\">\r\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Rides<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li *ngIf=\"userType && userType !== 2\"><a [routerLink]=\"['/home','rides','new']\" style=\"cursor: pointer;\">Add New</a></li>\r\n                        <li><a [routerLink]=\"['/home','rides']\" style=\"cursor: pointer;\">All Rides</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\" appDropdown *ngIf=\"userType === 3\">\r\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Users<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a style=\"cursor: pointer;\" [routerLink]=\"['/home','users']\" routerLinkActive=\"router-link-active\" >All Users</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\" appDropdown *ngIf=\"userType === 3\">\r\n                        <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Cars<span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a [routerLink]=\"['/home','cars','new']\" style=\"cursor: pointer;\">Add New</a></li>\r\n                            <li><a [routerLink]=\"['/home','cars']\" style=\"cursor: pointer;\">All Cars</a></li>\r\n                        </ul>\r\n                    </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"userType && userType !== 0\">\r\n                <li class=\"dropdown\" appDropdown>\r\n                    <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\" >Settings<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a routerLink=\"/profile\" style=\"cursor: pointer;\">User Profile</a></li>\r\n                        <li><a routerLink=\"/password-change\" style=\"cursor: pointer;\">Change Password</a></li>\r\n                        <li *ngIf=\"userType && userType !== 3\" ><a style=\"cursor: pointer;\" (click)=\"onDeleteAccount()\">Delete Account</a></li>\r\n                        <li><a style=\"cursor: pointer;\" (click)=\"onLogout()\">Logout</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

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
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
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
    function HeaderComponent(authService, router, usersService) {
        this.authService = authService;
        this.router = router;
        this.usersService = usersService;
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
    HeaderComponent.prototype.onDeleteAccount = function () {
        this.usersService.removeUser(this.username);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
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

module.exports = "<router-outlet></router-outlet>\r\n"

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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form [formGroup]=\"loginForm\" (submit)=\"onLogin()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n        </div>\r\n        <span *ngIf=\"failed\" class=\"help-block\">Invalid username or password!</span>\r\n        <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-default\">Login</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

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
        var _this = this;
        this.authSevice.authStatus.subscribe(function (ok) {
            if (ok) {
                _this.router.navigate(['/home', 'drives']);
            }
            else {
                _this.failed = true;
            }
        });
        var ok = this.authSevice.authenticateUser(this.loginForm.value['username'], this.loginForm.value['password']);
        if (ok === true) {
            this.router.navigate(['/home', 'drives']);
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

/***/ "./src/app/components/rides/accept-ride/accept-ride.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/rides/accept-ride/accept-ride.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rides/accept-ride/accept-ride.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/rides/accept-ride/accept-ride.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!isDriver\" [formGroup]=\"acceptForm\" (submit)=\"onAccept()\">\r\n<div class=\"form-group\">\r\n  <label for=\"driver\">Select Driver</label>\r\n  <select id=\"driver\" formControlName=\"driver\" class=\"form-control\">\r\n    <option *ngFor=\"let driver of drivers\" [value]=\"driver\">{{driver}}</option>\r\n  </select>\r\n</div>\r\n<br>\r\n<span class=\"help-block\" *ngIf=\"noFreeDrivers\">Fields marked with * are required.</span>\r\n<button [disabled]=\"!acceptForm.valid\" type=\"submit\" class=\"btn btn-default\">Accept</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/rides/accept-ride/accept-ride.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/rides/accept-ride/accept-ride.component.ts ***!
  \***********************************************************************/
/*! exports provided: AcceptRideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRideComponent", function() { return AcceptRideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rides_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/rides.service */ "./src/app/services/rides.service.ts");
/* harmony import */ var _services_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/interfaces */ "./src/app/services/interfaces.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AcceptRideComponent = /** @class */ (function () {
    function AcceptRideComponent(authService, userService, ridesService, route, router) {
        this.authService = authService;
        this.userService = userService;
        this.ridesService = ridesService;
        this.route = route;
        this.router = router;
        this.drivers = [];
        this.isDriver = false;
        this.noFreeDrivers = true;
        this.acceptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            driver: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    AcceptRideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.rideId = params.id;
        });
        this.isDriver = this.authService.getUserType() === _services_usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Driver;
        if (!this.isDriver) {
            var drivers = this.userService.getAllDrivers();
            drivers.forEach(function (username) {
                var rides = _this.ridesService.getAllRidesForDriver(username);
                if (!rides.find(function (ride) { return (ride.status !== _services_interfaces__WEBPACK_IMPORTED_MODULE_5__["RideStatus"].sucessful && ride.status !== _services_interfaces__WEBPACK_IMPORTED_MODULE_5__["RideStatus"].failed); })) {
                    _this.drivers.push(username);
                }
            });
            if (this.drivers.length === 0) {
                this.noFreeDrivers = true;
            }
            else {
                this.noFreeDrivers = false;
                this.acceptForm.patchValue({ driver: drivers[0] });
            }
        }
        else {
            this.onAccept();
        }
    };
    AcceptRideComponent.prototype.onAccept = function () {
        if (!this.isDriver) {
            this.ridesService.acceptRide(this.authService.getCurrentUsername(), this.acceptForm.value.driver, this.rideId, _services_usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Dispatcher);
        }
        else {
            this.ridesService.acceptRide(null, this.authService.getCurrentUsername(), this.rideId, _services_usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Driver);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    AcceptRideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accept-ride',
            template: __webpack_require__(/*! ./accept-ride.component.html */ "./src/app/components/rides/accept-ride/accept-ride.component.html"),
            styles: [__webpack_require__(/*! ./accept-ride.component.css */ "./src/app/components/rides/accept-ride/accept-ride.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _services_rides_service__WEBPACK_IMPORTED_MODULE_4__["RidesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AcceptRideComponent);
    return AcceptRideComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/add-comment/add-comment.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/rides/add-comment/add-comment.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rides/add-comment/add-comment.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/rides/add-comment/add-comment.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-comment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/rides/add-comment/add-comment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/rides/add-comment/add-comment.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
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

var AddCommentComponent = /** @class */ (function () {
    function AddCommentComponent() {
    }
    AddCommentComponent.prototype.ngOnInit = function () {
    };
    AddCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-comment',
            template: __webpack_require__(/*! ./add-comment.component.html */ "./src/app/components/rides/add-comment/add-comment.component.html"),
            styles: [__webpack_require__(/*! ./add-comment.component.css */ "./src/app/components/rides/add-comment/add-comment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCommentComponent);
    return AddCommentComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/comment-details/comment-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/rides/comment-details/comment-details.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rides/comment-details/comment-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/rides/comment-details/comment-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  comment-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/rides/comment-details/comment-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/rides/comment-details/comment-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDetailsComponent", function() { return CommentDetailsComponent; });
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

var CommentDetailsComponent = /** @class */ (function () {
    function CommentDetailsComponent() {
    }
    CommentDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentDetailsComponent.prototype, "comment", void 0);
    CommentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-details',
            template: __webpack_require__(/*! ./comment-details.component.html */ "./src/app/components/rides/comment-details/comment-details.component.html"),
            styles: [__webpack_require__(/*! ./comment-details.component.css */ "./src/app/components/rides/comment-details/comment-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentDetailsComponent);
    return CommentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/new-ride/new-ride.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/rides/new-ride/new-ride.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/components/rides/new-ride/new-ride.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/rides/new-ride/new-ride.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"!editMode\">New ride</h3>\r\n<h3 *ngIf=\"editMode\">Edit ride</h3>\r\n\r\n<!--Google maps component-->\r\n<agm-map [zoom]=\"zoom\" [latitude]=\"latitude\" [longitude]=\"longitude\" (mapClick)=\"onChoseLocation($event)\">\r\n  <agm-marker *ngIf=\"chosen\" [longitude]=\"marker.lng\" [latitude]=\"marker.lat\" [markerDraggable]=\"draggable\"></agm-marker>\r\n</agm-map>\r\n\r\n<form [formGroup]=\"rideForm\" (submit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"address\">Address</label>\r\n    <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\">\r\n  </div>\r\n  <button class=\"btn btn-default\" type=\"button\" (click)=\"onCheckAddress()\">Check Address</button>\r\n  <div class=\"form-group\">\r\n    <label for=\"cartype\">Car type</label>\r\n    <select id=\"type\" formControlName=\"cartype\" class=\"form-control\">\r\n      <option value=0>Sedan</option>\r\n      <option value=1>Van</option>\r\n    </select>\r\n  </div>\r\n  <hr>\r\n  <button type=\"submit\" class=\"btn btn-primary\">{{editMode ? 'Edit' : 'Add'}}</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/rides/new-ride/new-ride.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/rides/new-ride/new-ride.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewRideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRideComponent", function() { return NewRideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rides.service */ "./src/app/services/rides.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_external_apis_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/external-apis-data.service */ "./src/app/services/external-apis-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/interfaces */ "./src/app/services/interfaces.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewRideComponent = /** @class */ (function () {
    function NewRideComponent(ridesService, route, apisServices, http, authService) {
        this.ridesService = ridesService;
        this.route = route;
        this.apisServices = apisServices;
        this.http = http;
        this.authService = authService;
        this.editMode = false;
        this.isDispatcher = false;
        //google maps specific
        this.latitude = 45.260656;
        this.longitude = 19.832157;
        this.marker = { lat: null, lng: null };
        this.zoom = 14;
        this.chosen = false;
        this.draggable = true;
        this.error = false;
    }
    NewRideComponent.prototype.ngOnInit = function () {
        this.rideForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cartype: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            driver: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.isDispatcher = this.authService.getUserType() === _services_usertype_enum__WEBPACK_IMPORTED_MODULE_8__["Usertype"].Dispatcher;
    };
    NewRideComponent.prototype.onSubmit = function () {
        var d = new Date();
        if (!this.editMode) {
            var newRide = {
                location: {
                    address: this.rideForm.value.address,
                    lat: this.marker.lat,
                    long: this.marker.lng
                },
                comment: null,
                destination: null,
                driver: null,
                fare: 0,
                status: _services_interfaces__WEBPACK_IMPORTED_MODULE_6__["RideStatus"].waiting,
                time: null,
                id: -1,
                dispatcher: null,
                customer: null
            };
            if (this.isDispatcher) {
                newRide.dispatcher = this.authService.getCurrentUsername();
            }
            else {
                newRide.customer = this.authService.getCurrentUsername();
            }
            this.ridesService.newRide(newRide);
        }
        else {
        }
    };
    NewRideComponent.prototype.onChoseLocation = function (event) {
        this.marker.lat = event.coords.lat;
        this.marker.lng = event.coords.lng;
        this.chosen = true;
        this.getAddressFromLocation();
    };
    NewRideComponent.prototype.getAddressFromLocation = function () {
        var _this = this;
        //here maps reverse geocoding api
        var requestString = 'https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?prox=' + this.marker.lat + '%2C' + this.marker.lng + '%2C250&mode=retrieveAddresses&maxresults=1&gen=8&app_id=' + this.apisServices.getHereAppId() + '&app_code=' + this.apisServices.getHereAppCode() + '&language=en-US';
        this.http.get(requestString).subscribe(function (response) {
            console.log(response);
            var address = response['Response']['View'][0]['Result'][0]['Location']['Address']['Label'];
            _this.rideForm.patchValue({ address: address });
        });
    };
    NewRideComponent.prototype.getLocationFromAddres = function () {
        var _this = this;
        //here maps geocoding api
        var requestString = 'https://geocoder.cit.api.here.com/6.2/geocode.json?searchtext=' + this.rideForm.value.address + '&app_id=' + this.apisServices.getHereAppId() + '&app_code=' + this.apisServices.getHereAppCode() + '&gen=8';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers.set('Accept-Language', 'en-US');
        this.http.get(requestString, { headers: headers }).subscribe(function (response) {
            var data = response['Response']['View'];
            if (data.length === 0) {
                _this.error = true;
            }
            else {
                _this.error = false;
                var location_1 = data[0]['Result'][0]['Location']['NavigationPosition'][0];
                _this.marker.lat = location_1['Latitude'];
                _this.marker.lng = location_1['Longitude'];
                _this.chosen = true;
                console.log(location_1);
            }
        });
    };
    NewRideComponent.prototype.onCheckAddress = function (event) {
        this.getLocationFromAddres();
    };
    NewRideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-ride',
            template: __webpack_require__(/*! ./new-ride.component.html */ "./src/app/components/rides/new-ride/new-ride.component.html"),
            styles: [__webpack_require__(/*! ./new-ride.component.css */ "./src/app/components/rides/new-ride/new-ride.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rides_service__WEBPACK_IMPORTED_MODULE_2__["RidesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_external_apis_data_service__WEBPACK_IMPORTED_MODULE_4__["ExternalApisDataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], NewRideComponent);
    return NewRideComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/ride-details/ride-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/rides/ride-details/ride-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".help-block{\r\n    color: red;\r\n    font-size: 20px;\r\n}\r\n\r\np{\r\n    font-size: 13px\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/rides/ride-details/ride-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/rides/ride-details/ride-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Details</h2>\r\n<div *ngIf=\"ride\" class=\"pull-left\">\r\n  <p class=\"list-group-item-text\" >Pickup location: {{ride.location.address}}</p>\r\n  <p *ngIf=\"ride.destination\" class=\"list-group-item-text\">Destination : {{ride.destination.address}}</p>\r\n  <p class=\"list-group-item-text\">Created on: {{ride.time}}</p>\r\n  <p class=\"list-group-item-text\">Status: {{rideStatus}}</p>\r\n  <p class=\"list-group-item-text\">Driver: {{ride.driver}}</p>\r\n  <p class=\"list-group-item-text\">Fare: {{ride.fare}}</p>\r\n  <app-comment-details *ngIf=\"ride && ride.comment\" [comment]=\"ride.comment\"></app-comment-details>\r\n  <span class=\"help-block\" *ngIf=\"cancelFailed\">Failed to cancel ride, no longer in waiting.</span>\r\n</div>\r\n\r\n<div class=\"pull-right\">\r\n  <a *ngIf=\"(userType === 3 || userType === 2) && ride.status === 2 && (userType === 2 && driverFree)\" [routerLink]=\"['accept']\" class=\"btn btn-success\">Accept</a>\r\n  <button *ngIf=\"userType === 1 && ride.status === 2\"  class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/rides/ride-details/ride-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/rides/ride-details/ride-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: RideDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailsComponent", function() { return RideDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rides.service */ "./src/app/services/rides.service.ts");
/* harmony import */ var _services_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/interfaces */ "./src/app/services/interfaces.ts");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RideDetailsComponent = /** @class */ (function () {
    function RideDetailsComponent(route, router, ridesService, authService) {
        this.route = route;
        this.router = router;
        this.ridesService = ridesService;
        this.authService = authService;
        this.cancelFailed = false;
        this.driverFree = true;
    }
    RideDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.ride = _this.ridesService.getRideById(_this.id);
            switch (_this.ride.status) {
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].waiting:
                    _this.rideStatus = 'Waiting';
                    break;
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].accepted:
                    _this.rideStatus = 'Accepted';
                    break;
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].cancelled:
                    _this.rideStatus = 'Cancelled';
                    break;
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].sucessful:
                    _this.rideStatus = 'Succesful';
                    break;
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].failed:
                    _this.rideStatus = 'Failed';
                    break;
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].processed:
                    _this.rideStatus = 'Processed';
                    break;
                case _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].ordered:
                    _this.rideStatus = 'Ordered';
                    break;
            }
        });
        this.userType = this.authService.getUserType();
        this.ridesService.ridesChanged.subscribe(function (rides) {
            _this.updateDriverStatus();
        });
        if (this.userType === _services_usertype_enum__WEBPACK_IMPORTED_MODULE_4__["Usertype"].Driver) {
            this.updateDriverStatus();
        }
    };
    RideDetailsComponent.prototype.updateDriverStatus = function () {
        var driverRides = this.ridesService.getAllRidesForDriver(this.authService.getCurrentUsername());
        var driverBusy = false;
        driverRides.forEach(function (ride) {
            if (ride.status !== _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].waiting && ride.status !== _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].sucessful && ride.status !== _services_interfaces__WEBPACK_IMPORTED_MODULE_3__["RideStatus"].failed) {
                driverBusy = true;
            }
        });
        this.driverFree = !driverBusy;
    };
    RideDetailsComponent.prototype.onCancel = function () {
        var _this = this;
        if (!this.ridesService.cancelRide(this.ride.id)) {
            this.cancelFailed = true;
            setTimeout(function () {
                _this.cancelFailed = false;
            }, 2000);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RideDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-details',
            template: __webpack_require__(/*! ./ride-details.component.html */ "./src/app/components/rides/ride-details/ride-details.component.html"),
            styles: [__webpack_require__(/*! ./ride-details.component.css */ "./src/app/components/rides/ride-details/ride-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_rides_service__WEBPACK_IMPORTED_MODULE_2__["RidesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RideDetailsComponent);
    return RideDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/ride-item/ride-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/rides/ride-item/ride-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rides/ride-item/ride-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/rides/ride-item/ride-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[ride.id]\" routerLinkActive=\"active\" style=\"cursor:pointer\" class=\"list-group-item clearfix\" >\r\n  <div class=\"pull-left\">\r\n      <h4 class=\"list-group-item-heading\">{{ride.location.address}}</h4>\r\n      <h4 class=\"list-group-item-heading\">{{ride.time}}</h4>\r\n  </div>\r\n</a>"

/***/ }),

/***/ "./src/app/components/rides/ride-item/ride-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/rides/ride-item/ride-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: RideItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideItemComponent", function() { return RideItemComponent; });
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

var RideItemComponent = /** @class */ (function () {
    function RideItemComponent() {
    }
    RideItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RideItemComponent.prototype, "ride", void 0);
    RideItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-item',
            template: __webpack_require__(/*! ./ride-item.component.html */ "./src/app/components/rides/ride-item/ride-item.component.html"),
            styles: [__webpack_require__(/*! ./ride-item.component.css */ "./src/app/components/rides/ride-item/ride-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RideItemComponent);
    return RideItemComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/rides-list/rides-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/rides/rides-list/rides-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rides/rides-list/rides-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/rides/rides-list/rides-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n<h3 *ngIf=\"waiting\">Waiting rides</h3>\r\n<h3 *ngIf=\"!waiting\">All rides</h3>\r\n</div> -->\r\n<div class=\"row\">\r\n  <button *ngIf=\"!waiting\" class=\"btn btn-primary\" (click)=\"onWaitingRides()\">All rides</button>\r\n  <button *ngIf=\"waiting\" class=\"btn btn-primary\" (click)=\"onAllRides()\">Waiting</button>\r\n</div>\r\n<br>\r\n\r\n<div class=\" row well well-sm pre-scrollable\">\r\n  <div class=\"list-group\">\r\n  <app-ride-item *ngFor=\"let ride of rides\"\r\n  [ride]=\"ride\"></app-ride-item>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/rides/rides-list/rides-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/rides/rides-list/rides-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: RidesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidesListComponent", function() { return RidesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_rides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rides.service */ "./src/app/services/rides.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RidesListComponent = /** @class */ (function () {
    function RidesListComponent(ridesService, authService) {
        this.ridesService = ridesService;
        this.authService = authService;
        this.rides = [];
        this.ridesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.waiting = false;
    }
    RidesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userType = this.authService.getUserType();
        this.ridesSubscription = this.ridesService.ridesChanged.subscribe(function (rides) {
            _this.rides = rides;
        });
        this.rides = this.ridesService.getAllRides();
    };
    RidesListComponent.prototype.ngOnDestroy = function () {
        this.ridesSubscription.unsubscribe();
    };
    RidesListComponent.prototype.onAllRides = function () {
        var _this = this;
        this.waiting = false;
        this.ridesSubscription.unsubscribe();
        this.ridesSubscription = this.ridesService.ridesChanged.subscribe(function (rides) {
            _this.rides = rides;
        });
        this.rides = this.ridesService.getAllRides();
    };
    RidesListComponent.prototype.onWaitingRides = function () {
        var _this = this;
        this.waiting = true;
        this.ridesSubscription.unsubscribe();
        this.ridesSubscription = this.ridesService.waitingRidesChanged.subscribe(function (rides) {
            _this.rides = rides;
        });
        this.rides = this.ridesService.getAllWaitingRides();
    };
    RidesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rides-list',
            template: __webpack_require__(/*! ./rides-list.component.html */ "./src/app/components/rides/rides-list/rides-list.component.html"),
            styles: [__webpack_require__(/*! ./rides-list.component.css */ "./src/app/components/rides/rides-list/rides-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rides_service__WEBPACK_IMPORTED_MODULE_2__["RidesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RidesListComponent);
    return RidesListComponent;
}());



/***/ }),

/***/ "./src/app/components/rides/rides.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/rides/rides.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rides/rides.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/rides/rides.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-rides-list></app-rides-list>\r\n  </div>\r\n  <div class=\"col-md-5 col-md-offset-1\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/rides/rides.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/rides/rides.component.ts ***!
  \*****************************************************/
/*! exports provided: RidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidesComponent", function() { return RidesComponent; });
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

var RidesComponent = /** @class */ (function () {
    function RidesComponent() {
    }
    RidesComponent.prototype.ngOnInit = function () {
    };
    RidesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rides',
            template: __webpack_require__(/*! ./rides.component.html */ "./src/app/components/rides/rides.component.html"),
            styles: [__webpack_require__(/*! ./rides.component.css */ "./src/app/components/rides/rides.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RidesComponent);
    return RidesComponent;
}());



/***/ }),

/***/ "./src/app/components/users/edit-user/edit-user.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/edit-user/edit-user.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n    border: 1px red solid\r\n}"

/***/ }),

/***/ "./src/app/components/users/edit-user/edit-user.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/edit-user/edit-user.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form [formGroup]=\"registrationForm\" (submit)=\"onEdit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email *</label>\r\n          <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\r\n          <span class=\"help-block\" *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched && registrationForm.get('email').errors['required']\">This fields is required</span>\r\n          <span class=\"help-block\" *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched && registrationForm.get('email').errors['email']\">Invalid email format</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lastname\">Lastname</label>\r\n          <input type=\"text\" id=\"lastname\" formControlName=\"lastname\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"jmbg\">JMBG</label>\r\n          <input type=\"text\" id=\"jmbg\" formControlName=\"jmbg\" class=\"form-control\">\r\n          <span class=\"help-block\" *ngIf=\"registrationForm.get('jmbg').invalid && registrationForm.get('jmbg').touched && registrationForm.get('jmbg').errors['jmbgInvalid']\">Invalid JMBG</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"phone\">Phone *</label>\r\n          <input type=\"text\" id=\"phone\" formControlName=\"phone\" class=\"form-control\">\r\n          <span class=\"help-block\" *ngIf=\"registrationForm.get('phone').invalid && registrationForm.get('phone').touched && registrationForm.get('phone').errors['required']\">This fields is required.</span>\r\n          <span class=\"help-block\" *ngIf=\"registrationForm.get('phone').invalid && registrationForm.get('phone').touched && registrationForm.get('phone').errors['pattern']\">Phone can contain only numbers.</span>\r\n        </div>\r\n        <!--For future use if driver wants to change car-->\r\n        <!-- <div class=\"form-group\" *ngIf=\"isDriver\">\r\n          <label for=\"carNumber\">Car Number</label>\r\n          <select id=\"carNumber\" formControlName=\"carNumber\" class=\"form-control\">\r\n            <option *ngFor=\"let car of freeCars\" [value]=\"car.carNumber\">{{car.carNumber}}</option>\r\n          </select>\r\n        </div> -->\r\n        <br>\r\n        <span class=\"help-block\">Fields marked with * are required.</span>\r\n        <button [disabled]=\"!registrationForm.valid\" type=\"submit\" class=\"btn btn-primary pull-left\">Confirm</button>\r\n        <a routerLink=\"/profile\" class=\"btn btn-danger pull\">Cancel</a>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users/edit-user/edit-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/edit-user/edit-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(usersService, authService, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var username = this.authService.getCurrentUsername();
        this.editUser = this.usersService.getUser(username);
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editUser.name),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editUser.lastname),
            jmbg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editUser.jmbg, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{13,13}'), this.jmbgValidator.bind(this)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editUser.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]),
        });
    };
    EditUserComponent.prototype.onEdit = function () {
        var editUser = {
            username: this.editUser.username,
            password: this.registrationForm.value['password'],
            email: this.registrationForm.value['email'],
            name: this.registrationForm.value['name'],
            lastname: this.registrationForm.value['lastname'],
            jmbg: this.registrationForm.value['jmbg'],
            phone: this.registrationForm.value['phone'],
            //in future if driver can change to read from form
            carNumber: this.editUser.carNumber,
            userType: this.authService.getUserType(),
            blocked: this.editUser.blocked
        };
        this.usersService.updateUser(editUser);
        this.router.navigate(['/profile']);
    };
    EditUserComponent.prototype.jmbgValidator = function (control) {
        if (!this.checkJmbg(control.value)) {
            return { 'jmbgInvalid': true };
        }
        return null;
    };
    EditUserComponent.prototype.checkJmbg = function (jmbg) {
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
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/components/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/components/users/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/components/users/full-user-details/full-user-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/users/full-user-details/full-user-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-size: 20px\r\n}"

/***/ }),

/***/ "./src/app/components/users/full-user-details/full-user-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/users/full-user-details/full-user-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Details</h2>\r\n<div class=\"list-group\">\r\n  <p>Name: {{user.name}}</p>\r\n  <p>Lastname: {{user.lastname}}</p>\r\n  <p>Username: {{user.username}}</p>\r\n  <p>Email: {{user.email}}</p>\r\n  <p>JMBG: {{user.jmbg}}</p>\r\n  <p>Phone: {{user.phone}}</p>\r\n  <p *ngIf=\"user && user.userType && user.userType === 2\">Car number: {{user.carNumber}}</p>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n  <button type=\"button\" class=\"col-sm-2 btn btn-primary\" (click)=\"onUserChange()\">Edit</button>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n    <button type=\"button\" class=\"col-sm-2 btn btn-primary\" (click)=\"onPasswordChange()\">Change Password</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users/full-user-details/full-user-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/users/full-user-details/full-user-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FullUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullUserDetailsComponent", function() { return FullUserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FullUserDetailsComponent = /** @class */ (function () {
    function FullUserDetailsComponent(authService, usersService, router) {
        this.authService = authService;
        this.usersService = usersService;
        this.router = router;
    }
    FullUserDetailsComponent.prototype.ngOnInit = function () {
        var username = this.authService.getCurrentUsername();
        this.user = this.usersService.getUser(username);
    };
    FullUserDetailsComponent.prototype.onUserChange = function () {
        this.router.navigate(['/edit-profile']);
    };
    FullUserDetailsComponent.prototype.onPasswordChange = function () {
        this.router.navigate(['password-change']);
    };
    FullUserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-user-details',
            template: __webpack_require__(/*! ./full-user-details.component.html */ "./src/app/components/users/full-user-details/full-user-details.component.html"),
            styles: [__webpack_require__(/*! ./full-user-details.component.css */ "./src/app/components/users/full-user-details/full-user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FullUserDetailsComponent);
    return FullUserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/management/user-details/user-details.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/users/management/user-details/user-details.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/management/user-details/user-details.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/users/management/user-details/user-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Details</h2>\r\n<div class=\"pull-left\">\r\n  <p class=\"list-group-item-text\">Username: {{user.username}}</p>\r\n  <p class=\"list-group-item-text\">Email: {{user.email}}</p>\r\n  <p class=\"list-group-item-text\">Phone: {{user.phone}}</p>\r\n  <p class=\"list-group-item-text\">Type: {{userType}}</p>\r\n</div>\r\n<div class=\"pull-right\">\r\n<button *ngIf=\"!user.blocked\" class=\"btn btn-danger\" (click)=\"onBlock()\">Block user</button>\r\n<button *ngIf=\"user.blocked\" class=\"btn btn-success\" (click)=\"onUnblock()\">Unblock user</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users/management/user-details/user-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/users/management/user-details/user-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(usersService, route, router) {
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.notBlocked = true;
        this.blocked = false;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.username = params['username'];
            if (!params['username']) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            }
            _this.updateUser();
            switch (_this.user.type) {
                case _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__["Usertype"].Customer:
                    _this.userType = 'Customer';
                    break;
                case _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__["Usertype"].Driver:
                    _this.userType = 'Driver';
                    break;
            }
        });
    };
    UserDetailsComponent.prototype.onBlock = function () {
        this.usersService.blockUser(this.username);
        this.updateUser();
    };
    UserDetailsComponent.prototype.onUnblock = function () {
        this.usersService.unblockUser(this.username);
        this.updateUser();
    };
    UserDetailsComponent.prototype.updateUser = function () {
        this.user = this.usersService.getUserBasicInfo(this.username);
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/users/management/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/users/management/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/management/user-item/user-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/users/management/user-item/user-item.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/management/user-item/user-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/users/management/user-item/user-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[username]\" routerLinkActive=\"active\" style=\"cursor:pointer\" class=\"list-group-item clearfix\" >\r\n  <div class=\"pull-left\">\r\n      <h4 class=\"list-group-item-heading\">{{username}}</h4>\r\n  </div>\r\n</a>"

/***/ }),

/***/ "./src/app/components/users/management/user-item/user-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/users/management/user-item/user-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
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

var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "username", void 0);
    UserItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/components/users/management/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/components/users/management/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/components/users/management/user-list/user-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/users/management/user-list/user-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/management/user-list/user-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/users/management/user-list/user-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row well well-sm pre-scrollable\">\r\n  <div class=\"list-group\">\r\n  <app-user-item *ngFor=\"let username of users\"\r\n  [username]=\"username\"></app-user-item>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users/management/user-list/user-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/users/management/user-list/user-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.getAllUsersUsernames();
        this.userService.usersChanged.subscribe(function (changedUsersInfo) {
            _this.users = changedUsersInfo;
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/users/management/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/users/management/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/users/password-change/password-change.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/users/password-change/password-change.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n    border: 1px red solid\r\n}"

/***/ }),

/***/ "./src/app/components/users/password-change/password-change.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/users/password-change/password-change.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form [formGroup]=\"passwordChangeForm\" (submit)=\"onConfirm()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">New Password</label>\r\n          <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirm\">Confirm Password</label>\r\n          <input type=\"text\" id=\"confirm\" formControlName=\"confirm\" class=\"form-control\">\r\n          <span *ngIf=\"!passwordChangeForm.get('confirm').valid && passwordChangeForm.get('confirm').touched && passwordChangeForm.get('confirm').errors['confirmError']\">Password must match!</span>\r\n        </div>\r\n        <br>\r\n        <button [disabled]=\"!passwordChangeForm.valid\" type=\"submit\" class=\"btn btn-default\">Confirm</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users/password-change/password-change.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/users/password-change/password-change.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PasswordChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeComponent", function() { return PasswordChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordChangeComponent = /** @class */ (function () {
    function PasswordChangeComponent(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
        this.passwordChangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        //added like this since we need the first password field (and form) initialize
        //when checking validity of password confirmation
        this.passwordChangeForm.addControl('confirm', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmError.bind(this)]));
    };
    PasswordChangeComponent.prototype.confirmError = function (control) {
        if (control.value !== this.passwordChangeForm.value.password) {
            return { 'confirmError': true };
        }
        return null;
    };
    PasswordChangeComponent.prototype.onConfirm = function () {
        var username = this.authService.getCurrentUsername();
        this.usersService.changePassword(username, this.passwordChangeForm.value.password);
        this.authService.logout();
    };
    PasswordChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-change',
            template: __webpack_require__(/*! ./password-change.component.html */ "./src/app/components/users/password-change/password-change.component.html"),
            styles: [__webpack_require__(/*! ./password-change.component.css */ "./src/app/components/users/password-change/password-change.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
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

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n        <form [formGroup]=\"registrationForm\" (submit)=\"onRegistration()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username *</label>\r\n            <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\">\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('username').touched && registrationForm.get('username').invalid\">This fields is required</span>\r\n            <span></span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password *</label>\r\n            <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('password').touched && registrationForm.get('password').invalid\">This fields is required</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email *</label>\r\n            <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched && registrationForm.get('email').errors['required']\">This fields is required</span>\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched && registrationForm.get('email').errors['email']\">Invalid email format</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastname\">Lastname</label>\r\n            <input type=\"text\" id=\"lastname\" formControlName=\"lastname\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"jmbg\">JMBG</label>\r\n            <input type=\"text\" id=\"jmbg\" formControlName=\"jmbg\" class=\"form-control\">\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('jmbg').invalid && registrationForm.get('jmbg').touched && registrationForm.get('jmbg').errors['jmbgInvalid']\">Invalid JMBG</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phone *</label>\r\n            <input type=\"text\" id=\"phone\" formControlName=\"phone\" class=\"form-control\">\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('phone').invalid && registrationForm.get('phone').touched && registrationForm.get('phone').errors['required']\">This fields is required.</span>\r\n            <span class=\"help-block\" *ngIf=\"registrationForm.get('phone').invalid && registrationForm.get('phone').touched && registrationForm.get('phone').errors['pattern']\">Phone can contain only numbers.</span>\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"sex\">Sex</label>\r\n            <select id=\"sex\" formControlName=\"sex\" class=\"form-control\">\r\n              <option value=0>Male</option>\r\n              <option value=1>Female</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"isDriver\">\r\n            <label for=\"carNumber\">Car Number</label>\r\n            <select id=\"carNumber\" formControlName=\"carNumber\" class=\"form-control\">\r\n              <option *ngFor=\"let car of freeCars\" [value]=\"car.carNumber\">{{car.carNumber}}</option>\r\n            </select>\r\n          </div>\r\n          <br>\r\n          <span class=\"help-block\">Fields marked with * are required.</span>\r\n          <button [disabled]=\"!registrationForm.valid\" type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>"

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
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0)
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
            userType: this.isDriver ? _services_usertype_enum__WEBPACK_IMPORTED_MODULE_5__["Usertype"].Driver : _services_usertype_enum__WEBPACK_IMPORTED_MODULE_5__["Usertype"].Customer,
            blocked: false,
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <h3>All users</h3>\r\n    <app-user-list></app-user-list>\r\n  </div>\r\n  <div class=\"col-md-5 col-md-offset-1\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

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

/***/ "./src/app/route-guards/no-driver.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/route-guards/no-driver.guard.ts ***!
  \*************************************************/
/*! exports provided: NoDriverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDriverGuard", function() { return NoDriverGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usertype.enum */ "./src/app/services/usertype.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoDriverGuard = /** @class */ (function () {
    function NoDriverGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NoDriverGuard.prototype.canActivate = function (next, state) {
        if (this.authService.getUserType() === _services_usertype_enum__WEBPACK_IMPORTED_MODULE_3__["Usertype"].Driver) {
            this.router.navigate(['/home', 'rides']);
        }
        else {
            return true;
        }
    };
    NoDriverGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NoDriverGuard);
    return NoDriverGuard;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _external_apis_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external-apis-data.service */ "./src/app/services/external-apis-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AuthService(cookieService, router, http, externalApisDataService) {
        this.cookieService = cookieService;
        this.router = router;
        this.http = http;
        this.externalApisDataService = externalApisDataService;
        this.currentUser = { username: null, usertype: _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Guest, token: null };
        this.authenticated = false;
        this.userChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        var _this = this;
        if (this.authenticated) {
            return true;
        }
        var url = this.externalApisDataService.getDataApiHostname() + '/access/login';
        this.http.post(url, { username: username, password: password }).subscribe(function (data) {
            _this.currentUser.username = username;
            _this.currentUser.token = data;
            console.log(_this.currentUser.token);
            _this.currentUser.usertype = _usertype_enum__WEBPACK_IMPORTED_MODULE_1__["Usertype"].Dispatcher;
            _this.authenticated = true;
            var cookie = _this.createCookie();
            _this.cookieService.setCookie('taxiServiceData', cookie, 365);
            _this.userChanged.next(_this.currentUser);
            _this.router.navigate(['/home']);
            _this.authStatus.next(true);
        }, function (error) {
            console.log(error.status);
            _this.authStatus.next(false);
        });
        return this.authStatus;
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
        this.router.navigate(['\login']);
    };
    AuthService.prototype.getUserType = function () {
        return this.currentUser.usertype;
    };
    AuthService.prototype.getCurrentUsername = function () {
        return this.currentUser.username;
    };
    AuthService.prototype.getApiToken = function () {
        return this.currentUser.token;
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
            token: split[2]
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _external_apis_data_service__WEBPACK_IMPORTED_MODULE_5__["ExternalApisDataService"]])
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _external_apis_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external-apis-data.service */ "./src/app/services/external-apis-data.service.ts");
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
    function CarsDataService(http, authService, externApis) {
        this.http = http;
        this.authService = authService;
        this.externApis = externApis;
        this.cars = [
            { carNumber: 10, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].sedan, registration: 'ns-111-aa', driver: 'd', year: 2010 },
            { carNumber: 11, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].van, registration: 'ns-112-aa', driver: null, year: 2011 },
            { carNumber: 12, carType: _interfaces__WEBPACK_IMPORTED_MODULE_1__["CarType"].sedan, registration: 'ns-113-aa', driver: null, year: 2012 },
        ];
        this.carsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.carChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CarsDataService.prototype.ngOnInit = function () {
    };
    CarsDataService.prototype.addNewCar = function (newCar) {
        var _this = this;
        var url = this.externApis.getDataApiHostname() + '/cars';
        var data = {
            data: newCar,
            userHash: this.authService.getApiToken()
        };
        this.http.post(url, data)
            .subscribe(function (next) {
            _this.getAllCars();
        }, function (error) { console.log(error); });
    };
    CarsDataService.prototype.getCarByNumber = function (carNumber) {
        var url = this.externApis.getDataApiHostname() + '/cars/' + carNumber;
        return this.http.get(url);
    };
    CarsDataService.prototype.removeCar = function (carId) {
        var _this = this;
        var url = this.externApis.getDataApiHostname() + '/cars/remove';
        var data = {
            userHash: this.authService.getApiToken(),
            data: carId
        };
        console.log(data.data);
        this.http.post(url, data)
            .subscribe(function (next) {
            _this.getAllCars();
        }, function (error) { console.log(error); });
    };
    CarsDataService.prototype.getCar = function (driver) {
        var foundCar = this.cars.findIndex(function (car) { return car.driver === driver; });
        if (foundCar != -1) {
            return this.cars[foundCar];
        }
        else {
            return null;
        }
    };
    CarsDataService.prototype.getAllCars = function () {
        var _this = this;
        var url = this.externApis.getDataApiHostname() + '/cars';
        var cars;
        this.http.get(url).subscribe(function (data) {
            _this.carsChanged.next(data);
        });
        return this.carsChanged;
    };
    CarsDataService.prototype.getFreeCars = function () {
        var retCars = [];
        this.cars.forEach(function (car) {
            if (!car.driver) {
                retCars.push(car);
            }
        });
        return retCars;
    };
    CarsDataService.prototype.anyFreeCars = function () {
        var index = this.cars.findIndex(function (car) { return car.driver === null; });
        return index !== -1 ? true : false;
    };
    CarsDataService.prototype.updateCar = function (car) {
        var _this = this;
        var url = this.externApis.getDataApiHostname() + '/cars/' + car.carNumber;
        var data = {
            userHash: this.authService.getApiToken(),
            data: car
        };
        this.http.put(url, data)
            .subscribe(function (next) {
            _this.getAllCars();
        }, function (error) { console.log(error); });
    };
    CarsDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _external_apis_data_service__WEBPACK_IMPORTED_MODULE_5__["ExternalApisDataService"]])
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

/***/ "./src/app/services/external-apis-data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/external-apis-data.service.ts ***!
  \********************************************************/
/*! exports provided: ExternalApisDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApisDataService", function() { return ExternalApisDataService; });
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

var ExternalApisDataService = /** @class */ (function () {
    function ExternalApisDataService() {
        this.gmapsKey = 'AIzaSyBrjeABCsOwW1rhi7eW6_b_fWF8OK2HeiA';
        this.hereAppId = 'bAXQChNSxbtNhSYbrloM';
        this.hereAppCode = '%20FT-7YO-65_E2m1OFO8NvqQ';
        this.dataApiAddress = 'http://localhost:7685/api';
    }
    ExternalApisDataService.prototype.getGoogleMapsApiKey = function () {
        return this.gmapsKey.slice();
    };
    ExternalApisDataService.prototype.getHereAppId = function () {
        return this.hereAppId.slice();
    };
    ExternalApisDataService.prototype.getHereAppCode = function () {
        return this.hereAppCode.slice();
    };
    ExternalApisDataService.prototype.getDataApiHostname = function () {
        return this.dataApiAddress;
    };
    ExternalApisDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExternalApisDataService);
    return ExternalApisDataService;
}());



/***/ }),

/***/ "./src/app/services/interfaces.ts":
/*!****************************************!*\
  !*** ./src/app/services/interfaces.ts ***!
  \****************************************/
/*! exports provided: CarType, RideStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideStatus", function() { return RideStatus; });
var CarType;
(function (CarType) {
    CarType[CarType["sedan"] = 0] = "sedan";
    CarType[CarType["van"] = 1] = "van";
    CarType[CarType["undefined"] = 2] = "undefined";
})(CarType || (CarType = {}));
var RideStatus;
(function (RideStatus) {
    RideStatus[RideStatus["ordered"] = 0] = "ordered";
    RideStatus[RideStatus["processed"] = 1] = "processed";
    RideStatus[RideStatus["waiting"] = 2] = "waiting";
    RideStatus[RideStatus["accepted"] = 3] = "accepted";
    RideStatus[RideStatus["cancelled"] = 4] = "cancelled";
    RideStatus[RideStatus["sucessful"] = 5] = "sucessful";
    RideStatus[RideStatus["failed"] = 6] = "failed";
})(RideStatus || (RideStatus = {}));


/***/ }),

/***/ "./src/app/services/rides.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/rides.service.ts ***!
  \*******************************************/
/*! exports provided: RidesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidesService", function() { return RidesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/app/services/interfaces.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _usertype_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usertype.enum */ "./src/app/services/usertype.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RidesService = /** @class */ (function () {
    function RidesService() {
        this.rides = [
            { id: 0,
                driver: null,
                comment: null,
                location: { lat: 45.260030, long: 19.832409, address: 'Bulevar oslobođenja 22-24, Novi Sad 21000' },
                destination: null,
                fare: null,
                status: _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].waiting,
                time: '01/06/2013 12:32',
                dispatcher: null,
                customer: null
            },
            { id: 1,
                driver: 'd',
                comment: null,
                location: { lat: 45.260030, long: 19.832409, address: 'Bulevar oslobođenja 22-24, Novi Sad 21000' },
                destination: null,
                fare: null,
                status: _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].sucessful,
                time: '01/06/2013 12:32',
                dispatcher: null,
                customer: null
            }
        ];
        this.ridesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.waitingRidesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RidesService.prototype.newRide = function (ride) {
        this.rides.push(ride);
        if (ride.status === _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].waiting) {
            this.waitingRidesChanged.next(this.getAllWaitingRides());
        }
        this.ridesChanged.next(this.getAllRides());
    };
    RidesService.prototype.getAllWaitingRides = function () {
        var output = [];
        this.rides.forEach(function (ride) {
            if (ride.status === _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].waiting) {
                output.push(ride);
            }
        });
        return output;
    };
    RidesService.prototype.getAllRides = function () {
        return this.rides.slice();
    };
    RidesService.prototype.changeRideStatus = function (rideId, status) {
        this.rides.find(function (ride) { return ride.id === rideId; }).status = status;
    };
    RidesService.prototype.cancelRide = function (rideId) {
        console.log(rideId);
        var ride = this.getRideById(rideId);
        if (ride.status !== _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].waiting) {
            return false;
        }
        ride.status = _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].cancelled;
        this.waitingRidesChanged.next(this.getAllWaitingRides());
        this.ridesChanged.next(this.getAllRides());
        return true;
    };
    RidesService.prototype.updateRideLocation = function (rideId, location) {
    };
    RidesService.prototype.getRideById = function (id) {
        return this.rides.find(function (ride) { return ride.id === id; });
    };
    RidesService.prototype.getAllRidesForDriver = function (username) {
        var rides = [];
        this.rides.forEach(function (ride) {
            if (ride.driver == username) {
                rides.push(ride);
            }
        });
        return rides;
    };
    RidesService.prototype.acceptRide = function (dispatcher, driver, rideId, userType) {
        var ride = this.rides.find(function (ride) {
            return ride.id == rideId;
        });
        if (!ride) {
            return false;
        }
        if (userType === _usertype_enum__WEBPACK_IMPORTED_MODULE_3__["Usertype"].Driver) {
            ride.status = _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].accepted;
            ride.driver = driver;
        }
        else {
            console.log('dispatcher');
            ride.status = _interfaces__WEBPACK_IMPORTED_MODULE_1__["RideStatus"].processed;
            ride.dispatcher = dispatcher;
            ride.driver = driver;
        }
        this.ridesChanged.next(this.getAllRides());
        this.waitingRidesChanged.next(this.getAllWaitingRides());
        return true;
    };
    RidesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RidesService);
    return RidesService;
}());



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
/* harmony import */ var _usertype_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usertype.enum */ "./src/app/services/usertype.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _external_apis_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external-apis-data.service */ "./src/app/services/external-apis-data.service.ts");
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
    function UsersService(http, authService, externApis) {
        this.http = http;
        this.authService = authService;
        this.externApis = externApis;
        this.usersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.users = [
            { username: 'c', password: 'c', userType: _usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Customer, carNumber: null, email: 'customer@test.com', jmbg: null, name: null, lastname: null, phone: null, blocked: false },
            { username: 'd', password: 'd', userType: _usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Driver, carNumber: 10, email: 'driver@test.com', jmbg: null, name: null, lastname: null, phone: null, blocked: false },
            { username: 'a', password: 'a', userType: _usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Dispatcher, carNumber: null, email: 'dispatcher@test.com', jmbg: null, name: null, lastname: null, phone: null, blocked: false },
        ];
    }
    ;
    UsersService.prototype.addNewUser = function (newUser) {
        //this.users.push(newUser);
        //this.usersChanged.next(this.getAllUsersUsernames());
        var url = this.externApis.getDataApiHostname() + '/users/create';
        this.http.post(url, newUser).subscribe(function (next) { console.log(next); }, function (error) { console.log(error.status); });
    };
    UsersService.prototype.updateUser = function (editUser) {
        var user = this.getUser(editUser.username);
        user.email = editUser.email;
        user.jmbg = editUser.jmbg;
        user.lastname = editUser.lastname;
        user.name = editUser.name;
        user.phone = editUser.phone;
        user.carNumber = editUser.carNumber;
    };
    UsersService.prototype.removeUser = function (username) {
        var index = this.users.findIndex(function (user) {
            return user.username === username;
        });
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    };
    UsersService.prototype.getUser = function (username) {
        return this.users.find(function (user) { return user.username === username; });
    };
    UsersService.prototype.getUserBasicInfo = function (username) {
        var found = this.users.find(function (user) { return user.username === username; });
        if (!found) {
            return null;
        }
        return {
            username: found.username,
            email: found.email,
            blocked: found.blocked,
            phone: found.phone,
            type: found.userType
        };
    };
    UsersService.prototype.getAllUsersUsernames = function () {
        var output = [];
        this.users.forEach(function (user) {
            if (user.userType != _usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Dispatcher) {
                output.push(user.username);
            }
        });
        return output;
    };
    UsersService.prototype.blockUser = function (username) {
        this.getUser(username).blocked = true;
    };
    UsersService.prototype.unblockUser = function (username) {
        this.getUser(username).blocked = false;
    };
    UsersService.prototype.changePassword = function (username, newPassword) {
        this.getUser(username).password = newPassword;
    };
    UsersService.prototype.getAllDrivers = function () {
        var drivers = [];
        this.users.forEach(function (user) {
            if (user.userType === _usertype_enum__WEBPACK_IMPORTED_MODULE_2__["Usertype"].Driver) {
                drivers.push(user.username);
            }
        });
        return drivers;
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _external_apis_data_service__WEBPACK_IMPORTED_MODULE_5__["ExternalApisDataService"]])
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

module.exports = __webpack_require__(/*! C:\Users\srki1\Desktop\web project\clone2\TaxiService\TaxiService\AngularApp\TaxiServiceSPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
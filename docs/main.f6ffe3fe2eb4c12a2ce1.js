(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /vagrant/app-images-processing-for-google-photos-fe/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.service */ "XNvx");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/user.service */ "VGjC");









let HomeComponent = class HomeComponent {
    constructor(router, userService, loginService) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.currentUser$ = null;
    }
    ngOnInit() {
        this.currentUser$ = this.userService.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => {
            this.loginService.logOut();
            this.userService.logOut();
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    SERVER_URL: 'https://images-proc-for-google-photos.herokuapp.com/',
    GOOGLE_CLIENT_ID: '733460469950-rnm4b6pek82bfrnd8f5hf5esa5an0ikk.apps.googleusercontent.com',
    FRONT_END_URL: 'https://svoboda-vlad.github.io/app-images-processing-for-google-photos-fe/'
};


/***/ }),

/***/ "CO2p":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\">\n  <h2>Images Processing For Google Photos</h2>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <!-- <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarTogglerDemo01\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>-->\n    <!-- <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">  -->\n    <div class=\"navbar-collapse\" id=\"navbarTogglerDemo01\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n          <a routerLink=\"/parameters\" class=\"nav-link\" routerLinkActive=\"active\">Parameters</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n          <a routerLink=\"/user\" class=\"nav-link\" routerLinkActive=\"active\">User Info</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n          <span *ngIf=\"isAdmin()\">\n            <a routerLink=\"/admin/parameters-default\" class=\"nav-link\" routerLinkActive=\"active\">Admin - Parameters (default)</a>\n          </span>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n          <span *ngIf=\"isAdmin()\">\n            <a routerLink=\"/admin/users\" class=\"nav-link\" routerLinkActive=\"active\">Admin - Users</a>\n          </span>\n        </li>\n        <li class=\"nav-item\">\n          <span [ngSwitch]=\"isLoggedIn()\">\n            <a *ngSwitchCase=\"false\" routerLink=\"/login\" class=\"nav-link\" routerLinkActive=\"active\">Log in</a>\n            <a *ngSwitchDefault (click)=\"logout()\" class=\"nav-link\" routerLinkActive=\"active\">Log out</a>\n          </span>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isLoggedIn()\">\n          <a routerLink=\"/registration-user\" class=\"nav-link\" routerLinkActive=\"active\">User Registration</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "VGjC");





let AuthGuard = class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.userService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (user) {
                const role = route.data['role'];
                if (!role || role.length === 0) {
                    return true;
                }
                const userRoles = user.userRoles.find(r => r.role.name == role);
                if (userRoles)
                    return true;
                this.router.navigate(['/home']);
                return false;
            }
            this.router.navigate(['/login']);
            return false;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "DbDQ":
/*!**************************************************!*\
  !*** ./src/app/shared/error-response.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponseService", function() { return ErrorResponseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let ErrorResponseService = class ErrorResponseService {
    constructor() {
        this.errorMessage = "";
    }
    handleError(res) {
        if (res.status != 0) {
            this.errorMessage = 'Error response: ' + res.status + (res.error ? ' ' + res.error.error : '');
        }
        else {
            this.errorMessage = 'Server not available';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.errorMessage);
    }
};
ErrorResponseService.ctorParameters = () => [];
ErrorResponseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorResponseService);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Home</h2>\n<div class=\"alert alert-success\" *ngIf=\"currentUser$ | async as currentUser; else loadingOrError\">\n  <div>Logged in as user {{ currentUser.givenName }} {{ currentUser.familyName }} ({{ currentUser.username }}).</div>\n  <div>Previous login {{ currentUser.previousLoginDateTime | date:'yyyy-MM-dd HH:mm' }}.</div>\n</div>\n\n<ng-template #loadingOrError>\n    <div>Loading ...</div>\n</ng-template>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'images-processing-for-google-photos';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService, User, UserRoles, Role, RegistrationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoles", function() { return UserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUser", function() { return RegistrationUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error-response.service */ "DbDQ");






let UserService = class UserService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.userUrl = 'user';
        this.user = null;
    }
    getCurrentUser() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + this.userUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => this.user = res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorResponseService.handleError));
    }
    isLoggedIn() {
        return this.user !== null;
    }
    isAdmin() {
        if (this.user == null)
            return false;
        return this.user.userRoles.filter(r => r.role.name == 'ROLE_ADMIN').length != 0;
    }
    logOut() {
        this.user = null;
    }
    registerUser(registrationUser) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + this.userUrl, registrationUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorResponseService.handleError));
    }
    deleteUser() {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + this.userUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorResponseService.handleError));
    }
    updateUser(user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + this.userUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorResponseService.handleError));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__["ErrorResponseService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);

class User {
    constructor(username, lastLoginDateTime, previousLoginDateTime, givenName, familyName, userRoles) {
        this.username = username;
        this.lastLoginDateTime = lastLoginDateTime;
        this.previousLoginDateTime = previousLoginDateTime;
        this.givenName = givenName;
        this.familyName = familyName;
        this.userRoles = userRoles;
    }
}
class UserRoles {
    constructor(role) {
        this.role = role;
    }
}
class Role {
    constructor(name) {
        this.name = name;
    }
}
class RegistrationUser {
    constructor(username, password, givenName, familyName) {
        this.username = username;
        this.password = password;
        this.givenName = givenName;
        this.familyName = familyName;
    }
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ipfgp-navbar></ipfgp-navbar>\n<div class=\"mb-2 p-3 bg-light\">\n  <div class=\"bg-white mb-2 p-3\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "XNvx":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService, LoginCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredentials", function() { return LoginCredentials; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error-response.service */ "DbDQ");






let LoginService = class LoginService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.loginUrl = 'login';
        this.authorizationHeader = 'Authorization';
        this.jwtKey = 'jwt';
    }
    logIn(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + this.loginUrl, user, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            const token = res.headers.get(this.authorizationHeader);
            if (token != null)
                localStorage.setItem(this.jwtKey, token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
    getJwtToken() {
        return localStorage.getItem(this.jwtKey);
    }
    logOut() {
        localStorage.removeItem(this.jwtKey);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__["ErrorResponseService"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);

class LoginCredentials {
    constructor(u, p) {
        this.username = u;
        this.password = p;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth.interceptor */ "bJgF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "bJgF":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "XNvx");




let AuthInterceptor = class AuthInterceptor {
    constructor(loginService) {
        this.loginService = loginService;
    }
    intercept(request, next) {
        if (!request.url || (request.url.startsWith('http') && !(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL && request.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL)))) {
            return next.handle(request);
        }
        const token = this.loginService.getJwtToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        return next.handle(request);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "CO2p");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "l2CK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "XNvx");







let NavbarComponent = class NavbarComponent {
    constructor(loginService, userService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
    isAdmin() {
        return this.userService.isAdmin();
    }
    logout() {
        this.loginService.logOut();
        this.userService.logOut();
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "l2CK":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule)
    },
    {
        path: 'registration-user',
        loadChildren: () => __webpack_require__.e(/*! import() | registration-user-registration-user-module */ "registration-user-registration-user-module").then(__webpack_require__.bind(null, /*! ./registration-user/registration-user.module */ "dTRx")).then(m => m.RegistrationUserModule)
    },
    {
        path: 'google-login',
        loadChildren: () => __webpack_require__.e(/*! import() | google-login-google-login-module */ "google-login-google-login-module").then(__webpack_require__.bind(null, /*! ./google-login/google-login.module */ "9QTQ")).then(m => m.GoogleLoginModule)
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule),
        data: {
            role: 'ROLE_ADMIN'
        },
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule)
    },
    {
        path: 'parameters',
        loadChildren: () => __webpack_require__.e(/*! import() | parameters-parameters-module */ "parameters-parameters-module").then(__webpack_require__.bind(null, /*! ./parameters/parameters.module */ "3Y4q")).then(m => m.ParametersModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.f6ffe3fe2eb4c12a2ce1.js.map
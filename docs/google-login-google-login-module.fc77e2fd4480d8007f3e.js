(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-login-google-login-module"],{

/***/ "2Iao":
/*!*************************************************************!*\
  !*** ./src/app/google-login/google-login-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GoogleLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginRoutingModule", function() { return GoogleLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _google_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-login.component */ "tVFi");




const routes = [{ path: '', component: _google_login_component__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginComponent"] }];
let GoogleLoginRoutingModule = class GoogleLoginRoutingModule {
};
GoogleLoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GoogleLoginRoutingModule);



/***/ }),

/***/ "9QTQ":
/*!*****************************************************!*\
  !*** ./src/app/google-login/google-login.module.ts ***!
  \*****************************************************/
/*! exports provided: GoogleLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginModule", function() { return GoogleLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _google_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-login-routing.module */ "2Iao");
/* harmony import */ var _google_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-login.component */ "tVFi");





let GoogleLoginModule = class GoogleLoginModule {
};
GoogleLoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _google_login_component__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _google_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginRoutingModule"]
        ]
    })
], GoogleLoginModule);



/***/ }),

/***/ "fQx+":
/*!**********************************************************!*\
  !*** ./src/app/google-login/google-login.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29nbGUtbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "rpfL":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google-login/google-login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"googleLogin$ | async; else loadingOrError\">\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "tVFi":
/*!********************************************************!*\
  !*** ./src/app/google-login/google-login.component.ts ***!
  \********************************************************/
/*! exports provided: GoogleLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginComponent", function() { return GoogleLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_google_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./google-login.component.html */ "rpfL");
/* harmony import */ var _google_login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-login.component.scss */ "fQx+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _google_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./google-login.service */ "h4ol");









let GoogleLoginComponent = class GoogleLoginComponent {
    constructor(router, googleLoginService, userService) {
        this.router = router;
        this.googleLoginService = googleLoginService;
        this.userService = userService;
        this.accessTokenKey = "access_token";
        this.error = null;
        this.googleLogin$ = null;
    }
    ngOnInit() {
        let accessToken = "";
        let idToken = "";
        const hashParams = location.hash.replace("#", "").split("&");
        hashParams.forEach((param) => {
            const p = param.split("=");
            if (p[0] == "access_token")
                accessToken = p[1];
            if (p[0] == "id_token")
                idToken = p[1];
        });
        localStorage.setItem(this.accessTokenKey, accessToken);
        const idTokenGoogle = new _google_login_service__WEBPACK_IMPORTED_MODULE_8__["IdTokenGoogle"](idToken);
        this.googleLogin$ = this.googleLoginService
            .logIn(idTokenGoogle)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(() => this.userService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => {
            this.router.navigate(['images-processing']);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => {
            this.error = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
};
GoogleLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _google_login_service__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginService"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
GoogleLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-google-login',
        template: _raw_loader_google_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_google_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoogleLoginComponent);



/***/ })

}]);
//# sourceMappingURL=google-login-google-login-module.fc77e2fd4480d8007f3e.js.map
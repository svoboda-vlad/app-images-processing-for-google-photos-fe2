(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-user-registration-user-module"],{

/***/ "DPQz":
/*!******************************************************************!*\
  !*** ./src/app/registration-user/registration-user.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUserComponent", function() { return RegistrationUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration-user.component.html */ "dLJ6");
/* harmony import */ var _registration_user_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-user.component.scss */ "S5Zp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.service */ "XNvx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let RegistrationUserComponent = class RegistrationUserComponent {
    constructor(fb, router, userService, loginService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.registrationUserError = false;
        this.registrationUserSubscription = null;
        this.registrationUserForm = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)]],
            givenName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            familyName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]]
        });
    }
    ngOnInit() {
        if (this.loginService.getJwtToken()) {
            this.router.navigate(['']);
        }
    }
    register() {
        const registrationUser = new _user_user_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationUser"](this.registrationUserForm.get('username').value, this.registrationUserForm.get('password').value, this.registrationUserForm.get('givenName').value, this.registrationUserForm.get('familyName').value);
        this.registrationUserSubscription = this.userService
            .registerUser(registrationUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(() => this.loginService.logIn(new _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginCredentials"](registrationUser.username, registrationUser.password)))).subscribe(() => {
            this.registrationUserError = false;
            this.router.navigate(['']);
        }, () => this.registrationUserError = true);
    }
    get username() { return this.registrationUserForm.get('username'); }
    get password() { return this.registrationUserForm.get('password'); }
    get givenName() { return this.registrationUserForm.get('givenName'); }
    get familyName() { return this.registrationUserForm.get('familyName'); }
    ngOnDestroy() {
        if (this.registrationUserSubscription != null)
            this.registrationUserSubscription.unsubscribe();
    }
};
RegistrationUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }
];
RegistrationUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-registration-user',
        template: _raw_loader_registration_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_user_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrationUserComponent);



/***/ }),

/***/ "S5Zp":
/*!********************************************************************!*\
  !*** ./src/app/registration-user/registration-user.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24tdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "dLJ6":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration-user/registration-user.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>User Registration</h2>\n<div class=\"alert alert-danger\" *ngIf=\"registrationUserError\">\n  <strong>Failed to register!</strong> Please check your username and password.\n</div>\n<form class=\"form\" (ngSubmit)=\"register()\" [formGroup]=\"registrationUserForm\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"username\" />\n    <div *ngIf=\"username\">\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"username.errors\">\n          <div *ngIf=\"username.errors.required || username.errors.minlength || username.errors.maxlength\">\n            Username must be between 1 and 255 characters long.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" />\n    <div *ngIf=\"password\">\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"password.errors\">\n          <div *ngIf=\"password.errors.required || password.errors.minlength || password.errors.maxlength\">\n            Password must be between 4 and 100 characters long.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"givenName\">Given Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"givenName\" />\n    <div *ngIf=\"givenName\">\n      <div *ngIf=\"givenName.invalid && (givenName.dirty || givenName.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"givenName.errors\">\n          <div *ngIf=\"givenName.errors.required || givenName.errors.minlength || givenName.errors.maxlength\">\n            Given name must be between 1 and 255 characters long.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"familyName\">Family Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"familyName\" />\n    <div *ngIf=\"familyName\">\n      <div *ngIf=\"familyName.invalid && (familyName.dirty || familyName.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"familyName.errors\">\n          <div *ngIf=\"familyName.errors.required || familyName.errors.minlength || familyName.errors.maxlength\">\n            Family name must be between 1 and 255 characters long.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registrationUserForm.invalid\">Register</button>\n</form>\n");

/***/ }),

/***/ "dTRx":
/*!***************************************************************!*\
  !*** ./src/app/registration-user/registration-user.module.ts ***!
  \***************************************************************/
/*! exports provided: RegistrationUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUserModule", function() { return RegistrationUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _registration_user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-user-routing.module */ "oBvx");
/* harmony import */ var _registration_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-user.component */ "DPQz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let RegistrationUserModule = class RegistrationUserModule {
};
RegistrationUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_user_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _registration_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], RegistrationUserModule);



/***/ }),

/***/ "oBvx":
/*!***********************************************************************!*\
  !*** ./src/app/registration-user/registration-user-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUserRoutingModule", function() { return RegistrationUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registration_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-user.component */ "DPQz");




const routes = [{ path: '', component: _registration_user_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationUserComponent"] }];
let RegistrationUserRoutingModule = class RegistrationUserRoutingModule {
};
RegistrationUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegistrationUserRoutingModule);



/***/ })

}]);
//# sourceMappingURL=registration-user-registration-user-module.js.map
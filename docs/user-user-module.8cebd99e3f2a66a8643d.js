(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "OOuX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let UserModule = class UserModule {
};
UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], UserModule);



/***/ }),

/***/ "OOuX":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-detail.component.html */ "uPKA");
/* harmony import */ var _user_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail.component.scss */ "SHHN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/login.service */ "XNvx");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/user.service */ "VGjC");










let UserDetailComponent = class UserDetailComponent {
    constructor(userService, route, router, loginService, modalService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.modalService = modalService;
        this.user$ = null;
        this.error = null;
        this.deleteUserSubscription = null;
        this.deleteError = null;
        this.closeResult = '';
    }
    ngOnInit() {
        this.user$ = this.userService.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
        }));
    }
    ngOnDestroy() {
        if (this.deleteUserSubscription != null)
            this.deleteUserSubscription.unsubscribe();
    }
    deleteUser() {
        this.deleteUserSubscription = this.userService.deleteUser()
            .subscribe(() => {
            this.deleteError = false;
            this.loginService.logOut();
            this.userService.logOut();
            this.router.navigate(['/login']);
        }, () => this.deleteError = true);
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
UserDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-user-detail',
        template: _raw_loader_user_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserDetailComponent);



/***/ }),

/***/ "SHHN":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "OOuX");




const routes = [{
        path: '',
        component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailComponent"]
    }];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "uPKA":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>User Detail</h2>\n<div *ngIf=\"user$ | async as user; else loadingOrError\">\n  <div class=\"table-responsive-sm\" *ngIf=\"user; else notFound\">\n    <table class=\"table table-sm\">\n      <thead>\n        <tr class=\"table-secondary\">\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Value</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th>Username</th>\n          <td>{{ user.username }}</td>\n        </tr>\n        <tr>\n          <th>E-mail</th>\n          <td>{{ user.email }}</td>\n        </tr>        \n        <tr>\n          <th>Given Name</th>\n          <td>{{ user.givenName }}</td>\n        </tr>\n        <tr>\n          <th>Family Name</th>\n          <td>{{ user.familyName }}</td>\n        </tr>\n        <tr>\n          <th>Last Login</th>\n          <td>{{ user.lastLoginDateTime | date:'yyyy-MM-dd HH:mm' }}</td>\n        </tr>\n        <tr>\n          <th>Previous Login</th>\n          <td>{{ user.previousLoginDateTime | date:'yyyy-MM-dd HH:mm' }}</td>\n        </tr>\n        <tr>\n          <th>Roles</th>\n          <td><span *ngFor=\"let userRoles of user.userRoles; let i = index\"><span *ngIf=\"i>0\">, </span>{{ userRoles.role.name }}</span></td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"btn btn-primary m-1\" (click)=\"open(content)\">Delete</button>\n    </div>\n  </div>\n  <ng-template #notFound>\n    <div class=\"alert alert-warning\">No record found.</div>\n  </ng-template>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Warning</h4>\n  </div>\n  <div class=\"modal-body\">\n        <div>Are you sure you want to delete your account with all your user data?</div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('No')\">No</button>    \n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Yes'); deleteUser()\">Yes</button>\n  </div>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=user-user-module.8cebd99e3f2a66a8643d.js.map
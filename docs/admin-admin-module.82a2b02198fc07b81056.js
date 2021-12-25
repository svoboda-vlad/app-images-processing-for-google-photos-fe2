(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "+FD+":
/*!*********************************************!*\
  !*** ./src/app/admin/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "00Hw");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "nRu7");





let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]
        ]
    })
], UsersModule);



/***/ }),

/***/ "00Hw":
/*!*****************************************************!*\
  !*** ./src/app/admin/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "nRu7");




const routes = [{
        path: 'users',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsersRoutingModule);



/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parameters_default_parameters_default_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters-default/parameters-default.module */ "NwRg");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.module */ "+FD+");





const routes = [];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _users_users_module__WEBPACK_IMPORTED_MODULE_4__["UsersModule"], _parameters_default_parameters_default_module__WEBPACK_IMPORTED_MODULE_3__["ParametersDefaultModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "6plw":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/parameters-default-edit/parameters-default-edit.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Edit Parameters (default)</h2>\n<div *ngIf=\"parametersDefault$ | async as parametersDefault; else loadingOrError\">\n  <div class=\"alert alert-danger\" *ngIf=\"parametersDefaultUpdateError\">\n    <strong>Failed to update parametersDefault!</strong> Please check the data.\n  </div>\n  <form class=\"form\" (ngSubmit)=\"updateParametersDefault()\" [formGroup]=\"parametersDefaultEditForm\">\n    <div class=\"form-group\">\n      <label for=\"timeDiffGroup\">Time diff for groups (in sec)</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"timeDiffGroup\" />\n      <div *ngIf=\"timeDiffGroup\">\n        <div *ngIf=\"timeDiffGroup.invalid && (timeDiffGroup.dirty || timeDiffGroup.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"timeDiffGroup.errors\">\n            <div *ngIf=\"timeDiffGroup.errors.required || timeDiffGroup.errors.min || timeDiffGroup.errors.max\">\n              Time diff for groups (in sec) must be between 60 and 86400.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"resizeWidth\">Resize width (px)</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"resizeWidth\" />\n      <div *ngIf=\"resizeWidth\">\n        <div *ngIf=\"resizeWidth.invalid && (resizeWidth.dirty || resizeWidth.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"resizeWidth.errors\">\n            <div *ngIf=\"resizeWidth.errors.required || resizeWidth.errors.min || resizeWidth.errors.max\">\n              Resize width (px) must be between 1 and 10000.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"resizeHeight\">Resize height (px)</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"resizeHeight\" />\n      <div *ngIf=\"resizeHeight\">\n        <div *ngIf=\"resizeHeight.invalid && (resizeHeight.dirty || resizeHeight.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"resizeHeight.errors\">\n            <div *ngIf=\"resizeHeight.errors.required || resizeHeight.errors.min || resizeHeight.errors.max\">\n              Resize height (px) must be between 1 and 10000.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"parametersDefaultEditForm.invalid\">Save</button>\n  </form>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "82HN":
/*!****************************************************************************!*\
  !*** ./src/app/admin/parameters-default/parameters-default.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0ZXJzLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "8NEO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Users</h2>\n<div *ngIf=\"users$ | async as users; else loadingOrError\">\n  <div class=\"table-responsive-sm\" *ngIf=\"users.length > 0; else notFound\">\n    <table class=\"table table-sm\">\n      <thead>\n        <tr class=\"table-secondary\">\n          <th scope=\"col\">Username</th>\n          <th scope=\"col\">E-mail</th>          \n          <th scope=\"col\">Last Login</th>\n          <th scope=\"col\">Previous Login</th>\n          <th scope=\"col\">Given Name</th>\n          <th scope=\"col\">Family Name</th>\n          <th scole=\"col\">Roles</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{ user.username }}</td>\n          <td>{{ user.email }}</td>\n          <td>{{ user.lastLoginDateTime  | date:'yyyy-MM-dd HH:mm' }}</td>\n          <td>{{ user.previousLoginDateTime | date:'yyyy-MM-dd HH:mm' }}</td>\n          <td>{{ user.givenName }}</td>\n          <td>{{ user.familyName }}</td>\n          <td>\n            <span *ngFor=\"let userRoles of user.userRoles; let i = index\"><span *ngIf=\"i>0\">, </span>{{ userRoles.role.name }}</span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <ng-template #notFound>\n    <div class=\"alert alert-warning\">No records found.</div>\n  </ng-template>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "BHvS":
/*!**************************************************************************!*\
  !*** ./src/app/admin/parameters-default/parameters-default.component.ts ***!
  \**************************************************************************/
/*! exports provided: ParametersDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDefaultComponent", function() { return ParametersDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parameters_default_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parameters-default.component.html */ "pF4n");
/* harmony import */ var _parameters_default_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters-default.component.scss */ "82HN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _parameters_default_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parameters-default.service */ "qvrS");







let ParametersDefaultComponent = class ParametersDefaultComponent {
    constructor(parametersDefaultService) {
        this.parametersDefaultService = parametersDefaultService;
        this.parametersDefault$ = null;
        this.error = null;
    }
    ngOnInit() {
        this.parametersDefault$ = this.parametersDefaultService.getParametersDefault()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            this.error = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    }
};
ParametersDefaultComponent.ctorParameters = () => [
    { type: _parameters_default_service__WEBPACK_IMPORTED_MODULE_6__["ParametersDefaultService"] }
];
ParametersDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-parameters-default',
        template: _raw_loader_parameters_default_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parameters_default_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParametersDefaultComponent);



/***/ }),

/***/ "Ches":
/*!************************************************************************************!*\
  !*** ./src/app/admin/parameters-default-edit/parameters-default-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: ParametersDefaultEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDefaultEditComponent", function() { return ParametersDefaultEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parameters_default_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parameters-default-edit.component.html */ "6plw");
/* harmony import */ var _parameters_default_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters-default-edit.component.scss */ "qcaj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _parameters_default_parameters_default_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parameters-default/parameters-default.service */ "qvrS");









let ParametersDefaultEditComponent = class ParametersDefaultEditComponent {
    constructor(fb, router, parametersDefaultService) {
        this.fb = fb;
        this.router = router;
        this.parametersDefaultService = parametersDefaultService;
        this.parametersDefaultUpdateError = false;
        this.parametersDefaultEditForm = this.fb.group({
            timeDiffGroup: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(60), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(86400)]],
            resizeWidth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(10000)]],
            resizeHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(10000)]]
        });
    }
    ngOnInit() {
        this.parametersDefault$ = this.parametersDefaultService.getParametersDefault().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(parametersDefault => {
            this.parametersDefaultObject = parametersDefault;
            this.parametersDefaultEditForm.patchValue({
                timeDiffGroup: parametersDefault.timeDiffGroup,
                resizeWidth: parametersDefault.resizeWidth,
                resizeHeight: parametersDefault.resizeHeight
            });
            return parametersDefault;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => {
            this.error = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
        }));
    }
    updateParametersDefault() {
        const parametersDefault = new _parameters_default_parameters_default_service__WEBPACK_IMPORTED_MODULE_8__["ParametersDefault"](this.parametersDefaultEditForm.get('timeDiffGroup').value, this.parametersDefaultEditForm.get('resizeWidth').value, this.parametersDefaultEditForm.get('resizeHeight').value);
        this.parametersDefaultUpdateSubscription = this.parametersDefaultService
            .updateParametersDefault(parametersDefault)
            .subscribe(() => {
            this.parametersDefaultUpdateError = false;
            this.router.navigate(['/admin/parameters-default']);
        }, () => this.parametersDefaultUpdateError = true);
    }
    get timeDiffGroup() { return this.parametersDefaultEditForm.get('timeDiffGroup'); }
    get resizeWidth() { return this.parametersDefaultEditForm.get('esizeWidth'); }
    get resizeHeight() { return this.parametersDefaultEditForm.get('resizeHeight'); }
    ngOnDestroy() {
        if (this.parametersDefaultUpdateSubscription != null)
            this.parametersDefaultUpdateSubscription.unsubscribe();
    }
};
ParametersDefaultEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _parameters_default_parameters_default_service__WEBPACK_IMPORTED_MODULE_8__["ParametersDefaultService"] }
];
ParametersDefaultEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-parameters-default-edit',
        template: _raw_loader_parameters_default_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parameters_default_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParametersDefaultEditComponent);



/***/ }),

/***/ "NwRg":
/*!***********************************************************************!*\
  !*** ./src/app/admin/parameters-default/parameters-default.module.ts ***!
  \***********************************************************************/
/*! exports provided: ParametersDefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDefaultModule", function() { return ParametersDefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parameters_default_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters-default-routing.module */ "lBDK");
/* harmony import */ var _parameters_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters-default.component */ "BHvS");
/* harmony import */ var _parameters_default_edit_parameters_default_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parameters-default-edit/parameters-default-edit.component */ "Ches");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let ParametersDefaultModule = class ParametersDefaultModule {
};
ParametersDefaultModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _parameters_default_component__WEBPACK_IMPORTED_MODULE_4__["ParametersDefaultComponent"],
            _parameters_default_edit_parameters_default_edit_component__WEBPACK_IMPORTED_MODULE_5__["ParametersDefaultEditComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _parameters_default_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParametersDefaultRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], ParametersDefaultModule);



/***/ }),

/***/ "c7dm":
/*!**********************************************!*\
  !*** ./src/app/admin/users/users.service.ts ***!
  \**********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/error-response.service */ "DbDQ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let UsersService = class UsersService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.adminUsersUrl = 'admin/users';
    }
    getAllUsers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + this.adminUsersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__["ErrorResponseService"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");




let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "lBDK":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/parameters-default/parameters-default-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ParametersDefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDefaultRoutingModule", function() { return ParametersDefaultRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parameters_default_edit_parameters_default_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parameters-default-edit/parameters-default-edit.component */ "Ches");
/* harmony import */ var _parameters_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters-default.component */ "BHvS");





const routes = [{
        path: 'parameters-default',
        component: _parameters_default_component__WEBPACK_IMPORTED_MODULE_4__["ParametersDefaultComponent"]
    },
    {
        path: 'parameters-default/edit',
        component: _parameters_default_edit_parameters_default_edit_component__WEBPACK_IMPORTED_MODULE_3__["ParametersDefaultEditComponent"]
    }];
let ParametersDefaultRoutingModule = class ParametersDefaultRoutingModule {
};
ParametersDefaultRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ParametersDefaultRoutingModule);



/***/ }),

/***/ "nRu7":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "8NEO");
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.scss */ "nWSs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.service */ "c7dm");







let UsersComponent = class UsersComponent {
    constructor(usersService) {
        this.usersService = usersService;
        this.users$ = null;
        this.error = null;
    }
    ngOnInit() {
        this.users$ = this.usersService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            this.error = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    }
};
UsersComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }
];
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-users',
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsersComponent);



/***/ }),

/***/ "nWSs":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pF4n":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/parameters-default/parameters-default.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Parameters (default)</h2>\n<div *ngIf=\"parametersDefault$ | async as parametersDefault; else loadingOrError\">\n  <div class=\"table-responsive-sm\" *ngIf=\"parametersDefault; else notFound\">\n    <table class=\"table table-sm\">\n      <thead>\n        <tr class=\"table-secondary\">\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Value</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th>Time diff for groups (in sec)</th>\n          <td>{{ parametersDefault.timeDiffGroup }}</td>\n        </tr>\n        <tr>\n          <th>Resize width (px)</th>\n          <td>{{ parametersDefault.resizeWidth }}</td>\n        </tr>\n        <tr>\n          <th>Resize height (px)</th>\n          <td>{{ parametersDefault.resizeHeight }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"btn btn-primary m-1\" routerLink=\"edit\">Edit</button>\n    </div>\n  </div>\n  <ng-template #notFound>\n    <div class=\"alert alert-warning\">No record found.</div>\n  </ng-template>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "qcaj":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/parameters-default-edit/parameters-default-edit.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0ZXJzLWRlZmF1bHQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qvrS":
/*!************************************************************************!*\
  !*** ./src/app/admin/parameters-default/parameters-default.service.ts ***!
  \************************************************************************/
/*! exports provided: ParametersDefaultService, ParametersDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDefaultService", function() { return ParametersDefaultService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDefault", function() { return ParametersDefault; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/error-response.service */ "DbDQ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let ParametersDefaultService = class ParametersDefaultService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.adminParametersDefaultUrl = 'admin/parameters-default';
    }
    getParametersDefault() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + this.adminParametersDefaultUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
    updateParametersDefault(parameters) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + this.adminParametersDefaultUrl, parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
};
ParametersDefaultService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__["ErrorResponseService"] }
];
ParametersDefaultService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ParametersDefaultService);

class ParametersDefault {
    constructor(timeDiffGroup, resizeWidth, resizeHeight) {
        this.timeDiffGroup = timeDiffGroup;
        this.resizeWidth = resizeWidth;
        this.resizeHeight = resizeHeight;
    }
}


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.82a2b02198fc07b81056.js.map
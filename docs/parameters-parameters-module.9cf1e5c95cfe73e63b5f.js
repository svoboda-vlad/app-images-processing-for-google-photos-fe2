(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parameters-parameters-module"],{

/***/ "/mw0":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parameters/parameters.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Parameters</h2>\n<div *ngIf=\"parameters$ | async as parameters; else loadingOrError\">\n  <div class=\"alert alert-danger\" *ngIf=\"parametersResetToDefaultError\">\n    <strong>Failed to reset parameters to default!</strong>\n  </div>\n  <div class=\"table-responsive-sm\" *ngIf=\"parameters; else notFound\">\n    <table class=\"table table-sm\">\n      <thead>\n        <tr class=\"table-secondary\">\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Value</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th>Time diff for groups (in sec)</th>\n          <td>{{ parameters.timeDiffGroup }}</td>\n        </tr>\n        <tr>\n          <th>Resize width (px)</th>\n          <td>{{ parameters.resizeWidth }}</td>\n        </tr>\n        <tr>\n          <th>Resize height (px)</th>\n          <td>{{ parameters.resizeHeight }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"btn btn-primary m-1\" routerLink=\"edit\">Edit</button>\n      <button class=\"btn btn-primary m-1\" (click)=\"open(content)\">Reset to default values</button>      \n    </div>\n  </div>\n  <ng-template #notFound>\n    <div class=\"alert alert-warning\">No record found.</div>\n  </ng-template>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Warning</h4>\n  </div>\n  <div class=\"modal-body\">\n        <div>Are you sure you want to reset parameters values to default?</div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('No')\">No</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Yes'); resetToDefault()\">Yes</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "0bG6":
/*!****************************************************************!*\
  !*** ./src/app/parameters-edit/parameters-edit.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0ZXJzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "3Y4q":
/*!*************************************************!*\
  !*** ./src/app/parameters/parameters.module.ts ***!
  \*************************************************/
/*! exports provided: ParametersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersModule", function() { return ParametersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parameters_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters-routing.module */ "oFqL");
/* harmony import */ var _parameters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters.component */ "Tezy");
/* harmony import */ var _parameters_edit_parameters_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parameters-edit/parameters-edit.component */ "oKnB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let ParametersModule = class ParametersModule {
};
ParametersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _parameters_component__WEBPACK_IMPORTED_MODULE_4__["ParametersComponent"],
            _parameters_edit_parameters_edit_component__WEBPACK_IMPORTED_MODULE_5__["ParametersEditComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _parameters_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParametersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], ParametersModule);



/***/ }),

/***/ "Tezy":
/*!****************************************************!*\
  !*** ./src/app/parameters/parameters.component.ts ***!
  \****************************************************/
/*! exports provided: ParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersComponent", function() { return ParametersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parameters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parameters.component.html */ "/mw0");
/* harmony import */ var _parameters_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters.component.scss */ "sxN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _parameters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameters.service */ "Mfku");








let ParametersComponent = class ParametersComponent {
    constructor(parametersService, modalService) {
        this.parametersService = parametersService;
        this.modalService = modalService;
        this.parameters$ = null;
        this.error = null;
        this.closeResult = '';
        this.parametersResetToDefaultError = false;
    }
    ngOnInit() {
        this.parameters$ = this.parametersService.getParameters()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => {
            this.error = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    resetToDefault() {
        this.parametersResetToDefaultSubscription = this.parametersService
            .resetToDefault()
            .subscribe(() => {
            this.parametersResetToDefaultError = false;
            this.ngOnInit();
        }, () => this.parametersResetToDefaultError = true);
    }
    ngOnDestroy() {
        if (this.parametersResetToDefaultSubscription != null)
            this.parametersResetToDefaultSubscription.unsubscribe();
    }
};
ParametersComponent.ctorParameters = () => [
    { type: _parameters_service__WEBPACK_IMPORTED_MODULE_7__["ParametersService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
ParametersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-parameters',
        template: _raw_loader_parameters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parameters_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParametersComponent);



/***/ }),

/***/ "dViQ":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parameters-edit/parameters-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Edit Parameters</h2>\n<div *ngIf=\"parameters$ | async as parameters; else loadingOrError\">\n  <div class=\"alert alert-danger\" *ngIf=\"parametersUpdateError\">\n    <strong>Failed to update parameters!</strong> Please check the data.\n  </div>\n  <form class=\"form\" (ngSubmit)=\"updateParameters()\" [formGroup]=\"parametersEditForm\">\n    <div class=\"form-group\">\n      <label for=\"timeDiffGroup\">Time diff for groups (in sec)</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"timeDiffGroup\" />\n      <div *ngIf=\"timeDiffGroup\">\n        <div *ngIf=\"timeDiffGroup.invalid && (timeDiffGroup.dirty || timeDiffGroup.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"timeDiffGroup.errors\">\n            <div *ngIf=\"timeDiffGroup.errors.required || timeDiffGroup.errors.min || timeDiffGroup.errors.max\">\n              Time diff for groups (in sec) must be between 60 and 86400.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"resizeWidth\">Resize width (px)</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"resizeWidth\" />\n      <div *ngIf=\"resizeWidth\">\n        <div *ngIf=\"resizeWidth.invalid && (resizeWidth.dirty || resizeWidth.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"resizeWidth.errors\">\n            <div *ngIf=\"resizeWidth.errors.required || resizeWidth.errors.min || resizeWidth.errors.max\">\n              Resize width (px) must be between 1 and 10000.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"resizeHeight\">Resize height (px)</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"resizeHeight\" />\n      <div *ngIf=\"resizeHeight\">\n        <div *ngIf=\"resizeHeight.invalid && (resizeHeight.dirty || resizeHeight.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"resizeHeight.errors\">\n            <div *ngIf=\"resizeHeight.errors.required || resizeHeight.errors.min || resizeHeight.errors.max\">\n              Resize height (px) must be between 1 and 10000.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"parametersEditForm.invalid\">Save</button>\n  </form>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "oFqL":
/*!*********************************************************!*\
  !*** ./src/app/parameters/parameters-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ParametersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersRoutingModule", function() { return ParametersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parameters_edit_parameters_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parameters-edit/parameters-edit.component */ "oKnB");
/* harmony import */ var _parameters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters.component */ "Tezy");





const routes = [{
        path: '', component: _parameters_component__WEBPACK_IMPORTED_MODULE_4__["ParametersComponent"]
    },
    {
        path: 'edit',
        component: _parameters_edit_parameters_edit_component__WEBPACK_IMPORTED_MODULE_3__["ParametersEditComponent"]
    }];
let ParametersRoutingModule = class ParametersRoutingModule {
};
ParametersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ParametersRoutingModule);



/***/ }),

/***/ "oKnB":
/*!**************************************************************!*\
  !*** ./src/app/parameters-edit/parameters-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ParametersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersEditComponent", function() { return ParametersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parameters_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parameters-edit.component.html */ "dViQ");
/* harmony import */ var _parameters_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters-edit.component.scss */ "0bG6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _parameters_parameters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parameters/parameters.service */ "Mfku");









let ParametersEditComponent = class ParametersEditComponent {
    constructor(fb, router, parametersService) {
        this.fb = fb;
        this.router = router;
        this.parametersService = parametersService;
        this.parametersUpdateError = false;
        this.parametersEditForm = this.fb.group({
            timeDiffGroup: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(60), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(86400)]],
            resizeWidth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(10000)]],
            resizeHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(10000)]]
        });
    }
    ngOnInit() {
        this.parameters$ = this.parametersService.getParameters().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(parameters => {
            this.parametersObject = parameters;
            this.parametersEditForm.patchValue({
                timeDiffGroup: parameters.timeDiffGroup,
                resizeWidth: parameters.resizeWidth,
                resizeHeight: parameters.resizeHeight
            });
            return parameters;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => {
            this.error = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
        }));
    }
    updateParameters() {
        const parameters = new _parameters_parameters_service__WEBPACK_IMPORTED_MODULE_8__["Parameters"](this.parametersEditForm.get('timeDiffGroup').value, this.parametersEditForm.get('resizeWidth').value, this.parametersEditForm.get('resizeHeight').value);
        this.parametersUpdateSubscription = this.parametersService
            .updateParameters(parameters)
            .subscribe(() => {
            this.parametersUpdateError = false;
            this.router.navigate(['/parameters']);
        }, () => this.parametersUpdateError = true);
    }
    get timeDiffGroup() { return this.parametersEditForm.get('timeDiffGroup'); }
    get resizeWidth() { return this.parametersEditForm.get('esizeWidth'); }
    get resizeHeight() { return this.parametersEditForm.get('resizeHeight'); }
    ngOnDestroy() {
        if (this.parametersUpdateSubscription != null)
            this.parametersUpdateSubscription.unsubscribe();
    }
};
ParametersEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _parameters_parameters_service__WEBPACK_IMPORTED_MODULE_8__["ParametersService"] }
];
ParametersEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-parameters-edit',
        template: _raw_loader_parameters_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parameters_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParametersEditComponent);



/***/ }),

/***/ "sxN6":
/*!******************************************************!*\
  !*** ./src/app/parameters/parameters.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=parameters-parameters-module.9cf1e5c95cfe73e63b5f.js.map
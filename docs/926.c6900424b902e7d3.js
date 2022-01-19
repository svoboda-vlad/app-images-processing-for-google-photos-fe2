"use strict";
(self["webpackChunkimages_processing_for_google_photos"] = self["webpackChunkimages_processing_for_google_photos"] || []).push([[926],{

/***/ 6786:
/*!*************************************************************!*\
  !*** ./src/app/google-login/google-login-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleLoginRoutingModule": () => (/* binding */ GoogleLoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _google_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-login.component */ 6445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);




const routes = [{
  path: '',
  component: _google_login_component__WEBPACK_IMPORTED_MODULE_0__.GoogleLoginComponent
}];
let GoogleLoginRoutingModule = /*#__PURE__*/(() => {
  class GoogleLoginRoutingModule {}

  GoogleLoginRoutingModule.ɵfac = function GoogleLoginRoutingModule_Factory(t) {
    return new (t || GoogleLoginRoutingModule)();
  };

  GoogleLoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: GoogleLoginRoutingModule
  });
  GoogleLoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return GoogleLoginRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GoogleLoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6445:
/*!********************************************************!*\
  !*** ./src/app/google-login/google-login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleLoginComponent": () => (/* binding */ GoogleLoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1737);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1406);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var _google_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-login.service */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ 1584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9808);









function GoogleLoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}

function GoogleLoginComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}

function GoogleLoginComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function GoogleLoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GoogleLoginComponent_ng_template_2_ng_container_0_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GoogleLoginComponent_ng_template_2_ng_template_1_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.error)("ngIfElse", _r4);
  }
}

let GoogleLoginComponent = /*#__PURE__*/(() => {
  class GoogleLoginComponent {
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
      hashParams.forEach(param => {
        const p = param.split("=");
        if (p[0] == "access_token") accessToken = p[1];
        if (p[0] == "id_token") idToken = p[1];
      });
      localStorage.setItem(this.accessTokenKey, accessToken);
      const idTokenGoogle = new _google_login_service__WEBPACK_IMPORTED_MODULE_0__.IdTokenGoogle(idToken);
      this.googleLogin$ = this.googleLoginService.logIn(idTokenGoogle).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(() => this.userService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
        this.router.navigate(['images-processing']);
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        this.error = err;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
      }));
    }

  }

  GoogleLoginComponent.ɵfac = function GoogleLoginComponent_Factory(t) {
    return new (t || GoogleLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_google_login_service__WEBPACK_IMPORTED_MODULE_0__.GoogleLoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
  };

  GoogleLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GoogleLoginComponent,
    selectors: [["ipfgp-google-login"]],
    decls: 4,
    vars: 4,
    consts: [[4, "ngIf", "ngIfElse"], ["loadingOrError", ""], ["loading", ""], [1, "alert", "alert-danger"]],
    template: function GoogleLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GoogleLoginComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, GoogleLoginComponent_ng_template_2_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.googleLogin$))("ngIfElse", _r1);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: [""]
  });
  return GoogleLoginComponent;
})();

/***/ }),

/***/ 4926:
/*!*****************************************************!*\
  !*** ./src/app/google-login/google-login.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleLoginModule": () => (/* binding */ GoogleLoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _google_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-login-routing.module */ 6786);
/* harmony import */ var _google_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-login.component */ 6445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);




let GoogleLoginModule = /*#__PURE__*/(() => {
  class GoogleLoginModule {}

  GoogleLoginModule.ɵfac = function GoogleLoginModule_Factory(t) {
    return new (t || GoogleLoginModule)();
  };

  GoogleLoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: GoogleLoginModule
  });
  GoogleLoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _google_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoogleLoginRoutingModule]]
  });
  return GoogleLoginModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GoogleLoginModule, {
    declarations: [_google_login_component__WEBPACK_IMPORTED_MODULE_1__.GoogleLoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _google_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoogleLoginRoutingModule]
  });
})();

/***/ })

}]);
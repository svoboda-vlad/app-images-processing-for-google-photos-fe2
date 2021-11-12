(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Mfku":
/*!**************************************************!*\
  !*** ./src/app/parameters/parameters.service.ts ***!
  \**************************************************/
/*! exports provided: ParametersService, Parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersService", function() { return ParametersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return Parameters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error-response.service */ "DbDQ");






let ParametersService = class ParametersService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.parametersUrl = 'parameters';
        this.parametersResetToDefaultUrl = 'parameters-reset-to-default';
    }
    getParameters() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + this.parametersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
    updateParameters(parameters) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + this.parametersUrl, parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
    resetToDefault() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + this.parametersResetToDefaultUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
};
ParametersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__["ErrorResponseService"] }
];
ParametersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ParametersService);

class Parameters {
    constructor(timeDiffGroup, resizeWidth, resizeHeight) {
        this.timeDiffGroup = timeDiffGroup;
        this.resizeWidth = resizeWidth;
        this.resizeHeight = resizeHeight;
    }
}


/***/ }),

/***/ "h4ol":
/*!******************************************************!*\
  !*** ./src/app/google-login/google-login.service.ts ***!
  \******************************************************/
/*! exports provided: GoogleLoginService, IdTokenGoogle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginService", function() { return GoogleLoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdTokenGoogle", function() { return IdTokenGoogle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/error-response.service */ "DbDQ");






let GoogleLoginService = class GoogleLoginService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.googleLoginUrl = "google-login";
        this.authorizationHeader = "Authorization";
        this.jwtKey = "jwt";
        this.accessTokenKey = "access_token";
    }
    logIn(idToken) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + this.googleLoginUrl, idToken, { observe: 'response' })
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
    getAccessToken() {
        return localStorage.getItem(this.accessTokenKey);
    }
};
GoogleLoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_error_response_service__WEBPACK_IMPORTED_MODULE_5__["ErrorResponseService"] }
];
GoogleLoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GoogleLoginService);

class IdTokenGoogle {
    constructor(i) {
        this.idToken = i;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.e600c4b72c7f6bfbef8f.js.map
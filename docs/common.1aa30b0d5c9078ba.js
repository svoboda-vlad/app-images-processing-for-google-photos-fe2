"use strict";
(self["webpackChunkimages_processing_for_google_photos"] = self["webpackChunkimages_processing_for_google_photos"] || []).push([[592],{

/***/ 9027:
/*!**************************************************!*\
  !*** ./src/app/parameters/parameters.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametersService": () => (/* binding */ ParametersService),
/* harmony export */   "Parameters": () => (/* binding */ Parameters)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/error-response.service */ 4888);





let ParametersService = /*#__PURE__*/(() => {
  class ParametersService {
    constructor(http, errorResponseService) {
      this.http = http;
      this.errorResponseService = errorResponseService;
      this.parametersUrl = 'parameters';
      this.parametersResetToDefaultUrl = 'parameters-reset-to-default';
    }

    getParameters() {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SERVER_URL + this.parametersUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

    updateParameters(parameters) {
      return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SERVER_URL + this.parametersUrl, parameters).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

    resetToDefault() {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SERVER_URL + this.parametersResetToDefaultUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

  }

  ParametersService.ɵfac = function ParametersService_Factory(t) {
    return new (t || ParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_error_response_service__WEBPACK_IMPORTED_MODULE_1__.ErrorResponseService));
  };

  ParametersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ParametersService,
    factory: ParametersService.ɵfac,
    providedIn: 'root'
  });
  return ParametersService;
})();
class Parameters {
  constructor(timeDiffGroup, resizeWidth, resizeHeight) {
    this.timeDiffGroup = timeDiffGroup;
    this.resizeWidth = resizeWidth;
    this.resizeHeight = resizeHeight;
  }

}

/***/ })

}]);
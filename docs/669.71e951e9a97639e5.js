(self["webpackChunkimages_processing_for_google_photos"] = self["webpackChunkimages_processing_for_google_photos"] || []).push([[669],{

/***/ 8737:
/*!****************************************************!*\
  !*** ./src/app/images-processing/album.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumService": () => (/* binding */ AlbumService),
/* harmony export */   "Album": () => (/* binding */ Album)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/error-response.service */ 4888);





let AlbumService = /*#__PURE__*/(() => {
  class AlbumService {
    constructor(http, errorResponseService) {
      this.http = http;
      this.errorResponseService = errorResponseService;
      this.albumsUrl = 'https://photoslibrary.googleapis.com/v1/albums';
    }

    albums(group, accessToken) {
      const httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/json'
        })
      };
      const album = new Album(group.name);
      const body = {
        "album": album
      };
      return this.http.post(this.albumsUrl, body, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

  }

  AlbumService.ɵfac = function AlbumService_Factory(t) {
    return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_error_response_service__WEBPACK_IMPORTED_MODULE_0__.ErrorResponseService));
  };

  AlbumService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AlbumService,
    factory: AlbumService.ɵfac,
    providedIn: 'root'
  });
  return AlbumService;
})();
class Album {
  constructor(title, productUrl, id, isWriteable) {
    this.title = title;
    this.productUrl = productUrl;
    this.id = id;
    this.isWriteable = isWriteable;
  }

}

/***/ }),

/***/ 1050:
/*!***********************************************************************!*\
  !*** ./src/app/images-processing/images-processing-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesProcessingRoutingModule": () => (/* binding */ ImagesProcessingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _images_processing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images-processing.component */ 3842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);




const routes = [{
  path: '',
  component: _images_processing_component__WEBPACK_IMPORTED_MODULE_0__.ImagesProcessingComponent
}];
let ImagesProcessingRoutingModule = /*#__PURE__*/(() => {
  class ImagesProcessingRoutingModule {}

  ImagesProcessingRoutingModule.ɵfac = function ImagesProcessingRoutingModule_Factory(t) {
    return new (t || ImagesProcessingRoutingModule)();
  };

  ImagesProcessingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ImagesProcessingRoutingModule
  });
  ImagesProcessingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return ImagesProcessingRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImagesProcessingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3842:
/*!******************************************************************!*\
  !*** ./src/app/images-processing/images-processing.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeDiffGroupDefault": () => (/* binding */ timeDiffGroupDefault),
/* harmony export */   "resizeWidthDefault": () => (/* binding */ resizeWidthDefault),
/* harmony export */   "resizeHeightDefault": () => (/* binding */ resizeHeightDefault),
/* harmony export */   "ImagesProcessingComponent": () => (/* binding */ ImagesProcessingComponent),
/* harmony export */   "UploadingStatus": () => (/* binding */ UploadingStatus)
/* harmony export */ });
/* harmony import */ var C_Users_svobo_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _media_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-item.service */ 1860);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ 1764);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ 274);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 1737);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @digitalascetic/ngx-pica */ 4000);
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album.service */ 8737);
/* harmony import */ var _google_login_google_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../google-login/google-login.service */ 9075);
/* harmony import */ var _parameters_parameters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parameters/parameters.service */ 9027);
/* harmony import */ var _shared_date_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/date-util.service */ 2423);
/* harmony import */ var _last_upload_info_last_upload_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../last-upload-info/last-upload-info.service */ 5410);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-info/user-info.component */ 1234);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3707);




















function ImagesProcessingComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lastUploadInfo_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Last successfull upload: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 1, lastUploadInfo_r11.lastUploadDateTime, "yyyy-MM-dd HH:mm"), ".");
  }
}

function ImagesProcessingComponent_div_1_form_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Time diff for groups (in sec) must be between 60 and 86400. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_div_1_form_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Resize width (px) must be between 1 and 10000. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_div_1_form_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Resize height (px) must be between 1 and 10000. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return ["timeDiffGroup"];
};

const _c1 = function () {
  return ["resizeWidth"];
};

const _c2 = function () {
  return ["resizeHeight"];
};

function ImagesProcessingComponent_div_1_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Time diff for groups (in sec)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ImagesProcessingComponent_div_1_form_8_div_6_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Resize width (px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ImagesProcessingComponent_div_1_form_8_div_12_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Resize height (px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ImagesProcessingComponent_div_1_form_8_div_18_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r5.paramsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c0)).errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c1)).errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c2)).errors);
  }
}

function ImagesProcessingComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Parameters not valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_div_1_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Select images for processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ImagesProcessingComponent_div_1_form_11_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);

      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r16.processFiles(_r15.files);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Accepted file types: .jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Accepted file name formats (examples):");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "20210924_133734.jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "IMG_20210924_133734_1.jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "WP_20210924_13_37_34_Pro.jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r7.inputFilesForm);
  }
}

function ImagesProcessingComponent_div_1_div_12_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("Resizing in progress (", ctx_r18.mediaItems.length, " of ", ctx_r18.filesCount, ")");
  }
}

function ImagesProcessingComponent_div_1_div_12_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("Finished: ", ctx_r19.mediaItems.length, " files resized to ", ctx_r19.resizeWidth, "x", ctx_r19.resizeHeight, "px.");
  }
}

function ImagesProcessingComponent_div_1_div_12_div_4_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r21.getMediaItemsCount(), " images in ", ctx_r21.mediaItemsGroups.length, " groups ");
  }
}

function ImagesProcessingComponent_div_1_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ImagesProcessingComponent_div_1_div_12_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r22.createGroups();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Create groups ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ImagesProcessingComponent_div_1_div_12_div_4_p_3_Template, 2, 2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r20.getMediaItemsCount());
  }
}

function ImagesProcessingComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ImagesProcessingComponent_div_1_div_12_p_2_Template, 2, 2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ImagesProcessingComponent_div_1_div_12_p_3_Template, 2, 3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ImagesProcessingComponent_div_1_div_12_div_4_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.mediaItems.length != ctx_r8.filesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.mediaItems.length == ctx_r8.filesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.filesLoaded);
  }
}

function ImagesProcessingComponent_div_1_div_13_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r28.mediaItemsForGrouping.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r28.getUploadedCount());
  }
}

function ImagesProcessingComponent_div_1_div_13_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "UPLOADING IN PROGRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_div_1_div_13_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "UPLOADING SUCCESSFULLY FINISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_div_1_div_13_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "UPLOADING FAILED (see the Groups Overview table for details)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Groups overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ImagesProcessingComponent_div_1_div_13_tr_10_Template, 7, 3, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Upload to Google Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ImagesProcessingComponent_div_1_div_13_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r29.uploadToGooglePhotos();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Create albums and upload files to Google Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ImagesProcessingComponent_div_1_div_13_p_25_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ImagesProcessingComponent_div_1_div_13_p_26_Template, 2, 0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ImagesProcessingComponent_div_1_div_13_p_27_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r9.mediaItemsGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.getMediaItemsCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.getUploadedCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r9.groupsCreated);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.uploadingStatus == "InProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.uploadingStatus == "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.uploadingStatus == "Fail");
  }
}

function ImagesProcessingComponent_div_1_div_14_div_4_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", item_r35.mediaItem.contentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}

function ImagesProcessingComponent_div_1_div_14_div_4_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ImagesProcessingComponent_div_1_div_14_div_4_9_ng_template_0_Template, 2, 1, "ng-template", 43);
  }
}

function ImagesProcessingComponent_div_1_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function ImagesProcessingComponent_div_1_div_14_div_4_Template_span_blur_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const group_r32 = restoredCtx.$implicit;

      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r38.updateGroupName(group_r32, _r33.textContent);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ImagesProcessingComponent_div_1_div_14_div_4_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const group_r32 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r40.removeGroup(group_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ngb-carousel", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ImagesProcessingComponent_div_1_div_14_div_4_9_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", group_r32.mediaItemsForGrouping);
  }
}

function ImagesProcessingComponent_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Images in groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ImagesProcessingComponent_div_1_div_14_div_4_Template, 10, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.mediaItemsGroups);
  }
}

function ImagesProcessingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ImagesProcessingComponent_div_1_div_1_Template, 4, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ImagesProcessingComponent_div_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r41.changeParamsFormShow();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ImagesProcessingComponent_div_1_form_8_Template, 19, 7, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ImagesProcessingComponent_div_1_div_9_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ImagesProcessingComponent_div_1_form_11_Template, 17, 1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ImagesProcessingComponent_div_1_div_12_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ImagesProcessingComponent_div_1_div_13_Template, 28, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ImagesProcessingComponent_div_1_div_14_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 8, ctx_r0.lastUploadInfo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.paramsFormShow ? "Hide" : "Show", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.paramsFormShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.paramsForm.status != "VALID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.paramsForm.status == "VALID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.filesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.mediaItemsGroups.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.getMediaItemsCount());
  }
}

function ImagesProcessingComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r43.error);
  }
}

function ImagesProcessingComponent_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function ImagesProcessingComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ImagesProcessingComponent_ng_template_3_ng_container_0_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ImagesProcessingComponent_ng_template_3_ng_template_1_Template, 2, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.error)("ngIfElse", _r44);
  }
}

const timeDiffGroupDefault = 7200;
const resizeWidthDefault = 1000;
const resizeHeightDefault = 1000;
dayjs__WEBPACK_IMPORTED_MODULE_2__.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);
let ImagesProcessingComponent = /*#__PURE__*/(() => {
  class ImagesProcessingComponent {
    constructor(ngxPicaService, fb, mediaItemService, albumService, googleLoginService, parametersService, dateUtilService, lastUploadInfoService) {
      this.ngxPicaService = ngxPicaService;
      this.fb = fb;
      this.mediaItemService = mediaItemService;
      this.albumService = albumService;
      this.googleLoginService = googleLoginService;
      this.parametersService = parametersService;
      this.dateUtilService = dateUtilService;
      this.lastUploadInfoService = lastUploadInfoService;
      this.mediaItems = [];
      this.mediaItemsForGrouping = [];
      this.mediaItemsGroups = [];
      this.timeDiffGroup = 0;
      this.uploadToken = '';
      this.inputFilesForm = this.fb.group({
        inputFiles: ''
      });
      this.filesLoaded = false;
      this.filesCount = 0;
      this.groupsCreated = false;
      this.uploadingStatus = UploadingStatus.None;
      this.picaOptions = {
        exifOptions: {
          forceExifOrientation: false
        },
        aspectRatio: {
          keepAspectRatio: true
        }
      };
      this.paramsForm = this.fb.group({
        timeDiffGroup: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(60), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(86400)]],
        resizeWidth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(10000)]],
        resizeHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(10000)]]
      });
      this.resizeWidth = 0;
      this.resizeHeight = 0;
      this.paramsFormShow = true;
    }

    ngOnInit() {
      this.parameters$ = this.parametersService.getParameters().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(parameters => {
        this.paramsForm.patchValue({
          timeDiffGroup: parameters.timeDiffGroup,
          resizeWidth: parameters.resizeWidth,
          resizeHeight: parameters.resizeHeight
        });
        return parameters;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(err => {
        this.error = err;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err);
      }));
      this.lastUploadInfo$ = this.lastUploadInfoService.getLastUploadInfo();
    }

    ngOnDestroy() {
      this.lastUploadInfoSubscription.unsubscribe();
    }

    processFiles(files) {
      if (files.length > 0) {
        this.filesCount = files.length;
        this.emptyArrays();
        this.getParamsResize();
        this.getMediaItems(files);
      }
    }

    emptyArrays() {
      this.mediaItems = [];
      this.mediaItemsForGrouping = [];
      this.mediaItemsGroups = [];
      this.filesLoaded = false;
      this.groupsCreated = false;
      this.uploadingStatus = UploadingStatus.None;
      this.paramsFormShow = false;
    }

    getMediaItems(fileList) {
      this.ngxPicaService.resizeImages(fileList, this.resizeWidth, this.resizeHeight, this.picaOptions).subscribe(file => {
        this.readFileBytes(file);
      }, err => {
        throw err.err;
      }, () => {
        this.filesLoaded = true;
      });
    }

    readFileBytes(file) {
      let readerBytes = new FileReader();
      readerBytes.addEventListener('load', event => {
        this.readFileUrl(readerBytes, file);
      }, false);
      readerBytes.readAsArrayBuffer(file);
    }

    readFileUrl(readerBytes, file) {
      let readerUrl = new FileReader();
      readerUrl.addEventListener('load', event => {
        this.createMediaItem(file, readerBytes, readerUrl);
      }, false);
      readerUrl.readAsDataURL(file);
    }

    createMediaItem(file, readerBytes, readerUrl) {
      this.mediaItems.push(new _media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItem(file.name, dayjs__WEBPACK_IMPORTED_MODULE_2__(file.name.replace(/D/g, ''), 'YYYYMMDD HHmmss'), readerBytes.result, readerUrl.result));
    }

    createGroups() {
      this.emptyArraysExceptMediaItems();
      this.createMediaItemsForGrouping();
      this.calculateTimeDiff();
      this.getParamsTimeDiffs();
      this.identifyGroups();
      this.groupsCreated = true;
    }

    createMediaItemsForGrouping() {
      this.mediaItems.sort((a, b) => {
        let dateTimeA = a.dateTime;
        let dateTimeB = b.dateTime;

        if (dateTimeA < dateTimeB) {
          return -1;
        }

        if (dateTimeA > dateTimeB) {
          return 1;
        } // datetimes must be equal


        return 0;
      });
      this.mediaItems.forEach((item, i) => {
        this.mediaItemsForGrouping.push(new _media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItemForGrouping(item, i + 1, 0));
      });
    }

    calculateTimeDiff() {
      this.mediaItemsForGrouping.forEach(item => {
        if (item.seqNo === 1) {
          item.timeDiff = 0;
        } else {
          const prevItem = this.mediaItemsForGrouping.find(s => s.seqNo === item.seqNo - 1);
          item.timeDiff = item.mediaItem.dateTime.diff(prevItem.mediaItem.dateTime, 'second');
        }
      });
    }

    identifyGroups() {
      let group;
      let id = 1;
      this.mediaItemsForGrouping.forEach((item, i) => {
        let groupName = "NEW " + item.mediaItem.dateTime.format('YYYY-MM-DD') + ' (' + item.mediaItem.dateTime.format('dd H') + ':00) text'; // if the first file in the sequence, create a new group

        if (i === 0) {
          group = new _media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
          id++; // if not the first file
        } else {
          // if a new group is identified, add current group and create a new group
          if (item.timeDiff > this.timeDiffGroup) {
            this.mediaItemsGroups.push(group);
            group = new _media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
            id++; // if existing group, add the file to the group and update end time
          } else {
            group.mediaItemsForGrouping.push(item);
            group.endTime = item.mediaItem.dateTime;
          }
        } // if the last file in the sequence, add current group


        if (i + 1 === this.mediaItemsForGrouping.length) {
          this.mediaItemsGroups.push(group);
        }
      });
    }

    getMediaItemsCount() {
      let uniqueItemsCount = 0;
      this.mediaItemsGroups.forEach(group => {
        uniqueItemsCount += group.mediaItemsForGrouping.length;
      });
      return uniqueItemsCount;
    }

    getDaysDiffFromToday(groupDate) {
      return this.dateUtilService.getDaysDiffFromTodayDayjs(groupDate);
    }

    updateGroupName(gr, newName) {
      this.mediaItemsGroups.forEach(group => {
        if (group.id === gr.id) {
          group.name = newName;
        }
      });
    }

    uploadToGooglePhotos() {
      var _this = this;

      return (0,C_Users_svobo_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this.createAlbumsAndMedia();

        _this.saveLastUploadInfo();
      })();
    }

    saveLastUploadInfo() {
      if (this.uploadingStatus == UploadingStatus.Success) {
        this.lastUploadInfoSubscription = this.lastUploadInfoService.updateLastUploadInfo().subscribe();
      }
    } // async/await + for...of loop to ensure sequential API calls
    // not working with arrays' forEach() method


    createAlbumsAndMedia() {
      var _this2 = this;

      return (0,C_Users_svobo_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.uploadingStatus = UploadingStatus.InProgress;

        for (const group of _this2.mediaItemsGroups) {
          if (group.albumId == null) {
            yield _this2.albumService.albums(group, _this2.googleLoginService.getAccessToken()).toPromise().then( /*#__PURE__*/function () {
              var _ref = (0,C_Users_svobo_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (album) {
                group.albumId = album.id;
                yield _this2.createMedia(group);
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }()).catch(() => _this2.uploadingStatus = UploadingStatus.Fail);
          } else {
            yield _this2.createMedia(group);
          } // when API call error, then break the loop


          if (_this2.uploadingStatus != UploadingStatus.InProgress) break;
        }

        _this2.uploadingStatus = _this2.getMediaItemsCount() == _this2.getUploadedCount() ? UploadingStatus.Success : UploadingStatus.Fail;
      })();
    }

    createMedia(group) {
      var _this3 = this;

      return (0,C_Users_svobo_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        for (const item of group.mediaItemsForGrouping) {
          if (!item.mediaItem.uploadSuccess) {
            yield _this3.mediaItemService.uploads(item.mediaItem, _this3.googleLoginService.getAccessToken()).toPromise().then( /*#__PURE__*/function () {
              var _ref2 = (0,C_Users_svobo_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (uploadToken) {
                yield _this3.mediaItemService.batchCreate(item.mediaItem, uploadToken, _this3.googleLoginService.getAccessToken(), group.albumId).toPromise().then(() => item.mediaItem.uploadSuccess = true).catch(() => _this3.uploadingStatus = UploadingStatus.Fail);
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()).catch(() => _this3.uploadingStatus = UploadingStatus.Fail);
          }
        }
      })();
    }

    removeGroup(gr) {
      this.mediaItemsGroups.splice(this.mediaItemsGroups.indexOf(gr), 1);
    }

    getUploadedCount() {
      let uploadedCount = 0;
      this.mediaItemsGroups.forEach(group => {
        uploadedCount += group.getUploadedCount();
      });
      return uploadedCount;
    }

    getParamsTimeDiffs() {
      this.timeDiffGroup = this.paramsForm.get(['timeDiffGroup']).value;
    }

    getParamsResize() {
      this.resizeWidth = this.paramsForm.get(['resizeWidth']).value;
      this.resizeHeight = this.paramsForm.get(['resizeHeight']).value;
    }

    emptyArraysExceptMediaItems() {
      this.mediaItemsForGrouping = [];
      this.mediaItemsGroups = [];
      this.groupsCreated = false;
      this.uploadingStatus = UploadingStatus.None;
    }

    changeParamsFormShow() {
      this.paramsFormShow ? this.paramsFormShow = false : this.paramsFormShow = true;
    }

  }

  ImagesProcessingComponent.ɵfac = function ImagesProcessingComponent_Factory(t) {
    return new (t || ImagesProcessingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_15__.NgxPicaService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItemService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_album_service__WEBPACK_IMPORTED_MODULE_4__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_google_login_google_login_service__WEBPACK_IMPORTED_MODULE_5__.GoogleLoginService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_parameters_parameters_service__WEBPACK_IMPORTED_MODULE_6__.ParametersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_date_util_service__WEBPACK_IMPORTED_MODULE_7__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_last_upload_info_last_upload_info_service__WEBPACK_IMPORTED_MODULE_8__.LastUploadInfoService));
  };

  ImagesProcessingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ImagesProcessingComponent,
    selectors: [["ipfgp-images-processing"]],
    decls: 5,
    vars: 4,
    consts: [[4, "ngIf", "ngIfElse"], ["loadingOrError", ""], ["class", "alert alert-info", 4, "ngIf"], [1, "mx-auto", "mb-2", "p-3"], [1, "btn", "btn-primary", "m-2", 3, "click"], [3, "formGroup", 4, "ngIf"], ["class", "card p-3 mb-2 bg-light text-dark mx-auto", 4, "ngIf"], [1, "card", "p-3", "mb-2", "bg-light", "text-dark", "mx-auto"], [4, "ngIf"], [1, "alert", "alert-info"], [3, "formGroup"], [1, "form-group", "row"], ["for", "timeDiffGroup", 1, "col-sm", "col-form-label"], [1, "col-sm"], ["id", "timeDiffGroup", "type", "text", "formControlName", "timeDiffGroup", 1, "form-control"], ["class", "card-text text-danger", 4, "ngIf"], ["for", "resizeWidth", 1, "col-sm", "col-form-label"], ["id", "resizeWidth", "type", "text", "formControlName", "resizeWidth", 1, "form-control"], ["for", "resizeHeight", 1, "col-sm", "col-form-label"], ["id", "resizeHeight", "type", "text", "formControlName", "resizeHeight", 1, "form-control"], [1, "card-text", "text-danger"], [1, "form-group", "mx-auto", "mb-2", "p-3"], ["for", "inputFiles"], ["id", "inputFiles", "type", "file", "accept", "image/*", "multiple", "", 1, "form-control", 3, "change"], ["file", ""], [1, "form-text", "text-muted"], [1, "card-body"], ["class", "card-text text-primary", 4, "ngIf"], [1, "card-text", "text-primary"], [1, "btn", "btn-primary", "mb-2", 3, "click"], ["class", "card-text", 4, "ngIf"], [1, "card-text"], [1, "table", "table-bordered", "mx-auto", "p-3", "mb-2"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mb-2", 3, "disabled", "click"], ["class", "card border p-3 mb-2", 4, "ngFor", "ngForOf"], [1, "card", "border", "p-3", "mb-2"], [1, "card-header", "mb-2", "p-1", "text-center"], [1, "font-weight-bold", 3, "blur"], ["groupName", ""], ["title", "Remove group", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "carousel-div"], [3, "interval"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [1, "carousel-img", "d-block", "w-100", 3, "src"], ["loading", ""], [1, "alert", "alert-danger"]],
    template: function ImagesProcessingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ipfgp-user-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ImagesProcessingComponent_div_1_Template, 15, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ImagesProcessingComponent_ng_template_3_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx.parameters$))("ngIfElse", _r1);
      }
    },
    directives: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__.UserInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbSlide],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
    styles: [".carousel-div[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.carousel-img[_ngcontent-%COMP%] {\n  max-height: 500px;\n}"]
  });
  return ImagesProcessingComponent;
})();
var UploadingStatus = /*#__PURE__*/(() => {
  (function (UploadingStatus) {
    UploadingStatus["None"] = "None";
    UploadingStatus["InProgress"] = "InProgress";
    UploadingStatus["Success"] = "Success";
    UploadingStatus["Fail"] = "Fail";
  })(UploadingStatus || (UploadingStatus = {}));

  return UploadingStatus;
})();

/***/ }),

/***/ 669:
/*!***************************************************************!*\
  !*** ./src/app/images-processing/images-processing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesProcessingModule": () => (/* binding */ ImagesProcessingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _images_processing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images-processing-routing.module */ 1050);
/* harmony import */ var _images_processing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images-processing.component */ 3842);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3707);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-info/user-info.component */ 1234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);







let ImagesProcessingModule = /*#__PURE__*/(() => {
  class ImagesProcessingModule {}

  ImagesProcessingModule.ɵfac = function ImagesProcessingModule_Factory(t) {
    return new (t || ImagesProcessingModule)();
  };

  ImagesProcessingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ImagesProcessingModule
  });
  ImagesProcessingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _images_processing_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagesProcessingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule]]
  });
  return ImagesProcessingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ImagesProcessingModule, {
    declarations: [_images_processing_component__WEBPACK_IMPORTED_MODULE_1__.ImagesProcessingComponent, _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__.UserInfoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _images_processing_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagesProcessingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule]
  });
})();

/***/ }),

/***/ 1860:
/*!*********************************************************!*\
  !*** ./src/app/images-processing/media-item.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaItemService": () => (/* binding */ MediaItemService),
/* harmony export */   "MediaItem": () => (/* binding */ MediaItem),
/* harmony export */   "MediaItemForGrouping": () => (/* binding */ MediaItemForGrouping),
/* harmony export */   "MediaItemsGroup": () => (/* binding */ MediaItemsGroup)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/error-response.service */ 4888);





let MediaItemService = /*#__PURE__*/(() => {
  class MediaItemService {
    constructor(http, errorResponseService) {
      this.http = http;
      this.errorResponseService = errorResponseService;
      this.uploadsUrl = 'https://photoslibrary.googleapis.com/v1/uploads';
      this.batchCreateUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';
    }

    uploads(mediaItem, accessToken) {
      const httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/octet-stream',
          'X-Goog-Upload-Content-Type': 'mime-type',
          'X-Goog-Upload-Protocol': 'raw'
        }),
        observe: "body",
        responseType: "text"
      };
      return this.http.post(this.uploadsUrl, mediaItem.contentBytes, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

    batchCreate(mediaItem, uploadToken, accessToken, albumId) {
      const httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/json'
        })
      };
      const body = {
        "albumId": albumId,
        "newMediaItems": [{
          "description": "",
          "simpleMediaItem": {
            "fileName": mediaItem.name,
            "uploadToken": uploadToken
          }
        }]
      };
      return this.http.post(this.batchCreateUrl, body, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

  }

  MediaItemService.ɵfac = function MediaItemService_Factory(t) {
    return new (t || MediaItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_error_response_service__WEBPACK_IMPORTED_MODULE_0__.ErrorResponseService));
  };

  MediaItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MediaItemService,
    factory: MediaItemService.ɵfac,
    providedIn: 'root'
  });
  return MediaItemService;
})();
class MediaItem {
  constructor(name, dateTime, contentBytes, contentUrl) {
    this.uploadSuccess = false;
    this.name = name;
    this.dateTime = dateTime;
    this.contentBytes = contentBytes;
    this.contentUrl = contentUrl;
    this.uploadSuccess = this.uploadSuccess;
  }

}
class MediaItemForGrouping {
  constructor(mediaItem, seqNo, timeDiff) {
    this.mediaItem = mediaItem;
    this.seqNo = seqNo;
    this.timeDiff = timeDiff;
  }

}
class MediaItemsGroup {
  constructor(id, startTime, endTime, mediaItemsForGrouping, name) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.mediaItemsForGrouping = mediaItemsForGrouping;
    this.name = name;
  }

  getUploadedCount() {
    return this.mediaItemsForGrouping.filter(item => item.mediaItem.uploadSuccess).length;
  }

}

/***/ }),

/***/ 5410:
/*!**************************************************************!*\
  !*** ./src/app/last-upload-info/last-upload-info.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastUploadInfoService": () => (/* binding */ LastUploadInfoService),
/* harmony export */   "LastUploadInfo": () => (/* binding */ LastUploadInfo)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/error-response.service */ 4888);





let LastUploadInfoService = /*#__PURE__*/(() => {
  class LastUploadInfoService {
    constructor(http, errorResponseService) {
      this.http = http;
      this.errorResponseService = errorResponseService;
      this.lastUploadInfoUrl = 'last-upload-info';
      this.lastUploadInfoUpdateUrl = 'last-upload-info-update';
    }

    getLastUploadInfo() {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SERVER_URL + this.lastUploadInfoUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

    updateLastUploadInfo() {
      return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SERVER_URL + this.lastUploadInfoUpdateUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorResponseService.handleError));
    }

  }

  LastUploadInfoService.ɵfac = function LastUploadInfoService_Factory(t) {
    return new (t || LastUploadInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_error_response_service__WEBPACK_IMPORTED_MODULE_1__.ErrorResponseService));
  };

  LastUploadInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LastUploadInfoService,
    factory: LastUploadInfoService.ɵfac,
    providedIn: 'root'
  });
  return LastUploadInfoService;
})();
class LastUploadInfo {
  constructor(lastUploadDateTime) {
    this.lastUploadDateTime = lastUploadDateTime;
  }

}

/***/ }),

/***/ 2423:
/*!*********************************************!*\
  !*** ./src/app/shared/date-util.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateUtilService": () => (/* binding */ DateUtilService)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 1764);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ 274);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
let DateUtilService = /*#__PURE__*/(() => {
  class DateUtilService {
    constructor() {}

    getDaysDiffFromTodayDayjs(comparedDate) {
      const todayDay = dayjs__WEBPACK_IMPORTED_MODULE_0__(dayjs__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'));
      const comparedDateDay = dayjs__WEBPACK_IMPORTED_MODULE_0__(comparedDate.format('YYYY-MM-DD'));
      return todayDay.diff(comparedDateDay, 'days');
    }

    getDaysDiffFromTodayDate(comparedDate) {
      const todayDay = dayjs__WEBPACK_IMPORTED_MODULE_0__(dayjs__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'));
      const comparedDateDay = dayjs__WEBPACK_IMPORTED_MODULE_0__(dayjs__WEBPACK_IMPORTED_MODULE_0__(comparedDate).format('YYYY-MM-DD'));
      return todayDay.diff(comparedDateDay, 'days');
    }

  }

  DateUtilService.ɵfac = function DateUtilService_Factory(t) {
    return new (t || DateUtilService)();
  };

  DateUtilService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DateUtilService,
    factory: DateUtilService.ɵfac,
    providedIn: 'root'
  });
  return DateUtilService;
})();

/***/ }),

/***/ 1234:
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoComponent": () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1737);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/user.service */ 1584);
/* harmony import */ var _google_login_google_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-login/google-login.service */ 9075);
/* harmony import */ var _shared_date_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/date-util.service */ 2423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9808);









function UserInfoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const currentUser_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("Logged in as ", currentUser_r1.givenName, " ", currentUser_r1.familyName, " (", currentUser_r1.email, ").");
  }
}

let UserInfoComponent = /*#__PURE__*/(() => {
  class UserInfoComponent {
    constructor(router, userService, googleLoginService, dateUtilService) {
      this.router = router;
      this.userService = userService;
      this.googleLoginService = googleLoginService;
      this.dateUtilService = dateUtilService;
      this.currentUser$ = null;
    }

    ngOnInit() {
      this.currentUser$ = this.userService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
        this.googleLoginService.logOut();
        this.userService.logOut();
        this.error = err; // this.router.navigate(['/login']);

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
      }));
    }

    getDaysDiffFromToday(comparedDate) {
      return this.dateUtilService.getDaysDiffFromTodayDate(comparedDate);
    }

  }

  UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) {
    return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_google_login_google_login_service__WEBPACK_IMPORTED_MODULE_1__.GoogleLoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_date_util_service__WEBPACK_IMPORTED_MODULE_2__.DateUtilService));
  };

  UserInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: UserInfoComponent,
    selectors: [["ipfgp-user-info"]],
    decls: 2,
    vars: 3,
    consts: [["class", "alert alert-success", 4, "ngIf"], [1, "alert", "alert-success"]],
    template: function UserInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UserInfoComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.currentUser$));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [""]
  });
  return UserInfoComponent;
})();

/***/ }),

/***/ 1764:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      $ = "Invalid Date",
      l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  },
      m = function (t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      g = {
    s: m,
    z: function (t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
      return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
    },
    m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);
      var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, f),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), f);
      return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
    },
    a: function (t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    },
    p: function (t) {
      return {
        M: f,
        y: c,
        w: o,
        d: a,
        D: d,
        h: u,
        m: s,
        s: i,
        ms: r,
        Q: h
      }[t] || String(t || "").toLowerCase().replace(/s$/, "");
    },
    u: function (t) {
      return void 0 === t;
    }
  },
      D = "en",
      v = {};

  v[D] = M;

  var p = function (t) {
    return t instanceof _;
  },
      S = function (t, e, n) {
    var r;
    if (!t) return D;
    if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {
      var i = t.name;
      v[i] = t, r = i;
    }
    return !n && r && (D = r), r || !n && D;
  },
      w = function (t, e) {
    if (p(t)) return t.clone();
    var n = "object" == typeof e ? e : {};
    return n.date = t, n.args = arguments, new _(n);
  },
      O = g;

  O.l = S, O.i = p, O.w = function (t, e) {
    return w(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };

  var _ = function () {
    function M(t) {
      this.$L = S(t.locale, null, !0), this.parse(t);
    }

    var m = M.prototype;
    return m.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;
        if (null === e) return new Date(NaN);
        if (O.u(e)) return new Date();
        if (e instanceof Date) return new Date(e);

        if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match(l);

          if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }

        return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, m.init = function () {
      var t = this.$d;
      this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, m.$utils = function () {
      return O;
    }, m.isValid = function () {
      return !(this.$d.toString() === $);
    }, m.isSame = function (t, e) {
      var n = w(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    }, m.isAfter = function (t, e) {
      return w(t) < this.startOf(e);
    }, m.isBefore = function (t, e) {
      return this.endOf(e) < w(t);
    }, m.$g = function (t, e, n) {
      return O.u(t) ? this[e] : this.set(n, t);
    }, m.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, m.valueOf = function () {
      return this.$d.getTime();
    }, m.startOf = function (t, e) {
      var n = this,
          r = !!O.u(e) || e,
          h = O.p(t),
          $ = function (t, e) {
        var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
        return r ? i : i.endOf(a);
      },
          l = function (t, e) {
        return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          g = "set" + (this.$u ? "UTC" : "");

      switch (h) {
        case c:
          return r ? $(1, 0) : $(31, 11);

        case f:
          return r ? $(1, M) : $(0, M + 1);

        case o:
          var D = this.$locale().weekStart || 0,
              v = (y < D ? y + 7 : y) - D;
          return $(r ? m - v : m + (6 - v), M);

        case a:
        case d:
          return l(g + "Hours", 0);

        case u:
          return l(g + "Minutes", 1);

        case s:
          return l(g + "Seconds", 2);

        case i:
          return l(g + "Milliseconds", 3);

        default:
          return this.clone();
      }
    }, m.endOf = function (t) {
      return this.startOf(t, !1);
    }, m.$set = function (t, e) {
      var n,
          o = O.p(t),
          h = "set" + (this.$u ? "UTC" : ""),
          $ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
          l = o === a ? this.$D + (e - this.$W) : e;

      if (o === f || o === c) {
        var y = this.clone().set(d, 1);
        y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
      } else $ && this.$d[$](l);

      return this.init(), this;
    }, m.set = function (t, e) {
      return this.clone().$set(t, e);
    }, m.get = function (t) {
      return this[O.p(t)]();
    }, m.add = function (r, h) {
      var d,
          $ = this;
      r = Number(r);

      var l = O.p(h),
          y = function (t) {
        var e = w($);
        return O.w(e.date(e.date() + Math.round(t * r)), $);
      };

      if (l === f) return this.set(f, this.$M + r);
      if (l === c) return this.set(c, this.$y + r);
      if (l === a) return y(1);
      if (l === o) return y(7);
      var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,
          m = this.$d.getTime() + r * M;
      return O.w(m, this);
    }, m.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, m.format = function (t) {
      var e = this,
          n = this.$locale();
      if (!this.isValid()) return n.invalidDate || $;

      var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = O.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          f = n.months,
          h = function (t, n, i, s) {
        return t && (t[n] || t(e, r)) || i[n].substr(0, s);
      },
          c = function (t) {
        return O.s(s % 12 || 12, t, "0");
      },
          d = n.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      },
          l = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: a + 1,
        MM: O.s(a + 1, 2, "0"),
        MMM: h(n.monthsShort, a, f, 3),
        MMMM: h(f, a),
        D: this.$D,
        DD: O.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: h(n.weekdaysMin, this.$W, o, 2),
        ddd: h(n.weekdaysShort, this.$W, o, 3),
        dddd: o[this.$W],
        H: String(s),
        HH: O.s(s, 2, "0"),
        h: c(1),
        hh: c(2),
        a: d(s, u, !0),
        A: d(s, u, !1),
        m: String(u),
        mm: O.s(u, 2, "0"),
        s: String(this.$s),
        ss: O.s(this.$s, 2, "0"),
        SSS: O.s(this.$ms, 3, "0"),
        Z: i
      };

      return r.replace(y, function (t, e) {
        return e || l[t] || i.replace(":", "");
      });
    }, m.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, m.diff = function (r, d, $) {
      var l,
          y = O.p(d),
          M = w(r),
          m = (M.utcOffset() - this.utcOffset()) * e,
          g = this - M,
          D = O.m(this, M);
      return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);
    }, m.daysInMonth = function () {
      return this.endOf(f).$D;
    }, m.$locale = function () {
      return v[this.$L];
    }, m.locale = function (t, e) {
      if (!t) return this.$L;
      var n = this.clone(),
          r = S(t, e, !0);
      return r && (n.$L = r), n;
    }, m.clone = function () {
      return O.w(this.$d, this);
    }, m.toDate = function () {
      return new Date(this.valueOf());
    }, m.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, m.toISOString = function () {
      return this.$d.toISOString();
    }, m.toString = function () {
      return this.$d.toUTCString();
    }, M;
  }(),
      b = _.prototype;

  return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
    b[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), w.extend = function (t, e) {
    return t.$i || (t(e, _, w), t.$i = !0), w;
  }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
    return w(1e3 * t);
  }, w.en = v[D], w.Ls = v, w.p = {}, w;
});

/***/ }),

/***/ 274:
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  },
      e = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      n = /\d\d/,
      r = /\d\d?/,
      i = /\d*[^\s\d-_:/()]+/,
      o = {},
      s = function (t) {
    return (t = +t) + (t > 68 ? 1900 : 2e3);
  };

  var a = function (t) {
    return function (e) {
      this[t] = +e;
    };
  },
      f = [/[+-]\d\d:?(\d\d)?|Z/, function (t) {
    (this.zone || (this.zone = {})).offset = function (t) {
      if (!t) return 0;
      if ("Z" === t) return 0;
      var e = t.match(/([+-]|\d\d)/g),
          n = 60 * e[1] + (+e[2] || 0);
      return 0 === n ? 0 : "+" === e[0] ? -n : n;
    }(t);
  }],
      u = function (t) {
    var e = o[t];
    return e && (e.indexOf ? e : e.s.concat(e.f));
  },
      h = function (t, e) {
    var n,
        r = o.meridiem;

    if (r) {
      for (var i = 1; i <= 24; i += 1) if (t.indexOf(r(i, 0, e)) > -1) {
        n = i > 12;
        break;
      }
    } else n = t === (e ? "pm" : "PM");

    return n;
  },
      d = {
    A: [i, function (t) {
      this.afternoon = h(t, !1);
    }],
    a: [i, function (t) {
      this.afternoon = h(t, !0);
    }],
    S: [/\d/, function (t) {
      this.milliseconds = 100 * +t;
    }],
    SS: [n, function (t) {
      this.milliseconds = 10 * +t;
    }],
    SSS: [/\d{3}/, function (t) {
      this.milliseconds = +t;
    }],
    s: [r, a("seconds")],
    ss: [r, a("seconds")],
    m: [r, a("minutes")],
    mm: [r, a("minutes")],
    H: [r, a("hours")],
    h: [r, a("hours")],
    HH: [r, a("hours")],
    hh: [r, a("hours")],
    D: [r, a("day")],
    DD: [n, a("day")],
    Do: [i, function (t) {
      var e = o.ordinal,
          n = t.match(/\d+/);
      if (this.day = n[0], e) for (var r = 1; r <= 31; r += 1) e(r).replace(/\[|\]/g, "") === t && (this.day = r);
    }],
    M: [r, a("month")],
    MM: [n, a("month")],
    MMM: [i, function (t) {
      var e = u("months"),
          n = (u("monthsShort") || e.map(function (t) {
        return t.substr(0, 3);
      })).indexOf(t) + 1;
      if (n < 1) throw new Error();
      this.month = n % 12 || n;
    }],
    MMMM: [i, function (t) {
      var e = u("months").indexOf(t) + 1;
      if (e < 1) throw new Error();
      this.month = e % 12 || e;
    }],
    Y: [/[+-]?\d+/, a("year")],
    YY: [n, function (t) {
      this.year = s(t);
    }],
    YYYY: [/\d{4}/, a("year")],
    Z: f,
    ZZ: f
  };

  function c(n) {
    var r, i;
    r = n, i = o && o.formats;

    for (var s = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, n, r) {
      var o = r && r.toUpperCase();
      return n || i[r] || t[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, n) {
        return e || n.slice(1);
      });
    })).match(e), a = s.length, f = 0; f < a; f += 1) {
      var u = s[f],
          h = d[u],
          c = h && h[0],
          l = h && h[1];
      s[f] = l ? {
        regex: c,
        parser: l
      } : u.replace(/^\[|\]$/g, "");
    }

    return function (t) {
      for (var e = {}, n = 0, r = 0; n < a; n += 1) {
        var i = s[n];
        if ("string" == typeof i) r += i.length;else {
          var o = i.regex,
              f = i.parser,
              u = t.substr(r),
              h = o.exec(u)[0];
          f.call(e, h), t = t.replace(h, "");
        }
      }

      return function (t) {
        var e = t.afternoon;

        if (void 0 !== e) {
          var n = t.hours;
          e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0), delete t.afternoon;
        }
      }(e), e;
    };
  }

  return function (t, e, n) {
    n.p.customParseFormat = !0, t && t.parseTwoDigitYear && (s = t.parseTwoDigitYear);
    var r = e.prototype,
        i = r.parse;

    r.parse = function (t) {
      var e = t.date,
          r = t.utc,
          s = t.args;
      this.$u = r;
      var a = s[1];

      if ("string" == typeof a) {
        var f = !0 === s[2],
            u = !0 === s[3],
            h = f || u,
            d = s[2];
        u && (d = s[2]), o = this.$locale(), !f && d && (o = n.Ls[d]), this.$d = function (t, e, n) {
          try {
            if (["x", "X"].indexOf(e) > -1) return new Date(("X" === e ? 1e3 : 1) * t);
            var r = c(e)(t),
                i = r.year,
                o = r.month,
                s = r.day,
                a = r.hours,
                f = r.minutes,
                u = r.seconds,
                h = r.milliseconds,
                d = r.zone,
                l = new Date(),
                m = s || (i || o ? 1 : l.getDate()),
                M = i || l.getFullYear(),
                Y = 0;
            i && !o || (Y = o > 0 ? o - 1 : l.getMonth());
            var p = a || 0,
                v = f || 0,
                D = u || 0,
                g = h || 0;
            return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g);
          } catch (t) {
            return new Date("");
          }
        }(e, a, r), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), h && e != this.format(a) && (this.$d = new Date("")), o = {};
      } else if (a instanceof Array) for (var l = a.length, m = 1; m <= l; m += 1) {
        s[1] = a[m - 1];
        var M = n.apply(this, s);

        if (M.isValid()) {
          this.$d = M.$d, this.$L = M.$L, this.init();
          break;
        }

        m === l && (this.$d = new Date(""));
      } else i.call(this, t);
    };
  };
});

/***/ })

}]);
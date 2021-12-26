(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["images-processing-images-processing-module"],{

/***/ "+QaA":
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)};var a=function(t){return function(e){this[t]=+e}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=h(t,!1)}],a:[i,function(t){this.afternoon=h(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=s(t)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=s.length,f=0;f<a;f+=1){var u=s[f],h=d[u],c=h&&h[0],l=h&&h[1];s[f]=l?{regex:c,parser:l}:u.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,u=t.substr(r),h=o.exec(u)[0];f.call(e,h),t=t.replace(h,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],u=!0===s[3],h=f||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=c(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(t){return new Date("")}}(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,t)}}}));

/***/ }),

/***/ "0aH0":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-info.component.html */ "ksfC");
/* harmony import */ var _user_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info.component.scss */ "pZJy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.service */ "XNvx");
/* harmony import */ var _shared_date_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/date-util.service */ "ezor");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/user.service */ "VGjC");










let UserInfoComponent = class UserInfoComponent {
    constructor(router, userService, loginService, dateUtilService) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.dateUtilService = dateUtilService;
        this.currentUser$ = null;
    }
    ngOnInit() {
        this.currentUser$ = this.userService.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => {
            this.loginService.logOut();
            this.userService.logOut();
            this.error = err;
            // this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
    getDaysDiffFromToday(comparedDate) {
        return this.dateUtilService.getDaysDiffFromTodayDate(comparedDate);
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: _shared_date_util_service__WEBPACK_IMPORTED_MODULE_8__["DateUtilService"] }
];
UserInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ipfgp-user-info',
        template: _raw_loader_user_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserInfoComponent);



/***/ }),

/***/ "AyyP":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images-processing/images-processing.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ipfgp-user-info></ipfgp-user-info>\n<div *ngIf=\"parameters$ | async as parameters; else loadingOrError\">\n  <div class=\"my-width mx-auto mb-2 p-3\">\n    <h3>Parameters\n      <button (click)=\"changeParamsFormShow()\" class=\"btn btn-primary m-2\">\n        {{ paramsFormShow ? 'Hide' : 'Show' }}\n      </button>\n    </h3>\n    <form [formGroup]=\"paramsForm\" *ngIf=\"paramsFormShow\">\n      <div class=\"form-group row\">\n        <label for=\"timeDiffGroup\" class=\"col-sm col-form-label\">Time diff for groups (in sec)</label>\n        <div class=\"col-sm\">\n          <input class=\"form-control\" id=\"timeDiffGroup\" type=\"text\" formControlName=\"timeDiffGroup\" />\n        </div>\n        <div class=\"card-text text-danger\" *ngIf=\"paramsForm.get(['timeDiffGroup']).errors\">\n          Time diff for groups (in sec) must be between 60 and 86400.\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"resizeWidth\" class=\"col-sm col-form-label\">Resize width (px)</label>\n        <div class=\"col-sm\">\n          <input class=\"form-control\" id=\"resizeWidth\" type=\"text\" formControlName=\"resizeWidth\" />\n        </div>\n        <div class=\"card-text text-danger\" *ngIf=\"paramsForm.get(['resizeWidth']).errors\">\n          Resize width (px) must be between 1 and 10000.\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"resizeHeight\" class=\"col-sm col-form-label\">Resize height (px)</label>\n        <div class=\"col-sm\">\n          <input class=\"form-control\" id=\"resizeHeight\" type=\"text\" formControlName=\"resizeHeight\" />\n        </div>\n        <div class=\"card-text text-danger\" *ngIf=\"paramsForm.get(['resizeHeight']).errors\">\n          Resize height (px) must be between 1 and 10000.\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"card p-3 mb-2 bg-light text-dark my-width mx-auto\" *ngIf=\"paramsForm.status != 'VALID'\">\n    <div class=\"card-text text-danger\">\n      Parameters not valid\n    </div>\n  </div>\n\n  <div class=\"card p-3 mb-2 bg-light text-dark my-width mx-auto\">\n    <form [formGroup]=\"inputFilesForm\" *ngIf=\"paramsForm.status == 'VALID'\">\n      <div class=\"form-group my-width mx-auto mb-2 p-3\">\n        <label for=\"inputFiles\">Select images for processing</label>\n        <input class=\"form-control\" id=\"inputFiles\" #file type=\"file\" accept=\"image/*\"\n          (change)=\"processFiles(file.files)\" multiple />\n        <small class=\"form-text text-muted\">\n          <div>Accepted file types: .jpg</div>\n          <div>Accepted file name formats (examples):</div>\n          <div>20210924_133734.jpg</div>\n          <div>IMG_20210924_133734_1.jpg</div>\n          <div>WP_20210924_13_37_34_Pro.jpg</div>\n        </small>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"card p-3 mb-2 bg-light text-dark my-width mx-auto\" *ngIf=\"filesCount\">\n    <div class=\"card-body\">\n      <p class=\"card-text text-danger\" *ngIf=\"mediaItems.length != filesCount\">Resizing in progress\n        ({{ mediaItems.length }} of {{ filesCount }})</p>\n      <p class=\"card-text text-primary\" *ngIf=\"mediaItems.length == filesCount\">Finished: {{ mediaItems.length }} files\n        resized to {{ resizeWidth }}x{{ resizeHeight }}px.</p>\n      <div *ngIf=\"filesLoaded\">\n        <button class=\"btn btn-primary mb-2\" (click)=\"createGroups()\">\n          Create groups\n        </button>\n        <p class=\"card-text\" *ngIf=\"getMediaItemsCount()\">\n          {{ getMediaItemsCount() }} images in {{ mediaItemsGroups.length }} groups\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"getMediaItemsCount()\">\n    <h3 class=\"my-width mx-auto mb-2 p-3\">Images in groups</h3>\n\n    <div class=\"my-width-groups mx-auto mb-2 p-3\">\n      <div *ngFor=\"let group of mediaItemsGroups\" class=\"card border p-3 mb-2\">\n        <!-- group header -->\n        <div class=\"card-header mb-2 p-1 text-center\">\n          <div class=\"small\">(click to edit name)</div>\n          <span class=\"font-weight-bold\" #groupName contenteditable\n            (blur)=\"updateGroupName(group, groupName.textContent)\">{{ group.name }}</span>\n          <button (click)=\"removeGroup(group)\" class=\"btn btn-primary m-2\" title=\"Remove group\">X</button>\n        </div>\n\n        <!-- group images -->\n\n        <!-- bootstrap carousel -->\n        <div class=\"carousel-div\">\n          <ngb-carousel [interval]=\"false\">\n            <ng-template ngbSlide *ngFor=\"let item of group.mediaItemsForGrouping\">\n              <div class=\"carousel-caption\">\n                <button (click)=\"removeItemFromGroup(group, item)\" class=\"btn btn-primary mb-2\" title=\"Remove\">X</button>\n              </div>\n              <div class=\"picsum-img-wrapper\">\n                <img [src]=\"item.mediaItem.contentUrl\" class=\"carousel-img d-block w-100\">\n              </div>\n            </ng-template>\n          </ngb-carousel>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"mediaItemsGroups.length\">\n    <h3 class=\"my-width mx-auto mb-2 p-3\">Groups overview</h3>\n\n    <table class=\"table table-bordered my-width mx-auto p-3 mb-2\">\n      <th>Group</th>\n      <th>Files</th>\n      <th>Uploaded</th>\n      <tr *ngFor=\"let group of mediaItemsGroups\">\n        <td>{{ group.name }}</td>\n        <td>{{ group.mediaItemsForGrouping.length }}</td>\n        <td>{{ group.getUploadedCount() }}</td>\n      </tr>\n      <tr>\n        <td>Total</td>\n        <td>{{ getMediaItemsCount() }}</td>\n        <td>{{ getUploadedCount() }}</td>\n      </tr>\n    </table>\n\n    <h3 class=\"my-width mx-auto mb-2 p-3\">Upload to Google Photos</h3>\n\n    <div class=\"card p-3 mb-2 bg-light text-dark my-width mx-auto\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <button (click)=\"createAlbumsAndMedia()\" class=\"btn btn-primary mb-2\" [disabled]=\"!groupsCreated\">Create\n            albums\n            and upload files to Google Photos</button>\n        </p>\n        <p class=\"card-text text-danger\" *ngIf=\"uploadingStatus == 'InProgress'\">UPLOADING IN PROGRESS</p>\n        <p class=\"card-text text-primary\" *ngIf=\"uploadingStatus == 'Success'\">UPLOADING SUCCESSFULLY FINISHED</p>\n        <p class=\"card-text text-danger\" *ngIf=\"uploadingStatus == 'Fail'\">UPLOADING FAILED (see the Groups Overview\n          table\n          for details)</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #loadingOrError>\n  <ng-container *ngIf=\"error; else loading\">\n    <div class=\"alert alert-danger\">{{ error }}</div>\n  </ng-container>\n  <ng-template #loading>\n    <div>Loading ...</div>\n  </ng-template>\n</ng-template>");

/***/ }),

/***/ "C3mq":
/*!******************************************************************!*\
  !*** ./src/app/images-processing/images-processing.component.ts ***!
  \******************************************************************/
/*! exports provided: timeDiffGroupDefault, resizeWidthDefault, resizeHeightDefault, ImagesProcessingComponent, UploadingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeDiffGroupDefault", function() { return timeDiffGroupDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWidthDefault", function() { return resizeWidthDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeHeightDefault", function() { return resizeHeightDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesProcessingComponent", function() { return ImagesProcessingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadingStatus", function() { return UploadingStatus; });
/* harmony import */ var _home_vlada_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_images_processing_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./images-processing.component.html */ "AyyP");
/* harmony import */ var _images_processing_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images-processing.component.scss */ "OgHu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @digitalascetic/ngx-pica */ "87cB");
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./album.service */ "eQXf");
/* harmony import */ var _media_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media-item.service */ "kArd");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "+QaA");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _google_login_google_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../google-login/google-login.service */ "h4ol");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _parameters_parameters_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parameters/parameters.service */ "Mfku");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_date_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/date-util.service */ "ezor");
















const timeDiffGroupDefault = 7200;
const resizeWidthDefault = 1000;
const resizeHeightDefault = 1000;
dayjs__WEBPACK_IMPORTED_MODULE_9__["extend"](dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_10__);
let ImagesProcessingComponent = class ImagesProcessingComponent {
  constructor(ngxPicaService, fb, mediaItemService, albumService, googleLoginService, parametersService, dateUtilService) {
    this.ngxPicaService = ngxPicaService;
    this.fb = fb;
    this.mediaItemService = mediaItemService;
    this.albumService = albumService;
    this.googleLoginService = googleLoginService;
    this.parametersService = parametersService;
    this.dateUtilService = dateUtilService;
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
      timeDiffGroup: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(86400)]],
      resizeWidth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(10000)]],
      resizeHeight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(10000)]]
    });
    this.resizeWidth = 0;
    this.resizeHeight = 0;
    this.paramsFormShow = true;
  }

  ngOnInit() {
    this.parameters$ = this.parametersService.getParameters().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(parameters => {
      this.paramsForm.patchValue({
        timeDiffGroup: parameters.timeDiffGroup,
        resizeWidth: parameters.resizeWidth,
        resizeHeight: parameters.resizeHeight
      });
      return parameters;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])(err => {
      this.error = err;
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["throwError"])(err);
    }));
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
    this.mediaItems.push(new _media_item_service__WEBPACK_IMPORTED_MODULE_8__["MediaItem"](file.name, dayjs__WEBPACK_IMPORTED_MODULE_9__(file.name.replace(/D/g, ''), 'YYYYMMDD HHmmss'), readerBytes.result, readerUrl.result));
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
      this.mediaItemsForGrouping.push(new _media_item_service__WEBPACK_IMPORTED_MODULE_8__["MediaItemForGrouping"](item, i + 1, 0));
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
      let groupName = item.mediaItem.dateTime.format('YYYY-MM-DD') + ' (' + item.mediaItem.dateTime.format('dd H') + ':00) text';
      groupName = this.translateWeekdayNamesToCzech(groupName); // if the first file in the sequence, create a new group

      if (i === 0) {
        group = new _media_item_service__WEBPACK_IMPORTED_MODULE_8__["MediaItemsGroup"](id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
        id++; // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (item.timeDiff > this.timeDiffGroup) {
          this.mediaItemsGroups.push(group);
          group = new _media_item_service__WEBPACK_IMPORTED_MODULE_8__["MediaItemsGroup"](id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
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

  translateWeekdayNamesToCzech(name) {
    return name.replace('Mo', 'po/Mo').replace('Tu', 'út/Tu').replace('We', 'st/We').replace('Th', 'čt/Th').replace('Fr', 'pá/Fr').replace('Sa', 'so/Sa').replace('Su', 'ne/Su');
  } // async/await + for...of loop to ensure sequential API calls
  // not working with arrays' forEach() method


  createAlbumsAndMedia() {
    var _this = this;

    return Object(_home_vlada_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.uploadingStatus = UploadingStatus.InProgress;

      for (const group of _this.mediaItemsGroups) {
        if (group.albumId == null) {
          yield _this.albumService.albums(group, _this.googleLoginService.getAccessToken()).toPromise().then( /*#__PURE__*/function () {
            var _ref = Object(_home_vlada_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (album) {
              group.albumId = album.id;
              yield _this.createMedia(group);
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).catch(() => _this.uploadingStatus = UploadingStatus.Fail);
        } else {
          yield _this.createMedia(group);
        } // when API call error, then break the loop


        if (_this.uploadingStatus != UploadingStatus.InProgress) break;
      }

      _this.uploadingStatus = _this.getMediaItemsCount() == _this.getUploadedCount() ? UploadingStatus.Success : UploadingStatus.Fail;
    })();
  }

  createMedia(group) {
    var _this2 = this;

    return Object(_home_vlada_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const item of group.mediaItemsForGrouping) {
        if (!item.mediaItem.uploadSuccess) {
          yield _this2.mediaItemService.uploads(item.mediaItem, _this2.googleLoginService.getAccessToken()).toPromise().then( /*#__PURE__*/function () {
            var _ref2 = Object(_home_vlada_eclipse_workspace_app_images_processing_for_google_photos_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (uploadToken) {
              yield _this2.mediaItemService.batchCreate(item.mediaItem, uploadToken, _this2.googleLoginService.getAccessToken(), group.albumId).toPromise().then(() => item.mediaItem.uploadSuccess = true).catch(() => _this2.uploadingStatus = UploadingStatus.Fail);
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }()).catch(() => _this2.uploadingStatus = UploadingStatus.Fail);
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

  removeItemFromGroup(gr, item) {
    this.mediaItemsGroups.forEach(group => {
      if (group.id === gr.id) {
        group.mediaItemsForGrouping.splice(group.mediaItemsForGrouping.indexOf(item), 1);
      }
    });
  }

  changeParamsFormShow() {
    this.paramsFormShow ? this.paramsFormShow = false : this.paramsFormShow = true;
  }

};

ImagesProcessingComponent.ctorParameters = () => [{
  type: _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_6__["NgxPicaService"]
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
}, {
  type: _media_item_service__WEBPACK_IMPORTED_MODULE_8__["MediaItemService"]
}, {
  type: _album_service__WEBPACK_IMPORTED_MODULE_7__["AlbumService"]
}, {
  type: _google_login_google_login_service__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginService"]
}, {
  type: _parameters_parameters_service__WEBPACK_IMPORTED_MODULE_13__["ParametersService"]
}, {
  type: _shared_date_util_service__WEBPACK_IMPORTED_MODULE_15__["DateUtilService"]
}];

ImagesProcessingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
  selector: 'ipfgp-images-processing',
  template: _raw_loader_images_processing_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_images_processing_component_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], ImagesProcessingComponent);

var UploadingStatus;

(function (UploadingStatus) {
  UploadingStatus["None"] = "None";
  UploadingStatus["InProgress"] = "InProgress";
  UploadingStatus["Success"] = "Success";
  UploadingStatus["Fail"] = "Fail";
})(UploadingStatus || (UploadingStatus = {}));

/***/ }),

/***/ "DWBW":
/*!***********************************************************************!*\
  !*** ./src/app/images-processing/images-processing-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ImagesProcessingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesProcessingRoutingModule", function() { return ImagesProcessingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _images_processing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images-processing.component */ "C3mq");




const routes = [{ path: '', component: _images_processing_component__WEBPACK_IMPORTED_MODULE_3__["ImagesProcessingComponent"] }];
let ImagesProcessingRoutingModule = class ImagesProcessingRoutingModule {
};
ImagesProcessingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ImagesProcessingRoutingModule);



/***/ }),

/***/ "OgHu":
/*!********************************************************************!*\
  !*** ./src/app/images-processing/images-processing.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-div {\n  margin: auto;\n}\n\n.carousel-img {\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ltYWdlcy1wcm9jZXNzaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSiIsImZpbGUiOiJpbWFnZXMtcHJvY2Vzc2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmNhcm91c2VsLWRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIFxuICAuY2Fyb3VzZWwtaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDsgIFxuICB9Il19 */");

/***/ }),

/***/ "Wgwc":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "eQXf":
/*!****************************************************!*\
  !*** ./src/app/images-processing/album.service.ts ***!
  \****************************************************/
/*! exports provided: AlbumService, Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/error-response.service */ "DbDQ");





let AlbumService = class AlbumService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.albumsUrl = 'https://photoslibrary.googleapis.com/v1/albums';
    }
    albums(group, accessToken) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + accessToken,
                'Content-type': 'application/json'
            })
        };
        const album = new Album(group.name);
        const body = {
            "album": album
        };
        return this.http.post(this.albumsUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
};
AlbumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__["ErrorResponseService"] }
];
AlbumService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AlbumService);

class Album {
    constructor(title, productUrl, id, isWriteable) {
        this.title = title;
        this.productUrl = productUrl;
        this.id = id;
        this.isWriteable = isWriteable;
    }
}


/***/ }),

/***/ "ezor":
/*!*********************************************!*\
  !*** ./src/app/shared/date-util.service.ts ***!
  \*********************************************/
/*! exports provided: DateUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtilService", function() { return DateUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "+QaA");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);




dayjs__WEBPACK_IMPORTED_MODULE_2__["extend"](dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);
let DateUtilService = class DateUtilService {
    constructor() { }
    getDaysDiffFromTodayDayjs(comparedDate) {
        const todayDay = dayjs__WEBPACK_IMPORTED_MODULE_2__(dayjs__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'));
        const comparedDateDay = dayjs__WEBPACK_IMPORTED_MODULE_2__(comparedDate.format('YYYY-MM-DD'));
        return comparedDateDay.diff(todayDay, 'days');
    }
    getDaysDiffFromTodayDate(comparedDate) {
        const todayDay = dayjs__WEBPACK_IMPORTED_MODULE_2__(dayjs__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'));
        const comparedDateDay = dayjs__WEBPACK_IMPORTED_MODULE_2__(dayjs__WEBPACK_IMPORTED_MODULE_2__(comparedDate).format('YYYY-MM-DD'));
        return comparedDateDay.diff(todayDay, 'days');
    }
};
DateUtilService.ctorParameters = () => [];
DateUtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateUtilService);



/***/ }),

/***/ "kArd":
/*!*********************************************************!*\
  !*** ./src/app/images-processing/media-item.service.ts ***!
  \*********************************************************/
/*! exports provided: MediaItemService, MediaItem, MediaItemForGrouping, MediaItemsGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemService", function() { return MediaItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItem", function() { return MediaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemForGrouping", function() { return MediaItemForGrouping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemsGroup", function() { return MediaItemsGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/error-response.service */ "DbDQ");





let MediaItemService = class MediaItemService {
    constructor(http, errorResponseService) {
        this.http = http;
        this.errorResponseService = errorResponseService;
        this.uploadsUrl = 'https://photoslibrary.googleapis.com/v1/uploads';
        this.batchCreateUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';
    }
    uploads(mediaItem, accessToken) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + accessToken,
                'Content-type': 'application/octet-stream',
                'X-Goog-Upload-Content-Type': 'mime-type',
                'X-Goog-Upload-Protocol': 'raw'
            }),
            observe: "body",
            responseType: "text"
        };
        return this.http.post(this.uploadsUrl, mediaItem.contentBytes, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
    batchCreate(mediaItem, uploadToken, accessToken, albumId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + accessToken,
                'Content-type': 'application/json'
            })
        };
        const body = {
            "albumId": albumId,
            "newMediaItems": [
                {
                    "description": "",
                    "simpleMediaItem": {
                        "fileName": mediaItem.name,
                        "uploadToken": uploadToken
                    }
                }
            ]
        };
        return this.http.post(this.batchCreateUrl, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorResponseService.handleError));
    }
};
MediaItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_error_response_service__WEBPACK_IMPORTED_MODULE_4__["ErrorResponseService"] }
];
MediaItemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MediaItemService);

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
        return this.mediaItemsForGrouping.filter((item) => item.mediaItem.uploadSuccess).length;
    }
}


/***/ }),

/***/ "ksfC":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-info/user-info.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-success\" *ngIf=\"currentUser$ | async as currentUser\">\n    <div>Logged in as {{ currentUser.givenName }} {{ currentUser.familyName }} ({{ currentUser.email }}).</div>\n    <div>Previous login {{ currentUser.previousLoginDateTime | date:'yyyy-MM-dd HH:mm' }}\n        ({{ getDaysDiffFromToday(currentUser.previousLoginDateTime) }} days ago).\n    </div>\n</div>");

/***/ }),

/***/ "pZJy":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qntr":
/*!***************************************************************!*\
  !*** ./src/app/images-processing/images-processing.module.ts ***!
  \***************************************************************/
/*! exports provided: ImagesProcessingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesProcessingModule", function() { return ImagesProcessingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _images_processing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images-processing-routing.module */ "DWBW");
/* harmony import */ var _images_processing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images-processing.component */ "C3mq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-info/user-info.component */ "0aH0");








let ImagesProcessingModule = class ImagesProcessingModule {
};
ImagesProcessingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _images_processing_component__WEBPACK_IMPORTED_MODULE_4__["ImagesProcessingComponent"],
            _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _images_processing_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImagesProcessingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]
    })
], ImagesProcessingModule);



/***/ })

}]);
//# sourceMappingURL=images-processing-images-processing-module.773c6f7838e20136ac11.js.map
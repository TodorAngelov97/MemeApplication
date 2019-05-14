(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_container_meme_grid_meme_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-container/meme-grid/meme-grid.component */ "./src/app/main-container/meme-grid/meme-grid.component.ts");
/* harmony import */ var _main_container_create_meme_create_meme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-container/create-meme/create-meme.component */ "./src/app/main-container/create-meme/create-meme.component.ts");
/* harmony import */ var _main_container_edit_meme_edit_meme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-container/edit-meme/edit-meme.component */ "./src/app/main-container/edit-meme/edit-meme.component.ts");






var routes = [
    { path: '', component: _main_container_meme_grid_meme_grid_component__WEBPACK_IMPORTED_MODULE_3__["MemeGridComponent"], pathMatch: 'full' },
    { path: 'create-meme', component: _main_container_create_meme_create_meme_component__WEBPACK_IMPORTED_MODULE_4__["CreateMemeComponent"] },
    { path: 'edit-meme/:id', component: _main_container_edit_meme_edit_meme_component__WEBPACK_IMPORTED_MODULE_5__["EditMemeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-nav-bar> </app-nav-bar>\n    <div class=\"container\">\n        <h1>\n            {{ title }}!\n        </h1>\n\n        <!-- <app-meme></app-meme> -->\n    </div>\n    <app-main-container></app-main-container>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 80%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxUb2RvckFcXERlc2t0b3BcXFByb2plY3RcXG1lbWUtYXBwbGljYXRpb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/nav-bar/nav-bar.component */ "./src/app/core/nav-bar/nav-bar.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-container/main-container.component */ "./src/app/main-container/main-container.component.ts");
/* harmony import */ var _main_container_meme_grid_meme_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-container/meme-grid/meme-grid.component */ "./src/app/main-container/meme-grid/meme-grid.component.ts");
/* harmony import */ var _main_container_meme_grid_meme_card_meme_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-container/meme-grid/meme-card/meme-card.component */ "./src/app/main-container/meme-grid/meme-card/meme-card.component.ts");
/* harmony import */ var _main_container_create_meme_create_meme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-container/create-meme/create-meme.component */ "./src/app/main-container/create-meme/create-meme.component.ts");
/* harmony import */ var _main_container_edit_meme_edit_meme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-container/edit-meme/edit-meme.component */ "./src/app/main-container/edit-meme/edit-meme.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_7__["MainContainerComponent"],
                _main_container_meme_grid_meme_grid_component__WEBPACK_IMPORTED_MODULE_8__["MemeGridComponent"],
                _main_container_meme_grid_meme_card_meme_card_component__WEBPACK_IMPORTED_MODULE_9__["MemeCardComponent"],
                _main_container_create_meme_create_meme_component__WEBPACK_IMPORTED_MODULE_10__["CreateMemeComponent"],
                _main_container_edit_meme_edit_meme_component__WEBPACK_IMPORTED_MODULE_11__["EditMemeComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small blue pt-4\">\n\n\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n        <a href=\"#\"> Memelt.com</a>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/nav-bar/nav-bar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class='container'>\n        <div class='logo'>\n        </div>\n\n        <ul>\n            <li class=\"logo\"> <a routerLink=\"/\">Memelt - Your Meme Sharing Platform </a> </li>\n            <li> <a href='#'> Explore</a></li>\n            <li> <a routerLink=\"/create-meme\">New Meme </a> </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/nav-bar/nav-bar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #F0F0F0;\n  max-width: 100%; }\n\nul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  overflow: hidden; }\n\nli {\n  float: right; }\n\nli a {\n  display: block;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  color: #3399ff; }\n\n.logo {\n  float: left; }\n\n.logo a {\n  color: black; }\n\nli a:hover {\n  background-color: #FFFF99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYtYmFyL0M6XFxVc2Vyc1xcVG9kb3JBXFxEZXNrdG9wXFxQcm9qZWN0XFxtZW1lLWFwcGxpY2F0aW9uL3NyY1xcYXBwXFxjb3JlXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzM5OWZmO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxvZ28gYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY5OTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/nav-bar/nav-bar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/core/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/core/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/main-container/create-meme/create-meme.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main-container/create-meme/create-meme.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create Meme</h2>\n\n<form [formGroup]=\"memeForm\" (ngSubmit)=\"onSubmit()\">\n    <!-- <form> -->\n    <div class=\"form-group\">\n\n        <label for=\"title\">Title</label>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"title\" placeholder=\"Enter title\">\n        <!-- <label *ngIf=\"memeForm.get('title').invalid\" [ngClass]=\"'error'\"> Name is required with 10 max character. </label> -->\n\n        <label for=\"file\">Image</label>\n        <input type=\"file\" formControlName=\"file\" class=\"form-control-file\" id=\"image\">\n        <!-- <label *ngIf=\"memeForm.get('file').invalid\" [ngClass]=\"'error'\"> Age is required. </label> -->\n\n        <button type=\"submit\" class=\"btn btn-primary\">Cretae</button>\n\n    </div>\n\n</form>"

/***/ }),

/***/ "./src/app/main-container/create-meme/create-meme.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main-container/create-meme/create-meme.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGFpbmVyL2NyZWF0ZS1tZW1lL2NyZWF0ZS1tZW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main-container/create-meme/create-meme.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main-container/create-meme/create-meme.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateMemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMemeComponent", function() { return CreateMemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CreateMemeComponent = /** @class */ (function () {
    function CreateMemeComponent(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    CreateMemeComponent.prototype.ngOnInit = function () {
        this.memeForm = this.createMemeForm();
    };
    CreateMemeComponent.prototype.createMemeForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CreateMemeComponent.prototype.onSubmit = function () {
        var formData = new FormData();
        formData.append('file', this.memeForm.get('file').value);
        formData.append('title', this.memeForm.get('title').value);
        return this.http.post(this.url + '/kurec', formData).subscribe();
    };
    CreateMemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-meme',
            template: __webpack_require__(/*! ./create-meme.component.html */ "./src/app/main-container/create-meme/create-meme.component.html"),
            styles: [__webpack_require__(/*! ./create-meme.component.scss */ "./src/app/main-container/create-meme/create-meme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CreateMemeComponent);
    return CreateMemeComponent;
}());



/***/ }),

/***/ "./src/app/main-container/edit-meme/edit-meme.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-container/edit-meme/edit-meme.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-meme-card [meme]=getMemeById(id)></app-meme-card> -->\n\n<h2>Edit Meme</h2>\n\n<form>\n\n    <div class=\"form-group \">\n        <label for=\"title \">Title</label>\n        <input class=\"form-control \" id=\"title \" placeholder=\"Like...seriously??? \">\n\n        <label for=\"image \">Image</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"image \">\n\n        <button type=\"submit \" class=\"btn btn-primary \">Edit</button>\n\n    </div>\n\n</form>"

/***/ }),

/***/ "./src/app/main-container/edit-meme/edit-meme.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main-container/edit-meme/edit-meme.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGFpbmVyL2VkaXQtbWVtZS9lZGl0LW1lbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main-container/edit-meme/edit-meme.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-container/edit-meme/edit-meme.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditMemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemeComponent", function() { return EditMemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EditMemeComponent = /** @class */ (function () {
    function EditMemeComponent(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    // createMemeForm() {
    //   return new FormGroup({
    //     title: new FormControl('', [Validators.required]),
    //     image: new FormControl('', [Validators.required]),
    //   });
    // }
    EditMemeComponent.prototype.ngOnInit = function () {
    };
    EditMemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-meme',
            template: __webpack_require__(/*! ./edit-meme.component.html */ "./src/app/main-container/edit-meme/edit-meme.component.html"),
            styles: [__webpack_require__(/*! ./edit-meme.component.scss */ "./src/app/main-container/edit-meme/edit-meme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EditMemeComponent);
    return EditMemeComponent;
}());



/***/ }),

/***/ "./src/app/main-container/main-container.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-container/main-container.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    main\n    <router-outlet> </router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/main-container/main-container.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-container/main-container.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  max-width: 80%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250YWluZXIvQzpcXFVzZXJzXFxUb2RvckFcXERlc2t0b3BcXFByb2plY3RcXG1lbWUtYXBwbGljYXRpb24vc3JjXFxhcHBcXG1haW4tY29udGFpbmVyXFxtYWluLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-container/main-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-container/main-container.component.ts ***!
  \************************************************************/
/*! exports provided: MainContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function() { return MainContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { AppRoutingModule } from '../app-routing.module';
var MainContainerComponent = /** @class */ (function () {
    function MainContainerComponent() {
    }
    MainContainerComponent.prototype.ngOnInit = function () {
    };
    MainContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-container',
            template: __webpack_require__(/*! ./main-container.component.html */ "./src/app/main-container/main-container.component.html"),
            styles: [__webpack_require__(/*! ./main-container.component.scss */ "./src/app/main-container/main-container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainContainerComponent);
    return MainContainerComponent;
}());



/***/ }),

/***/ "./src/app/main-container/meme-grid/meme-card/meme-card.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main-container/meme-grid/meme-card/meme-card.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" [src]=\"meme.image_name\" alt=\"Card image cap\">\n    <!-- src=\"meme.imageSource\" -->\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{meme.title}}</h5>\n        <!--{{meme.title}}-->\n\n        <div>\n            <button type=\"button\" class=\"btn btn-warning\"><a [routerLink]=\"['/edit-meme',meme.id]\">Edit</a></button>\n            <button type=\"button \" class=\"btn btn-danger \">Delete</button>\n        </div>\n\n    </div>"

/***/ }),

/***/ "./src/app/main-container/meme-grid/meme-card/meme-card.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main-container/meme-grid/meme-card/meme-card.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250YWluZXIvbWVtZS1ncmlkL21lbWUtY2FyZC9DOlxcVXNlcnNcXFRvZG9yQVxcRGVza3RvcFxcUHJvamVjdFxcbWVtZS1hcHBsaWNhdGlvbi9zcmNcXGFwcFxcbWFpbi1jb250YWluZXJcXG1lbWUtZ3JpZFxcbWVtZS1jYXJkXFxtZW1lLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLWNvbnRhaW5lci9tZW1lLWdyaWQvbWVtZS1jYXJkL21lbWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-container/meme-grid/meme-card/meme-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main-container/meme-grid/meme-card/meme-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: MemeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemeCardComponent", function() { return MemeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_meme_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/meme.model */ "./src/app/models/meme.model.ts");



var MemeCardComponent = /** @class */ (function () {
    function MemeCardComponent() {
    }
    MemeCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_meme_model__WEBPACK_IMPORTED_MODULE_2__["Meme"])
    ], MemeCardComponent.prototype, "meme", void 0);
    MemeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meme-card',
            template: __webpack_require__(/*! ./meme-card.component.html */ "./src/app/main-container/meme-grid/meme-card/meme-card.component.html"),
            styles: [__webpack_require__(/*! ./meme-card.component.scss */ "./src/app/main-container/meme-grid/meme-card/meme-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MemeCardComponent);
    return MemeCardComponent;
}());



/***/ }),

/***/ "./src/app/main-container/meme-grid/meme-grid.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-container/meme-grid/meme-grid.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "inside\n<div class=\"container\">\n    sss\n    <div class=\"lead-line\">\n\n        <!-- class=\"form-control\" -->\n\n        <input class=\"form-control\" type=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Serach memes...\" />\n\n        <div class=\"dropdown\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Meme per Page:\n                </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"#\">6</a>\n                <a class=\"dropdown-item\" href=\"#\">12</a>\n                <a class=\"dropdown-item\" href=\"#\">18</a>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"card-columns\">\n        <app-meme-card *ngFor=\"let meme of memes | filter: searchText\" [meme]=\"meme\"> </app-meme-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main-container/meme-grid/meme-grid.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main-container/meme-grid/meme-grid.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown {\n  display: inline; }\n\n.card-columns {\n  margin: auto;\n  max-width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250YWluZXIvbWVtZS1ncmlkL0M6XFxVc2Vyc1xcVG9kb3JBXFxEZXNrdG9wXFxQcm9qZWN0XFxtZW1lLWFwcGxpY2F0aW9uL3NyY1xcYXBwXFxtYWluLWNvbnRhaW5lclxcbWVtZS1ncmlkXFxtZW1lLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxlQUFlLEVBQUE7O0FBT25CO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGFpbmVyL21lbWUtZ3JpZC9tZW1lLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubGVhZC1saW5lIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZTtcclxuLy8gfVxyXG4uZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4vLyAuZm9ybS1jb250cm9sIHtcclxuLy8gICAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyB9XHJcbi5jYXJkLWNvbHVtbnMge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-container/meme-grid/meme-grid.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-container/meme-grid/meme-grid.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemeGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemeGridComponent", function() { return MemeGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/meme.service */ "./src/app/services/meme.service.ts");



//  import {MemeService} from '../../services/meme.service'
var MemeGridComponent = /** @class */ (function () {
    function MemeGridComponent(memeService) {
        this.memeService = memeService;
    }
    MemeGridComponent.prototype.ngOnInit = function () {
        this.getMemes();
        // this.memes = MEMES;
    };
    MemeGridComponent.prototype.getMemes = function () {
        var _this = this;
        this.memeService.getMemes().subscribe(function (memes) { return _this.memes = memes; });
    };
    MemeGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meme-grid',
            template: __webpack_require__(/*! ./meme-grid.component.html */ "./src/app/main-container/meme-grid/meme-grid.component.html"),
            styles: [__webpack_require__(/*! ./meme-grid.component.scss */ "./src/app/main-container/meme-grid/meme-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_meme_service__WEBPACK_IMPORTED_MODULE_2__["MemeService"]])
    ], MemeGridComponent);
    return MemeGridComponent;
}());



/***/ }),

/***/ "./src/app/models/meme.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/meme.model.ts ***!
  \**************************************/
/*! exports provided: Meme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meme", function() { return Meme; });
var Meme = /** @class */ (function () {
    function Meme() {
    }
    return Meme;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(function (it) {
            return it.title.toLocaleLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/meme.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/meme.service.ts ***!
  \******************************************/
/*! exports provided: MemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemeService", function() { return MemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MemeService = /** @class */ (function () {
    function MemeService(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    MemeService.prototype.getMemes = function () {
        return this.http.get(this.url + '/card');
    };
    MemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MemeService);
    return MemeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TodorA\Desktop\Project\meme-application\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.9f8507934ff1ad3efcbd.js.map
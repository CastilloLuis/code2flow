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



var routes = [];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr-vertical-nav .nav-link:hover {\n    color: #1e283e;\n    background-color: #dfdff6;\n    text-decoration: none;\n}\n\n.text-left {\n    text-align: left\n}\n\n.text-right {\n    text-align: right\n}\n\n.size15 {\n    font-size: 15px;\n}\n\n.size25 {\n    font-size: 25px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHItdmVydGljYWwtbmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxZTI4M2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZmNjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnRcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0XG59XG5cbi5zaXplMTUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNpemUyNSB7XG4gICAgZm9udC1zaXplOiAyNXB4XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <app-alert [type]=\"danger\" [alertText]=\"alertText\"></app-alert>\n    <app-header></app-header>   \n    <div class=\"content-container\">\n        <app-sidebar></app-sidebar>\n        <div style=\"width: 100%;\">     \n          <router-outlet style=\"background: red\"></router-outlet>\n        </div>\n    </div>\n</div>\n\n"

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
        this.alertText = 'Youve reached limit of 3 flowcharts on the Free Plan';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_flow_charts_table_flow_charts_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/flow-charts-table/flow-charts-table.component */ "./src/app/components/flow-charts-table/flow-charts-table.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_flow_chart_page_flow_chart_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/flow-chart-page/flow-chart-page.component */ "./src/app/pages/flow-chart-page/flow-chart-page.component.ts");













// App routes.
var appRoutes = [
    { path: '', component: _pages_flow_chart_page_flow_chart_page_component__WEBPACK_IMPORTED_MODULE_12__["FlowChartPageComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_flow_charts_table_flow_charts_table_component__WEBPACK_IMPORTED_MODULE_8__["FlowChartsTableComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _pages_flow_chart_page_flow_chart_page_component__WEBPACK_IMPORTED_MODULE_12__["FlowChartPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/alert/alert.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertClass {\n    background: #cc3d30; \n    height: 45px; \n    align-items: center\n}\n\n.upgrade-button {\n    font-weight: bold; \n    padding-bottom: 5px; \n    border-bottom: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRDbGFzcyB7XG4gICAgYmFja2dyb3VuZDogI2NjM2QzMDsgXG4gICAgaGVpZ2h0OiA0NXB4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59XG5cbi51cGdyYWRlLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf=\"!dismissAlert\"\n  class=\"alert alert-app-level alert-danger alertClass\"\n  role=\"alert\"\n>\n  <div class=\"alert-items\">\n    <div class=\"alert-item static size15\">\n      <div class=\"alert-icon-wrapper\">\n        <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n      </div>\n      <div class=\"alert-text\">\n        {{alertText}}.\n      </div>\n      <div class=\"alert-actions\" style=\"cursor: pointer;\">\n        <span\n          class=\"upgrade-button\"\n          >Upgrade now</span\n        > \n      </div>\n    </div>\n  </div>\n  <button (click)=\"dissmissAlert()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n    <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        var _this = this;
        /**
         * Boolean variable that handle the dismiss action of the alert
        */
        this.dismissAlert = false;
        this.dissmissAlert = function () { return _this.dismissAlert = true; };
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "alertText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/components/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/flow-charts-table/flow-charts-table.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/flow-charts-table/flow-charts-table.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".th1 {\n    width: 60px;\n    border-right: 1px solid #ececec;\n}\n\n.th2 {\n    width: 700px;\n    color: #57687b;\n    text-align: left;\n    border-right: 1px solid #ececec;\n}\n\n.th3 {\n    color: #57687b;\n    text-align: left;\n    border-right: 1px solid #ececec;\n}\n\n.th4 {\n    color: #57687b;\n    text-align: left;\n}\n\n#flowchart-description {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    text-align: left;\n}\n\n#circle-add-flowchart-wrapper {\n    width: 100%;\n    display: flex;\n    padding-left: 5px;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n#circle-add-flowchart {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #8b7eff;\n    color: white;\n    width: 35px;\n    height: 35px;\n    outline: none;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.image-container {\n    position: relative;\n    width: auto;\n    height: auto\n}\n\n.image-container .after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    color: #FFF;\n    display: block;\n    background: rgba(0, 0, 0, .6);\n    display: flex;\n    justify-content: center;\n    align-items: center;    \n    border-radius: 3px;\n}\n\n.hide {\n    opacity: 1\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG93LWNoYXJ0cy10YWJsZS9mbG93LWNoYXJ0cy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbG93LWNoYXJ0cy10YWJsZS9mbG93LWNoYXJ0cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoMSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbn1cblxuLnRoMiB7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGNvbG9yOiAjNTc2ODdiO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbn1cblxuLnRoMyB7XG4gICAgY29sb3I6ICM1NzY4N2I7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWNlY2VjO1xufVxuXG4udGg0IHtcbiAgICBjb2xvcjogIzU3Njg3YjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jZmxvd2NoYXJ0LWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY2lyY2xlLWFkZC1mbG93Y2hhcnQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuI2NpcmNsZS1hZGQtZmxvd2NoYXJ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzhiN2VmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG9cbn1cbi5pbWFnZS1jb250YWluZXIgLmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5oaWRlIHtcbiAgICBvcGFjaXR5OiAxXG59Il19 */"

/***/ }),

/***/ "./src/app/components/flow-charts-table/flow-charts-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/flow-charts-table/flow-charts-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"user\">\n    <thead>\n        <tr>\n            <th class=\"th1\"></th>\n            <th class=\"th2\">Flowchart</th>\n            <th class=\"th3\">Share with</th>\n            <th class=\"th4\">Actions</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let flowChart of user.flowCharts\">\n            <td>\n                \n                <div class=\"image-container\">\n                    <img src=\"../../../assets/{{flowChart.icon}}\" alt=\"FlowChart Icon\"/>\n                    <div *ngIf=\"!flowChart.active\" class=\"after\">\n                        <clr-icon shape=\"lock\" style=\"height: 25px; width: 25px;\"></clr-icon>\n                    </div>\n                </div>                \n                \n            </td>\n            <td style=\"text-align: left;\">\n                <div id=\"flowchart-description\">\n                    <div style=\"flex-direction: column; padding-top: 14px;\">\n                        <span *ngIf=\"flowChart.active\" style=\"font-size: 17px; color: #333333\">{{flowChart.title}}</span>\n                        <span *ngIf=\"!flowChart.active\" style=\"font-size: 17px; color: #d14148\">{{flowChart.title}}</span>\n                        <br/>\n                        <span>{{flowChart.date}}</span>\n                    </div>\n                    <div *ngIf=\"!flowChart.active\">\n                        <button class=\"btn btn-danger\" style=\"background: #e84740; outline: none;\">UPGRADE TO UNLOCK</button>\n                    </div>\n                </div>\n            </td>\n            <td>\n                <div style=\"display: flex; justify-content: flex-start; align-items: center; padding-top: 7px;\">\n                    <img *ngFor=\"let user of flowChart.sharedWith\" src=\"../../../assets/{{user}}\" style=\"width: 30px; border-radius: 50%;margin: 5px;\" alt=\"Shared User in code2flow\">\n                </div>\n            </td>\n            <td style=\"text-align: right; cursor: pointer;\"><clr-icon shape=\"ellipsis-vertical\" style=\"margin-top: 14px\"></clr-icon></td>\n        </tr>\n        <tr>\n            <td>\n                <div id=\"circle-add-flowchart-wrapper\">\n                    <div style=\"width: 40px\">\n                    <button type=\"button\" id=\"circle-add-flowchart\">\n                        <clr-icon shape=\"plus\"></clr-icon>\n                    </button>\n                    </div>\n                </div>                    \n            </td>            \n            <td style=\"text-align: left; padding-top: 22px\">\n                <span style=\"color: #8b7eff; font-size: 19px; cursor: pointer;\">Create new team</span>                \n            </td>\n            <td></td>\n            <td></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/flow-charts-table/flow-charts-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/flow-charts-table/flow-charts-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FlowChartsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowChartsTableComponent", function() { return FlowChartsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlowChartsTableComponent = /** @class */ (function () {
    function FlowChartsTableComponent() {
        /**
         * Object that represent the mock data of the "logged" user.
        */
        this.user = undefined;
    }
    FlowChartsTableComponent.prototype.ngOnInit = function () {
        console.log('User for table', this.user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlowChartsTableComponent.prototype, "user", void 0);
    FlowChartsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flow-charts-table',
            template: __webpack_require__(/*! ./flow-charts-table.component.html */ "./src/app/components/flow-charts-table/flow-charts-table.component.html"),
            styles: [__webpack_require__(/*! ./flow-charts-table.component.css */ "./src/app/components/flow-charts-table/flow-charts-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlowChartsTableComponent);
    return FlowChartsTableComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-design {\n    min-width: 12rem;\n    background: #192339;\n    color: white;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    height: 2.5rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWRlc2lnbiB7XG4gICAgbWluLXdpZHRoOiAxMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMTkyMzM5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIuNXJlbVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header\n  class=\"header\"\n  style=\"background: #0d172b; display: flex; align-items: center; justify-content: center\"\n>\n  <div\n    class=\"header-design\"\n  >\n    <div>\n      <img\n        src=\"../assets/guy.jpg\"\n        alt=\"Luis Castillo Profile Picture\"\n        style=\"border-radius: 50%; width: 30px;\"\n      />\n    </div>\n    <div style=\"width: 15px\"></div>\n    <div>\n      <span style=\"font-weight: bold; color: white\">Luis Castillo</span>\n    </div>\n    <div style=\"width: 10px\"></div>\n    <div style=\"cursor: pointer;\">\n      <clr-icon\n        shape=\"angle\"\n        style=\"color: #b8c2cd; transform: rotate(-180deg)\"\n      ></clr-icon>\n    </div>\n  </div>\n  <div\n    class=\"logo\"\n    style=\"width: 100%;display: flex;justify-content: center;align-items: center;\"\n  >\n    <img\n      src=\"../assets/logo.svg\"\n      alt=\"code2flow.com logo\"\n      style=\"width: 120px\"\n    />\n  </div>\n  <div class=\"create-flowchar\">\n    <button class=\"btn btn-success\" style=\"background: #49a561; outline: none;\">\n      NEW FLOWCHART\n    </button>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sideBar-item {\n    height: 45px;\n    display: flex;\n    align-items: center;\n    color: #1e283e;\n    font-size: 16px;\n}\n\n#add-team-wrapper {\n    width: 100%;\n    display: flex;\n    padding-left: 22px;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n#add-team-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #49a561;\n    color: white;\n    width: 30px;\n    height: 30px;\n    outline: none;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlQmFyLWl0ZW0ge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMxZTI4M2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jYWRkLXRlYW0td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiNhZGQtdGVhbS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNDlhNTYxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-vertical-nav style=\"width: 12rem; height: 100vh; padding-top: 0px;background: #ffffff;border-right: 1.5px solid #dfdff6;\">\n    <div style=\"padding-top: 14px\">\n      <a class=\"sideBar-item\" clrVerticalNavLink routerLink=\"\" routerLinkActive=\"active\">\n        <clr-icon shape=\"cloud-chart\" style=\"width: 25px; height: 25px; margin-right: 15px\"></clr-icon>My flowcharts\n      </a>\n      <a class=\"sideBar-item\" clrVerticalNavLink routerLinkActive=\"active\">\n        <clr-icon shape=\"clock\" style=\"width: 25px; height: 25px; margin-right: 15px\"></clr-icon>Recent\n      </a>\n      <a class=\"sideBar-item\" clrVerticalNavLink routerLinkActive=\"active\">\n        <clr-icon shape=\"users\" style=\"width: 25px; height: 25px; margin-right: 15px\"></clr-icon>Shared with me\n      </a>\n      <a class=\"sideBar-item\" clrVerticalNavLink routerLinkActive=\"active\">\n        <clr-icon shape=\"trash\" style=\"width: 25px; height: 25px; margin-right: 15px\"></clr-icon>Trash\n      </a>\n      <div class=\"nav-divider\" style=\"border: 0.5px solid #565656\"></div>\n      <div id=\"add-team-wrapper\">\n        <div style=\"width: 40px\">\n          <button type=\"button\" id=\"add-team-button\">\n            <clr-icon shape=\"plus\"></clr-icon>\n          </button>\n        </div>\n        <span style=\"color: #1e283e; font-size: 16px;\">Create new team</span>\n      </div>\n    </div>\n</clr-vertical-nav>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pages/flow-chart-page/flow-chart-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/flow-chart-page/flow-chart-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flowChart-page {\n    display: flex;\n    justify-content: space-between;\n    align-items: center\n}\n\n.spinner-centered {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmxvdy1jaGFydC1wYWdlL2Zsb3ctY2hhcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zsb3ctY2hhcnQtcGFnZS9mbG93LWNoYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmbG93Q2hhcnQtcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuXG4uc3Bpbm5lci1jZW50ZXJlZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/flow-chart-page/flow-chart-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/flow-chart-page/flow-chart-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px; height: 100vh; background: #fafbfc\">\n  <div *ngIf=\"!loaded\" class=\"spinner-centered\">\n    <span class=\"spinner spinner-md\">\n        Loading...\n    </span>\n  </div>\n  <div *ngIf=\"loaded\">\n    <div id=\"flowChart-page\">\n      <span style=\"font-size: 25px; color: #333333\">My flowcharts</span>\n      <div style=\"display: flex; flex-direction: column; align-items: flex-end\">\n        <span style=\"color: #6b60f1; font-size: 15px\">Upgrade Plan</span>\n        <span style=\"font-size: 15px\">Flowcharts: <span style=\"color: red; font-weight: 500\">{{loggedUser.flowCharts.length}}/{{allowedCharts}}</span></span>\n      </div>\n    </div>\n    <app-flow-charts-table\n      [user]=\"loggedUser\"\n    ></app-flow-charts-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/flow-chart-page/flow-chart-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/flow-chart-page/flow-chart-page.component.ts ***!
  \********************************************************************/
/*! exports provided: FlowChartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowChartPageComponent", function() { return FlowChartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");



var FlowChartPageComponent = /** @class */ (function () {
    function FlowChartPageComponent(httpService) {
        this.httpService = httpService;
        /**
         * Object that represents the user "logged"
        */
        this.loggedUser = undefined;
        /**
         * Quantity of allowedCharts depending if its premium or not.
        */
        this.allowedCharts = undefined;
        /**
         * Variable to handle the "fetch" simulation.
        */
        this.loaded = false;
    }
    FlowChartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUser = this.httpService.getUser();
        this.allowedCharts = this.loggedUser.premium ? 8 : 3;
        setTimeout(function () { return _this.loaded = true; }, 1000);
    };
    FlowChartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flow-chart-page',
            template: __webpack_require__(/*! ./flow-chart-page.component.html */ "./src/app/pages/flow-chart-page/flow-chart-page.component.html"),
            providers: [src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./flow-chart-page.component.css */ "./src/app/pages/flow-chart-page/flow-chart-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], FlowChartPageComponent);
    return FlowChartPageComponent;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.fillUser = function () {
            _this.user = {
                name: 'Luis Castillo',
                nick: 'lcastillo',
                uid: "" + new Date().getTime(),
                email: 'lcastillo@castilloluis.me',
                premium: false,
                avatar: 'guy.png',
                flowCharts: [
                    { title: 'Expressing Your Thoughts (Sample #1)', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png'], active: true },
                    { title: 'Should | Become an Astronaut or Not? (Sample #2)', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png', 'guy.jpg'], active: true },
                    { title: 'How to Play Pictionary (Sample #3)', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png'], active: true },
                    { title: 'Untitled flowchart', date: 'Just now', icon: 'flowchart.png', sharedWith: ['girl.png'], active: false }
                ]
            };
        };
        this.getUser = function () { return _this.user; };
        this.fillUser();
    }
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /home/lcastillo/Documents/projects/code2flow/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
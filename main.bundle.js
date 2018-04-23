webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ul li a{\n    color:white;\n    font-weight: bold;\n}\n\n.nav>li>a:focus, .nav>li>a:hover {\n    text-decoration: none;\n    background-color: #f4f1f0;\n    color: #3379b7 !important;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-dark navbar-expand bg-primary\" >\n    <div class=\"container\">\n      <ul class=\" nav navbar-dark navbar-nav navbar-expand\">\n          <li><a [routerLink]=\"['welcome']\">Home</a></li>\n          <li><a [routerLink]=\"['heroes']\">Hero List</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.pageTitle = 'Angular Avenger';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_hero_list_component__ = __webpack_require__("./src/app/hero/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_hero_filter_pipe__ = __webpack_require__("./src/app/hero/hero-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero_hero_service__ = __webpack_require__("./src/app/hero/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_details_hero_details_component__ = __webpack_require__("./src/app/hero-details/hero-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_welcome_component__ = __webpack_require__("./src/app/home/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hero_hero_list_component__["a" /* HeroListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__hero_hero_filter_pipe__["a" /* HeroFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_7__hero_details_hero_details_component__["a" /* HeroDetailsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__hero_hero_service__["a" /* HeroService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_details_hero_details_component__ = __webpack_require__("./src/app/hero-details/hero-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_hero_list_component__ = __webpack_require__("./src/app/hero/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_welcome_component__ = __webpack_require__("./src/app/home/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_4__home_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__hero_hero_list_component__["a" /* HeroListComponent */] },
    { path: 'heroes/:id', component: __WEBPACK_IMPORTED_MODULE_2__hero_details_hero_details_component__["a" /* HeroDetailsComponent */] },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/hero-details/hero-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hero-details/hero-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"hero\">\n  <div class=\"panel-heading\" style=\"font-size:large\">\n    {{ \"Hero: \" + hero.heroName}}\n  </div>\n\n  <div class=\"panel-body\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-xs-3\"><b>Hero Name</b></div>\n            <div class=\"col-xs-6\">{{ hero.heroName }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\"><b>Real Name</b></div>\n            <div class=\"col-xs-6\">{{ hero.realName }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\"><b>Strength</b></div>\n            <div class=\"col-xs-6\">{{ hero.heroStrength }}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-3\"><b>Nature</b></div>\n            <div class=\"col-xs-6\">{{ hero.heroNature }}</div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\" style=\"text-align:center;\">\n          <img class=\"center-block img-responsive\"\n            [style.margin.px]=\"2\"\n            [src]=\"hero.imageUrl\"\n            [title]=\"hero.heroName\">\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hero-details/hero-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_hero_service__ = __webpack_require__("./src/app/hero/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HeroDetailsComponent = class HeroDetailsComponent {
    constructor(heroService, route, router) {
        this.heroService = heroService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (!this.hero) {
            const id = +this.route.snapshot.paramMap.get('id');
            this.getHero(id);
        }
    }
    getHero(id) {
        this.hero = this.heroService.getHero(id);
    }
    onBack() {
        this.router.navigate(['heroes']);
    }
};
HeroDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-hero-details',
        template: __webpack_require__("./src/app/hero-details/hero-details.component.html"),
        styles: [__webpack_require__("./src/app/hero-details/hero-details.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_hero_service__["a" /* HeroService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
], HeroDetailsComponent);



/***/ }),

/***/ "./src/app/hero/hero-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HeroFilterPipe = class HeroFilterPipe {
    transform(value, args) {
        let characters = args.toString();
        let filter = characters ? characters.toLocaleLowerCase() : null;
        return filter ? value.filter((hero) => hero.heroName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
};
HeroFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'heroFilter'
    })
], HeroFilterPipe);



/***/ }),

/***/ "./src/app/hero/hero-list.component.css":
/***/ (function(module, exports) {

module.exports = "thead{\n    color: #337AB7;\n}"

/***/ }),

/***/ "./src/app/hero/hero-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    Hero List\n  </div>\n\n  <!-- Filter data -->\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-1\">Filter by:</div>\n      <div class=\"col-md-4 input-group-sm\">\n        <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"listFilter\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h3>Filtered by: {{listFilter}} </h3>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n    <table class=\"table\" *ngIf='heroes && heroes.length'>\n        <thead>\n          <tr>\n            <th>\n              <button class=\"btn btn-primary\" (click)=\"toggleImage()\">\n                {{ showImage ? 'Hide': 'Show'}} Image\n              </button>\n            </th>\n            <th>Id</th>\n            <th>Hero Name</th>\n            <th>Real Name</th>\n            <th>Strength</th>\n            <th>Nature</th>\n          </tr>\n        </thead>\n        \n        <tbody>\n          <tr *ngFor=\"let hero of heroes | heroFilter:listFilter\">\n            <td>\n              <img *ngIf='showImage'\n                [src]='hero.imageUrl'\n                [title]='hero.heroname'\n                [style.width.px]='100'\n                [style.height.px]='100'\n                [style.margin.px]='2'\n              />\n            </td>\n            <td>{{ hero.heroId }}</td>\n            <td><a [routerLink]='hero.heroId'>\n              {{ hero.heroName | uppercase }}\n              </a>\n            </td>\n            <td>{{ hero.realName }}</td>\n            <td>{{ hero.heroStrength }}</td>\n            <td>{{ hero.heroNature }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hero/hero-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_filter_pipe__ = __webpack_require__("./src/app/hero/hero-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__("./src/app/hero/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HeroListComponent = class HeroListComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.showImage = false;
        this.listFilter = "";
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        this.heroes = this.heroService.getHeroes();
        console.log(this.heroes);
    }
};
HeroListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'hero-list',
        template: __webpack_require__("./src/app/hero/hero-list.component.html"),
        styles: [__webpack_require__("./src/app/hero/hero-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__hero_filter_pipe__["a" /* HeroFilterPipe */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]])
], HeroListComponent);



/***/ }),

/***/ "./src/app/hero/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HeroService = class HeroService {
    constructor() { }
    getHeroes() {
        return [
            {
                "heroId": 1,
                "heroName": "Captain America",
                "realName": "Steven Rogers",
                "heroStrength": "Shield",
                "heroNature": "Confident",
                "imageUrl": "./assets/images/cap.jpg"
            },
            {
                "heroId": 2,
                "heroName": "Iron Man",
                "realName": "Tony Stark",
                "heroStrength": "Suit and Jarvis",
                "heroNature": "Stylish",
                "imageUrl": "./assets/images/IronMan.jpg"
            },
            {
                "heroId": 3,
                "heroName": "Thor",
                "realName": "Thor",
                "heroStrength": "Hammer",
                "heroNature": "Confused",
                "imageUrl": "./assets/images/thor.jpg"
            },
            {
                "heroId": 4,
                "heroName": "Hulk",
                "realName": "Bruce Banner",
                "heroStrength": "Size",
                "heroNature": "Angry",
                "imageUrl": "./assets/images/hulk.jpg"
            },
            {
                "heroId": 5,
                "heroName": "Black Widow ",
                "realName": "Agent Romanoff ",
                "heroStrength": "Mind Games",
                "heroNature": "Smart",
                "imageUrl": "./assets/images/blackwidow.jpg"
            },
            {
                "heroId": 6,
                "heroName": "Agent Fury",
                "realName": "Nick Fury",
                "heroStrength": "Nothing",
                "heroNature": "Serious",
                "imageUrl": "./assets/images/fury.jpg"
            }
        ];
    }
    getHero(id) {
        return this.getHeroes().find(p => p.heroId === id);
    }
};
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HeroService);



/***/ }),

/***/ "./src/app/home/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        {{pageTitle}}\n    </div>\n    <div class=\"panel-body\"  >\n        <div class=\"row\" >\n            <img src=\"./assets/images/logo.jpg\" \n                 class=\"img-responsive center-block\"\n                 style=\"max-height:300px;padding-bottom:50px\"/>\n        </div>\n        <div class=\"row\"  >\n            <div class=\"text-center\">Developed by:\n                <h4 class=\"text-center\">Eduardo Araujo</h4>\n            </div>\n            <div class=\"text-center\">eduardodsaraujo at hotmail.com</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let WelcomeComponent = class WelcomeComponent {
    constructor() {
        this.pageTitle = "Welcome";
    }
};
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("./src/app/home/welcome.component.html")
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
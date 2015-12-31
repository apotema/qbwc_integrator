webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(70);
	var core_1 = __webpack_require__(91);
	var app_1 = __webpack_require__(292);
	var router_1 = __webpack_require__(315);
	var router_2 = __webpack_require__(315);
	var router_3 = __webpack_require__(315);
	var http_1 = __webpack_require__(295);
	function main() {
	    return browser_1.bootstrap(app_1.AppCmp, [
	        http_1.HTTP_PROVIDERS,
	        router_1.ROUTER_PROVIDERS,
	        core_1.provide(router_2.LocationStrategy, { useClass: router_3.HashLocationStrategy })
	    ]).catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	document.addEventListener('DOMContentLoaded', main);


/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(91);
	var core_2 = __webpack_require__(91);
	var company_1 = __webpack_require__(311);
	var about_1 = __webpack_require__(313);
	var router_1 = __webpack_require__(315);
	var router_2 = __webpack_require__(315);
	var router_3 = __webpack_require__(315);
	var router_4 = __webpack_require__(315);
	var company_service_1 = __webpack_require__(339);
	var AppCmp = (function () {
	    function AppCmp(_router, _company_service, _location) {
	        this._router = _router;
	        this._company_service = _company_service;
	        this._location = _location;
	        this.title = 'Tour of Heroes';
	    }
	    AppCmp.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        var company;
	        var promisse = this._company_service.create();
	        if (this._location.path() === "") {
	            promisse.subscribe(function (company) {
	                _this._router.navigate(["Company", { company_id: company.id }]);
	            });
	        }
	    };
	    AppCmp = __decorate([
	        core_1.Component({
	            selector: 'app',
	            styles: ["\n      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n      .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n    "],
	            template: __webpack_require__(340),
	            encapsulation: core_2.ViewEncapsulation.None,
	            directives: [router_2.ROUTER_DIRECTIVES],
	            providers: [company_service_1.CompanyService]
	        }),
	        router_1.RouteConfig([
	            { path: '/company/:company_id', component: company_1.CompanyCmp, as: 'Company' },
	            { path: '/', component: about_1.AboutCmp, as: 'Home' },
	            { path: '/about', component: about_1.AboutCmp, as: 'About' }
	        ]), 
	        __metadata('design:paramtypes', [router_3.Router, company_service_1.CompanyService, router_4.Location])
	    ], AppCmp);
	    return AppCmp;
	})();
	exports.AppCmp = AppCmp;


/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(91);
	var request_1 = __webpack_require__(294);
	var http_1 = __webpack_require__(295);
	var RequestGeneratorCmp = (function () {
	    function RequestGeneratorCmp(_http) {
	        this._http = _http;
	        this.types = [{ name: 'Vendor', value: ["Query", "Add", "Mod"] }];
	        this.model = new request_1.Request();
	        this.model.type = "Vendor-Query";
	    }
	    RequestGeneratorCmp.prototype.onSubmit = function () {
	        this._http.post("/company/1/vendors/query", "")
	            .map(function (res) { return console.log(res); })
	            .subscribe(function (people) { return console.log(people); });
	    };
	    RequestGeneratorCmp = __decorate([
	        core_1.Component({
	            selector: 'request-generator',
	            styles: [],
	            template: __webpack_require__(310),
	            viewProviders: [http_1.HTTP_PROVIDERS]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], RequestGeneratorCmp);
	    return RequestGeneratorCmp;
	})();
	exports.RequestGeneratorCmp = RequestGeneratorCmp;


/***/ },

/***/ 294:
/***/ function(module, exports) {

	var Request = (function () {
	    function Request() {
	    }
	    return Request;
	})();
	exports.Request = Request;


/***/ },

/***/ 310:
/***/ function(module, exports) {

	module.exports = "<h3>Create request</h3>\n<form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"type\">Type</label>\n    <select class=\"form-control\" required\n      [(ngModel)]=\"model.type\"\n        ngControl=\"type\" #type=\"ngForm\" >\n      <optgroup *ngFor=\"#p of types\" label={{p.name}}>\n        <option *ngFor=\"#sub_type of p.value\" [value]=\"p.name+'-'+sub_type\">\n          {{sub_type}}\n         </option>\n      </optgroup>\n    </select>\n    \n    <div [hidden]=\"type.valid\" class=\"alert alert-danger\">\n      Type is required\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-md-12'>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          {{model.type}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\" \n    [disabled]=\"!heroForm.form.valid\">Submit</button>\n</form>\n"

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(91);
	var company_service_1 = __webpack_require__(339);
	var router_1 = __webpack_require__(315);
	var request_generator_1 = __webpack_require__(293);
	var CompanyCmp = (function () {
	    function CompanyCmp(_company_service, _route_params) {
	        this._company_service = _company_service;
	        this._route_params = _route_params;
	        this.company = this._company_service.company;
	    }
	    CompanyCmp.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        if (!this._company_service.company) {
	            this._company_service.get(this._route_params.get('company_id'))
	                .subscribe(function (company) {
	                _this.company = company;
	            });
	        }
	    };
	    CompanyCmp = __decorate([
	        core_1.Component({
	            selector: 'company',
	            template: __webpack_require__(312),
	            directives: [request_generator_1.RequestGeneratorCmp]
	        }), 
	        __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.RouteParams])
	    ], CompanyCmp);
	    return CompanyCmp;
	})();
	exports.CompanyCmp = CompanyCmp;


/***/ },

/***/ 312:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"well well-sm\">\n      <dl *ngIf=\"company\">\n        <dd>Id</dd>\n        <dt>{{company.id}}</dt>\n        <dd>Password</dd>\n        <dt>{{company.password}}</dt>\n      </dl>\n    </div>\n    <request-generator></request-generator>\n  </div>\n  <div class=\"col-md-5\">\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\" \n        (click)=\"onSelect(hero)\" \n        [class.selected]=\"hero === selectedHero\" >\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  </div>\n</div>\n"

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(91);
	var AboutCmp = (function () {
	    function AboutCmp() {
	    }
	    AboutCmp = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: __webpack_require__(314)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutCmp);
	    return AboutCmp;
	})();
	exports.AboutCmp = AboutCmp;


/***/ },

/***/ 314:
/***/ function(module, exports) {

	module.exports = "<h1>Howdy!</h1>\n\n<h2>\n  Gratz! <smile></smile>\n</h2>\n\n<p class=\"note\">\n  Your deployment of Angular 2 Seed worked perfectly!\n  Click <em>about (above)</em> to get your reward!\n</p>\n"

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(91);
	var http_1 = __webpack_require__(295);
	var company_1 = __webpack_require__(608);
	var Observable_1 = __webpack_require__(134);
	var CompanyService = (function () {
	    function CompanyService(_http) {
	        this._http = _http;
	    }
	    CompanyService.prototype.create = function () {
	        var _this = this;
	        var observable = Observable_1.Observable.create(function (subscriber) {
	            _this._http.post("/companies", "")
	                .map(function (res) { return res.json(); })
	                .subscribe(function (company) {
	                _this.company = new company_1.Company(company.id, company.password);
	                subscriber.next(company);
	                subscriber.complete();
	            });
	        });
	        return observable;
	    };
	    CompanyService.prototype.get = function (id) {
	        var _this = this;
	        var observable = Observable_1.Observable.create(function (subscriber) {
	            _this._http.get("/companies/" + id)
	                .map(function (res) { return res.json(); })
	                .subscribe(function (company) {
	                _this.company = new company_1.Company(company.id, company.password);
	                subscriber.next(company);
	                subscriber.complete();
	            });
	        });
	        return observable;
	    };
	    CompanyService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], CompanyService);
	    return CompanyService;
	})();
	exports.CompanyService = CompanyService;


/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Qbwc Integrator</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['Company', {company_id: '1' }]\">Home</a></li>\n        <!-- <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li class=\"dropdown-header\">Nav header</li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li> -->\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 608:
/***/ function(module, exports) {

	var Company = (function () {
	    function Company(id, password) {
	        this.id = id;
	        this.password = password;
	    }
	    return Company;
	})();
	exports.Company = Company;


/***/ }

});
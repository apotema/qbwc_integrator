webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var browser_1 = __webpack_require__(218);
	var core_1 = __webpack_require__(4);
	var app_1 = __webpack_require__(325);
	var router_1 = __webpack_require__(28);
	var router_2 = __webpack_require__(28);
	var router_3 = __webpack_require__(28);
	var http_1 = __webpack_require__(38);
	var http_2 = __webpack_require__(38);
	function main() {
	    //enableProdMode();
	    return browser_1.bootstrap(app_1.AppCmp, [
	        // These are dependencies of our App
	        http_1.HTTP_PROVIDERS,
	        router_1.ROUTER_PROVIDERS,
	        http_2.JSONP_PROVIDERS,
	        // ELEMENT_PROBE_PROVIDERS
	        core_1.provide(router_2.LocationStrategy, { useClass: router_3.HashLocationStrategy })
	    ]).catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	document.addEventListener('DOMContentLoaded', main);


/***/ },

/***/ 134:
/***/ function(module, exports) {

	"use strict";
	var Request = (function () {
	    function Request(type, action) {
	        if (type === void 0) { type = ""; }
	        if (action === void 0) { action = ""; }
	        this.params = {};
	        this.type = type;
	        this.action = action;
	    }
	    return Request;
	}());
	exports.Request = Request;


/***/ },

/***/ 135:
/***/ function(module, exports) {

	"use strict";
	var RequestListSingleton = (function () {
	    function RequestListSingleton() {
	        this.list = [];
	    }
	    RequestListSingleton.prototype.push = function (request) {
	        this.list.push(request);
	    };
	    return RequestListSingleton;
	}());
	exports.RequestListSingleton = RequestListSingleton;


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(38);
	var company_1 = __webpack_require__(330);
	var Observable_1 = __webpack_require__(37);
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
	}());
	exports.CompanyService = CompanyService;


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var AboutCmp = (function () {
	    function AboutCmp() {
	    }
	    AboutCmp = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: __webpack_require__(339)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutCmp);
	    return AboutCmp;
	}());
	exports.AboutCmp = AboutCmp;


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var core_2 = __webpack_require__(4);
	var company_1 = __webpack_require__(326);
	var about_1 = __webpack_require__(324);
	var router_1 = __webpack_require__(28);
	var router_2 = __webpack_require__(28);
	var router_3 = __webpack_require__(28);
	var router_4 = __webpack_require__(28);
	var company_service_1 = __webpack_require__(209);
	var request_list_1 = __webpack_require__(135);
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
	            viewProviders: [request_list_1.RequestListSingleton],
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
	}());
	exports.AppCmp = AppCmp;


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var company_service_1 = __webpack_require__(209);
	var router_1 = __webpack_require__(28);
	var request_generator_1 = __webpack_require__(328);
	var request_list_1 = __webpack_require__(329);
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
	            template: __webpack_require__(341),
	            directives: [request_generator_1.RequestGeneratorCmp, request_list_1.RequestListCmp]
	        }), 
	        __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.RouteParams])
	    ], CompanyCmp);
	    return CompanyCmp;
	}());
	exports.CompanyCmp = CompanyCmp;


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var request_1 = __webpack_require__(134);
	var RequestFormCmp = (function () {
	    function RequestFormCmp() {
	        this.types = {
	            "Vendors": {
	                fields: ["name",
	                    "company_name",
	                    "salutation",
	                    "first_name",
	                    "middle_name",
	                    "last_name",
	                    "vendor_address"]
	            },
	            "Customers": {
	                fields: [
	                    "name"
	                ]
	            }
	        };
	    }
	    RequestFormCmp.prototype.fieldsOfModel = function (type) {
	        return (this.types[type].fields);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', request_1.Request)
	    ], RequestFormCmp.prototype, "request", void 0);
	    RequestFormCmp = __decorate([
	        core_1.Component({
	            selector: 'request-form',
	            styles: [],
	            template: __webpack_require__(342)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RequestFormCmp);
	    return RequestFormCmp;
	}());
	exports.RequestFormCmp = RequestFormCmp;


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var request_1 = __webpack_require__(134);
	var router_1 = __webpack_require__(28);
	var http_1 = __webpack_require__(38);
	var http_2 = __webpack_require__(38);
	var request_form_1 = __webpack_require__(327);
	var request_list_1 = __webpack_require__(135);
	var RequestGeneratorCmp = (function () {
	    function RequestGeneratorCmp(_http, _route_params, _request_list) {
	        this._http = _http;
	        this._route_params = _route_params;
	        this._request_list = _request_list;
	        this.types = ['Vendors', 'Customers'];
	        this.actions = ["Query", "Add", "Mod"];
	        this.model = new request_1.Request(this.types[0], this.actions[0]);
	    }
	    RequestGeneratorCmp.prototype.onSubmit = function () {
	        var _this = this;
	        console.log(this._request_list.list);
	        var requestOptions = new http_2.RequestOptions();
	        requestOptions.headers = new http_2.Headers;
	        requestOptions.headers.set("Content-Type", "application/json;charset=UTF-8");
	        var companyId = this._route_params.get('company_id');
	        this._http.post("/companies/" + companyId + "/" + this.model.type.toLowerCase() + "/" + this.model.action.toLowerCase(), JSON.stringify({ 'qbxml': this.model.params }), requestOptions)
	            .map(function (res) {
	            console.log(res.json());
	            _this._request_list.push(new request_1.Request(res.json()["id"], res.json()["state"]));
	        })
	            .subscribe(function (people) { return console.log(people); });
	    };
	    RequestGeneratorCmp = __decorate([
	        core_1.Component({
	            selector: 'request-generator',
	            directives: [request_form_1.RequestFormCmp],
	            template: __webpack_require__(343),
	            viewProviders: [http_1.HTTP_PROVIDERS]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http, router_1.RouteParams, request_list_1.RequestListSingleton])
	    ], RequestGeneratorCmp);
	    return RequestGeneratorCmp;
	}());
	exports.RequestGeneratorCmp = RequestGeneratorCmp;


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var request_1 = __webpack_require__(134);
	var http_1 = __webpack_require__(38);
	var router_1 = __webpack_require__(28);
	var request_service_1 = __webpack_require__(331);
	var request_list_1 = __webpack_require__(135);
	var RequestListCmp = (function () {
	    function RequestListCmp(_http, _route_params, _request_service, requests) {
	        var _this = this;
	        this._http = _http;
	        this._route_params = _route_params;
	        this._request_service = _request_service;
	        this.requests = requests;
	        this.companyId = this._route_params.get('company_id');
	        this._request_service.list_requests(this.companyId)
	            .subscribe(function (items) {
	            console.log(items);
	            console.log(items.json());
	            var json_items = items.json();
	            for (var item in json_items) {
	                console.log(json_items[item]);
	                _this.requests.push(new request_1.Request(json_items[item].id, json_items[item].state));
	            }
	        });
	    }
	    RequestListCmp.prototype.selectRequest = function (request) {
	        this.request = request;
	    };
	    RequestListCmp.prototype.ngAfterViewInit = function () {
	    };
	    RequestListCmp = __decorate([
	        core_1.Component({
	            selector: 'request-list',
	            styles: [("" + __webpack_require__(611))],
	            template: __webpack_require__(344),
	            viewProviders: [http_1.HTTP_PROVIDERS],
	            providers: [request_service_1.RequestService]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http, router_1.RouteParams, request_service_1.RequestService, request_list_1.RequestListSingleton])
	    ], RequestListCmp);
	    return RequestListCmp;
	}());
	exports.RequestListCmp = RequestListCmp;


/***/ },

/***/ 330:
/***/ function(module, exports) {

	"use strict";
	var Company = (function () {
	    function Company(id, password) {
	        this.id = id;
	        this.password = password;
	    }
	    return Company;
	}());
	exports.Company = Company;


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(38);
	var http_2 = __webpack_require__(38);
	__webpack_require__(213);
	var RequestService = (function () {
	    function RequestService(_http, _jsonp) {
	        this._http = _http;
	        this._jsonp = _jsonp;
	    }
	    RequestService.prototype.list_requests = function (company_id) {
	        var request_list = [];
	        return this._http.get("/companies/" + company_id + "/requests");
	        // .toPromise()
	        // .then(response => response.json())
	    };
	    RequestService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, http_2.Jsonp])
	    ], RequestService);
	    return RequestService;
	}());
	exports.RequestService = RequestService;


/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(322)();
	// imports


	// module
	exports.push([module.id, ".request-list {\n  display: block;\n  height: 300px;\n  overflow-y: scroll; }\n", ""]);

	// exports


/***/ },

/***/ 339:
/***/ function(module, exports) {

	module.exports = "<h1>Howdy!</h1>\n\n<h2>\n  Gratz! <smile></smile>\n</h2>\n\n<p class=\"note\">\n  Your deployment of Angular 2 Seed worked perfectly!\n  Click <em>about (above)</em> to get your reward!\n</p>\n"

/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Qbwc Integrator</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['Company', {company_id: '1' }]\">Home</a></li>\n        <!-- <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li class=\"dropdown-header\">Nav header</li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li> -->\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 341:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"well well-sm\">\n      <dl *ngIf=\"company\">\n        <dd>Id</dd>\n        <dt>{{company.id}}</dt>\n        <dd>Password</dd>\n        <dt>{{company.password}}</dt>\n      </dl>\n      <a *ngIf=\"company\" class=\"btn btn-info\" href=\"/companies/{{company.id}}/qbwc_file\" >QBWC FILE</a>\n    </div>\n    <request-generator></request-generator>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <request-list></request-list>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 342:
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"#field of fieldsOfModel(request.type)\" class=\"form-group\" >\n  <label for=\"field\">{{field}}</label>\n  <input id=\"{{field}}\" class=\"form-control\" [(ngModel)]=\"request.params[field]\" type=\"text\" placeholder=\"{{field}}\">\n</div>\n"

/***/ },

/***/ 343:
/***/ function(module, exports) {

	module.exports = "<h3>Create request</h3>\n<form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"type\">Type</label>\n    <select class=\"form-control\" required [(ngModel)]=\"model.type\"\n        ngControl=\"type\" #type=\"ngForm\" >  \n      <option *ngFor=\"#type of types\" [value]=\"type\">\n        {{type}}\n      </option>\n    </select>\n\n    <label for=\"action\">Action</label>\n    <select class=\"form-control\" required [(ngModel)]=\"model.action\"\n      ngControl=\"action\" #type=\"ngForm\" >\n      <option *ngFor=\"#action of actions\" [value]=\"action\">\n        {{action}}\n       </option>\n    </select>\n    \n    <div [hidden]=\"type.valid\" class=\"alert alert-danger\">\n      Type is required\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-md-12'>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          {{model.type}} - {{model.action}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <request-form *ngIf=\"model.action != 'Query'\" [request]=\"model\"></request-form>\n  <button type=\"submit\" class=\"btn btn-default\" \n    [disabled]=\"!heroForm.form.valid\">Submit</button>\n</form>\n"

/***/ },

/***/ 344:
/***/ function(module, exports) {

	module.exports = "<h2>Requests</h2>\n\n<div class=\"request-list\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Status</th>\n      </tr>\n    </thead>  \n    <tbody>\n      <tr *ngFor=\"#request of requests.list\" (click)=\"selectRequest(request)\">\n        <th scope=\"row\">{{request.type}}</th>\n        <td>{{request.action}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"request\">\n  <p>{{request.id}}</p>\n  <textarea rows=\"15\" style=\"width: 100%;\">{{request.quickbooks_response}}</textarea>\n</div>\n\n<request-detail [request]=\"selectedRequest\"></request-detail>\n"

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(338);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(323)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./request-list.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./request-list.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(223);
	function main() {
	    return browser_1.bootstrap(app_component_1.AppComponent, [])
	        .catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	document.addEventListener('DOMContentLoaded', main);


/***/ },

/***/ 223:
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
	var core_1 = __webpack_require__(22);
	var hero_detail_component_1 = __webpack_require__(519);
	var hero_service_1 = __webpack_require__(520);
	var AppComponent = (function () {
	    function AppComponent(_heroService) {
	        this._heroService = _heroService;
	        this.title = 'Tour of Heroes';
	        this.hero = {
	            id: 1,
	            name: 'Windstorm'
	        };
	        this.heroes = _heroService.getHeroes();
	    }
	    AppComponent.prototype.onSelect = function (hero) {
	        this.selectedHero = hero;
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            styles: ["\n      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n      .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n    "],
	            template: "\n      <h1>{{title}}</h1>\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n        <li *ngFor=\"#hero of heroes\" \n          (click)=\"onSelect(hero)\" \n          [class.selected]=\"hero === selectedHero\" >\n          <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n        </li>\n      </ul>\n      <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n      ",
	            directives: [hero_detail_component_1.HeroDetailComponent],
	            providers: [hero_service_1.HeroService]
	        }), 
	        __metadata('design:paramtypes', [hero_service_1.HeroService])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ },

/***/ 519:
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
	var core_1 = __webpack_require__(22);
	var HeroDetailComponent = (function () {
	    function HeroDetailComponent() {
	    }
	    HeroDetailComponent = __decorate([
	        core_1.Component({
	            selector: 'my-hero-detail',
	            template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
	            inputs: ['hero']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HeroDetailComponent);
	    return HeroDetailComponent;
	})();
	exports.HeroDetailComponent = HeroDetailComponent;


/***/ },

/***/ 520:
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
	var mock_heroes_1 = __webpack_require__(521);
	var core_1 = __webpack_require__(22);
	var HeroService = (function () {
	    function HeroService() {
	    }
	    HeroService.prototype.getHeroes = function () {
	        return mock_heroes_1.HEROES;
	    };
	    HeroService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HeroService);
	    return HeroService;
	})();
	exports.HeroService = HeroService;


/***/ },

/***/ 521:
/***/ function(module, exports) {

	exports.HEROES = [
	    { "id": 11, "name": "Mr. Nice" },
	    { "id": 12, "name": "Narco" },
	    { "id": 13, "name": "Bombasto" },
	    { "id": 14, "name": "Celeritas" },
	    { "id": 15, "name": "Magneta" },
	    { "id": 16, "name": "RubberMan" },
	    { "id": 17, "name": "Dynama" },
	    { "id": 18, "name": "Dr IQ" },
	    { "id": 19, "name": "Magma" },
	    { "id": 20, "name": "Tornado" }
	];


/***/ }

});
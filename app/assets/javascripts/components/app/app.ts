import {Component}             from 'angular2/core';
import {ViewEncapsulation}     from 'angular2/core';
import {RequestGeneratorCmp}   from '../request_generator/request-generator';
import {CompanyCmp}            from '../company/company';
import {AboutCmp}              from '../about/about';
import {Company}               from '../../models/company';
import {RouteConfig}           from 'angular2/router';
import {ROUTER_DIRECTIVES}     from 'angular2/router';
import {Router}                from 'angular2/router';
import {Location}              from 'angular2/router';
import {CompanyService}        from '../../services/company_service';
import {RequestListSingleton}  from '../../singletons/request_list';

@Component({
  selector: 'app',
  styles: [`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `],
  template: require('./app.html'),
  viewProviders: [RequestListSingleton],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES],
  providers: [CompanyService]
})
@RouteConfig([
  { path: '/company/:company_id', component: CompanyCmp, as: 'Company' },
  { path: '/', component: AboutCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {
  
  public title = 'Tour of Heroes';
  
  constructor(
    private _router: Router, 
    private _company_service: CompanyService,
    private _location: Location ) {
  }

  ngAfterViewInit() {
    var company: Company;
    var promisse = this._company_service.create();
    if (this._location.path() === "") {
      promisse.subscribe(
        company => {
          this._router.navigate(["Company", {company_id: company.id }]);
        }
      );
    }
    
  }

}

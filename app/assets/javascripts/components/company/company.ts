import {Component} from 'angular2/core';
import {CompanyService} from '../../services/company_service';
import {Company} from '../../models/company';
import {RouteParams} from 'angular2/router';
import {RequestGeneratorCmp} from '../request_generator/request-generator'


@Component({
    selector: 'company',
  template: require("./company.html"),
  directives: [RequestGeneratorCmp]
})
export class CompanyCmp {

  public company: Company;

  constructor(
    private _company_service: CompanyService, 
    private _route_params: RouteParams) {
    this.company = this._company_service.company
  }

  ngAfterViewInit() {
    if (!this._company_service.company) {
      this._company_service.get(this._route_params.get('company_id'))
        .subscribe( company => {
          this.company = company;
        })
    }
  }

}

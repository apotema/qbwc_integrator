import {Component}             from 'angular2/core';
import {NgForm}                from 'angular2/common';
import {Request}               from '../../models/request';
import {RouteParams}           from 'angular2/router';
import {Http, HTTP_PROVIDERS}  from 'angular2/http';

@Component({
    selector: 'request-generator',
    styles:[],
    template: require('./request-generator.html'),
    viewProviders: [HTTP_PROVIDERS]
})
export class RequestGeneratorCmp {

  types = [{name: 'Vendor', value: ["Query", "Add", "Mod"]}];
  public model = new Request();

  onSubmit() {
    var companyId = this._route_params.get('company_id');
    this._http.post(`/companies/${companyId}/vendors/query`," ")
      .map(res => console.log(res))
      .subscribe(people => console.log(people));
  }

  constructor(private _http: Http, private _route_params: RouteParams) {
    this.model.type = "Vendor-Query";
  }

}

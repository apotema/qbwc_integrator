import {Component}             from 'angular2/core';
import {NgForm}                from 'angular2/common';
import {Request}               from '../../models/request';
import {RouteParams}           from 'angular2/router';
import {Http, HTTP_PROVIDERS}  from 'angular2/http';
import {RequestFormCmp}        from './request-form';

@Component({
    selector: 'request-generator',
    directives: [RequestFormCmp],
    template: require('./request-generator.html'),
    viewProviders: [HTTP_PROVIDERS]
})
export class RequestGeneratorCmp {

  types = ['Vendors', 'Customers'];
  actions = ["Query", "Add", "Mod"];

  public model = new Request(this.types[0], this.actions[0]);

  onSubmit() {
    var companyId = this._route_params.get('company_id');
    this._http.post(
      `/companies/${companyId}/${this.model.type.toLowerCase()}/${this.model.action.toLowerCase()}`,
      JSON.stringify(this.model.params))
        .map(res => console.log(res))
      .subscribe(people => console.log(people));
  }

  constructor(private _http: Http, private _route_params: RouteParams) {
    
  }

}

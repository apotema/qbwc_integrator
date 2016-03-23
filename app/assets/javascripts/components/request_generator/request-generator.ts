import {Component}             from 'angular2/core';
import {NgForm}                from 'angular2/common';
import {Request}               from '../../models/request';
import {RouteParams}           from 'angular2/router';
import {Http, HTTP_PROVIDERS}  from 'angular2/http';
import {RequestOptions, Headers}  from 'angular2/http';
import {RequestFormCmp}        from './request-form';
import {RequestListSingleton}  from '../../singletons/request_list';

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
    console.log(this._request_list.list);
    var requestOptions = new RequestOptions()
    requestOptions.headers = new Headers;
    requestOptions.headers.set("Content-Type", "application/json;charset=UTF-8");
    var companyId = this._route_params.get('company_id');
    this._http.post(
    `/companies/${companyId}/${this.model.type.toLowerCase()}/${this.model.action.toLowerCase()}`,
    JSON.stringify({ 'qbxml': this.model.params }),
    requestOptions
    )
    .map(res => {
        console.log(res.json());
        this._request_list.push(new Request(res.json()["id"], res.json()["state"]))
      }
     )
    .subscribe(people => console.log(people));
  }

  constructor(
    private _http: Http, 
    private _route_params: RouteParams, 
    public _request_list: RequestListSingleton) {
    
  }

}

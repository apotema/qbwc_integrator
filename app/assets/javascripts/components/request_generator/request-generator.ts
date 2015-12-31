import {Component}             from 'angular2/core';
import {NgForm}                from 'angular2/common';
import {Request}               from '../../models/request';
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
    this._http.post("/company/1/vendors/query","")
      .map(res => console.log(res))
      .subscribe(people => console.log(people));
  }

  constructor(private _http: Http) {
    this.model.type = "Vendor-Query";
  }

}

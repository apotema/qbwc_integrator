import {Component}             from 'angular2/core';
import {NgForm}                from 'angular2/common';
import {Request}               from '../../models/request';
import {Http, HTTP_PROVIDERS}  from 'angular2/http';
import {RouteParams}           from 'angular2/router';
import {RequestService}        from '../../services/request_service';

@Component({
  selector: 'request-list',
  styles: [],
  template: require('./request-list.html'),
  viewProviders: [HTTP_PROVIDERS],
  providers: [RequestService]
})
export class RequestListCmp {

  public requests: Request[];

  private companyId;

  constructor(
    private _http: Http,
    private _route_params: RouteParams,
    private _request_service: RequestService) {
    this.companyId = this._route_params.get('company_id');
    this._request_service.list_requests(this.companyId)
      .then(items => this.requests = items);
  }

  ngAfterViewInit() {
    
  }

}

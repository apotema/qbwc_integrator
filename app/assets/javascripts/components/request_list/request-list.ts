import {Component}             from 'angular2/core';
import {NgForm}                from 'angular2/common';
import {Request}               from '../../models/request';
import {Http, HTTP_PROVIDERS}  from 'angular2/http';
import {RouteParams}           from 'angular2/router';
import {RequestService}        from '../../services/request_service';
import {RequestListSingleton}  from '../../singletons/request_list';

@Component({
  selector: 'request-list',
  styles: [`${require('./request-list.scss')}`],
  template: require('./request-list.html'),
  viewProviders: [HTTP_PROVIDERS],
  providers: [RequestService]
})
export class RequestListCmp {

  // public requests: RequestListSingleton;

  private request;

  private companyId;

  constructor(
    private _http: Http,
    private _route_params: RouteParams,
    private _request_service: RequestService,
    private requests: RequestListSingleton) {
    this.companyId = this._route_params.get('company_id');
    this._request_service.list_requests(this.companyId)
    .subscribe(items => {
        console.log(items);
        console.log(items.json());
        var json_items = items.json();
        for (var item in json_items) {
          console.log(json_items[item]);
          this.requests.push(new Request(json_items[item].id, json_items[item].state));
        }
      }
     );
  }

  selectRequest(request) {
    this.request = request;
  }

  ngAfterViewInit() {
    
  }

}

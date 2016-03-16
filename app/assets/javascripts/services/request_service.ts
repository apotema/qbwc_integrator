import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {Request}    from '../models/request'
import {Observable} from 'rxjs/Observable';
import {Jsonp}      from 'angular2/http';
import 'rxjs/add/operator/map'


@Injectable()
export class RequestService {

  constructor(private _http: Http, private _jsonp: Jsonp) {

  }

  public list_requests(company_id) {
    var request_list: Request[] = [];
    return this._http.get(`/companies/${company_id}/requests`)
      // .toPromise()
      // .then(response => response.json())
  }

}

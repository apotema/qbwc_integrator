import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {Request}    from '../models/request'
import {Observable} from 'rxjs/Observable';
import {Jsonp}      from 'angular2/http';


@Injectable()
export class RequestService {

  constructor(private _http: Http, private _jsonp: Jsonp) {

  }

  public list_requests(company_id) {
    var request_list: Request[] = [];
    return this._http.get(`/companies/${company_id}/requests`)
      .toPromise()
      .then(response => response.json())
      // .map(res => console.log(res.json()))
      // .subscribe(res => {
      //   console.log(res);
      // });

    // return this._jsonp
    //   .get(`/companies/${company_id}/requests`)
    //   .toPromise()
    //   .then((response) => response.json()[1]);
    // for (var request in requests){
    //   var r = new Request();
    //   r.type = request.name;
    //   request_list.push(r);
    // }
  }

}

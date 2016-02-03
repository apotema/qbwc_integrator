import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {Request}    from '../models/request'
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RequestService {

  constructor(private _http: Http) {

  }

  public list_requests(company_id): Request[] {
    var request_list: Request[] = [];
    this._http.get(`/companies/${company_id}/requests`)
      .map(res => console.log(res.json()))
      .subscribe(res => {
        console.log(res);
      });
    // for (var request in requests){
    //   var r = new Request();
    //   r.type = request.name;
    //   request_list.push(r);
    // }
    return [];
  }

}

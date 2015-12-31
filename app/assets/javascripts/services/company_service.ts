import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {Company}    from '../models/company'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  public company: Company;

  constructor(private _http: Http) {

  }

  create() {
    var observable = Observable.create(subscriber => { 
      this._http.post("/companies","")
        .map(res => res.json())
        .subscribe(company => {
          this.company = new Company(company.id, company.password);
          subscriber.next(company);
          subscriber.complete();
        });
    });
    return observable;
  }

  get(id) {
    var observable = Observable.create(subscriber => { 
      this._http.get(`/companies/${id}`)
        .map(res => res.json())
        .subscribe(company => {
          this.company = new Company(company.id, company.password);
          subscriber.next(company);
          subscriber.complete();
        });
    });
    return observable;
  }

}

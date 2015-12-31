import {Http, HTTP_PROVIDERS}  from 'angular2/http';
import {Inject} from 'angular2/core';

export class Company {
  
  public id:number;
  public password:string;

  constructor(id: number, password:string) {
    this.id = id;
    this.password = password;
  }
}

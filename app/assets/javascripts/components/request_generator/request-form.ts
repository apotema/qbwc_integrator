import {Component, Input}      from 'angular2/core';
import {Request}               from '../../models/request';

@Component({
  selector: 'request-form',
  styles: [],
  template: require('./request-form.html')
})
export class RequestFormCmp {

  @Input() request: Request;

  public fields;

  types = {
    "Vendors": {
      fields: ["name",
        "company_name",
        "salutation",
        "first_name",
        "middle_name",
        "last_name",
        "vendor_address"]
    },
    "Customers": {
      fields: [
        "name"
      ]
    }
  };

  public fieldsOfModel(type : string) {
    return (this.types[type].fields);
  }

  constructor() {
  }

}

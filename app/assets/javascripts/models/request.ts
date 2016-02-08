export class Request {
  public type: string;
  public action: string;
  public params = {};
  constructor(type :string = "", action :string = "") {
    this.type = type;
    this.action = action;
  }
}

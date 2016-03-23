import {Request} 	from '../models/request';

export class RequestListSingleton {
	list: Request[] = [];

	public push(request: Request) {
		this.list.push(request);
	}
}
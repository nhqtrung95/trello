import { Injectable } from '@angular/core';
import { Item } from './item';
import { Http, Headers } from '@angular/http';
import { LoadingComponent } from './loading/loading.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/finally';

@Injectable()
export class ItemService {


	private itemUrl = 'http://guarded-spire-32978.herokuapp.com/public/items'

	constructor(private http: Http) { }

	getItems(): Promise<Item[]> {
		LoadingComponent.isLoading = true;
		return this.http.get(this.itemUrl)
		.finally(() => LoadingComponent.isLoading = false)
		.toPromise()
		.then(res => res.json())
		.catch(this.handleError)
	}

	addItems(item: Object): Promise<Item> {
		LoadingComponent.isLoading = true;
		return this.http.post(this.itemUrl, item)
		.finally(() => LoadingComponent.isLoading = false)
		.toPromise()
		.then(res => res.json())
		.catch(this.handleError)
	}

	updateItems(item: Object): Promise<any> {
		LoadingComponent.isLoading = true;
		return this.http.put(this.itemUrl + '/' + item['id'], item)
		.finally(() => LoadingComponent.isLoading = false)
		.toPromise()
		.then(res => res.json())
		.catch(this.handleError);
	}

	deleteItems(item: Object): Promise<any> {
		LoadingComponent.isLoading = true;
		return this.http.delete(this.itemUrl + '/' + item['id'], item)
		.finally(() => LoadingComponent.isLoading = false)
		.toPromise()
		.then(res => res.json())
		.catch(this.handleError);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}

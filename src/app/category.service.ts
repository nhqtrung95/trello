import { Injectable } from '@angular/core';
import { Category } from './category';
import { Item } from './item';
import { Http, Headers } from '@angular/http';
import { LoadingComponent } from './loading/loading.component';
import { CATEGORIES } from './mock-category';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/finally';

@Injectable()
export class CategoryService {

  static dataTransfer;

  private itemUrl = 'http://localhost/trello/public/items';

  constructor(private http: Http) { }

  setDataTransfer(data): void {
    CategoryService.dataTransfer = data;
  }

  getDataTransfer() {
    return CategoryService.dataTransfer;
  }

  getCategories() {
    return CATEGORIES;
  }

  getItemsInCategory(id) {
    LoadingComponent.isLoading = true;
    return this.http.get(this.itemUrl + '?idCategory=' + id)
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

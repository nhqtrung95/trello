import { Injectable, ViewChild } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ItemService {


	private itemUrl = 'http://guarded-spire-32978.herokuapp.com/public/items'

	getItems(): Observable<Item[]> {
		return this.http.get<Item[]>(this.itemUrl)
	    .pipe(
	      catchError(this.handleError('Items', []))
	    );
	}

	addItems(item: Object): Observable<Item> {
		return this.http.post<Item>(this.itemUrl, item).pipe(
			tap(item => console.log(item)),
			catchError(this.handleError<Item>('addItem'))
		)
	}

	updateItems(item: Object): Observable<any> {
		return this.http.put(this.itemUrl + '/' + item['id'], item)
		.pipe(
			tap(_ => console.log(`updated item: ${item['name']}`)),
			catchError(this.handleError<any>('updateHero'))
		)
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    console.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}

  constructor(private http: HttpClient) { }

}

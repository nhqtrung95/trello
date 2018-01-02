import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-category';
import { ITEMS } from './mock-item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ItemComponent } from './item/item.component';

@Injectable()
export class CategoryService {

	getCategories(): Observable<Category[]> {
		return of(CATEGORIES);
	}

	countItemByCategory(id: number) {
		if (ItemComponent.items !== undefined) {
			return ItemComponent.items.filter(item => item.idCategory === id).length;
		}
		return 0;
	}

  constructor() { }

}

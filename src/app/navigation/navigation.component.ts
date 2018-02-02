import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../item.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  itemName: string;

  constructor(private itemService: ItemService, private categoryService: CategoryService) { }

  addTodoItem(): void {
    this.itemService.addItems({ name: this.itemName, idCategory: 1 })
      .then(newItem => {
        const todoItems = this.categoryService.getDataTransfer();
        todoItems.push(newItem);
        this.itemName = '';
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { DropService } from '../drop.service';
import { ItemComponent } from '../item/item.component';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	categories: Category[];

  dropItem(event, idCategory): void {
    event.preventDefault();
    var itemDrop = ItemComponent.items.find(item => item.id == this.dropService.getDataTransfer());
    this.itemService.updateItems({id: itemDrop.id, idCategory: idCategory})
    .then(newItem => {
      itemDrop.idCategory = newItem["idCategory"];
    });
  }

  constructor(public categoryService: CategoryService, 
              public dropService: DropService, 
              private itemService: ItemService,
             ) { }

  ngOnInit() {
  	this.categoryService.getCategories()
  			.subscribe(categories => this.categories = categories);
  }

}
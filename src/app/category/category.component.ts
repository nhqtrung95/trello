import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

  @ViewChild(ItemComponent) childItems: ItemComponent;
  categories: Category[];

  ngAfterViewInit() {
    console.log('initial');
  }

  dropItem(event, idCategory): void {
    event.preventDefault();
    const itemDrop = this.childItems.itemsInCategory.find(item => item.id === this.dropService.getDataTransfer());
    console.log(this.childItems);
    this.itemService.updateItems({id: itemDrop.id, idCategory: idCategory})
      .then(newItem => itemDrop['idcategory'] = newItem['idCategory']);
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

import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';
import { DropService } from '../drop.service';
import { ItemService } from '../item.service';
import { LoadingComponent } from '../loading/loading.component';
import { Category } from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  @Input() category;

  items;

  constructor(private categoryService: CategoryService,
                public dropService: DropService,
                private itemService: ItemService,
  ) { }

  ngOnInit() {
    this.categoryService.getItemsInCategory(this.category.id)
    .then(items => {
      this.items = items;
      if (this.category.id === 1) {
        this.categoryService.setDataTransfer(items);
      }
    });
  }

  dropItem(event, idCategory): void {
    event.preventDefault();
    const item = this.dropService.getDataTransfer()[1];
    const listItemOfCategoryDrag = this.dropService.getDataTransfer()[0];
    this.itemService.updateItems({id: item.id, idCategory: this.category.id})
    .then(newItem => {
      this.items.push(newItem);
      const index = listItemOfCategoryDrag.findIndex(e => e.id === newItem.id);
      listItemOfCategoryDrag.splice(index, 1);
    });
  }

}

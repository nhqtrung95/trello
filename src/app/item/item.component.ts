import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { DropService } from '../drop.service';
import { FocusDirective } from '../focus.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  @Input() id: number;

  itemsInCategory;

  enableEdit(item) {
    item.isEditing = true;
  }

  applyEdit(item, name) {
    this.itemService.updateItems({id: item.id, name: name, idCategory: item.idCategory})
    .then(newItem => {
      item.isEditing = false;
      item.name = newItem['name'];
    });
  }

  constructor(private itemService: ItemService, public dropService: DropService) { }

  ngOnInit() {
    this.itemService.getItemsViaIdCategory(this.id)
    .then(items => this.itemsInCategory = items);
  }
}

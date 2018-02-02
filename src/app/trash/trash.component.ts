import { Component, OnInit } from '@angular/core';
import { DropService } from '../drop.service';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})

export class TrashComponent implements OnInit {

  dropItem(event): void {
    event.preventDefault();
    const idDropItem = this.dropService.getDataTransfer()[1];
    this.itemService.deleteItems({id: idDropItem.id})
    .then(data => {
      const itemsOfCategoryDrag = this.dropService.getDataTransfer()[0];
      const index = itemsOfCategoryDrag.findIndex(e => e.id === +data.id);
      itemsOfCategoryDrag.splice(index, 1);
    });
  }

  constructor(public dropService: DropService, private itemService: ItemService) { }

  ngOnInit() {
  }

}

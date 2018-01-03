import { Component, OnInit } from '@angular/core';
import { DropService } from '../drop.service';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})

export class TrashComponent implements OnInit {

  itemUrl = 'http://guarded-spire-32978.herokuapp.com/public/items/';

	dropItem(event): void {
		event.preventDefault();
    var idDropItem = this.dropService.getDataTransfer();
		var indexDropItem = ItemComponent.items.findIndex(item => item.id == idDropItem );
		this.itemService.deleteItems({id: idDropItem})
    .then(status => ItemComponent.items.splice(indexDropItem, 1));
	}

  constructor(public dropService: DropService, private itemService: ItemService) { }

  ngOnInit() {
  }

}

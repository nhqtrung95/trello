import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-item';
import { ItemService } from '../item.service';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
	@Input() id: number;

	static items: Item[];

  get staticItems(){
    return ItemComponent.items;
  }

  setStaticItems(listItem){
    ItemComponent.items = listItem;
  }

  constructor(private itemService: ItemService, public dropService: DropService) { }

  ngOnInit() {
  	this.itemService.getItems()
  			.then(items => ItemComponent.items = items);
  }

}

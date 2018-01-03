import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-item';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	itemName: string;

  itemUrl = 'http://guarded-spire-32978.herokuapp.com/public/items';

	addTodoItem(): void {
    this.itemService.addItems({ name: this.itemName, idCategory: 1 })
	  .then(newItem => {
      ItemComponent.items.push( { id: newItem["id"], name: newItem["name"], idCategory: newItem["idCategory"] } );
      this.itemName = "";
    });
	}

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}

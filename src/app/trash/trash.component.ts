import { Component, OnInit } from '@angular/core';
import { DropService } from '../drop.service';
import { ITEMS } from '../mock-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemComponent } from '../item/item.component';

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
		this.http.delete(this.itemUrl + idDropItem)
      .subscribe(status => ItemComponent.items.splice(indexDropItem, 1));
	}

  constructor(public dropService: DropService, private http: HttpClient) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  static isLoading: Boolean = false;

  public get getStatusLoading() {
    return LoadingComponent.isLoading;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class DropService {

  static dataTransfer;

  enableDragOver(event): void {
    event.preventDefault();
  }

  setDataTransfer(data): void {
    DropService.dataTransfer = data;
  }

  getDataTransfer() {
    return DropService.dataTransfer;
  }

  constructor() { }

}

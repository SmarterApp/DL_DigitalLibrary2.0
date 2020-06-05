import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  @Output()
  okClicked: EventEmitter<any>;

  @Output()
  cancelClicked: EventEmitter<any>;

  constructor() {
    this.okClicked = new EventEmitter<any>();
    this.cancelClicked = new EventEmitter<any>();
  }

  accept(id: number) {
    this.okClicked.emit( { id });
  }

  close() {
    this.cancelClicked.emit();
  }
}

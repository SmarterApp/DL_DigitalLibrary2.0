import { Injectable, Output, EventEmitter, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginWarningStateServiceService {

  @Output()
  onCloseClick: EventEmitter<any>;

  constructor() {
    this.onCloseClick = new EventEmitter<any>();
   }

  close() {
    this.onCloseClick.emit();
  }
}
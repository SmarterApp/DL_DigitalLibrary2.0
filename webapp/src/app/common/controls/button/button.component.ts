import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @ViewChild('button', { static: true })
  button: ElementRef;

  /**
   * Boolean value indicating if the button should be disabled
   */
  @Input()
  disabled: boolean;

  /**
   * Emits when the button loses focus via [(blur)](https://angular.io/guide/user-input#on-blur)
   */
  @Output()
  blur = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // required for ripple effect.
    const buttonRipple = new MDCRipple(this.button.nativeElement);
  }

  onBlur(event: any) {
    this.blur.emit(event);
  }
}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @ViewChild('button', { static: true })
  button: ElementRef;

  @Input()
  label: string;

  constructor() { }

  ngOnInit() {
    // required for ripple effect.
    const buttonRipple = new MDCRipple(this.button.nativeElement);
  }

}

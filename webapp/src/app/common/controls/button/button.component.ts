import { Component, OnInit, Input } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input()
  label: string;

  constructor() { }

  ngOnInit() {
    // required for ripple effect.
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }

}

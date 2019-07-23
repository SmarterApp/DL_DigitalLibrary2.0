import { Component, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-button-icon',
  templateUrl: './button-icon.component.html'
})
export class ButtonIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
    iconButtonRipple.unbounded = true;
  }

}

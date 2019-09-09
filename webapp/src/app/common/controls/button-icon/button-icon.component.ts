import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-button-icon',
  templateUrl: './button-icon.component.html'
})
export class ButtonIconComponent implements OnInit {

  @ViewChild('button', { static: true })
  button: ElementRef;

  @Input()
  disabled: boolean;

  @Input()
  buttonTitle: string;

  constructor() { }

  ngOnInit() {
    const iconButtonRipple = new MDCRipple(this.button.nativeElement);
    iconButtonRipple.unbounded = true;
  }

}

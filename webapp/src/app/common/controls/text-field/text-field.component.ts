import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MDCTextField } from '@material/textfield';

@Component({
  selector: 'sbdl-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, AfterViewInit {
  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  fontAwesomeIcon: string;

  @Input()
  model: string;

  @Input()
  disabled: boolean;

  @Output()
  submit = new EventEmitter<string>();

  @ViewChild('textField', { static: false })
  textFieldRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    const textField = new MDCTextField(this.textFieldRef.nativeElement);
  }

  onIconClick(event) {
    this.submit.emit(this.model);
  }
}

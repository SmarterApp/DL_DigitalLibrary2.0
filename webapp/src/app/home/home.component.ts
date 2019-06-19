import { Component, OnInit } from '@angular/core';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';


@Component({
  selector: 'sbdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = checkbox;
  }
}

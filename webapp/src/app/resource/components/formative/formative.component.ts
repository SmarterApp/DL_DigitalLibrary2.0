import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormativeModel } from 'src/app/data/resource/model/formative.model';

@Component({
  selector: 'sbdl-formative',
  templateUrl: './formative.component.html',
  styleUrls: ['./formative.component.scss']
})
export class FormativeComponent implements OnInit {
  @Input()
  model: FormativeModel;

  @Output()
  sectionElementLoaded= new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if(this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
  }
}

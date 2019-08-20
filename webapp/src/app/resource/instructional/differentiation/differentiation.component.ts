import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DifferentiationModel } from 'src/app/data/resource/model/differentiation.model';

@Component({
  selector: 'sbdl-differentiation',
  templateUrl: './differentiation.component.html',
  styleUrls: ['./differentiation.component.scss']
})
export class DifferentiationComponent implements OnInit, AfterViewInit {
  @Input()
  model: DifferentiationModel;

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

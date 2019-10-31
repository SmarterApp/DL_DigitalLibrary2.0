import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { InstructionalResource } from 'src/app/data/resource/model/instructional.model';

@Component({
  selector: 'sbdl-differentiation',
  templateUrl: './differentiation.component.html',
  styleUrls: ['./differentiation.component.scss']
})
export class DifferentiationComponent implements OnInit, AfterViewInit {
  @Input()
  resource: InstructionalResource;

  @Output()
  sectionElementLoaded = new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { OverviewModel } from 'src/app/data/resource/model/overview.model';

@Component({
  selector: 'sbdl-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {

  @Input()
  model: OverviewModel;

  @Output()
  sectionElementLoaded= new EventEmitter<any>();

  @ViewChild('getStarted', { static: false })
  getStartedElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if(this.getStartedElement) {
      this.sectionElementLoaded.emit(this.getStartedElement.nativeElement);
    }
  }
}

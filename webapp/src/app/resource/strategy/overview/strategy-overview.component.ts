import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { OverviewModel } from 'src/app/data/resource/model/overview.model';

@Component({
  selector: 'sbdl-strategy-overview',
  templateUrl: './strategy-overview.component.html',
  styleUrls: ['./strategy-overview.component.scss']
})
export class StrategyOverviewComponent implements OnInit {

  @Input()
  model: OverviewModel;

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

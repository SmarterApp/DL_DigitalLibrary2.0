import { AfterViewInit, Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ResourceStrategyReference } from 'src/app/data/resource/model/strategy-reference.model';

@Component({
  selector: 'sbdl-formative-list',
  templateUrl: './formative-list.component.html',
  styleUrls: ['./formative-list.component.scss']
})
export class FormativeListComponent implements AfterViewInit {

  @Input()
  strategies: ResourceStrategyReference;

  @Output()
  sectionElementLoaded = new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
  }
}

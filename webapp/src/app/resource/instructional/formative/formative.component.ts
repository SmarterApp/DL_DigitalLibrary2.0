import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { InstructionalResource } from 'src/app/data/resource/model/instructional.model';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-formative',
  templateUrl: './formative.component.html',
  styleUrls: ['./formative.component.scss']
})
export class FormativeComponent implements AfterViewInit, OnInit {
  @Input()
  resource: InstructionalResource;

  @Output()
  sectionElementLoaded = new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    if (this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
  }
}

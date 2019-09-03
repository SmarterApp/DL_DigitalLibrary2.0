import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sbdl-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, AfterViewInit {

  @Input()
  contentHtml: string;

  @Input()
  options: SectionOptions;

  @Output()
  sectionElementLoaded= new EventEmitter<any>();

  @ViewChild('header', { static: false })
  headerElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.headerElement) {
      this.sectionElementLoaded.emit(this.headerElement.nativeElement);
    }
  }
}

export interface SectionOptions {
  title: string;
  fontAwesomeIcon?: string;
  sbdlIcon?: string;
}
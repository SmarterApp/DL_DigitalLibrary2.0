import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { TopicSectionModel } from 'src/app/data/resource/model/topic-section.model';

@Component({
  selector: 'sbdl-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @Input()
  model: TopicSectionModel;

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

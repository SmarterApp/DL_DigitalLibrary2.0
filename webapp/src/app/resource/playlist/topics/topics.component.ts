import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, ViewChildren } from '@angular/core';
import { TopicSectionModel } from 'src/app/data/resource/model/topic-section.model';
import { ScrollableSection } from '../../components/outline/scrollable-elements.model';

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

  @ViewChildren('topicRefs')
  topicRefs: ElementRef[];

  @ViewChild('suggestionsRef', { static: false })
  suggestionRef: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let i = 0;
    if(this.topicRefs) {
      const topicRefs = this.topicRefs.map(x => <ScrollableSection>{ title: this.model.topics[i++].title, elementRef: x.nativeElement });
      topicRefs.push(<ScrollableSection>{ title: 'Suggestions for Intervention', elementRef: this.suggestionRef.nativeElement });
      this.sectionElementLoaded.emit(topicRefs);
    }
  }
}

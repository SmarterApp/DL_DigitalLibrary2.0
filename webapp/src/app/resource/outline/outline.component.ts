import { Component, OnInit, Input } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from './scrollable-elements.model';

@Component({
  selector: 'sbdl-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit {
  @Input()
  model: ResourceModel;

  @Input()
  scrollableElements: ScrollableElements = <ScrollableElements>{};

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(element: Element): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}


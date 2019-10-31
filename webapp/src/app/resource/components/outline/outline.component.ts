import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from './scrollable-elements.model';
import { getCssVar } from 'src/app/common/utils';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { commentsSectionOptions } from '../section/section.definitions';

@Component({
  selector: 'sbdl-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit {
  @Input()
  resource: Resource;

  @Input()
  readingMode: boolean;

  @Input()
  scrollableElements: ScrollableElements = {} as ScrollableElements;

  mobile = false;
  commentsSection = commentsSectionOptions;
  private breakpointSmall = 500;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }

  get isProfessional() {
    return this.resource.type === ResourceType.Professional;
  }

  ngOnInit() {
    this.breakpointSmall = getCssVar('--breakpoint-sm');
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }

  scrollToElement(element: Element): void {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    element.classList.add('highlighted');
  }

  removeClass(element: Element): void {
    element.classList.remove('highlighted');
  }
}


import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ResourceModel } from 'src/app/data/resource/model/resource.model';
import { ScrollableElements } from './scrollable-elements.model';
import { getCssVar } from 'src/app/common/utils';

@Component({
  selector: 'sbdl-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit {
  @Input()
  model: ResourceModel;

  @Input()
  readingMode: boolean;

  @Input()
  scrollableElements: ScrollableElements = <ScrollableElements>{};

  @HostListener('window:resize', ['$event'])
  onResize(event?) {    
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }
   
  mobile = false;
  private breakpointSmall = 500;

  constructor() { }

  ngOnInit() {
    this.breakpointSmall = getCssVar('--breakpoint-sm');
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }

  scrollToElement(element: Element): void {
    console.log(element);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    element.classList.add('highlighted');
  }

  removeClass(element: Element): void {
    element.classList.remove('highlighted');
  }
}

import { Component } from '@angular/core';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { ScrollableElements, ScrollableSection } from '../../components/outline/scrollable-elements.model';
import { SectionOptions } from '../../components/section/section.component';
import { commentsSectionOptions, instructionalUseOptions, stepByStepOptions, strategyInActionOptions } from '../../components/section/section.definitions';
import { ResourceContentComponent } from '../../resource-content.component';

@Component({
  selector: 'sbdl-strategy-content',
  templateUrl: './strategy-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class StrategyContentComponent extends ResourceContentComponent {

  customSection: ContentSection;
  sections: ContentSection[];
  
  constructor() { 
    super();
  }

  ngOnInit() {
    this.customSection = this.model.resourceType === ResourceType.AccessibilityStrategy 
      ? { ...instructionalUseOptions, contentHtml: this.model.instructionalUse }
      : { ...stepByStepOptions, contentHtml: this.model.stepByStep };

    this.sections = [
        { ...commentsSectionOptions, contentHtml: this.model.comments },
        { ...strategyInActionOptions, contentHtml: this.model.strategyInAction }
      ];
  }

  setCustomSection($event: any, section: ContentSection) {
    section.elementRef= $event;
    this.scrollableElements = {...this.scrollableElements, customStrategySection: this.mapToScrollableSection(section) };
    this.emitScrollableElementsEvent();
  }

  setSection($event: any, section: ContentSection) {
    section.elementRef = $event;

    this.scrollableElements = this.scrollableElements || <ScrollableElements>{};
    const sections = this.scrollableElements.sections || [];
    this.scrollableElements = { 
      ...this.scrollableElements, 
        sections: [ ...sections, this.mapToScrollableSection(section) ]
    };
    this.emitScrollableElementsEvent();
  }

  private mapToScrollableSection(section: ContentSection):ScrollableSection {
    return {
      title: section.title,
      sbdlIcon: section.sbdlIcon,
      fontAwesomeIcon: section.fontAwesomeIcon,
      elementRef: section.elementRef
    };
  }
}

interface ContentSection extends SectionOptions {
  contentHtml: string;
  elementRef?: any;
}

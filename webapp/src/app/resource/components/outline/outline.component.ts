import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Map } from 'immutable';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { getCssVar } from 'src/app/common/utils';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { commentsSectionOptions } from '../section/section.definitions';
import { DocumentOutline, DocumentSection, DocumentSectionType } from './document-outline.model';

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
  outline: DocumentOutline = Map<DocumentSectionType, DocumentSection>();

  mobile = false;
  private breakpointSmall = 500;

  private SECTION_ORDER = [
    DocumentSectionType.Overview,
    DocumentSectionType.StepByStep,
    DocumentSectionType.Attachments,
    DocumentSectionType.Differentiation,
    DocumentSectionType.ThingsToConsider,
    DocumentSectionType.Formative,
    DocumentSectionType.AssessmentInfo
  ];

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }

  get sectionsInOrder(): DocumentSection[] {
    return this.SECTION_ORDER
      .filter(sectionType => this.outline.has(sectionType))
      .map(sectionType => this.outline.get(sectionType));
  }

  ngOnInit() {
    this.breakpointSmall = getCssVar('--breakpoint-sm');
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }

  scrollTo(section: DocumentSection): void {
    section.elementRef.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    section.elementRef.classList.add('highlighted');
  }

  removeHighlight(section: DocumentSection): void {
    section.elementRef.classList.remove('highlighted');
  }
}


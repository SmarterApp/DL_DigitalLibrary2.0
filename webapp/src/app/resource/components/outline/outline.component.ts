import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Map } from 'immutable';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { getCssVar } from 'src/app/common/utils';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { commentsSectionOptions } from '../simple-section/section.definitions';
import { DocumentOutline, DocumentSection, DocumentSectionType as DST} from './document-outline.model';

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
  outline: DocumentOutline;

  mobile = false;
  private breakpointSmall = 500;

  // The orders defined here control how the items in the outline are ordered.
  // To alter the order of the sections actually laid out in the main content
  // see the content components (InstructionContentComponent, etc.).
  private SECTION_ORDER = Map<ResourceType, DST[]>()
    .set(
      ResourceType.Instructional,
      [ DST.Overview, DST.StepByStep, DST.Attachments, DST.Differentiation, DST.ThingsToConsider, DST.Formative ])
    .set(
      ResourceType.ProfessionalLearning,
      [ DST.Overview, DST.StepByStep, DST.Attachments, DST.ThingsToConsider, DST.Formative ])
    .set(
      ResourceType.FormativeStrategy,
      [ DST.Overview, DST.StepByStep, DST.Attachments, DST.ThingsToConsider, DST.StrategyInAction ])
    .set(
      ResourceType.AccessibilityStrategy,
      [ DST.Overview, DST.StepByStep, DST.Attachments, DST.ThingsToConsider, DST.StrategyInAction ])
    .set(
      ResourceType.ConnectionsPlaylist,
      [ DST.PlaylistTopics, DST.PlaylistIntervention, DST.ThingsToConsider, DST.Overview, DST.PlaylistInterim ]);

  constructor(private location: Location) { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.mobile = window.innerWidth <= this.breakpointSmall;
  }

  get sectionsInOrder(): DocumentSection[] {
    return this.SECTION_ORDER.get(this.resource.type)
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
    this.location.go(this.location.path() + '#' + section.component.sectionId);
  }

  removeHighlight(section: DocumentSection): void {
    section.elementRef.classList.remove('highlighted');
  }
}


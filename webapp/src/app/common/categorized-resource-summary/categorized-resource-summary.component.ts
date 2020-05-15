import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Map} from 'immutable';
import groupBy from 'lodash.groupby';
import {ResourceSummary} from 'src/app/data/resource/model/summary.model';
import {ResourceType} from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-categorized-resource-summary',
  templateUrl: './categorized-resource-summary.component.html',
  styleUrls: ['./categorized-resource-summary.component.scss']
})
export class CategorizedResourceSummaryComponent implements OnInit {

  @Input()
  summaries: ResourceSummary[];

  @Output()
  resourceTypeSelected = new EventEmitter<ResourceType>();

  resourcesByType = Map<ResourceType, ResourceSummary[]>();

  resourceTypesInOrder = [
    ResourceType.ConnectionsPlaylist,
    ResourceType.Instructional,
    ResourceType.FormativeStrategy,
    ResourceType.AccessibilityStrategy,
    ResourceType.ProfessionalLearning
  ];

  ngOnInit() {
    this.resourcesByType = Map(groupBy(this.summaries, 'type'));
  }
}

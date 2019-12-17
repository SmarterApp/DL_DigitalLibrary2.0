import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ResourceType } from '../../../data/resource/model/resource-type.enum';
import { ResourceSummary } from '../../../data/resource/model/summary.model';
import { JoinPipe } from '../../../pipes/join.pipe';

@Component({
  selector: 'sbdl-resource-summary-card',
  templateUrl: './resource-summary-card.component.html',
  styleUrls: ['./resource-summary-card.component.scss']
})
export class ResourceSummaryCardComponent implements OnInit {

  @Input()
  resourceSummary: ResourceSummary;

  details: string[];
  joinPipe: JoinPipe = new JoinPipe();
  resourceTypes = ResourceType;

  constructor() { }

  ngOnInit() {
    this.setDetails();
  }

  setDetails(): string[] {
    if (!this.resourceSummary) { return; }

    const result: string[] = [];

    if (this.resourceSummary.properties.grades.length === 1)  {
      result.push('Grade ' + this.resourceSummary.properties.grades[0].shortName);
    } else if (this.resourceSummary.properties.grades.length > 1) {
      result.push(
        'Grades ' +
        this.joinPipe.transform(
          this.resourceSummary.properties.grades.map(g => g.shortName),
          { conjunction: 'and' }));
    }

    if (this.resourceSummary.properties.subject && this.resourceSummary.properties.subject.code) {
      result.push(this.resourceSummary.properties.subject.shortName);
    }

    if (this.resourceSummary.properties.claims.length === 1) {
      result.push('Claim ' + this.resourceSummary.properties.claims[0].number);
    } else if (this.resourceSummary.properties.claims.length > 1) {
      result.push('Claims ' +
        this.joinPipe.transform(
          this.resourceSummary.properties.claims.map(c => c.number),
          { conjunction: 'and' }));

    }

    if (this.resourceSummary.properties.targets.length === 1) {
      result.push('Target ' + this.resourceSummary.properties.targets[0].number);
    } else if (this.resourceSummary.properties.targets.length > 1) {
      result.push('Targets ' +
        this.joinPipe.transform(
          this.resourceSummary.properties.targets.map(t => t.number),
          { conjunction: 'and' }));
    }

    if (this.resourceSummary.properties.standards.length === 1) {
      result.push('Content Standard ' + this.resourceSummary.properties.standards[0].title);
    } else if (this.resourceSummary.properties.standards.length > 1) {
      result.push('Content Standards ' +
        this.joinPipe.transform(
          this.resourceSummary.properties.standards.map(t => t.title),
          { conjunction: 'and' }));
    }

    this.details = result;
  }


}


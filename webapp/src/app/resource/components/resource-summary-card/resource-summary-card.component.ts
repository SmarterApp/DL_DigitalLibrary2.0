import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ResourceType} from '../../../data/resource/model/resource-type.enum';
import {ResourceSummary} from '../../../data/resource/model/summary.model';
import {JoinPipe} from '../../../pipes/join.pipe';

interface Detail {
  value: string;
  type: 'grades' | 'subject' | 'claims' | 'targets' | 'standards';
}

@Component({
  selector: 'sbdl-resource-summary-card',
  templateUrl: './resource-summary-card.component.html',
  styleUrls: ['./resource-summary-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceSummaryCardComponent implements OnInit {
  readonly ResourceType = ResourceType;

  @Input()
  resourceSummary: ResourceSummary;

  details: Detail[];
  joinPipe: JoinPipe = new JoinPipe();

  ngOnInit() {
    this.setDetails();
  }

  setDetails(): Detail[] {
    if (!this.resourceSummary) { return; }

    const result: Detail[] = [];

    if (this.resourceSummary.properties.grades.length === 1)  {
      result.push({
        value: 'Grade ' + this.resourceSummary.properties.grades[0].shortName,
        type: 'grades'
      });
    } else if (this.resourceSummary.properties.grades.length > 1) {
      result.push({
        value: 'Grades ' +
          this.joinPipe.transform(
            this.resourceSummary.properties.grades.map(g => g.shortName),
            { conjunction: 'and' }),
        type: 'grades'
      });
    }

    if (this.resourceSummary.properties.subject && this.resourceSummary.properties.subject.code) {
      result.push({
        value: this.resourceSummary.properties.subject.shortName,
        type: 'subject'
      });
    }

    if (this.resourceSummary.properties.claims.length === 1) {
      result.push({
        value: 'Claim ' + this.resourceSummary.properties.claims[0].number,
        type: 'claims'
      });
    } else if (this.resourceSummary.properties.claims.length > 1) {
      result.push({
        value: 'Claims ' +
          this.joinPipe.transform(
            this.resourceSummary.properties.claims.map(c => c.number),
            { conjunction: 'and' }),
        type: 'claims'
      });
    }

    if (this.resourceSummary.properties.targets.length === 1) {
      result.push({
        value: 'Target ' + this.resourceSummary.properties.targets[0].number,
        type: 'targets'
      });
    } else if (this.resourceSummary.properties.targets.length > 1) {
      result.push({
        value: 'Targets ' +
          this.joinPipe.transform(
            this.resourceSummary.properties.targets.map(t => t.number),
            { conjunction: 'and' }),
        type: 'targets'
      });
    }

    if (this.resourceSummary.properties.standards.length === 1) {
      result.push({
        value: 'Content Standard ' + this.resourceSummary.properties.standards[0].title,
        type: 'standards'
      });
    } else if (this.resourceSummary.properties.standards.length > 1) {
      result.push({
        value: 'Content Standards ' +
          this.joinPipe.transform(
            this.resourceSummary.properties.standards.map(t => t.title),
            { conjunction: 'and' }),
        type: 'standards'
      });
    }

    this.details = result;
  }


}


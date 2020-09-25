import {Component, Input, OnInit} from '@angular/core';
import {ResourceProperties} from 'src/app/data/resource/model/properties.model';
import {Claim} from 'src/app/data/resource/model/claim.model';
import {Subject} from 'src/app/data/resource/model/subject.model';
import {Standard} from 'src/app/data/resource/model/standard.model';
import {Target} from 'src/app/data/resource/model/target.model';
import {byStringWithNumber, Comparator, on} from '../../../common/sorting/sorting';

const byTargetNumber: Comparator<Target> = on(x => x.number,byStringWithNumber());
const byStandardTitle: Comparator<Standard> = on(x => x.title, byStringWithNumber());

@Component({
  selector: 'sbdl-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.scss']
})
export class EducationalDetailsComponent implements OnInit {

  @Input()
  properties: ResourceProperties;

  readonly baseClaimsImagePath = '/assets/images/claims/';

  gradeShortNames: string[];
  orderedStandards: Standard[];
  orderedTargets: Target[];

  public ngOnInit() {
    this.gradeShortNames = this.properties.grades.map(g => g.shortName);
    this.orderedStandards = this.properties.standards.sort(byStandardTitle)
    this.orderedTargets = this.properties.targets.sort(byTargetNumber);
  }

  getClaimImagePath = (subject: Subject, claim: Claim) => {

    if (subject.code !== 'ela' && subject.code !== 'math') {
      // invalid subject
      return undefined;
    }

    if (isNaN(claim.number) || claim.number < 1 || claim.number > 4) {
      // invalid claim
      return undefined;
    }

    return `${this.baseClaimsImagePath}${subject.code}-${claim.number}.png`;
  }
}

import { Component, Input } from '@angular/core';
import { ResourceProperties } from 'src/app/data/resource/model/properties.model';
import { Claim } from 'src/app/data/resource/model/claim.model';
import { Subject } from 'src/app/data/resource/model/subject.model';

@Component({
  selector: 'sbdl-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.scss']
})
export class EducationalDetailsComponent {

  @Input()
  properties: ResourceProperties;

  readonly baseClaimsImagePath = '/assets/images/claims/';

  get gradeShortNames(): string[] {
    return this.properties.grades.map(g => g.shortName);
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

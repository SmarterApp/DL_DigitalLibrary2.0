import { Component, Input, OnInit } from '@angular/core';
import { ResourceProperties } from 'src/app/data/resource/model/properties.model';
import { Claim } from 'src/app/data/resource/model/claim.model';
import { Subject } from 'src/app/data/resource/model/subject.model';
import { Standard } from 'src/app/data/resource/model/standard.model';
import { Target } from 'src/app/data/resource/model/target.model';

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
    this.orderedStandards = this.properties.standards.sort((a, b) => a.title.localeCompare(b.title));
    this.orderedTargets = this.properties.targets.sort((a, b) => a.number.localeCompare(b.number));
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

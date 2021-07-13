import { Component, Input, OnInit } from "@angular/core";
import { ResourceProperties } from "src/app/data/resource/model/properties.model";
import { Claim } from "src/app/data/resource/model/claim.model";
import { Subject } from "src/app/data/resource/model/subject.model";
import { Standard } from "src/app/data/resource/model/standard.model";
import { Target } from "src/app/data/resource/model/target.model";
import { ResourceType } from "src/app/data/resource/model/resource-type.enum";
import {
  byStringWithNumber,
  Comparator,
  on,
} from "../../../common/sorting/sorting";
import { UaagTier } from "src/app/data/resource/model/uaagTier.model";

const byTargetNumber: Comparator<Target> = on(
  (x) => x.number,
  byStringWithNumber()
);
const byStandardTitle: Comparator<Standard> = on(
  (x) => x.title,
  byStringWithNumber()
);

@Component({
  selector: "sbdl-educational-details",
  templateUrl: "./educational-details.component.html",
  styleUrls: ["./educational-details.component.scss"],
})
export class EducationalDetailsComponent implements OnInit {
  @Input()
  properties: ResourceProperties;
  @Input()
  resourceType: string;
  @Input()
  uaagTiers: UaagTier[];

  readonly baseClaimsImagePath = "/assets/images/claims/";
  readonly baseAccesibilityImagePath =
    "/assets/images/accessibility-strategy.png";

  gradeShortNames: string[];
  orderedStandards: Standard[];
  orderedTargets: Target[];

  public ngOnInit() {
    console.table(this.resourceType);
    this.gradeShortNames = this.properties.grades.map((g) => g.shortName);
    this.orderedStandards = this.properties.standards.sort(byStandardTitle);
    this.orderedTargets = this.properties.targets.sort(byTargetNumber);
  }

  isAccesibilityResource = () => {
    return this.resourceType === ResourceType.AccessibilityStrategy;
  };

  isInstructionalResource = () => {
    return this.resourceType === ResourceType.Instructional;
  };

  getAccesibilityImagePath = () => {
    return `${this.baseAccesibilityImagePath}`;
  };

  getClaimImagePath = (subject: Subject, claim: Claim) => {
    if (subject.code !== "ela" && subject.code !== "math") {
      // invalid subject
      return undefined;
    }

    if (isNaN(claim.number) || claim.number < 1 || claim.number > 4) {
      // invalid claim
      return undefined;
    }

    return `${this.baseClaimsImagePath}${subject.code}-${claim.number}.png`;
  };
}

import { Injectable } from '@angular/core';
import { Alignment, ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';

@Injectable({
  providedIn: 'root'
})
export class SampleItemService {

  readonly baseUrl = 'http://sampleitems.smarterbalanced.org/BrowseItems';

  constructor() { }

  generateUrl(details: ResourceDetailsModel): string {
    const subject = this.mapSubjects(details.subjects);
    const claim = this.mapClaims(subject, details.claims);
    const grade = this.mapGrades(details.grades);
    const target = this.mapTargets(details.targets);

    return `${this.baseUrl}?Claim=${claim}&Subject=${subject}&Grade=${grade}&Target=${target}`;
  }

  private mapClaims(subject: string, claims: Alignment[]): string {
    return claims.map(x => subject + x.shortName).join(',');
  }

  private mapSubjects(subject: string[]):string {
    return subject[0].toUpperCase();
  }

  private mapGrades(grades: number[]):string {
    return grades.join(',');
  }

  private mapTargets(targets: Alignment[]): string {
    return targets.map(x => x.shortName).join(',');
  }
}

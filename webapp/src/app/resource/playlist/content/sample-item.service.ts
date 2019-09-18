import { Injectable } from '@angular/core';
import { Alignment, ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';

@Injectable({
  providedIn: 'root'
})
export class SampleItemService {

  readonly baseUrl = 'http://sampleitems.smarterbalanced.org/BrowseItems';
  readonly allGrades = 1023;
  readonly gradeToSampleItemGradeIdMap: Map<number,number> = new Map([
     [ 3, 1 ], // Grade 3
     [ 4, 2 ], // Grade 4
     [ 5, 4 ], // etc.
     [ 6, 8 ],
     [ 7, 16 ],
     [ 8, 32 ],
     [ 9, 960 ], // High School
     [ 10, 960 ], // High School
     [ 11, 960 ],
     [ 12, 960 ],
  ]);

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
    return grades.map(x => this.gradeToSampleItemGradeIdMap.get(+x) || this.allGrades).join(',');
  }

  private mapTargets(targets: Alignment[]): string {
    return targets.map(x => x.shortName).join(',');
  }
}

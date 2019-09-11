import { Injectable } from '@angular/core';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DetailedMetadataComponentService {
  readonly baseClaimsImagePath = '/assets/images/claims/'

  constructor() { }

  getClaimImagePath(subject: string, claim: string) {
    const lowerCaseSubject = subject.toLowerCase();
    const numericClaim = +claim;
    
    if(lowerCaseSubject !== 'ela' && lowerCaseSubject != 'math') {
      // invalid subject
      return undefined
    }

    if(isNaN(numericClaim) || numericClaim < 1 || numericClaim > 4) {
      // invalid claim
      return undefined;
    }

    return `${this.baseClaimsImagePath}${lowerCaseSubject}-${claim}.png`;
  }
}

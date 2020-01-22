import { Claim } from './claim.model';
import { Grade } from './grade.model';
import { Standard } from './standard.model';
import { Subject } from './subject.model';
import { Target } from './target.model';

export interface ResourceProperties {
  authorOrg: string;
  authors: string[];
  claims: Claim[];
  grades: Grade[];
  image: string;
  lastUpdatedDate: Date;
  standards: Standard[];
  subject: Subject;
  targets: Target[];
  title: string;
}

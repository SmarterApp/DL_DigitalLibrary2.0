import { ResourceBookmark } from '../data/bookmarks/model/bookmark.model';
import { ResourceType } from '../data/resource/model/resource-type.enum';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceService } from '../data/resource/resource.service';

@Injectable({
    providedIn: 'root'
})
export class BookmarksResolve implements Resolve<ResourceBookmark[]> {
    constructor(private service: ResourceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ResourceBookmark[] | Observable<ResourceBookmark[]> | Promise<ResourceBookmark[]> {
      const bookmarks: ResourceBookmark[] = [
        {
          id: 110,
          type: ResourceType.Instructional,
          hasNotes: true,
          properties: {
            authorOrg: '',
            authors: [ 'Nell Jean' ],
            claims: [
              {
                code: 'math-c1',
                number: 1,
                title: 'Concepts and Procedures'
              }
            ],
            grades: [
              {
                code: 'g8',
                shortName: '8',
                longName: 'Grade 8'
              }
            ],
            image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/all-systems-go.png',
            isBookmarked: true,
            lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
            standards: [
              {
                code: 'ee8b',
                title: 'EE-8b',
                description: ' Solve systems of two linear equations in two variables algebraically, and estimate solutions by graphing the equations. Solve simple cases by inspection. For example, 3x + 2y = 5 and 3x + 2y = 6 have no solution because 3x + 2y cannot simultaneously be 5 and 6.'
              }
            ],
            subject: { code: 'math', shortName: 'Math', fullName: 'Mathematics' },
            targets: [
              {
                code: 'td',
                number: 'D',
                description: 'Analyze and solve linear equations and pairs of simultaneous linear equations.',
                group: ''
              }
            ],
            title: 'All Systems Go?'
          }
        },
        {
          id: 112,
          type: ResourceType.Instructional,
          hasNotes: false,
          properties: {
            authorOrg: '',
            authors: [ 'Michael Regan' ],
            claims: [ { code: 'math-c1', number: 1, title: 'Concepts and Procedures' } ],
            grades: [ { code: 'g7', shortName: '7', longName: 'Grade 7' } ],
            image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/Any+Way+You+Slice+It.png',
            isBookmarked: true,
            lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
            standards: [
              {
                code: 'g3',
                title: 'G-3',
                description: ' Draw, construct, and describe geometrical figures and describe the relationships between them.  Describe the two-dimensional figures that result from slicing three-dimensional figures, as in plane sections of right rectangular prisms and right rectangular pyramids. '
              }
            ],
            subject: { code: 'math', shortName: 'Math', fullName: 'Mathematics' },
            targets: [
              {
                code: 'te',
                number: 'E',
                description: 'Draw, construct, and describe geometrical figures and describe the relationships behind them.',
                group: ''
              }
            ],
            title: 'Any Way You Slice It!'
          }
        },
        {
          id: 114,
          type: ResourceType.Instructional,
          hasNotes: false,
          properties: {
            authorOrg: 'Smarter Balanced',
            authors: [ 'Chelsey Shade' ],
            claims: [ { code: 'math-c1', number: 1, title: 'Concepts and Procedures' } ],
            grades: [ { code: 'ghs', shortName: 'HS', longName: 'High School' } ],
            image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/Intro+to+Quadratic+Formula.png',
            isBookmarked: true,
            lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
            standards: [
              {
                code: 'arei.4b',
                title: 'A-REI.4b',
                description: ' Solve quadratic equations by inspection (e.g., for x^2 = 49), taking square roots, completing the square, the quadratic formula and factoring, as appropriate to the initial form of the equation. Recognize when the quadratic formula gives complex solutions and write them as a ± bi for real numbers a and b.'
              }
            ],
            subject: { code: 'math', shortName: 'Math', fullName: 'Mathematics' },
            targets: [
              {
                code: 'ti',
                number: 'I',
                description: 'Solve equations and inequalities in one variable.',
                group: ''
              },
              {
                code: 'ti',
                number: 'J',
                description: 'Solve equations and inequalities in one variable.',
                group: ''
              },
              {
                code: 'ti',
                number: 'K',
                description: 'Solve equations and inequalities in one variable.',
                group: ''
              }
            ],
            title: 'Intro to Quadratic Formula'
          }
        },
        {
          id: 115,
          type: ResourceType.ProfessionalLearning,
          hasNotes: false,
          summary: 'This professional learning activity was created for the State Network of Educators 2018 Winter Workshop to calibrate a shared understanding of the formative assessment process. By using five different chat stations with multiple entry points into the formative assessment process, educators energetically reviewed data, watched and discussed videos, shared technology strategies, prepared an elevator speech, and reviewed expert text. The engagement and focus in this timed activity produced multiple shifts in thinking and provided educators with a renewed energy to embed student success criteria and opportunities for authentic feedback into instructional lesson planning.',
          properties: {
            authorOrg: 'Smarter Balanced',
            authors: [ 'Amy Thierry', 'Heidi Kroog' ],
            claims: [],
            grades: [],
            image: 'https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/files/deepening-understanding-of-fap/professional-learning-deepening-understanding-of-the-fap.png',
            isBookmarked: true,
            lastUpdatedDate: new Date('2020-01-01T12:00:01+00:00'),
            standards: [],
            subject: { code: null, shortName: null, fullName: null },
            targets: [],
            title: 'Deepening Understanding and Use of the Formative Assessment Process'
          }
        }
      ];

      return bookmarks;
    }
}

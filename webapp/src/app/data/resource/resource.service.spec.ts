import { TestBed } from '@angular/core/testing';
import { ResourceService } from './resource.service';
import { mockDataServiceProviders } from 'src/app/app.module.spec';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ...mockDataServiceProviders ]
  }));

  it('should be created', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });

  it('should map reasource header', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.header;
      expect(actual.resourceId).toBe(1);
      expect(actual.title).toBe('Resource Title');
      expect(actual.subjects).toEqual(['ELA', 'Math']);
      expect(actual.grades).toEqual(['Grade 6', 'Grade 8', 'Grade 9']);
      expect(actual.image).toBeDefined();
      expect(actual.author).toBe('Mary Smith');
      expect(actual.lastModified).toEqual(new Date('2018-08-16T06:50:38+00:00'));
      expect(actual.learningGoal).toBe('The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.');
    })
  })
});

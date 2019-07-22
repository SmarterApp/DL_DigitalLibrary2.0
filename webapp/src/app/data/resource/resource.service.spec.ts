import { TestBed } from '@angular/core/testing';
import { ResourceService } from './resource.service';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { ResourceType } from './model/resource-type.enum';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ...mockDataServiceProviders ]
  }));

  it('should be created', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });

  it('should map reasource details', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.details;
      expect(resource.resourceId).toBe(1);
      expect(actual.title).toBe('Connecting Fraction Division Equations to Visual Models');
      expect(actual.subjects).toEqual(['ELA', 'Math']);
      expect(actual.grades).toEqual(['Grade 6', 'Grade 8', 'Grade 9']);
      expect(actual.image).toBeDefined();
      expect(actual.author).toBe('Mary Smith');
      expect(actual.authorOrganization).toBe('John Roberts');
      expect(actual.lastModified).toEqual(new Date('2018-08-16T06:50:38+00:00'));
      expect(actual.learningGoal).toBe('The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.');
    })
  });

  it('should map overview', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.overview;
      expect(actual.description).toContain('In this task, students will engage');
      expect(actual.resourceMaterials.length).toBe(1);

      const actualMaterial = actual.resourceMaterials[0];
      expect(actualMaterial.title).toBe('Illustrative Mathematics Task: How Many Containers in One Cup / Cups in One Container?');
      expect(actualMaterial.url).toBe('https://tasks.illustrativemathematics.org/content-standards/tasks/408');
      expect(actualMaterial.description).toContain('Students will need to be given a copy of')

      expect(actual.differentiation).toContain('If your students are <b>below</b>:');
      expect(actual.successCriteria).toContain('Students will be able to construct visual');
    })
  });

  it('should map resource type', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.resourceType;
      expect(actual).toBe(ResourceType.Instructional);
    })
  });
});

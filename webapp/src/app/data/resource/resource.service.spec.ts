import { TestBed } from '@angular/core/testing';
import { mockDataServiceProviders } from 'src/app/app.module.spec';
import { FileType } from './model/attachment.model';
import { ResourceType } from './model/resource-type.enum';
import { ResourceService } from './resource.service';
import { EmbedStrategyLinksService } from './embed-strategy-links.service';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ...mockDataServiceProviders, EmbedStrategyLinksService ]
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
      expect(actual.subjects).toEqual(['Math']);
      expect(actual.grades).toEqual([6,8,9]);
      expect(actual.image).toBeDefined();
      expect(actual.author).toBe('Mary Smith');
      expect(actual.authorOrganization).toBe('John Roberts');
      expect(actual.lastModified).toEqual(new Date('2018-08-16T06:50:38+00:00'));
    }, err => {
      fail(err);
    });
  });

  it('should initialize for null arrays (templates assume arrays are initialized)', () =>{
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(0).subscribe(resource => {
      const actual = resource.details;
      expect(actual.subjects).toEqual([]);
      expect(actual.grades).toEqual([]);
      expect(actual.targets).toEqual([]);
      expect(actual.claims).toEqual([]);
      expect(actual.standards).toEqual([]);
      expect(resource.steps).toEqual([]);
      expect(resource.attachments).toEqual([]);
    }, err => {
      fail(err);
    });
  });

  it('should map overview', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.overview;
      expect(actual.description).toContain('In this task, students will engage');
      expect(actual.successCriteria).toContain('Students will be able to construct visual');
      expect(actual.learningGoal).toBe('The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.');
    }, err => {
      fail(err);
    })
  });

  it('should map attachments', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.attachments[0];

      expect(actual.title).toBe('note_taking.docx')
      expect(actual.filename).toBe('note_taking.docx');
      expect(actual.fileExtension).toBe('.docx');
      expect(actual.fileType).toBe(FileType.Word);
      expect(actual.type).toBe('FileDocument');
    }, err => {
      fail(err);
    })
  });

  it('should map resource type', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.resourceType;
      expect(actual).toBe(ResourceType.Instructional);
    }, err => {
      fail(err);
    })
  });
});

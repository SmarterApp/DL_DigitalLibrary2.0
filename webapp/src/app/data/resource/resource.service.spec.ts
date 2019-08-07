import { TestBed } from '@angular/core/testing';
import { ResourceService } from './resource.service';
import { mockDataServiceProviders, initializeSettingsProvider } from 'src/app/app.module.spec';
import { ResourceType } from './model/resource-type.enum';
import { FileType } from './model/attachment.model';
import { DataService } from '../data.service';
import { MockDataService } from '../mock-data.service';
import { LoggingService } from 'src/app/common/logging/logging.service';
import { mockApiResource } from '../mock-data';
import { of } from 'rxjs';

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
    })
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
    });
  });

  it('should map overview', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.overview;
      expect(actual.description).toContain('In this task, students will engage');
      expect(actual.successCriteria).toContain('Students will be able to construct visual');
      expect(actual.learningGoal).toBe('The student can solve real-world and mathematical one-step problems involving division of fractions by fractions.');
    })
  });

  it('should map attachments', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.attachments[0];

      expect(actual.title).toBe('Illustrative Mathematics Task: How Many Containers in One Cup / Cups in One Container?')
      expect(actual.downloadUrl).toBe('/assets/mock-downloads/instructional-resource-content.docx');
      expect(actual.filename).toBe('instructional-resource-content.docx');
      expect(actual.fileExtension).toBe('.docx');
      expect(actual.fileType).toBe(FileType.Word);
      expect(actual.fileSizeInKB).toBe(183);
      expect(actual.type).toBe('activity');
    })
  });

  it('should map attachments', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.attachments[0];

      expect(actual.title).toBe('Illustrative Mathematics Task: How Many Containers in One Cup / Cups in One Container?')
      expect(actual.downloadUrl).toBe('/assets/mock-downloads/instructional-resource-content.docx');
      expect(actual.filename).toBe('instructional-resource-content.docx');
      expect(actual.fileExtension).toBe('.docx');
      expect(actual.fileType).toBe(FileType.Word);
      expect(actual.fileSizeInKB).toBe(183);
      expect(actual.type).toBe('activity');
    })
  });

  it('should map unknown extension to unknown file type', () => {
    // Change the testing module to return a resource with an attachment that has a file extension not in the file type map.
    TestBed.configureTestingModule({
      providers: [ 
          { provide: DataService, 
            useValue: { 
              get: (id) => {
                return of({ 
                  ... mockApiResource, 
                  attachments: [ {... mockApiResource.attachments[0], url: '/test.xyz' } ] })
                }
            } 
          }, 
          LoggingService, 
          initializeSettingsProvider 
      ]
    });

    const service: ResourceService = TestBed.get(ResourceService);
    service.get(1).subscribe(resource => {
      const actual = resource.attachments[0];
      expect(actual.fileType).toBe(FileType.Unknown);
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

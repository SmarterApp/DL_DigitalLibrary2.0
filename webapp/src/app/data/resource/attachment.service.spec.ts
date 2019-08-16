import { TestBed } from '@angular/core/testing';

import { AttachmentService } from './attachment.service';
import { FileType } from './model/attachment.model';
import { mockDataServiceProviders, initializeSettingsProvider } from 'src/app/app.module.spec';
import { DataService } from '../data.service';
import { of } from 'rxjs';
import { mockApiResource, mockDocument52 } from '../mock-data';
import { LoggingService } from 'src/app/common/logging/logging.service';
import { ResourceService } from './resource.service';

describe('AttachmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ...mockDataServiceProviders ]
  }));

  it('should be created', () => {
    const service: AttachmentService = TestBed.get(AttachmentService);
    expect(service).toBeTruthy();
  });

  it('should map attachments', () => {
    const service: AttachmentService = TestBed.get(AttachmentService);
    service.get(53).subscribe(actual => {
      expect(actual.title).toBe('Editorial_Vocabulary_Cameli2013.pdf')
      expect(actual.filename).toBe('Editorial_Vocabulary_Cameli2013.pdf');
      expect(actual.fileExtension).toBe('.pdf');
      expect(actual.fileType).toBe(FileType.Pdf);
      expect(actual.type).toBe('FileDocument');
    }, err => {
      fail(err);
    })
  });

  it('should map unknown extension to unknown file type', () => {
    seedTestBedFileName('file.xyz');
    const service: AttachmentService = TestBed.get(AttachmentService);
    service.get(52).subscribe(actual => {
      expect(actual.fileType).toBe(FileType.Unknown);
    }, err => {
      fail(err);
    });
  });

  it('should map extension and be case insensitive', () => {
    seedTestBedFileName('test.DOCX');
    const service: AttachmentService = TestBed.get(AttachmentService);
    service.get(52).subscribe(actual => {
      expect(actual.fileType).toBe(FileType.Word);
    }, err => {
      fail(err);
    });
  });

  function seedTestBedFileName(filename: string) {
    // Change the testing module to return a resource with an attachment that has a file extension not in the file type map.
    TestBed.configureTestingModule({
      providers: [ 
          { provide: DataService, 
            useValue: { 
              get: (id) => {
                return of({ ... mockDocument52, name: filename  })
              }
            }
          }, 
          LoggingService, 
          initializeSettingsProvider 
      ]
    });
  }
});

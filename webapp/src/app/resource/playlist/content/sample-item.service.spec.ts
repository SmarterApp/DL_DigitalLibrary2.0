import { TestBed } from '@angular/core/testing';

import { SampleItemService } from './sample-item.service';
import { mockResourceModel } from 'src/app/data/mock-data';

describe('SampleItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleItemService = TestBed.get(SampleItemService);
    expect(service).toBeTruthy();
  });

  it('should create a sample item url from a resouce', () => {
    const service: SampleItemService = TestBed.get(SampleItemService);
    const actual = service.generateUrl({
      ...mockResourceModel.details, 
      subjects: ['Math'],
      targets: [{ shortName: 'A', title: ''},{shortName: 'D', title:'' }],
      grades: [ 3 ],
      claims: [{ shortName: '1', title: ''}]
    });

    expect(actual).toBe('http://sampleitems.smarterbalanced.org/BrowseItems?Claim=MATH1&Subject=MATH&Grade=3&Target=A,D');
  });

  it('should create a sample item url from a resouce with multiple claims', () => {
    const service: SampleItemService = TestBed.get(SampleItemService);
    const actual = service.generateUrl({
      ...mockResourceModel.details, 
      subjects: ['Math'],
      targets: [{ shortName: 'A', title: ''},{shortName: 'D', title:'' }],
      grades: [ 3 ],
      claims: [{ shortName: '1', title: ''}, { shortName: '2', title: ''}]
    });

    expect(actual).toBe('http://sampleitems.smarterbalanced.org/BrowseItems?Claim=MATH1,MATH2&Subject=MATH&Grade=3&Target=A,D');
  });
});

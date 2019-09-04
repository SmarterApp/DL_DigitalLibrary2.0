import { TestBed } from '@angular/core/testing';
import { EmbedStrategyLinksService } from './embed-strategy-links.service';
import { ResourceModel } from './model/resource.model';

describe('EmbedStrategLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbedStrategyLinksService = TestBed.get(EmbedStrategyLinksService);
    expect(service).toBeTruthy();
  });

  it('should embed accessibility strategy links', () => {
    const service: EmbedStrategyLinksService = TestBed.get(EmbedStrategyLinksService);
    const actual = service.embedStrategyLinks('<div>Test this is a Walk the Line test.</div>', <ResourceModel>{
      differentiation: {
        accessibilityStrategies: [{
          title: 'Walk the Line',
          description: 'test description',
          moreAboutUrl: 'google.com'
        }]
      },
      formative: { }
    });

    expect(actual).toBe('<div>Test this is a <sbdl-tooltip title="Accessibility Strategy" text="test description" readMoreUrl="google.com" style="white-space:nowrap;"><i class="far fa-universal-access"></i> Walk the Line</sbdl-tooltip> test.</div>');
  });

  it('should embed formative strategy links', () => {
    const service: EmbedStrategyLinksService = TestBed.get(EmbedStrategyLinksService);
    const actual = service.embedStrategyLinks('<div>Test this is a Collaborative Discussion test.</div>', <ResourceModel>{
      differentiation: {},
      formative: { strategies:  [{
        title: 'Collaborative Discussion',
        description: 'test collab discussion',
        moreAboutUrl: 'collab.org'
      }] }
    });

    expect(actual).toBe(`<div>Test this is a <sbdl-tooltip title="Formative Assessment Strategy" text="test collab discussion" readMoreUrl="collab.org" style="white-space:nowrap;"><sbdl-icon icon="strategies"></sbdl-icon> Collaborative Discussion</sbdl-tooltip> test.</div>`);
  });
});

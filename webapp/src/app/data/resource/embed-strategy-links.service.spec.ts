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
          description: 'test description'
        }]
      },
      formative: { }
    });

    expect(actual).toBe('<div>Test this is a <sbdl-tooltip text="test description" style="white-space:nowrap;"><i class="far fa-universal-access"></i> Walk the Line</sbdl-tooltip> test.</div>');
  });

  it('should embed formative strategy links', () => {
    const service: EmbedStrategyLinksService = TestBed.get(EmbedStrategyLinksService);
    const actual = service.embedStrategyLinks('<div>Test this is a Collaborative Discussion test.</div>', <ResourceModel>{
      differentiation: {},
      formative: { strategies:  [{
        title: 'Collaborative Discussion',
        description: 'test collab discussion'
      }] }
    });

    expect(actual).toBe('<div>Test this is a <sbdl-tooltip text="test collab discussion" style="white-space:nowrap;"><sbdl-icon icon="strategies"></sbdl-icon> Collaborative Discussion</sbdl-tooltip> test.</div>');
  });
});

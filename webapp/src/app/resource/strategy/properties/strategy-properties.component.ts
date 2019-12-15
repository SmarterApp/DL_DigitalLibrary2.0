import { AfterViewInit, Component, ElementRef, Input, ViewChildren } from '@angular/core';
import { MDCRipple } from '@material/ripple';
import { ResourceProperties } from '../../../data/resource/model/properties.model';
import { ResourceType } from '../../../data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-strategy-properties',
  templateUrl: './strategy-properties.component.html',
  styleUrls: ['./strategy-properties.component.scss']
})
export class StrategyPropertiesComponent implements AfterViewInit {

  @Input()
  resourceType: ResourceType;

  @Input()
  properties: ResourceProperties;

  @ViewChildren('link')
  linkElementRefs: ElementRef[];

  isFormative(): boolean {
    return this.resourceType === ResourceType.FormativeStrategy;
  }

  ngAfterViewInit(): void {
    for (const linkRef of this.linkElementRefs) {
      MDCRipple.attachTo(linkRef.nativeElement);
    }
  }
}

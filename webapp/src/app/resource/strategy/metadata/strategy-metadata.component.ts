import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { StrategyStaticMetdata, StrategyMetadataComponentService } from './strategy-metadata-component.service';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-strategy-metadata',
  templateUrl: './strategy-metadata.component.html',
  styleUrls: ['./strategy-metadata.component.scss']
})
export class StrategyMetadataComponent implements OnInit, AfterViewInit {
  @Input()
  model: ResourceDetailsModel;

  @Input()
  resourceType: ResourceType;

  @ViewChildren('links')
  linkElementRefs: ElementRef[];

  staticData: StrategyStaticMetdata;

  constructor(private service: StrategyMetadataComponentService) { }

  ngOnInit() {
    this.staticData = this.service.getStaticMetadata(this.resourceType);
  }

  ngAfterViewInit(): void {
    // Add ripples
    for(let linkRef of this.linkElementRefs) {
      MDCRipple.attachTo(linkRef.nativeElement);
    }
  }

}

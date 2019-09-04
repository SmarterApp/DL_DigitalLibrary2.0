import { Component, OnInit, Input, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { ResourceDetailsModel } from 'src/app/data/resource/model/resource-details.model';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { StaticMetadata, MetadataComponentService } from './metadata-component.service';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'sbdl-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit, AfterViewInit {
  @Input()
  model: ResourceDetailsModel;

  @Input()
  resourceType: ResourceType;

  @ViewChildren('links')
  linkElementRefs: ElementRef[];

  staticData: StaticMetadata;

  constructor(private service: MetadataComponentService) { }

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
import { Component, Input, OnInit } from '@angular/core';
import { ResourceProperties } from 'src/app/data/resource/model/properties.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'sbdl-resource-properties',
  templateUrl: './resource-properties.component.html',
  styleUrls: ['./resource-properties.component.scss']
})
export class ResourcePropertiesComponent implements OnInit {

  @Input()
  properties: ResourceProperties;

  svgSafeUrl: SafeResourceUrl;
  subjectCode = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.properties.image &&
        this.properties.image.endsWith('.svg')) {
      this.svgSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.properties.image);
    }

    if (this.properties.subject) {
      this.subjectCode = this.properties.subject.code || '';
    }

  }
}

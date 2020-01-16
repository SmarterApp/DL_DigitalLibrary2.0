import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MDCRipple } from '@material/ripple';
import { ResourceSummary } from 'src/app/data/resource/model/summary.model';

@Component({
  selector: 'sbdl-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements AfterViewInit, OnInit {

  @Input()
  resource: ResourceSummary;

  @ViewChild('card', {static: false})
  cardElem: ElementRef;

  svgSafeUrl: SafeResourceUrl;
  subjectCode = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.resource.properties.image &&
        this.resource.properties.image.endsWith('.svg')) {
      this.svgSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resource.properties.image);
    }

    if (this.resource.properties.subject) {
      this.subjectCode = this.resource.properties.subject.code || '';
    }

  }

  ngAfterViewInit() {
    if (this.cardElem) {
      MDCRipple.attachTo(this.cardElem.nativeElement);
    }
  }
}

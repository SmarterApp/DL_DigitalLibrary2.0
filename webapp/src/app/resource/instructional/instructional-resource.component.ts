import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectorRef, HostBinding } from '@angular/core';
import { ResourceModel } from '../../data/resource/model/resource.model';
import { ResourceComponent } from '../resource-component.interface';
import { ScrollableElements } from '../outline/scrollable-elements.model';
import { Scroll } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './instructional-resource.component.html',
  styleUrls: ['./instructional-resource.component.scss']
})
export class InstructionalResourceComponent implements OnInit, ResourceComponent {

  model: ResourceModel;
  scrollableElements: ScrollableElements;
  readingMode: boolean = false;
  navWidth = 331;

  @HostBinding("style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--nav-width: ${this.readingMode ? 40 : 331}px`);
  }

  constructor(private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() { 

  }

  setScrollableElements($event) {
    this.scrollableElements = $event;

    // effectively notifies the outline component.
    this.cdRef.detectChanges();
  }

  readingModeChanged(readingMode: boolean) {
    this.readingMode = readingMode;
  }
}

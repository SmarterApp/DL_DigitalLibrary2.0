import { ChangeDetectorRef, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ResourceModel } from '../data/resource/model/resource.model';
import { ScrollableElements } from './components/outline/scrollable-elements.model';

/**
 * Parent class that other resource component classes extend.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceComponent implements OnInit {

  model: ResourceModel;
  scrollableElements: ScrollableElements;
  readingMode: boolean = window.innerWidth < 1200;
  navWidth = 331;
  cssVarStyle: SafeStyle;

  @HostBinding("style")
  public get valueAsStyle(): any {
    return this.cssVarStyle;
  }

  constructor(private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.setCssVarStyle();
  }

  setScrollableElements($event) {
    this.scrollableElements = $event;

    // effectively notifies the outline component.
    this.cdRef.detectChanges();
  }

  readingModeChanged(readingMode: boolean) {
    this.readingMode = readingMode;
    this.setCssVarStyle();
  }

  private setCssVarStyle() {

    const styles = this.readingMode 
      ? `--nav-width:40px; --outline-margin-right:-291px`
      : `--nav-width: 331px; --outline-margin-right: 0`;

    this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(styles);
  }
}
import { ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ResourceModel } from '../../data/resource/model/resource.model';
import { ScrollableElements } from '../outline/scrollable-elements.model';
import { ResourceComponent } from '../resource-component.interface';

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
  cssVarStyle: SafeStyle;

  @HostBinding("style")
  public get valueAsStyle(): any {
    return this.cssVarStyle;
  }

  constructor(private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() { 
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

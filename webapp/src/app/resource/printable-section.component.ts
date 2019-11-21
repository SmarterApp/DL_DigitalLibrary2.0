import { Component, ElementRef, EventEmitter, HostBinding, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DocumentSection } from './components/outline/document-outline.model';

export class PrintableSectionComponent {

  private currentCssStyle: SafeStyle;

  private cssShownStyle: SafeStyle;
  private cssHiddenStyle: SafeStyle;

  constructor(private sanitizer: DomSanitizer,
              cssShownStyle = '--print-display: block;',
              cssHiddenStyle = '--print-display: none;') {
    this.cssShownStyle = this.sanitizer.bypassSecurityTrustStyle(cssShownStyle);
    this.cssHiddenStyle = this.sanitizer.bypassSecurityTrustStyle(cssHiddenStyle);
  }

  @Output()
  sectionLoaded = new EventEmitter<DocumentSection>();

  @ViewChild('sectionHeader', { static: false })
  headerElement: ElementRef;

  @HostBinding('style')
  public get valueAsStyle(): any {
    return this.currentCssStyle;
  }

  setPrintStyle(selectedForPrint: boolean) {
    this.currentCssStyle = selectedForPrint ? this.cssShownStyle : this.cssHiddenStyle;
  }
}

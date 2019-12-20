import { Component, ElementRef, EventEmitter, HostBinding, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DocumentSection } from './components/outline/document-outline.model';

export class PrintableSectionComponent {

  private currentCssStyle: SafeStyle;

  private cssPrintStyle: string;
  private cssHiddenStyle: string;
  private cssBaseStyle: string;
  private selectedForPrint = true;

  constructor(private sanitizer: DomSanitizer,
              cssCustomStyles: {
                printSelected?: string,
                printHidden?: string,
                baseStyle?: string
              } = {}) {

    this.cssPrintStyle = cssCustomStyles.printSelected || '--print-display: block;';
    this.cssHiddenStyle = cssCustomStyles.printHidden || '--print-display: none;';
    this.cssBaseStyle = cssCustomStyles.baseStyle || '';
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
    this.selectedForPrint = selectedForPrint;
    this.currentCssStyle = this.sanitizer.bypassSecurityTrustStyle(
      this.cssBaseStyle +
      (selectedForPrint ? this.cssPrintStyle : this.cssHiddenStyle));
  }

  setBaseStyle(baseStyle: string): void {
    this.cssBaseStyle = baseStyle;
    this.setPrintStyle(this.selectedForPrint);
  }
}

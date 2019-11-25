import { ChangeDetectorRef, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Resource } from '../data/resource/model/resource.model';
import { Note } from '../data/notes/model/note.model';
import { DocumentOutline } from './components/outline/document-outline.model';

/**
 * Parent class that other resource component classes extend.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceComponent implements OnInit {

  resource: Resource;
  notes: Note[];
  outline: DocumentOutline;
  readingMode: boolean = window.innerWidth < 1200;
  printingMode = false;
  notesVisible = false;
  navWidth = 331;
  cssVarStyle: SafeStyle;

  @HostBinding('style')
  public get valueAsStyle(): any {
    return this.cssVarStyle;
  }

  constructor(private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.setCssVarStyle();
  }

  setOutline($event) {
    this.outline = $event;

    this.updatePrintStyles();

    // effectively notifies the outline component.
    this.cdRef.detectChanges();
  }

  readingModeChanged(readingMode: boolean) {
    this.readingMode = readingMode;
    this.setCssVarStyle();
  }

  printingModeChanged(printingMode: boolean) {
    this.printingMode = printingMode;
  }

  notesVisibilityChanged(notesVisible: boolean) {
    this.notesVisible = notesVisible;
  }

  private updatePrintStyles() {
    this.outline.forEach(section => {
      if (section.component) {
        section.component.setPrintStyle(section.canPrint && section.selectedForPrint);
      }

      if (section.subsections) {
        section.subsections.forEach(subsection => {
          if (subsection.component) {
            subsection.component.setPrintStyle (subsection.canPrint && subsection.selectedForPrint);
          }
        });
      }
    });

  }

  private setCssVarStyle() {

    const styles = this.readingMode
      ? `--nav-width:40px; --outline-margin-right:-291px`
      : `--nav-width: 331px; --outline-margin-right: 0`;

    this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(styles);
  }
}

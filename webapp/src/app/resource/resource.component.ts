import {AfterViewInit, ChangeDetectorRef, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeStyle, Title } from '@angular/platform-browser';
import { Map } from 'immutable';
import { Resource } from '../data/resource/model/resource.model';
import { Note } from '../data/notes/model/note.model';
import { User } from '../data/user/user.model';
import { UserService } from '../data/user/user.service';
import { DocumentOutline, DocumentSection, DocumentSectionType } from './components/outline/document-outline.model';
import { ResourceTypePipe } from '../pipes/resource-type.pipe';
import {Observable} from 'rxjs';

/**
 * Parent class that other resource component classes extend.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceComponent implements AfterViewInit, OnInit {

  @Output()
  readonly readingModeChanged: EventEmitter<boolean> = new EventEmitter();

  @Output()
  readonly printModeChanged: EventEmitter<boolean> = new EventEmitter();

  @Output()
  readonly noteModeChanged: EventEmitter<boolean> = new EventEmitter();

  outline: DocumentOutline = Map<DocumentSectionType, DocumentSection>();
  user: User;
  resource: Resource;
  notes: Note[];
  printingMode: boolean;
  readingMode: boolean;
  notesVisible: boolean;
  cssVarStyle: SafeStyle;

  private resourceTypePipe = new ResourceTypePipe();

  @HostBinding('style')
  get valueAsStyle(): SafeStyle {
    return this.cssVarStyle;
  }

  constructor(
    private changeDetectorReference: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private location: Location,
    private userService: UserService
  ) {}

  ngAfterViewInit(): void {
    this.titleService.setTitle(`${this.resource.properties.title} - ${this.resourceTypePipe.transform(this.resource.type)}`);
  }

  ngOnInit(): void {
    this.setCssVarStyle();
    this.userService.user.subscribe(u => this.user = u);
  }

  setOutline($event) {
    this.outline = $event;

    this.updatePrintStyles();

    // TODO remove need for this
    // effectively notifies the outline component.
    this.changeDetectorReference.detectChanges();
  }

  set showReadingMode(value: boolean) {
    this.readingMode = value;
    this.setCssVarStyle();
  }

  set showPrintingOptions(value: boolean) {
    this.printingMode = value;
  }

  set showNotes(value: boolean) {
    this.notesVisible = value;
  }

  notesChanged(notes: Note[]) {
    this.notes = notes;
  }

  scrollToAttachments() {
    if (this.outline && this.outline.has(DocumentSectionType.Attachments)) {
      this.outline.get(DocumentSectionType.Attachments).elementRef
        .scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.location.go(this.location.path() + '#' + DocumentSectionType.Attachments);
    }
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

  private setCssVarStyle(): void {
    const styles = this.readingMode
      ? `--nav-width:40px; --outline-margin-right:-291px`
      : `--nav-width: 331px; --outline-margin-right: 0`;
    this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(styles);
  }
}

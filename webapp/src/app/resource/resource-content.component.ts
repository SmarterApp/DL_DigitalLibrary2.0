import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Map } from 'immutable';
import { commentsSectionOptions } from './components/section/section.definitions';
import { Resource } from '../data/resource/model/resource.model';
import { DocumentOutline, DocumentSection, DocumentSectionType } from './components/outline/document-outline.model';

/**
 * A parent class to other resource conent components.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceContentComponent implements OnInit {
    commentsOptions = commentsSectionOptions;

    @Input()
    resource: Resource;

    @Output()
    outlineLoaded = new EventEmitter<DocumentOutline>();

    @Output()
    readingModeChanged = new EventEmitter<boolean>();

    @Output()
    printingModeChanged = new EventEmitter<boolean>();

    @Output()
    notesVisibilityChanged = new EventEmitter<boolean>();

    protected outline: DocumentOutline = Map<DocumentSectionType, DocumentSection>();

    constructor() { }

    ngOnInit() {
    }

    addDocumentSection(section: DocumentSection) {
      this.outline = this.outline.set(section.type, section);
      this.emitOutlineLoadedEvent();
    }

    scrollToAttachments() {
      if (this.outline && this.outline.has(DocumentSectionType.Attachments)) {
        this.outline.get(DocumentSectionType.Attachments).elementRef
          .scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }
    }

    emitReadingModeChanged(event) {
      this.readingModeChanged.emit(event);
    }

    emitPrintingModeChanged(event) {
      this.printingModeChanged.emit(event);
    }

    emitNotesVisibilityChanged(event) {
      this.notesVisibilityChanged.emit(event);
    }

    protected emitOutlineLoadedEvent() {
      this.outlineLoaded.emit(this.outline);
    }
}

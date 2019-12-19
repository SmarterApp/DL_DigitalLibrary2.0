import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Map } from 'immutable';
import { commentsSectionOptions } from './components/simple-section/section.definitions';
import { Resource } from '../data/resource/model/resource.model';
import { Note } from '../data/notes/model/note.model';
import { DocumentOutline, DocumentSection, DocumentSectionType } from './components/outline/document-outline.model';

/**
 * A parent class to other resource conent components.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceContentComponent implements OnInit {

    commentsSectionOptions = commentsSectionOptions;

    @Input()
    resource: Resource;

    @Input()
    notes: Note[];

    @Input()
    notesVisible: boolean;

    @Input()
    printingMode: boolean;

    @Input()
    readingMode: boolean;

    @Input()
    outline: DocumentOutline;

    @Output()
    outlineLoaded = new EventEmitter<DocumentOutline>();

    @Output()
    readingModeChanged = new EventEmitter<boolean>();

    @Output()
    printingModeChanged = new EventEmitter<boolean>();

    @Output()
    notesVisibilityChanged = new EventEmitter<boolean>();

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

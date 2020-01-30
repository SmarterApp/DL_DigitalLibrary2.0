import {EventEmitter, Input, Output} from '@angular/core';
import {commentsSectionOptions} from './components/simple-section/section.definitions';
import {Resource} from '../data/resource/model/resource.model';
import {Note} from '../data/notes/model/note.model';
import {DocumentOutline, DocumentSection} from './components/outline/document-outline.model';

/**
 * A parent class to other resource conent components.
 * No @Component attribute here because it is never used directly.
 */
export class ResourceContentComponent {

    readonly commentsSectionOptions = commentsSectionOptions;

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

    addDocumentSection(section: DocumentSection) {
      this.outline = this.outline.set(section.type, section);
      this.outlineLoaded.emit(this.outline);
    }

}

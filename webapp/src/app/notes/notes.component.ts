import { Component, EventEmitter, Input, OnInit, Output, Type, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Resource } from '../data/resource/model/resource.model';
import { Note } from '../data/notes/model/note.model';

@Component({
  selector: 'sbdl-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  @Input()
  notes: Note[];

  @Input()
  resource: Resource;

  @Output()
  notesChanged = new EventEmitter<Note[]>();

  authoringNote = false;
  newNoteContent = '';

  private editorConfig: AngularEditorConfig = {
    editable: true,
    enableToolbar: true,
    placeholder: 'Start typing something...',
    sanitize: true,
    showToolbar: true,
    spellcheck: true,
    toolbarHiddenButtons: [
      ['underline', 'superscript', 'subscript'],
      ['heading', 'fontName', 'fontSize', 'textColor', 'backgroundColor'],
      ['customClasses', 'link', 'unlink'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'insertHorizontalRule'],
      ['insertImage', 'insertVideo', 'toggleEditorMode']
    ]
  };

  addNote() {
    this.authoringNote = true;
  }

  saveNote() {
    const newNote: Note = {
      resourceId: this.resource.id,
      content: this.newNoteContent,
      lastModified: new Date()
    };

    this.notesChanged.emit(this.notes.concat([newNote]));
    this.authoringNote = false;
  }

  cancelNote() {
    this.newNoteContent = '';
    this.authoringNote = false;
  }

}

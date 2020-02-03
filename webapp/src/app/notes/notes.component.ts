import { Component, EventEmitter, Input, OnInit, Output, Type, ViewChild } from '@angular/core';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { catchError } from 'rxjs/operators';
import { Resource } from '../data/resource/model/resource.model';
import { Note } from '../data/notes/model/note.model';
import { NotesService } from '../data/notes/notes.service';

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

  @ViewChild(AngularEditorComponent, { static: false })
  editor: AngularEditorComponent;

  authoringNote = false;
  newNoteContent = '';
  saving = false;

  editorConfig: AngularEditorConfig = {
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

  constructor(private notesService: NotesService) { }

  addNote() {
    this.newNoteContent = '';
    this.authoringNote = true;
    this.editorConfig.editable = true;
    requestAnimationFrame(() => { this.editor.focus(); });
  }

  saveNote = () => {
    const newNote: Note = {
      id: null,
      resourceId: this.resource.id,
      content: this.newNoteContent,
      lastModified: new Date()
    };

    this.editorConfig.editable = false;
    this.saving = true;
    this.notesService
      .createNote(this.resource.id, newNote)
      // TODO: pipe(catchError)
      .subscribe((retNote: Note) => {
        this.notesChanged.emit(this.notes.concat([retNote]));
        this.authoringNote = false;
        this.saving = false;
      });
  }

  cancelNote() {
    this.newNoteContent = '';
    this.authoringNote = false;
  }

}

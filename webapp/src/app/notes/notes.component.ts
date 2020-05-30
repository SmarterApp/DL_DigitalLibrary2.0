import { Component, EventEmitter, Input, OnInit, Output, Type, ViewChild } from '@angular/core';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { catchError } from 'rxjs/operators';
import {Subscription} from 'rxjs';
import { Resource } from '../data/resource/model/resource.model';
import { Note } from '../data/notes/model/note.model';
import { NotesService } from '../data/notes/notes.service';
import { ConfirmationDialogService } from '../common/confirmation-dialog/confirmation-dialog.service';
import {Bookmark} from 'src/app/data/bookmarks/bookmark.model';
import { BookmarksService } from '../data/bookmarks/bookmarks.service';

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

  isDeleted = false;
  addingNote = false;
  editingNote = false;
  editNoteId = 0;
  noteContent = '';
  actionText = '';
  saving = false;
  bookmark: Bookmark;

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

  private deleteNoteSubscription: Subscription;
  private bookmarksSubscription: Subscription;
  
  constructor(
    private notesService: NotesService,
    private bookmarksService: BookmarksService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit() {
    this.deleteNoteSubscription = this.confirmationDialogService.okClicked.subscribe((id) => {
      this.deleteNote(id);
    });
  }

  ngOnDestroy(){
    if(this.deleteNoteSubscription){
      this.deleteNoteSubscription.unsubscribe();
      this.deleteNoteSubscription = undefined;
    }
  }

  addNote() {
    this.actionText = 'Add a Note';
    this.noteContent = '';
    this.addingNote = true;
    this.editorConfig.editable = true;
    requestAnimationFrame(() => { this.editor.focus(); });
  }

  saveNote = () => {
    const newNote: Note = {
      id: null,
      resourceId: this.resource.id,
      content: this.noteContent,
      lastModified: new Date(),
      isDeleted: false
    };

    this.editorConfig.editable = false;
    this.saving = true;

    if (this.addingNote) {
      this.notesService
        .createNote(this.resource.id, newNote)
        // TODO: pipe(catchError)
        .subscribe((retNote: Note) => {
          this.notesChanged.emit(this.notes.concat([retNote]));
          this.addingNote = false;
          this.saving = false;
        });
    }
    else if (this.editingNote) {
      const arrayNote = this.notes.find((n) => n.id === this.editNoteId);
      arrayNote.content = this.noteContent;

      this.notesService.updateNote(arrayNote).subscribe((retNote: Note) => {
        arrayNote.lastModified = retNote.lastModified;

        this.notesChanged.emit(this.notes);
        this.editingNote = false;
        this.editNoteId = 0;
        this.saving = false;
      });
    }
    this.bookmarksSubscription = this.bookmarksService.userBookmarksByResourceId.subscribe(bkmkMap => {
      this.bookmark = bkmkMap.get(this.resource.id);
    });
    if(!this.bookmark){    
      this.bookmarksService.createBookmark(this.resource.id);
    }
  }

  cancelNote() {
    this.noteContent = '';
    this.addingNote = false;
    this.editingNote = false;
    this.editNoteId = 0;
  }

  editNote(note: Note) {
    this.actionText = 'Edit Note';
    this.noteContent = note.content;
    this.editingNote = true;
    this.editNoteId = note.id;
    this.editorConfig.editable = true;
    requestAnimationFrame(() => { this.editor.focus(); });
  }

  deleteNote($event) {
    this.notesService
      .deleteNote($event.id)
      .subscribe(() => {
        const note = this.notes.find((n) => n.id === $event.id);
        note.isDeleted = true;
      });
  }
}

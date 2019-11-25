import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { Note } from '../data/notes/model/note.model';

@Component({
  selector: 'sbdl-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  @Input()
  notes: Note[];

  addNote() {
  }
}

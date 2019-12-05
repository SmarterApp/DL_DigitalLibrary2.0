import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { Note } from '../../data/notes/model/note.model';

@Component({
  selector: 'sbdl-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input()
  note: Note;

  saveNote() {
  }
}

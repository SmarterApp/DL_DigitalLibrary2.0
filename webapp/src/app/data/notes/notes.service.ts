import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Note } from './model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private dataService: DataService) { }

  listNotesForResource(resourceId: number): Observable<Note[]> {
    return this.dataService
      .get(`/api/notes/resource/${resourceId}`)
      .pipe(map(resp => resp.map(this.noteFromJson)));
  }

  createNote(resourceId: number, note: Note): Observable<Note> {
    return this.dataService
      .post(`/api/note/resource/${resourceId}`, { noteText: note.content })
      .pipe(map(this.noteFromJson));
  }

  deleteNote(noteId: number): void {
    this.dataService.delete(`/api/note/${noteId}`);
  }

  private noteFromJson(json: any): Note {
    return {
      id: json.noteId,
      resourceId: json.resourceId,
      content: json.noteText,
      lastModified: new Date(json.noteDate || json.updatedAt)
    };
  }
}

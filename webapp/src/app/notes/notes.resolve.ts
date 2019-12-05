import { Note } from '../data/notes/model/note.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotesResolve implements Resolve<Note[]> {
    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Note[] | Observable<Note[]> | Promise<Note[]> {
      const notes: Note[] = [
        {
          resourceId: 110,
          content: '<b>Test</b> note.<br />This is a <i>test</i> note!.',
          lastModified: new Date('2019-09-01T12:00:01+00:00')
        },
        {
          resourceId: 110,
          content: 'This is a <i>second</i> test note!.',
          lastModified: new Date('2019-09-04T12:00:01+00:00')
        },
        {
          resourceId: 110,
          content: 'Lorem ipsum dolor semet.',
          lastModified: new Date('2019-10-18T12:00:01+00:00')
        },
        {
          resourceId: 110,
          content: 'When working with individual students, I like to do X, Y, and Z to help them visualize the variable interactions.',
          lastModified: new Date('2019-10-21T12:00:01+00:00')
        },
        {
          resourceId: 112,
          content: 'Test note on resource 112.',
          lastModified: new Date('2019-05-21T12:00:01+00:00')
        }
      ];

      return notes.filter(n => n.resourceId == route.params.resourceId);
    }
}

import { Note } from '../data/notes/model/note.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { flatMap, take } from 'rxjs/operators';
import { NotesService } from 'src/app/data/notes/notes.service';
import { UserService } from 'src/app/data/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class NotesResolve implements Resolve<Note[]> {
    constructor(
      private notesService: NotesService,
      private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note[]> {
      return this.userService.user.pipe(
        take(1),
        flatMap(user => {
          if (!!user) {
            return this.notesService.listNotesForResource(route.params.resourceId);
          } else {
            return of([]);
          }
        }));
    }
}

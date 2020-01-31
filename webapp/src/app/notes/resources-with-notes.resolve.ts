import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {flatMap, take} from 'rxjs/operators';
import {NotesService} from 'src/app/data/notes/notes.service';
import {UserService} from 'src/app/data/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class ResourcesWithNotesResolve implements Resolve<number[]> {
  constructor(
    private notesService: NotesService,
    private userService: UserService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number[]> {
    return this.userService.user.pipe(
      take(1),
      flatMap(user => {
        if (user) {
          return this.notesService.listIdsOfResourcesWithNotes();
        } else {
          return of ([] as number[]);
        }
      }));
  }
}

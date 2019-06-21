import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../data/user/user.model';
import { UserService } from '../data/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class CurrentUserResolve implements Resolve<UserModel> {
  constructor(private service: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    return this.service.getCurrentUser();
  }
}
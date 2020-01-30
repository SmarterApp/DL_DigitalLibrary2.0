import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, flatMap, share, skip, tap } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from './user.model';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // ReplaySubject is a Subject (see https://rxjs.dev/guide/subject) that
  // remembers the last n (here n = 1) values that passed through it. We use
  // this to cache the user object. We expose this as our `user` property.
  //
  // When a caller subscribes, if we have already had at least one value they
  // will immediately receive our most recent value. It we have not yet
  // received a value (page load for example) then they will wait for us to
  // produce a value. For example, see the DataService's usage.
  private userReplay: ReplaySubject<User> = new ReplaySubject(1);

  constructor(
    @Inject(APP_BASE_HREF) private baseHref,
    private oktaAuthService: OktaAuthService
  ) {
    // Subscribe to the Okta auth state so that we can push updates to our
    // subscribers when the user logs in or out. This lets Okta push changes to
    // us and our subscribers.
    this.oktaAuthService.$authenticationState.subscribe(this.updateUser);

    // This is a pull from Okta for the first value. When we first load we're
    // not going to receive anything from the above subscription. We need to
    // manually seed our user state by asking the OktaAuthService for the
    // current user state.
    this.loadInitialUser();
  }

  get user(): Observable<User> {
    return this.userReplay;
  }

  get authenticated(): Observable<boolean> {
    return fromPromise(this.oktaAuthService.isAuthenticated());
  }

  /**
   * Use the OktaAuthService to pull the initial user state from
   * cookies/wherever it's storing it.
   */
  private loadInitialUser() {
    this.oktaAuthService.isAuthenticated().then(this.updateUser);
  }

  /**
   * Update our ReplaySubject with new User information depending on the new
   * auth state.
   */
  private updateUser = async (hasAuth) => {
    if (hasAuth) {
      this.userReplay.next(await this.readUserFromOkta());
    } else {
      this.userReplay.next(null);
    }
  }

  /**
   * Interrogate the OktaAuthService and build a User model object.
   */
  private readUserFromOkta = async (): Promise<User> => {
    const userProfile: any = await this.oktaAuthService.getUser();
    return {
      ...userProfile,
      accessToken: await this.oktaAuthService.getAccessToken(),
      idToken: await this.oktaAuthService.getIdToken()
    } as User;
  }
}

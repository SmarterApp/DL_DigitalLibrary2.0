import {APP_BASE_HREF} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable, OperatorFunction, of, ReplaySubject} from 'rxjs';
import {map, mergeMap, flatMap, share, skip, tap} from 'rxjs/operators';
import {OktaAuthService, UserClaims} from '@okta/okta-angular';
import {TenancyChainEntity, TenancyLevel, User, UserTenancy} from './user.model';
import { TftError, TftErrorType } from 'src/app/common/tft-error-type.enum';
import { TftErrorService } from 'src/app/common/tft-error.service';
import { ERROR_PATH } from 'src/app/common/constants';

/**
 */
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
  private user$: ReplaySubject<User> = new ReplaySubject(1);
  private hasOktaAuthToken$: ReplaySubject<boolean> = new ReplaySubject(1);

  private jwtService: JwtHelperService;

  static parseSbacTenancyChain(sbacTenancyChain: string[]): UserTenancy[] {
    const validTenancies: UserTenancy[] = [];

    const extractEntity = (segments: string[], idx: number): TenancyChainEntity => {
      if (segments[idx] && segments[idx].length > 0) {
        return { id: segments[idx], name: segments[idx + 1] };
      } else {
        return undefined;
      }
    };

    sbacTenancyChain.forEach(chain => {
      if (chain.toLowerCase().includes('dl_enduser')) {
        const segments = chain.split('|');

        if (!segments[3] || !Object.values(TenancyLevel).some(v => v === segments[3])) {
          throw new Error(`sbacTenancyChain '${chain}' has an invalid value for Level: '${segments[3] || 'undefined'}'`);
        }

        validTenancies.push({
          role: extractEntity(segments, 1),
          level: segments[3] as TenancyLevel,
          client: extractEntity(segments, 4),
          stateGroup: extractEntity(segments, 6),
          state: extractEntity(segments, 8),
          districtGroup: extractEntity(segments, 10 ),
          district: extractEntity(segments, 12),
          institutionGroup: extractEntity(segments, 14),
          institution: extractEntity(segments, 16),
        });
      }
    });

    return validTenancies;
  }

  static validateUserSession(user: User): TftError | null {
    if (!user.accessToken) {
      return {
        type: TftErrorType.AuthNoAppAccess,
        details: 'User has no access token.'
      };
    }
  }

  constructor(
    @Inject(APP_BASE_HREF) private baseHref,
    private errorService: TftErrorService,
    private oktaAuthService: OktaAuthService
  ) {
    this.jwtService = new JwtHelperService();

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
    return this.user$.asObservable();
  }

  get authenticated(): Observable<boolean> {
    return this.user$.pipe(map(u => !!u));
  }

  get hasOktaAuthToken(): Observable<boolean> {
    return this.hasOktaAuthToken$;
  }

  /**
   * Convenience method to wrap the common case where a reactive pipeline
   * should be executed only if a valid user session is present, returning a
   * given default value otherwise.
   */
  withUserOrDefault<T>(fun: OperatorFunction<User, T>, defaultValue: T): Observable<T> {
    return this.user$.pipe(
      mergeMap(user => {
        if (user) {
          return fun(of(user));
        } else {
          return of(defaultValue);
        }
      }));
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
      const user = await this.readUserFromOkta();
      const error = UserService.validateUserSession(user);
      if (error) {
        this.user$.next(null);
        this.errorService.redirectTftError(error);
      } else if (user.tenantIds.length === 0) {
        // special case: valid user but no DL_EndUser. Allow them to progress
        // like an anonymouse user.
        this.user$.next(null);
      } else {
        this.user$.next(await this.readUserFromOkta());
      }
    } else {
      this.user$.next(null);
    }

    // Do this last as it is used by the login component as a signal that user
    // authentication has completed.
    this.hasOktaAuthToken$.next(hasAuth);
  }

  /**
   * Interrogate the OktaAuthService and build a User model object.
   */
  private readUserFromOkta = async (): Promise<User> => {
    // Frustratingly, the okta-angular library does not provide a way to access
    // the actual contents of the access token without parsing it yourself. A
    // newer version (yet to be released as of 2020-01-29) does provide access
    // to the token manager instance, but the version of the access token
    // stored therein does not contain all claims in the access token. So we
    // have to parse the access token ourselves to get, for example, the
    // sbacTenancyChain value.
    const accessToken = await this.oktaAuthService.getAccessToken();
    const decodedAccessToken = this.jwtService.decodeToken(accessToken);
    const userInfo = await this.oktaAuthService.getUser();

    return new User(
      userInfo.email,
      userInfo.name,
      userInfo.given_name,
      userInfo.famiyl_name,
      UserService.parseSbacTenancyChain(userInfo.sbacTenancyChain),
      accessToken
    );
  }

}

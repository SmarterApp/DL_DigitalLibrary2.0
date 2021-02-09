// change for spike T4T-645
import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Observable, Subscription } from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {filter} from 'rxjs/internal/operators/filter';
import {OktaAuthService} from '@okta/okta-angular';
import {TftErrorType, TftErrorMessage, errorMessages} from 'src/app/common/tft-error-type.enum';
import {TenantThemeService} from 'src/app/data/tenant-theme/tenant-theme.service';
import {User} from 'src/app/data/user/user.model';
import {UserService} from 'src/app/data/user/user.service';

// change for spike T4T-645
declare let gtag:Function;

@Component({
  selector: 'sbdl-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
// change for spike T4T-645
export class ErrorComponent implements OnInit, AfterViewInit {

  error$: Observable<TftErrorType>;
  errorDetails$: Observable<string>;
  errorMessage$: Observable<TftErrorMessage>;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  logo$: Observable<string>;
  user$: Observable<User>;

  errorTypes = TftErrorType;

  private routerSubscription: Subscription;

  // change for spike T4T-645
  private errorType: TftErrorType

  constructor(
    private location: Location,
    private oktaAuthService: OktaAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private tenantThemeService: TenantThemeService,
    private userService: UserService
  ) {
    this.user$ = userService.user;
    this.logo$ = tenantThemeService.currentTenantTheme$.pipe(
      map(theme => theme.logoUris.full));
  }

  ngOnInit() {
    this.error$ = this.route.params.pipe(map(p => {
      const errorType: TftErrorType = p.type;

      // change for spike T4T-645
      this.errorType = errorType;

      if (!Object.values(TftErrorType).some(v => v === errorType)) {
        return TftErrorType.Unknown;
      } else {
        return errorType;
      }
    }));

    this.errorMessage$ = this.error$.pipe(map(et => errorMessages.get(et)));
    this.errorDetails$ = this.route.params.pipe(map(p => p.details));
  }

  onLoginButtonClick(): void {
    this.loading$.next(true);
    this.router.navigate(['/auth/login'], { queryParams: { redirectUrl: this.location.path() }});
  }

  // change for spike T4T-645
  ngAfterViewInit(): void {

    gtag('event', "Message - " + this.errorType, { 
      eventCategory: "user: " + this.user$,
      eventLabel: this.errorType, 
      eventAction: 'eventAction', 
      eventValue: new Date()
    });
  }
}

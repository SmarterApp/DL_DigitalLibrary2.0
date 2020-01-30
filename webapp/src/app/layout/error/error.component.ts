import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Observable, Subscription } from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {filter} from 'rxjs/internal/operators/filter';
import {OktaAuthService} from '@okta/okta-angular';
import {ErrorType, ErrorMessage, errorMessages} from 'src/app/common/error-type.enum';
import {TenantThemeService} from 'src/app/data/tenant-theme/tenant-theme.service';
import {User} from 'src/app/data/user/user.model';
import {UserService} from 'src/app/data/user/user.service';

@Component({
  selector: 'sbdl-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  error: ErrorType;
  errorDetails: string;
  errorMessage: ErrorMessage;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  logo$: Observable<string>;
  user$: Observable<User>;

  private routerSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private oktaAuthService: OktaAuthService,
    private router: Router,
    private tenantThemeService: TenantThemeService,
    private userService: UserService
  ) {
    this.user$ = userService.user;
    this.logo$ = this.user$.pipe(
      mergeMap(user => tenantThemeService.getTenantTheme(user)),
      map(theme => theme.logoUris.full));
  }

  ngOnInit() {
    console.log('Error page params: ', this.route.snapshot);

    this.error = this.route.snapshot.params.type || ErrorType.Unknown;
    if (!Object.values(ErrorType).some(v => v === this.error)) {
      this.error = ErrorType.Unknown;
    }

    this.errorMessage = errorMessages.get(this.error);
    this.errorDetails = this.route.snapshot.params.details;
  }

  onLoginButtonClick(): void {
    this.loading$.next(true);
    this.oktaAuthService.loginRedirect(this.router.url);
  }
}

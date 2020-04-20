import { Injectable, Output, EventEmitter, OnDestroy, ElementRef } from '@angular/core';
import { StorageService } from 'src/app/common/storage.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/data/user/user.service';
import { PopoverComponent } from 'src/app/common/controls/popover/popover.component';
import { PopoverService } from 'src/app/common/controls/popover/popover.service';
import { SessionStateKey } from 'src/app/common/enums/session-state-key.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginWarningService implements OnDestroy {

  @Output()
  onCloseClick: EventEmitter<any>;

  @Output()
  onWarningClosed: EventEmitter<any>;

  private initiatingElementRef: ElementRef;
  private popover: PopoverComponent;

  private authenticated: boolean;
  private authSubscription: Subscription;

  private loginWarningCloseSubscription: Subscription;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private popoverService: PopoverService,
    private router: Router
  ) {
    this.onCloseClick = new EventEmitter<any>();
    this.onWarningClosed = new EventEmitter<any>();

    this.authSubscription = this.userService.authenticated
      .subscribe((auth) => this.authenticated = auth);
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  close() {
    this.onCloseClick.emit();
  }

  shouldDisplay(sessionKey: SessionStateKey): boolean {
    const previouslyDisplayed = this.storageService.getLoginWarningDisplayed(sessionKey);
    const searchCriteriaMet = !this.router.url.includes('resourceTypes=fs');
    const displayPopover = !this.authenticated && searchCriteriaMet && !previouslyDisplayed;

    return displayPopover;
  }

  private offset(el) {
    const rect = el.getBoundingClientRect();
    const width = rect.right - rect.left;

    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft + width / 2 + 24 };
  }

  private create(popoverRef: ElementRef, initiatingElementRef: ElementRef, sessionKey: SessionStateKey): PopoverComponent {
    this.initiatingElementRef = initiatingElementRef;

    const popover = this.popoverService.openOnBody(popoverRef, {
      offset: this.offset(this.initiatingElementRef.nativeElement),
      cssClass: 'tooltip',
      placement: 'bottom'
    });

    this.storageService.setLoginWarningDisplayed(sessionKey, true);

    return popover;
  }

  private closeLoginWarning = () => {
    if (this.loginWarningCloseSubscription) {
      this.loginWarningCloseSubscription.unsubscribe();
    }

    this.popover = undefined;
    this.onWarningClosed.emit();
  }

  displayLoginWarning(loginWarningPopover: ElementRef, initiatingElementRef: ElementRef, sessionKey: SessionStateKey): void {
    this.popover = this.create(loginWarningPopover, initiatingElementRef, sessionKey);
    this.popover.onClose.subscribe(this.closeLoginWarning);

    this.loginWarningCloseSubscription = this.onCloseClick
      .subscribe(() => { 
        if (this.popover) {
          this.popover.close();
        }
      });
  }
}
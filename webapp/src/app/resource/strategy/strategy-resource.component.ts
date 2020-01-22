import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/user/user.service';
import { ResourceComponent } from '../resource.component';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { OktaAuthService } from '@okta/okta-angular';
import { FormativeStrategyResource } from '../../data/resource/model/formative-strategy.model';
import { AccessibilityStrategyResource } from '../../data/resource/model/accessibility-strategy.model';

@Component({
  selector: 'sbdl-strategy-resource',
  templateUrl: './strategy-resource.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class StrategyResourceComponent extends ResourceComponent {

  @Input()
  resource: FormativeStrategyResource | AccessibilityStrategyResource ;

  constructor(cdRef: ChangeDetectorRef,
              sanitizer: DomSanitizer,
              titleService: Title,
              location: Location,
              oktaAuthService: OktaAuthService,
              router: Router,
              userService: UserService) {

    super(cdRef, sanitizer, titleService, location, oktaAuthService, router, userService);
  }
}

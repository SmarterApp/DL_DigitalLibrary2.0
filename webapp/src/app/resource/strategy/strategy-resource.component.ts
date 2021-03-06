import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/data/user/user.service';
import { ResourceComponent } from '../resource.component';
import { DomSanitizer, Title } from '@angular/platform-browser';
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
              userService: UserService) {

    super(cdRef, sanitizer, titleService, location, userService);
  }
}

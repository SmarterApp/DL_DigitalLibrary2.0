import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { ResourceComponent } from '../resource.component';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { ResourceComponent } from '../resource.component';
import { DomSanitizer } from '@angular/platform-browser';
import { FormativeStrategyResource } from '../../data/resource/model/formative-strategy.model';

@Component({
  selector: 'sbdl-strategy-resource',
  templateUrl: './strategy.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class StrategyComponent extends ResourceComponent {

  @Input()
  resource: FormativeStrategyResource;

  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

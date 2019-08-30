import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ResourceComponent } from '../resource.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sbdl-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class StrategyComponent extends ResourceComponent {
  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

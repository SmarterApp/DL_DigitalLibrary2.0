import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceComponent } from '../resource.component';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './instructional-resource.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class InstructionalResourceComponent extends ResourceComponent {
  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

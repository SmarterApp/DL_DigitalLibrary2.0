import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceComponent } from '../resource.component';

@Component({
  selector: 'sbdl-professional-resource',
  templateUrl: './professional-resource.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class ProfessionalResourceComponent extends ResourceComponent {
  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

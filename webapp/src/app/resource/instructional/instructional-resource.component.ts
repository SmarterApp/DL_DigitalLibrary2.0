import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceComponent } from '../resource.component';
import { InstructionalResource } from '../../data/resource/model/instructional.model';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './instructional-resource.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class InstructionalResourceComponent extends ResourceComponent {

  @Input()
  resource: InstructionalResource;

  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

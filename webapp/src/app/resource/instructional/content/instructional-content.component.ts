import { Component, Input } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';
import { InstructionalResource } from '../../../data/resource/model/instructional.model';

@Component({
  selector: 'sbdl-instructional-content',
  templateUrl: './instructional-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class InstructionalContentComponent extends ResourceContentComponent {

  @Input()
  resource: InstructionalResource;

  constructor() {
    super();
   }
}

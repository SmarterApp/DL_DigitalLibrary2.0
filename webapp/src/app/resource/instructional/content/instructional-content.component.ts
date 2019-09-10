import { Component } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';

@Component({
  selector: 'sbdl-instructional-content',
  templateUrl: './instructional-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class InstructionalContentComponent extends ResourceContentComponent {
  constructor() {
    super();
   }
}

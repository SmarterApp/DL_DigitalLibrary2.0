import { Component } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';

@Component({
  selector: 'sbdl-professional-content',
  templateUrl: './professional-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class ProfessionalContentComponent extends ResourceContentComponent{
  constructor() { 
    super();
  }
}

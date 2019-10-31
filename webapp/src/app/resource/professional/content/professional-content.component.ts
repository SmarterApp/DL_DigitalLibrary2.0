import { Component, Input } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';
import { ProfessionalLearningResource } from '../../../data/resource/model/professional-learning.model';

@Component({
  selector: 'sbdl-professional-content',
  templateUrl: './professional-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class ProfessionalContentComponent extends ResourceContentComponent {

  @Input()
  resource: ProfessionalLearningResource;

  constructor() {
    super();
  }
}

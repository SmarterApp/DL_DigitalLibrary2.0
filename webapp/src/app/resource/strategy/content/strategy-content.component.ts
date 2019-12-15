import { Component, Input } from '@angular/core';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { ResourceContentComponent } from '../../resource-content.component';
import { FormativeStrategyResource } from '../../../data/resource/model/formative-strategy.model';
import { AccessibilityStrategyResource } from '../../../data/resource/model/accessibility-strategy.model';

@Component({
  selector: 'sbdl-strategy-content',
  templateUrl: './strategy-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class StrategyContentComponent extends ResourceContentComponent {

  @Input()
  resource: FormativeStrategyResource | AccessibilityStrategyResource;

  constructor() {
    super();
  }
}

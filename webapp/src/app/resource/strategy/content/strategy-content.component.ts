import { Component, Input } from '@angular/core';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';
import { ResourceContentComponent } from '../../resource-content.component';
import { FormativeStrategyResource } from '../../../data/resource/model/formative-strategy.model';
import { AccessibilityStrategyResource } from '../../../data/resource/model/accessibility-strategy.model';
import { commentsSectionOptions, instructionalUseSectionOptions,
         stepByStepSectionOptions, strategyInActionSectionOptions
} from '../../components/simple-section/section.definitions';

@Component({
  selector: 'sbdl-strategy-content',
  templateUrl: './strategy-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class StrategyContentComponent extends ResourceContentComponent {

  @Input()
  resource: FormativeStrategyResource | AccessibilityStrategyResource;

  commentsSectionOptions = commentsSectionOptions;
  instructionalUseSectionOptions = instructionalUseSectionOptions;
  stepByStepSectionOptions = stepByStepSectionOptions;
  strategyInActionSectionOptions = strategyInActionSectionOptions;

  isFormative(): boolean {
    return this.resource.type === ResourceType.FormativeStrategy;
  }

  formativeContent(): string {
    return (this.resource as FormativeStrategyResource).stepByStep;
  }

  accessibilityContent(): string {
    return (this.resource as AccessibilityStrategyResource).instructionalUse;
  }
constructor() {
    super();
  }
}

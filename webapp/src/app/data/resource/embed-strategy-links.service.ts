import { Injectable } from '@angular/core';
import { ResourceType } from './model/resource-type.enum';
import { InstructionalResource } from './model/instructional.model';
import { ProfessionalLearningResource } from './model/professional-learning.model';
import { ResourceStrategyReference } from './model/strategy-reference.model';

@Injectable({
  providedIn: 'root'
})
export class EmbedStrategyLinksService {

  constructor() { }

  embedStrategyLinks = (
    content: string,
    resource: InstructionalResource | ProfessionalLearningResource)
    : string => {

    if (!content) {
      return content;
    }

    if (resource.type === ResourceType.Instructional) {
      content = this.embedAccessibilityStrategies(content, (resource as InstructionalResource).accessibilityStrategies);
    }

    content = this.embedFormativeStrategies(content, resource.formativeAssessmentStrategies);
    return content;
  }

  private embedAccessibilityStrategies(content: string, strategies: ResourceStrategyReference[]): string {
    if (!strategies || !strategies.length) {
      return content;
    }

    for (const strategy of strategies) {
      content = content.replace(new RegExp('\\b' + strategy.title.trim() + '\\b', 'gui'),
`<sbdl-tooltip title="Accessibility Strategy"
              class="strategy-link"
              text="${strategy.description}"
              readMoreUrl="/resource/${strategy.id}"
              style="white-space:nowrap;"
  ><i class="far fa-universal-access"></i>
  <span class="gradient-hover">${strategy.title}</span
></sbdl-tooltip>`
      );
    }
    return content;
  }

  private embedFormativeStrategies(content: string, strategies: ResourceStrategyReference[]): string {
    if (!strategies || !strategies.length) {
      return content;
    }

    for (const strategy of strategies) {
      content = content.replace(new RegExp('\\b' + strategy.title.trim() + '\\b', 'gui'),
`<sbdl-tooltip title="Formative Assessment Strategy"
              class="strategy-link"
              text="${strategy.description}"
              readMoreUrl="/resource/${strategy.id}"
              style="white-space:nowrap;"
  ><sbdl-icon icon="strategies"></sbdl-icon>
  <span class="gradient-hover">${strategy.title}</span
></sbdl-tooltip>`
      );
    }

    return content;
  }
}

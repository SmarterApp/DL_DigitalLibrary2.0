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

    // T4T-639
    // to handle the left and right parentheses, first need to replace the content with the encoded values.  
    content = this.replaceParentheses(content);

    if (resource.type === ResourceType.Instructional) {
      content = this.embedStrategies(content, (resource as InstructionalResource).accessibilityStrategies, "Accessibility Strategy");
    }

    content = this.embedStrategies(content, resource.formativeAssessmentStrategies, "Formative Assessment Strategy");
    return content;
  }

  embedStrategies(content: string, strategies: ResourceStrategyReference[], title: string): string {
    if (!strategies || !strategies.length) {
      return content;
    }

    for (const strategy of strategies) {
      var replacedStrategy = this.replaceParentheses(strategy.title.trim());

      if (replacedStrategy === strategy.title.trim())
      replacedStrategy = '\\b' + replacedStrategy + '\\b';

      content = content.replace(new RegExp( replacedStrategy , 'gui'),
      `<sbdl-tooltip title="` + title + `"
                    class="strategy-link"
                    text="${strategy.description}"
                    readMoreUrl="/resource/${strategy.id}"
                    style="white-space:nowrap;"
        ><i class="far fa-universal-access"></i>
        <span class="gradient-hover">${strategy.title}</span
      ></sbdl-tooltip>` );
    }
    return content;
  }

  private replaceParentheses(value: string): string {
    // T4T-639
    // to handle the left and right parentheses, first need to replace the 
    // content with the encoded values.  
    // the first regex: /\s\(/gi replaces ' (' and does it globally for the content text
    // the second regex: /\)/gi replaces ')' and does it globally for the content text
    return value.replace(/\s\(/gi,"&nbsp;&lpar;").replace(/\)/gi,"&rpar;");
  }
}

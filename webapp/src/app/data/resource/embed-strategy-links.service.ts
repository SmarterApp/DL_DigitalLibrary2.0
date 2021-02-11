import { Injectable } from '@angular/core';
import { ResourceType } from './model/resource-type.enum';
import { InstructionalResource } from './model/instructional.model';
import { ProfessionalLearningResource } from './model/professional-learning.model';
import { ResourceStrategyReference } from './model/strategy-reference.model';
import { stringify } from '@angular/compiler/src/util';

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
      content = this.embedStrategies(content, (resource as InstructionalResource).accessibilityStrategies, ResourceType.AccessibilityStrategy);
    }

    content = this.embedStrategies(content, resource.formativeAssessmentStrategies, ResourceType.FormativeStrategy);
    return content;
  }

  // T4T-639
  // common function for both types
  // added enum to indicate type
  embedStrategies(content: string, strategies: ResourceStrategyReference[], resourceType: ResourceType): string {
    if (!strategies || !strategies.length) {
      return content;
    }

    let title: string;
    let icon: string;;

    // T4T-639
    // set the values delta's in the two differnt links
    if (resourceType === ResourceType.AccessibilityStrategy) {
      title = "Accessibility Strategy";
      icon = `<i class="far fa-universal-access"></i>`;
    }
    else {
      title = "Formative Assessment Strategy";
      icon = `<sbdl-icon icon="strategies"></sbdl-icon>`;
    }

    // loop thur each strategy
    for (const strategy of strategies) {

      // if the strategy has parentheses, change them to encoded.
      var replacedStrategy = this.replaceParentheses(strategy.title.trim());

      // test if the strategy value has changed, if not add back the regex expression for beginning of word
      if (replacedStrategy === strategy.title.trim())
        replacedStrategy = '\\b' + replacedStrategy + '\\b';

      // replace the strategy text with the link
      content = content.replace(new RegExp( replacedStrategy , 'gui'),
      `<sbdl-tooltip title="` + title + `"
                    class="strategy-link"
                    text="${strategy.description}"
                    readMoreUrl="/resource/${strategy.id}"
                    style="white-space:nowrap;">` + 
                    icon +
        `&nbsp;<span class="gradient-hover">${strategy.title}</span
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

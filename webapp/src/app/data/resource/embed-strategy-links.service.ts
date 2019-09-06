import { Injectable } from '@angular/core';
import { ResourceModel } from './model/resource.model';
import { ResourceStrategyModel } from './model/resource-strategy.model';

@Injectable({
  providedIn: 'root'
})
export class EmbedStrategyLinksService {

  constructor() { }

  embedStrategyLinks(content: string, resource: ResourceModel): string {
    if(!content) {
      return content;
    }

    content = this.embedAccessibilityStrategies(content, resource.differentiation.accessibilityStrategies);
    content = this.embedFormativeStrategies(content, resource.formative.strategies);
    return content;
  }

  private embedAccessibilityStrategies(content: string, strategies: ResourceStrategyModel[]): string {
    if(!strategies || !strategies.length) {
      return content;
    }

    for(let strategy of strategies) {
      content = content.replace(strategy.title, 
        `<sbdl-tooltip title="Accessibility Strategy" text="${strategy.description}" readMoreUrl="${strategy.moreAboutUrl}" style="white-space:nowrap;"><i class="far fa-universal-access"></i> <span class="gradient-hover">${strategy.title}</span></sbdl-tooltip>`
      );
    }
    return content;
  }

  private embedFormativeStrategies(content: string, strategies: ResourceStrategyModel[]): string {
    if(!strategies || !strategies.length) {
      return content;
    }

    for(let strategy of strategies) {
      content = content.replace(strategy.title, 
        `<sbdl-tooltip title="Formative Assessment Strategy" text="${strategy.description}" readMoreUrl="${strategy.moreAboutUrl}" style="white-space:nowrap;"><sbdl-icon icon="strategies"></sbdl-icon> <span class="gradient-hover">${strategy.title}</span></sbdl-tooltip>`
      );
    }
    return content;
  }
}

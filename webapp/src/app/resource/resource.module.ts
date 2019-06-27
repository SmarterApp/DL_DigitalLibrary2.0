import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { HeaderComponent } from './instructional/header/header.component';
import { OverviewComponent } from './instructional/overview/overview.component';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';
import { ResourceComponent } from './resource-component.interface';
import { ResourceHostDirective } from './resource-host.directive';

export function getResourceComponents(resourceComponent: ResourceComponent) {
  return resourceComponent;
}

@NgModule({
  declarations: [ 
    HeaderComponent,
    OverviewComponent, 
    InstructionalResourceComponent,
    ResourceTypeStrategyComponent, 
    ResourceHostDirective
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [ InstructionalResourceComponent ]
})
export class ResourceModule { }

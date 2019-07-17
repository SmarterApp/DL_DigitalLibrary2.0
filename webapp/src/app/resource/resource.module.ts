import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { ResourceContentComponent } from './instructional/content/resource-content.component';
import { OverviewComponent } from './instructional/overview/overview.component';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';
import { ResourceComponent } from './resource-component.interface';
import { ResourceHostDirective } from './resource-host.directive';
import { OutlineComponent } from './outline/outline.component';
import { MetadataComponent } from './metadata/metadata.component';
import { JoinPipe } from '../pipes/join.pipe';
import { PipesModule } from '../pipes/pipes.module';

export function getResourceComponents(resourceComponent: ResourceComponent) {
  return resourceComponent;
}

@NgModule({
  declarations: [ 
    ResourceContentComponent,
    OverviewComponent, 
    InstructionalResourceComponent,
    ResourceTypeStrategyComponent, 
    ResourceHostDirective, 
    OutlineComponent, 
    MetadataComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  entryComponents: [ InstructionalResourceComponent, ResourceTypeStrategyComponent ]
})
export class ResourceModule { }

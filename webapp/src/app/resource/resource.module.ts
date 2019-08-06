import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import { ResourceContentComponent } from './instructional/content/resource-content.component';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { OverviewComponent } from './instructional/overview/overview.component';
import { MetadataComponent } from './metadata/metadata.component';
import { OutlineComponent } from './outline/outline.component';
import { ResourceComponent } from './resource-component.interface';
import { ResourceHostDirective } from './resource-host.directive';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';
import {TooltipModule} from 'ng2-tooltip-directive';
import { DifferentiationComponent } from './instructional/differentiation/differentiation.component';
import { FormativeComponent } from './instructional/formative/formative.component';
import { StepByStepComponent } from './instructional/step-by-step/step-by-step.component';

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
    MetadataComponent, DifferentiationComponent, FormativeComponent, StepByStepComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    PipesModule,
    SbdlCommonModule
  ],
  entryComponents: [ InstructionalResourceComponent, ResourceTypeStrategyComponent ]
})
export class ResourceModule { }

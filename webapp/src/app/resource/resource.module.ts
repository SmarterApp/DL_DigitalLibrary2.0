import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import { AttachmentsComponent } from './instructional/attachments/attachments.component';
import { ResourceContentComponent } from './instructional/content/resource-content.component';
import { DifferentiationComponent } from './instructional/differentiation/differentiation.component';
import { FormativeComponent } from './instructional/formative/formative.component';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { OverviewComponent } from './instructional/overview/overview.component';
import { StepByStepComponent } from './instructional/step-by-step/step-by-step.component';
import { MetadataComponent } from './metadata/metadata.component';
import { OutlineComponent } from './outline/outline.component';
import { ProfessionalResourceComponent } from './professional-resource/professional-resource.component';
import { ResourceComponent } from './resource-component.interface';
import { ResourceHostDirective } from './resource-host.directive';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';

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
    MetadataComponent, 
    DifferentiationComponent, 
    FormativeComponent, 
    StepByStepComponent, 
    AttachmentsComponent, 
    ProfessionalResourceComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    PipesModule,
    SbdlCommonModule
  ],
  entryComponents: [ 
    InstructionalResourceComponent, 
    ProfessionalResourceComponent, 
    ResourceTypeStrategyComponent 
  ]
})
export class ResourceModule { }

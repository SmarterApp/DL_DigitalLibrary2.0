import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import { ActionsComponent } from './components/actions/actions.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { FormativeComponent } from './components/formative/formative.component';
import { HeaderComponent } from './components/header/header.component';
import { StepByStepComponent } from './components/step-by-step/step-by-step.component';
import { InstructionalContentComponent } from './instructional/content/instructional-content.component';
import { DifferentiationComponent } from './instructional/differentiation/differentiation.component';
import { GetStartedComponent } from './instructional/get-started/get-started.component';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { InstructionalMetadataComponent } from './instructional/metadata/instructional-metadata.component';
import { OutlineComponent } from './components/outline/outline.component';
import { ProfessionalResourceComponent } from './professional/professional-resource.component';
import { ResourceHostDirective } from './resource-host.directive';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';
import { ResourceComponent } from './resource.component';
import { ProfessionalContentComponent } from './professional/content/professional-content.component';

export function getResourceComponents(resourceComponent: ResourceComponent) {
  return resourceComponent;
}

@NgModule({
  declarations: [ 
    InstructionalContentComponent,
    GetStartedComponent,
    InstructionalResourceComponent,
    ResourceTypeStrategyComponent,
    ResourceHostDirective,
    OutlineComponent,
    InstructionalMetadataComponent,
    DifferentiationComponent,
    FormativeComponent,
    StepByStepComponent,
    AttachmentsComponent,
    ProfessionalResourceComponent,
    ActionsComponent,
    HeaderComponent,
    ProfessionalContentComponent
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

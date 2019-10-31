import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import { ActionsComponent } from './components/actions/actions.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { DifferentiationComponent } from './instructional/differentiation/differentiation.component';
import { EducationalDetailsComponent } from './components/resource-properties/educational-details.component';
import { FormativeComponent as InstructionalFormativeComponent } from './instructional/formative/formative.component';
import { GetStartedComponent } from './instructional/get-started/get-started.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructionalContentComponent } from './instructional/content/instructional-content.component';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { ProfessionalContentComponent } from './professional/content/professional-content.component';
import { ProfessionalResourceComponent } from './professional/professional-resource.component';
import { FormativeListComponent as ProfessionalFormativeListComponent } from './professional/formative-list/formative-list.component';
import { OverviewComponent as ProfessionalLearningOverviewComponent } from './professional/overview/overview.component';
import { OutlineComponent } from './components/outline/outline.component';
import { ResourceComponent } from './resource.component';
import { ResourceHostDirective } from './resource-host.directive';
import { ResourcePropertiesComponent } from './components/resource-properties/resource-properties.component';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';
import { SectionComponent } from './components/section/section.component';
import { StepByStepComponent } from './components/step-by-step/step-by-step.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

export function getResourceComponents(resourceComponent: ResourceComponent) {
  return resourceComponent;
}

@NgModule({
  declarations: [
    ActionsComponent,
    AttachmentsComponent,
    DifferentiationComponent,
    EducationalDetailsComponent,
    GetStartedComponent,
    HeaderComponent,
    InstructionalContentComponent,
    InstructionalFormativeComponent,
    InstructionalResourceComponent,
    OutlineComponent,
    ProfessionalContentComponent,
    ProfessionalLearningOverviewComponent,
    ProfessionalResourceComponent,
    ProfessionalFormativeListComponent,
    InstructionalResourceComponent,
    ResourceHostDirective,
    ResourcePropertiesComponent,
    ResourceTypeStrategyComponent,
    SectionComponent,
    StepByStepComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SbdlCommonModule,
    RouterModule
  ],
  entryComponents: [
    // Resource components are loaded dynamically so they need to be explicitly set here
    // in order to be used.
    InstructionalResourceComponent,
    ProfessionalResourceComponent,
    ResourceTypeStrategyComponent,
  ]
})
export class ResourceModule { }

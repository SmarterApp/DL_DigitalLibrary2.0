import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';
import { NotesModule } from '../notes/notes.module';
import { SbdlCommonModule } from '../common/common.module';

import { ResourceHostDirective } from './resource-host.directive';
import { ResourceTypeStrategyComponent } from './resource-type-strategy.component';

import { ActionsComponent } from './components/actions/actions.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { DifferentiationComponent } from './instructional/differentiation/differentiation.component';
import { DifferentiationContentComponent } from './instructional/differentiation/differentiation-content.component';
import { EducationalDetailsComponent } from './components/resource-properties/educational-details.component';
import { FormativeComponent as InstructionalFormativeComponent } from './instructional/formative/formative.component';
import { FormativeContentComponent as InstructionalFormativeContentComponent } from './instructional/formative/formative-content.component';
import { GetStartedComponent } from './instructional/get-started/get-started.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructionalContentComponent } from './instructional/content/instructional-content.component';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { ProfessionalContentComponent } from './professional/content/professional-content.component';
import { ProfessionalResourceComponent } from './professional/professional-resource.component';
import { FormativeListComponent as ProfessionalFormativeListComponent } from './professional/formative-list/formative-list.component';
import { OverviewComponent as ProfessionalLearningOverviewComponent } from './professional/overview/overview.component';
import { OutlineComponent } from './components/outline/outline.component';
import { EnhancedPrintingComponent } from './components/outline/enhanced-printing/enhanced-printing.component';
import { PrintCheckboxComponent } from './components/outline/enhanced-printing/print-checkbox.component';
import { ResourceComponent } from './resource.component';
import { ResourcePropertiesComponent } from './components/resource-properties/resource-properties.component';
import { SimpleSectionComponent } from './components/simple-section/simple-section.component';
import { StepByStepComponent } from './components/step-by-step/step-by-step.component';
import { StepComponent } from './components/step-by-step/step.component';
import { StrategyReferenceListComponent } from './components/strategy-reference-list/strategy-reference-list.component';

export function getResourceComponents(resourceComponent: ResourceComponent) {
  return resourceComponent;
}

@NgModule({
  declarations: [
    ActionsComponent,
    AttachmentsComponent,
    DifferentiationComponent,
    DifferentiationContentComponent,
    EducationalDetailsComponent,
    GetStartedComponent,
    HeaderComponent,
    InstructionalContentComponent,
    InstructionalFormativeComponent,
    InstructionalFormativeContentComponent,
    InstructionalResourceComponent,
    EnhancedPrintingComponent,
    PrintCheckboxComponent,
    OutlineComponent,
    ProfessionalContentComponent,
    ProfessionalLearningOverviewComponent,
    ProfessionalResourceComponent,
    ProfessionalFormativeListComponent,
    InstructionalResourceComponent,
    ResourceHostDirective,
    ResourcePropertiesComponent,
    ResourceTypeStrategyComponent,
    SimpleSectionComponent,
    StepByStepComponent,
    StepComponent,
    StrategyReferenceListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    PipesModule,
    NotesModule,
    SbdlCommonModule
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

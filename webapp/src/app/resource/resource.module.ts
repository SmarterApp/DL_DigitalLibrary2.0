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
import { EducationalDetailsComponent } from './components/resource-properties/educational-details.component';
import { HeaderComponent } from './components/header/header.component';
import { OutlineComponent } from './components/outline/outline.component';
import { EnhancedPrintingComponent } from './components/outline/enhanced-printing/enhanced-printing.component';
import { PrintCheckboxComponent } from './components/outline/enhanced-printing/print-checkbox.component';
import { ResourcePropertiesComponent } from './components/resource-properties/resource-properties.component';
import { SimpleSectionComponent } from './components/simple-section/simple-section.component';
import { StepByStepComponent } from './components/step-by-step/step-by-step.component';
import { StepComponent } from './components/step-by-step/step.component';
import { StrategyReferenceListComponent } from './components/strategy-reference-list/strategy-reference-list.component';

import { InstructionalContentComponent } from './instructional/content/instructional-content.component';
import { InstructionalDifferentiationComponent } from './instructional/differentiation/instructional-differentiation.component';
import { InstructionalDifferentiationContentComponent } from './instructional/differentiation/instructional-differentiation-content.component';
import { InstructionalFormativeComponent } from './instructional/formative/instructional-formative.component';
import { InstructionalFormativeContentComponent } from './instructional/formative/instructional-formative-content.component';
import { InstructionalGetStartedComponent } from './instructional/get-started/instructional-get-started.component';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';

import { ProfessionalContentComponent } from './professional/content/professional-content.component';
import { ProfessionalFormativeListComponent } from './professional/formative-list/professional-formative-list.component';
import { ProfessionalOverviewComponent } from './professional/overview/professional-overview.component';
import { ProfessionalResourceComponent } from './professional/professional-resource.component';

import { StrategyContentComponent } from './strategy/content/strategy-content.component';
import { StrategyInActionAccessibilityComponent } from './strategy/strategy-in-action/strategy-in-action-accessibility.component';
import { StrategyInActionFormativeComponent } from './strategy/strategy-in-action/strategy-in-action-formative.component';
import { StrategyOverviewComponent } from './strategy/overview/strategy-overview.component';
import { StrategyPropertiesComponent } from './strategy/properties/strategy-properties.component';
import { StrategyResourceComponent } from './strategy/strategy-resource.component';

@NgModule({
  declarations: [

    // Components
    ActionsComponent,
    AttachmentsComponent,
    EducationalDetailsComponent,
    HeaderComponent,
    OutlineComponent,
    EnhancedPrintingComponent,
    PrintCheckboxComponent,
    ResourceHostDirective,
    ResourcePropertiesComponent,
    ResourceTypeStrategyComponent,
    SimpleSectionComponent,
    StepByStepComponent,
    StepComponent,
    StrategyReferenceListComponent,

    InstructionalContentComponent,
    InstructionalDifferentiationComponent,
    InstructionalDifferentiationContentComponent,
    InstructionalFormativeComponent,
    InstructionalFormativeContentComponent,
    InstructionalGetStartedComponent,
    InstructionalResourceComponent,

    ProfessionalContentComponent,
    ProfessionalFormativeListComponent,
    ProfessionalOverviewComponent,
    ProfessionalResourceComponent,

    StrategyContentComponent,
    StrategyInActionAccessibilityComponent,
    StrategyInActionFormativeComponent,
    StrategyOverviewComponent,
    StrategyPropertiesComponent,
    StrategyResourceComponent
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
    StrategyResourceComponent,
    ResourceTypeStrategyComponent,
  ]
})
export class ResourceModule { }

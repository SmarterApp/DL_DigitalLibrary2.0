import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import { LandingComponent } from './landing.component';
import { LandingActionsComponent } from './landing-actions/landing-actions.component';
import { ResourceModule } from '../resource/resource.module';
import { FormsModule } from '@angular/forms';
import { LandingDiveDeeperComponent } from './landing-dive-deeper/landing-dive-deeper.component';
import { LandingSampleItemsComponent } from './landing-sample-items/landing-sample-items.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingActionsComponent,
    LandingDiveDeeperComponent,
    LandingSampleItemsComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    PipesModule,
    ResourceModule,
    RouterModule,
    A11yModule,
    OverlayModule,
    FormsModule
  ]
})
export class LandingModule { }

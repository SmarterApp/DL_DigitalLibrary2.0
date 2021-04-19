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

@NgModule({
  declarations: [
    LandingComponent,
    LandingActionsComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    PipesModule,
    ResourceModule,
    RouterModule,
    A11yModule,
    OverlayModule
  ]
})
export class LandingModule { }

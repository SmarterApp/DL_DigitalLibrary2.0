import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SbdlCommonModule} from '../common/common.module';
import {PipesModule} from '../pipes/pipes.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
//import {LandingComponent} from './landing.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SbdlCommonModule,
    PipesModule,
    RouterModule,
    OverlayModule
  ],
  exports: [
    
  ],
})
export class LandingModule { }

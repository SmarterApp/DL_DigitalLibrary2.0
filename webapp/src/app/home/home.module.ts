import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PipesModule } from '../pipes/pipes.module';
import { ResourceModule } from '../resource/resource.module';
import { SearchModule } from '../search/search.module';
import {AblePlayerComponentFloatTS} from 'src/app/common/controls/able-player-float-ts/able-player-float-ts.component';

@NgModule({
  declarations: [HomeComponent,
    AblePlayerComponentFloatTS],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    ResourceModule,
    SearchModule
  ]
})
export class HomeModule { }

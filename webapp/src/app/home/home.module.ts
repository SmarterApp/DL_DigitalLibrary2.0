import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PipesModule } from '../pipes/pipes.module';
import { ResourceModule } from '../resource/resource.module';
import { SearchModule } from '../search/search.module';
import { LandingModule } from '../landing/landing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    ResourceModule,
    SearchModule,
    LandingModule
  ]
})
export class HomeModule { }

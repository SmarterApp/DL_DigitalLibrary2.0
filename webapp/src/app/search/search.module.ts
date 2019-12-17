import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import { SearchResultsComponent } from './results/search-results.component';
import { SearchComponent } from './search.component';
import { ResourceModule } from '../resource/resource.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SbdlCommonModule,
    PipesModule,
    ResourceModule,
    RouterModule
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }

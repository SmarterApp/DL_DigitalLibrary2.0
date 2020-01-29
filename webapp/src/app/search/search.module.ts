import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SbdlCommonModule} from '../common/common.module';
import {PipesModule} from '../pipes/pipes.module';
import {SearchResultsComponent} from './results/search-results.component';
import {SearchResultCardComponent} from './results/card/search-result-card.component';
import {SearchComponent} from './search.component';
import {ResourceModule} from '../resource/resource.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SbdlCommonModule,
    PipesModule,
    ResourceModule,
    RouterModule
  ],
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    SearchResultCardComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {}

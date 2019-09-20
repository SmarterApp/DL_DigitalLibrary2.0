import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbdlCommonModule } from '../common/common.module';
import { PipesModule } from '../pipes/pipes.module';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent, ResultsComponent],
  imports: [
    CommonModule,
    SbdlCommonModule,
    PipesModule
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }

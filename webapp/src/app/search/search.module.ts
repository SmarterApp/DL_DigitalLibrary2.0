import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SbdlCommonModule } from '../common/common.module';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [SearchComponent, ResultsComponent],
  imports: [
    CommonModule,
    SbdlCommonModule
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }

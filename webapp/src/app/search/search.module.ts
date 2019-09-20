import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SbdlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SbdlCommonModule
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }

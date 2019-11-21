import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbdlCommonModule } from '../common/common.module';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';

@NgModule({
  declarations: [
    BookmarkListComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    RouterModule
  ]
})
export class BookmarksModule {}

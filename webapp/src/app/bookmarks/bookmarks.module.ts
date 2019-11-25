import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbdlCommonModule } from '../common/common.module';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkCardComponent } from './bookmark-card/bookmark-card.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    BookmarkListComponent,
    BookmarkCardComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    PipesModule,
    RouterModule
  ]
})
export class BookmarksModule {}

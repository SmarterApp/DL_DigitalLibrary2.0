import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbdlCommonModule } from '../common/common.module';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { ResourceModule } from '../resource/resource.module';

@NgModule({
  declarations: [
    BookmarkListComponent,
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    PipesModule,
    ResourceModule,
    RouterModule
  ]
})
export class BookmarksModule {}

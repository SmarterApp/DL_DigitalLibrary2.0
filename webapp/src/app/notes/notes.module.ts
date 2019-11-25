import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbdlCommonModule } from '../common/common.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule
  ],
  exports: [
    NotesComponent,
    NoteComponent
  ]
})
export class NotesModule {}

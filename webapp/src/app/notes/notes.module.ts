import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SbdlCommonModule } from '../common/common.module';
import { NotesComponent } from './notes.component';
import { NoteComponent } from './note/note.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent
  ],
  imports: [
    FormsModule,
    SbdlCommonModule,
    CommonModule,
    AngularEditorModule
  ],
  exports: [
    NotesComponent,
    NoteComponent
  ]
})
export class NotesModule {}

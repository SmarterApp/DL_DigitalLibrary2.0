import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';
import { ReplaceNullImagePipe } from './replace-null-image.pipe';
import { ResourceTypePipe } from './resource-type.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SlugifyPipe } from './slugify.pipe';

@NgModule({
    declarations: [
      JoinPipe,
      FileTypeIconPipe,
      ReplaceNullImagePipe,
      ResourceTypePipe,
      SafeUrlPipe,
      SlugifyPipe
    ],
    exports: [
      JoinPipe,
      FileTypeIconPipe,
      ReplaceNullImagePipe,
      ResourceTypePipe,
      SafeUrlPipe,
      SlugifyPipe
    ]
})
export class PipesModule { }

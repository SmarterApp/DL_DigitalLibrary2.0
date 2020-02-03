import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';
import { ReplaceNullImagePipe } from './replace-null-image.pipe';
import { ResourceTypePipe } from './resource-type.pipe';
import { TrustUrlPipe } from './safe-url.pipe';
import { SlugifyPipe } from './slugify.pipe';

@NgModule({
    declarations: [
      JoinPipe,
      FileTypeIconPipe,
      ReplaceNullImagePipe,
      ResourceTypePipe,
      TrustUrlPipe,
      SlugifyPipe
    ],
    exports: [
      JoinPipe,
      FileTypeIconPipe,
      ReplaceNullImagePipe,
      ResourceTypePipe,
      TrustUrlPipe,
      SlugifyPipe
    ]
})
export class PipesModule { }

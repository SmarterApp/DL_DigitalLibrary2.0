import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';
import { ReplaceNullImagePipe } from './replace-null-image.pipe';
import { ResourceTypePipe } from './resource-type.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
    declarations: [
      JoinPipe,
      FileTypeIconPipe,
      ReplaceNullImagePipe,
      ResourceTypePipe,
      SafeUrlPipe
    ],
    exports: [
      JoinPipe,
      FileTypeIconPipe,
      ReplaceNullImagePipe,
      ResourceTypePipe,
      SafeUrlPipe
    ]
})
export class PipesModule { }

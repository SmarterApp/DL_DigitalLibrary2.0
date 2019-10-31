import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { ShortenStandardTitlePipe } from './shorten-standard-title.pipe';
import { ResourceTypePipe } from './resource-type.pipe';

@NgModule({
    declarations: [ JoinPipe, FileTypeIconPipe, SafeUrlPipe, ResourceTypePipe, ShortenStandardTitlePipe ],
    exports: [ JoinPipe, FileTypeIconPipe, SafeUrlPipe, ResourceTypePipe, ShortenStandardTitlePipe ]
})
export class PipesModule {
}

import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { ResourceTypePipe } from './resource-type.pipe';

@NgModule({
    declarations: [ JoinPipe, FileTypeIconPipe, SafeUrlPipe, ResourceTypePipe ],
    exports: [ JoinPipe, FileTypeIconPipe, SafeUrlPipe, ResourceTypePipe ]
})
export class PipesModule {
}

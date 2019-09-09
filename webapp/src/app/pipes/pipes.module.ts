import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
    declarations: [ JoinPipe, FileTypeIconPipe, SafeUrlPipe ],
    exports: [ JoinPipe, FileTypeIconPipe, SafeUrlPipe ]
})
export class PipesModule {
}

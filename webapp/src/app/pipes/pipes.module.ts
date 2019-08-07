import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { FileTypeIconPipe } from './file-type-icon.pipe';

@NgModule({
    declarations: [ JoinPipe, FileTypeIconPipe ],
    exports: [ JoinPipe, FileTypeIconPipe ]
})
export class PipesModule {
}

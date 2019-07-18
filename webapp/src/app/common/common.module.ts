import { NgModule } from '@angular/core';
import { SvgDefsComponent } from './app-icon/svg-defs.component';
import { IconComponent } from './app-icon/icon.component';
@NgModule({
    declarations: [
        IconComponent,
        SvgDefsComponent
    ],
    exports: [
        IconComponent,
        SvgDefsComponent,
    ]
})
export class SbdlCommonModule {
}

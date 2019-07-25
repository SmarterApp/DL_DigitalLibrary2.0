import { NgModule } from '@angular/core';
import { IconComponent } from './app-icon/icon.component';
import { SvgDefsComponent } from './app-icon/svg-defs.component';
import { ButtonComponent } from './controls/button/button.component';
import { ButtonIconComponent } from './controls/button-icon/button-icon.component';
@NgModule({
    declarations: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        SvgDefsComponent
    ],
    exports: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        SvgDefsComponent
    ]
})
export class SbdlCommonModule {
}

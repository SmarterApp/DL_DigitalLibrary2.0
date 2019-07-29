import { NgModule } from '@angular/core';
import { IconComponent } from './app-icon/icon.component';
import { SvgDefsComponent } from './app-icon/svg-defs.component';
import { ButtonComponent } from './controls/button/button.component';
import { ButtonIconComponent } from './controls/button-icon/button-icon.component';
import { TooltipComponent } from './controls/tooltip/tooltip.component';
import { TooltipModule } from 'ng2-tooltip-directive';
@NgModule({
    imports: [ TooltipModule ],
    declarations: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        SvgDefsComponent,
        TooltipComponent
    ],
    exports: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        SvgDefsComponent,
        TooltipComponent
    ]
})
export class SbdlCommonModule {
}

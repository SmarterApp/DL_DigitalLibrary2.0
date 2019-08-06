import { NgModule } from '@angular/core';
import { IconComponent } from './app-icon/icon.component';
import { SvgDefsComponent } from './app-icon/svg-defs.component';
import { ButtonComponent } from './controls/button/button.component';
import { ButtonIconComponent } from './controls/button-icon/button-icon.component';
import { TooltipComponent } from './controls/tooltip/tooltip.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { PopoverComponent } from './controls/popover/popover.component';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './controls/read-more/read-more.component';
@NgModule({
    imports: [ TooltipModule, CommonModule ],
    declarations: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        SvgDefsComponent,
        TooltipComponent,
        PopoverComponent,
        ReadMoreComponent
    ],
    exports: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        ReadMoreComponent,
        SvgDefsComponent,
        TooltipComponent
    ],
    entryComponents: [ PopoverComponent ]
})
export class SbdlCommonModule {
}

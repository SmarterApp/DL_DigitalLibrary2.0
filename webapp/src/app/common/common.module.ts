import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { IconComponent } from './app-icon/icon.component';
import { SvgDefsComponent } from './app-icon/svg-defs.component';
import { ButtonComponent } from './controls/button/button.component';
import { ButtonIconComponent } from './controls/button-icon/button-icon.component';
import { TooltipComponent } from './controls/tooltip/tooltip.component';
import { PopoverComponent } from './controls/popover/popover.component';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './controls/read-more/read-more.component';
import { DynamicHTMLComponent } from './controls/dynamic/dynamic-html.component';
import { DynamicHTMLRenderer } from './controls/dynamic/dynamic-html-render';
import { DynamicHTMLOptions } from './controls/dynamic/options';

// This object contains the components which can be loaded dyanmically via
// the dynamic-html component.
const dynamicOptions = {
    components: [
        { component: TooltipComponent, selector: 'sbdl-tooltip' },
        { component: IconComponent, selector: 'sbdl-icon' }
    ]
};

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        SvgDefsComponent,
        TooltipComponent,
        PopoverComponent,
        ReadMoreComponent,
        DynamicHTMLComponent
    ],
    exports: [
        ButtonComponent,
        ButtonIconComponent,
        IconComponent,
        ReadMoreComponent,
        SvgDefsComponent,
        TooltipComponent,
        DynamicHTMLComponent
    ],
    providers: [
        DynamicHTMLRenderer,
        { provide: DynamicHTMLOptions, useValue: dynamicOptions },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: dynamicOptions.components, multi: true },
    ],
    entryComponents: [ PopoverComponent ]
})
export class SbdlCommonModule {
}

import {NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {PipesModule} from '../pipes/pipes.module';
import {IconComponent} from './icon/icon.component';
import {SvgDefsComponent} from './icon/svg-defs.component';
import {ButtonComponent} from './controls/button/button.component';
import {ButtonIconComponent} from './controls/button-icon/button-icon.component';
import {TooltipComponent} from './controls/tooltip/tooltip.component';
import {PopoverComponent} from './controls/popover/popover.component';
import {ReadMoreComponent} from './controls/read-more/read-more.component';
import {DynamicHTMLComponent} from './controls/dynamic/dynamic-html.component';
import {DynamicHTMLRenderer} from './controls/dynamic/dynamic-html-render';
import {DynamicHTMLOptions} from './controls/dynamic/options';
import {TextFieldComponent} from './controls/text-field/text-field.component';
import {FilterChipsetComponent} from './controls/filter-chipset/filter-chipset.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from '../layout/login/login.component';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {CategorizedResourceSummaryComponent} from './categorized-resource-summary/categorized-resource-summary.component';
import {ResourceTypeIconComponent} from './resource-type-icon/resource-type-icon.component';
import {AblePlayerComponentFloatTS} from 'src/app/common/controls/able-player-float-ts/able-player-float-ts.component';

// This object contains the components which can be loaded dyanmically via
// the dynamic-html component.
const dynamicOptions = {
  components: [
    {component: TooltipComponent, selector: 'sbdl-tooltip'},
    {component: IconComponent, selector: 'sbdl-icon'}
  ]
};

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    ReactiveFormsModule,
    A11yModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    ButtonComponent,
    ButtonIconComponent,
    IconComponent,
    SvgDefsComponent,
    TooltipComponent,
    PopoverComponent,
    ReadMoreComponent,
    DynamicHTMLComponent,
    TextFieldComponent,
    FilterChipsetComponent,
    ConfirmationDialogComponent,
    LoginComponent,
    CategorizedResourceSummaryComponent,
    ResourceTypeIconComponent,
    AblePlayerComponentFloatTS
  ],
  exports: [
    ButtonComponent,
    ButtonIconComponent,
    CategorizedResourceSummaryComponent,
    IconComponent,
    ReadMoreComponent,
    SvgDefsComponent,
    TooltipComponent,
    DynamicHTMLComponent,
    TextFieldComponent,
    FilterChipsetComponent,
    ConfirmationDialogComponent,
    ResourceTypeIconComponent,
    AblePlayerComponentFloatTS
  ],
  providers: [
    DynamicHTMLRenderer,
    {provide: DynamicHTMLOptions, useValue: dynamicOptions},
    {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: dynamicOptions.components, multi: true},
  ],
  entryComponents: [PopoverComponent]
})
export class SbdlCommonModule {}

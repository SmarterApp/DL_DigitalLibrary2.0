import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { SbdlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    AppContainerComponent,
    HeaderComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

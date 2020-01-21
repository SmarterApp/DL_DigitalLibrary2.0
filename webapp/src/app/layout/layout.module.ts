import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { SbdlCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    AppContainerComponent,
    FooterComponent,
    ErrorComponent,
    NavigationComponent
  ],
  imports: [
    SbdlCommonModule,
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

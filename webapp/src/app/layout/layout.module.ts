import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppContainerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

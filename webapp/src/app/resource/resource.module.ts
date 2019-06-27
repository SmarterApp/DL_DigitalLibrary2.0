import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ResourceComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class ResourceModule { }

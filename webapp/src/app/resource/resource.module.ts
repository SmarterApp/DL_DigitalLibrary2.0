import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [ResourceComponent, HeaderComponent, OverviewComponent],
  imports: [
    CommonModule
  ]
})
export class ResourceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResourceModule } from '../resource/resource.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ResourceModule,
    SearchModule
  ]
})
export class HomeModule { }

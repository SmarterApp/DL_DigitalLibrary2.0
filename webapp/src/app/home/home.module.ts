import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    SearchModule,
    CommonModule
  ]
})
export class HomeModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/data/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [{ provide: DataService, useClass: environment.dataService }]
})
export class DataModule { }

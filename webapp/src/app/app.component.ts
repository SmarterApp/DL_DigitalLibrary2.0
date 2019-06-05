import { Component } from '@angular/core';
import { DataService } from './data/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sbdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {  }
  title = 'sb-digital-library';
  
}

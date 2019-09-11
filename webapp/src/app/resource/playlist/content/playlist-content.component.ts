import { Component } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';

@Component({
  selector: 'sbdl-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class PlaylistContentComponent extends ResourceContentComponent {
  constructor() { 
    super();
  }
}

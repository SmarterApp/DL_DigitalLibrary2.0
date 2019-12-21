import { Component, Input } from '@angular/core';
import { ResourceContentComponent } from '../../resource-content.component';
import { PlaylistResource } from '../../../data/resource/model/playlist.model';

@Component({
  selector: 'sbdl-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrls: ['./../../resource-content.component.scss']
})
export class PlaylistContentComponent extends ResourceContentComponent {

  @Input()
  resource: PlaylistResource;

  constructor() {
    super();
   }
}

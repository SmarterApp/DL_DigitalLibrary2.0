import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ConnectionsPlaylistReference} from '../../../data/resource/model/instructional.model';


@Component({
  selector: 'sbdl-instructional-playlists',
  templateUrl: './instructional-playlists.component.html',
  styleUrls: ['./instructional-playlists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionalPlaylistsComponent {

  @Input()
  playlists: ConnectionsPlaylistReference[];

  @Input()
  subjectCode: string;

}

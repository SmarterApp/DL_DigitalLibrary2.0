import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ResourceComponent } from '../resource.component';
import { PlaylistResource } from '../../data/resource/model/playlist.model';

@Component({
  selector: 'sbdl-resource',
  templateUrl: './playlist-resource.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class PlaylistResourceComponent extends ResourceComponent {

  @Input()
  resource: PlaylistResource;

  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer, titleService: Title) {
    super(cdRef, sanitizer, titleService);
   }
}

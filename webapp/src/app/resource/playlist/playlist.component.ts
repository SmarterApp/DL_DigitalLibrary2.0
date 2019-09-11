import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResourceComponent } from '../resource.component';

@Component({
  selector: 'sbdl-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class PlaylistComponent extends ResourceComponent {
  constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer) {
    super(cdRef, sanitizer);
   }
}

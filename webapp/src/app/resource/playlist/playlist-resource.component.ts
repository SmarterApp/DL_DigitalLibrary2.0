import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { OktaAuthService } from '@okta/okta-angular';
import { UserService } from 'src/app/data/user/user.service';
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

  constructor(cdRef: ChangeDetectorRef,
              sanitizer: DomSanitizer,
              titleService: Title,
              location: Location,
              oktaAuthService: OktaAuthService,
              router: Router,
              userService: UserService) {

    super(cdRef, sanitizer, titleService, location, oktaAuthService, router, userService);
  }
}

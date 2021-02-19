import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSection, DocumentSectionType } from '../../components/outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { PlaylistResource } from '../../../data/resource/model/playlist.model';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';
import { UserService } from 'src/app/data/user/user.service';
import { Observable } from 'rxjs';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-playlist-background',
  templateUrl: './playlist-background.component.html',
  styleUrls: ['./playlist-background.component.scss', './../../printable-section.component.scss']
})
export class PlaylistBackgroundComponent extends PrintableSectionComponent 
    implements AfterViewInit, OnInit {

  @Input()
  overview: {
    description: string;
    importance: string;
    academicVocabulary: string;
  };

  @Input()
  type: ResourceType;

  @Input()
  prefilteredIaipLink: string;

  hasIaipAccess$: Observable<boolean>;
  isInterimItemPortalVisable: boolean = false;

  constructor(sanitizer: DomSanitizer,
    private userService: UserService) {
    super(sanitizer, DocumentSectionType.Overview);

    this.hasIaipAccess$ = userService.hasIaipRole;
  }

  ngOnInit() {

    if (this.prefilteredIaipLink) {
      if (this.type === ResourceType.ConnectionsPlaylist && 
        this.prefilteredIaipLink.length > 0) {
        this.isInterimItemPortalVisable = true;
      }
    }
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        selectedForPrint: true,
        title: 'IAB Background',
        fontAwesomeIcon: 'fa-check-circle',
        type: DocumentSectionType.Overview
      });
    }
  }

  openInterimItems() {
    window.open(this.prefilteredIaipLink, '_blank');
  }
}

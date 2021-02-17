import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentSection, DocumentSectionType } from '../../components/outline/document-outline.model';
import { PrintableSectionComponent } from '../../printable-section.component';
import { PlaylistResource } from '../../../data/resource/model/playlist.model';
import { PlaylistTopic } from '../../../data/resource/model/playlist-topic.model';
import { UserService } from 'src/app/data/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sbdl-playlist-background',
  templateUrl: './playlist-background.component.html',
  styleUrls: ['./playlist-background.component.scss', './../../printable-section.component.scss']
})
export class PlaylistBackgroundComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  overview: {
    description: string;
    importance: string;
    academicVocabulary: string;
  };
  constructor(sanitizer: DomSanitizer,
    private userService: UserService) {
    super(sanitizer, DocumentSectionType.Overview);

    this.hasIaipAccess$ = userService.hasIaipRole;
  }

  // TODOJR: in progress
  hasIaipAccess$: Observable<boolean>;
  interimItemPortalUrl = "https://sampleitems.smarterbalanced.org/BrowseItems/?Claim=MATH3&Subject=MATH&Grade=1&Target=A";

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
    window.open(this.interimItemPortalUrl, '_blank');
  }
}

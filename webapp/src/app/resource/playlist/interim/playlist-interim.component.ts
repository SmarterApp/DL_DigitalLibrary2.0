import {AfterViewInit, Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PrintableSectionComponent} from '../../printable-section.component';
import {DocumentSectionType} from '../../components/outline/document-outline.model';
import {TenantThemeService} from 'src/app/data/tenant-theme/tenant-theme.service';

@Component({
  selector: 'sbdl-playlist-interim',
  templateUrl: './playlist-interim.component.html',
  styleUrls: ['./playlist-interim.component.scss', '../../printable-section.component.scss']
})
export class PlaylistInterimComponent extends PrintableSectionComponent implements AfterViewInit {

  @Input()
  content: string;

  contactUri$: Observable<string>;

  constructor(
    sanitizer: DomSanitizer,
    themeService: TenantThemeService
  ) {
    super(sanitizer, DocumentSectionType.PlaylistInterim);

    this.contactUri$ = themeService.currentTenantTheme$.pipe(
      map(t => t.contactUri));
  }

  ngAfterViewInit() {
    if (this.headerElement) {
      this.sectionLoaded.emit({
        canPrint: true,
        component: this,
        elementRef: this.headerElement.nativeElement,
        fontAwesomeIcon: 'fa-question-circle',
        selectedForPrint: true,
        title: 'What are Interim Assessments?',
        type: DocumentSectionType.PlaylistInterim
      });
    }
  }
}

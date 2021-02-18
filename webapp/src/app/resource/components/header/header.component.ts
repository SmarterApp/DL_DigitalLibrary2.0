import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { Grade } from 'src/app/data/resource/model/grade.model';
import { UserService } from 'src/app/data/user/user.service';
import { Observable } from 'rxjs';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  resource: Resource;

  @Input()
  showIconsCol = false;

  @Output()
  attachmentsClicked = new EventEmitter();

  grade: Grade;
  fullUrl: string;
  // TODOJR: in progress
  hasIaipAccess$: Observable<boolean>;
  prefilteredIaipLink = "https://sampleitems.smarterbalanced.org/BrowseItems/?Claim=MATH3&Subject=MATH&Grade=1&Target=A";
  isInterimItemPortalVisable: boolean = false;

  get properties() {
    return this.resource.properties;
  }

  constructor(@Inject('Window') private window: Window,
  private userService: UserService) {
    this.hasIaipAccess$ = userService.hasIaipRole;
  }

  ngOnInit() {
    if (this.showIconsCol && this.resource.properties.grades.length > 0) {
      this.grade = this.resource.properties.grades[0];
    }

    this.fullUrl = this.window.location.href;

    
    if (this.resource.type === ResourceType.ConnectionsPlaylist && 
      this.prefilteredIaipLink.length > 0) {
      this.isInterimItemPortalVisable = true;
    }
  }

  emitAttachmentsClicked() {
    this.attachmentsClicked.emit();
  }

  openInterimItems() {
    window.open(this.prefilteredIaipLink, '_blank');
  }
}

import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { Grade } from 'src/app/data/resource/model/grade.model';
import { UserService } from 'src/app/data/user/user.service';
import { Observable } from 'rxjs';

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

  get properties() {
    return this.resource.properties;
  }

  constructor(@Inject('Window') private window: Window,
  private userService: UserService) {
    this.hasIaipAccess$ = userService.hasIaipRole;
  }

  // TODOJR: in progress
  hasIaipAccess$: Observable<boolean>;
  interimItemPortalUrl = "https://sampleitems.smarterbalanced.org/BrowseItems/?Claim=MATH3&Subject=MATH&Grade=1&Target=A";

  ngOnInit() {
    if (this.showIconsCol && this.resource.properties.grades.length > 0) {
      this.grade = this.resource.properties.grades[0];
    }

    this.fullUrl = this.window.location.href;
  }

  emitAttachmentsClicked() {
    this.attachmentsClicked.emit();
  }

  openInterimItems() {
    window.open(this.interimItemPortalUrl, '_blank');
  }
}

import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { UserService } from 'src/app/data/user/user.service';
import { ResourceComponent } from '../resource.component';
import { ProfessionalLearningResource } from '../../data/resource/model/professional-learning.model';

@Component({
  selector: 'sbdl-professional-resource',
  templateUrl: './professional-resource.component.html',
  styleUrls: ['./../resource.component.scss']
})
export class ProfessionalResourceComponent extends ResourceComponent {

  @Input()
  resource: ProfessionalLearningResource;

  constructor(cdRef: ChangeDetectorRef,
              sanitizer: DomSanitizer,
              titleService: Title,
              location: Location,
              userService: UserService) {

    super(cdRef, sanitizer, titleService, location, userService);
  }
}

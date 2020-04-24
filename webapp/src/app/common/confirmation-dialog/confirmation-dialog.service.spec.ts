import { TestBed } from '@angular/core/testing';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { PopoverService } from '../controls/popover/popover.service';
import { PopoverComponent } from '../controls/popover/popover.component';
import { IconComponent } from 'src/app/common/icon/icon.component';
import { Subscription } from 'rxjs';

const mockPopoverService = jasmine.createSpyObj('PopoverService', ['openOnBody']);

describe('ConfirmationDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ PopoverComponent, IconComponent ],
    providers: [
      { provide: PopoverService, useValue: mockPopoverService }
    ]
  }));

  it('should be created', () => {
    const service: ConfirmationDialogService = TestBed.get(ConfirmationDialogService);
    expect(service).toBeTruthy();
  });
});

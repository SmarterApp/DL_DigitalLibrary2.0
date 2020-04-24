import { Component, Input, OnInit, Type, ViewChild, Output, EventEmitter, ElementRef, ViewContainerRef } from '@angular/core';
import { Note } from '../../data/notes/model/note.model';
import { ConfirmationDialogService } from 'src/app/common/confirmation-dialog/confirmation-dialog.service';
import { ButtonComponent } from 'src/app/common/controls/button/button.component';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sbdl-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input()
  note: Note;

  @ViewChild('deleteButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  shareOverlayOpen: boolean;
  readonly shareOverlayPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }
  ];

  deleting: boolean;

  constructor(private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.confirmationDialogService.okClicked.subscribe((deleteParams) => {
      if (deleteParams.id === this.note.id) {
        this.shareOverlayOpen = false;
        this.deleting = true;
      }
    });

    this.confirmationDialogService.cancelClicked.subscribe(() => {
      this.shareOverlayOpen = false;
    });
  }
}

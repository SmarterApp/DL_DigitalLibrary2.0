import { Component, Input } from '@angular/core';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@Component({
  selector: 'sbdl-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  btnOkText: string;

  @Input()
  btnCancelText: string;

  @Input()
  id: number;

  constructor(private confirmationService: ConfirmationDialogService) { }

  public accept() {
    this.confirmationService.accept(this.id);
  }

  public decline() {
    this.confirmationService.close();
  }
}

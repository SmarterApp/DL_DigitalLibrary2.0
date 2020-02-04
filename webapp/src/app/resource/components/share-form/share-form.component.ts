import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'sbdl-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: ['./share-form.component.scss']
})
export class ShareFormComponent {

  @Input()
  value: string;

  @Output()
  closed: EventEmitter<void> = new EventEmitter();

  copied$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  onCopyButtonClick(input: HTMLInputElement, button: HTMLElement): void {
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);
    button.focus();
    // input.setSelectionRange(0, 0);
    this.copied$.next(true);
    setTimeout(() => {
      this.copied$.next(false);
      // this.changeDetectorReference.detectChanges();
    }, 1000);
  }
}

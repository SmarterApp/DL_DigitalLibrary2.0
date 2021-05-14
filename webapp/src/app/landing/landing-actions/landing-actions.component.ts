import { Component,
  OnInit, 
  Input, 
  ViewChild, 
  ViewContainerRef, 
  ElementRef, 
  EventEmitter,
  Output } from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';

@Component({
  selector: 'sbdl-landing-actions',
  templateUrl: './landing-actions.component.html'
})
export class LandingActionsComponent implements OnInit {

  @Input()
  landingType: string;

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

  @Output()
  printPage = new EventEmitter();

  shareValue: string;
  shareOverlayOpen: boolean;
  readonly shareOverlayPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.shareValue = `${location.protocol}//${location.host}/landing/${this.landingType}`;
  }

  printLandingPage () {
    this.printPage.emit();
  }

}

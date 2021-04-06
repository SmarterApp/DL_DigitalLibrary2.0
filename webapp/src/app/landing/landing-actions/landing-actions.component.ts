import { Component, OnInit, Input, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import {ConnectedPosition} from '@angular/cdk/overlay';

@Component({
  selector: 'sbdl-landing-actions',
  templateUrl: './landing-actions.component.html',
  styleUrls: ['./landing-actions.component.scss']
})
export class LandingActionsComponent implements OnInit {

  @Input()
  resourceType: string;

  @ViewChild('shareButton', { static: false, read: ViewContainerRef })
  shareContainer: ViewContainerRef;

  @ViewChild('sharePopover', { static: false })
  sharePopover: ElementRef;

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
    this.shareValue = `${location.protocol}//${location.host}/landing/${this.resourceType}`;
  }

}

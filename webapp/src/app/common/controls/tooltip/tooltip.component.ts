import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnMount } from '../dynamic/interfaces';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverService } from '../popover/popover.service';

/**
 * A specifically structured popover which has specific functionality and format.  Used for
 * displaying additional information about content inside a popover.
 */
@Component({
  selector: 'sbdl-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, OnMount {

  /**
   * The title of this tooltip.
   */
  @Input()
  title: string;

  /**
   * Tooltip text.
   */
  @Input()
  text: string;

  /**
   * Url to click to find more info about the tool tip text.
   */
  @Input()
  readMoreUrl: string;

  dynamicLoadedContent: string;
  popover: PopoverComponent;
  popoverCloseSubscription: Subscription;

  @ViewChild('tooltip', { static: false })
  tooltipContainer: ElementRef;

  @ViewChild('tooltipPopover', { static: false })
  tooltipPopover: ElementRef;

  dynamicOnMount(attrs?: Map<string, string>, content?: string, element?: Element): void {
    this.title = attrs.get('title');
    this.text = attrs.get('text');
    this.readMoreUrl = attrs.get('readmoreurl');
    this.dynamicLoadedContent = content;
  }

  ngOnInit() {
  }

  constructor(private popoverService: PopoverService) {
  }

  openTooltipPopover() {
    this.popover = this.popoverService.openOnBody(this.tooltipPopover, {
      offset: this.offset(this.tooltipContainer.nativeElement),
      cssClass: 'tooltip',
      placement: 'top'
    });
    this.popover.onClose.subscribe(this.close);
  }

  close = () => {
    if (this.popoverCloseSubscription) {
      this.popoverCloseSubscription.unsubscribe();
    }

    this.popoverCloseSubscription = undefined;
    this.popover = undefined;
    requestAnimationFrame(() => this.tooltipContainer.nativeElement.focus());
  }

  private offset(el) {
    const rect = el.getBoundingClientRect();
    const width = rect.right - rect.left;

    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft + width / 2 + 24 };
  }
}

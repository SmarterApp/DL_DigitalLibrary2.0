import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  dynamicOnMount(attrs?: Map<string, string>, content?: string, element?: Element): void {
    this.title = attrs.get('title');
    this.text = attrs.get('text');
    this.readMoreUrl = attrs.get('readmoreurl');
    this.dynamicLoadedContent = content;
  }

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

  @ViewChild('tooltip', { static: false })
  tooltipContainer: ElementRef;

  @ViewChild('tooltipPopover', { static: false })
  tooltipPopover: ElementRef;


  ngOnInit() {
  }

  constructor(private popoverService: PopoverService) {
  }

  openTooltipPopover() {
    this.popover = this.popoverService.openOnBody(this.tooltipPopover,{ 
      offset: this.offset(this.tooltipContainer.nativeElement), 
      cssClass: 'tooltip', 
      placement: 'top' 
    }); 
  }

  close() {
    if(this.popover) {
      this.popover.close();
    }

    this.popover = undefined;
  }

  private offset(el) {
    const rect = el.getBoundingClientRect(),
    width = rect.right - rect.left,
    
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft + width/2 + 24 }
  }
}

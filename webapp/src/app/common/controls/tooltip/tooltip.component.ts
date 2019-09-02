import { Component, OnInit, Input, HostListener, ElementRef, ViewChildren, AfterViewInit, ApplicationRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TooltipDirective } from 'ng2-tooltip-directive';
import { OnMount } from '../dynamic/interfaces';
import { PopoverService } from '../popover/popover.service';

@Component({
  selector: 'sbdl-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, AfterViewInit, OnMount {
  dynamicOnMount(attrs?: Map<string, string>, content?: string, element?: Element): void {
    // const text = attrs.get('text');
    this.text = attrs.get('text');
    this.dynamicLoadedContent = content;
  }

  @Input()
  text: string;

  dynamicLoadedContent: string;

  @ViewChildren(TooltipDirective) 
  tooltipDirective; 

  @ViewChild('tooltip', { static: false })
  tooltipContainer: ElementRef;

  @ViewChild('tooltipPopover', { static: false })
  tooltipPopover: ElementRef;

  tooltip: TooltipDirective;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tooltip = this.tooltipDirective.find(elem => elem.id === "tooltip"); 
  }

  constructor(private popoverService: PopoverService) {
  }

  openTooltipPopover() {
    this.popoverService.openOnBody(this.tooltipPopover, this.offset(this.tooltipContainer.nativeElement), 'tooltip', 'top'); 
  }

  offset(el) {
    const rect = el.getBoundingClientRect(),
    width = rect.right - rect.left,
    
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft + width/2 + 24 }
  }
}

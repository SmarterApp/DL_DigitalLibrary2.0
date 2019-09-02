import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { OnMount } from '../dynamic/interfaces';
import { PopoverService } from '../popover/popover.service';

@Component({
  selector: 'sbdl-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, OnMount {
  dynamicOnMount(attrs?: Map<string, string>, content?: string, element?: Element): void {
    // const text = attrs.get('text');
    this.text = attrs.get('text');
    this.dynamicLoadedContent = content;
  }

  @Input()
  text: string;

  dynamicLoadedContent: string;

  @ViewChild('tooltip', { static: false })
  tooltipContainer: ElementRef;

  @ViewChild('tooltipPopover', { static: false })
  tooltipPopover: ElementRef;


  ngOnInit() {
  }

  constructor(private popoverService: PopoverService) {
  }

  openTooltipPopover() {
    this.popoverService.openOnBody(this.tooltipPopover,{ 
      offset: this.offset(this.tooltipContainer.nativeElement), 
      cssClass: 'tooltip', 
      placement: 'top' 
    }); 
  }

  private offset(el) {
    const rect = el.getBoundingClientRect(),
    width = rect.right - rect.left,
    
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft + width/2 + 24 }
  }
}

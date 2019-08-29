import { Component, OnInit, Input, HostListener, ElementRef, ViewChildren, AfterViewInit, ApplicationRef } from '@angular/core';
import { TooltipDirective } from 'ng2-tooltip-directive';
import { OnMount } from '../dynamic/interfaces';

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

  tooltip: TooltipDirective;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tooltip = this.tooltipDirective.find(elem => elem.id === "tooltip"); 
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    const tooltipComponent = this.tooltip.componentRef;

    if(tooltipComponent) {  
      // this.tooltip.hide() is not working, so rolling with a custom impl for now.
      if (!tooltipComponent || this.tooltip.isTooltipDestroyed) {
        return;
      }

      this.appRef.detachView(tooltipComponent.hostView);
      tooltipComponent.destroy();
    }
  }

  constructor(private appRef: ApplicationRef) {
  }
}

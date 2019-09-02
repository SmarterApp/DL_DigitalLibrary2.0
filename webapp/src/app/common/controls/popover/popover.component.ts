import { Component, OnInit, ElementRef, HostListener, Output, EventEmitter, AfterViewInit, Input, TemplateRef, HostBinding, ViewChildren, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { PopoverOptions } from './popover.service';

@Component({
  selector: 'sbdl-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }

  @HostBinding("style")
  cssVarStyle: SafeStyle;

  @Output()
  onClose = new EventEmitter();

  /**
   * The ng-template to display in the popover.
   */
  @Input()
  template: any;

  @Input()
  options = <PopoverOptions>{};

  @HostListener('window:resize', ['$event'])
  onResize(event?) {    
    this.onClose.emit();
  }

  @ViewChild('container', { static: false })
  container: ElementRef;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    const offset = this.options.offset;
    if(offset) {
      const rect= this.container.nativeElement.getBoundingClientRect();
      const height = rect.bottom - rect.top;
      const top = this.options.placement === 'top' ? offset.top - height - 28 : offset.top;
      
      setTimeout( () => 
        { this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(`position: absolute; top: ${top}px; left: ${offset.left}px`); }, 0
      );
    }
  }

  @HostListener('document:click', ['$event.path'])
  onClickOutside($event: Array<any>) {
    const elementRefInPath = $event.find(node => node.className && node.className.indexOf && node.className.indexOf('popover-container') !== -1);
    if (!elementRefInPath) {      
      this.onClose.emit();
    } 
  }
}

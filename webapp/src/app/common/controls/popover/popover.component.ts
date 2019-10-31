import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { PopoverOptions } from './popover.service';

@Component({
  selector: 'sbdl-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements AfterViewInit {

  @HostBinding('style')
  cssVarStyle: SafeStyle;

  @Output()
  onClose = new EventEmitter();

  /**
   * The ng-template to display in the popover.
   */
  @Input()
  template: any;

  @Input()
  options = {} as PopoverOptions;

  @ViewChild('container', { static: false })
  container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.close();
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    const offset = this.options.offset;
    if (offset) {
      const rect = this.container.nativeElement.getBoundingClientRect();
      const height = rect.bottom - rect.top;
      const top = this.options.placement === 'top' ? offset.top - height - 28 : offset.top;

      setTimeout( () => {
        this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(`position: absolute; top: ${top}px; left: ${offset.left}px`); }, 0);
    }
  }

  @HostListener('document:click', ['$event.path'])
  onClickOutside($event: Array<any>) {
    if (!$event) {
      this.close();
      return;
    }

    const elementRefInPath = $event.find(
      node => node.className && node.className.indexOf && node.className.indexOf('popover-container') !== -1);
    if (!elementRefInPath) {
      this.close();
    }
  }

  close() {
    this.onClose.emit();
  }
}

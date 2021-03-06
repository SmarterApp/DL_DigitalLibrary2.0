import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { PopoverOptions } from './popover.service';
import {take} from "rxjs/operators";
import {MathJaxService} from "../../mathjax.service";

@Component({
  selector: 'sbdl-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements AfterViewInit {

  public isVisible: boolean;
  top: number;

  @HostBinding('style')
  cssVarStyle: SafeStyle;

  @Output()
  onClose = new EventEmitter();

  @ViewChild('closeButton', {static: false})
  closeButton: ElementRef;

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

  constructor(
    @Inject('Window') private window: Window,
    private sanitizer: DomSanitizer,
    private mathJaxService : MathJaxService) { }

  ngAfterViewInit(): void {
    this.mathJaxService.typeset().pipe(take(1)).subscribe(() => {});

    const offset = this.options.offset;
    if (offset) {

      const rect = this.container.nativeElement.getBoundingClientRect();
      const height = rect.bottom - rect.top;
      this.top = this.options.placement === 'top' ? offset.top - height - 28 : offset.top;
      const position = this.options.isScrollable ? 'position: absolute' : 'position: fixed; z-index: 10';

      setTimeout( () => {
        this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(`${position}; top: ${this.top}px; left: ${offset.left}px`);
        this.isVisible = true;
      }, 0);
      setTimeout(() => {
        if (!this.inView(rect, this.options.offset)) {
          this.container.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
        this.closeButton.nativeElement.focus();
      });
    }
  }

  @HostListener('document:click', ['$event.path'])
  onClickOutside($event: Array<any>) {
    if (this.isVisible) {
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
  }

  inView(bounding: DOMRect, offset: any): boolean {
    return (offset.actualTop - bounding.height >= 0 &&
            offset.actualLeft - (bounding.width / 2) >= 0 &&
            offset.actualLeft + (bounding.width / 2) <= this.window.innerWidth);
  }

  close() {
    this.onClose.emit();
  }
}

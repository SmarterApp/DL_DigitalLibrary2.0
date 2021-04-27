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

      //TODOJR: cleanup code
      const rect = this.container.nativeElement.getBoundingClientRect();
      const height = rect.bottom - rect.top;
      this.top = this.options.placement === 'top' ? offset.top - height - 28 : offset.top;
      const position = this.options.isScrollable ? 'position: absolute' : 'position: fixed; z-index: 10';

      console.log('this.window.innerHeight:' + this.window.innerHeight);
      //this.top = this.window.innerHeight;

      const toppie = this.top
      setTimeout( () => {
        this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(`${position}; top: ${toppie}px; left: ${offset.left}px`);
        //this.cssVarStyle = this.sanitizer.bypassSecurityTrustStyle(`position: fixed; z-index: 10; top: ${top}px; left: ${offset.left}px`);
        this.isVisible = true;
      }, 0);
      setTimeout(() => {
        console.log("this.options.offset");
        console.log(this.options.offset);
        if (!this.inView(rect, this.options.offset as DOMRect)) {
          console.log("scrollIntoView");
          this.container.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
          //this.container.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
        this.closeButton.nativeElement.focus();
        console.log("done");
        console.log("done");
        console.log("done");
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

  inView(bounding: DOMRect, offset: DOMRect): boolean {
    console.log("bounding: DOMRect");
    console.log(bounding);
    console.log("offset");
    console.log(offset);
    console.log("bounding.top >= 0:" + (bounding.top >= 0)) ;
    console.log("bounding.left >= 0:" + (bounding.left >= 0)) ;
    console.log("bounding.bottom <= this.window.innerHeight:" + (bounding.bottom <= this.window.innerHeight));
    console.log("this.window.innerHeight:" + (this.window.innerHeight));
    console.log("bounding.right <= this.window.innerWidth:" + (bounding.right <= this.window.innerWidth));
    console.log("this.window.innerWidth:" + (this.window.innerWidth));
    return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= this.window.innerHeight &&
            bounding.right <= this.window.innerWidth);
  }

  close() {
    this.onClose.emit();
  }
}

import { Component, OnInit, ElementRef, HostListener, Output, EventEmitter, AfterViewInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sbdl-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }

  private parentNode: any;

  @Output()
  onClose = new EventEmitter();

  @Input()
  template;

  constructor(
    private _element: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.parentNode = this._element.nativeElement.parentNode;
  }

  @HostListener('document:click', ['$event.path'])
  onClickOutside($event: Array<any>) {
    const elementRefInPath = $event.find(node => node === this.parentNode);
    if (!elementRefInPath) {
      this.onClose.emit();
    }
  }
}

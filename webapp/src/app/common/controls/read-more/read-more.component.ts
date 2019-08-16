import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, HostBinding, HostListener } from '@angular/core';
import { getCssVar } from '../../utils';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

/**
 * This component shows a "more" link and truncates the given text if the length is more 
 * than the MaxNumberOfCharacters.,  When expanded, "more" changes to "less".
 */
@Component({
  selector: 'sbdl-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit, AfterViewInit {
  /**
   * The text to truncate if the length is over the MaxNumberOfCharacters
   */
  @Input()
  set text(value: string) {
    this._text = value;
    this.onTextChanges();
  }

  get text(): string {
    return this._text;
  }

  @ViewChild('textContainer', { static: true })
  textContainer: ElementRef;
  
  private maxHeightInPx = 44;

  cssVarStyle: SafeStyle;
  collapsed: boolean = true;
  collapsible: boolean = false;

  private _text: string;

  constructor() { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.maxHeightInPx = getCssVar('--max-height', this.textContainer.nativeElement);
    this.onTextChanges();
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  private onTextChanges() {
    if(this.textContainer && this.textContainer.nativeElement) {
      const contentHeight = this.textContainer.nativeElement.offsetHeight;
      this.collapsible = contentHeight > this.maxHeightInPx;
      this.collapsed = this.collapsible;
    }
  }

}

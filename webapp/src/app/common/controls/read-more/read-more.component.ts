import { Component, OnInit, Input, OnChanges } from '@angular/core';

/**
 * This component shows a "more" link and truncates the given text if the length is more 
 * than the MaxNumberOfCharacters.,  When expanded, "more" changes to "less".
 */
@Component({
  selector: 'sbdl-read-more',
  templateUrl: './read-more.component.html'
})
export class ReadMoreComponent implements OnInit {
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

  readonly MaxNumberOfCharacters = 168;

  displayText: string;
  collapsed: boolean = true;
  collapsible: boolean = false;

  private _text: string;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.toggleDisplayText();
  }

  private onTextChanges() {
    this.collapsible = this.text && this.text.length > this.MaxNumberOfCharacters;
    this.toggleDisplayText();
  }

  private toggleDisplayText() {
    this.displayText = this.text && this.collapsed && this.collapsible
      ? this.text.substring(0, this.MaxNumberOfCharacters) + '...'
      : this.text;
  }
}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'sbdl-read-more',
  templateUrl: './read-more.component.html'
})
export class ReadMoreComponent implements OnInit, OnChanges {
  @Input()
  text: string;

  readonly MaxNumberOfCharacters = 168;
  displayText: string;

  collapsed: boolean = true;

  @Input()
  truncated: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.truncated = this.text && this.text.length > this.MaxNumberOfCharacters;
    this.displayText = this.text != null && this.collapsed
      ? this.text.substring(0, this.MaxNumberOfCharacters) + '...'
      : this.text;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.ngOnChanges();
  }
}

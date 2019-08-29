import { Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { DynamicHTMLRef, DynamicHTMLRenderer } from './dynamic-html-render';
  
// Created by following guide from: https://www.arka.com/blog/dynamically-generate-angular-components-from-external-html
// This component allows dyanmic angular components to be rendered from a string input.
  @Component({
    selector: 'dynamic-html',
    template: '',
  })
  export class DynamicHTMLComponent implements DoCheck, OnChanges, OnDestroy {
    @Input() content: string;
  
    private ref: DynamicHTMLRef = null;
  
    constructor(
      private renderer: DynamicHTMLRenderer,
      private elementRef: ElementRef,
    ) { }
  
    ngOnChanges(_: SimpleChanges) {
      if (this.ref) {
        this.ref.destroy();
        this.ref = null;
      }
      if (this.content && this.elementRef) {
        this.ref = this.renderer.renderInnerHTML(this.elementRef, this.content);
      }
    }
  
    ngDoCheck() {
      if (this.ref) {
        this.ref.check();
      }
    }
  
    ngOnDestroy() {
      if (this.ref) {
        this.ref.destroy();
        this.ref = null;
      }
    }
  }
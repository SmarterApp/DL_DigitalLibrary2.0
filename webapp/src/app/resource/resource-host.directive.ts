import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sbdlResourceHost]'
})
export class ResourceHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

import { Directive, ViewContainerRef } from '@angular/core';

/***
 * This is just a empty directive container which will host the correct ResourceComponent.
 */
@Directive({
  selector: '[sbdlResourceHost]'
})
export class ResourceHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

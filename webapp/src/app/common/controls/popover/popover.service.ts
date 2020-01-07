import { Injectable, ComponentFactoryResolver, Injector, ViewContainerRef,
  ReflectiveInjector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { PopoverComponent } from './popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  open(viewContainerRef: ViewContainerRef, template: any): PopoverComponent {
    viewContainerRef.clear();

    const popOverFactory = this.resolver.resolveComponentFactory(PopoverComponent);
    const injector = ReflectiveInjector.resolveAndCreate([], this.injector);

    const popoverRef = viewContainerRef.createComponent(popOverFactory, 0, injector);
    popoverRef.instance.template = template;

    setTimeout(() => {
      popoverRef.instance.onClose.subscribe(() => {
        this.appRef.detachView(popoverRef.hostView);
        popoverRef.destroy();
      });
    }, 0);

    return popoverRef.instance;
  }

  openOnBody(template: any, options: PopoverOptions): PopoverComponent {
      // Create a component reference from the component
      const popoverRef = this.resolver
        .resolveComponentFactory(PopoverComponent)
        .create(this.injector);

      popoverRef.instance.template = template;
      popoverRef.instance.options = options;

      // Attach component to the appRef so that it's inside the ng component tree
      this.appRef.attachView(popoverRef.hostView);

      // Get DOM element from component
      const domElem = (popoverRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

      // Append DOM element to the body
      document.body.appendChild(domElem);

      setTimeout(() => {
        popoverRef.instance.onClose.subscribe(() => {
          this.appRef.detachView(popoverRef.hostView);
          popoverRef.destroy();
        });
      }, 0);

      // FIXME: Not super happy with this. We need to wait until the element is
      // actually be attached to the DOM and positioned correctly before
      // scrolling it into view or focusing it. This feels like it should live in
      // a component lifecycle event rather than hard-coding a 100ms timeout and
      // hoping everything is ready in time but putting this logic in the
      // PopoverComponent.ngAfterViewInit hook is too early.
      setTimeout(() => {
        // Scroll our element into view (if needed)
        if (!this.elementInView(domElem)) {
          domElem.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
        domElem.focus();
      }, 100);

      return popoverRef.instance;
  }

  elementInView(elem: HTMLElement): boolean {
    const bounding = elem.getBoundingClientRect();
    return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= window.innerHeight &&
            bounding.right <= window.innerWidth);
  }

}

export interface PopoverOptions {
  /**
   *  How to place the popover.
   */
  placement: 'top' | 'bottom';

  /**
   * Css class to apply to the popover container.
   */
  cssClass: 'tooltip';

  /**
   * When attached to the body, the offset in which the popover should display.
   */
  offset: Offset;

}

export interface Offset {
  top: number;
  left: number;
}

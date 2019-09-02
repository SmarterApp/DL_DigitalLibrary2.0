import { Injectable, ComponentFactoryResolver, Injector, ViewContainerRef, ReflectiveInjector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { PopoverComponent } from './popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  open(viewContainerRef: ViewContainerRef, template: any) {
    viewContainerRef.clear();

    const popOverFactory = this.resolver.resolveComponentFactory(PopoverComponent)
    const injector = ReflectiveInjector.resolveAndCreate([], this.injector);

    const popover = viewContainerRef.createComponent(popOverFactory, 0, injector);
    popover.instance.template = template;
    
    setTimeout(() => {
      popover.instance.onClose.subscribe(() => { 
        this.appRef.detachView(popover.hostView);
        popover.destroy();
      });
    }, 0);
  }

  openOnBody(template: any, offset: any, cssClass?: string, placement?: string) {
        // Create a component reference from the component 
      const popoverRef = this.resolver
        .resolveComponentFactory(PopoverComponent)
        .create(this.injector);

      popoverRef.instance.template = template;
      popoverRef.instance.placement = placement;
      popoverRef.instance.offset = offset;
      popoverRef.instance.cssClass = cssClass;
      

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
  }
}

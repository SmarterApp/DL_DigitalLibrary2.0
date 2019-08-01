import { Injectable, ComponentFactoryResolver, Injector, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { PopoverComponent } from './popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector) { }

  open(viewContainerRef: ViewContainerRef, template: any) {
    viewContainerRef.clear();

    const popOverFactory = this._resolver.resolveComponentFactory(PopoverComponent)
    const injector = ReflectiveInjector.resolveAndCreate([], this._injector);

    const popover = viewContainerRef.createComponent(popOverFactory, 0, injector);
    popover.instance.template = template;
    popover.instance.onClose.subscribe(() => popover.destroy());
  }
}

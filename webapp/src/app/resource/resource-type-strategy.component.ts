import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { ResourceType } from '../data/resource/model/resource-type.enum';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { ResourceComponent } from './resource-component.interface';
import { ResourceHostDirective } from './resource-host.directive';

@Component({
  selector: 'sbdl-resource-type-strategy',
  template: `<ng-template sbdlResourceHost></ng-template>`
})
export class ResourceTypeStrategyComponent implements OnInit {
  componentMap = new Map<ResourceType, Type<ResourceComponent>>();
  @ViewChild(ResourceHostDirective, {static: true}) hostDirective: ResourceHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
    this.componentMap.set(ResourceType.Instructional, InstructionalResourceComponent);
  }

  ngOnInit() {
    const component = this.componentMap.get(ResourceType.Instructional);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.hostDirective.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
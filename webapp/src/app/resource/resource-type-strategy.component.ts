import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { ResourceType } from '../data/resource/model/resource-type.enum';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { ResourceComponent } from './resource-component.interface';
import { ResourceHostDirective } from './resource-host.directive';
import { ActivatedRoute } from '@angular/router';

/***
 * This component will render the correct resource component based on the determined resource type.
 * Use the componentMap to assign a resource compoenent implementation to a ResourceType.
 */
@Component({
  selector: 'sbdl-resource-type-strategy',
  template: `<ng-template sbdlResourceHost></ng-template>`
})
export class ResourceTypeStrategyComponent implements OnInit {
  readonly componentMap: Map<ResourceType, Type<ResourceComponent>> = new Map([
    [ ResourceType.Instructional, InstructionalResourceComponent ]
  ]);

  @ViewChild(ResourceHostDirective, {static: true}) hostDirective: ResourceHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const component = this.componentMap.get(this.route.snapshot.data.resource.resourceType);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.hostDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<ResourceComponent>componentRef.instance).model = this.route.snapshot.data.resource;
  }
}
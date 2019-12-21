import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceType } from '../data/resource/model/resource-type.enum';
import { InstructionalResourceComponent } from './instructional/instructional-resource.component';
import { PlaylistResourceComponent } from './playlist/playlist-resource.component';
import { ProfessionalResourceComponent } from './professional/professional-resource.component';
import { ResourceHostDirective } from './resource-host.directive';
import { ResourceComponent } from './resource.component';
import { StrategyResourceComponent } from './strategy/strategy-resource.component';

/***
 * This component will render the correct resource component based on the determined resource type.
 * Use the componentMap to assign a resource compoenent implementation to a ResourceType.
 */
@Component({
  selector: 'sbdl-resource-type-strategy',
  template: `<ng-template sbdlResourceHost></ng-template>`
})
export class ResourceTypeStrategyComponent implements OnInit {
  readonly componentMap: Map<ResourceType, Type<ResourceComponent>> = new Map<ResourceType, Type<ResourceComponent>>([
    [ ResourceType.Instructional, InstructionalResourceComponent ],
    [ ResourceType.ProfessionalLearning, ProfessionalResourceComponent ],
    [ ResourceType.AccessibilityStrategy, StrategyResourceComponent ],
    [ ResourceType.FormativeStrategy, StrategyResourceComponent ],
    [ ResourceType.ConnectionsPlaylist, PlaylistResourceComponent ]
  ]);

  @ViewChild(ResourceHostDirective, {static: true}) hostDirective: ResourceHostDirective;

  private componentInst: ResourceComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const component = this.componentMap.get(data.resource.type);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

      const viewContainerRef = this.hostDirective.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);

      componentRef.instance.resource = data.resource;
      componentRef.instance.notes = data.notes;
      this.componentInst = componentRef.instance;
    });

    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.print !== undefined) {
        this.componentInst.printingModeChanged(queryParams.print);
      }

      if (queryParams.viewNotes !== undefined) {
        this.componentInst.notesVisibilityChanged(queryParams.viewNotes);
      }
    });
  }
}

import {AfterViewInit, Component, ComponentFactoryResolver, Inject, OnDestroy, OnInit, Type, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceType} from '../data/resource/model/resource-type.enum';
import {InstructionalResourceComponent} from './instructional/instructional-resource.component';
import {PlaylistResourceComponent} from './playlist/playlist-resource.component';
import {ProfessionalResourceComponent} from './professional/professional-resource.component';
import {ResourceHostDirective} from './resource-host.directive';
import {ResourceComponent} from './resource.component';
import {StrategyResourceComponent} from './strategy/strategy-resource.component';
import {combineLatest, Subject} from 'rxjs';
import {UserService} from '../data/user/user.service';
import {map, takeUntil, tap} from 'rxjs/operators';
import {MATHJAX_INST} from '../common/mathjax';

const showPrintingOptionsParameter = 'print';
const showNotesParameter = 'viewNotes';
const readingModeParameter = 'expand';

const componentTypeByResourceType: Map<ResourceType, Type<ResourceComponent>> = new Map<ResourceType, Type<ResourceComponent>>([
  [ResourceType.Instructional, InstructionalResourceComponent],
  [ResourceType.ProfessionalLearning, ProfessionalResourceComponent],
  [ResourceType.AccessibilityStrategy, StrategyResourceComponent],
  [ResourceType.FormativeStrategy, StrategyResourceComponent],
  [ResourceType.ConnectionsPlaylist, PlaylistResourceComponent]
]);

/***
 * This component will render the correct resource component based on the determined resource type.
 * Use the componentMap to assign a resource compoenent implementation to a ResourceType.
 */
@Component({
  selector: 'sbdl-resource-type-strategy',
  template: `<ng-template sbdlResourceHost></ng-template>`
})
export class ResourceTypeStrategyComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild(ResourceHostDirective, {static: true})
  hostDirective: ResourceHostDirective;

  private readonly _componentDestroyed$: Subject<void> = new Subject();
  private readonly _destroyed$: Subject<void> = new Subject();
  private typesetPromise: Promise<void>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MATHJAX_INST) private mathjax: MathJax,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    const viewContainerReference = this.hostDirective.viewContainerRef;

    combineLatest(
      this.route.data.pipe(
        tap(() => {
          viewContainerReference.clear();
          this._componentDestroyed$.next();
        }),
        map(data => {
          const component = componentTypeByResourceType.get(data.resource.type);
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
          const componentReference = viewContainerReference.createComponent(componentFactory);
          componentReference.instance.resource = data.resource;
          componentReference.instance.notes = data.notes;
          componentReference.instance.readingModeChanged.pipe(
            takeUntil(this._componentDestroyed$)
          ).subscribe(value => {
            this.setQueryParameter(readingModeParameter, value);
          });
          componentReference.instance.printModeChanged.pipe(
            takeUntil(this._componentDestroyed$)
          ).subscribe(value => {
            this.setQueryParameter(showPrintingOptionsParameter, value);
          });
          componentReference.instance.noteModeChanged.pipe(
            takeUntil(this._componentDestroyed$)
          ).subscribe(value => {
            this.setQueryParameter(showNotesParameter, value);
          });
          return componentReference;
        })
      ),
      this.route.queryParams,
      this.userService.authenticated
    ).pipe(
      takeUntil(this._destroyed$)
    ).subscribe(([
      componentReference,
      queryParams,
      authenticated
    ]) => {
      componentReference.instance.showReadingMode = queryParams[readingModeParameter] === 'true';
      componentReference.instance.showPrintingOptions = queryParams[showPrintingOptionsParameter] === 'true';
      componentReference.instance.showNotes = queryParams[showNotesParameter] === 'true' && authenticated;
    });
  }

  ngAfterViewInit() {
    if (this.typesetPromise) {
      this.typesetPromise = this.typesetPromise.then(this.mathjax.typesetPromise);
    } else {
      this.typesetPromise = this.mathjax.typesetPromise();
    }
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  private setQueryParameter(parameterName: string, value: any): void {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      replaceUrl: true,
      queryParamsHandling: 'merge',
      queryParams: {
        [parameterName]: value
      }
    });
  }
}
